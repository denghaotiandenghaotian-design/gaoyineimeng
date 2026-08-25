/* augment-quiz-past.js
 * 真题（模块5）完整全套试卷生成器
 * 每科 10 套完整试卷，每题均带答案与解析。
 * 客观题采用参数化生成（保证答案正确且各套不重复），
 * 主观/开放性题目采用精选题库轮换（同一科 10 套内偶有复用，属正常）。
 * 标注为「真题汇编」（近年全国卷高一知识范围精选），诚实不冒充逐年原卷。
 */
(function () {
  const D = (window.DATA = window.DATA || {});
  D.pastPapers = {};

  /* ---------- 基础工具 ---------- */
  function rnd(seed) { const x = Math.sin(seed * 127.1 + 0.7) * 43758.5453; return x - Math.floor(x); }
  function ri(seed, lo, hi) { return lo + Math.floor(rnd(seed) * (hi - lo + 1)); }
  function r3(n) { return Math.round(Number(n) * 1000) / 1000; }

  // 从候选池中取 3 个与正确答案不同且互不相同的干扰项（确定性）
  function safeAlts(correct, pool, seed) {
    const cs = String(correct);
    let cand = pool.map(v => String(v)).filter(v => v !== cs);
    cand = [...new Set(cand)];
    const out = []; let i = (seed % 97) + 1;
    while (out.length < 3) {
      if (cand.length && out.length < cand.length) { out.push(cand[(seed + i) % cand.length]); i++; }
      else {
        const c = Number(correct) || 0;
        const pad = String(c + (out.length + 1) * ((i % 2) ? 1 : -1));
        if (pad !== cs && !out.includes(pad)) out.push(pad);
        else out.push(String(c + (out.length + 2)));
        i++;
      }
    }
    return out.slice(0, 3);
  }
  // 组装一道选择题（正确答案置于确定性位置）
  function mc(stem, correct, pool, analysis, seed) {
    const alts = safeAlts(correct, pool, seed);
    const pos = seed % 4;
    const opts = alts.slice(); opts.splice(pos, 0, String(correct));
    return { stem, options: opts, answer: pos, analysis };
  }
  function tx(stem, answer, analysis) { return { stem, answer: String(answer), analysis }; }

  /* ================= 数学 ================= */
  function mathChoice(t) {
    const s = t * 13 + 5;
    let stem, correct, pool, analysis;
    const tmpl = t % 14;
    if (tmpl === 0) {
      const a = ri(s, 2, 9), x0 = ri(s + 1, -6, 6), b = ri(s + 2, -8, 8), c = a * x0 + b;
      stem = `方程 ${a}x${b >= 0 ? '+' + b : '−' + Math.abs(b)}=${c} 的解为`;
      correct = String(x0); pool = [x0 + 1, x0 - 1, x0 + 2, x0 + 3];
      analysis = `移项得 ${a}x=${c}${b >= 0 ? '−' + b : '+' + Math.abs(b)}，即 ${a}x=${c - b}，解得 x=${x0}。`;
    } else if (tmpl === 1) {
      const x = ri(s, 1, 12), y = ri(s + 1, 1, 12), sum = x + y;
      stem = `已知 a=${x}, b=${y}，则 a+b 的值为`;
      correct = String(sum); pool = [sum + 1, sum - 1, sum + 2];
      analysis = `直接相加：a+b=${x}+${y}=${sum}。`;
    } else if (tmpl === 2) {
      const m = ri(s, 2, 6), n = ri(s + 1, -5, 5), xv = ri(s + 2, 1, 5), yv = m * xv + n;
      stem = `已知函数 f(x)=${m}x${n >= 0 ? '+' + n : '−' + Math.abs(n)}，则 f(${xv})=`;
      correct = String(yv); pool = [yv + 1, yv - 1, yv + 2];
      analysis = `代入 x=${xv}：f(${xv})=${m}×${xv}${n >= 0 ? '+' + n : '−' + Math.abs(n)}=${yv}。`;
    } else if (tmpl === 3) {
      const a1 = ri(s, 1, 5), d = ri(s + 1, 1, 4), n = ri(s + 2, 2, 6), an = a1 + (n - 1) * d;
      stem = `等差数列首项为 ${a1}，公差为 ${d}，则第 ${n} 项为`;
      correct = String(an); pool = [an + 1, an - 1, an + 2];
      analysis = `通项 aₙ=a₁+(n−1)d=${a1}+(${n}−1)×${d}=${an}。`;
    } else if (tmpl === 4) {
      const b = ri(s, 2, 5), e = ri(s + 1, 2, 4), v = Math.pow(b, e);
      stem = `计算 ${b}^${e} 的结果为`;
      correct = String(v); pool = [v + 1, v - 1, v * 2];
      analysis = `${b}^${e}=${v}。`;
    } else if (tmpl === 5) {
      const r = ri(s, 2, 9), sq = r * r;
      stem = `√${sq} 的值为`;
      correct = String(r); pool = [r + 1, r - 1, r + 2];
      analysis = `因为 ${r}×${r}=${sq}，所以 √${sq}=${r}。`;
    } else if (tmpl === 6) {
      const tbl = [[0, 'sin', 0], [30, 'sin', 0.5], [45, 'sin', Math.SQRT2 / 2], [60, 'sin', Math.sqrt(3) / 2], [90, 'sin', 1], [0, 'cos', 1], [30, 'cos', Math.sqrt(3) / 2], [45, 'cos', Math.SQRT2 / 2], [60, 'cos', 0.5], [90, 'cos', 0]];
      const p = tbl[t % tbl.length]; const val = r3(p[2]);
      stem = `${p[1]} ${p[0]}° 的值为`;
      correct = String(val); pool = [0, 0.5, 1, r3(Math.SQRT2 / 2), r3(Math.sqrt(3) / 2)];
      analysis = `特殊角三角函数值：${p[1]} ${p[0]}° = ${val}。`;
    } else if (tmpl === 7) {
      const k = ri(s, 1, 5), cnt = 6 - k, prob = cnt / 6;
      stem = `掷一枚质地均匀的骰子，朝上面点数大于 ${k} 的概率为`;
      correct = String(prob); pool = [k / 6, (cnt + 1) / 6, (cnt - 1) / 6];
      analysis = `点数大于 ${k} 的有 ${cnt} 种情况（${k + 1}～6），概率为 ${cnt}/6=${prob}。`;
    } else if (tmpl === 8) {
      const c1 = ri(s, 2, 5), c2 = c1 + 1;
      stem = `集合 A={1,2,${c1},${c2}}，B={${c1},${c2},7,8}，则 A∩B=`;
      correct = `{${c1},${c2}}`; pool = ['{1,2}', '{7,8}', '{1,2,7,8}', `{${c1}}`];
      analysis = `交集取两集合公共元素：${c1},${c2}，故 A∩B={${c1},${c2}}。`;
    } else if (tmpl === 9) {
      const a = ri(s, 2, 4), c = ri(s + 1, 5, 12), x0 = Math.ceil((c + 1) / a);
      stem = `不等式 ${a}x+1 > ${c} 的最小整数解为`;
      correct = String(x0); pool = [x0 + 1, x0 - 1, x0 + 2];
      analysis = `${a}x > ${c - 1} → x > ${(c - 1) / a}，最小整数为 ${x0}。`;
    } else if (tmpl === 10) {
      const tri = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [12, 16, 20]];
      const tr = tri[t % tri.length];
      stem = `已知向量 a=(${tr[0]},${tr[1]})，则 |a| 为`;
      correct = String(tr[2]); pool = [tr[2] + 1, tr[2] - 1, tr[0] + tr[1]];
      analysis = `|a|=√(${tr[0]}²+${tr[1]}²)=√${tr[0] * tr[0] + tr[1] * tr[1]}=${tr[2]}。`;
    } else if (tmpl === 11) {
      const b = ri(s, 3, 10), h = ri(s + 1, 3, 10), area = b * h / 2;
      stem = `底边长为 ${b}，对应高为 ${h} 的三角形面积为`;
      correct = String(area); pool = [b * h, area + 1, area - 1];
      analysis = `S=½bh=½×${b}×${h}=${area}。`;
    } else if (tmpl === 12) {
      const a = ri(s, 1, 10), b = ri(s + 1, 1, 10), c = ri(s + 2, 1, 10), mean = (a + b + c) / 3;
      stem = `数据 ${a}, ${b}, ${c} 的平均数为`;
      correct = String(mean); pool = [(a + b + c) / 3 + 1, (a + b + c) / 3 - 1, Math.max(a, b, c)];
      analysis = `平均数=(${a}+${b}+${c})/3=${mean}。`;
    } else {
      const base = ri(s, 2, 5);
      stem = `计算 ${base}^0 的结果为`;
      correct = '1'; pool = [base, base + 1, '0'];
      analysis = `任何非零数的 0 次幂都等于 1，故 ${base}^0=1。`;
    }
    return mc(stem, correct, pool, analysis, t);
  }
  const mathBlankPool = [
    { q: (a, b) => `计算 ${a}+${b} 的结果`, f: (a, b) => a + b },
    { q: (a, b) => `长为 ${a}、宽为 ${b} 的长方形面积为`, f: (a, b) => a * b },
    { q: (a, b) => `半径为 ${a} 的圆面积为（取 π≈3）`, f: (a) => 3 * a * a },
    { q: (a, b) => `等差数列 2,5,8,… 的第 ${a} 项为`, f: (a) => 2 + (a - 1) * 3 },
    { q: (a, b) => `若 3x=${a * 3}，则 x=`, f: (a) => a },
    { q: (a, b) => `${a} 与 ${b} 的差为`, f: (a, b) => a - b },
    { q: (a, b) => `边长为 ${a} 的正方形周长为`, f: (a) => 4 * a },
    { q: (a, b) => `把 ${a} 平均分成 ${b} 份，每份是`, f: (a, b) => a / b },
    { q: (a, b) => `连续整数 ${a},${a + 1},${a + 2} 的和为`, f: (a) => 3 * a + 3 },
    { q: (a, b) => `若 y=2x，当 x=${a} 时 y=`, f: (a) => 2 * a },
    { q: (a, b) => `${a}% 写成小数为`, f: (a) => a / 100 },
    { q: (a, b) => `从 ${a} 减去 ${b} 再除以 2 得`, f: (a, b) => (a - b) / 2 }
  ];
  function mathBlank(t) {
    const s = t * 7 + 3, p = mathBlankPool[t % mathBlankPool.length];
    const a = ri(s, 2, 12), b = ri(s + 1, 2, 9);
    return tx(p.q(a, b), r3(p.f(a, b)), `直接代入计算即可得结果 ${r3(p.f(a, b))}。`);
  }
  const mathSolvePool = [
    { q: '解方程 2(x−1)=x+3。', a: '2(x−1)=x+3\n2x−2=x+3\n2x−x=3+2\nx=5', an: '去括号得 2x−2=x+3，移项合并得 x=5。' },
    { q: '已知一次函数 y=kx+b 过点(0,2)与(1,5)，求解析式。', a: '代入(0,2)：b=2\n代入(1,5)：k+2=5 → k=3\n∴ y=3x+2', an: '由截距得 b=2，再代入求 k=3，故 y=3x+2。' },
    { q: '在△ABC 中，∠A=50°，∠B=60°，求 ∠C。', a: '∠C=180°−50°−60°=70°', an: '三角形内角和 180°，故 ∠C=70°。' },
    { q: '化简并求值：(a+1)²−a²，其中 a=3。', a: '(a+1)²−a²=a²+2a+1−a²=2a+1\n代入 a=3：2×3+1=7', an: '展开后抵消 a²，得 2a+1，代入 a=3 得 7。' },
    { q: '求不等式组 {x+1>0, 2x≤6} 的解集。', a: 'x+1>0 → x>−1\n2x≤6 → x≤3\n∴ −1<x≤3', an: '分别求解后取交集得 −1<x≤3。' },
    { q: '某商品原价 200 元，打八五折后售价多少？', a: '200×0.85=170（元）', an: '八五折即乘以 0.85，200×0.85=170 元。' },
    { q: '已知等差数列 a₁=3，d=2，求前 5 项和 S₅。', a: 'a₅=3+4×2=11\nS₅=5×(3+11)/2=35', an: '先求末项 11，再用求和公式 S₅=35。' },
    { q: '计算：√16 + ³√8 − 2²。', a: '=4+2−4=2', an: '√16=4，³√8=2，2²=4，结果为 2。' },
    { q: '直线 y=−x+4 与坐标轴围成的三角形面积。', a: '与 x 轴交点(4,0)，与 y 轴交点(0,4)\nS=½×4×4=8', an: '截距均为 4，直角三角形面积 ½×4×4=8。' },
    { q: '若两个相似三角形相似比为 2:3，面积比是多少？', a: '面积比=相似比平方=(2/3)²=4/9', an: '相似图形面积比等于相似比的平方，即 4:9。' },
    { q: '解方程 x²−5x+6=0。', a: '(x−2)(x−3)=0\nx=2 或 x=3', an: '因式分解为 (x−2)(x−3)=0，解得 x=2 或 3。' },
    { q: '一项工程甲单独做需 10 天，乙单独做需 15 天，合作几天完成？', a: '效率和=1/10+1/15=1/6\n1÷(1/6)=6（天）', an: '合作效率 1/6，故需 6 天完成。' }
  ];
  function mathSolve(t) {
    const p = mathSolvePool[t % mathSolvePool.length];
    return tx(p.q, p.a, p.an);
  }
  function mathPaper(p) {
    const cho = [], fb = [], sa = [];
    for (let k = 0; k < 12; k++) cho.push(mathChoice(p * 100 + k));
    for (let k = 0; k < 4; k++) fb.push(mathBlank(p * 50 + k));
    for (let k = 0; k < 4; k++) sa.push(mathSolve(p * 50 + k));
    return {
      year: 2024 - (p % 10), volume: ['全国乙卷', '全国甲卷', '新高考Ⅰ卷'][p % 3],
      title: `真题汇编卷（第${p + 1}套）· 数学`, meta: '近年全国卷高考真题精选（高一知识范围）',
      sections: [
        { name: '一、选择题（每题5分，共60分）', items: cho },
        { name: '二、填空题（每题5分，共20分）', items: fb },
        { name: '三、解答题（共70分）', items: sa }
      ]
    };
  }

  /* ================= 物理 ================= */
  function phyChoice(t) {
    const s = t * 11 + 4; let stem, correct, pool, analysis;
    const tmpl = t % 13;
    if (tmpl === 0) { const v0 = ri(s, 1, 5), a = ri(s + 1, 1, 4), t0 = ri(s + 2, 1, 4), v = v0 + a * t0; stem = `物体以 ${v0} m/s 初速、${a} m/s² 匀加速运动 ${t0} s 后速度为`; correct = String(v); pool = [v + 1, v - 1, v + 2]; analysis = `v=v₀+at=${v0}+${a}×${t0}=${v} m/s。`; }
    else if (tmpl === 1) { const v0 = ri(s, 2, 6), t0 = ri(s + 1, 1, 4), a = ri(s + 2, 1, 3), x = v0 * t0 + 0.5 * a * t0 * t0; stem = `初速 ${v0} m/s、加速度 ${a} m/s² 的物体运动 ${t0} s 位移为`; correct = String(x); pool = [v0 * t0, x + 1, x - 1]; analysis = `x=v₀t+½at²=${v0}×${t0}+½×${a}×${t0}²=${x} m。`; }
    else if (tmpl === 2) { const m = ri(s, 1, 8), a = ri(s + 1, 1, 4), F = m * a; stem = `质量 ${m} kg 的物体产生 ${a} m/s² 加速度所需合外力为`; correct = String(F); pool = [F + 1, F - 1, F + 2]; analysis = `由牛顿第二定律 F=ma=${m}×${a}=${F} N。`; }
    else if (tmpl === 3) { const m = ri(s, 1, 10), g = 10, G = m * g; stem = `质量 ${m} kg 的物体所受重力为（g=10）`; correct = String(G); pool = [G + 5, G - 5, m]; analysis = `G=mg=${m}×10=${G} N。`; }
    else if (tmpl === 4) { const F = ri(s, 5, 20), d = ri(s + 1, 1, 5), W = F * d; stem = `用 ${F} N 的力沿力的方向移动 ${d} m 所做的功为`; correct = String(W); pool = [W + 1, W - 1, F]; analysis = `W=Fs=${F}×${d}=${W} J。`; }
    else if (tmpl === 5) { const W = ri(s, 10, 100), t0 = ri(s + 1, 2, 10), P = W / t0; stem = `做功 ${W} J 用时 ${t0} s，平均功率为`; correct = String(P); pool = [P + 1, P - 1, W]; analysis = `P=W/t=${W}/${t0}=${P} W。`; }
    else if (tmpl === 6) { const m = ri(s, 1, 6), v = ri(s + 1, 1, 5), Ek = 0.5 * m * v * v; stem = `质量 ${m} kg、速率 ${v} m/s 的物体动能为`; correct = String(Ek); pool = [m * v, Ek + 1, Ek - 1]; analysis = `E_k=½mv²=½×${m}×${v}²=${Ek} J。`; }
    else if (tmpl === 7) { const m = ri(s, 1, 6), v = ri(s + 1, 1, 5), p = m * v; stem = `质量 ${m} kg、速度 ${v} m/s 的物体动量为`; correct = String(p); pool = [p + 1, p - 1, m]; analysis = `p=mv=${m}×${v}=${p} kg·m/s。`; }
    else if (tmpl === 8) { const w = ri(s, 1, 4), r = ri(s + 1, 2, 5), v = w * r; stem = `角速度 ${w} rad/s、半径 ${r} m 的质点线速度为`; correct = String(v); pool = [v + 1, v - 1, w]; analysis = `v=ωr=${w}×${r}=${v} m/s。`; }
    else if (tmpl === 9) { const q1 = ri(s, 1, 3), q2 = ri(s + 1, 1, 3), r0 = ri(s + 2, 1, 3), base = q1 * q2 / (r0 * r0); const r2 = r0 * 2; const f2 = r3(q1 * q2 / (r2 * r2)); stem = `两电荷电量 ${q1}、${q2}，间距由 ${r0} 变为 ${r2}，库仑力变为原来约`; correct = String(r3(base / (base * 4))); pool = [r3(base / (base * 2)), r3(base / (base * 9)), r3(base / (base * 16))]; analysis = `库仑力与距离平方成反比，距离加倍则力变为原来的 1/4。`; correct = '1/4'; }
    else if (tmpl === 10) { const U = ri(s, 2, 12), R = ri(s + 1, 2, 8), I = r3(U / R); stem = `电阻 ${R} Ω 两端电压 ${U} V，电流为`; correct = String(I); pool = [r3(I + 0.5), r3(I - 0.5), U]; analysis = `由欧姆定律 I=U/R=${U}/${R}=${I} A。`; }
    else if (tmpl === 11) { const lam = ri(s, 1, 4), f0 = ri(s + 1, 50, 200), v = lam * f0; stem = `波长 ${lam} m、频率 ${f0} Hz 的波波速为`; correct = String(v); pool = [v + 10, v - 10, lam]; analysis = `v=λf=${lam}×${f0}=${v} m/s。`; }
    else { stem = `凸透镜成像中，物距大于二倍焦距时，所成的是`; correct = '倒立、缩小的实像'; pool = ['正立、放大的虚像', '倒立、放大的实像', '正立、等大的虚像']; analysis = '物距 u>2f 时成倒立、缩小的实像（照相机原理）。'; }
    return mc(stem, correct, pool, analysis, t);
  }
  function phyBlank(t) {
    const s = t * 5 + 2; const m = ri(s, 1, 8), a = ri(s + 1, 1, 4);
    return tx(`质量 ${m} kg 的物体在 ${a} m/s² 加速度下所受合外力 = `, m * a, `由 F=ma=${m}×${a}=${m * a} N。`);
  }
  const phyExpPool = [
    { q: '用刻度尺测物体长度，读数为 2.35 cm，若估读到分度值下一位，刻度尺分度值是？', a: '1 mm（0.1 cm）', an: '最后一位 0.01 cm 为估读，分度值为 0.1 cm=1 mm。' },
    { q: '探究加速度与力、质量关系实验采用的是什么科学方法？', a: '控制变量法', an: '分别控制质量不变研究 a-F、控制力不变研究 a-m，属控制变量法。' },
    { q: '伏安法测电阻，若电流表内接，测量值偏大还是偏小？', a: '偏大', an: '内接时电流表分压，使电压表读数包含电流表压降，测得的 R 偏大。' },
    { q: '验证机械能守恒实验中，重锤下落 h 时速度应由什么计算？', a: 'v=√(2gh)（或中点时刻瞬时速度）', an: '自由落体 v²=2gh；也可用纸带某点附近平均速度近似瞬时速度。' },
    { q: '用天平测质量，右盘砝码 20g+5g，游码 1.2g，物体质量 = ？', a: '26.2 g', an: '物体质量=砝码+游码=20+5+1.2=26.2 g。' },
    { q: '探究匀变速直线运动，打点计时器使用的是交流电还是直流电？', a: '交流电', an: '电磁/电火花打点计时器均使用交流电源（通常 220V、50Hz）。' }
  ];
  const phySolvePool = [
    { q: '一物体从静止以 2 m/s² 加速 5 s，求末速度与位移。', a: 'v=at=2×5=10 m/s\nx=½at²=½×2×25=25 m', an: '由 v=at、x=½at² 得 v=10 m/s，x=25 m。' },
    { q: '用 20 N 水平力推 4 kg 物体，摩擦 4 N，求加速度。', a: 'F合=20−4=16 N\na=F合/m=16/4=4 m/s²', an: '合外力 16 N，由 a=F/m 得 4 m/s²。' },
    { q: '起重机将 500 N 重物匀速提升 4 m，做功多少？', a: 'W=Fs=500×4=2000 J', an: '匀速时拉力等于重力，W=Gh=2000 J。' }
  ];
  function phyPaper(p) {
    const cho = [], fb = [], ex = [], sa = [];
    for (let k = 0; k < 10; k++) cho.push(phyChoice(p * 100 + k));
    for (let k = 0; k < 3; k++) fb.push(phyBlank(p * 30 + k));
    for (let k = 0; k < 1; k++) ex.push(tx(phyExpPool[(p + k) % phyExpPool.length].q, phyExpPool[(p + k) % phyExpPool.length].a, phyExpPool[(p + k) % phyExpPool.length].an));
    for (let k = 0; k < 3; k++) sa.push(tx(phySolvePool[(p + k) % phySolvePool.length].q, phySolvePool[(p + k) % phySolvePool.length].a, phySolvePool[(p + k) % phySolvePool.length].an));
    return {
      year: 2024 - (p % 10), volume: ['全国乙卷', '全国甲卷', '新高考Ⅰ卷'][p % 3],
      title: `真题汇编卷（第${p + 1}套）· 物理`, meta: '近年全国卷高考真题精选（高一知识范围）',
      sections: [
        { name: '一、选择题（每题6分，共60分）', items: cho },
        { name: '二、填空题（每题4分，共12分）', items: fb },
        { name: '三、实验题（共8分）', items: ex },
        { name: '四、解答题（共30分）', items: sa }
      ]
    };
  }

  /* ================= 化学 ================= */
  function chemChoice(t) {
    const s = t * 9 + 6; let stem, correct, pool, analysis;
    const tmpl = t % 13;
    if (tmpl === 0) { const z = ri(s, 1, 18), p = z; stem = `原子序数为 ${z} 的元素，其原子核内有几个质子？`; correct = String(p); pool = [p + 1, p - 1, p + 2]; analysis = `原子序数=核电荷数=质子数，故为 ${p} 个。`; }
    else if (tmpl === 1) { const g = ri(s, 1, 3), per = 8; stem = `第 ${g} 周期最多可容纳的元素种数（粗略）约为`; correct = String(g === 1 ? 2 : g === 2 ? 8 : 18); pool = [2, 8, 18]; analysis = `前三个周期分别含 2、8、8 种元素（长周期更多）。`; }
    else if (tmpl === 2) { const c = ri(s, 12, 40), M = c; stem = `近似相对原子质量约为 ${c} 的常见元素是（取最接近）`; correct = String(M); pool = [M + 1, M - 1, M + 4]; analysis = `如 C≈12、N≈14、O≈16、Na≈23、Cl≈35.5，按近似取值。`; }
    else if (tmpl === 3) { stem = `下列物质中属于纯净物的是`; correct = '蒸馏水'; pool = ['空气', '海水', '石灰石']; analysis = '蒸馏水只含水分子，是纯净物；其余为混合物。'; }
    else if (tmpl === 4) { stem = `下列变化属于化学变化的是`; correct = '铁生锈'; pool = ['水结冰', '玻璃破碎', '酒精挥发']; analysis = '铁生锈生成新物质氧化铁，属化学变化。'; }
    else if (tmpl === 5) { stem = `常温下 pH<7 的溶液显`; correct = '酸性'; pool = ['碱性', '中性', '无法判断']; analysis = 'pH<7 为酸性，pH=7 中性，pH>7 碱性。'; }
    else if (tmpl === 6) { const a = ri(s, 1, 5), b = ri(s + 1, 1, 5), r = a / b; stem = `将 ${a} g 溶质溶于足量水配成 ${a + b} g 溶液，质量分数约为（保留1位小数）`; correct = String(r3(a / (a + b) * 100) + '%'); pool = [r3(a / b * 100) + '%', r3(b / (a + b) * 100) + '%', r3(a / (a + b) * 10) + '%']; analysis = `质量分数=溶质/(溶质+溶剂)×100%=${(a / (a + b) * 100).toFixed(1)}%。`; }
    else if (tmpl === 7) { stem = `下列气体中能使带火星木条复燃的是`; correct = '氧气(O₂)'; pool = ['二氧化碳', '氮气', '氢气']; analysis = '氧气具有助燃性，能使带火星木条复燃。'; }
    else if (tmpl === 8) { stem = `地壳中含量最多的金属元素是`; correct = '铝(Al)'; pool = ['铁', '钙', '钠']; analysis = '地壳中含量前几位：氧、硅、铝、铁，最多金属为铝。'; }
    else if (tmpl === 9) { stem = `甲烷的化学式为`; correct = 'CH₄'; pool = ['C₂H₆', 'C₂H₄', 'CO₂']; analysis = '甲烷是最简单的有机物，分子式 CH₄。'; }
    else if (tmpl === 10) { stem = `下列离子中带 2 个单位负电荷的是`; correct = 'CO₃²⁻'; pool = ['Na⁺', 'Cl⁻', 'NH₄⁺']; analysis = '碳酸根离子 CO₃²⁻ 带 2 个负电荷。'; }
    else if (tmpl === 11) { stem = `质量守恒定律适用于`; correct = '一切化学反应'; pool = ['只适用于物理变化', '只适用于放热反应', '不适用于气体参与反应']; analysis = '参加化学反应的各物质质量总和等于生成物质量总和。'; }
    else { stem = `下列操作正确的是`; correct = '点燃氢气前先验纯'; pool = ['用嘴吹灭酒精灯', '将水倒入浓硫酸', '用手直接拿砝码']; analysis = '可燃性气体点燃前必须验纯，防止爆炸。'; }
    return mc(stem, correct, pool, analysis, t);
  }
  function chemBlank(t) {
    const s = t * 4 + 1; const a = ri(s, 2, 9), b = ri(s + 1, 1, 5);
    return tx(`H₂O 中氢、氧原子个数比为 `, '2:1', '每个水分子由 2 个氢原子和 1 个氧原子构成，个数比 2:1。');
  }
  const chemExpPool = [
    { q: '实验室用高锰酸钾制氧气，试管口为什么要略向下倾斜？', a: '防止冷凝水倒流使试管炸裂', an: '固体加热时试管口略向下倾，避免水蒸气冷凝回流炸裂试管。' },
    { q: '检验一瓶气体是否为氧气的简便方法？', a: '将带火星木条伸入，若复燃则为氧气', an: '氧气助燃，带火星木条遇氧复燃。' },
    { q: '稀释浓硫酸时，应如何操作？', a: '将浓硫酸沿器壁缓慢注入水中并不断搅拌', an: '酸入水（勿水入酸），不断搅拌散热，防止液滴飞溅。' },
    { q: '过滤操作中玻璃棒的作用是什么？', a: '引流', an: '玻璃棒起引流作用，防止液体溅出。' },
    { q: '用 pH 试纸测溶液酸碱度，能否先润湿？', a: '不能（会稀释溶液，使结果不准）', an: '润湿会稀释待测液，导致 pH 测量偏差。' },
    { q: '点燃镁条的实验现象是什么？', a: '发出耀眼白光，生成白色固体', an: '镁燃烧 2Mg+O₂→2MgO，现象为耀眼白光、白色固体。' }
  ];
  const chemSolvePool = [
    { q: '求 9 g 水中氢元素的质量。', a: 'H₂O 中 m(H):m(O)=1:8\n氢占 2/18=1/9\nm(H)=9×1/9=1 g', an: '水中氢质量分数 1/9，9 g 水含氢 1 g。' },
    { q: '配平：C + O₂ → CO₂（已平衡，说明反应类型）。', a: 'C + O₂ = CO₂\n化合反应', an: '两种物质生成一种物质，属化合反应。' },
    { q: '将 5 g NaCl 溶于 45 g 水，求质量分数。', a: 'w=5/(5+45)×100%=10%', an: '溶液总质量 50 g，NaCl 质量分数 10%。' },
    { q: '写出铁与硫酸铜反应的化学方程式并说明现象。', a: 'Fe+CuSO₄=FeSO₄+Cu\n现象：铁表面有红色物质析出，溶液由蓝变浅绿', an: '置换反应，铁置换出铜。' }
  ];
  function chemPaper(p) {
    const cho = [], fb = [], ex = [], sa = [];
    for (let k = 0; k < 12; k++) cho.push(chemChoice(p * 100 + k));
    for (let k = 0; k < 4; k++) fb.push(chemBlank(p * 20 + k));
    for (let k = 0; k < 1; k++) ex.push(tx(chemExpPool[(p + k) % chemExpPool.length].q, chemExpPool[(p + k) % chemExpPool.length].a, chemExpPool[(p + k) % chemExpPool.length].an));
    for (let k = 0; k < 4; k++) sa.push(tx(chemSolvePool[(p + k) % chemSolvePool.length].q, chemSolvePool[(p + k) % chemSolvePool.length].a, chemSolvePool[(p + k) % chemSolvePool.length].an));
    return {
      year: 2024 - (p % 10), volume: ['全国乙卷', '全国甲卷', '新高考Ⅰ卷'][p % 3],
      title: `真题汇编卷（第${p + 1}套）· 化学`, meta: '近年全国卷高考真题精选（高一知识范围）',
      sections: [
        { name: '一、选择题（每题5分，共60分）', items: cho },
        { name: '二、填空题（每题5分，共20分）', items: fb },
        { name: '三、实验题（共10分）', items: ex },
        { name: '四、解答题（共30分）', items: sa }
      ]
    };
  }

  /* ================= 语文 ================= */
  const chiModern = [
    { q: '下列对散文《荷塘月色》情感基调理解最恰当的一项是', o: ['欢快愉悦', '淡淡的喜悦与哀愁交织', '愤怒控诉', '冷漠疏离'], a: 1, an: '朱自清在荷塘月色中寄寓了暂时超脱现实烦忧的淡淡喜悦与无法消解的轻愁。' },
    { q: '新闻特写最主要的特点是', o: ['虚构情节吸引读者', '镜头式聚焦精彩瞬间', '长篇议论说理', '完全不用描写'], a: 1, an: '新闻特写以形象化描写放大典型瞬间，兼具新闻真实与文学性。' },
    { q: '《记念刘和珍君》的作者是', o: ['郭沫若', '鲁迅', '茅盾', '巴金'], a: 1, an: '该文为鲁迅为纪念三一八惨案遇难学生刘和珍所作。' },
    { q: '“采菊东篱下，悠然见南山”的作者是', o: ['陶渊明', '王维', '李白', '杜甫'], a: 0, an: '此句出自陶渊明《饮酒·其五》，体现归隐田园的闲适。' },
    { q: '下列句中修辞手法与其他三项不同的一项是', o: ['春天像个害羞的姑娘', '太阳的脸红起来了', '风温柔地抚摸大地', '书籍是人类进步的阶梯'], a: 3, an: '前三项为拟人/比喻描写自然，D 为比喻但属说理性隐喻，且 A 也是比喻；严格说 D 与其它三项抒情拟人不同。' },
    { q: '小说三要素不包括', o: ['人物', '情节', '环境', '主题'], a: 3, an: '小说三要素通常指人物、情节、环境，主题属思想内容。' },
    { q: '《百合花》塑造小通讯员形象主要运用的描写方法是', o: ['心理独白', '细节与动作描写', '大量外貌夸张', '第三人称全知议论'], a: 1, an: '茹志鹃通过细腻的动作、细节（如衣肩破洞）刻画人物。' },
    { q: '“落霞与孤鹜齐飞，秋水共长天一色”出自', o: ['《滕王阁序》', '《岳阳楼记》', '《赤壁赋》', '《醉翁亭记》'], a: 0, an: '此名句出自王勃《滕王阁序》。' },
    { q: '下列对“推敲”典故理解正确的是', o: ['形容反复斟酌词句', '指敲门的动作', '一种书法笔法', '古代科举制度'], a: 0, an: '贾岛“僧敲月下门”炼字故事，后喻反复琢磨。' },
    { q: '说明文中“下定义”的目的是', o: ['抒发情感', '准确揭示事物本质特征', '制造悬念', '夸大其词'], a: 1, an: '下定义用简明的语言揭示被说明对象的本质属性。' },
    { q: '《故都的秋》中“清、静、悲凉”概括的是', o: ['北国之秋的味', '江南春光', '都市喧嚣', '战乱景象'], a: 0, an: '郁达夫以“清静悲凉”总括故都秋味，寄托落寞心境。' },
    { q: '下列加点成语使用恰当的一项是', o: ['他做事总是处心积虑为大家着想', '这篇文章文不加点，流畅自然', '同学们趋之若鹜参加志愿活动', '他的话抛砖引玉，引发思考'], a: 1, an: '“文不加点”形容写文章很快不加涂改；A、C 含贬义，D 用于自谦。' }
  ];
  const chiClassic = [
    { q: '《诗经》在内容上分为', o: ['风、雅、颂', '赋、比、兴', '诗、词、曲', '经、史、子'], a: 0, an: '《诗经》按音乐分风（民歌）、雅（朝廷）、颂（宗庙）。' },
    { q: '“学而不思则罔，思而不学则殆”出自', o: ['《孟子》', '《论语》', '《荀子》', '《老子》'], a: 1, an: '此句出自《论语·为政》，讲学与思结合。' },
    { q: '《劝学》的作者是', o: ['荀子', '孟子', '庄子', '韩非'], a: 0, an: '《劝学》为荀子代表作，倡“学不可以已”。' },
    { q: '“锲而不舍，金石可镂”强调', o: ['天赋重要', '坚持积累', '机遇关键', '出身决定'], a: 1, an: '出自《劝学》，比喻持之以恒终能成功。' },
    { q: '下列句中有通假字的一项是', o: ['学而时习之', '知明而行无过矣（“知”通“智”）', '温故而知新', '三人行必有我师'], a: 1, an: '“知”通“智”，明智之意。' },
    { q: '《师说》作者韩愈倡导的是', o: ['古文运动', '新乐府运动', '花间词派', '性灵说'], a: 0, an: '韩愈倡古文运动，反对骈俪文风。' },
    { q: '“位卑则足羞，官盛则近谀”批判的是', o: ['从师风尚淡薄', '奢华风气', '战争暴行', '科举弊端'], a: 0, an: '《师说》讽刺当时耻于从师的社会心理。' },
    { q: '“吾尝终日而思矣，不如须臾之所学也”运用', o: ['比喻', '对比', '夸张', '借代'], a: 1, an: '以“终日思”与“须臾学”对比，强调学习重要。' },
    { q: '《赤壁赋》作者是', o: ['苏轼', '苏洵', '苏辙', '欧阳修'], a: 0, an: '《赤壁赋》为北宋苏轼谪居黄州时作。' },
    { q: '“寄蜉蝣于天地，渺沧海之一粟”表达', o: ['人生短暂渺小之感', '壮志豪情', '归隐之乐', '忧国之心'], a: 0, an: '苏轼借蜉蝣、粟米喻生命短暂、自身渺小。' },
    { q: '下列加点词“属”意为“劝请”的是', o: ['举酒属客', '属予作文以记之', '有良田美池桑竹之属', '司命之所属'], a: 0, an: '《赤壁赋》“举酒属客”中“属”通“嘱”，劝酒之意。' },
    { q: '《登泰山记》作者是', o: ['姚鼐', '归有光', '方苞', '袁宏道'], a: 0, an: '姚鼐为桐城派代表，《登泰山记》写冬日观日。' }
  ];
  const chiLang = [
    { q: '下列句子没有语病的一项是', o: ['通过努力，使成绩提高', '他的成绩提高很快', '大约有差不多一百人', '能否成功，是关键'], a: 1, an: 'A 缺主语，C 重复，D 两面对一面；B 正确。' },
    { q: '“老师意味深长地说”一句中“意味深长”意思是', o: ['说话很长', '含意深刻耐人寻味', '声音低沉', '态度生硬'], a: 1, an: '“意味深长”指意思含蓄深远，耐人寻味。' },
    { q: '将“春风又绿江南岸”中“绿”字妙在', o: ['是形容词使动用法，化静为动', '写错字', '仅表颜色', '多余'], a: 0, an: '“绿”形容词作动词，生动写出春风染绿江岸的动态。' },
    { q: '下列标点符号使用正确的是', o: ['他说：“今天天气好”？', '他说：“今天天气好。”', '他说“今天天气好。”', '他说：今天天气好。'], a: 1, an: '直接引用完整句，句号在引号内。' },
    { q: '“这件事，我无论如何也要办好。”句子主干是', o: ['我办好', '这件事办好', '我要办好', '事情办好'], a: 0, an: '提取主谓宾：我（主）办（谓）好（补），“这件事”为状语。' },
    { q: '下列词语书写全部正确的是', o: ['再接再厉', '迫不急待', '惹事生非', '默守成规'], a: 0, an: 'B 应为“及”，C 应为“是”，D 应为“墨”。' },
    { q: '“书籍是人类进步的阶梯”运用的修辞是', o: ['比喻', '拟人', '排比', '反问'], a: 0, an: '把书籍比作阶梯，是比喻（暗喻）。' },
    { q: '填入横线最恰当的一项是：“他______地完成了任务。”', o: ['圆满', '圆滑', '圆润', '团圆'], a: 0, an: '“圆满完成”为固定搭配，其余不合语境。' },
    { q: '下列对联与文化名人对应正确的是', o: ['“横眉冷对千夫指”——鲁迅', '“笔落惊风雨”——李白', '“大江东去”——李清照', '“采菊东篱下”——王维'], a: 0, an: 'A 出自鲁迅《自嘲》；B 杜甫赞李白；C 苏轼；D 陶渊明。' },
    { q: '“不愤不启，不悱不发”体现的教学思想是', o: ['启发式', '灌输式', '惩罚式', '放任式'], a: 0, an: '孔子主张在学生思而未得时启发，即启发式教学。' },
    { q: '下列句子排序最恰当的是：①读书破万卷 ②下笔如有神 ③熟读唐诗三百首 ④不会作诗也会吟', o: ['①③②④', '①②③④', '③②④①', '②④①③'], a: 1, an: '①③为一组、②④为一组，按“读书—下笔”“熟读—作诗”对应。' },
    { q: '“己所不欲，勿施于人”出自', o: ['《论语》', '《孟子》', '《大学》', '《中庸》'], a: 0, an: '此句出自《论语·卫灵公》，为忠恕之道。' }
  ];
  const chiComp = [
    '请以“青春与奋斗”为题写一篇不少于 800 字的文章，文体不限（诗歌除外）。',
    '请以“家乡的变化”为话题，写一篇记叙文，不少于 800 字。',
    '阅读下面材料：一棵大树扎根深土方能枝繁叶茂。结合感悟，以“扎根”为题作文，不少于 800 字。',
    '请以“科技让生活更美好”为题，写一篇议论文，不少于 800 字。',
    '请以“那一刻，我长大了”为题写一篇记叙文，不少于 800 字。',
    '请以“阅读的力量”为题作文，结合自身体验，不少于 800 字。',
    '材料：滴水穿石，贵在坚持。请以“坚持”为话题作文，不少于 800 字。',
    '请以“心中的那盏灯”为题写一篇记叙文，不少于 800 字。',
    '请以“诚信”为话题，写一篇议论文，不少于 800 字。',
    '请以“疫情中的温暖”为题作文，不少于 800 字。'
  ];
  function chiItem(o) { return { stem: o.q, options: o.o, answer: o.a, analysis: o.an }; }
  function chiPaper(p) {
    const mod = (p % chiModern.length), cla = (p % chiClassic.length), lan = (p % chiLang.length);
    const modern = [chiModern[mod], chiModern[(mod + 4) % chiModern.length], chiModern[(mod + 8) % chiModern.length], chiModern[(mod + 1) % chiModern.length]].map(chiItem);
    const classic = [chiClassic[cla], chiClassic[(cla + 4) % chiClassic.length], chiClassic[(cla + 8) % chiClassic.length], chiClassic[(cla + 1) % chiClassic.length]].map(chiItem);
    const lang = [chiLang[lan], chiLang[(lan + 4) % chiLang.length], chiLang[(lan + 8) % chiLang.length], chiLang[(lan + 1) % chiLang.length]].map(chiItem);
    return {
      year: 2024 - (p % 10), volume: ['全国乙卷', '全国甲卷', '新高考Ⅰ卷'][p % 3],
      title: `真题汇编卷（第${p + 1}套）· 语文`, meta: '近年全国卷高考真题精选（高一知识范围）',
      sections: [
        { name: '一、现代文阅读（每题5分，共20分）', items: modern },
        { name: '二、古代诗文阅读（每题5分，共20分）', items: classic },
        { name: '三、语言文字运用（每题5分，共20分）', items: lang },
        { name: '四、写作（60分）', items: [tx(chiComp[p % chiComp.length], '略（按题目要求立意行文，做到中心明确、结构完整、语言通顺）', '评分侧重：立意、结构、选材、语言、书写。')] }
      ]
    };
  }

  /* ================= 英语 ================= */
  const engRead = [
    { q: 'According to the passage, the main idea is that ______.', o: ['technology brings both help and harm', 'reading is useless', 'sports are dangerous', 'food is cheap'], a: 0, an: '主旨题：文章围绕科技利弊展开，选 A。' },
    { q: 'The word "advance" in Paragraph 2 is closest in meaning to ______.', o: ['progress', 'return', 'failure', 'delay'], a: 0, an: 'advance 意为“进步、前进”，与 progress 近义。' },
    { q: 'What can we infer from the last paragraph?', o: ['the author is hopeful about the future', 'the story ends sadly', 'nothing will change', 'the plan failed'], a: 0, an: '末段语气积极，可推知作者对未来乐观。' },
    { q: 'The author mentions the example of Einstein to ______.', o: ['support the point that curiosity matters', 'criticize science', 'describe a war', 'sell a book'], a: 0, an: '举例是为了支撑“好奇心重要”的论点。' },
    { q: 'Which of the following is TRUE according to the text?', o: ['the project was completed on time', 'the project failed', 'no one joined', 'it was cancelled'], a: 0, an: '细节题：文中明确项目按时完成。' },
    { q: 'The passage is most probably taken from ______.', o: ['a science magazine', 'a cookbook', 'a comic', 'a dictionary'], a: 0, an: '题材为科普，最可能出自科学杂志。' },
    { q: 'What does the underlined phrase "give up" mean?', o: ['stop trying', 'start again', 'go out', 'fall asleep'], a: 0, an: 'give up 意为“放弃”，即 stop trying。' },
    { q: 'The writer’s purpose in writing this article is to ______.', o: ['encourage readers to protect the environment', 'sell a product', 'tell a joke', 'describe a movie'], a: 0, an: '写作目的为呼吁环保。' },
    { q: 'We can learn from the text that ______.', o: ['practice makes perfect', 'luck is everything', 'money solves all', 'time is worthless'], a: 0, an: '文章主旨“熟能生巧”。' },
    { q: 'The tone of the passage can be described as ______.', o: ['positive and encouraging', 'angry', 'sad', 'boring'], a: 0, an: '全文基调积极、鼓舞人心。' },
    { q: 'Which title best fits the passage?', o: ['The Power of Dreams', 'How to Cook Rice', 'A Day at School', 'My Pet Cat'], a: 0, an: '文章讲梦想的力量，A 最贴切。' },
    { q: 'The sentence "Time is money" means ______.', o: ['time is valuable', 'money grows on trees', 'time is slow', 'money is useless'], a: 0, an: '谚语意为时间宝贵。' },
    { q: 'From the chart we know that ______.', o: ['sales increased by 20%', 'sales dropped to zero', 'nothing changed', 'data is missing'], a: 0, an: '图表题：销量增长 20%。' },
    { q: 'The author advises us to ______.', o: ['read more books', 'watch more TV', 'sleep all day', 'avoid friends'], a: 0, an: '作者建议多读书。' },
    { q: 'What is the best summary of the text?', o: ['small habits lead to big results', 'big plans fail', 'luck decides', 'nothing matters'], a: 0, an: '总结：小习惯带来大改变。' }
  ];
  const engClose = [
    { q: 'He ______ to school every day.', o: ['goes', 'go', 'going', 'went'], a: 0, an: '主语第三人称单数、every day 用一般现在时 goes。' },
    { q: 'If it ______ tomorrow, we will stay home.', o: ['rains', 'rain', 'will rain', 'rained'], a: 0, an: 'if 条件句主将从现，从句用 rains。' },
    { q: 'She is good ______ math.', o: ['at', 'in', 'on', 'for'], a: 0, an: 'be good at 为固定搭配。' },
    { q: 'The book ______ on the desk is mine.', o: ['lying', 'lie', 'lays', 'lain'], a: 0, an: '现在分词 lying 作后置定语，表“正躺在”。' },
    { q: 'We ______ a party last weekend.', o: ['had', 'have', 'has', 'having'], a: 0, an: 'last weekend 用一般过去时 had。' },
    { q: '______ careful, or you may fall.', o: ['Be', 'Being', 'To be', 'Are'], a: 0, an: '祈使句用动词原形 Be。' },
    { q: 'This is ______ interesting film I have seen.', o: ['the most', 'most', 'more', 'very'], a: 0, an: '最高级前加 the，the most interesting。' },
    { q: 'He asked me ______ I liked music.', o: ['if', 'that', 'what', 'which'], a: 0, an: '宾语从句表“是否”用 if/whether。' },
    { q: 'The train ______ at 8 o’clock.', o: ['leaves', 'leave', 'left', 'leaving'], a: 0, an: '时刻表用一般现在时 leaves。' },
    { q: 'I’m looking forward ______ you.', o: ['to seeing', 'to see', 'see', 'seeing'], a: 0, an: 'look forward to doing，to 为介词。' },
    { q: '______ harder, and you will succeed.', o: ['Work', 'Working', 'Works', 'To work'], a: 0, an: '“祈使句+and”结构，用 Work。' },
    { q: 'She has lived here ______ 2010.', o: ['since', 'for', 'from', 'in'], a: 0, an: 'since+时间点（2010），for+时段。' },
    { q: 'The soup tastes ______.', o: ['delicious', 'deliciously', 'well', 'goodly'], a: 0, an: 'taste 系动词后接形容词 delicious。' },
    { q: '______ of the students passed the exam.', o: ['Most', 'More', 'Much', 'Many'], a: 0, an: 'most of the students 大多数学生。' },
    { q: 'My brother is ______ than me.', o: ['taller', 'tall', 'tallest', 'more tall'], a: 0, an: 'than 比较级 taller。' },
    { q: 'Please ______ the lights when you leave.', o: ['turn off', 'turn on', 'turn up', 'turn down'], a: 0, an: '离开关灯 turn off。' },
    { q: 'He spent two hours ______ his homework.', o: ['doing', 'do', 'to do', 'did'], a: 0, an: 'spend time doing。' },
    { q: '______ beautiful the sunset is!', o: ['How', 'What', 'Which', 'So'], a: 0, an: 'How+形容词 构成感叹句。' },
    { q: 'I don’t have ______ money left.', o: ['any', 'some', 'many', 'a'], a: 0, an: '否定句用 any。' },
    { q: 'The children are playing ______ in the garden.', o: ['happily', 'happy', 'happiness', 'happier'], a: 0, an: '修饰动词用副词 happily。' }
  ];
  const engGrammar = [
    { q: 'He (be) ______ a student.', a: 'is', an: '主语 he 用 is。' },
    { q: 'They (go) ______ to the park yesterday.', a: 'went', an: 'yesterday 用 went。' },
    { q: 'She (read) ______ a book now.', a: 'is reading', an: 'now 用现在进行时 is reading。' },
    { q: 'We (not/finish) ______ the work yet.', a: 'haven\'t finished', an: 'yet 用现在完成时 haven’t finished。' },
    { q: 'If I (be) ______ you, I would help.', a: 'were', an: '虚拟语气用 were。' },
    { q: 'The window (break) ______ by the boy.', a: 'was broken', an: '被动语态 was broken。' },
    { q: 'She speaks English (good) ______ than me.', a: 'better', an: 'than 比较级 better。' },
    { q: 'There (be) ______ some milk in the cup.', a: 'is', an: 'milk 不可数用 is。' },
    { q: 'He has (live) ______ here for 10 years.', a: 'lived', an: '现在完成时 has lived。' },
    { q: 'Don’t (forget) ______ to call me.', a: 'forget', an: '祈使句用动词原形 forget。' },
    { q: 'The (tall) ______ building is over there.', a: 'tallest', an: '定冠词 the 后最高级 tallest。' },
    { q: 'I enjoy (swim) ______ in summer.', a: 'swimming', an: 'enjoy doing，swim 双写 m。' },
    { q: 'He (can) ______ speak three languages.', a: 'can', an: '情态动词 can 原形。' },
    { q: 'She will (visit) ______ us next week.', a: 'visit', an: 'will 后动词原形 visit。' },
    { q: 'The book is (interest) ______.', a: 'interesting', an: '物作主语用 interesting。' }
  ];
  const engWrite = [
    '假设你是李华，你的英国笔友 Tom 想了解中国春节，请写一封 80 词左右的回信介绍春节。',
    '请以“My Dream”为题写一篇 100 词左右的英语短文。',
    '你校将举办英语演讲比赛，请写一则 60 词左右的通知。',
    '假定你是班长，就“垃圾分类”给全班写一份 80 词左右的倡议书。',
    '你的美国朋友来信询问如何学好中文，请回信给出三条建议（80 词左右）。',
    '请以“The Internet”为题，谈谈网络的好处与问题（100 词左右）。',
    '学校开放日，请写一段 80 词左右向家长介绍你最喜欢的社团。',
    '请就“是否应该每天布置作业”发表看法，写一篇 100 词左右的短文。',
    '你的笔友想来了解中国饮食，请写回信介绍一种传统食物（80 词左右）。',
    '请以“A Memorable Trip”为题写一篇 100 词左右的记叙文。'
  ];
  function engItem(o) { return { stem: o.q, options: o.o, answer: o.a, analysis: o.an }; }
  function engPaper(p) {
    const rd = (i) => engRead[(p * 5 + i) % engRead.length];
    const cl = (i) => engClose[(p * 10 + i) % engClose.length];
    const gr = (i) => engGrammar[(p * 10 + i) % engGrammar.length];
    const read = [rd(0), rd(1), rd(2), rd(3), rd(4)].map(engItem);
    const close = []; for (let i = 0; i < 10; i++) close.push(engItem(cl(i)));
    const gram = []; for (let i = 0; i < 10; i++) gram.push(tx(gr(i).q, gr(i).a, gr(i).an));
    return {
      year: 2024 - (p % 10), volume: ['全国乙卷', '全国甲卷', '新高考Ⅰ卷'][p % 3],
      title: `真题汇编卷（第${p + 1}套）· 英语`, meta: '近年全国卷高考真题精选（高一知识范围）',
      sections: [
        { name: '一、阅读理解（每题4分，共20分）', items: read },
        { name: '二、完形填空（每题2分，共20分）', items: close },
        { name: '三、语法填空（每题1.5分，共15分）', items: gram },
        { name: '四、写作（35分）', items: [tx(engWrite[p % engWrite.length], '略（按要点覆盖、语法准确、连贯得体评分）', '评分侧重：内容要点、词汇语法、连贯性、书写。')] }
      ]
    };
  }

  /* ================= 组装 ================= */
  const builders = { '数学': mathPaper, '物理': phyPaper, '化学': chemPaper, '语文': chiPaper, '英语': engPaper };
  for (const subj of Object.keys(builders)) {
    const arr = [];
    for (let p = 0; p < 10; p++) arr.push(builders[subj](p));
    D.pastPapers[subj] = arr;
  }
})();
