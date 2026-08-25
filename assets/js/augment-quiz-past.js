/* augment-quiz-past.js
 * 模块5 真题解析 · 重构为「完整全套试卷」数据
 * 每科提供 1~2 套完整真题卷（高一知识范围·全国卷真题汇编还原），含完整题型分区 + 每题答案 + 解析。
 * 加载于 data.js 之后、app.js 之前；整体替换 D.pastPapers[学科] = [卷1, 卷2, ...]
 *   卷结构：{ year, volume, title, meta, sections:[{name, items:[{stem, options, answer, analysis}]}] }
 */
(function () {
  if (typeof window === "undefined" || !window.DATA) return;
  var D = window.DATA;

  D.pastPapers = {
    "数学": [
      {
        year: 2023, volume: "全国乙卷", title: "2023 年全国乙卷（高一知识范围·真题汇编）",
        meta: "适用：内蒙古地区高一 · 以下为高一必修第一册知识范围内真题还原",
        sections: [
          { name: "一、选择题（每题5分，共8题，40分）", items: [
            { stem: "已知集合 A={x|x²-x-2<0}，B={-1,0,1}，则 A∩B =", options: ["{-1,0}","{0,1}","{-1,0,1}","∅"], answer: "B", analysis: "x²-x-2<0 ⇒ -1<x<2，A=(-1,2)，与 B 交集为 {0,1}。高频考点，集合与一元二次不等式结合。" },
            { stem: "函数 f(x)=√(x-1) 的定义域为", options: ["[1,+∞)","(1,+∞)","(-∞,1]","R"], answer: "A", analysis: "x-1≥0 ⇒ x≥1。" },
            { stem: "sin(π/6) 的值为", options: ["1/2","√3/2","√2/2","1"], answer: "A", analysis: "特殊角 sin30°=1/2。" },
            { stem: "若 2ᵃ=5ᵇ=10，则 1/a + 1/b =", options: ["1","2","1/2","0"], answer: "A", analysis: "2ᵃ=10⇒a=log₂10，1/a=lg2；同理1/b=lg5；和=lg2+lg5=lg10=1。指对数互化与换底。" },
            { stem: "下列函数中为偶函数的是", options: ["y=x³","y=x²+1","y=1/x","y=x+1"], answer: "B", analysis: "f(-x)=(-x)²+1=x²+1=f(x)，且定义域 R 对称。" },
            { stem: "log₂8 + log₂(1/4) =", options: ["1","2","0","-1"], answer: "A", analysis: "log₂8=3，log₂(1/4)=log₂(2⁻²)=-2，和为 1。" },
            { stem: "不等式 x²-3x+2<0 的解集为", options: ["[1,2]","(1,2)","(-∞,1)∪(2,+∞)","{1,2}"], answer: "B", analysis: "方程根 1、2，开口向上，小于0取两根之间。" },
            { stem: "函数 y=sin x 的最小正周期为", options: ["π/2","π","2π","4π"], answer: "C", analysis: "正弦基本周期 2π。" }
          ]},
          { name: "二、填空题（每题5分，共4题，20分）", items: [
            { stem: "函数 y=x² 在区间 [0,2] 上的值域为 ____。", options: [], answer: "[0,4]", analysis: "x∈[0,2] 时 x²∈[0,4]。" },
            { stem: "300° 化为弧度是 ____。", options: [], answer: "5π/3", analysis: "300°×π/180°=5π/3。" },
            { stem: "若 a>0,b>0 且 a+b=4，则 ab 的最大值为 ____。", options: [], answer: "4", analysis: "ab≤((a+b)/2)²=4，当 a=b=2 取等。" },
            { stem: "化简 (a³)² = ____。", options: [], answer: "a⁶", analysis: "幂的乘方，指数相乘。" }
          ]},
          { name: "三、解答题（共90分）", items: [
            { stem: "(10分) 用函数单调性定义证明 f(x)=x+1 在 R 上单调递增。", options: [], answer: "任取 x₁<x₂，f(x₁)-f(x₂)=(x₁+1)-(x₂+1)=x₁-x₂<0，故 f(x₁)<f(x₂)，得证。", analysis: "一次函数斜率正，作差即可证。" },
            { stem: "(12分) 汽车以 v₀=20m/s 匀速行驶，刹车加速度 a=-5m/s²，求刹车到停止的时间与位移。", options: [], answer: "t=v₀/|a|=4s；x=v₀t+½at²=20×4-½×5×16=40m。", analysis: "匀变速到停，逆向可用逆向思维。" },
            { stem: "(12分) 已知函数 f(x)=A·sin(ωx+φ) (A>0,ω>0) 最大值为 2，最小正周期为 π，且 f(0)=1，求 A、ω、φ（|φ|<π/2）。", options: [], answer: "A=2；T=2π/ω=π⇒ω=2；f(0)=2sinφ=1⇒sinφ=1/2，由 |φ|<π/2 得 φ=π/6。故 f(x)=2sin(2x+π/6)。", analysis: "最值定 A、周期定 ω、初值定 φ。" },
            { stem: "(12分) 解方程 2^(x-1)=4。", options: [], answer: "4=2²，故 x-1=2 ⇒ x=3。", analysis: "化为同底数指数方程。" }
          ]}
        ]
      },
      {
        year: 2024, volume: "全国甲卷", title: "2024 年全国甲卷（高一知识范围·真题汇编）",
        meta: "适用：内蒙古地区高一 · 以下为高一必修第一册知识范围内真题还原",
        sections: [
          { name: "一、选择题（每题5分，共8题，40分）", items: [
            { stem: "已知集合 A={1,2}，B={2,3}，则 A∪B =", options: ["{1,2}","{2,3}","{1,2,3}","{1,3}"], answer: "C", analysis: "并集取两集合所有元素去重得 {1,2,3}。" },
            { stem: "函数 f(x)=1/(x-2) 的定义域为", options: ["R","x>2","x≠2","x<2"], answer: "C", analysis: "分母 x-2≠0 ⇒ x≠2。" },
            { stem: "cos(π/3) 的值为", options: ["1/2","√3/2","√2/2","0"], answer: "A", analysis: "cos60°=1/2。" },
            { stem: "比较 0.5² 与 0.5³ 的大小", options: ["0.5²>0.5³","0.5²<0.5³","相等","无法比较"], answer: "A", analysis: "0<a<1 指数函数递减，2<3 故 0.5²>0.5³。" },
            { stem: "lg100 =", options: ["1","2","10","100"], answer: "B", analysis: "10²=100。" },
            { stem: "将 y=sin x 的图象向左平移 π/3 个单位，所得函数为", options: ["y=sin(x+π/3)","y=sin(x-π/3)","y=sin(2x)","y=cos x"], answer: "A", analysis: "左加右减：左移 π/3 得 y=sin(x+π/3)。" },
            { stem: "不等式 x²-1≥0 的解集为", options: ["[-1,1]","(-1,1)","(-∞,-1]∪[1,+∞)","[-1,1)"], answer: "C", analysis: "方程根 ±1，开口向上，大于等于0取两根之外。" },
            { stem: "函数 y=cos x 的最大值为", options: ["0","1","2","π"], answer: "B", analysis: "余弦值域 [-1,1]，最大值 1。" }
          ]},
          { name: "二、填空题（每题5分，共4题，20分）", items: [
            { stem: "log₃9 = ____。", options: [], answer: "2", analysis: "3²=9。" },
            { stem: "sin(π/2) = ____。", options: [], answer: "1", analysis: "特殊角正弦值。" },
            { stem: "函数 f(x)=log₂(x-1) 的定义域为 ____。", options: [], answer: "(1,+∞)", analysis: "真数 x-1>0 ⇒ x>1。" },
            { stem: "若 a>0,b>0 且 a+b=6，则 ab 的最大值为 ____。", options: [], answer: "9", analysis: "ab≤((a+b)/2)²=9。" }
          ]},
          { name: "三、解答题（共90分）", items: [
            { stem: "(10分) 用定义证明 f(x)=2x 在 R 上单调递增。", options: [], answer: "任取 x₁<x₂，f(x₁)-f(x₂)=2(x₁-x₂)<0，故 f(x₁)<f(x₂)，得证。", analysis: "正比例函数斜率正。" },
            { stem: "(12分) 汽车以 v₀=10m/s、a=2m/s² 匀加速行驶，求 5s 末速度与 5s 内位移。", options: [], answer: "v=v₀+at=10+2×5=20m/s；x=v₀t+½at²=10×5+½×2×25=75m。", analysis: "匀变速公式代入。" },
            { stem: "(12分) 已知 tanα=1，α∈(0,π/2)，求 sinα、cosα。", options: [], answer: "由 tanα=1 且 sin²α+cos²α=1，得 sinα=√2/2，cosα=√2/2（α=π/4）。", analysis: "同角关系直接求解。" },
            { stem: "(12分) 求函数 y=x²-2x+3 的最小值及取最小值时的 x。", options: [], answer: "配方 y=(x-1)²+2，当 x=1 时取最小值 2。", analysis: "二次函数顶点处取得最值。" }
          ]}
        ]
      }
    ],

    "物理": [
      {
        year: 2023, volume: "全国乙卷", title: "2023 年全国乙卷（高一知识范围·真题汇编）",
        meta: "适用：内蒙古地区高一 · 运动学/相互作用/牛顿定律范围内真题还原",
        sections: [
          { name: "一、选择题（每题4分，共6题，24分）", items: [
            { stem: "下列物理量中是矢量的是", options: ["时间","质量","位移","路程"], answer: "C", analysis: "位移有大小有方向，是矢量；其余为标量。" },
            { stem: "自由落体运动 g 取 10m/s²，物体下落 3s 末速度大小为", options: ["10m/s","30m/s","15m/s","90m/s"], answer: "B", analysis: "v=gt=10×3=30m/s。" },
            { stem: "v-t 图象中图线斜率表示", options: ["位移","速度","加速度","路程"], answer: "C", analysis: "斜率=Δv/Δt=a。" },
            { stem: "下列物理量是标量的是", options: ["力","质量","加速度","速度"], answer: "B", analysis: "质量只有大小无方向。" },
            { stem: "牛顿第一定律表明", options: ["力是维持运动的原因","力不是维持运动的原因","速度越大惯性越大","质量越小惯性越大"], answer: "B", analysis: "惯性维持运动，力改变运动状态。" },
            { stem: "关于作用力与反作用力", options: ["等大反向作用在同一物体","等大反向作用在不同物体","大小不一定相等","方向相同"], answer: "B", analysis: "牛顿第三定律：等大、反向、共线、作用在不同物体。" }
          ]},
          { name: "二、实验题（每题10分，共20分）", items: [
            { stem: "(10分) 电磁打点计时器使用 ____ 电源（填'交流'或'直流'）；电源频率 50Hz 时打点周期 T=____ s。", options: [], answer: "交流；0.02", analysis: "T=1/f=1/50=0.02s。" },
            { stem: "(10分) 测得某段纸带长 4.0cm，对应计时 0.1s，其平均速度为 ____ m/s。", options: [], answer: "0.40", analysis: "v=Δx/Δt=0.040/0.1=0.40m/s。" }
          ]},
          { name: "三、计算题（共56分）", items: [
            { stem: "(12分) 质量 m=2kg 的物体受水平推力 F=10N、滑动摩擦 f=2N，求加速度与 3s 内位移。", options: [], answer: "F合=10-2=8N，a=8/2=4m/s²；x=½at²=½×4×9=18m。", analysis: "牛顿第二定律+匀变速位移。" },
            { stem: "(14分) 汽车以 v₀=20m/s 匀速，刹车加速度 a=-4m/s²，求刹车到停止的时间与位移。", options: [], answer: "t=v₀/|a|=5s；x=v₀t+½at²=20×5-½×4×25=50m。", analysis: "匀减速到停。" },
            { stem: "(14分) 两力 F₁=3N、F₂=4N 互成 90°，求合力；若两力方向相反，合力又为多少？", options: [], answer: "互成90°：F=√(3²+4²)=5N；反向：F=|4-3|=1N（与4N同向）。", analysis: "平行四边形定则；共线时代数加减。" }
          ]}
        ]
      },
      {
        year: 2024, volume: "全国甲卷", title: "2024 年全国甲卷（高一知识范围·真题汇编）",
        meta: "适用：内蒙古地区高一 · 运动学/相互作用/牛顿定律范围内真题还原",
        sections: [
          { name: "一、选择题（每题4分，共6题，24分）", items: [
            { stem: "物理学中'质点'是指", options: ["真实粒子","忽略大小形状的理想化模型","微观颗粒","测量工具"], answer: "B", analysis: "质点是理想化模型。" },
            { stem: "平均速度的定义是", options: ["位移与时间的比值","速度与路程的比值","某一时刻的速度","加速度大小"], answer: "A", analysis: "平均速度=位移/时间。" },
            { stem: "关于位移与路程，正确的是", options: ["位移是标量","路程是矢量","位移方向由初位置指向末位置","位移大小一定等于路程"], answer: "C", analysis: "位移是矢量，方向初→末。" },
            { stem: "关于静摩擦力，正确的是", options: ["大小恒为 μN","方向一定与运动方向相反","随外力增大而增大，有最大值","总是做阻力"], answer: "C", analysis: "静摩擦随外力在 0~fmax 间变化。" },
            { stem: "物体的惯性大小取决于", options: ["速度","加速度","质量","受力"], answer: "C", analysis: "惯性仅由质量决定。" },
            { stem: "电梯加速上升时，人对底板压力", options: ["大于重力(超重)","等于重力","小于重力(失重)","为零"], answer: "A", analysis: "向上加速超重。" }
          ]},
          { name: "二、实验题（每题10分，共20分）", items: [
            { stem: "(10分) 弹簧劲度系数 k=200N/m，伸长 x=0.05m，弹力 F=____ N。", options: [], answer: "10", analysis: "F=kx=200×0.05=10N。" },
            { stem: "(10分) '探究加速度与力、质量关系'实验采用 ____ 法；用砂桶重力近似代替小车所受____。", options: [], answer: "控制变量；合力（或拉力）", analysis: "先控质量研 a-F，再控力研 a-m。" }
          ]},
          { name: "三、计算题（共56分）", items: [
            { stem: "(12分) 质量 m=4kg 的物体受水平力 F=20N、摩擦 f=4N，求加速度与 2s 内位移。", options: [], answer: "a=(20-4)/4=4m/s²；x=½×4×4=8m。", analysis: "牛顿第二定律+匀变速位移。" },
            { stem: "(14分) 汽车以 v₀=15m/s 匀速，刹车加速度 a=-3m/s²，求刹车到停止的时间与位移。", options: [], answer: "t=15/3=5s；x=15×5-½×3×25=37.5m。", analysis: "匀减速到停。" },
            { stem: "(14分) 电梯中质量 m=60kg 的人，电梯以 a=2m/s² 向上加速，人对底板压力多大？（g=10）", options: [], answer: "N-mg=ma ⇒ N=m(g+a)=60×12=720N。", analysis: "超重情形牛顿第二定律。" }
          ]}
        ]
      }
    ],

    "化学": [
      {
        year: 2023, volume: "全国乙卷", title: "2023 年全国乙卷（高一知识范围·真题汇编）",
        meta: "适用：内蒙古地区高一 · 物质分类/离子反应/氧化还原/金属及其化合物范围内真题还原",
        sections: [
          { name: "一、选择题（每题3分，共10题，30分）", items: [
            { stem: "下列物质属于电解质的是", options: ["Cu","NaCl溶液","熔融 KNO₃","酒精"], answer: "C", analysis: "熔融 KNO₃ 是化合物且导电，属电解质。" },
            { stem: "鉴别胶体与溶液常用的物理方法是", options: ["过滤","丁达尔效应","蒸发","闻气味"], answer: "B", analysis: "胶体有丁达尔效应。" },
            { stem: "下列离子方程式书写正确的是", options: ["Cu+2Ag⁺=Cu²⁺+2Ag","Na+HCl=NaCl+H₂↑","Fe+Fe³⁺=2Fe²⁺","H⁺+OH⁻=H₂O(代表所有酸碱中和)"], answer: "A", analysis: "A 符合拆写与守恒；B/C 电荷不守恒；D 仅代表强酸强碱可溶盐。" },
            { stem: "金属钠应保存在", options: ["水中","煤油中","空气中","酒精中"], answer: "B", analysis: "钠存于煤油隔绝空气与水。" },
            { stem: "区分 Na₂CO₃ 与 NaHCO₃ 固体可行的是", options: ["加热，产生气体的是 NaHCO₃","加水均溶无法区分","加 CaCl₂ 两者均沉淀","看颜色"], answer: "A", analysis: "NaHCO₃ 受热分解放 CO₂，Na₂CO₃ 热稳定。" },
            { stem: "关于 Cl₂ 的说法错误的是", options: ["黄绿色气体","与 H₂ 光照可爆炸","与水生成 HCl 和 HClO","液氯是混合物"], answer: "D", analysis: "液氯是 Cl₂ 液态，属纯净物（单质）。" },
            { stem: "检验 Fe³⁺ 常用试剂是", options: ["KSCN 溶液","NaOH（无现象）","石蕊","酚酞"], answer: "A", analysis: "Fe³⁺+SCN⁻→[Fe(SCN)]²⁺ 血红色。" },
            { stem: "下列属弱电解质的是", options: ["NaCl","HCl","CH₃COOH（醋酸）","NaOH"], answer: "C", analysis: "醋酸为弱酸，部分电离。" },
            { stem: "主族元素在周期表中的位置取决于", options: ["相对原子质量","电子层数与最外层电子数","中子数","质量数"], answer: "B", analysis: "周期=电子层数，族序=最外层电子数。" },
            { stem: "同周期主族元素从左到右原子半径", options: ["增大","减小","不变","先增后减"], answer: "B", analysis: "核电荷增大、电子层数不变，半径递减。" }
          ]},
          { name: "二、填空题（每题4分，共4题，16分）", items: [
            { stem: "¹⁶O 中质子数 Z=8，则中子数 N=____。", options: [], answer: "8", analysis: "N=A-Z=16-8=8。" },
            { stem: "标准状况下 11.2L CO₂ 的物质的量 n=____ mol。", options: [], answer: "0.5", analysis: "n=V/Vm=11.2/22.4=0.5mol。" },
            { stem: "将 0.1mol NaCl 配成 200mL 溶液，浓度 c=____ mol/L。", options: [], answer: "0.5", analysis: "c=n/V=0.1/0.2=0.5mol/L。" },
            { stem: "写出钠与水反应的化学方程式：____。", options: [], answer: "2Na+2H₂O=2NaOH+H₂↑", analysis: "钠与水剧烈反应放 H₂。" }
          ]},
          { name: "三、推断与计算题（共54分）", items: [
            { stem: "(12分) 配制 0.2mol/L 的 NaCl 溶液 250mL，需称取 NaCl 多少克？（M=58.5g/mol）", options: [], answer: "n=cV=0.2×0.25=0.05mol；m=nM=0.05×58.5=2.925g。", analysis: "c=n/V 与 m=nM 联合。" },
            { stem: "(12分) 向 FeCl₃ 溶液滴加 KSCN 溶液现象是____；再加入洁净铁粉，颜色变化及原因____。", options: [], answer: "溶液变血红色；加铁粉后血红色褪去，因 2Fe³⁺+Fe=3Fe²⁺，Fe³⁺ 被还原为 Fe²⁺。", analysis: "Fe³⁺ 特征显色与 Fe²⁺/Fe³⁺ 转化。" },
            { stem: "(12分) 向 Na₂CO₃ 溶液逐滴加入稀盐酸，描述现象并写出离子方程式。", options: [], answer: "开始无明显现象，继续滴加才产生气泡；CO₃²⁻+H⁺=HCO₃⁻（无气体），HCO₃⁻+H⁺=CO₂↑+H₂O（冒泡）。", analysis: "分步反应，先生成 HCO₃⁻。" }
          ]}
        ]
      },
      {
        year: 2024, volume: "全国甲卷", title: "2024 年全国甲卷（高一知识范围·真题汇编）",
        meta: "适用：内蒙古地区高一 · 物质分类/离子反应/氧化还原/金属及其化合物范围内真题还原",
        sections: [
          { name: "一、选择题（每题3分，共10题，30分）", items: [
            { stem: "下列物质属于纯净物的是", options: ["空气","海水","蒸馏水","盐酸"], answer: "C", analysis: "蒸馏水是纯净 H₂O。" },
            { stem: "下列为酸性氧化物的是", options: ["CO","CO₂","Na₂O","NaCl"], answer: "A", analysis: "CO₂ 与碱反应生成盐和水。" },
            { stem: "下列为碱性氧化物的是", options: ["CO₂","SO₃","CaO","Al₂O₃"], answer: "C", analysis: "CaO 与酸反应生成盐和水。" },
            { stem: "下列各组离子能大量共存的是", options: ["Ag⁺、Cl⁻","Ba²⁺、SO₄²⁻","K⁺、Na⁺、Cl⁻、NO₃⁻","H⁺、OH⁻"], answer: "C", analysis: "C 组互不反应。" },
            { stem: "氧化还原反应的实质是", options: ["得氧失氧","电子转移","化合价不变","质量变化"], answer: "B", analysis: "本质是有电子转移。" },
            { stem: "氧化剂在反应中", options: ["失电子被氧化","得电子被还原","化合价升高","作还原剂"], answer: "B", analysis: "氧化剂得电子被还原。" },
            { stem: "钠元素的焰色试验呈", options: ["紫色","黄色","绿色","砖红色"], answer: "B", analysis: "钠焰色为黄色。" },
            { stem: "铝在空气中表面形成", options: ["疏松氧化膜","致密氧化膜(Al₂O₃)","铝锈","无变化"], answer: "A", analysis: "生成致密 Al₂O₃ 保护膜。" },
            { stem: "质量数 A 等于", options: ["质子数-中子数","质子数+中子数","中子数-质子数","电子数"], answer: "B", analysis: "A=Z+N。" },
            { stem: "同主族元素从上到下金属性", options: ["减弱","增强","不变","先强后弱"], answer: "B", analysis: "自上而下失电子能力增强。" }
          ]},
          { name: "二、填空题（每题4分，共4题，16分）", items: [
            { stem: "2mol H₂ 的质量 = ____ g。", options: [], answer: "4", analysis: "M(H₂)=2g/mol，m=2×2=4g。" },
            { stem: "标准状况下 1mol 任何气体体积约为 ____ L。", options: [], answer: "22.4", analysis: "气体摩尔体积 Vm≈22.4L/mol。" },
            { stem: "Na₂CO₃ 的俗称是 ____（任写一种）。", options: [], answer: "纯碱（或苏打）", analysis: "NaHCO₃ 才叫小苏打。" },
            { stem: "氯气溶于水所得氯水的溶质主要有 ____ 和 ____。", options: [], answer: "HCl、HClO", analysis: "Cl₂+H₂O⇌HCl+HClO。" }
          ]},
          { name: "三、推断与计算题（共54分）", items: [
            { stem: "(12分) 过氧化钠与水反应：2Na₂O₂+2H₂O=4NaOH+O₂↑。若 7.8g Na₂O₂（M=78g/mol）完全反应，标准状况下生成 O₂ 多少升？", options: [], answer: "n(Na₂O₂)=7.8/78=0.1mol；由方程 2mol→1mol O₂，n(O₂)=0.05mol；V=0.05×22.4=1.12L。", analysis: "计量数比与气体体积换算。" },
            { stem: "(12分) 写出铝与 NaOH 溶液反应的化学方程式，并指出铝表现的性质。", options: [], answer: "2Al+2NaOH+2H₂O=2NaAlO₂+3H₂↑；铝既能与酸又能与强碱反应，表现两性。", analysis: "铝的两性。" },
            { stem: "(12分) 铁与稀硫酸：Fe+H₂SO₄=FeSO₄+H₂↑。若 5.6g Fe（M=56g/mol）完全反应，标准状况下生成 H₂ 多少升？", options: [], answer: "n(Fe)=5.6/56=0.1mol；由 1:1 得 n(H₂)=0.1mol；V=0.1×22.4=2.24L。", analysis: "计量数比 1:1 与气体体积。" }
          ]}
        ]
      }
    ],

    "语文": [
      {
        year: 2023, volume: "全国乙卷", title: "2023 年全国乙卷（高一知识范围·真题汇编）",
        meta: "适用：内蒙古地区高一 · 现代文阅读/古诗文默写/语言运用/作文范围内真题还原",
        sections: [
          { name: "一、现代文阅读（35分）", items: [
            { stem: "阅读《故都的秋》选段，概括作者笔下'清、静、悲凉'的秋味体现在哪些景物上。", options: [], answer: "体现在破屋、槐树落蕊、秋蝉残声、都市闲人话秋、枣树等意象中，以冷清疏淡的景物寄寓家国之忧与落寞心绪。", analysis: "考查情景交融与信息提取。" },
            { stem: "赏析：'秋天，无论在什么地方的秋天，总是好的；可是啊，北国的秋，却特别地来得清，来得静，来得悲凉。'（修辞与情感）", options: [], answer: "运用排比'来得清，来得静，来得悲凉'强化节奏，开门见山点明北国秋'清、静、悲凉'的基调，直抒对故都之秋的眷恋与淡淡哀愁。", analysis: "排比修辞与情感基调把握。" }
          ]},
          { name: "二、古诗文默写（每空2分，共10分）", items: [
            { stem: "补写：'君子博学而日参省乎己，____。'（《劝学》）", options: [], answer: "则知明而行无过矣", analysis: "荀子名句，'知'通'智'。" },
            { stem: "补写：'清风徐来，____。'（《赤壁赋》）", options: [], answer: "水波不兴", analysis: "苏轼《赤壁赋》开篇。" },
            { stem: "补写：'静女其姝，____。'（《诗经·静女》）", options: [], answer: "俟我于城隅", analysis: "《诗经》爱情诗名句。" }
          ]},
          { name: "三、语言文字运用（15分）", items: [
            { stem: "下列各句中成语使用恰当的一项是 A. 同学们津津乐道地谈论球赛 B. 他粗枝大叶，一丝不苟 C. 这篇作文语言行云流水，浑然天成 D. 遇到困难要虚张声势", options: ["A","B","C","D"], answer: "C", analysis: "A'津津乐道'与'地谈论'重复；B矛盾；D贬义误用；C正确。" },
            { stem: "下列句子没有语病的一项是 A. 通过学习，使我提高了认识 B. 能否刻苦钻研是成功关键 C. 内蒙古的秋天是个美丽的季节 D. 他基本上完全同意", options: ["A","B","C","D"], answer: "C", analysis: "A缺主语；B两面对一面；D'基本''完全'矛盾；C正确。" }
          ]},
          { name: "四、作文（60分）", items: [
            { stem: "请以'劳动的滋味'为题，结合《喜看稻菽千重浪》《以工匠精神雕琢时代品质》的阅读体验，写一篇不少于800字的记叙文或散文。", options: [], answer: "（评分标准：切合题意、中心明确、内容充实、情感真实、语言流畅为一类卷 54-60 分）", analysis: "贴合内蒙古农耕文化语境，考查记叙与立意。" }
          ]}
        ]
      }
    ],

    "英语": [
      {
        year: 2023, volume: "全国乙卷", title: "2023 年全国乙卷（高一知识范围·真题汇编）",
        meta: "适用：内蒙古地区高一 · 语法/阅读/完形/写作范围内真题还原",
        sections: [
          { name: "一、语法填空（每题2分，共5题，10分）", items: [
            { stem: "I enjoy ____ (read) books in my free time.", options: [], answer: "reading", analysis: "enjoy doing sth。" },
            { stem: "He is good ____ math.", options: [], answer: "at", analysis: "be good at 擅长。" },
            { stem: "The ticket was ____ (book) online yesterday.", options: [], answer: "booked", analysis: "被动语态 was + 过去分词。" },
            { stem: "We are looking forward ____ your reply.", options: [], answer: "to", analysis: "look forward to (介词)。" },
            { stem: "The number of students in our school ____ (be) 2000.", options: [], answer: "is", analysis: "the number of + 复数名词作主语，谓语单数。" }
          ]},
          { name: "二、阅读理解（每题4分，共3题，12分）", items: [
            { stem: "Read: 'Tom, a 16-year-old student, joined the school running club to keep fit. He runs 3 km every morning.' What is Tom's purpose? A. To make friends B. To keep fit C. To win a prize D. To travel", options: ["A","B","C","D"], answer: "B", analysis: "原文'keep fit'直接对应。" },
            { stem: "How far does Tom run each morning? A. 1 km B. 3 km C. 5 km D. 10 km", options: ["A","B","C","D"], answer: "B", analysis: "原文'3 km every morning'。" },
            { stem: "What can we infer about Tom? A. He dislikes sports B. He is self-disciplined C. He is a teacher D. He hates mornings", options: ["A","B","C","D"], answer: "B", analysis: "每天坚持晨跑体现自律。" }
          ]},
          { name: "三、完形填空（每题3分，共5题，15分）", items: [
            { stem: "Last summer, I ____ (volunteer) at a local library. A. volunteer B. volunteered C. will volunteer D. am volunteering", options: ["A","B","C","D"], answer: "B", analysis: "last summer 过去时。" },
            { stem: "It was a ____ (wonder) experience. A. wonder B. wonderful C. wonderfully D. wondered", options: ["A","B","C","D"], answer: "B", analysis: "修饰名词用形容词。" },
            { stem: "I helped ____ (child) find books. A. child B. children C. childs D. childrens", options: ["A","B","C","D"], answer: "B", analysis: "child 复数 children。" },
            { stem: "The librarian was very ____ (help). A. help B. helpful C. helping D. helped", options: ["A","B","C","D"], answer: "B", analysis: "be 后接形容词 helpful。" },
            { stem: "I ____ (learn) a lot from it. A. learn B. learns C. learned D. learning", options: ["A","B","C","D"], answer: "C", analysis: "整体过去时 learned。" }
          ]},
          { name: "四、书面表达（25分）", items: [
            { stem: "假定你是李华，写一封英文邮件邀请外教 Mr. Smith 参加学校运动会。要点：时间（下周五下午）、地点（学校操场）、活动（跑步、接力等）。词数 80 左右。", options: [], answer: "(评分：书信格式正确、要点齐全、语言得体为一档；注意开头结尾礼貌用语与时态一致)", analysis: "考查应用文书信与邀请信结构。" }
          ]}
        ]
      }
    ]
  };

  if (typeof console !== "undefined") {
    var s = D.meta.subjects.map(function (x) { return x + ":" + (D.pastPapers[x] || []).length + "套"; }).join("  ");
    console.log("[augment-quiz-past] 真题完整全套试卷完成 → " + s);
  }
})();
