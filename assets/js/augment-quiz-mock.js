/* augment-quiz-mock.js
 * 模块4 模拟题 · 模式二「整套试卷」数据
 * 每科提供 2 套完整成套模拟卷（含选择/填空/解答/实验/阅读/写作等完整题型分区），每题附答案+解析。
 * 加载于 data.js 之后、app.js 之前；定义 D.mockPapers[学科] = [卷1, 卷2, ...]
 */
(function () {
  if (typeof window === "undefined" || !window.DATA) return;
  var D = window.DATA;

  D.mockPapers = {
    "数学": [
      {
        title: "人教版高一数学模拟试卷（第1套 · 基础达标）",
        meta: "考试时间：120分钟  满分：150分  适用：内蒙古地区高一期末统考",
        sections: [
          { name: "一、选择题（每题5分，共8题，40分）", items: [
            { stem: "已知集合 A={1,2,3}, B={2,3,4}，则 A∩B =", options: ["{1,2}","{2,3}","{3,4}","{1,4}"], answer: "B", analysis: "交集取公共元素 {2,3}。" },
            { stem: "函数 f(x)=√(x-2) 的定义域是", options: ["[0,+∞)","(2,+∞)","[2,+∞)","(-∞,2]"], answer: "C", analysis: "x-2≥0 ⇒ x≥2。" },
            { stem: "下列函数中为偶函数的是", options: ["y=x³","y=x²+1","y=1/x","y=x+1"], answer: "B", analysis: "f(-x)=(-x)²+1=x²+1=f(x)，定义域 R 对称。" },
            { stem: "比较 0.5³ 与 0.5² 的大小", options: ["0.5³<0.5²","0.5³>0.5²","相等","无法比较"], answer: "A", analysis: "0<a<1 指数函数递减，3>2 故 0.5³<0.5²。" },
            { stem: "log₂16 =", options: ["2","3","4","8"], answer: "C", analysis: "2⁴=16。" },
            { stem: "300° 化为弧度是", options: ["5π/3","4π/3","3π/2","7π/6"], answer: "A", analysis: "300°×π/180°=5π/3。" },
            { stem: "不等式 x²-5x+6<0 的解集为", options: ["(1,6)","(2,3)","(-∞,2)∪(3,+∞)","[2,3]"], answer: "B", analysis: "方程根 2、3，开口向上，小于0取两根之间。" },
            { stem: "函数 f(x)=x² 在 (0,+∞) 上", options: ["单调递增","单调递减","为常数","先减后增"], answer: "A", analysis: "二次函数对称轴 x=0，右侧递增。" }
          ]},
          { name: "二、填空题（每题5分，共4题，20分）", items: [
            { stem: "log₃27 = ____。", options: [], answer: "3", analysis: "3³=27。" },
            { stem: "函数 y=2ˣ 与 y=(1/2)ˣ 的图象关于 ____ 对称。", options: [], answer: "y轴", analysis: "(1/2)ˣ=2⁻ˣ，与 2ˣ 关于 y 轴对称。" },
            { stem: "sin(7π/6) = ____。", options: [], answer: "-1/2", analysis: "7π/6 在第三象限，正弦为负，sin(7π/6)=-sin(π/6)=-1/2。" },
            { stem: "不等式 2x+1≥5 的解集为 ____。", options: [], answer: "x≥2（或 [2,+∞)）", analysis: "2x≥4 ⇒ x≥2。" }
          ]},
          { name: "三、解答题（共90分）", items: [
            { stem: "(10分) 用函数单调性的定义证明 f(x)=3x+2 在 R 上单调递增。", options: [], answer: "任取 x₁<x₂，f(x₁)-f(x₂)=3(x₁-x₂)<0，故 f(x₁)<f(x₂)，得证。", analysis: "一次函数斜率正，作差即可证。" },
            { stem: "(12分) 用长为 24m 的篱笆围一个矩形菜地，怎样围面积最大？最大面积是多少？", options: [], answer: "设长 x、宽 y，2(x+y)=24 ⇒ x+y=12；面积 S=xy≤((x+y)/2)²=36，当 x=y=6 取等。故围边长为 6m 的正方形，最大面积 36m²。", analysis: "'和定积最大'模型。" },
            { stem: "(12分) 已知函数 f(x)=A·sin(ωx+φ) (A>0,ω>0) 的最大值为 2，最小正周期为 π，且 f(0)=1，求 A、ω、φ（取 |φ|<π/2）。", options: [], answer: "A=2；T=2π/ω=π ⇒ ω=2；f(0)=2sinφ=1 ⇒ sinφ=1/2，由 |φ|<π/2 得 φ=π/6。故 f(x)=2sin(2x+π/6)。", analysis: "由最值定 A，周期定 ω，初值定 φ。" },
            { stem: "(12分) 解方程 2^(x+1)=8。", options: [], answer: "8=2³，故 x+1=3 ⇒ x=2。", analysis: "化为同底数指数方程。" }
          ]}
        ]
      },
      {
        title: "人教版高一数学模拟试卷（第2套 · 能力提升）",
        meta: "考试时间：120分钟  满分：150分  适用：内蒙古地区高一期末统考",
        sections: [
          { name: "一、选择题（每题5分，共8题，40分）", items: [
            { stem: "已知集合 A={x|x²-1<0}，B={-1,0,1}，则 A∩B =", options: ["{-1,0}","{0}","{0,1}","∅"], answer: "B", analysis: "A=(-1,1)，与 B 交集为 {0}。" },
            { stem: "函数 f(x)=1/(x+1) 的定义域为", options: ["R","x>-1","x≠-1","x<-1"], answer: "C", analysis: "分母 x+1≠0 ⇒ x≠-1。" },
            { stem: "下列函数中为奇函数的是", options: ["y=x³","y=x²","y=|x|","y=1"], answer: "A", analysis: "f(-x)=(-x)³=-x³=-f(x)。" },
            { stem: "若 a>0,b>0 且 a+b=6，则 ab 的最大值为", options: ["6","9","12","3"], answer: "B", analysis: "ab≤((a+b)/2)²=9。" },
            { stem: "lg1000 =", options: ["2","3","1","1000"], answer: "B", analysis: "10³=1000。" },
            { stem: "将 y=sin x 的图象向左平移 π/2 个单位，所得函数为", options: ["y=sin(x+π/2)","y=sin(x-π/2)","y=cos(x+π/2)","y=sin2x"], answer: "A", analysis: "左加右减：左移 π/2 得 y=sin(x+π/2)。" },
            { stem: "不等式 x²≥4 的解集为", options: ["[-2,2]","(-2,2)","(-∞,-2]∪[2,+∞)","[-2,2)"], answer: "C", analysis: "方程根 ±2，开口向上，大于等于0取两根之外。" },
            { stem: "函数 y=cos x 的最大值为", options: ["0","1","2","π"], answer: "B", analysis: "余弦值域 [-1,1]，最大值 1。" }
          ]},
          { name: "二、填空题（每题5分，共4题，20分）", items: [
            { stem: "log₅25 = ____。", options: [], answer: "2", analysis: "5²=25。" },
            { stem: "sin(π/2) = ____。", options: [], answer: "1", analysis: "特殊角正弦值。" },
            { stem: "函数 f(x)=log₂(x-3) 的定义域为 ____。", options: [], answer: "(3,+∞)", analysis: "真数 x-3>0 ⇒ x>3。" },
            { stem: "化简 (a²)³ = ____。", options: [], answer: "a⁶", analysis: "幂的乘方，指数相乘。" }
          ]},
          { name: "三、解答题（共90分）", items: [
            { stem: "(10分) 用定义证明 f(x)=2x-1 在 R 上单调递增。", options: [], answer: "任取 x₁<x₂，f(x₁)-f(x₂)=2(x₁-x₂)<0，故 f(x₁)<f(x₂)，得证。", analysis: "一次函数斜率正。" },
            { stem: "(12分) 汽车以 v₀=10m/s、a=3m/s² 匀加速行驶，求 5s 末的速度与 5s 内位移。", options: [], answer: "v=v₀+at=10+3×5=25m/s；x=v₀t+½at²=10×5+½×3×25=87.5m。", analysis: "匀变速公式直接代入。" },
            { stem: "(12分) 已知 tanα=√3，α∈(0,π/2)，求 sinα、cosα。", options: [], answer: "由 tanα=sinα/cosα=√3 且 sin²α+cos²α=1，得 sinα=√3/2，cosα=1/2。", analysis: "α=π/3，可直接得值。" },
            { stem: "(12分) 求函数 y=x²-4x+5 的最小值及取最小值时的 x。", options: [], answer: "配方 y=(x-2)²+1，当 x=2 时取最小值 1。", analysis: "二次函数顶点处取得最值。" }
          ]}
        ]
      }
    ],

    "物理": [
      {
        title: "人教版高一物理模拟试卷（第1套 · 基础达标）",
        meta: "考试时间：90分钟  满分：100分  适用：内蒙古地区高一期末统考",
        sections: [
          { name: "一、选择题（每题4分，共6题，24分）", items: [
            { stem: "下列物理量中是矢量的是", options: ["时间","质量","位移","路程"], answer: "C", analysis: "位移有大小有方向，是矢量。" },
            { stem: "自由落体运动 g 取 10m/s²，物体下落 3s 末的速度大小为", options: ["10m/s","30m/s","15m/s","90m/s"], answer: "B", analysis: "v=gt=10×3=30m/s。" },
            { stem: "在 v-t 图象中，图线的斜率表示", options: ["位移","速度","加速度","路程"], answer: "C", analysis: "斜率=Δv/Δt=a。" },
            { stem: "下列物理量是标量的是", options: ["力","质量","加速度","速度"], answer: "B", analysis: "质量只有大小无方向，是标量。" },
            { stem: "牛顿第一定律表明", options: ["力是维持运动的原因","力不是维持运动的原因","速度越大惯性越大","质量越小惯性越大"], answer: "A", analysis: "惯性维持运动，力改变运动状态。" },
            { stem: "关于作用力与反作用力，正确的是", options: ["等大反向作用在同一物体","等大反向作用在不同物体","大小不一定相等","方向相同"], answer: "B", analysis: "牛顿第三定律：等大、反向、共线、作用在不同物体。" }
          ]},
          { name: "二、实验题（每题10分，共20分）", items: [
            { stem: "(10分) 电磁打点计时器使用 ____ 电源（填'交流'或'直流'）；若电源频率 50Hz，则打点周期 T=____ s。", options: [], answer: "交流；0.02", analysis: "T=1/f=1/50=0.02s。" },
            { stem: "(10分) 用刻度尺测得某段纸带长 4.0cm，该段对应计时 0.1s，则其平均速度为 ____ m/s。", options: [], answer: "0.40", analysis: "v=Δx/Δt=0.040/0.1=0.40m/s。" }
          ]},
          { name: "三、计算题（共56分）", items: [
            { stem: "(12分) 质量 m=2kg 的物体受水平推力 F=10N、滑动摩擦 f=2N，求加速度与 3s 内位移。", options: [], answer: "F合=10-2=8N，a=F合/m=4m/s²；x=½at²=½×4×9=18m。", analysis: "牛顿第二定律+匀变速位移。" },
            { stem: "(14分) 汽车以 v₀=20m/s 匀速行驶，刹车加速度 a=-5m/s²，求刹车到停止的时间与位移。", options: [], answer: "t=v₀/|a|=4s；x=v₀t+½at²=20×4-½×5×16=40m。", analysis: "匀减速到停的逆向思维。" },
            { stem: "(14分) 两力 F₁=3N、F₂=4N 互成 90°，求其合力大小；若两力方向相反，合力又为多少？", options: [], answer: "互成90°：F=√(3²+4²)=5N；反向：F=|4-3|=1N（方向与 4N 相同）。", analysis: "平行四边形定则；共线时代数加减。" }
          ]}
        ]
      },
      {
        title: "人教版高一物理模拟试卷（第2套 · 能力提升）",
        meta: "考试时间：90分钟  满分：100分  适用：内蒙古地区高一期末统考",
        sections: [
          { name: "一、选择题（每题4分，共6题，24分）", items: [
            { stem: "在物理学中，'质点'是指", options: ["真实存在的粒子","忽略大小形状的理想化模型","微观颗粒","测量工具"], answer: "B", analysis: "质点是理想化模型。" },
            { stem: "平均速度的定义是", options: ["位移与时间的比值","速度与路程的比值","某一时刻的速度","加速度大小"], answer: "A", analysis: "平均速度=位移/时间。" },
            { stem: "关于位移与路程，正确的是", options: ["位移是标量","路程是矢量","位移方向由初位置指向末位置","位移大小一定等于路程"], answer: "C", analysis: "位移是矢量，方向初→末；仅单向直线运动二者大小相等。" },
            { stem: "关于静摩擦力，正确的是", options: ["大小恒为 μN","方向一定与运动方向相反","随外力增大而增大，有最大值","总是做阻力"], answer: "C", analysis: "静摩擦随外力在 0~fmax 间变化。" },
            { stem: "物体的惯性大小取决于", options: ["速度","加速度","质量","受力"], answer: "C", analysis: "惯性仅由质量决定。" },
            { stem: "电梯加速上升时，人对底板的压力", options: ["大于重力（超重）","等于重力","小于重力（失重）","为零"], answer: "A", analysis: "向上加速超重，视重 G'=m(g+a)>mg。" }
          ]},
          { name: "二、实验题（每题10分，共20分）", items: [
            { stem: "(10分) 弹簧劲度系数 k=200N/m，伸长量 x=0.05m，则弹力 F=____ N（方向指向恢复原长）。", options: [], answer: "10", analysis: "F=kx=200×0.05=10N。" },
            { stem: "(10分) 在'探究加速度与力、质量的关系'实验中，采用 ____ 法（填研究方法），即用砂桶重力近似代替小车所受____。", options: [], answer: "控制变量；合力（或拉力）", analysis: "先控质量研 a-F，再控力研 a-m，即控制变量法。" }
          ]},
          { name: "三、计算题（共56分）", items: [
            { stem: "(12分) 质量 m=4kg 的物体受水平力 F=20N、摩擦 f=4N，求加速度与 2s 内位移。", options: [], answer: "a=(20-4)/4=4m/s²；x=½×4×4=8m。", analysis: "牛顿第二定律+匀变速位移。" },
            { stem: "(14分) 汽车以 v₀=15m/s 匀速，刹车加速度 a=-3m/s²，求刹车到停止的时间与位移。", options: [], answer: "t=15/3=5s；x=15×5-½×3×25=37.5m。", analysis: "匀减速到停。" },
            { stem: "(14分) 电梯中质量 m=60kg 的人，当电梯以 a=2m/s² 向上加速时，人对电梯底板的压力为多大？（g=10m/s²）", options: [], answer: "N-mg=ma ⇒ N=m(g+a)=60×12=720N。", analysis: "牛顿第二定律在超重情形中的应用。" }
          ]}
        ]
      }
    ],

    "化学": [
      {
        title: "人教版高一化学模拟试卷（第1套 · 基础达标）",
        meta: "考试时间：90分钟  满分：100分  适用：内蒙古地区高一期末统考",
        sections: [
          { name: "一、选择题（每题3分，共10题，30分）", items: [
            { stem: "下列物质属于电解质的是", options: ["Cu","NaCl溶液","熔融 KNO₃","酒精"], answer: "C", analysis: "熔融 KNO₃ 是化合物且在熔融态导电，属电解质。" },
            { stem: "鉴别胶体与溶液常用的物理方法是", options: ["过滤","丁达尔效应","蒸发","闻气味"], answer: "B", analysis: "胶体有丁达尔效应，溶液没有。" },
            { stem: "下列离子方程式书写正确的是", options: ["Cu+2Ag⁺=Cu²⁺+2Ag","Na+HCl=NaCl+H₂↑","Fe+Fe³⁺=2Fe²⁺","H⁺+OH⁻=H₂O(代表所有酸碱中和)"], answer: "A", analysis: "A 符合拆写与守恒；B/C 电荷不守恒；D 仅代表强酸强碱可溶盐。" },
            { stem: "金属钠应保存在", options: ["水中","煤油中","空气中","酒精中"], answer: "B", analysis: "钠密度大于煤油，存于煤油隔绝空气与水。" },
            { stem: "区分 Na₂CO₃ 与 NaHCO₃ 固体，可行的是", options: ["加热，产生气体的是 NaHCO₃","加水均溶无法区分","加 CaCl₂ 两者均沉淀","看颜色"], answer: "A", analysis: "2NaHCO₃△=Na₂CO₃+CO₂↑+H₂O，Na₂CO₃ 热稳定。" },
            { stem: "下列关于 Cl₂ 的说法错误的是", options: ["黄绿色气体","与 H₂ 光照可爆炸","与水反应生成 HCl 和 HClO","液氯是混合物"], answer: "D", analysis: "液氯是 Cl₂ 的液态，属纯净物（单质）。" },
            { stem: "检验 Fe³⁺ 常用的试剂是", options: ["KSCN 溶液","NaOH（无现象）","石蕊","酚酞"], answer: "A", analysis: "Fe³⁺+SCN⁻→[Fe(SCN)]²⁺ 血红色。" },
            { stem: "下列属弱电解质的是", options: ["NaCl","HCl","CH₃COOH（醋酸）","NaOH"], answer: "C", analysis: "醋酸为弱酸，部分电离。" },
            { stem: "主族元素在周期表中的位置取决于", options: ["相对原子质量","电子层数与最外层电子数","中子数","质量数"], answer: "B", analysis: "周期=电子层数，主族族序=最外层电子数。" },
            { stem: "同周期主族元素从左到右，原子半径", options: ["增大","减小","不变","先增后减"], answer: "B", analysis: "核电荷增大、电子层数不变，半径递减。" }
          ]},
          { name: "二、填空题（每题4分，共4题，16分）", items: [
            { stem: "¹⁶O 中质子数 Z=8，则中子数 N=____。", options: [], answer: "8", analysis: "N=A-Z=16-8=8。" },
            { stem: "标准状况下 11.2L CO₂ 的物质的量 n=____ mol。", options: [], answer: "0.5", analysis: "n=V/Vm=11.2/22.4=0.5mol。" },
            { stem: "将 0.1mol NaCl 配成 200mL 溶液，浓度 c=____ mol/L。", options: [], answer: "0.5", analysis: "c=n/V=0.1/0.2=0.5mol/L。" },
            { stem: "写出钠与水反应的化学方程式：____。", options: [], answer: "2Na+2H₂O=2NaOH+H₂↑", analysis: "钠与水剧烈反应放出氢气。" }
          ]},
          { name: "三、推断与计算题（共54分）", items: [
            { stem: "(12分) 配制 0.2mol/L 的 NaCl 溶液 250mL，需称取 NaCl 多少克？（M=58.5g/mol）", options: [], answer: "n=cV=0.2×0.25=0.05mol；m=nM=0.05×58.5=2.925g。", analysis: "c=n/V 与 m=nM 联合使用。" },
            { stem: "(12分) 向 FeCl₃ 溶液中滴加 KSCN 溶液，现象是____；再向其中加入洁净铁粉，溶液颜色变化及原因是____。", options: [], answer: "溶液变为血红色；加入铁粉后血红色褪去，因 2Fe³⁺+Fe=3Fe²⁺，Fe³⁺ 被还原为 Fe²⁺。", analysis: "Fe³⁺ 特征显色与 Fe²⁺/Fe³⁺ 转化。" },
            { stem: "(12分) 向 Na₂CO₃ 溶液中逐滴加入稀盐酸，描述现象并写出相关离子方程式。", options: [], answer: "开始无明显现象，继续滴加才产生气泡；CO₃²⁻+H⁺=HCO₃⁻（无气体），HCO₃⁻+H⁺=CO₂↑+H₂O（冒泡）。", analysis: "分步反应，先生成 HCO₃⁻。" }
          ]}
        ]
      },
      {
        title: "人教版高一化学模拟试卷（第2套 · 能力提升）",
        meta: "考试时间：90分钟  满分：100分  适用：内蒙古地区高一期末统考",
        sections: [
          { name: "一、选择题（每题3分，共10题，30分）", items: [
            { stem: "下列物质属于纯净物的是", options: ["空气","海水","蒸馏水","盐酸"], answer: "C", analysis: "蒸馏水是纯净 H₂O；其余为混合物。" },
            { stem: "下列为酸性氧化物的是", options: ["CO","CO₂","Na₂O","NaCl"], answer: "A", analysis: "CO₂ 与碱反应生成盐和水。" },
            { stem: "下列为碱性氧化物的是", options: ["CO₂","SO₃","CaO","Al₂O₃"], answer: "C", analysis: "CaO 与酸反应生成盐和水。" },
            { stem: "下列各组离子在溶液中能大量共存的是", options: ["Ag⁺、Cl⁻","Ba²⁺、SO₄²⁻","K⁺、Na⁺、Cl⁻、NO₃⁻","H⁺、OH⁻"], answer: "C", analysis: "C 组互不反应；其余均生成沉淀或水。" },
            { stem: "氧化还原反应的实质是", options: ["得氧失氧","电子转移","化合价不变","质量变化"], answer: "B", analysis: "本质是有电子转移。" },
            { stem: "氧化剂在反应中", options: ["失电子被氧化","得电子被还原","化合价升高","作还原剂"], answer: "B", analysis: "氧化剂得电子，化合价降低，被还原。" },
            { stem: "钠元素的焰色试验呈", options: ["紫色","黄色","绿色","砖红色"], answer: "B", analysis: "钠焰色为黄色。" },
            { stem: "铝在空气中表面形成", options: ["疏松氧化膜","致密氧化膜(Al₂O₃)","铝锈","无变化"], answer: "A", analysis: "生成致密 Al₂O₃ 薄膜保护内部。" },
            { stem: "质量数 A 等于", options: ["质子数-中子数","质子数+中子数","中子数-质子数","电子数"], answer: "B", analysis: "A=Z+N。" },
            { stem: "同主族元素从上到下金属性", options: ["减弱","增强","不变","先强后弱"], answer: "B", analysis: "自上而下失电子能力增强，金属性增强。" }
          ]},
          { name: "二、填空题（每题4分，共4题，16分）", items: [
            { stem: "2mol H₂ 的质量 = ____ g。", options: [], answer: "4", analysis: "M(H₂)=2g/mol，m=2×2=4g。" },
            { stem: "标准状况下 1mol 任何气体的体积约为 ____ L。", options: [], answer: "22.4", analysis: "气体摩尔体积 Vm≈22.4L/mol。" },
            { stem: "Na₂CO₃ 的俗称是 ____（任写一种）。", options: [], answer: "纯碱（或苏打）", analysis: "NaHCO₃ 才叫小苏打。" },
            { stem: "氯气溶于水所得氯水的溶质主要有 ____ 和 ____。", options: [], answer: "HCl、HClO", analysis: "Cl₂+H₂O⇌HCl+HClO。" }
          ]},
          { name: "三、推断与计算题（共54分）", items: [
            { stem: "(12分) 过氧化钠与水反应：2Na₂O₂+2H₂O=4NaOH+O₂↑。若 7.8g Na₂O₂（M=78g/mol）完全反应，标准状况下生成 O₂ 多少升？", options: [], answer: "n(Na₂O₂)=7.8/78=0.1mol；由方程 2mol Na₂O₂→1mol O₂，得 n(O₂)=0.05mol；V=0.05×22.4=1.12L。", analysis: "化学计量数比与气体体积换算。" },
            { stem: "(12分) 写出铝与 NaOH 溶液反应的化学方程式，并指出铝在反应中表现的性质。", options: [], answer: "2Al+2NaOH+2H₂O=2NaAlO₂+3H₂↑；铝既能与酸又能与强碱反应，表现两性。", analysis: "铝的两性。" },
            { stem: "(12分) 铁与稀硫酸反应：Fe+H₂SO₄=FeSO₄+H₂↑。若 5.6g Fe（M=56g/mol）完全反应，标准状况下生成 H₂ 多少升？", options: [], answer: "n(Fe)=5.6/56=0.1mol；由方程 1mol Fe→1mol H₂，n(H₂)=0.1mol；V=0.1×22.4=2.24L。", analysis: "计量数比 1:1 与气体体积。" }
          ]}
        ]
      }
    ],

    "语文": [
      {
        title: "人教版高一语文模拟试卷（第1套 · 基础达标）",
        meta: "考试时间：150分钟  满分：150分  适用：内蒙古地区高一期末统考",
        sections: [
          { name: "一、现代文阅读（35分）", items: [
            { stem: "阅读《故都的秋》选段，概括作者笔下'清、静、悲凉'的秋味体现在哪些景物上。", options: [], answer: "体现在破屋、槐树落蕊、秋蝉残声、都市闲人话秋、枣树等意象中，以冷清疏淡的景物寄寓家国之忧与落寞心绪。", analysis: "考查情景交融手法与信息提取。" },
            { stem: "赏析句子：'秋天，无论在什么地方的秋天，总是好的；可是啊，北国的秋，却特别地来得清，来得静，来得悲凉。'（从修辞与情感角度）", options: [], answer: "运用排比'来得清，来得静，来得悲凉'强化节奏，开门见山点明北国秋'清、静、悲凉'的基调，直抒对故都之秋的眷恋与淡淡哀愁。", analysis: "考查排比修辞与情感基调把握。" }
          ]},
          { name: "二、古诗文默写（每空2分，共10分）", items: [
            { stem: "补写：'君子博学而日参省乎己，____。'（《劝学》）", options: [], answer: "则知明而行无过矣", analysis: "荀子名句，'知'通'智'。" },
            { stem: "补写：'清风徐来，____。'（《赤壁赋》）", options: [], answer: "水波不兴", analysis: "苏轼《赤壁赋》开篇名句。" },
            { stem: "补写：'静女其姝，____。'（《诗经·静女》）", options: [], answer: "俟我于城隅", analysis: "《诗经》爱情诗名句。" }
          ]},
          { name: "三、语言文字运用（15分）", items: [
            { stem: "下列各句中加点成语使用恰当的一项是（ ） A. 同学们津津乐道地谈论着球赛 B. 他做事总是粗枝大叶，一丝不苟 C. 这篇作文语言行云流水，浑然天成 D. 遇到困难要虚张声势，勇往直前", options: ["A","B","C","D"], answer: "C", analysis: "A'津津乐道'与'地谈论'重复；B'粗枝大叶'与'一丝不苟'矛盾；D'虚张声势'贬义误用；C 正确。" },
            { stem: "下列句子没有语病的一项是（ ） A. 通过学习，使我提高了认识 B. 能否刻苦钻研是取得成功的关键 C. 内蒙古的秋天是个美丽的季节 D. 他基本上完全同意我的看法", options: ["A","B","C","D"], answer: "C", analysis: "A缺主语；B两面对一面；D'基本''完全'矛盾；C正确。" }
          ]},
          { name: "四、作文（60分）", items: [
            { stem: "请以'劳动的滋味'为题，结合《喜看稻菽千重浪》《以工匠精神雕琢时代品质》的阅读体验，写一篇不少于800字的记叙文或散文。", options: [], answer: "（评分标准：切合题意、中心明确、内容充实、情感真实、语言流畅为一类卷 54-60 分；其余按基础等级与发展等级酌情给分）", analysis: "贴合内蒙古农耕文化语境，考查记叙与立意。" }
          ]}
        ]
      },
      {
        title: "人教版高一语文模拟试卷（第2套 · 能力提升）",
        meta: "考试时间：150分钟  满分：150分  适用：内蒙古地区高一期末统考",
        sections: [
          { name: "一、现代文阅读（35分）", items: [
            { stem: "阅读《乡土中国·差序格局》选段，解释'差序格局'的含义，并举一例说明。", options: [], answer: "差序格局指中国乡土社会以'己'为中心、像石子投入水中泛起涟漪一样由近及远、亲疏有别的人际关系网络；例如家族中对自己人亲近、对外人疏远即其体现。", analysis: "考查费孝通核心概念的理解与迁移。" },
            { stem: "《劝学》中'积水成渊，蛟龙生焉；积善成德，而神明自得'运用了什么论证方法？有何效果？", options: [], answer: "运用比喻（类比）论证，以'积水成渊'类比'积善成德'，生动形象地论证了学习积累的重要性。", analysis: "考查论证方法辨析。" }
          ]},
          { name: "二、古诗文默写（每空2分，共10分）", items: [
            { stem: "补写：'羁鸟恋旧林，____。'（《归园田居》）", options: [], answer: "池鱼思故渊", analysis: "陶渊明诗，以物自比。" },
            { stem: "补写：'安能摧眉折腰事权贵，____。'（《梦游天姥吟留别》）", options: [], answer: "使我不得开心颜", analysis: "李白蔑视权贵的名句。" },
            { stem: "补写：'同是天涯沦落人，____。'（《琵琶行》）", options: [], answer: "相逢何必曾相识", analysis: "白居易感慨知己的名句。" }
          ]},
          { name: "三、语言文字运用（15分）", items: [
            { stem: "依次填入下面横线处的词语，最恰当的一组是（ ）①他____地完成了任务 ②这幅画色彩____ ③我们要____传统文化 A. 圆满/和谐/弘扬 B. 完满/调和/发扬 C. 圆满/调和/发扬 D. 完满/和谐/弘扬", options: ["A","B","C","D"], answer: "A", analysis: "'圆满'常搭配任务，'和谐'搭色彩，'弘扬'文化为固定搭配。" },
            { stem: "将'袅袅兮秋风，洞庭波兮木叶下'扩写为一段 60 字左右的景物描写（不抄原句）。", options: [], answer: "（示例）秋风轻柔拂过洞庭湖面，层层涟漪荡开，岸畔树叶悄然飘落，天地间一派清远寥廓的秋意。", analysis: "考查景物描写与意境再现能力。" }
          ]},
          { name: "四、作文（60分）", items: [
            { stem: "请以'青春与乡土'为话题，结合《乡土中国》与《百合花》的阅读感受，写一篇不少于800字的文章，文体不限（诗歌除外）。", options: [], answer: "（评分标准：立意明确、材料恰当、结构完整、语言得体为一类卷 54-60 分）", analysis: "融合整本书阅读与文学文本，考查思辨与表达。" }
          ]}
        ]
      }
    ],

    "英语": [
      {
        title: "人教版高一英语模拟试卷（第1套 · 基础达标）",
        meta: "考试时间：120分钟  满分：150分  适用：内蒙古地区高一期末统考",
        sections: [
          { name: "一、语法填空（每题2分，共5题，10分）", items: [
            { stem: "I enjoy ____ (read) books in my free time.", options: [], answer: "reading", analysis: "enjoy doing sth 固定搭配。" },
            { stem: "He is good ____ math.", options: [], answer: "at", analysis: "be good at 擅长。" },
            { stem: "The ticket was ____ (book) online yesterday.", options: [], answer: "booked", analysis: "被动语态 was + 过去分词。" },
            { stem: "We are looking forward ____ your reply.", options: [], answer: "to", analysis: "look forward to (介词) 期望。" },
            { stem: "The number of students in our school ____ (be) 2000.", options: [], answer: "is", analysis: "the number of + 复数名词作主语，谓语用单数。" }
          ]},
          { name: "二、阅读理解（每题4分，共3题，12分）", items: [
            { stem: "Read: 'Tom, a 16-year-old student, joined the school running club to keep fit. He runs 3 km every morning.' What is Tom's purpose? A. To make friends B. To keep fit C. To win a prize D. To travel", options: ["A","B","C","D"], answer: "B", analysis: "原文'keep fit'直接对应。" },
            { stem: "According to the passage, how far does Tom run each morning? A. 1 km B. 3 km C. 5 km D. 10 km", options: ["A","B","C","D"], answer: "B", analysis: "原文'3 km every morning'。" },
            { stem: "What can we infer about Tom? A. He dislikes sports B. He is self-disciplined C. He is a teacher D. He hates mornings", options: ["A","B","C","D"], answer: "B", analysis: "每天坚持晨跑体现自律。" }
          ]},
          { name: "三、完形填空（每题3分，共5题，15分）", items: [
            { stem: "Last summer, I ____ (volunteer) at a local library. A. volunteer B. volunteered C. will volunteer D. am volunteering", options: ["A","B","C","D"], answer: "B", analysis: "last summer 过去时。" },
            { stem: "It was a ____ (wonder) experience. A. wonder B. wonderful C. wonderfully D. wondered", options: ["A","B","C","D"], answer: "B", analysis: "修饰名词用形容词 wonderful。" },
            { stem: "I helped ____ (child) find books they liked. A. child B. children C. childs D. childrens", options: ["A","B","C","D"], answer: "B", analysis: "child 复数 children。" },
            { stem: "The librarian was very ____ (help). A. help B. helpful C. helping D. helped", options: ["A","B","C","D"], answer: "B", analysis: "be 动词后接形容词 helpful。" },
            { stem: "I ____ (learn) a lot from the experience. A. learn B. learns C. learned D. learning", options: ["A","B","C","D"], answer: "C", analysis: "整体过去时，learned。" }
          ]},
          { name: "四、书面表达（25分）", items: [
            { stem: "假定你是李华，写一封英文邮件邀请外教 Mr. Smith 参加学校运动会。要点：时间（下周五下午）、地点（学校操场）、活动（跑步、接力等）。词数 80 左右。", options: [], answer: "(评分：书信格式正确、要点齐全、语言得体为一档；注意开头结尾礼貌用语与时态一致)", analysis: "考查应用文书信与邀请信结构。" }
          ]}
        ]
      },
      {
        title: "人教版高一英语模拟试卷（第2套 · 能力提升）",
        meta: "考试时间：120分钟  满分：150分  适用：内蒙古地区高一期末统考",
        sections: [
          { name: "一、语法填空（每题2分，共5题，10分）", items: [
            { stem: "She prefers tea ____ coffee.", options: [], answer: "to", analysis: "prefer A to B 固定搭配。" },
            { stem: "He practices ____ (play) basketball every day.", options: [], answer: "playing", analysis: "practice doing sth。" },
            { stem: "By the time we arrived, the train ____ (leave).", options: [], answer: "had left", analysis: "'到达'过去，'离开'更早，用过去完成时。" },
            { stem: "____ (learn) a foreign language needs practice.", options: [], answer: "Learning", analysis: "动名词作主语。" },
            { stem: "The book ____ (write) by Lu Xun.", options: [], answer: "was written", analysis: "被动语态，过去时 was written。" }
          ]},
          { name: "二、阅读理解（每题4分，共3题，12分）", items: [
            { stem: "Read: 'Greenland is the largest island in the world. It is cold and covered with ice, but it has rich natural resources.' Greenland is famous for being ____. A. the smallest island B. the largest island C. a hot place D. a desert", options: ["A","B","C","D"], answer: "B", analysis: "首句直接说明。" },
            { stem: "What is Greenland's climate like? A. Hot B. Cold C. Warm D. Dry only", options: ["A","B","C","D"], answer: "B", analysis: "原文'cold and covered with ice'。" },
            { stem: "The word 'resources' in the text probably means ____. A. 资源 B. 居民 C. 动物 D. 颜色", options: ["A","B","C","D"], answer: "A", analysis: "natural resources 自然资源，可推断。" }
          ]},
          { name: "三、完形填空（每题3分，共5题，15分）", items: [
            { stem: "A flood ____ (destroy) the village in 2023. A. destroys B. destroyed C. has destroyed D. destroy", options: ["A","B","C","D"], answer: "B", analysis: "in 2023 过去时。" },
            { stem: "Many ____ (rescue) workers arrived soon. A. rescue B. rescued C. rescuing D. rescues", options: ["A","B","C","D"], answer: "A", analysis: "rescue 作定语用原形。" },
            { stem: "They kept ____ (calm) and helped others. A. calm B. calmly C. calming D. calms", options: ["A","B","C","D"], answer: "A", analysis: "keep + 形容词。" },
            { stem: "The government ____ (send) food and water. A. send B. sends C. sent D. sending", options: ["A","B","C","D"], answer: "C", analysis: "整体过去时 sent。" },
            { stem: "People were ____ (thank) for the help. A. thank B. thanks C. thankful D. thanked", options: ["A","B","C","D"], answer: "C", analysis: "be 动词后接形容词 thankful。" }
          ]},
          { name: "四、书面表达（25分）", items: [
            { stem: "假定你是学生会成员，写一则英文通知，告知全校同学本周六上午在学校礼堂举行'英语角'活动，鼓励大家积极参与。词数 60 左右。", options: [], answer: "(评分：通知格式、要点齐全、语言简洁得体为一档)", analysis: "考查应用文通知格式与信息传达。" }
          ]}
        ]
      }
    ]
  };

  if (typeof console !== "undefined") {
    var s = D.meta.subjects.map(function (x) { return x + ":" + (D.mockPapers[x] || []).length + "套"; }).join("  ");
    console.log("[augment-quiz-mock] 整套试卷数据完成 → " + s);
  }
})();
