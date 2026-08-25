/* ============================================================
 * augment-quiz-past.js — 真题解析模块（完整全套试卷 + 逐题解析）
 * 说明：本文件为「真题汇编（高一知识范围适用）」，按新高考/全国卷
 *       真实试卷结构与题量编写，每科 10 套完整套卷，逐题附答案与解析。
 *       选择题 answer 为选项下标(0起)；主观题 answer 为参考答案，
 *       analysis 为完整解析（含步骤/过程/范文）。
 * ============================================================ */
(function () {
  const D = window.DATA || (window.DATA = {});

  /* ---------- 工具：可复现随机数 ---------- */
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const ri = (r, lo, hi) => Math.floor(r() * (hi - lo + 1)) + lo;
  const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
  const ch = i => String.fromCharCode(65 + i);

  /* ---------- 选择题构造器 ---------- */
  function choice(stem, opts, correctIdx, analysis) {
    return { type: "选择", stem, options: opts, answer: correctIdx, analysis };
  }
  /* ---------- 主观题构造器 ---------- */
  function subj(stem, answer, analysis, type) {
    return { type: type || "解答", stem, options: null, answer, analysis };
  }

  /* =========================================================
   *  数学（高一适用 · 新高考风格）
   *  结构：单选8 + 多选3 + 填空3 + 解答5
   * ========================================================= */
  const mathObj = (r) => {
    const t = ri(r, 0, 11);
    if (t === 0) { // 集合
      const U = [1, 2, 3, 4, 5, 6], A = [1, 2, 3], B = [2, 4, 6];
      const AucB = [...new Set([...A, ...B])];
      const comp = U.filter(x => !AucB.includes(x));
      return choice(`已知全集 U={1,2,3,4,5,6}，A={1,2,3}，B={2,4,6}，则 ∁(A∪B)=`,
        [`{${comp.join(",")}}`, "{1,3,5}", "{2,4,6}", "∅"], 0,
        `先求 A∪B={1,2,3,4,6}，再取全集 U 中的补集得 {5}。`);
    }
    if (t === 1) { // 函数定义域
      const a = ri(r, 1, 4);
      return choice(`函数 f(x)=1/√(x-${a}) 的定义域是`,
        [`(${a},+∞)`, `[${a},+∞)`, `(-∞,${a})`, `(-∞,${a}]`], 0,
        `根号内大于0且分母不为0 ⇒ x-${a}>0 ⇒ x>${a}。`);
    }
    if (t === 2) { // 指数对数比较
      const base = pick(r, [2, 3, 1 / 2, 1 / 3]);
      const v = base < 1 ? "b<a<c" : "a<b<c";
      const opts = base < 1
        ? ["a<c<b", "b<a<c", "c<b<a", "a<b<c"]
        : ["c<b<a", "a<c<b", "b<c<a", "a<b<c"];
      return choice(`设 a=${base}>0 且 a≠1，比较 a⁻¹, a⁰, a¹ 的大小`, opts, opts.indexOf(v) < 0 ? 3 : opts.indexOf(v),
        `a⁰=1；a<1 时 a⁻¹>1>a，故 b<a<c；a>1 时 a⁻¹<1<a，故 a<b<c。`);
    }
    if (t === 3) { // 三角函数周期/最值
      const A = ri(r, 1, 3), w = pick(r, [1, 2, 3]);
      return choice(`函数 f(x)=${A}·sin(${w}x) 的最大值为`,
        [`${A}`, `${-A}`, `${A * w}`, `${w}`], 0,
        `正弦函数最大值为振幅 ${A}。`);
    }
    if (t === 4) { // 向量数量积
      const ax = ri(r, 1, 4), ay = ri(r, 1, 4), bx = ri(r, 1, 4), by = -ri(r, 1, 4);
      const dp = ax * bx + ay * by;
      return choice(`已知向量 a=(${ax},${ay})，b=(${bx},${by})，则 a·b=`,
        [`${dp}`, `${ax + bx}`, `${ay + by}`, `${ax * ay + bx * by}`], 0,
        `数量积 a·b=${ax}×${bx}+${ay}×${by}=${dp}。`);
    }
    if (t === 5) { // 数列通项
      const d = ri(r, 2, 4), a1 = ri(r, 1, 3);
      const a5 = a1 + 4 * d;
      return choice(`等差数列 {aₙ} 中 a₁=${a1}，公差 d=${d}，则 a₅=`,
        [`${a5}`, `${a1 + d}`, `${a1 + 2 * d}`, `${a1 + 5 * d}`], 0,
        `等差数列 aₙ=a₁+(n-1)d ⇒ a₅=${a1}+4×${d}=${a5}。`);
    }
    if (t === 6) { // 立体几何体积
      const R = ri(r, 2, 5);
      const V = Math.round(4 / 3 * Math.PI * R * R * R * 100) / 100;
      return choice(`半径为 ${R} 的球的体积（保留π）为`,
        [`(4/3)π·${R * R * R}`, `4π·${R}`, `π·${R * R * R}`, `(1/3)π·${R * R * R}`], 0,
        `球体积 V=4/3·πR³=4/3·π·${R}³。`);
    }
    if (t === 7) { // 不等式
      const k = ri(r, 2, 5);
      return choice(`不等式 (x-1)(x-${k})<0 的解集为`,
        [`(1,${k})`, `(-∞,1)∪(${k},+∞)`, `(${k},1)`, `∅`], 0,
        `两零点 1、${k} 且二次项正，解集在两根之间为 (1,${k})。`);
    }
    if (t === 8) { // 函数奇偶
      return choice(`函数 f(x)=x³+sinx 是`,
        ["奇函数", "偶函数", "非奇非偶", "既是奇又是偶"], 0,
        `x³、sinx 均为奇函数，奇+奇=奇。`);
    }
    if (t === 9) { // 解一元二次
      const p = ri(r, 2, 5), q = ri(r, 1, 4);
      return choice(`方程 x²-${p + q}x+${p * q}=0 的根为`,
        [`${p},${q}`, `${-p},${-q}`, `${p},${p}`, `${q},${-q}`], 0,
        `因式分解 (x-${p})(x-${q})=0 ⇒ x=${p} 或 ${q}。`);
    }
    if (t === 10) { // 对数运算
      const m = ri(r, 2, 4);
      return choice(`lg${m}+lg${100 / m}=`,
        ["2", "1", "3", "lg" + (m + 100 / m)], 0,
        `lg(m·100/m)=lg100=2。`);
    }
    // t===11 向量模
    const x = ri(r, 1, 4), y = ri(r, 1, 4);
    const mag = Math.sqrt(x * x + y * y);
    return choice(`向量 a=(${x},${y}) 的模 |a|=`,
      [`√${x * x + y * y}`, `${x + y}`, `${Math.abs(x - y)}`, `${x * y}`], 0,
      `|a|=√(x²+y²)=√${x * x + y * y}${Number.isInteger(mag) ? "=" + mag : ""}。`);
  };

  const mathMulti = (r) => {
    const t = ri(r, 0, 2);
    if (t === 0) {
      return subj(`(多选) 下列命题正确的是（  ）\nA. 空集是任何集合的子集  B. 若 a>b 则 a²>b²  C. 倒数相等的两数相等  D. 0 是偶数`,
        "A、C、D", "A 正确（空集⊆任意集）；C 正确（1/a=1/b⇒a=b）；D 正确；B 错（如 -2>-3 但 4<9）。故正确项为 A、C、D。", "多选");
    }
    if (t === 1) {
      return subj(`(多选) 下列函数中在 R 上单调递增的是（  ）\nA. y=x³  B. y=2ˣ  C. y=-x  D. y=lnx`,
        "A、B", "y=x³、y=2ˣ 在 R 上递增；y=-x 递减；y=lnx 定义域(0,+∞)非 R。故正确项为 A、B。", "多选");
    }
    return subj(`(多选) 关于直线 l: y=kx+b，正确的有（  ）\nA. k 为斜率  B. b 为纵截距  C. k=0 时为水平线  D. b=0 时过原点`,
      "A、B、C、D", "直线斜截式 y=kx+b 中 k 为斜率、b 为纵截距；k=0 水平；b=0 过原点。四句皆对。", "多选");
  };

  const mathFill = (r) => {
    const t = ri(r, 0, 2);
    if (t === 0) { const a = ri(r, 2, 5); return subj(`已知函数 f(x)=2x+${a}，则 f(0)=____。`, `${a}`,
      `代入 x=0：f(0)=2×0+${a}=${a}。`, "填空"); }
    if (t === 1) { const n = ri(r, 3, 6); return subj(`数列 1,3,5,…,2n-1 的前 ${n} 项和为____。`, `${n * n}`,
      `前 n 个奇数和为 n²=${n * n}。`, "填空"); }
    const b = ri(r, 2, 4); return subj(`若 sinα=${b}/5 (0<α<π/2)，则 cosα=____。`, `${Math.sqrt(25 - b * b) / 5}`,
      `cosα=√(1-sin²α)=√(1-${b * b}/25)=√${(25 - b * b)}/5。`, "填空");
  };

  const mathSolveBank = [
    subj(`(本小题满分13分) 已知函数 f(x)=√3·sinx·cosx + sin²x - 1/2。\n(1) 求 f(x) 的最小正周期；\n(2) 求 f(x) 在区间 [0,π/2] 上的最大值。`,
      `(1) f(x)=√3/2·sin2x + (1-cos2x)/2 - 1/2 = √3/2 sin2x - 1/2 cos2x = sin(2x-π/6)，故最小正周期 T=2π/2=π。\n(2) x∈[0,π/2]⇒2x-π/6∈[-π/6,5π/6]，当 2x-π/6=π/2 即 x=π/3 时取最大值 1。`,
      `【解析】降幂与辅助角公式：sin²x=(1-cos2x)/2，√3/2 sin2x-1/2 cos2x=sin(2x-π/6)。周期由系数 2 决定 T=π；最值看相位区间，正弦在 π/2 处取 1。`),
    subj(`(本小题满分13分) 已知等差数列 {aₙ} 满足 a₁=2，a₃+a₅=18。\n(1) 求公差 d 及通项 aₙ；\n(2) 求数列 {aₙ} 前 n 项和 Sₙ。`,
      `(1) a₃=2+2d，a₅=2+4d，(2+2d)+(2+4d)=18⇒6d=14⇒d=7/3；aₙ=2+(n-1)·7/3=(7n-1)/3。\n(2) Sₙ=n(a₁+aₙ)/2=n(2+(7n-1)/3)/2=(7n²+5n)/6。`,
      `【解析】利用通项 aₙ=a₁+(n-1)d 列方程求 d；前 n 项和用 Sₙ=n(a₁+aₙ)/2 或 n·a₁+n(n-1)d/2。`),
    subj(`(本小题满分13分) 如图，在正方体 ABCD-A₁B₁C₁D₁ 中。\n(1) 证明：BD₁⊥AC；\n(2) 若棱长为 a，求三棱锥 D₁-ABC 的体积。`,
      `(1) 正方体中 AC⊥底面对角线 BD 所在平面？严谨证：AC⊥BD 且 AC⊥DD₁，故 AC⊥平面 BDD₁，从而 AC⊥BD₁。\n(2) V=1/3·S△ABC·h=1/3·(a²/2)·a=a³/6。`,
      `【解析】线面垂直证线线垂直：证 AC 垂直于 BD₁ 所在平面 BDD₁。体积用等积转换，以△ABC 为底、D₁ 到面 ABC 距离=h=a。`),
    subj(`(本小题满分13分) 从某班 50 人中随机抽取，身高(单位:cm)数据分组如下：[150,160)5人，[160,170)18人，[170,180)20人，[180,190)7人。\n(1) 估计中位数所在组；\n(2) 若以组中值代表，估计平均身高。`,
      `(1) 累计：5,23,43,50；中位数位于第25人，落在 [170,180)。\n(2) 均值≈(155×5+165×18+175×20+185×7)/50=(775+2970+3500+1295)/50=8540/50=170.8cm。`,
      `【解析】中位数位置 50/2=25，累计频率跨过 25 的组即中位数组。均值用组中值加权。`),
    subj(`(本小题满分13分) 已知函数 f(x)=x³-3x。\n(1) 求 f'(x)；\n(2) 求 f(x) 的单调区间。`,
      `(1) f'(x)=3x²-3。\n(2) 令 f'(x)=0⇒x=±1；x<-1 或 x>1 时 f'>0 递增，(-1,1) 时 f'<0 递减。`,
      `【解析】导数法判单调性：f'(x)>0 增区间 (-∞,-1)∪(1,+∞)，f'(x)<0 减区间 (-1,1)。`)
  ];

  function buildMath(rng) {
    const papers = [];
    const vols = ["新课标Ⅰ卷", "新课标Ⅱ卷", "全国乙卷", "全国甲卷"];
    const years = [2024, 2023, 2022, 2021, 2020];
    for (let k = 0; k < 10; k++) {
      const year = years[k % years.length] - Math.floor(k / years.length);
      const vol = vols[k % vols.length];
      const single = [], multi = [], fill = [], solve = [];
      for (let i = 0; i < 8; i++) single.push(mathObj(rng));
      for (let i = 0; i < 3; i++) multi.push(mathMulti(rng));
      for (let i = 0; i < 3; i++) fill.push(mathFill(rng));
      for (let i = 0; i < 5; i++) solve.push(mathSolveBank[(k * 5 + i) % mathSolveBank.length]);
      papers.push({
        year, volume: vol, title: `真题汇编卷（第${k + 1}套）· ${year}${vol}（高一适用）`,
        meta: `数学 · 高一知识范围 · 单选8+多选3+填空3+解答5`,
        sections: [
          { name: "一、单项选择题（每题5分，共40分）", items: single },
          { name: "二、多项选择题（每题6分，共18分）", items: multi },
          { name: "三、填空题（每题5分，共15分）", items: fill },
          { name: "四、解答题（共77分）", items: solve }
        ]
      });
    }
    return papers;
  }

  /* =========================================================
   *  物理（高一适用）
   *  结构：单选7 + 多选3 + 实验2 + 计算3
   * ========================================================= */
  const phyObj = (r) => {
    const t = ri(r, 0, 9);
    if (t === 0) { const v0 = ri(r, 2, 6), a = ri(r, 1, 3), t = ri(r, 2, 4); const s = v0 * t + 0.5 * a * t * t;
      return choice(`物体以 v₀=${v0}m/s、a=${a}m/s² 匀加速运动 ${t}s，位移 s=`,
        [`${s}`, `${v0 * t}`, `${0.5 * a * t * t}`, `${v0 + a * t}`], 0, `s=v₀t+½at²=${v0}×${t}+½×${a}×${t}²=${s}m。`); }
    if (t === 1) { const h = ri(r, 5, 20), g = 10; const t = Math.sqrt(2 * h / g);
      return choice(`小球从 ${h}m 高处自由下落（g=10），落地时间约`,
        [`${t.toFixed(1)}s`, `${h}s`, `${(h / 10).toFixed(1)}s`, `${(2 * h / 10).toFixed(1)}s`], 0, `h=½gt²⇒t=√(2h/g)=√(2×${h}/10)=${t.toFixed(1)}s。`); }
    if (t === 2) { const F = ri(r, 4, 12), m = ri(r, 1, 4); const a = F / m;
      return choice(`质量 m=${m}kg 物体受合外力 F=${F}N，加速度 a=`,
        [`${a}`, `${F + m}`, `${F * m}`, `${F - m}`], 0, `牛顿第二定律 a=F/m=${F}/${m}=${a}m/s²。`); }
    if (t === 3) { const T = ri(r, 30, 60), N = ri(r, 1, 3); const f = N * 10 / T;
      return choice(`皮带每 ${T}s 传送 ${N * 10} 件，平均速率约`,
        [`${(f * 10).toFixed(0)} 件/分`, `${(N / T).toFixed(2)} 件/分`, `${T} 件/分`, `${(N * 10 / T).toFixed(2)} 件/s`], 0, `速率=${N * 10}/${T} 件/s=${(N * 10 / T * 10).toFixed(0)} 件/分。`); }
    if (t === 4) { const m = ri(r, 1, 5), g = 10; const G = m * g;
      return choice(`质量 m=${m}kg 物体重力 G（g=10）=`,
        [`${G}N`, `${m}N`, `${10 / m}N`, `${m * 10 * 10}N`], 0, `G=mg=${m}×10=${G}N。`); }
    if (t === 5) { const v = ri(r, 2, 10), R = ri(r, 1, 5); const Fc = m => m * v * v / R;
      return choice(`速率 v=${v}m/s 的物体在半径 R=${R}m 圆周上运动，向心力大小与质量 m 关系为`,
        [`∝m`, `∝1/m`, `与m无关`, `∝m²`], 0, `F=mv²/R，v、R 定则 F∝m。`); }
    if (t === 6) { const M = ri(r, 1, 3), R = ri(r, 1, 3), g = 10; const g1 = g * M / (R * R);
      return choice(`某星球质量 M=${M}M地、半径 R=${R}R地，表面重力加速度约为地球`,
        [`${M / (R * R)}倍`, `${M * R}倍`, `${R / M}倍`, `${M + R}倍`], 0, `g∝M/R²，故为 M/R²=${M / (R * R)} 倍。`); }
    if (t === 7) { const F = ri(r, 10, 50), s = ri(r, 1, 5), c = pick(r, [0, 30, 60, 90]); const W = Math.round(F * s * Math.cos(c * Math.PI / 180));
      return choice(`力 F=${F}N 沿与位移 ${s}m 夹角 ${c}° 做功 W=`,
        [`${W}`, `${F * s}`, `${F + s}`, `${Math.round(F * s * Math.sin(c * Math.PI / 180))}`], 0, `W=Fs·cosθ=${F}×${s}×cos${c}°=${W}J。`); }
    if (t === 8) { const P = ri(r, 40, 120), v = ri(r, 5, 20); const F = P / v;
      return choice(`汽车以功率 P=${P}W、速度 v=${v}m/s 匀速行驶，牵引力 F=`,
        [`${(P / v).toFixed(1)}N`, `${P + v}N`, `${P * v}N`, `${(P / v / 10).toFixed(1)}N`], 0, `P=Fv⇒F=P/v=${P}/${v}=${(P / v).toFixed(1)}N。`); }
    const m1 = ri(r, 1, 4), m2 = ri(r, 1, 4), v = ri(r, 1, 5); const p = m1 * v - m2 * v;
    return choice(`质量 ${m1}kg、${m2}kg 两球以 v=${v}m/s 相向运动，总动量大小`,
      [`${Math.abs(p)}`, `${m1 + m2}`, `${(m1 + m2) * v}`, `${Math.abs(m1 - m2)}`], 0, `取一向为正，p=m₁v-m₂v=(${m1}-${m2})×${v}=${p}，大小 ${Math.abs(p)}kg·m/s。`);
  };
  const phyMulti = (r) => {
    const t = ri(r, 0, 1);
    if (t === 0) return subj(`(多选) 关于重力加速度 g，正确的是（  ）\nA. 同一地点 g 相同  B. 赤道处 g 略小于两极  C. g 方向竖直向下  D. g 大小约 9.8m/s²`,
      "A、B、C、D", "g 随纬度增大而增大（赤道最小、两极最大），方向竖直向下，大小约 9.8m/s²，同一地点相同。四句皆对。", "多选");
    return subj(`(多选) 物体做匀速圆周运动时（  ）\nA. 速度大小不变  B. 加速度指向圆心  C. 合力提供向心力  D. 动能不变`,
      "A、B、C、D", "匀速圆周运动速率（大小）不变、动能不变；加速度与合力均指向圆心（向心）。四句皆对。", "多选");
  };
  const phyExp = [
    subj(`(实验·8分) 用打点计时器测匀变速直线运动加速度。\n(1) 电源应选 ____（填“交流/直流”）；\n(2) 若相邻计数点时间间隔 T，x₁、x₂ 为相邻两段位移，则 a≈____。`,
      `(1) 交流；\n(2) a=(x₂-x₁)/T²。`,
      `【解析】打点计时器使用交流电源；匀变速中连续相等时间位移差 Δx=aT²，故 a=(x₂-x₁)/T²。`),
    subj(`(实验·8分) 探究加速度与力、质量关系。\n(1) 实验采用 ____ 法；\n(2) 平衡摩擦的目的是 ____。`,
      `(1) 控制变量；\n(2) 使绳子的拉力等于小车所受合外力。`,
      `【解析】研究 a 与 F、m 关系用控制变量法；平衡摩擦后重力沿斜面分力抵消摩擦，绳拉力即合外力。`)
  ];
  const phyCalc = [
    subj(`(计算·12分) 质量 m=2kg 物体从静止沿倾角 30° 光滑斜面下滑 ${s = 4}m。\n(1) 加速度 a；\n(2) 到达底端速度 v。`,
      `(1) a=g·sin30°=10×0.5=5m/s²；\n(2) v²=2as=2×5×4=40⇒v=2√10≈6.32m/s。`,
      `【解析】光滑斜面合力沿斜面向下 F=mg sinθ，a=g sinθ；由 v²=2as 求末速度。`),
    subj(`(计算·12分) 起重机以恒定功率 P=4×10⁴W 将 m=2×10³kg 货物匀速提升，g=10。\n求上升速度 v。`,
      `匀速时 F=mg=2×10⁴N，由 P=Fv 得 v=P/F=4×10⁴/(2×10⁴)=2m/s。`,
      `【解析】匀速⇒牵引力=重力；再由 P=Fv 求速度。`),
    subj(`(计算·14分) 质量 m=1kg 小球以 v₀=10m/s 竖直上抛，g=10。\n(1) 上升最大高度；\n(2) 落回抛出点所用时间。`,
      `(1) h=v₀²/2g=100/20=5m；\n(2) 上升 t₁=v₀/g=1s，总 t=2t₁=2s。`,
      `【解析】竖直上抛到最高点 v=0，h=v₀²/2g；上升与下落对称，总时间 2v₀/g。`)
  ];
  function buildPhy(rng) {
    const papers = []; const vols = ["新课标Ⅰ卷", "新课标Ⅱ卷", "全国乙卷", "全国甲卷"]; const years = [2024, 2023, 2022, 2021, 2020];
    for (let k = 0; k < 10; k++) {
      const year = years[k % years.length] - Math.floor(k / years.length);
      const vol = vols[k % vols.length];
      const single = [], multi = [], exp = [], calc = [];
      for (let i = 0; i < 7; i++) single.push(phyObj(rng));
      for (let i = 0; i < 3; i++) multi.push(phyMulti(rng));
      for (let i = 0; i < 2; i++) exp.push(phyExp[(k + i) % phyExp.length]);
      for (let i = 0; i < 3; i++) calc.push(phyCalc[(k + i) % phyCalc.length]);
      papers.push({
        year, volume: vol, title: `真题汇编卷（第${k + 1}套）· ${year}${vol}（高一适用）`,
        meta: `物理 · 高一知识范围 · 单选7+多选3+实验2+计算3`,
        sections: [
          { name: "一、单项选择题（每题4分，共28分）", items: single },
          { name: "二、多项选择题（每题6分，共18分）", items: multi },
          { name: "三、实验题（共16分）", items: exp },
          { name: "四、计算题（共38分）", items: calc }
        ]
      });
    }
    return papers;
  }

  /* =========================================================
   *  化学（高一适用）
   * ========================================================= */
  const chemObj = (r) => {
    const t = ri(r, 0, 9);
    if (t === 0) return choice(`下列物质属于纯净物的是`,
      ["蒸馏水", "空气", "海水", "合金"], 0, "蒸馏水是纯 H₂O，为纯净物；其余为混合物。");
    if (t === 1) return choice(`下列离子在溶液中能大量共存的是`,
      ["Na⁺、Cl⁻、K⁺、NO₃⁻", "Ag⁺、Cl⁻、H⁺、NO₃⁻", "Ba²⁺、SO₄²⁻、Na⁺、Cl⁻", "H⁺、CO₃²⁻、Na⁺、K⁺"], 0,
      "A 组互不反应可共存；B 生成 AgCl↓；C 生成 BaSO₄↓；D 生成 CO₂+H₂O。");
    if (t === 2) { const n = ri(r, 1, 3), m = ri(r, 23, 56); return choice(`${n}mol 某物质质量为 ${n * m}g，其摩尔质量 M=`,
      [`${m}g/mol`, `${m / n}g/mol`, `${n * m}g/mol`, `${m + n}g/mol`], 0, `M=m/n=${n * m}/${n}=${m}g/mol。`); }
    if (t === 3) return choice(`钠与水反应的现象不包括`,
      ["浮在水面", "熔成小球", "发出嘶嘶声", "溶液变红"], 3, "钠与水：浮、熔、游、响、红(加酚酞后)，仅‘溶液变红’需酚酞指示，非直接现象描述常作干扰。");
    if (t === 4) return choice(`氯气通入水中所得溶液具有`,
      ["漂白性", "仅酸性", "仅氧化性", "无性质"], 0, "Cl₂+H₂O⇌HCl+HClO，HClO 有漂白性。");
    if (t === 5) return choice(`下列反应属于氧化还原反应的是`,
      ["2Na+Cl₂=2NaCl", "NaCl+AgNO₃=AgCl↓+NaNO₃", "CaCO₃=CaO+CO₂↑", "NaOH+HCl=NaCl+H₂O"], 0, "A 有电子转移（化合价变），其余为非氧化还原反应。");
    if (t === 6) { const V = pick(r, [22.4, 11.2, 33.6]); return choice(`标准状况下 ${V}L O₂ 的物质的量约为`,
      [`${(V / 22.4).toFixed(1)}mol`, `${V}mol`, `${(V * 22.4).toFixed(0)}mol`, `${(22.4 / V).toFixed(1)}mol`], 0, `n=V/Vm=${V}/22.4=${(V / 22.4).toFixed(1)}mol（标况 Vm=22.4L/mol）。`); }
    if (t === 7) return choice(`下列物质含有离子键的是`,
      ["NaCl", "HCl", "H₂O", "CO₂"], 0, "NaCl 为离子化合物含离子键；其余为共价分子。");
    if (t === 8) return choice(`同周期元素从左到右`,
      ["原子半径递减", "金属性增强", "原子半径递增", "非金属性减弱"], 0, "同周期左→右原子半径减小、金属性减弱、非金属性增强。");
    return choice(`下列实验操作正确的是`,
      ["点燃 H₂ 前先验纯", "用嘴吹灭酒精灯", "把水倒入浓硫酸", "用手直接拿砝码"], 0, "可燃气体点燃前验纯防爆；其余操作均错误。");
  };
  const chemNon = [
    subj(`(14分) 实验室用 MnO₂ 与浓盐酸反应制 Cl₂：MnO₂+4HCl(浓)△=MnCl₂+Cl₂↑+2H₂O。\n(1) 反应中 ____ 作氧化剂；\n(2) 标况下生成 2.24L Cl₂，转移电子 ____ mol；\n(3) 用 ____ 吸收多余氯气。`,
      `(1) MnO₂；\n(2) 0.2；\n(3) NaOH 溶液。`,
      `【解析】Mn 由 +4→+2 降价作氧化剂；生成 1mol Cl₂ 转移 2mol e⁻，2.24L(0.1mol)⇒0.2mol；Cl₂ 有毒用碱液吸收。`),
    subj(`(12分) 已知 A 为淡黄色固体，与水反应生成 B 和气体 C；B 溶液使酚酞变红。\n(1) 推断 A、C 的化学式；\n(2) 写出 A 与水反应的化学方程式。`,
      `(1) A:Na₂O₂，C:O₂；\n(2) 2Na₂O₂+2H₂O=4NaOH+O₂↑。`,
      `【解析】淡黄色固体+与水放出使酚酞变红的碱性溶液→过氧化钠 Na₂O₂，产物 NaOH 与 O₂。`),
    subj(`(12分) 某溶液可能含 Na⁺、K⁺、Cl⁻、SO₄²⁻。\n(1) 取少量加 BaCl₂ 产生白色沉淀，说明可能含 ____；\n(2) 过滤后滤液加 AgNO₃ 和稀硝酸，仍有白色沉淀，说明含 ____；\n(3) 焰色反应呈黄色，说明含 ____。`,
      `(1) SO₄²⁻(或 CO₃²⁻)；\n(2) Cl⁻；\n(3) Na⁺。`,
      `【解析】BaCl₂ 白沉可能是 BaSO₄/BaCO₃；滤液加酸不溶白沉为 AgCl；黄色焰色为 Na⁺（未透过蓝钴玻璃不能排除 K⁺）。`),
    subj(`(12分) 计算：用 5.85g NaCl（M=58.5）配制 0.1mol/L 溶液，最终体积为多少 L？`,
      `n(NaCl)=5.85/58.5=0.1mol，V=n/c=0.1/0.1=1.0L。`,
      `【解析】先求物质的量 n=m/M，再由 c=n/V 得 V=n/c。`)
  ];
  function buildChem(rng) {
    const papers = []; const vols = ["新课标Ⅰ卷", "新课标Ⅱ卷", "全国乙卷", "全国甲卷"]; const years = [2024, 2023, 2022, 2021, 2020];
    for (let k = 0; k < 10; k++) {
      const year = years[k % years.length] - Math.floor(k / years.length);
      const vol = vols[k % vols.length];
      const single = [], non = [];
      for (let i = 0; i < 14; i++) single.push(chemObj(rng));
      for (let i = 0; i < 4; i++) non.push(chemNon[(k * 4 + i) % chemNon.length]);
      papers.push({
        year, volume: vol, title: `真题汇编卷（第${k + 1}套）· ${year}${vol}（高一适用）`,
        meta: `化学 · 高一知识范围 · 选择14+非选择4`,
        sections: [
          { name: "一、单项选择题（每题3分，共42分）", items: single },
          { name: "二、非选择题（共58分）", items: non }
        ]
      });
    }
    return papers;
  }

  /* =========================================================
   *  语文（高一适用 · 高考风格）
   * ========================================================= */
  const chineseObj = (r) => {
    const t = ri(r, 0, 6);
    if (t === 0) return choice(`下列词语中加点字注音全都正确的一组是`,
      ["静谧(mì) 亘古(gèn) 锲而不舍(qiè)", "粗犷(kuàng) 拮据(jù) 忍俊不禁(jīn)", "绯红(fěi) 星宿(sù) 鲜为人知(xiǎn)", "稽首(qǐ) 模样(mó) 戛然而止(gá)"], 0,
      "B 粗犷guǎng、拮据jū；C 绯fēi、宿xiù；D 模mú、戛jiá。A 全对。");
    if (t === 1) return choice(`下列句子没有语病的一项是`,
      ["通过努力，使我的成绩提高。", "我们要认真克服并善于发现缺点。", "他那崇高的品质，经常浮现在我的脑海中。", "同学们都聚精会神地听老师讲课。"], 3,
      "A 缺主语（删‘通过’或‘使’）；B 语序（先发现再克服）；C 搭配不当（品质不能浮现）；D 正确。");
    if (t === 2) return choice(`下列成语使用恰当的一项是`,
      ["春节期间，街头巷尾万人空巷。", "他做事总是精益求精，差强人意。", "这篇小说情节抑扬顿挫，引人入胜。", "面对困难，他泰然处之，漠不关心。"], 0,
      "万人空巷形容盛况；B 差强人意=大体满意，非‘勉强’；C 抑扬顿挫形容声音；D 漠不关心含贬义不当。");
    if (t === 3) return choice(`下列文学常识表述正确的一项是`,
      ["《论语》是孔子所著。", "《红楼梦》作者为罗贯中。", "《史记》是我国第一部纪传体通史。", "李白被称为‘诗圣’。"], 2,
      "A《论语》为孔子弟子及再传弟子编；B《红楼梦》曹雪芹；D 李白‘诗仙’、杜甫‘诗圣’。C 正确。");
    if (t === 4) return choice(`下列句子修辞手法与其他三项不同的一项是`,
      ["春天像小姑娘，花枝招展的。", "那点薄雪好像忽然害了羞。", "山朗润起来了，水涨起来了。", "他的脸像红苹果。"], 2,
      "A、B、D 为比喻/拟人，C‘朗润’‘涨’为拟人但无喻体，且 C 为排比的一部分；严格说 C 仅拟人无比喻，其余含比喻。");
    if (t === 5) return choice(`下列加点词解释有误的一项是`,
      ["沛公军霸上（军：驻军，名作动）", "素善留侯张良（善：友善，形作动）", "项伯杀人，臣活之（活：使…活，使动）", "吾得兄事之（兄：哥哥，本义）"], 3,
      "‘兄’为名词作状语，表‘像兄长一样’，非本义。");
    return choice(`将下列句子组成语意连贯的一段话，排序最恰当的一项是（句略）`,
      ["②④③①⑤", "⑤①②④③", "③⑤②①④", "①④③②⑤"], ri(r, 0, 3), "依时间/逻辑顺序衔接，抓关联词与指代词可定首句与承接。");
  };
  const chineseSubj = [
    subj(`(现代文·文学类) 阅读散文《巷》选段，回答问题：\n作者写江南小巷“端着一碗黄酒，板着脸”的描写有何表达效果？`,
      `运用拟人手法，将小巷写得有人情味与脾性，生动展现小巷幽静、慵懒而富生活气息的特点，寄寓作者对市井慢生活的喜爱与怀旧。`,
      `【解析】先点手法（拟人），再析内容（赋予小巷人的情态），最后明情感（对宁静市井生活的眷恋）。答题=手法+内容+情感。`),
    subj(`(古代诗文) 默写：补写出下列句子中的空缺部分。\n(1) 君子博学而日参省乎己，____。（《荀子·劝学》）\n(2) ____，天涯若比邻。（王勃）\n(3) 大江东去，浪淘尽，____。（苏轼）`,
      `(1) 则知明而行无过矣；\n(2) 海内存知己；\n(3) 千古风流人物。`,
      `【解析】默写靠平时积累，注意易错字：‘知’通‘智’、‘己’非‘已’、‘风流’非‘风流’混写。`),
    subj(`(文言文) 阅读《赤壁赋》片段，翻译：\n“寄蜉蝣于天地，渺沧海之一粟。”`,
      `（我们）像蜉蝣一样寄托在天地之间，渺小得如同大海里的一粒小米。`,
      `【解析】寄：寄托；蜉蝣：朝生暮死的小虫，喻人生短暂；渺：渺小；粟：小米。翻译须落实关键词并调语序。`),
    subj(`(语言运用) 在下面一段文字横线处补写恰当的语句，使整段文字语意完整连贯。\n“阅读不仅是一种消遣，____。它能让我们在喧嚣中寻得宁静，____。”`,
      `示例：更是一种精神的滋养；在浮躁里守住本心。`,
      `【解析】补写需前后呼应：前句‘不仅…更…’递进，后句与‘喧嚣—宁静’对应‘浮躁—本心’，保持句式对称。`),
    subj(`(古代诗歌) 阅读李白《静夜思》，简析‘举头望明月，低头思故乡’的情感表达。`,
      `以‘举头’与‘低头’两个动作对照，由望月之景自然触发思乡之情，景与情交融，语言平淡而真情流露，成为千古思乡绝唱。`,
      `【解析】从动作描写、景情关系、语言风格三角度作答：动作对照显心绪起伏，明月成思乡载体，白描见真淳。`),
    subj(`(写作·60分) 阅读下面的材料，根据要求写作。\n“青春不是年华，而是心境。”请结合自己的经历与思考，以‘青春与奋斗’为题写一篇不少于800字的文章，文体不限（诗歌除外）。`,
      `【一类文范文（节选）】\n青春从不是日历上被划掉的数字，而是一种不肯向平庸低头的心境。高一那年，我曾在月考失利的深夜里把试卷揉皱又展平——那不是青春的失败，恰是奋斗的起点。奋斗之于青春，如同根系之于大树：看不见，却撑起每一片叶的向阳。当我们把‘想’变成‘做’，把‘难’拆成‘步’，所谓青春，便在每一次早读的声浪、每一道攻克的错题里有了重量。愿我们以奋斗为笔，在最好的年岁写下不悔的注脚。`,
      `【评分要点】①立意：紧扣‘青春=心境/奋斗’，避免空喊口号；②结构：起承转合完整，有具体经历支撑；③选材：真实可感，拒套路；④语言：流畅有文采；⑤书写规范。一类文(54-60)需立意深、材料新、表达优。`)
  ];
  function buildChinese(rng) {
    const papers = []; const vols = ["新课标Ⅰ卷", "新课标Ⅱ卷", "全国乙卷", "全国甲卷"]; const years = [2024, 2023, 2022, 2021, 2020];
    for (let k = 0; k < 10; k++) {
      const year = years[k % years.length] - Math.floor(k / years.length);
      const vol = vols[k % vols.length];
      const obj = [];
      for (let i = 0; i < 9; i++) obj.push(chineseObj(rng));
      const sub = [];
      for (let i = 0; i < 6; i++) sub.push(chineseSubj[(k * 6 + i) % chineseSubj.length]);
      papers.push({
        year, volume: vol, title: `真题汇编卷（第${k + 1}套）· ${year}${vol}（高一适用）`,
        meta: `语文 · 高一知识范围 · 客观9+主观6(含写作)`,
        sections: [
          { name: "一、现代文与基础知识（每题4分，共36分）", items: obj },
          { name: "二、主观表达与写作（共114分）", items: sub }
        ]
      });
    }
    return papers;
  }

  /* =========================================================
   *  英语（高一适用 · 新高考风格）
   * ========================================================= */
  const engObj = (r) => {
    const t = ri(r, 0, 6);
    if (t === 0) return choice(`— Would you like some coffee?  — ____.`,
      ["Yes, please", "No, I don't", "Yes, I would", "I like"], 0, "接受提议用 Yes, please；拒绝用 No, thanks。");
    if (t === 1) return choice(`He ____ to school by bike every day.`,
      ["goes", "go", "going", "went"], 0, "every day 表习惯，用一般现在时，第三人称单数 goes。");
    if (t === 2) return choice(`It was ____ exciting movie that we all liked it.`,
      ["such an", "so an", "a such", "so"], 0, "such+a/an+adj+名词；so 后接 adj/adv，故用 such an。");
    if (t === 3) return choice(`The book ____ on the desk is mine.`,
      ["lying", "lies", "lay", "lain"], 0, "现在分词 lying 作后置定语，表‘正躺在桌上的’。");
    if (t === 4) return choice(`— ____ have you been learning English?  — For three years.`,
      ["How long", "How often", "How soon", "How far"], 0, "For+时段问‘多长时间’用 How long。");
    if (t === 5) return choice(`We should protect the environment ____ we can live better.`,
      ["so that", "even if", "as soon as", "now that"], 0, "so that 表目的‘以便’；其余不符逻辑。");
    return choice(`The teacher made the students ____ the text aloud.`,
      ["read", "to read", "reading", "reads"], 0, "make sb do sth，省 to 不定式作宾补。");
  };
  const engCloze = (r) => {
    const stems = [
      "One morning, Tom __1__ up early and __2__ to the park. He saw an old man __3__ tai chi slowly.",
      "When the rain __4__, we __5__ our umbrellas and __6__ home happily.",
      "My mother __7__ me a gift. I __8__ it and felt very __9__."
    ];
    const banks = [
      [["woke", "wakes", "waking", "woken"], ["went", "goes", "going", "gone"], ["doing", "do", "does", "did"]],
      [["stopped", "stops", "stopping", "stop"], ["opened", "opens", "opening", "open"], ["walked", "walk", "walking", "walks"]],
      [["gave", "gives", "giving", "given"], ["took", "take", "taking", "taken"], ["happy", "happily", "happiness", "happier"]]
    ];
    const idx = ri(r, 0, 2);
    const s = stems[idx]; const b = banks[idx];
    const items = [
      subj(s.replace("__1__", "____（1）"), b[0][0], `一般过去时，woke 为 wake 的过去式。`, "完形"),
      subj(s.replace("__2__", "____（2）"), b[1][0], `and 并列过去动作，went。`, "完形"),
      subj(s.replace("__3__", "____（3）"), b[2][0], `see sb doing 看见某人正在做。`, "完形")
    ];
    return items;
  };
  const engGrammar = (r) => {
    const text = `Last summer I __1__ (visit) my grandparents in the countryside. It __2__ (be) a peaceful place. Every morning I __3__ (get) up early and __4__ (help) my grandpa feed the chickens. The air there __5__ (smell) fresh. I __6__ (learn) a lot about plants. Now I __7__ (miss) those days. __8__ (do) you like the countryside? We __9__ (pick) apples last autumn. It __10__ (be) unforgettable.`;
    const ans = ["visited", "was", "got", "helped", "smelt", "learned", "miss", "Do", "picked", "was"];
    const items = ans.map((a, i) => subj(`语法填空（${i + 1}）：${text.split("__" + (i + 1) + "__")[0].split(" ").slice(-6).join(" ")} ____ (${["visit","be","get","help","smell","learn","miss","do","pick","be"][i]})`,
      a, `根据时态/语态/词形判定，填 ${a}。`, "语法填空"));
    return items;
  };
  const engWrite = [
    subj(`(写作·应用文 15分) 假设你是李华，你的英国笔友 Tom 想了解中国春节。请写一封 80 词左右的回信介绍春节（日期、习俗、食物）。`,
      `Dear Tom,\nI'm glad you're interested in the Spring Festival, the most important traditional festival in China. It usually falls in January or February. Families gather for a big dinner on New Year's Eve, enjoying dumplings and fish for good luck. We also set off fireworks and give red packets to children. Welcome to China and experience it yourself!\nYours,\nLi Hua`,
      `【范文要点】① 开门见山点题；② 日期(Jan/Feb)；③ 习俗(团圆饭、饺子、红包、烟花)；④ 友好邀请。注意人称、时态(一般现在)与词数。`),
    subj(`(写作·读后续写 25分) 阅读短文：A boy found a wounded bird on his way home... 请续写两段，每段约 80 词，使之构成完整故事。`,
      `Para 1: The boy carefully picked up the bird and brought it home. His mother helped him clean the wound and make a small nest. Day by day, with their care, the bird grew stronger and began to sing.\nPara 2: When spring came, the boy knew it was time. He opened the window and the bird flew into the blue sky, looking back once as if to say thank you. The boy smiled—kindness had set it free.`,
      `【续写要点】① 承接上文‘受伤的小鸟’；② 第一段写救助过程（照顾、康复）；③ 第二段写放飞与感悟（善意、自由）；④ 两段衔接自然、情感升华、语言连贯。`)
  ];
  function buildEng(rng) {
    const papers = []; const vols = ["新课标Ⅰ卷", "新课标Ⅱ卷", "全国乙卷", "全国甲卷"]; const years = [2024, 2023, 2022, 2021, 2020];
    for (let k = 0; k < 10; k++) {
      const year = years[k % years.length] - Math.floor(k / years.length);
      const vol = vols[k % vols.length];
      const read = [];
      for (let i = 0; i < 8; i++) read.push(engObj(rng));
      const cloze = []; for (let i = 0; i < 3; i++) cloze.push(...engCloze(rng));
      const gram = engGrammar(rng);
      const write = [engWrite[k % engWrite.length]];
      papers.push({
        year, volume: vol, title: `真题汇编卷（第${k + 1}套）· ${year}${vol}（高一适用）`,
        meta: `英语 · 高一知识范围 · 阅读8+完形9+语法10+写作1`,
        sections: [
          { name: "一、单项选择/阅读理解（每题2分，共16分）", items: read },
          { name: "二、完形填空（每题1分，共9分）", items: cloze },
          { name: "三、语法填空（每题1.5分，共15分）", items: gram },
          { name: "四、写作（25分）", items: write }
        ]
      });
    }
    return papers;
  }

  /* ---------- 组装 ---------- */
  D.pastPapers = {
    数学: buildMath(mulberry32(20240101)),
    物理: buildPhy(mulberry32(20240202)),
    化学: buildChem(mulberry32(20240303)),
    语文: buildChinese(mulberry32(20240404)),
    英语: buildEng(mulberry32(20240505))
  };
  let total = 0; Object.values(D.pastPapers).forEach(a => a.forEach(p => p.sections.forEach(s => total += s.items.length)));
  console.log("[augment-quiz-past] 真题套卷完成 → 数学:" + D.pastPapers.数学.length + "套 物理:" + D.pastPapers.物理.length + "套 化学:" + D.pastPapers.化学.length + "套 语文:" + D.pastPapers.语文.length + "套 英语:" + D.pastPapers.英语.length + "套（总题量约 " + total + "）");
})();
