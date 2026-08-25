/* augment-quiz-q.js
 * 扩充题库题目数量（模块4 模式一·专题练习 的数据源）
 * 在 data.js 之后、app.js 之前加载；仅向现有 D.questions 数组追加题目，不改动其他模块。
 * 题目按现有 chapter（专题）归类，答案/解析完整。
 */
(function () {
  if (typeof window === "undefined" || !window.DATA) return;
  var D = window.DATA;

  /* ============ 数学 扩充 +30 ============ */
  D.questions["数学"].push(
    {id:"MSX19",type:"选择",difficulty:2,chapter:"第一章 集合",point:"SX-01",stem:"下列能构成集合的是",options:["很高的山峰","聪明的人","方程x²=1的实根","漂亮的花"],answer:2,analysis:"集合元素须'确定'，只有'方程x²=1的实根'确定（{-1,1}）。"},
    {id:"MSX20",type:"选择",difficulty:2,chapter:"第一章 集合",point:"SX-03",stem:"若 A={x|x<3}, B={x|x<1}，则 A∩B =",options:["{x|x<3}","{x|x<1}","{x|x<0}","∅"],answer:1,analysis:"交集取公共部分，x 需同时满足 x<3 与 x<1，即 x<1。"},
    {id:"MSX21",type:"选择",difficulty:3,chapter:"第一章 集合",point:"SX-01",stem:"已知集合 A 有 3 个元素，则它的子集个数为",options:["4","6","8","9"],answer:2,analysis:"n 元集合子集数 = 2ⁿ，2³=8。"},
    {id:"MSX22",type:"选择",difficulty:2,chapter:"第一章 集合",point:"SX-05",stem:"空集 ∅ 的子集个数为",options:["0","1","2","无数"],answer:1,analysis:"规定空集是自身的子集，故子集个数为 1。"},
    {id:"MSX23",type:"选择",difficulty:2,chapter:"第一章 逻辑",point:"SX-04",stem:"'x=2' 是 'x²-4=0' 的什么条件？",options:["充分不必要","必要不充分","充要","既不充分也不必要"],answer:0,analysis:"x=2⇒x²-4=0 成立；但 x²-4=0 还可推出 x=-2，故不充分不必要。"},
    {id:"MSX24",type:"选择",difficulty:3,chapter:"第一章 逻辑",point:"SX-06",stem:"命题'若 p 则 q'的逆否命题是",options:["若 q 则 p","若非 p 则非 q","若非 q 则非 p","若 p 则非 q"],answer:2,analysis:"逆否命题：'若非 q 则非 p'，与原命题等价。"},
    {id:"MSX25",type:"选择",difficulty:2,chapter:"第二章 不等式",point:"SX-07",stem:"不等式 2x-1>5 的解集为",options:["x>2","x>3","x<3","x<2"],answer:1,analysis:"2x>6⇒x>3。"},
    {id:"MSX26",type:"选择",difficulty:3,chapter:"第二章 不等式",point:"SX-07",stem:"若 x>0, y>0 且 xy=9，则 x+y 的最小值为",options:["3","6","9","18"],answer:1,analysis:"由基本不等式 x+y≥2√xy=6，当 x=y=3 取等。"},
    {id:"MSX27",type:"选择",difficulty:3,chapter:"第二章 不等式",point:"SX-08",stem:"一元二次不等式 x²-4>0 的解集为",options:["(-2,2)","[-2,2]","(-∞,-2)∪(2,+∞)","(-∞,-2]∪[2,+∞)"],answer:2,analysis:"方程根 ±2，开口向上，大于 0 取两根之外。"},
    {id:"MSX28",type:"填空",difficulty:3,chapter:"第三章 函数",point:"SX-11",stem:"函数 f(x)=x²+1 在 [0,2] 上的值域为 ____。",options:[],answer:"[1,5]",analysis:"x∈[0,2]，x²∈[0,4]，故 f(x)∈[1,5]。"},
    {id:"MSX29",type:"选择",difficulty:2,chapter:"第三章 函数",point:"SX-09",stem:"已知 f(x)=2x+1，则 f(3) =",options:["5","6","7","8"],answer:2,analysis:"f(3)=2×3+1=7。"},
    {id:"MSX30",type:"选择",difficulty:3,chapter:"第三章 函数",point:"SX-12",stem:"下列函数中为奇函数的是",options:["y=x²","y=x³","y=x+1","y=1"],answer:1,analysis:"f(-x)=(-x)³=-x³=-f(x)，定义域 R 对称，为奇函数。"},
    {id:"MSX31",type:"选择",difficulty:2,chapter:"第三章 函数",point:"SX-10",stem:"函数 y=1/(x-1) 的定义域为",options:["R","x>1","x≠1","x<1"],answer:2,analysis:"分母不为 0，x-1≠0⇒x≠1。"},
    {id:"MSX32",type:"选择",difficulty:3,chapter:"第三章 函数",point:"SX-16",stem:"函数 f(x)=2ˣ 在 R 上",options:["单调递增","单调递减","先增后减","先减后增"],answer:0,analysis:"底数 2>1，指数函数单调递增。"},
    {id:"MSX33",type:"选择",difficulty:3,chapter:"第四章 指数",point:"SX-16",stem:"比较 0.5² 与 0.5³ 的大小",options:["0.5²>0.5³","0.5²<0.5³","相等","无法比较"],answer:0,analysis:"0<a<1 时指数函数递减，2<3 故 0.5²>0.5³。"},
    {id:"MSX34",type:"填空",difficulty:2,chapter:"第四章 对数",point:"SX-15",stem:"log₃9 = ____。",options:[],answer:"2",analysis:"3²=9，故 log₃9=2。"},
    {id:"MSX35",type:"填空",difficulty:3,chapter:"第四章 对数",point:"SX-15",stem:"若 logₐ4=2，则 a = ____。",options:[],answer:"2",analysis:"a²=4 且 a>0,a≠1，故 a=2。"},
    {id:"MSX36",type:"选择",difficulty:3,chapter:"第四章 对数",point:"SX-15",stem:"lg100 + ln e =",options:["1","2","3","4"],answer:2,analysis:"lg100=2，ln e=1，和为 3。"},
    {id:"MSX37",type:"填空",difficulty:2,chapter:"第五章 三角函数",point:"SX-18",stem:"sin30° = ____。",options:[],answer:"1/2",analysis:"特殊角正弦值 sin30°=1/2。"},
    {id:"MSX38",type:"填空",difficulty:2,chapter:"第五章 三角函数",point:"SX-18",stem:"cos(π/3) = ____。",options:[],answer:"1/2",analysis:"cos60°=1/2。"},
    {id:"MSX39",type:"填空",difficulty:2,chapter:"第五章 三角函数",point:"SX-18",stem:"tan(π/4) = ____。",options:[],answer:"1",analysis:"tan45°=1。"},
    {id:"MSX40",type:"选择",difficulty:3,chapter:"第五章 三角函数",point:"SX-18",stem:"函数 y=sin x 的最小正周期为",options:["π/2","π","2π","4π"],answer:2,analysis:"正弦函数周期 T=2π。"},
    {id:"MSX41",type:"选择",difficulty:3,chapter:"第五章 三角函数",point:"SX-18",stem:"下列角中与 30° 终边相同的是",options:["150°","210°","390°","330°"],answer:2,analysis:"390°=30°+360°，终边相同。"},
    {id:"MSX42",type:"填空",difficulty:3,chapter:"第五章 三角函数",point:"SX-19",stem:"已知 sinα=3/5，α∈(0,π/2)，则 cosα = ____。",options:[],answer:"4/5",analysis:"同角关系 cosα=√(1-sin²α)=4/5（α 锐角取正）。"},
    {id:"MSX43",type:"选择",difficulty:3,chapter:"第五章 三角函数",point:"SX-20",stem:"函数 y=sin x 的最大值为",options:["0","1","2","π"],answer:1,analysis:"正弦函数值域 [-1,1]，最大值 1。"},
    {id:"MSX44",type:"选择",difficulty:4,chapter:"第五章 三角函数",point:"SX-22",stem:"将 y=cos x 图象向右平移 π/2 个单位，所得函数为",options:["y=sin x","y=cos(x+π/2)","y=-sin x","y=cos x"],answer:0,analysis:"右移：y=cos(x-π/2)=sin x。"},
    {id:"MSX45",type:"选择",difficulty:3,chapter:"第四章 指数",point:"SX-16",stem:"函数 y=3ˣ 与 y=(1/3)ˣ 的图象关于",options:["x 轴对称","y 轴对称","原点对称","直线 y=x 对称"],answer:1,analysis:"(1/3)ˣ=3⁻ˣ，与 3ˣ 关于 y 轴对称。"},
    {id:"MSX46",type:"选择",difficulty:3,chapter:"第三章 函数",point:"SX-09",stem:"函数 f(x)=√(x²-4) 的定义域为",options:["[-2,2]","(-2,2)","(-∞,-2]∪[2,+∞)","(-∞,-2)∪(2,+∞)"],answer:2,analysis:"x²-4≥0⇒x≤-2 或 x≥2。"},
    {id:"MSX47",type:"选择",difficulty:3,chapter:"第四章 对数",point:"SX-15",stem:"函数 y=log₂(x-1) 的定义域为",options:["(0,+∞)","(1,+∞)","[1,+∞)","R"],answer:1,analysis:"真数 x-1>0⇒x>1。"},
    {id:"MSX48",type:"填空",difficulty:2,chapter:"第五章 三角函数",point:"SX-19",stem:"化简 sin²α+cos²α = ____。",options:[],answer:"1",analysis:"同角三角函数基本关系：sin²α+cos²α=1。"}
  );

  /* ============ 物理 扩充 +30 ============ */
  D.questions["物理"].push(
    {id:"MWL16",type:"选择",difficulty:2,chapter:"第一章 运动描述",point:"WL-01",stem:"下列表示'时间间隔'的是",options:["第3秒末","第2秒初","一节课45分钟","第5秒"],answer:2,analysis:"'第3秒末''第2秒初'是时刻，'第5秒'是1秒的时间段但'一节课45分钟'更典型；本题选时间间隔。"},
    {id:"MWL17",type:"选择",difficulty:2,chapter:"第一章 运动描述",point:"WL-01",stem:"物理学中'质点'是一种",options:["真实粒子","理想化模型","微观颗粒","测量工具"],answer:1,analysis:"质点是忽略大小形状、突出质量的理想化模型。"},
    {id:"MWL18",type:"选择",difficulty:2,chapter:"第一章 运动描述",point:"WL-01",stem:"同一物体的运动，选择不同参照物，其描述",options:["一定相同","一定不同","可能不同","与参照物无关"],answer:2,analysis:"运动具有相对性，参照物不同结论可能不同。"},
    {id:"MWL19",type:"选择",difficulty:3,chapter:"第一章 运动描述",point:"WL-02",stem:"物体先向东直线运动5m，再向西运动3m，其位移大小为",options:["8m","5m","2m","0"],answer:2,analysis:"位移看初末位置：向东5再向西3，净向东2m，大小2m。"},
    {id:"MWL20",type:"选择",difficulty:2,chapter:"第一章 运动描述",point:"WL-02",stem:"平均速度描述的是",options:["某一时刻快慢","一段位移的平均快慢","加速度大小","瞬时速度"],answer:1,analysis:"平均速度=位移/时间，反映一段位移的平均快慢。"},
    {id:"MWL21",type:"选择",difficulty:2,chapter:"第二章 匀变速",point:"WL-05",stem:"匀变速直线运动的速度公式为",options:["x=v₀t+½at²","v=v₀+at","v²-v₀²=2ax","x=vt"],answer:1,analysis:"速度公式 v=v₀+at。"},
    {id:"MWL22",type:"选择",difficulty:2,chapter:"第二章 匀变速",point:"WL-05",stem:"自由落体加速度 g 的方向为",options:["竖直向上","竖直向下","水平","任意"],answer:1,analysis:"重力方向竖直向下，故 g 竖直向下。"},
    {id:"MWL23",type:"计算",difficulty:4,chapter:"第二章 匀变速",point:"WL-06",stem:"汽车以 v₀=20m/s 匀速行驶，刹车加速度 a=-4m/s²。求刹车后 6s 末的速度。（车已停则速度为0）",options:[],answer:"0 m/s",analysis:"停车时间 t停=v₀/|a|=5s，6s 时早已停止，故速度为 0。"},
    {id:"MWL24",type:"计算",difficulty:4,chapter:"第二章 匀变速",point:"WL-07",stem:"物体初速为0、a=2m/s² 做匀加速，求第3秒内的位移。",options:[],answer:"5 m",analysis:"前3s位移 x₃=½·2·9=9m；前2s位移 x₂=½·2·4=4m；第3s内=9-4=5m。"},
    {id:"MWL25",type:"选择",difficulty:3,chapter:"第二章 匀变速",point:"WL-05",stem:"v-t 图象的斜率表示",options:["位移","速度","加速度","路程"],answer:2,analysis:"v-t 图斜率=Δv/Δt=a。"},
    {id:"MWL26",type:"选择",difficulty:3,chapter:"第二章 匀变速",point:"WL-07",stem:"初速为0的匀加速直线运动中，第1s、第2s、第3s内的位移之比为",options:["1:2:3","1:3:5","1:4:9","3:5:7"],answer:1,analysis:"连续相等时间内位移比 1:3:5:…(奇数比)。"},
    {id:"MWL27",type:"选择",difficulty:3,chapter:"第二章 匀变速",point:"WL-08",stem:"物体匀减速到停止，逆向可看作初速为0的匀加速；通过连续相等位移所用时间之比为",options:["1:2:3","1:√2:√3","1:(√2-1):(√3-√2)","1:3:5"],answer:2,analysis:"由 x=½at²，通过第1、2、3段位移末时刻比1:√2:√3，故时间差比 1:(√2-1):(√3-√2)。"},
    {id:"MWL28",type:"选择",difficulty:2,chapter:"第三章 相互作用",point:"WL-09",stem:"力是",options:["物体的属性","物体对物体的作用","一种能量","运动状态"],answer:1,analysis:"力是物体对物体的相互作用。"},
    {id:"MWL29",type:"选择",difficulty:2,chapter:"第三章 相互作用",point:"WL-09",stem:"重力的施力物体是",options:["地面","地球","物体自身","空气"],answer:1,analysis:"重力源自地球吸引，施力物体是地球。"},
    {id:"MWL30",type:"选择",difficulty:3,chapter:"第三章 相互作用",point:"WL-10",stem:"弹力产生的条件是接触且",options:["发生弹性形变","有质量","受重力","运动"],answer:0,analysis:"弹力产生须直接接触并发生弹性形变。"},
    {id:"MWL31",type:"选择",difficulty:3,chapter:"第三章 相互作用",point:"WL-12",stem:"滑动摩擦力的方向",options:["与运动方向相同","与相对运动方向相反","总做阻力","与重力相反"],answer:1,analysis:"滑动摩擦力总是阻碍相对运动，与相对运动方向相反。"},
    {id:"MWL32",type:"选择",difficulty:3,chapter:"第三章 相互作用",point:"WL-13",stem:"两个共点力 F₁=5N, F₂=5N，其合力大小范围为",options:["0~5N","0~10N","5~10N","10~20N"],answer:1,analysis:"|F₁-F₂|≤F≤F₁+F₂，即 0~10N。"},
    {id:"MWL33",type:"选择",difficulty:2,chapter:"第三章 相互作用",point:"WL-13",stem:"共点力合成遵循",options:["代数相加","平行四边形定则","四舍五入","平均值"],answer:1,analysis:"矢量合成遵循平行四边形定则。"},
    {id:"MWL34",type:"选择",difficulty:3,chapter:"第三章 相互作用",point:"WL-14",stem:"物体受三力平衡，其中两力合力与第三力",options:["同向","等大反向","垂直","无关"],answer:1,analysis:"三力平衡合力为0，任意两力合力与第三力等大反向。"},
    {id:"MWL35",type:"选择",difficulty:2,chapter:"第四章 牛顿定律",point:"WL-15",stem:"牛顿第一定律说明",options:["力是维持运动的原因","力不是维持运动的原因","速度越大惯性越大","质量越小惯性越大"],answer:1,analysis:"惯性维持运动，力改变运动状态。"},
    {id:"MWL36",type:"选择",difficulty:3,chapter:"第四章 牛顿定律",point:"WL-15",stem:"单位'牛顿'(N)属于",options:["基本单位","导出单位","既不是基本也不是导出","自然常数"],answer:1,analysis:"1N=1kg·m/s²，由基本单位导出。"},
    {id:"MWL37",type:"选择",difficulty:2,chapter:"第四章 牛顿定律",point:"WL-15",stem:"物体的惯性大小取决于",options:["速度","加速度","质量","受力"],answer:2,analysis:"惯性是物体固有属性，仅由质量决定。"},
    {id:"MWL38",type:"选择",difficulty:3,chapter:"第四章 牛顿定律",point:"WL-16",stem:"作用力与反作用力的特点是",options:["大小相等方向相反作用在同物体","大小相等方向相反作用在不同物体","大小不等","方向相同"],answer:1,analysis:"牛顿第三定律：等大、反向、共线，作用在不同物体上。"},
    {id:"MWL39",type:"选择",difficulty:3,chapter:"第四章 牛顿定律",point:"WL-19",stem:"电梯自由下落时，人对底板的压力",options:["等于重力","大于重力","为0","无法确定"],answer:2,analysis:"自由下落 a=g 完全失重，视重为0。"},
    {id:"MWL40",type:"选择",difficulty:3,chapter:"第四章 牛顿定律",point:"WL-16",stem:"物体所受合外力恒定，则物体做",options:["匀速运动","匀变速运动","静止","曲线运动"],answer:1,analysis:"F合恒定⇒a恒定⇒匀变速运动。"},
    {id:"MWL41",type:"选择",difficulty:3,chapter:"第四章 牛顿定律",point:"WL-20",stem:"处理连接体问题常用",options:["整体法与隔离法","只分析整体","只分析隔离","忽略受力"],answer:0,analysis:"连接体常先整体求加速度，再隔离求内力。"},
    {id:"MWL42",type:"选择",difficulty:2,chapter:"第一章 运动描述",point:"WL-02",stem:"瞬时速度是指",options:["平均速度","某一时刻的速度","位移与时间的比","路程与时间的比"],answer:1,analysis:"瞬时速度对应某一时刻（或某一位置）的速度。"},
    {id:"MWL43",type:"选择",difficulty:2,chapter:"第二章 匀变速",point:"WL-07",stem:"匀变速直线运动的位移公式为",options:["x=v₀t+½at²","v=v₀+at","F=ma","x=vt"],answer:0,analysis:"位移公式 x=v₀t+½at²。"},
    {id:"MWL44",type:"选择",difficulty:3,chapter:"第三章 相互作用",point:"WL-12",stem:"关于最大静摩擦力，正确的是",options:["等于滑动摩擦力","大于滑动摩擦力","小于滑动摩擦力","为0"],answer:1,analysis:"一般情况下最大静摩擦力略大于滑动摩擦力。"},
    {id:"MWL45",type:"选择",difficulty:3,chapter:"第四章 牛顿定律",point:"WL-19",stem:"电梯加速上升时，缆绳张力 T 与重力 mg 的关系",options:["T=mg","T>mg","T<mg","T=0"],answer:1,analysis:"向上加速超重，T-mg=ma>0，故 T>mg。"}
  );

  /* ============ 化学 扩充 +30 ============ */
  D.questions["化学"].push(
    {id:"MHX16",type:"选择",difficulty:2,chapter:"第一章 物质分类",point:"HX-01",stem:"下列属纯净物的是",options:["空气","海水","蒸馏水","盐酸"],answer:2,analysis:"蒸馏水是纯净的 H₂O；其余为混合物。"},
    {id:"MHX17",type:"选择",difficulty:3,chapter:"第一章 物质分类",point:"HX-02",stem:"下列物质属于电解质的是",options:["Cu","食盐水","熔融 NaCl","蔗糖"],answer:2,analysis:"电解质须是化合物且在熔融/水溶液导电；熔融 NaCl 符合。Cu 是单质，食盐水是混合物，蔗糖不导电。"},
    {id:"MHX18",type:"选择",difficulty:2,chapter:"第一章 物质分类",point:"HX-01",stem:"下列为酸性氧化物的是",options:["CO","CO₂","Na₂O","NaCl"],answer:1,analysis:"CO₂ 与碱反应生成盐和水，属酸性氧化物。"},
    {id:"MHX19",type:"选择",difficulty:2,chapter:"第一章 物质分类",point:"HX-01",stem:"下列为碱性氧化物的是",options:["CO₂","SO₃","CaO","Al₂O₃"],answer:2,analysis:"CaO 与酸反应生成盐和水，属碱性氧化物。"},
    {id:"MHX20",type:"选择",difficulty:3,chapter:"第一章 离子反应",point:"HX-04",stem:"下列各组离子在溶液中能大量共存的是",options:["Ag⁺、Cl⁻","Ba²⁺、SO₄²⁻","K⁺、Na⁺、Cl⁻、NO₃⁻","H⁺、OH⁻"],answer:2,analysis:"K⁺、Na⁺、Cl⁻、NO₃⁻ 相互不反应可共存；其余均生成沉淀或水。"},
    {id:"MHX21",type:"选择",difficulty:3,chapter:"第一章 离子反应",point:"HX-04",stem:"书写离子方程式时，难溶物应写成",options:["离子","化学式","离子符号加电荷","省略"],answer:1,analysis:"难溶物、弱电解质、气体保留化学式。"},
    {id:"MHX22",type:"选择",difficulty:3,chapter:"第一章 离子反应",point:"HX-04",stem:"下列离子方程式书写正确的是",options:["Ba²⁺+SO₄²⁻=BaSO₄↓","Na+HCl=NaCl+H₂↑","Fe+Fe³⁺=2Fe²⁺","H⁺+OH⁻=H₂O(代表所有酸碱中和)"],answer:0,analysis:"A 符合拆写与守恒；B 应写离子式；C 电荷不守恒；D 仅代表强酸强碱可溶盐。"},
    {id:"MHX23",type:"选择",difficulty:2,chapter:"第一章 氧化还原",point:"HX-05",stem:"氧化还原反应的实质是",options:["得氧失氧","电子转移","化合价不变","质量变化"],answer:1,analysis:"本质是有电子转移（得失或偏移）。"},
    {id:"MHX24",type:"选择",difficulty:3,chapter:"第一章 氧化还原",point:"HX-05",stem:"氧化剂在反应中",options:["失电子被氧化","得电子被还原","化合价升高","作还原剂"],answer:1,analysis:"氧化剂得电子，化合价降低，被还原。"},
    {id:"MHX25",type:"选择",difficulty:2,chapter:"第一章 氧化还原",point:"HX-05",stem:"元素化合价升高，该物质",options:["被氧化","被还原","既氧化又还原","不变化合价"],answer:0,analysis:"化合价升高失电子，被氧化。"},
    {id:"MHX26",type:"选择",difficulty:3,chapter:"第二章 钠",point:"HX-06",stem:"钠与水反应时浮在水面，原因是",options:["密度比水大","密度比水小","与水放热","生成气体"],answer:1,analysis:"钠密度(0.97g/cm³)小于水，故浮于水面。"},
    {id:"MHX27",type:"填空",difficulty:3,chapter:"第二章 钠",point:"HX-06",stem:"过氧化钠与二氧化碳反应的化学方程式：____。",options:[],answer:"2Na₂O₂+2CO₂=2Na₂CO₃+O₂",analysis:"Na₂O₂ 既是氧化剂又是还原剂，放出 O₂。"},
    {id:"MHX28",type:"选择",difficulty:2,chapter:"第二章 钠",point:"HX-06",stem:"钠元素的焰色试验呈",options:["紫色","黄色","绿色","砖红色"],answer:1,analysis:"钠焰色为黄色（钾为紫色，需透过蓝色钴玻璃）。"},
    {id:"MHX29",type:"选择",difficulty:2,chapter:"第二章 物质的量",point:"HX-11",stem:"1 mol H₂O 约含分子数",options:["6.02×10²³","12","1","3.01×10²³"],answer:0,analysis:"1 mol 任何微粒含阿伏伽德罗常数 Nₐ≈6.02×10²³ 个。"},
    {id:"MHX30",type:"选择",difficulty:2,chapter:"第二章 物质的量",point:"HX-11",stem:"摩尔质量在数值上等于",options:["相对分子质量(g/mol)","质量","体积","密度"],answer:0,analysis:"摩尔质量 M 以 g/mol 为单位时数值等于相对分子(原子)质量。"},
    {id:"MHX31",type:"填空",difficulty:2,chapter:"第二章 物质的量",point:"HX-11",stem:"2 mol H₂ 的质量 = ____ g。",options:[],answer:"4",analysis:"M(H₂)=2g/mol，m=nM=2×2=4g。"},
    {id:"MHX32",type:"选择",difficulty:2,chapter:"第二章 物质的量",point:"HX-11",stem:"标准状况下 1 mol 任何气体的体积约为",options:["11.2 L","22.4 L","44.8 L","不能确定"],answer:1,analysis:"标况气体摩尔体积 Vm≈22.4 L/mol。"},
    {id:"MHX33",type:"选择",difficulty:2,chapter:"第二章 碳酸钠",point:"HX-08",stem:"Na₂CO₃ 的俗称是",options:["小苏打","纯碱/苏打","熟石灰","胆矾"],answer:1,analysis:"Na₂CO₃ 俗称纯碱、苏打；NaHCO₃ 叫小苏打。"},
    {id:"MHX34",type:"选择",difficulty:3,chapter:"第二章 碳酸钠",point:"HX-08",stem:"向 Na₂CO₃ 溶液中逐滴加入稀盐酸，现象是",options:["立即产生大量气泡","开始无气体，继续滴加才产生气泡","始终无现象","产生白色沉淀"],answer:1,analysis:"先 CO₃²⁻+H⁺=HCO₃⁻ 无气体；继续加 HCl：HCO₃⁻+H⁺=CO₂↑+H₂O 才冒泡。"},
    {id:"MHX35",type:"选择",difficulty:2,chapter:"第二章 氯",point:"HX-09",stem:"氯气与水反应的产物是",options:["HCl 和 HClO","仅 HCl","仅 HClO","Cl₂O"],answer:0,analysis:"Cl₂+H₂O⇌HCl+HClO，HClO 有漂白杀菌作用。"},
    {id:"MHX36",type:"选择",difficulty:3,chapter:"第二章 氯",point:"HX-09",stem:"漂白粉的有效成分是",options:["CaCl₂","Ca(ClO)₂","CaCO₃","CaO"],answer:1,analysis:"漂白粉由 Cl₂ 与石灰乳制得，有效成分 Ca(ClO)₂。"},
    {id:"MHX37",type:"选择",difficulty:2,chapter:"第二章 氯",point:"HX-09",stem:"干燥氯气可采用的干燥剂是",options:["碱石灰","浓硫酸","NaOH 溶液","水"],answer:1,analysis:"Cl₂ 与碱反应，故用中性/酸性干燥剂如浓硫酸；碱石灰、NaOH 均不可用。"},
    {id:"MHX38",type:"填空",difficulty:2,chapter:"第三章 铁",point:"HX-14",stem:"铁与稀硫酸反应的化学方程式：____。",options:[],answer:"Fe+H₂SO₄=FeSO₄+H₂↑",analysis:"Fe 被稀 H₂SO₄ 氧化为 +2 价生成 FeSO₄ 和 H₂。"},
    {id:"MHX39",type:"选择",difficulty:3,chapter:"第三章 铁",point:"HX-14",stem:"实现 Fe²⁺→Fe³⁺ 转化，可加入",options:["Fe 粉","Cl₂","Cu","Zn"],answer:1,analysis:"2Fe²⁺+Cl₂=2Fe³⁺+2Cl⁻，Cl₂ 将 Fe²⁺ 氧化。"},
    {id:"MHX40",type:"选择",difficulty:3,chapter:"第三章 铁",point:"HX-14",stem:"防止 Fe²⁺ 溶液被空气氧化的常用方法是",options:["加盐酸","加入洁净铁钉并密封","加热","敞口放置"],answer:1,analysis:"Fe + 2Fe³⁺=3Fe²⁺，加铁钉可还原意外生成的 Fe³⁺；密封隔绝空气。"},
    {id:"MHX41",type:"选择",difficulty:2,chapter:"第三章 铝",point:"HX-16",stem:"铝在空气中表面形成",options:["疏松氧化膜","致密氧化膜(Al₂O₃)","铝锈","无变化"],answer:1,analysis:"Al 与 O₂ 生成致密 Al₂O₃ 薄膜，保护内部。"},
    {id:"MHX42",type:"填空",difficulty:3,chapter:"第三章 铝",point:"HX-16",stem:"铝与 NaOH 溶液反应的化学方程式：____。",options:[],answer:"2Al+2NaOH+2H₂O=2NaAlO₂+3H₂↑",analysis:"Al 先与 H₂O 生成 Al(OH)₃ 再溶于碱，实质放 H₂。"},
    {id:"MHX43",type:"选择",difficulty:2,chapter:"第四章 原子结构",point:"HX-17",stem:"质量数 A 等于",options:["质子数-中子数","质子数+中子数","中子数-质子数","电子数"],answer:1,analysis:"A=Z+N。"},
    {id:"MHX44",type:"选择",difficulty:3,chapter:"第四章 周期律",point:"HX-18",stem:"同主族元素从上到下金属性",options:["减弱","增强","不变","先强后弱"],answer:1,analysis:"同主族自上而下原子半径增大，失电子能力增强，金属性增强。"},
    {id:"MHX45",type:"选择",difficulty:3,chapter:"第四章 周期表",point:"HX-19",stem:"位于第三周期第ⅢA族的元素是",options:["Mg","Al","Si","P"],answer:1,analysis:"第三周期：Na Mg Al Si P S Cl Ar，第ⅢA 族为 Al。"}
  );

  /* ============ 语文 扩充 +28 ============ */
  D.questions["语文"].push(
    {id:"MYW13",type:"选择",difficulty:2,chapter:"第一单元 现代诗歌",point:"YW-01",stem:"《沁园春·长沙》的作者是",options:["周恩来","毛泽东","朱德","刘少奇"],answer:1,analysis:"毛泽东于1925年所作，抒发革命豪情。"},
    {id:"MYW14",type:"选择",difficulty:3,chapter:"第一单元 现代诗歌",point:"YW-01",stem:"'指点江山，激扬文字'出自",options:["《红烛》","《沁园春·长沙》","《百合花》","《雨巷》"],answer:1,analysis:"出自毛泽东《沁园春·长沙》下阕。"},
    {id:"MYW15",type:"选择",difficulty:3,chapter:"第一单元 现代诗歌",point:"YW-02",stem:"《红烛》的作者是",options:["闻一多","徐志摩","郭沫若","艾青"],answer:0,analysis:"闻一多诗集《红烛》《死水》为代表。"},
    {id:"MYW16",type:"选择",difficulty:2,chapter:"第一单元 现代诗歌",point:"YW-01",stem:"下列不属于现代诗歌特点的是",options:["分行排列","意象抒情","自由灵活","严格遵循平仄格律"],answer:3,analysis:"现代诗突破古典格律，不严格要求平仄对仗。"},
    {id:"MYW17",type:"选择",difficulty:2,chapter:"第二单元 劳动",point:"YW-04",stem:"《喜看稻菽千重浪》报道的人物是",options:["袁隆平","屠呦呦","张秉贵","钟南山"],answer:0,analysis:"报道杂交水稻之父袁隆平。"},
    {id:"MYW18",type:"选择",difficulty:2,chapter:"第二单元 劳动",point:"YW-04",stem:"《心有一团火，温暖众人心》写的是售货员",options:["王进喜","张秉贵","雷锋","时传祥"],answer:1,analysis:"张秉贵是北京百货大楼'一团火'精神模范售货员。"},
    {id:"MYW19",type:"选择",difficulty:2,chapter:"第三单元 古代诗歌",point:"YW-06",stem:"《静女》出自我国最早的诗歌总集",options:["《楚辞》","《诗经》","《乐府》","《古诗十九首》"],answer:1,analysis:"《静女》属《诗经·邶风》。"},
    {id:"MYW20",type:"选择",difficulty:3,chapter:"第三单元 古代诗歌",point:"YW-06",stem:"《涉江采芙蓉》出自",options:["《诗经》","《楚辞》","《古诗十九首》","《乐府诗集》"],answer:2,analysis:"为《古诗十九首》之一，写游子思乡。"},
    {id:"MYW21",type:"选择",difficulty:3,chapter:"第三单元 古代诗歌",point:"YW-07",stem:"'大江东去，浪淘尽'出自苏轼的",options:["《江城子》","《念奴娇·赤壁怀古》","《水调歌头》","《定风波》"],answer:1,analysis:"苏轼豪放词代表作开篇句。"},
    {id:"MYW22",type:"选择",difficulty:2,chapter:"第三单元 古代诗歌",point:"YW-06",stem:"陶渊明号",options:["青莲居士","五柳先生","东坡居士","易安居士"],answer:1,analysis:"陶渊明，号五柳先生。"},
    {id:"MYW23",type:"填空",difficulty:3,chapter:"第三单元 古代诗歌",point:"YW-06",stem:"《归园田居》'羁鸟恋旧林，____。'",options:[],answer:"池鱼思故渊",analysis:"以羁鸟、池鱼自比，表达对田园的向往。"},
    {id:"MYW24",type:"选择",difficulty:3,chapter:"第三单元 古代诗歌",point:"YW-07",stem:"李白《梦游天姥吟留别》的诗歌体裁是",options:["近体诗","古体诗（七言歌行）","词","散曲"],answer:1,analysis:"属七言古体诗（歌行体），不受格律严限。"},
    {id:"MYW25",type:"选择",difficulty:3,chapter:"第三单元 古代诗歌",point:"YW-09",stem:"下列作品不属于杜甫的是",options:["《石壕吏》","《登高》","《春望》","《长恨歌》"],answer:3,analysis:"《长恨歌》为白居易所作；其余均为杜甫诗。"},
    {id:"MYW26",type:"选择",difficulty:2,chapter:"第六单元 思辨性阅读",point:"YW-13",stem:"《师说》的作者是",options:["韩愈","柳宗元","欧阳修","苏轼"],answer:0,analysis:"韩愈，唐宋八大家之首，倡导古文运动。"},
    {id:"MYW27",type:"选择",difficulty:3,chapter:"第六单元 思辨性阅读",point:"YW-13",stem:"'弟子不必不如师，师不必贤于弟子'出自",options:["《劝学》","《师说》","《论语》","《孟子》"],answer:1,analysis:"韩愈《师说》论述从师之道。"},
    {id:"MYW28",type:"选择",difficulty:2,chapter:"第六单元 思辨性阅读",point:"YW-13",stem:"《劝学》的作者是",options:["孔子","荀子","孟子","庄子"],answer:1,analysis:"《劝学》为《荀子》首篇，强调学习。"},
    {id:"MYW29",type:"选择",difficulty:2,chapter:"第七单元 散文",point:"YW-16",stem:"《荷塘月色》的作者是",options:["朱自清","郁达夫","老舍","冰心"],answer:0,analysis:"朱自清写景抒情散文名篇。"},
    {id:"MYW30",type:"选择",difficulty:3,chapter:"第七单元 散文",point:"YW-16",stem:"《我与地坛》的作者是",options:["史铁生","余秋雨","巴金","汪曾祺"],answer:0,analysis:"史铁生借地坛抒写生命感悟。"},
    {id:"MYW31",type:"选择",difficulty:2,chapter:"第七单元 散文",point:"YW-16",stem:"《赤壁赋》的作者是",options:["苏轼","苏洵","苏辙","王安石"],answer:0,analysis:"北宋苏轼被贬黄州时所作。"},
    {id:"MYW32",type:"选择",difficulty:2,chapter:"第五单元 整本书阅读",point:"YW-12",stem:"《乡土中国》的作者是",options:["费孝通","钱钟书","鲁迅","茅盾"],answer:0,analysis:"社会学家费孝通的社会学经典。"},
    {id:"MYW33",type:"选择",difficulty:2,chapter:"第五单元 整本书阅读",point:"YW-12",stem:"《红楼梦》的作者是",options:["罗贯中","施耐庵","曹雪芹","吴承恩"],answer:2,analysis:"清代曹雪芹著（后四十回高鹗续）。"},
    {id:"MYW34",type:"选择",difficulty:2,chapter:"第五单元 整本书阅读",point:"YW-12",stem:"《论语》的体裁是",options:["语录体","纪传体","编年体","小说"],answer:0,analysis:"《论语》为孔子弟子及再传弟子辑录的语录体散文。"},
    {id:"MYW35",type:"选择",difficulty:2,chapter:"古诗词诵读",point:"YW-21",stem:"'呦呦鹿鸣，食野之苹'出自",options:["《诗经·小雅》","《楚辞》","《古诗十九首》","汉乐府"],answer:0,analysis:"《诗经·小雅·鹿鸣》，宴饮宾客之诗。"},
    {id:"MYW36",type:"选择",difficulty:3,chapter:"古诗词诵读",point:"YW-21",stem:"'采之欲遗谁？所思在远道'出自",options:["《静女》","《涉江采芙蓉》","《氓》","《蒹葭》"],answer:1,analysis:"《古诗十九首·涉江采芙蓉》表达思念。"},
    {id:"MYW37",type:"选择",difficulty:2,chapter:"第三单元 古代诗歌",point:"YW-06",stem:"词按字数多少可分为",options:["上下阕","小令、中调、长调","豪放、婉约","古体、近体"],answer:1,analysis:"依字数：58字内小令，59-90中调，91字上长调。"},
    {id:"MYW38",type:"选择",difficulty:2,chapter:"第七单元 散文",point:"YW-16",stem:"《故都的秋》的作者是",options:["郁达夫","朱自清","梁实秋","林语堂"],answer:0,analysis:"郁达夫1934年写北平秋景。"},
    {id:"MYW39",type:"选择",difficulty:2,chapter:"第三单元 古代诗歌",point:"YW-07",stem:"白居易号",options:["香山居士","青莲居士","东坡居士","稼轩"],answer:0,analysis:"白居易，号香山居士。"},
    {id:"MYW40",type:"选择",difficulty:3,chapter:"第六单元 思辨性阅读",point:"YW-15",stem:"《拿来主义》中'鱼翅''鸦片''烟枪烟灯'分别比喻文化遗产中的",options:["全部吸收/部分利用/留作反面教材","全部抛弃/部分吸收/保留","无区别","仅指外国文化"],answer:0,analysis:"'鱼翅'有益应吸收，'鸦片'有用但须批判利用，'烟枪烟灯'可作历史反面教材留存。"}
  );

  /* ============ 英语 扩充 +28 ============ */
  D.questions["英语"].push(
    {id:"MYY13",type:"选择",difficulty:2,chapter:"Welcome Unit",point:"YY-01",stem:"—How are you? —____",options:["I'm fine, thank you.","I'm 16.","It's red.","Nice to meet you."],answer:0,analysis:"问候回应身体状况，选 I'm fine, thank you."},
    {id:"MYY14",type:"选择",difficulty:2,chapter:"Welcome Unit",point:"YY-01",stem:"This is ____ apple. (apple 以元音音素开头)",options:["a","an","the","/"],answer:1,analysis:"元音音素前用 an。"},
    {id:"MYY15",type:"选择",difficulty:3,chapter:"Unit 1 Teenage Life",point:"YY-02",stem:"I enjoy ____ (read) books in my free time.",options:["read","to read","reading","reads"],answer:2,analysis:"enjoy doing sth 固定搭配。"},
    {id:"MYY16",type:"选择",difficulty:2,chapter:"Unit 1 Teenage Life",point:"YY-02",stem:"He is good ____ math.",options:["at","in","on","for"],answer:0,analysis:"be good at 擅长。"},
    {id:"MYY17",type:"选择",difficulty:3,chapter:"Unit 1 Teenage Life",point:"YY-03",stem:"She prefers tea ____ coffee.",options:["than","to","with","for"],answer:1,analysis:"prefer A to B 固定搭配。"},
    {id:"MYY18",type:"选择",difficulty:3,chapter:"Unit 2 Travelling",point:"YY-04",stem:"We are looking forward ____ your reply.",options:["at","to","for","on"],answer:1,analysis:"look forward to (介词) 期望。"},
    {id:"MYY19",type:"选择",difficulty:2,chapter:"Unit 2 Travelling",point:"YY-04",stem:"The ticket was ____ (book) online yesterday.",options:["book","booked","booking","books"],answer:1,analysis:"被动语态 were/was + 过去分词 booked。"},
    {id:"MYY20",type:"选择",difficulty:2,chapter:"Unit 2 Travelling",point:"YY-04",stem:"____ (pack) your clothes before the trip.",options:["Packing","To pack","Pack","Packed"],answer:2,analysis:"祈使句以动词原形开头。"},
    {id:"MYY21",type:"选择",difficulty:3,chapter:"Unit 3 Sports",point:"YY-06",stem:"He practices ____ (play) basketball every day.",options:["play","to play","playing","plays"],answer:2,analysis:"practice doing sth 练习做某事。"},
    {id:"MYY22",type:"选择",difficulty:2,chapter:"Unit 3 Sports",point:"YY-06",stem:"The match was very ____ (excite).",options:["excite","exciting","excited","excitement"],answer:1,analysis:"修饰事物用 -ing 形容词 exciting。"},
    {id:"MYY23",type:"选择",difficulty:3,chapter:"Unit 3 Sports",point:"YY-06",stem:"Who is the ____ (win) of the game?",options:["win","winner","winning","won"],answer:1,analysis:"winner 名词'获胜者'。"},
    {id:"MYY24",type:"选择",difficulty:3,chapter:"Unit 4 Disasters",point:"YY-10",stem:"The earthquake ____ (destroy) the city in 2008.",options:["destroys","destroyed","has destroyed","destroys"],answer:1,analysis:"in 2008 过去时间，用一般过去时 destroyed。"},
    {id:"MYY25",type:"选择",difficulty:2,chapter:"Unit 4 Disasters",point:"YY-10",stem:"We should keep ____ (calm) in danger.",options:["calm","calmly","calming","calmness"],answer:0,analysis:"keep + 形容词，保持冷静。"},
    {id:"MYY26",type:"选择",difficulty:2,chapter:"Unit 4 Disasters",point:"YY-10",stem:"____ (rescue) workers arrived soon.",options:["Rescue","Rescued","Rescuing","Rescues"],answer:0,analysis:"rescue 作定语用原形 rescue workers 救援人员。"},
    {id:"MYY27",type:"选择",difficulty:3,chapter:"Unit 5 Languages",point:"YY-13",stem:"English is a ____ (use) tool for communication.",options:["use","useful","usefully","usage"],answer:1,analysis:"修饰名词 tool 用形容词 useful。"},
    {id:"MYY28",type:"选择",difficulty:3,chapter:"Unit 5 Languages",point:"YY-13",stem:"The number of students in our school ____ (be) 2000.",options:["are","is","were","be"],answer:1,analysis:"the number of + 复数名词作主语，谓语用单数 is。"},
    {id:"MYY29",type:"选择",difficulty:3,chapter:"Unit 5 Languages",point:"YY-13",stem:"A number of students ____ (be) playing on the playground.",options:["is","are","was","be"],answer:1,analysis:"a number of + 复数名词意为'许多'，谓语用复数 are。"},
    {id:"MYY30",type:"选择",difficulty:3,chapter:"跨单元",point:"YY-14",stem:"定语从句中，先行词指物且在从句中作主语，可用",options:["who / whom","which / that","whose","when"],answer:1,analysis:"指物作主语用 which 或 that。"},
    {id:"MYY31",type:"选择",difficulty:3,chapter:"跨单元",point:"YY-14",stem:"I ____ (finish) my homework already.",options:["finish","finished","have finished","will finish"],answer:2,analysis:"already 标志现在完成时 have finished。"},
    {id:"MYY32",type:"选择",difficulty:4,chapter:"跨单元",point:"YY-14",stem:"By the time we arrived, the train ____ (leave).",options:["leaves","left","has left","had left"],answer:3,analysis:"'到达'过去，'离开'更早发生，用过去完成时 had left。"},
    {id:"MYY33",type:"选择",difficulty:2,chapter:"Unit 1 Teenage Life",point:"YY-02",stem:"The club ____ (hold) a meeting yesterday afternoon.",options:["holds","held","has held","hold"],answer:1,analysis:"yesterday 过去时 held。"},
    {id:"MYY34",type:"选择",difficulty:3,chapter:"Unit 3 Sports",point:"YY-06",stem:"He runs ____ (fast) than me.",options:["fast","faster","fastest","more fast"],answer:1,analysis:"than 比较级 faster。"},
    {id:"MYY35",type:"选择",difficulty:3,chapter:"Unit 2 Travelling",point:"YY-04",stem:"It's a good place ____ (visit).",options:["visit","to visit","visiting","visited"],answer:1,analysis:"定语 a place to do sth 用不定式。"},
    {id:"MYY36",type:"选择",difficulty:3,chapter:"Unit 5 Languages",point:"YY-13",stem:"Can you ____ (communication) with foreigners in English?",options:["communication","communicate","communicative","communicating"],answer:1,analysis:"情态动词 can 后接动词原形 communicate。"},
    {id:"MYY37",type:"选择",difficulty:3,chapter:"跨单元",point:"YY-14",stem:"The book ____ (write) by Lu Xun.",options:["wrote","was written","is written","writes"],answer:1,analysis:"被动语态，过去时 was written。"},
    {id:"MYY38",type:"选择",difficulty:2,chapter:"Unit 4 Disasters",point:"YY-10",stem:"新闻的'导语'通常包含",options:["背景资料","最重要的事实","作者评论","次要细节"],answer:1,analysis:"倒金字塔结构导语放最重要事实。"},
    {id:"MYY39",type:"选择",difficulty:3,chapter:"Unit 1 Teenage Life",point:"YY-02",stem:"My hobby is ____ (collect) stamps.",options:["collect","to collect","collecting","collects"],answer:2,analysis:"be + 动名词作表语 collecting。"},
    {id:"MYY40",type:"选择",difficulty:3,chapter:"Unit 5 Languages",point:"YY-13",stem:"____ (learn) a foreign language needs practice.",options:["Learn","Learned","Learning","To learning"],answer:2,analysis:"动名词 Learning 作主语。"}
  );

  /* 在控制台输出扩充后的题库规模（便于调试） */
  if (typeof console !== "undefined") {
    var summary = D.meta.subjects.map(function (s) { return s + ":" + (D.questions[s] || []).length; }).join("  ");
    console.log("[augment-quiz-q] 题库扩充完成 → " + summary);
  }
})();
