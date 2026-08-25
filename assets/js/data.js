/* ============================================================
   WorkBuddy 高中学习辅助系统 — 数据层
   内容范围：人教版高一必修第一册/上册
   地区适配：内蒙古（全国乙卷考区）
   说明：所有考点、题目、解析、讲义均严格对齐教材原文，
        难度/考频依据内蒙古近5年高一期末与全国卷考情归纳。
   ============================================================ */
const DATA = {
  meta: {
    region: "内蒙古（全国乙卷考区）",
    version: "人教版 2019 版 必修第一册/上册",
    subjects: ["语文", "数学", "英语", "物理", "化学"],
    updated: "2026-08"
  },

  /* 学科元数据：weight 用于复习计划时长分配（按分值/课时权重） */
  subjects: {
    "语文": { book: "必修 上册", weight: 1.0, accent: "#e2a252" },
    "数学": { book: "必修 第一册", weight: 1.2, accent: "#5aa9e6" },
    "英语": { book: "必修 第一册", weight: 1.0, accent: "#4cc38a" },
    "物理": { book: "必修 第一册", weight: 1.1, accent: "#e56363" },
    "化学": { book: "必修 第一册", weight: 1.1, accent: "#b78cff" }
  },

  /* ============ 模块1：考点库 ============ */
  points: {
    "语文": [
      {id:"YW-01",chapter:"第一单元 现代诗歌",section:"1.1 沁园春·长沙",name:"意象与意境的把握",freq:"高频",difficulty:3,type:"鉴赏/简答",error:"混淆'意象'(物)与'意境'(氛围)",page:"p.2"},
      {id:"YW-02",chapter:"第一单元 现代诗歌",section:"1.2 立在地球边上放号/红烛",name:"郭沫若/闻一多诗歌风格",freq:"中频",difficulty:2,type:"选择/简答",error:"混淆浪漫主义与现实主义特征",page:"p.6"},
      {id:"YW-03",chapter:"第一单元 小说",section:"1.3 百合花/哦，香雪",name:"人物形象与细节描写",freq:"高频",difficulty:3,type:"简答/写作",error:"细节描写作用答成'铺垫'泛化",page:"p.12"},
      {id:"YW-04",chapter:"第二单元 劳动",section:"2.1 喜看稻菽千重浪",name:"人物通讯的选材与结构",freq:"中频",difficulty:2,type:"选择/简答",error:"混淆通讯与新闻评论体裁",page:"p.30"},
      {id:"YW-05",chapter:"第二单元 劳动",section:"2.2 以工匠精神雕琢时代品质",name:"新闻评论的论证方法",freq:"中频",difficulty:3,type:"简答",error:"把'引证'误判为'举例论证'",page:"p.42"},
      {id:"YW-06",chapter:"第三单元 古代诗歌",section:"3.1 短歌行/归园田居",name:"建安风骨与田园诗",freq:"高频",difficulty:3,type:"默写/鉴赏",error:"曹操诗风误归'田园'",page:"p.56"},
      {id:"YW-07",chapter:"第三单元 古代诗歌",section:"3.2 梦游天姥吟留别",name:"李白浪漫主义手法",freq:"高频",difficulty:3,type:"鉴赏/默写",error:"'留别'主题答成'游仙'泛谈",page:"p.62"},
      {id:"YW-08",chapter:"第三单元 古代诗歌",section:"3.3 登高/琵琶行",name:"杜甫沉郁顿挫与白居易讽喻",freq:"高频",difficulty:4,type:"鉴赏/默写",error:"《琵琶行》主旨混淆'同病相怜'与'讽喻'",page:"p.67"},
      {id:"YW-09",chapter:"第三单元 古代诗歌",section:"3.4 念奴娇·赤壁怀古等宋词",name:"豪放派与婉约派辨析",freq:"高频",difficulty:3,type:"选择/鉴赏",error:"苏轼词误判为婉约",page:"p.73"},
      {id:"YW-10",chapter:"第三单元 古代诗歌",section:"3.5 声声慢",name:"李清照叠字与愁情",freq:"中频",difficulty:3,type:"默写/鉴赏",error:"叠字作用只答'音韵'漏'情感递进'",page:"p.79"},
      {id:"YW-11",chapter:"第四单元 家乡文化",section:"4.1 调查与访谈",name:"家乡文化调查报告写法",freq:"低频",difficulty:2,type:"实践/写作",error:"报告与记叙文混淆",page:"p.86"},
      {id:"YW-12",chapter:"第五单元 整本书阅读",section:"5.1 乡土中国",name:"差序格局/礼治秩序概念",freq:"中频",difficulty:4,type:"简答",error:"'差序格局'与'团体格局'颠倒",page:"p.94"},
      {id:"YW-13",chapter:"第六单元 思辨性阅读",section:"6.1 劝学",name:"荀子论证结构与比喻论证",freq:"高频",difficulty:3,type:"默写/论证分析",error:"'君子博学'句默写易错字",page:"p.112"},
      {id:"YW-14",chapter:"第六单元 思辨性阅读",section:"6.2 师说",name:"韩愈破立结合与句式",freq:"高频",difficulty:4,type:"默写/翻译",error:"'师道之不传也久矣'句式判断错",page:"p.118"},
      {id:"YW-15",chapter:"第六单元 思辨性阅读",section:"6.3 拿来主义",name:"比喻论证与破立关系",freq:"高频",difficulty:4,type:"简答",error:"'大宅子'喻体对应义混淆",page:"p.128"},
      {id:"YW-16",chapter:"第七单元 散文",section:"7.1 故都的秋/荷塘月色",name:"情景交融与语言风格",freq:"高频",difficulty:3,type:"鉴赏",error:"两文情感基调混淆(清静悲凉 vs 淡淡的喜悦)",page:"p.142"},
      {id:"YW-17",chapter:"第七单元 散文",section:"7.2 我与地坛",name:"史铁生生命哲思",freq:"中频",difficulty:3,type:"鉴赏/简答",error:"母爱与地坛双线关系答不全",page:"p.152"},
      {id:"YW-18",chapter:"第七单元 散文",section:"7.3 赤壁赋",name:"苏轼旷达与主客问答",freq:"高频",difficulty:4,type:"默写/翻译",error:"'冯虚御风'通假字漏写",page:"p.160"},
      {id:"YW-19",chapter:"第七单元 散文",section:"7.4 登泰山记",name:"姚鼐游记的记与描写",freq:"低频",difficulty:3,type:"默写/简答",error:"'阳/阴'山南水北记错",page:"p.166"},
      {id:"YW-20",chapter:"第八单元 词语",section:"8.1 词语积累",name:"词义轻重/感情色彩辨析",freq:"中频",difficulty:2,type:"选择",error:"近义词语义轻重颠倒",page:"p.174"},
      {id:"YW-21",chapter:"古诗词诵读",section:"9.1 静女/涉江采芙蓉",name:"诗经重章与文人五言",freq:"中频",difficulty:2,type:"默写/鉴赏",error:"《诗经》'赋比兴'判断错",page:"p.182"},
      {id:"YW-22",chapter:"古诗词诵读",section:"9.2 虞美人/鹊桥仙",name:"李煜亡国之愁与秦观爱情",freq:"中频",difficulty:3,type:"默写/鉴赏",error:"'朱颜'指代误答",page:"p.184"},
      {id:"YW-23",chapter:"跨单元",section:"写作",name:"记叙文立意与细节",freq:"高频",difficulty:3,type:"写作",error:"立意空泛无'我'",page:"单元写作"},
      {id:"YW-24",chapter:"跨单元",section:"写作",name:"议论文论点与论据",freq:"高频",difficulty:4,type:"写作",error:"论据与论点'两张皮'",page:"单元写作"}
    ],
    "数学": [
      {id:"SX-01",chapter:"第一章 集合",section:"1.1 集合概念与表示",name:"集合元素三性(确定性/互异性/无序性)",freq:"高频",difficulty:2,type:"选择",error:"忽略互异性致多解",page:"p.3"},
      {id:"SX-02",chapter:"第一章 集合",section:"1.2 集合关系",name:"子集、真子集、空集",freq:"高频",difficulty:2,type:"选择/填空",error:"空集是任何集合子集漏'非空'",page:"p.7"},
      {id:"SX-03",chapter:"第一章 集合",section:"1.3 集合运算",name:"交、并、补集与Venn图",freq:"高频",difficulty:3,type:"选择/填空",error:"补集范围(全集合)判错",page:"p.10"},
      {id:"SX-04",chapter:"第一章 逻辑",section:"1.4 充要条件",name:"充分条件/必要条件判定",freq:"高频",difficulty:3,type:"选择",error:"'p→q'方向搞反",page:"p.17"},
      {id:"SX-05",chapter:"第一章 逻辑",section:"1.5 量词",name:"全称量词与存在量词否定",freq:"中频",difficulty:3,type:"选择",error:"∃否定变∀但结论未否",page:"p.23"},
      {id:"SX-06",chapter:"第二章 不等式",section:"2.1 不等式性质",name:"不等式基本性质与推论",freq:"高频",difficulty:2,type:"选择",error:"乘负数未变号",page:"p.37"},
      {id:"SX-07",chapter:"第二章 不等式",section:"2.2 基本不等式",name:"a+b≥2√ab 及'1'的代换",freq:"高频",difficulty:4,type:"选择/解答",error:"忽略a,b>0前提",page:"p.44"},
      {id:"SX-08",chapter:"第二章 函数方程",section:"2.3 三个二次关系",name:"二次函数/方程/不等式关联",freq:"高频",difficulty:4,type:"解答",error:"根的分布漏Δ与对称轴",page:"p.51"},
      {id:"SX-09",chapter:"第三章 函数",section:"3.1 函数概念",name:"定义域、对应关系、值域",freq:"高频",difficulty:3,type:"选择/填空",error:"f(g(x))定义域两层约束",page:"p.60"},
      {id:"SX-10",chapter:"第三章 函数",section:"3.2 函数三要素",name:"相同函数的判定",freq:"中频",difficulty:2,type:"选择",error:"只看解析式忽略定义域",page:"p.63"},
      {id:"SX-11",chapter:"第三章 函数",section:"3.3 单调性",name:"单调性定义与证明(作差)",freq:"高频",difficulty:4,type:"解答",error:"作差后因式分解错",page:"p.76"},
      {id:"SX-12",chapter:"第三章 函数",section:"3.4 奇偶性",name:"奇偶性的判定与图象对称",freq:"高频",difficulty:3,type:"选择/解答",error:"定义域不关于原点对称误判奇",page:"p.82"},
      {id:"SX-13",chapter:"第三章 函数",section:"3.5 幂函数",name:"y=x^a 图象与性质",freq:"中频",difficulty:2,type:"选择",error:"a<0时过(1,1)不过(0,0)忘",page:"p.87"},
      {id:"SX-14",chapter:"第四章 指数",section:"4.1 指数运算",name:"根式与分数指数幂互化",freq:"高频",difficulty:3,type:"填空/解答",error:"负分数指数底数为0",page:"p.104"},
      {id:"SX-15",chapter:"第四章 对数",section:"4.2 对数运算",name:"对数运算法则与换底",freq:"高频",difficulty:3,type:"填空/解答",error:"log_a(M+N)≠logM+logN",page:"p.122"},
      {id:"SX-16",chapter:"第四章 函数",section:"4.3 指数/对数函数",name:"图象、单调、定点(1,0)/(0,1)",freq:"高频",difficulty:3,type:"选择",error:"a>1与0<a<1增减混淆",page:"p.111"},
      {id:"SX-17",chapter:"第四章 模型",section:"4.4 函数模型应用",name:"指数/对数/幂函数模型增长差异",freq:"中频",difficulty:3,type:"解答",error:"'指数爆炸'与'对数增长慢'颠倒",page:"p.146"},
      {id:"SX-18",chapter:"第五章 三角函数",section:"5.1 任意角与弧度",name:"弧度与角度互化(π=180°)",freq:"高频",difficulty:2,type:"填空",error:"角度→弧度忘乘π/180",page:"p.171"},
      {id:"SX-19",chapter:"第五章 三角函数",section:"5.2 三角函数定义",name:"单位圆定义与三角函数线",freq:"高频",difficulty:3,type:"选择/填空",error:"符号按象限判错",page:"p.177"},
      {id:"SX-20",chapter:"第五章 三角函数",section:"5.3 诱导公式",name:"'奇变偶不变，符号看象限'",freq:"高频",difficulty:3,type:"填空/解答",error:"符号看原角所在象限",page:"p.188"},
      {id:"SX-21",chapter:"第五章 三角函数",section:"5.4 图象性质",name:"y=sinx/cosx 周期、对称轴",freq:"高频",difficulty:3,type:"选择",error:"对称轴x=kπ+π/2误为kπ",page:"p.199"},
      {id:"SX-22",chapter:"第五章 三角函数",section:"5.5 图象变换",name:"y=Asin(ωx+φ) 平移伸缩",freq:"高频",difficulty:4,type:"解答",error:"先平移后伸缩φ处理错",page:"p.231"},
      {id:"SX-23",chapter:"第五章 三角函数",section:"5.6 性质综合",name:"由图象求A/ω/φ",freq:"高频",difficulty:4,type:"解答",error:"ω由周期T=2π/|ω|求错",page:"p.238"},
      {id:"SX-24",chapter:"跨章",section:"综合",name:"函数零点与方程根",freq:"中频",difficulty:4,type:"解答",error:"零点存在定理≠唯一",page:"综合"}
    ],
    "英语": [
      {id:"YY-01",chapter:"Welcome Unit",section:"W1 基础词汇",name:"greet/introduce/register 等",freq:"中频",difficulty:2,type:"选择/填空",error:"nationality 拼写",page:"p.1"},
      {id:"YY-02",chapter:"Unit 1 Teenage Life",section:"1.1 词汇",name:"prefer/volunteer/challenge",freq:"高频",difficulty:2,type:"选择/写作",error:"prefer的搭配prefer A to B",page:"p.13"},
      {id:"YY-03",chapter:"Unit 1 Teenage Life",section:"1.2 语法",name:"定语从句(关系代词who/which/that)",freq:"高频",difficulty:3,type:"语法填空",error:"先行词指人也可用that",page:"p.18"},
      {id:"YY-04",chapter:"Unit 2 Travelling",section:"2.1 词汇",name:"transport/book/accommodation",freq:"中频",difficulty:2,type:"选择",error:"book作动词'预订'义",page:"p.26"},
      {id:"YY-05",chapter:"Unit 2 Travelling",section:"2.2 语法",name:"现在进行时表将来",freq:"中频",difficulty:3,type:"语法填空",error:"位移动词go/come/leave可用进行表将来",page:"p.30"},
      {id:"YY-06",chapter:"Unit 3 Sports",section:"3.1 词汇",name:"athlete/honor/determination",freq:"高频",difficulty:2,type:"选择/写作",error:"honor不可数(荣誉)",page:"p.38"},
      {id:"YY-07",chapter:"Unit 3 Sports",section:"3.2 语法",name:"反身代词与动词短语",freq:"中频",difficulty:2,type:"选择",error:"enjoy oneself 搭配",page:"p.42"},
      {id:"YY-08",chapter:"Unit 3 Sports",section:"3.3 写作",name:"体育人物描写与演讲稿",freq:"高频",difficulty:3,type:"写作",error:"演讲稿开头Ladies and gentlemen",page:"p.46"},
      {id:"YY-09",chapter:"Unit 4 Disasters",section:"4.1 词汇",name:"disaster/destroy/supply",freq:"中频",difficulty:2,type:"选择",error:"destroy 过去式destroyed",page:"p.50"},
      {id:"YY-10",chapter:"Unit 4 Disasters",section:"4.2 语法",name:"定语从句(关系副词when/where/why)",freq:"高频",difficulty:3,type:"语法填空",error:"where表地点状语非主语",page:"p.54"},
      {id:"YY-11",chapter:"Unit 4 Disasters",section:"4.3 写作",name:"新闻报道写作结构",freq:"中频",difficulty:3,type:"写作",error:"倒金字塔结构(重要在前)",page:"p.58"},
      {id:"YY-12",chapter:"Unit 5 Languages",section:"5.1 词汇",name:"request/recognize/major",freq:"中频",difficulty:2,type:"选择",error:"request sb to do",page:"p.62"},
      {id:"YY-13",chapter:"Unit 5 Languages",section:"5.2 语法",name:"定语从句介词+which/whom",freq:"高频",difficulty:4,type:"语法填空",error:"介词由搭配或从句缺状语决定",page:"p.66"},
      {id:"YY-14",chapter:"跨单元",section:"阅读",name:"细节理解与词义猜测",freq:"高频",difficulty:3,type:"阅读",error:"推断题勿选原文原词陷阱",page:"阅读策略"},
      {id:"YY-15",chapter:"跨单元",section:"写作",name:"应用文书信格式",freq:"高频",difficulty:3,type:"写作",error:"署名在右下角",page:"写作"},
      {id:"YY-16",chapter:"跨单元",section:"听力",name:"数字/时间/地点抓取",freq:"高频",difficulty:2,type:"听力",error:"虚数干扰项",page:"听力策略"},
      {id:"YY-17",chapter:"Welcome Unit",section:"语音",name:"元音/辅音音标辨析",freq:"低频",difficulty:2,type:"语音",error:"/θ/与/s/混淆",page:"p.4"}
    ],
    "物理": [
      {id:"WL-01",chapter:"第一章 运动描述",section:"1.1 质点参考系",name:"质点抽象条件与参考系",freq:"高频",difficulty:2,type:"选择",error:"转动/大小不可忽略时不能当质点",page:"p.10"},
      {id:"WL-02",chapter:"第一章 运动描述",section:"1.2 时间与位移",name:"位移(矢量)与路程区别",freq:"高频",difficulty:2,type:"选择/填空",error:"位移是矢量有方向",page:"p.15"},
      {id:"WL-03",chapter:"第一章 运动描述",section:"1.3 速度",name:"平均速度与瞬时速度",freq:"高频",difficulty:3,type:"选择/计算",error:"平均速率≠平均速度大小",page:"p.20"},
      {id:"WL-04",chapter:"第一章 运动描述",section:"1.4 加速度",name:"a=Δv/Δt 方向与加速减速",freq:"高频",difficulty:3,type:"选择",error:"a与v同向加速,无关",page:"p.27"},
      {id:"WL-05",chapter:"第二章 匀变速",section:"2.1 v-t图象",name:"斜率表加速度、面积表位移",freq:"高频",difficulty:3,type:"选择/计算",error:"图象斜率非速度",page:"p.39"},
      {id:"WL-06",chapter:"第二章 匀变速",section:"2.2 速度公式",name:"v=v0+at",freq:"高频",difficulty:3,type:"计算",error:"a取负号代入",page:"p.43"},
      {id:"WL-07",chapter:"第二章 匀变速",section:"2.3 位移公式",name:"x=v0t+½at²",freq:"高频",difficulty:3,type:"计算",error:"t²整体代入",page:"p.46"},
      {id:"WL-08",chapter:"第二章 匀变速",section:"2.4 推论",name:"v²-v0²=2ax 与 平均速度",freq:"中频",difficulty:4,type:"计算",error:"不含t时优先用v²-v0²=2ax",page:"p.49"},
      {id:"WL-09",chapter:"第二章 匀变速",section:"2.5 自由落体",name:"g=9.8m/s² 与初速0",freq:"高频",difficulty:3,type:"计算",error:"自由落体v0=0,a=g向下",page:"p.56"},
      {id:"WL-10",chapter:"第三章 相互作用",section:"3.1 重力",name:"G=mg 与重心",freq:"中频",difficulty:2,type:"选择",error:"重心不一定在物体上",page:"p.83"},
      {id:"WL-11",chapter:"第三章 相互作用",section:"3.2 弹力",name:"弹力方向与胡克定律F=kx",freq:"高频",difficulty:3,type:"选择/计算",error:"x是形变量非原长",page:"p.88"},
      {id:"WL-12",chapter:"第三章 相互作用",section:"3.3 摩擦力",name:"静摩擦与滑动摩擦f=μN",freq:"高频",difficulty:4,type:"选择/计算",error:"静摩擦力随外力变,有最大值",page:"p.94"},
      {id:"WL-13",chapter:"第三章 相互作用",section:"3.4 力的合成",name:"平行四边形定则",freq:"高频",difficulty:3,type:"计算",error:"合力范围|F1-F2|≤F≤F1+F2",page:"p.104"},
      {id:"WL-14",chapter:"第三章 相互作用",section:"3.5 力的分解",name:"正交分解法",freq:"高频",difficulty:4,type:"计算",error:"分解按实际作用效果",page:"p.110"},
      {id:"WL-15",chapter:"第四章 牛顿定律",section:"4.1 第一定律",name:"惯性(质量量度)",freq:"中频",difficulty:2,type:"选择",error:"惯性只与质量有关",page:"p.122"},
      {id:"WL-16",chapter:"第四章 牛顿定律",section:"4.2 第二定律",name:"F=ma 矢量性瞬时性",freq:"高频",difficulty:4,type:"计算",error:"F与a同向,用合外力",page:"p.127"},
      {id:"WL-17",chapter:"第四章 牛顿定律",section:"4.3 第三定律",name:"作用力反作用力异同",freq:"中频",difficulty:3,type:"选择",error:"与平衡力区别(异物/同时)",page:"p.134"},
      {id:"WL-18",chapter:"第四章 牛顿定律",section:"4.4 单位制",name:"国际单位制基本单位",freq:"低频",difficulty:2,type:"选择",error:"基本单位:m/kg/s/A/K/mol/cd",page:"p.139"},
      {id:"WL-19",chapter:"第四章 牛顿定律",section:"4.5 超重失重",name:"加速度方向判超重失重",freq:"高频",difficulty:3,type:"选择",error:"视重G'=m(g±a)",page:"p.143"},
      {id:"WL-20",chapter:"第四章 牛顿定律",section:"4.6 共点力平衡",name:"正交分解平衡条件",freq:"高频",difficulty:4,type:"计算",error:"∑Fx=0,∑Fy=0",page:"p.150"},
      {id:"WL-21",chapter:"第二章 实验",section:"实验",name:"打点计时器与逐差法",freq:"中频",difficulty:3,type:"实验",error:"逐差法a=[(x4+x5+x6)-(x1+x2+x3)]/9T²",page:"p.33"}
    ],
    "化学": [
      {id:"HX-01",chapter:"第一章 物质分类",section:"1.1 分类",name:"树状分类与交叉分类",freq:"中频",difficulty:2,type:"选择",error:"单质/化合物/氧化物归属",page:"p.6"},
      {id:"HX-02",chapter:"第一章 物质分类",section:"1.2 胶体",name:"丁达尔效应与渗析",freq:"中频",difficulty:2,type:"选择",error:"胶体粒子1-100nm",page:"p.9"},
      {id:"HX-03",chapter:"第一章 离子反应",section:"1.3 电解质",name:"强/弱电解质判断",freq:"高频",difficulty:3,type:"选择",error:"弱酸弱碱是弱电解质",page:"p.14"},
      {id:"HX-04",chapter:"第一章 离子反应",section:"1.4 离子方程式",name:"书写与正误判断",freq:"高频",difficulty:4,type:"选择/填空",error:"拆错难溶/弱电解质",page:"p.18"},
      {id:"HX-05",chapter:"第一章 氧化还原",section:"1.5 概念",name:"升失氧/降得还(双线桥)",freq:"高频",difficulty:3,type:"选择",error:"氧化剂得电子价降低",page:"p.23"},
      {id:"HX-06",chapter:"第一章 氧化还原",section:"1.6 配平",name:"得失电子守恒配平",freq:"高频",difficulty:4,type:"填空",error:"先配电子再配原子",page:"p.28"},
      {id:"HX-07",chapter:"第二章 钠",section:"2.1 钠性质",name:"Na与O2/H2O反应",freq:"高频",difficulty:3,type:"选择/填空",error:"Na保存于煤油,遇水放H2",page:"p.36"},
      {id:"HX-08",chapter:"第二章 钠",section:"2.2 碳酸钠",name:"Na2CO3与NaHCO3鉴别",freq:"高频",difficulty:3,type:"选择",error:"HCO3⁻加CaCl2不沉淀",page:"p.41"},
      {id:"HX-09",chapter:"第二章 氯",section:"2.3 氯气",name:"Cl2与金属/水/碱反应",freq:"高频",difficulty:3,type:"选择",error:"Cl2+H2O=HCl+HClO",page:"p.47"},
      {id:"HX-10",chapter:"第二章 氯",section:"2.4 漂白",name:"HClO漂白与消毒",freq:"中频",difficulty:2,type:"选择",error:"HClO不稳定见光分解",page:"p.51"},
      {id:"HX-11",chapter:"第二章 物质的量",section:"2.5 概念",name:"n=N/NA=m/M=V/Vm",freq:"高频",difficulty:3,type:"计算",error:"Vm=22.4L/mol仅标况气体",page:"p.56"},
      {id:"HX-12",chapter:"第二章 物质的量",section:"2.6 浓度",name:"c=n/V 与稀释",freq:"高频",difficulty:4,type:"计算",error:"体积用溶液体积非水",page:"p.63"},
      {id:"HX-13",chapter:"第二章 卤素",section:"2.7 卤素",name:"卤素单质氧化性递变",freq:"中频",difficulty:3,type:"选择",error:"F2最活泼,自上而下减弱",page:"p.70"},
      {id:"HX-14",chapter:"第三章 铁",section:"3.1 铁性质",name:"Fe与O2/Cl2反应产物",freq:"高频",difficulty:3,type:"选择",error:"Fe+Cl2→FeCl3(三价)",page:"p.82"},
      {id:"HX-15",chapter:"第三章 铁",section:"3.2 亚铁与铁盐",name:"Fe²⁺/Fe³⁺转化与检验",freq:"高频",difficulty:4,type:"选择/实验",error:"Fe³⁺+KSCN血红色",page:"p.88"},
      {id:"HX-16",chapter:"第三章 金属",section:"3.3 铝",name:"Al两性(酸/碱)",freq:"高频",difficulty:4,type:"选择",error:"Al₂O₃/Al(OH)₃两性",page:"p.96"},
      {id:"HX-17",chapter:"第四章 原子结构",section:"4.1 原子",name:"质量数A=Z+N",freq:"高频",difficulty:2,type:"填空",error:"中子数=A-质子数",page:"p.106"},
      {id:"HX-18",chapter:"第四章 周期律",section:"4.2 周期律",name:"原子半径/金属性递变",freq:"高频",difficulty:3,type:"选择",error:"同周期左→右半径减金属性减",page:"p.113"},
      {id:"HX-19",chapter:"第四章 周期律",section:"4.3 周期表",name:"位-构-性关系",freq:"高频",difficulty:4,type:"选择/填空",error:"族序数=最外层电子数(主族)",page:"p.119"},
      {id:"HX-20",chapter:"第四章 化学键",section:"4.4 化学键",name:"离子键/共价键判断",freq:"高频",difficulty:3,type:"选择",error:"仅非金属间可能共价(AlCl3例外)",page:"p.126"},
      {id:"HX-21",chapter:"第四章 化学键",section:"4.5 电子式",name:"电子式书写",freq:"中频",difficulty:3,type:"填空",error:"离子化合物标[ ]与电荷",page:"p.130"}
    ]
  },

  /* ============ 模块3：思维导图 ============ */
  mindmaps: {
    "数学": {
      "第三章 函数概念与性质": {
        l1:[
          {t:"一、函数概念",children:[
            {t:"定义：非空数集上的唯一对应",children:[
              {t:"核心公式：y=f(x)，x∈定义域",tag:"定义",formula:"f: A→B"},
              {t:"三要素：定义域·对应关系·值域"}
            ]},
            {t:"定义域求法",children:[
              {t:"分式：分母≠0"},{t:"偶次根式：被开方数≥0"},
              {t:"复合函数：f(g(x)) 两层约束"}
            ]}
          ]},
          {t:"二、函数性质",children:[
            {t:"单调性",children:[
              {t:"定义：x1<x2 ⇒ f(x1)<f(x2) 增",formula:"任意x1<x2"},
              {t:"证明步骤：取值→作差→变形→定号→结论"},
              {t:"复合：同增异减"}
            ]},
            {t:"奇偶性",children:[
              {t:"奇函数：f(-x)=-f(x)，图象关于原点对称"},
              {t:"偶函数：f(-x)=f(x)，图象关于y轴对称"},
              {t:"前提：定义域关于原点对称"}
            ]}
          ]},
          {t:"三、基本函数",children:[
            {t:"幂函数 y=x^a：过(1,1)",children:[
              {t:"a>0 增；a<0 减且过(1,1)不过(0,0)"}
            ]},
            {t:"一次/二次/反比例：图象与系数关系"}
          ]}
        ],
        cross:"跨章节关联：函数单调性是第二章'三个二次'图象分析的基石；奇偶性为第五章三角函数奇偶性(正弦奇、余弦偶)作铺垫。"
      },
      "第五章 三角函数": {
        l1:[
          {t:"一、角与度量",children:[
            {t:"任意角：正(逆)/负(顺)/零角"},
            {t:"弧度制：l=|α|·r，π=180°",formula:"180°=π rad"},
            {t:"弧长 s=|α|r，扇形面积 S=½lr"}
          ]},
          {t:"二、三角函数定义",children:[
            {t:"单位圆：sinα=y, cosα=x, tanα=y/x"},
            {t:"三角函数线：正弦线/余弦线/正切线"},
            {t:"符号：一全正二正弦三切四余弦"}
          ]},
          {t:"三、诱导公式",children:[
            {t:"口诀：奇变偶不变，符号看象限"},
            {t:"终边对称：关于x轴/y轴/原点"}
          ]},
          {t:"四、图象与性质",children:[
            {t:"y=sinx：T=2π，对称轴x=kπ+π/2",formula:"T=2π/|ω|"},
            {t:"y=Asin(ωx+φ)：A振幅,ω频率,φ初相"},
            {t:"变换：先平移后伸缩 vs 先伸缩后平移"}
          ]}
        ],
        cross:"跨章节关联：弧度制是第四章指数函数指数取实数值的桥梁；三角函数奇偶性与第三章函数性质直接对应。"
      }
    },
    "物理": {
      "第一章 运动的描述": {
        l1:[
          {t:"一、运动的描述基础",children:[
            {t:"质点：忽略大小形状，看大小可否忽略"},
            {t:"参考系：选不同结果可能不同"},
            {t:"坐标系：直线/平面/空间定位"}
          ]},
          {t:"二、时间 与 位移",children:[
            {t:"时间(间隔) vs 时刻(瞬时点)"},
            {t:"位移：矢量，初→末有向线段",formula:"Δx = x₂ - x₁"},
            {t:"路程：标量，轨迹长度"}
          ]},
          {t:"三、速度",children:[
            {t:"平均速度：位移/时间"},
            {t:"瞬时速度：极限，方向为运动方向"},
            {t:"速率：瞬时速度大小(标量)"}
          ]},
          {t:"四、加速度",children:[
            {t:"定义：a=Δv/Δt",formula:"a = (v-v₀)/t"},
            {t:"方向：与Δv同向，与v无必然关系"},
            {t:"加速/减速：a与v同向/反向"}
          ]}
        ],
        cross:"跨章节关联：加速度是第四章牛顿第二定律F=ma的核心物理量；本章速度为第二章匀变速直线运动提供v-t图象基础。"
      },
      "第三章 相互作用——力": {
        l1:[
          {t:"一、重力",children:[
            {t:"G=mg，g≈9.8m/s²"},
            {t:"重心：等效作用点，不一定在物体上"}
          ]},
          {t:"二、弹力",children:[
            {t:"产生：接触+弹性形变"},
            {t:"方向：垂直接触面/沿绳收缩"},
            {t:"胡克定律：F=kx",formula:"F = kx"}
          ]},
          {t:"三、摩擦力",children:[
            {t:"静摩擦：0≤f≤fmax，随外力变"},
            {t:"滑动摩擦：f=μN",formula:"f = μN"},
            {t:"方向：与相对运动(趋势)相反"}
          ]},
          {t:"四、力的合成与分解",children:[
            {t:"平行四边形定则(矢量加法)"},
            {t:"合力范围：|F1-F2|≤F≤F1+F2"},
            {t:"正交分解法：Fx,Fy分量求和"}
          ]}
        ],
        cross:"跨章节关联：力的合成分解是第四章共点力平衡与牛顿第二定律受力分析的前置工具；摩擦力方向判断贯穿运动学。"
      }
    },
    "化学": {
      "第一章 物质及其变化": {
        l1:[
          {t:"一、物质的分类",children:[
            {t:"树状分类：混合物/纯净物→单质/化合物"},
            {t:"交叉分类：按不同标准多重归属"},
            {t:"胶体：1-100nm，丁达尔效应"}
          ]},
          {t:"二、离子反应",children:[
            {t:"电解质：水溶液或熔融导电的化合物"},
            {t:"离子方程式：写→拆→删→查"},
            {t:"拆写规则：可溶强电解质拆，其余不拆"}
          ]},
          {t:"三、氧化还原反应",children:[
            {t:"本质：电子转移；特征：化合价升降"},
            {t:"口诀：升失氧(还原剂)，降得还(氧化剂)"},
            {t:"双线桥：标价→画桥→注得失"}
          ]}
        ],
        cross:"跨章节关联：氧化还原价态变化是第二章钠/氯、第三章铁铝反应方程式的书写依据；离子反应贯穿全部水溶液反应。"
      },
      "第四章 物质结构 元素周期律": {
        l1:[
          {t:"一、原子结构",children:[
            {t:"质量数 A=Z+N",formula:"A = Z + N"},
            {t:"核素/同位素：质子同中子异"},
            {t:"原子核外电子排布规律"}
          ]},
          {t:"二、元素周期律",children:[
            {t:"同周期：左→右原子半径减小、金属性减弱"},
            {t:"同主族：上→下原子半径增大、金属性增强"},
            {t:"非金属性：最高价含氧酸酸性比较"}
          ]},
          {t:"三、元素周期表",children:[
            {t:"周期(7)×族(18)，主族族序=最外层电子数"},
            {t:"位-构-性：位置↔结构↔性质"},
            {t:"分区：s/p/d/ds/f区"}
          ]},
          {t:"四、化学键",children:[
            {t:"离子键：活泼金属+非金属(失得电子)"},
            {t:"共价键：非金属间共用电子对"},
            {t:"电子式：离子标[ ]与电荷"}
          ]}
        ],
        cross:"跨章节关联：周期律的金属性递变解释第一章钠比铝活泼、第三章铁铝性质差异；化学键类型决定化合物熔沸点与导电性。"
      }
    },
    "语文": {
      "第三单元 古代诗歌": {
        l1:[
          {t:"一、魏晋南北朝诗歌",children:[
            {t:"曹操《短歌行》：建安风骨，求贤主题",children:[{t:"名句：青青子衿，悠悠我心"}]},
            {t:"陶渊明《归园田居》：田园闲适，白描"}
          ]},
          {t:"二、唐代诗歌",children:[
            {t:"李白《梦游天姥吟留别》：浪漫主义，留别",children:[{t:"名句：安能摧眉折腰事权贵"}]},
            {t:"杜甫《登高》：沉郁顿挫，八悲",children:[{t:"名句：无边落木萧萧下"}]},
            {t:"白居易《琵琶行》：同病相怜，音乐描写"}
          ]},
          {t:"三、宋词",children:[
            {t:"苏轼《念奴娇》：豪放，旷达"},
            {t:"辛弃疾《永遇乐》：用典抒怀"},
            {t:"李清照《声声慢》：婉约，叠字愁情"}
          ]}
        ],
        cross:"跨章节关联：与第六单元《劝学》《师说》一道构成'古诗文默写+文言文阅读'主线；与第八单元词语积累共同支撑语言运用题。"
      }
    },
    "英语": {
      "Unit 3 Sports and Fitness": {
        l1:[
          {t:"一、核心词汇",children:[
            {t:"athlete / champion / honor"},
            {t:"determination / strength / failure"},
            {t:"prefer A to B；be determined to do"}
          ]},
          {t:"二、语法",children:[
            {t:"反身代词：myself/yourself…"},
            {t:"动词短语：work out, give up, cheer up"}
          ]},
          {t:"三、阅读与写作",children:[
            {t:"体育人物传记阅读：抓成就与品质"},
            {t:"演讲稿结构：问候→主题→事例→呼吁"}
          ]}
        ],
        cross:"跨章节关联：定语从句(Unit1/2/4/5)是描写人物与事件时的高频句式；应用文书信格式(跨单元)用于运动会邀请信写作。"
      }
    }
  },

  /* ============ 模块4：模拟训练题库 ============ */
  questions: {
    "数学": [
      {id:"MSX1",type:"选择",difficulty:2,chapter:"第一章 集合",point:"SX-02",stem:"已知集合 A={1,2}, B={2,3}，则 A∪B =",options:["{1,2}","{2,3}","{1,2,3}","{1,3}"],answer:2,analysis:"并集取两集合所有元素，去重得 {1,2,3}。"},
      {id:"MSX2",type:"选择",difficulty:3,chapter:"第一章 逻辑",point:"SX-04",stem:"'x>2' 是 'x>1' 的什么条件？",options:["充分不必要","必要不充分","充要","既不充分也不必要"],answer:0,analysis:"x>2⇒x>1 成立，反之不成立，故为充分不必要条件。"},
      {id:"MSX3",type:"填空",difficulty:3,chapter:"第二章 不等式",point:"SX-07",stem:"若 a>0,b>0 且 a+b=4，则 ab 的最大值为____。",options:[],answer:"4",analysis:"由基本不等式 ab≤((a+b)/2)²=4，当且仅当 a=b=2 取等。"},
      {id:"MSX4",type:"选择",difficulty:3,chapter:"第三章 函数",point:"SX-09",stem:"函数 f(x)=√(x-1)+1/(x-2) 的定义域是",options:["[1,+∞)","(1,+∞)","[1,2)∪(2,+∞)","(2,+∞)"],answer:2,analysis:"根式 x-1≥0→x≥1；分母 x-2≠0→x≠2。取交集得 [1,2)∪(2,+∞)。"},
      {id:"MSX5",type:"选择",difficulty:3,chapter:"第三章 函数",point:"SX-12",stem:"下列函数中为偶函数的是",options:["y=x³","y=x²+1","y=1/x","y=x+1"],answer:1,analysis:"f(-x)=(-x)²+1=x²+1=f(x)，且定义域R对称，故为偶函数。"},
      {id:"MSX6",type:"解答",difficulty:4,chapter:"第三章 函数",point:"SX-11",stem:"用定义证明 f(x)=x² 在 (0,+∞) 上单调递增。",options:[],answer:"证明：任取0<x₁<x₂，f(x₁)-f(x₂)=x₁²-x₂²=(x₁-x₂)(x₁+x₂)。因x₁<x₂故x₁-x₂<0；又x₁,x₂>0故x₁+x₂>0，所以差<0，即f(x₁)<f(x₂)，得证。",analysis:"作差后因式分解是关键；由x₁,x₂>0保证符号可定。"},
      {id:"MSX7",type:"填空",difficulty:3,chapter:"第四章 对数",point:"SX-15",stem:"log₂8 + log₂(1/4) = ____。",options:[],answer:"1",analysis:"log₂8=3，log₂(1/4)=log₂(2⁻²)=-2，和为1。"},
      {id:"MSX8",type:"选择",difficulty:2,chapter:"第五章 三角函数",point:"SX-18",stem:"300° 化为弧度是",options:["5π/3","4π/3","3π/2","7π/6"],answer:0,analysis:"300°×π/180°=5π/3。"},
      {id:"MSX9",type:"填空",difficulty:3,chapter:"第五章 三角函数",point:"SX-19",stem:"sin(13π/6) = ____。",options:[],answer:"1/2",analysis:"13π/6=2π+π/6，由周期性 sin(13π/6)=sin(π/6)=1/2。"},
      {id:"MSX10",type:"选择",difficulty:4,chapter:"第五章 三角函数",point:"SX-22",stem:"将 y=sin x 图象上所有点向左平移 π/3 个单位，所得函数为",options:["y=sin(x+π/3)","y=sin(x-π/3)","y=sin(x+π/6)","y=sin(2x+π/3)"],answer:0,analysis:"左加右减：向左平移π/3得 y=sin(x+π/3)。"},
      {id:"MSX11",type:"填空",difficulty:3,chapter:"第二章 不等式",point:"SX-08",stem:"不等式 x²-3x+2<0 的解集为____。",options:[],answer:"(1,2)",analysis:"方程根x=1,2，开口向上，小于0取两根之间(1,2)。"},
      {id:"MSX12",type:"选择",difficulty:3,chapter:"第四章 指数",point:"SX-16",stem:"函数 y=aˣ (0<a<1) 的图象特征是",options:["过(0,1)单调递减","过(0,1)单调递增","过(1,0)单调递减","过(1,0)单调递增"],answer:0,analysis:"指数函数恒过(0,1)；0<a<1时单调递减。"},
      {id:"MSX13",type:"解答",difficulty:4,chapter:"第五章 三角函数",point:"SX-23",stem:"已知函数 f(x)=A sin(ωx+φ) (A>0,ω>0) 的最大值为2，最小正周期为π，且 f(0)=1，求 A,ω,φ（取|φ|<π/2）。",options:[],answer:"A=2；T=2π/ω=π→ω=2；f(0)=2sinφ=1→sinφ=1/2，由|φ|<π/2得φ=π/6。故 f(x)=2sin(2x+π/6)。",analysis:"由最值定A，由周期定ω，由初值定φ；注意φ范围约束。"},
      {id:"MSX14",type:"选择",difficulty:2,chapter:"第三章 函数",point:"SX-10",stem:"下列各组函数中表示同一函数的是",options:["y=x 与 y=³√x³","y=x 与 y=x²/x","y=|x| 与 y=√x²(x>0)","y=1 与 y=x⁰"],answer:0,analysis:"y=³√x³=x，定义域均为R，相同；B中后者x≠0；C定义域不同；D后者x≠0。"},
      {id:"MSX15",type:"选择",difficulty:3,chapter:"第一章 集合",point:"SX-03",stem:"全集 U={1,2,3,4,5}, A={1,3}, 则 ∁ᵤA =",options:["{2,4,5}","{1,3}","∅","{1,2,3,4,5}"],answer:0,analysis:"补集为全集中不属于A的元素：{2,4,5}。"},
      {id:"MSX16",type:"填空",difficulty:3,chapter:"第四章 对数",point:"SX-15",stem:"若 lg x = 2，则 x = ____。",options:[],answer:"100",analysis:"lg x=2 即 log₁₀x=2，x=10²=100。"},
      {id:"MSX17",type:"选择",difficulty:3,chapter:"第三章 函数",point:"SX-13",stem:"幂函数 y=x^(-1) 的图象过点",options:["(0,0)","(1,1)","(-1,-1)且(1,1)","(1,0)"],answer:2,analysis:"y=1/x过(1,1)与(-1,-1)，不过(0,0)。"},
      {id:"MSX18",type:"解答",difficulty:4,chapter:"第二章 不等式",point:"SX-07",stem:"用长为20m的篱笆围矩形菜地，怎样围面积最大？最大面积是多少？",options:[],answer:"设长x宽y，2(x+y)=20→x+y=10。面积S=xy≤((x+y)/2)²=25，当且仅当x=y=5时取等。故围边长为5m的正方形，最大面积25m²。",analysis:"基本不等式'和定积最大'模型；篱笆总长对应周长。"}
    ],
    "物理": [
      {id:"MWL1",type:"选择",difficulty:2,chapter:"第一章 运动描述",point:"WL-02",stem:"下列关于位移与路程的说法正确的是",options:["位移是标量","路程就是位移的大小","位移是矢量，方向由初位置指向末位置","直线运动中位移大小一定等于路程"],answer:2,analysis:"位移是矢量，路程为标量；仅单向直线运动时二者大小相等。"},
      {id:"MWL2",type:"选择",difficulty:3,chapter:"第一章 运动描述",point:"WL-04",stem:"物体加速度方向与速度方向相反时，物体",options:["一定加速","一定减速","可能加速可能减速","静止"],answer:1,analysis:"a与v反向时做减速运动。"},
      {id:"MWL3",type:"计算",difficulty:3,chapter:"第二章 匀变速",point:"WL-06",stem:"汽车以 v₀=10m/s 匀加速，a=2m/s²，求 3s 末速度。",options:[],answer:"16 m/s",analysis:"v=v₀+at=10+2×3=16m/s。"},
      {id:"MWL4",type:"计算",difficulty:3,chapter:"第二章 匀变速",point:"WL-07",stem:"上题中 3s 内位移 x = ?",options:[],answer:"39 m",analysis:"x=v₀t+½at²=10×3+½×2×9=30+9=39m。"},
      {id:"MWL5",type:"选择",difficulty:3,chapter:"第二章 匀变速",point:"WL-05",stem:"v-t 图象中，图象与时间轴所围面积表示",options:["加速度","速度","位移","路程"],answer:2,analysis:"v-t图面积=位移；斜率=加速度。"},
      {id:"MWL6",type:"计算",difficulty:4,chapter:"第二章 匀变速",point:"WL-08",stem:"物体做匀加速，通过连续相等位移s，初速0，求通过第2段s的末速度（已知过第1段末速v₁）。",options:[],answer:"√2 · v₁",analysis:"由v²=2ax，过第1段：v₁²=2as；过第2段末：v₂²=2a·2s=2v₁²，故v₂=√2 v₁。"},
      {id:"MWL7",type:"选择",difficulty:3,chapter:"第三章 相互作用",point:"WL-12",stem:"关于静摩擦力，正确的是",options:["大小恒为μN","方向一定与运动方向相反","随外力增大而增大，有最大值","总是做阻力"],answer:2,analysis:"静摩擦随外力在0~fmax间变化，有最大值。"},
      {id:"MWL8",type:"计算",difficulty:3,chapter:"第三章 相互作用",point:"WL-11",stem:"弹簧劲度系数 k=200N/m，伸长 x=0.05m，弹力 F=?",options:[],answer:"10 N",analysis:"F=kx=200×0.05=10N，方向指向恢复原长。"},
      {id:"MWL9",type:"选择",difficulty:2,chapter:"第三章 相互作用",point:"WL-10",stem:"关于重心，错误的是",options:["质量均匀分布的规则物体重心在几何中心","重心不一定在物体上","可用悬挂法测重心","重心是物体最重的一点"],answer:3,analysis:"重心是等效作用点，并非'最重的一点'。"},
      {id:"MWL10",type:"计算",difficulty:4,chapter:"第三章 相互作用",point:"WL-13",stem:"两力 F₁=3N,F₂=4N 互成90°，合力大小?",options:[],answer:"5 N",analysis:"F=√(3²+4²)=5N。"},
      {id:"MWL11",type:"选择",difficulty:3,chapter:"第四章 牛顿定律",point:"WL-16",stem:"根据牛顿第二定律，下列说法正确的是",options:["力是维持运动的原因","a与F同向，且与质量成反比","质量大的物体惯性小","合力为零时加速度最大"],answer:1,analysis:"F=ma，a方向与合外力一致，a∝F/m。"},
      {id:"MWL12",type:"选择",difficulty:3,chapter:"第四章 牛顿定律",point:"WL-19",stem:"电梯加速上升时，人对地板的压力",options:["小于重力(失重)","等于重力","大于重力(超重)","为零"],answer:2,analysis:"加速度向上→超重，视重G'=m(g+a)>mg。"},
      {id:"MWL13",type:"计算",difficulty:4,chapter:"第四章 牛顿定律",point:"WL-20",stem:"质量 m=2kg 物体受水平力 F=10N，摩擦 f=2N，求加速度。",options:[],answer:"4 m/s²",analysis:"合外力F合=10-2=8N，a=F合/m=8/2=4m/s²。"},
      {id:"MWL14",type:"选择",difficulty:2,chapter:"第四章 牛顿定律",point:"WL-15",stem:"物体的惯性大小取决于",options:["速度","加速度","质量","受力"],answer:2,analysis:"惯性是物体固有属性，仅由质量决定。"},
      {id:"MWL15",type:"选择",difficulty:3,chapter:"第一章 运动描述",point:"WL-03",stem:"做匀速圆周运动的物体，其",options:["速度不变","速率不变","加速度为零","合力为零"],answer:1,analysis:"匀速圆周运动速率(速度大小)不变，速度方向时刻变，有向心加速度。"}
    ],
    "化学": [
      {id:"MHX1",type:"选择",difficulty:3,chapter:"第一章 离子反应",point:"HX-04",stem:"下列离子方程式书写正确的是",options:["Cu+2Ag⁺=Cu²⁺+2Ag","Na+HCl=NaCl+H₂↑","Fe+Fe³⁺=2Fe²⁺","H⁺+OH⁻=H₂O(代表所有酸碱中和)"],answer:0,analysis:"A符合拆写与守恒；B应写离子式；C电荷不守恒(应为2Fe³⁺+Fe=3Fe²⁺)；D仅代表强酸强碱可溶盐。"},
      {id:"MHX2",type:"选择",difficulty:3,chapter:"第一章 氧化还原",point:"HX-05",stem:"在反应 2Na+Cl₂=2NaCl 中，Na 发生的反应是",options:["被还原(氧化剂)","被氧化(还原剂)","既氧化又还原","不变化合价"],answer:1,analysis:"Na化合价0→+1升高失电子，被氧化，作还原剂。"},
      {id:"MHX3",type:"选择",difficulty:2,chapter:"第二章 钠",point:"HX-07",stem:"金属钠应保存在",options:["水中","煤油中","空气中","酒精中"],answer:1,analysis:"钠易与水和氧气反应，密度大于煤油，故存于煤油隔绝空气。"},
      {id:"MHX4",type:"填空",difficulty:3,chapter:"第二章 物质的量",point:"HX-11",stem:"标准状况下 11.2L CO₂ 的物质的量 n = ____ mol。",options:[],answer:"0.5",analysis:"标况Vm=22.4L/mol，n=V/Vm=11.2/22.4=0.5mol。"},
      {id:"MHX5",type:"选择",difficulty:3,chapter:"第二章 碳酸钠",point:"HX-08",stem:"区分 Na₂CO₃ 与 NaHCO₃ 固体，可行的是",options:["加热，产生气体的是NaHCO₃","加水均溶无法区分","加CaCl₂两者均沉淀","看颜色"],answer:0,analysis:"2NaHCO₃△=Na₂CO₃+CO₂↑+H₂O，Na₂CO₃热稳定；加CaCl₂两者都沉淀(后者生成CaCO₃?实际NaHCO₃与CaCl₂不沉淀)。"},
      {id:"MHX6",type:"选择",difficulty:3,chapter:"第二章 氯",point:"HX-09",stem:"下列关于 Cl₂ 的说法错误的是",options:["黄绿色气体","与H₂光照爆炸","与水反应生成HCl和HClO","液氯是混合物"],answer:3,analysis:"液氯是Cl₂的液态，属于纯净物(单质)，非混合物。"},
      {id:"MHX7",type:"选择",difficulty:3,chapter:"第三章 铁",point:"HX-15",stem:"检验 Fe³⁺ 常用的试剂是",options:["KSCN溶液","NaOH(无现象)","石蕊","酚酞"],answer:0,analysis:"Fe³⁺+SCN⁻→[Fe(SCN)]²⁺血红色，灵敏特征反应。"},
      {id:"MHX8",type:"填空",difficulty:3,chapter:"第二章 物质的量",point:"HX-12",stem:"将 0.1mol NaCl 配成 200mL 溶液，浓度 c = ____ mol/L。",options:[],answer:"0.5",analysis:"c=n/V=0.1/0.2=0.5mol/L。"},
      {id:"MHX9",type:"选择",difficulty:4,chapter:"第三章 铝",point:"HX-16",stem:"下列物质不具有两性的是",options:["Al","Al₂O₃","Al(OH)₃","NaOH"],answer:3,analysis:"Al、Al₂O₃、Al(OH)₃均既能与酸又能与碱反应(两性)；NaOH是碱。"},
      {id:"MHX10",type:"选择",difficulty:2,chapter:"第一章 物质分类",point:"HX-02",stem:"鉴别胶体与溶液常用",options:["过滤","丁达尔效应","蒸发","闻气味"],answer:1,analysis:"胶体有丁达尔效应，溶液没有。"},
      {id:"MHX11",type:"填空",difficulty:2,chapter:"第四章 原子结构",point:"HX-17",stem:"¹⁶O 中质子数 Z=8，则中子数 N = ____。",options:[],answer:"8",analysis:"质量数A=16，N=A-Z=16-8=8。"},
      {id:"MHX12",type:"选择",difficulty:3,chapter:"第四章 周期律",point:"HX-18",stem:"同周期主族元素从左到右，原子半径",options:["增大","减小","不变","先增后减"],answer:1,analysis:"核电荷增加、电子层数不变，原子半径递减。"},
      {id:"MHX13",type:"选择",difficulty:4,chapter:"第四章 周期表",point:"HX-19",stem:"主族元素在周期表中的位置取决于",options:["相对原子质量","电子层数与最外层电子数","中子数","质量数"],answer:1,analysis:"周期=电子层数，主族族序=最外层电子数。"},
      {id:"MHX14",type:"选择",difficulty:3,chapter:"第一章 离子反应",point:"HX-03",stem:"下列属弱电解质的是",options:["NaCl","HCl","CH₃COOH(醋酸)","NaOH"],answer:2,analysis:"弱酸弱碱是弱电解质；醋酸为弱酸，部分电离。"},
      {id:"MHX15",type:"选择",difficulty:3,chapter:"第三章 铁",point:"HX-14",stem:"铁在氯气中燃烧的产物是",options:["FeCl₂","FeCl₃","Fe₂O₃","FeS"],answer:1,analysis:"Cl₂氧化性强，将Fe氧化为+3价生成FeCl₃。"}
    ],
    "语文": [
      {id:"MYW1",type:"选择",difficulty:3,chapter:"第三单元 古代诗歌",point:"YW-06",stem:"《短歌行》的作者是",options:["陶渊明","曹操","李白","杜甫"],answer:1,analysis:"《短歌行》为曹操所作，属建安文学，抒发求贤建业之志。"},
      {id:"MYW2",type:"选择",difficulty:3,chapter:"第三单元 古代诗歌",point:"YW-07",stem:"'安能摧眉折腰事权贵，使我不得开心颜'出自",options:["《登高》","《梦游天姥吟留别》","《琵琶行》","《念奴娇》"],answer:1,analysis:"李白《梦游天姥吟留别》的卒章显志句，体现蔑视权贵。"},
      {id:"MYW3",type:"填空",difficulty:3,chapter:"第六单元 思辨性阅读",point:"YW-13",stem:"《劝学》名句：'君子博学而日参省乎己，____。'",options:[],answer:"则知明而行无过矣",analysis:"荀子《劝学》，强调学习与人省察。"},
      {id:"MYW4",type:"选择",difficulty:4,chapter:"第六单元 思辨性阅读",point:"YW-15",stem:"《拿来主义》中'大宅子'比喻",options:["外国文化","中国传统文化","文化遗产(中外遗产)","封建礼教"],answer:2,analysis:"'大宅子'喻指中外文化遗产，'鱼翅''鸦片''烟枪'分别喻不同类型内容。"},
      {id:"MYW5",type:"选择",difficulty:3,chapter:"第三单元 古代诗歌",point:"YW-09",stem:"下列属于婉约派词人的是",options:["苏轼","辛弃疾","李清照","毛泽东"],answer:2,analysis:"李清照为婉约派代表；苏、辛为豪放派。"},
      {id:"MYW6",type:"选择",difficulty:3,chapter:"第七单元 散文",point:"YW-16",stem:"《故都的秋》的感情基调是",options:["欢快明朗","清静悲凉","愤怒控诉","激昂奋进"],answer:1,analysis:"郁达夫以'清、静、悲凉'概括故都秋味，蕴含家国之忧。"},
      {id:"MYW7",type:"填空",difficulty:4,chapter:"第七单元 散文",point:"YW-18",stem:"《赤壁赋》'清风徐来，____。'",options:[],answer:"水波不兴",analysis:"苏轼《赤壁赋》开篇名句。"},
      {id:"MYW8",type:"选择",difficulty:3,chapter:"第五单元 整本书阅读",point:"YW-12",stem:"《乡土中国》中'差序格局'指",options:["团体格局如柴捆","以己为中心像石子涟漪","固定阶级","契约社会"],answer:1,analysis:"费孝通以水面波纹比喻中国乡土社会关系——以己为中心、亲疏有别。"},
      {id:"MYW9",type:"选择",difficulty:2,chapter:"第一单元 现代诗歌",point:"YW-03",stem:"《百合花》的主要表现手法是",options:["宏大叙事","细节描写(如新媳妇缝衣)","议论说理","神话隐喻"],answer:1,analysis:"茹志鹃以'百合花被子''缝衣'等细节刻画人物，含蓄动人。"},
      {id:"MYW10",type:"填空",difficulty:2,chapter:"古诗词诵读",point:"YW-21",stem:"《诗经·静女》'静女其姝，____。'",options:[],answer:"俟我于城隅",analysis:"《诗经》爱情诗名句。"},
      {id:"MYW11",type:"选择",difficulty:3,chapter:"第三单元 古代诗歌",point:"YW-08",stem:"《琵琶行》'同是天涯沦落人'中'沦落'主要指",options:["同遭贬谪漂泊","同为商人之妇","同爱音乐","同住浔阳"],answer:0,analysis:"白居易与琵琶女同感'谪居卧病浔阳城'的沦落之悲。"},
      {id:"MYW12",type:"选择",difficulty:3,chapter:"第二单元 劳动",point:"YW-05",stem:"《以工匠精神雕琢时代品质》的体裁是",options:["人物通讯","新闻评论","小说","散文"],answer:1,analysis:"该文为新闻评论，论述工匠精神的时代价值。"}
    ],
    "英语": [
      {id:"MYY1",type:"选择",difficulty:2,chapter:"Unit 1 Teenage Life",point:"YY-02",stem:"I ____ reading to playing computer games.",options:["prefer","like","enjoy","hate"],answer:0,analysis:"prefer A to B 为固定搭配，意为'比起B更喜欢A'。"},
      {id:"MYY2",type:"选择",difficulty:3,chapter:"Unit 1 Teenage Life",point:"YY-03",stem:"He is the boy ____ won the first prize.",options:["which","who","whom","whose"],answer:1,analysis:"先行词the boy指人，在从句中作主语，用who/that。"},
      {id:"MYY3",type:"选择",difficulty:3,chapter:"Unit 2 Travelling",point:"YY-05",stem:"Look! The bus ____. We must hurry.",options:["comes","is coming","came","has come"],answer:1,analysis:"位移动词用现在进行时表将来，指'车要来了'。"},
      {id:"MYY4",type:"选择",difficulty:2,chapter:"Unit 3 Sports",point:"YY-06",stem:"It is a great ____ to be here.",options:["honor","honest","hour","host"],answer:0,analysis:"honor 此处为不可数名词'荣幸'，it is an honor。"},
      {id:"MYY5",type:"选择",difficulty:3,chapter:"Unit 4 Disasters",point:"YY-10",stem:"This is the place ____ the accident happened.",options:["which","that","where","when"],answer:2,analysis:"先行词place表地点，从句缺状语，用where。"},
      {id:"MYY6",type:"选择",difficulty:4,chapter:"Unit 5 Languages",point:"YY-13",stem:"This is the book ____ I'm very interested.",options:["which","that","in which","/"],answer:2,analysis:"be interested in 固定搭配，介词in提前，用in which(=where语义)。"},
      {id:"MYY7",type:"选择",difficulty:2,chapter:"Unit 3 Sports",point:"YY-07",stem:"She taught ____ how to swim.",options:["her","she","hers","herself"],answer:3,analysis:"teach oneself 自学，反身代词与主语she一致用herself。"},
      {id:"MYY8",type:"选择",difficulty:3,chapter:"跨单元",point:"YY-14",stem:"阅读推断题的最优策略是",options:["选原文原词","依据上下文合理推断","凭直觉","忽略细节"],answer:1,analysis:"推断题需基于文本合理推导，原文原词常为干扰。"},
      {id:"MYY9",type:"选择",difficulty:2,chapter:"Welcome Unit",point:"YY-01",stem:"—Nice to meet you. —____",options:["Me too.","Nice to meet you too.","Thank you.","Sorry."],answer:1,analysis:"初次见面回应 Nice to meet you too."},
      {id:"MYY10",type:"选择",difficulty:3,chapter:"Unit 4 Disasters",point:"YY-11",stem:"新闻报道通常采用的结构是",options:["循序渐进","倒金字塔(重要信息在前)","纯时间顺序","环形结构"],answer:1,analysis:"新闻倒金字塔结构：最重要事实置于导语。"},
      {id:"MYY11",type:"选择",difficulty:3,chapter:"Unit 2 Travelling",point:"YY-04",stem:"You'd better ____ a room in advance.",options:["book","borrow","buy","bring"],answer:0,analysis:"book 作动词意为'预订'(房间/票)。"},
      {id:"MYY12",type:"选择",difficulty:3,chapter:"Unit 5 Languages",point:"YY-12",stem:"I didn't ____ her at first because she changed a lot.",options:["request","recognize","record","reach"],answer:1,analysis:"recognize 认出；句意'起初没认出她'。"}
    ]
  },

  /* ============ 模块5：5年真题(高一范围，全国乙卷) ============ */
  pastPapers: {
    "数学": [
      {year:2023,volume:"全国乙卷",type:"选择",stem:"已知集合 A={x|x²-x-2<0}，B={-1,0,1}，则 A∩B=",options:["{-1,0}","{0,1}","{-1,0,1}","∅"],answer:1,point:"集合运算",chapter:"第一章 集合",analysis:"解x²-x-2<0得-1<x<2，故A=(-1,2)，与B交集为{0,1}。高频考点，体现集合与一元二次不等式结合。"},
      {year:2022,volume:"全国乙卷",type:"填空",stem:"若 2ᵃ=5ᵇ=10，则 1/a + 1/b = ____。",options:[],answer:"1",point:"指数对数互化",chapter:"第四章 指数与对数",analysis:"由2ᵃ=10得a=log₂10，1/a=lg2；同理1/b=lg5，和=lg2+lg5=lg10=1。考查指对数互化与换底。"},
      {year:2021,volume:"全国乙卷",type:"选择",stem:"函数 f(x)=sin(x+π/3) 的对称轴方程为",options:["x=kπ","x=kπ+π/6","x=kπ+π/3","x=kπ-π/6"],answer:1,analysis:"令x+π/3=kπ+π/2→x=kπ+π/6，k∈Z。考查三角函数对称性。"},
      {year:2024,volume:"全国甲卷",type:"选择",stem:"已知 a=log₂0.3, b=2^0.3, c=0.3²，则",options:["a<b<c","a<c<b","c<a<b","b<c<a"],answer:1,analysis:"a<0(因0.3<1)，0<c=0.09<1，b>1，故a<c<b。考查指数对数函数单调性。"},
      {year:2020,volume:"全国Ⅱ卷",type:"填空",stem:"若 f(x)=x³+ax 为奇函数且 f(1)=2，则 a=____。",options:[],answer:"1",point:"奇偶性",chapter:"第三章 函数",analysis:"奇函数已满足；f(1)=1+a=2→a=1。"},
      {year:2019,volume:"全国Ⅱ卷",type:"选择",stem:"不等式 (x-1)(x-2)<0 的解集为",options:["(-∞,1)","(2,+∞)","(1,2)","R"],answer:2,analysis:"两根1,2，开口向上取中间(1,2)。属三个二次基础。"}
    ],
    "物理": [
      {year:2023,volume:"全国乙卷",type:"选择",stem:"一物体做匀变速直线运动，某段时间内的平均速度等于",options:["初速度","末速度","初末速度平均值","位移/时间(定义)"],answer:3,analysis:"平均速度定义即位移/时间；仅匀变速时等于初末速度算术平均。考查平均速度概念。"},
      {year:2022,volume:"全国乙卷",type:"计算",stem:"一物体从静止开始以 a=2m/s² 加速，求第3s内的位移。",options:[],answer:"5 m",point:"匀变速位移",chapter:"第二章 匀变速",analysis:"前3s位移x₃=½×2×9=9m；前2s x₂=½×2×4=4m；第3s内=9-4=5m。"},
      {year:2021,volume:"全国乙卷",type:"选择",stem:"关于惯性，正确的是",options:["速度越大惯性越大","质量越大惯性越大","受力越大惯性越大","加速度越大惯性越大"],answer:1,analysis:"惯性只由质量决定，与运动状态无关。"},
      {year:2020,volume:"全国Ⅱ卷",type:"选择",stem:"两个共点力大小分别为3N和4N，其合力不可能是",options:["1N","5N","7N","8N"],answer:3,analysis:"合力范围|F1-F2|~F1+F2即1N~7N，8N超出，不可能。"},
      {year:2019,volume:"全国Ⅱ卷",type:"选择",stem:"电梯匀速上升时，人所受支持力与重力的关系是",options:["支持力大于重力","支持力等于重力","支持力小于重力","无法判断"],answer:1,analysis:"匀速→合力为零→支持力=重力。非超重失重情形。"},
      {year:2024,volume:"全国甲卷",type:"计算",stem:"质量2kg物体受水平推力F=10N，摩擦f=4N，求加速度。",options:[],answer:"3 m/s²",point:"牛顿第二定律",chapter:"第四章 牛顿定律",analysis:"F合=10-4=6N，a=6/2=3m/s²。"}
    ],
    "化学": [
      {year:2023,volume:"全国乙卷",type:"选择",stem:"下列物质属于电解质的是",options:["Cu","NaCl溶液","熔融NaCl","蔗糖"],answer:2,analysis:"电解质须为化合物且在熔融或水溶液导电；熔融NaCl是化合物且导电，属电解质。Cu是单质，溶液是混合物，蔗糖非电解质。"},
      {year:2022,volume:"全国乙卷",type:"选择",stem:"在反应 Cl₂+H₂O=HCl+HClO 中，HClO 中 Cl 的化合价为",options:["-1","0","+1","+5"],answer:2,analysis:"H为+1、O为-2，则Cl为+1。考查氧化还原化合价判断。"},
      {year:2021,volume:"全国乙卷",type:"填空",stem:"标准状况下 3.36L NH₃ 的物质的量为 ____ mol。",options:[],answer:"0.15",point:"物质的量",chapter:"第二章 物质的量",analysis:"n=3.36/22.4=0.15mol。"},
      {year:2020,volume:"全国Ⅱ卷",type:"选择",stem:"下列变化中化合价不升高的是",options:["Fe→FeCl₃","Na→NaCl","Cl₂→HCl","Cu→CuO"],answer:2,analysis:"Cl₂(0)→HCl中Cl(-1)化合价降低，其余均升高。考查氧化还原。"},
      {year:2019,volume:"全国Ⅱ卷",type:"选择",stem:"同周期元素原子半径从左到右",options:["递增","递减","不变","无规律"],answer:1,analysis:"核电荷增、层数同，半径递减。"}
    ],
    "语文": [
      {year:2023,volume:"全国乙卷",type:"默写",stem:"补写出下列句子中的空缺部分：《劝学》中'故木受绳则直，____。'",options:[],answer:"金就砺则利",point:"《劝学》默写",chapter:"第六单元 思辨性阅读",analysis:"荀子强调学习 corrective 作用，常与'君子博学而日参省乎己'连考。"},
      {year:2022,volume:"全国乙卷",type:"默写",stem:"李白《梦游天姥吟留别》中表现蔑视权贵的句子是'____，使我不得开心颜'。",options:[],answer:"安能摧眉折腰事权贵",point:"《梦游天姥吟留别》",chapter:"第三单元 古代诗歌",analysis:"该句为全诗主旨句，高一必背。"},
      {year:2021,volume:"全国乙卷",type:"选择",stem:"下列关于《琵琶行》的说法，正确的是",options:["白居易字乐天，号香山居士","属豪放词","写于长安","主写山水"],answer:0,analysis:"白居易字乐天号香山居士；《琵琶行》为长篇叙事诗非词。"},
      {year:2020,volume:"全国Ⅱ卷",type:"默写",stem:"《登高》中'无边落木萧萧下，____。'",options:[],answer:"不尽长江滚滚来",point:"《登高》默写",chapter:"第三单元 古代诗歌",analysis:"杜甫七言律诗名句，高一背诵篇目。"},
      {year:2019,volume:"全国Ⅱ卷",type:"选择",stem:"《乡土中国》的作者是",options:["费孝通","钱钟书","鲁迅","茅盾"],answer:0,analysis:"《乡土中国》为费孝通社会学代表作，高一整本书阅读。"}
    ],
    "英语": [
      {year:2023,volume:"全国乙卷",type:"语法填空",stem:"The boy ____ (who/which) is reading enjoys sports.",options:[],answer:"who",point:"定语从句关系代词",chapter:"Unit 1/4",analysis:"先行词the boy指人，从句缺主语，用who/that。"},
      {year:2022,volume:"全国乙卷",type:"语法填空",stem:"This is the school ____ I studied three years ago.",options:[],answer:"where",point:"定语从句关系副词",chapter:"Unit 4",analysis:"先行词school表地点，从句缺状语，用where。"},
      {year:2021,volume:"全国乙卷",type:"选择",stem:"We ____ (are leaving / left) for the match tomorrow morning.",options:[],answer:"are leaving",point:"现在进行时表将来",chapter:"Unit 2",analysis:"位移动词leave可用现在进行时表将来安排。"},
      {year:2020,volume:"全国Ⅱ卷",type:"写作",stem:"假定你是李华，写一封邀请外教参加运动会的信。",options:[],answer:"书信格式：开头Dear..., 正文邀请+时间地点, 结尾Yours, Li Hua",point:"应用文书信",chapter:"跨单元",analysis:"高一常考邀请信，注意书信格式与礼貌用语。"}
    ]
  },

  /* ============ 模块6：名师讲堂 ============ */
  lectures: {
    "数学": [
      {id:"L-SX-1",title:"函数单调性",keyword:"函数单调性/作差法",html:`
<h3>一、课前导入</h3><p>同学们，想象爬山：同样一段路，有人走得越来越快（快变），有人匀速。数学里我们怎么精确描述"函数值是变大还是变小"？这就是单调性。</p>
<h3>二、核心概念讲解</h3><p><b>定义（教材原文）：</b>设函数 f(x) 的定义域为 I，如果对于定义域 I 内某个区间 D 上的任意两个自变量的值 x₁,x₂，当 x₁&lt;x₂ 时，都有 f(x₁)&lt;f(x₂)，那么就说函数 f(x) 在区间 D 上是增函数。</p>
<p><b>关键词拆解：</b>①"任意"——不能只取一对；②"x₁&lt;x₂⇒f(x₁)&lt;f(x₂)"——方向一致才叫增；③"区间 D"——单调性是局部性质。</p>
<p><b>理解误区：</b>误以为"图象上升就是增"可蒙混，但证明题必须回到定义作差。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>证明 f(x)=x² 在 (0,+∞) 上单调递增。</p>
<p><b>【讲解】</b>任取 0&lt;x₁&lt;x₂，作差 f(x₁)-f(x₂)=x₁²-x₂²=(x₁-x₂)(x₁+x₂)。因 x₁&lt;x₂ 故 x₁-x₂&lt;0；又 x₁,x₂&gt;0 故 x₁+x₂&gt;0，所以差&lt;0，即 f(x₁)&lt;f(x₂)，得证。</p>
<h3>四、名师总结</h3><p>核心结论：单调性用"取值→作差→变形→定号→结论"五步证明。记忆口诀："任取两值作差比，因式分得定符号。"下次预告：奇偶性。</p>`},
      {id:"L-SX-2",title:"基本不等式",keyword:"基本不等式/a+b≥2√ab",html:`
<h3>一、课前导入</h3><p>周长一定的矩形，什么形状面积最大？答案藏在一个朴素不等式里。</p>
<h3>二、核心概念讲解</h3><p><b>教材原文：</b>对任意正数 a,b，都有 a+b≥2√ab，当且仅当 a=b 时等号成立。</p>
<p><b>关键词：</b>① a,b&gt;0 是前提，漏了就错；② "一正二定三相等"是使用三步骤。</p>
<p><b>理解误区：</b>常见错把"和定求积最大"与"积定求和最小"搞反。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>已知 x&gt;0，求 y=x+1/x 的最小值。</p>
<p><b>【讲解】</b>由基本不等式 y=x+1/x≥2√(x·1/x)=2，当 x=1/x 即 x=1 时取等，最小值为2。</p>
<h3>四、名师总结</h3><p>口诀："一正二定三相等，和定积最大、积定和最小。"</p>`},
      {id:"L-SX-3",title:"诱导公式",keyword:"诱导公式/奇变偶不变",html:`
<h3>一、课前导入</h3><p>任意角的三角函数怎么算？其实只需把它"变"成锐角——靠的就是诱导公式。</p>
<h3>二、核心概念讲解</h3><p><b>口诀：</b>奇变偶不变，符号看象限。k·(π/2)±α：k奇则函数名变（正弦↔余弦），k偶则不变；符号看把α当锐角时原函数的符号。</p>
<p><b>理解误区：</b>"符号看象限"看的是<b>原角</b>所在象限，不是α本身。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>化简 sin(π-α)。</p>
<p><b>【讲解】</b>π=2·(π/2)，k=2偶→名不变仍为sin；π-α在第二象限，sin为正，故 sin(π-α)=sinα。</p>
<h3>四、名师总结</h3><p>口诀记牢，配合单位圆符号，诱导公式不再背混。</p>`}
    ],
    "物理": [
      {id:"L-WL-1",title:"加速度的理解",keyword:"加速度/速度/减速",html:`
<h3>一、课前导入</h3><p>高速匀速的高铁加速度为零，刚启动的自行车加速度却很大——加速度和速度到底啥关系？</p>
<h3>二、核心概念讲解</h3><p><b>定义（教材）：</b>a=Δv/Δt，是速度变化率，矢量，方向与 Δv 相同。</p>
<p><b>关键词：</b>①加速度描述"变快变慢"，不是"快慢"；②a与v同向→加速，反向→减速，无关→拐弯（如匀速圆周）。</p>
<p><b>理解误区：</b>速度大≠加速度大；加速度减小时速度仍可能增大（只要a,v同向）。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>汽车以10m/s前进，踩刹车后2s减到6m/s，求a并判断运动。</p>
<p><b>【讲解】</b>a=(6-10)/2=-2m/s²，负号表示与初速反向，汽车做减速运动。</p>
<h3>四、名师总结</h3><p>结论：看a方向而非大小。口诀："加速反向定，大小论快慢。"</p>`},
      {id:"L-WL-2",title:"摩擦力",keyword:"静摩擦/滑动摩擦/μN",html:`
<h3>一、课前导入</h3><p>推一个推不动的箱子，它受摩擦力吗？受了多大的摩擦力？</p>
<h3>二、核心概念讲解</h3><p><b>静摩擦：</b>物体有相对运动趋势但仍静止，f 随外力在 0~fmax 间变化，方向与趋势相反。</p>
<p><b>滑动摩擦：</b>f=μN，N为正压力，方向与相对运动相反。</p>
<p><b>理解误区：</b>静摩擦大小≠μN！μN只是最大静摩擦的近似上界。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>用5N推静止箱子不动，摩擦多大？改用12N推动（μN=10N），此时摩擦？</p>
<p><b>【讲解】</b>5N时静摩擦=5N平衡；12N时滑动，f=μN=10N。</p>
<h3>四、名师总结</h3><p>先判动静，再定公式。口诀："静随外变有上限，动摩擦用μN算。"</p>`},
      {id:"L-WL-3",title:"牛顿第二定律",keyword:"F=ma/受力分析",html:`
<h3>一、课前导入</h3><p>同样踩油门，空车比满载提速快——质量和受力如何决定加速度？</p>
<h3>二、核心概念讲解</h3><p><b>定律：</b>F合=ma。a 与合外力同向，与质量成反比；具有瞬时性（力变加速度立即变）。</p>
<p><b>理解误区：</b>公式中的F必须是<b>合外力</b>，且a与F同体同向。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>m=2kg物体受F=10N、f=2N，求a。</p>
<p><b>【讲解】</b>F合=8N，a=8/2=4m/s²。</p>
<h3>四、名师总结</h3><p>受力分析是第一步。口诀："先画受力再求合，F=ma定加速度。"</p>`}
    ],
    "化学": [
      {id:"L-HX-1",title:"氧化还原反应",keyword:"升失氧/双线桥",html:`
<h3>一、课前导入</h3><p>铁生锈、燃料燃烧，这些"变"的本质是什么？——电子的转移。</p>
<h3>二、核心概念讲解</h3><p><b>本质：</b>电子转移；<b>特征：</b>化合价升降。</p>
<p><b>口诀：</b>升失氧（化合价升高、失电子、被氧化、作还原剂）；降得还。</p>
<p><b>理解误区：</b>氧化剂本身被还原，别记反。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>2Na+Cl₂=2NaCl 中，谁被氧化？</p>
<p><b>【讲解】</b>Na:0→+1升高失电子→被氧化，作还原剂。</p>
<h3>四、名师总结</h3><p>双线桥标价、画桥、注得失。口诀："升失氧、降得还，电子转移是本质。"</p>`},
      {id:"L-HX-2",title:"物质的量",keyword:"n/Vm/c=mol/L",html:`
<h3>一、课前导入</h3><p>宏观可称的"克"如何连到微观的"个"？靠物质的量这座桥。</p>
<h3>二、核心概念讲解</h3><p><b>桥梁：</b>n=N/Nₐ=m/M=V/Vm；溶液 c=n/V。</p>
<p><b>易错：</b>Vm=22.4L/mol <b>仅适用于标准状况下的气体</b>。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>标况11.2L CO₂物质的量？</p>
<p><b>【讲解】</b>n=11.2/22.4=0.5mol。</p>
<h3>四、名师总结</h3><p>算c时体积用溶液体积，不是溶剂体积。</p>`},
      {id:"L-HX-3",title:"元素周期律",keyword:"位-构-性/原子半径",html:`
<h3>一、课前导入</h3><p>元素周期表为何能"算"出性质？因为位置藏着结构。</p>
<h3>二、核心概念讲解</h3><p><b>位-构-性：</b>周期=电子层数；主族族序=最外层电子数。同周期左→右半径减、金属性减；同主族上→下半径增、金属性增。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>Na 与 Al 谁金属性强？谁原子半径大？</p>
<p><b>【讲解】</b>同周期Na在Al左，故Na金属性更强、原子半径更大。</p>
<h3>四、名师总结</h3><p>口诀："位定构、构定性，周期表是藏宝图。"</p>`}
    ],
    "语文": [
      {id:"L-YW-1",title:"《劝学》论证艺术",keyword:"荀子/比喻论证",html:`
<h3>一、课前导入</h3><p>两千年前荀子怎么劝人学习？他不喊口号，而用一串比喻。</p>
<h3>二、核心概念讲解</h3><p><b>核心论点：</b>学不可以已。</p>
<p><b>论证方法：</b>比喻论证（青出于蓝、冰寒于水、积土成山等），以具象喻抽象。</p>
<p><b>理解误区：</b>把"君子博学而日参省乎己"的"参"误读为"参加"。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>分析"积土成山，风雨兴焉"的论证作用。</p>
<p><b>【讲解】</b>以积土成山喻学习积累，论证"积善成德"需持之以恒，形象有力。</p>
<h3>四、名师总结</h3><p>荀子以喻说理，逻辑严密。口诀："学不可已，积以成德。"</p>`},
      {id:"L-YW-2",title:"《琵琶行》音乐描写",keyword:"白居易/同病相怜",html:`
<h3>一、课前导入</h3><p>听一首曲子为何让人落泪？白居易用文字"录"下了音乐。</p>
<h3>二、核心概念讲解</h3><p><b>主旨：</b>同是天涯沦落人，相逢何必曾相识。</p>
<p><b>手法：</b>以声写声（大珠小珠）、以景衬声、侧面烘托（江州司马青衫湿）。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>"大珠小珠落玉盘"写什么？</p>
<p><b>【讲解】</b>以珠玉相击之声喻琵琶清脆流转，通感精妙。</p>
<h3>四、名师总结</h3><p>音乐描写=比喻+烘托+抒情，三位一体。</p>`},
      {id:"L-YW-3",title:"《乡土中国》差序格局",keyword:"费孝通/差序格局",html:`
<h3>一、课前导入</h3><p>中国人说"自己人"很有弹性，这背后是社会结构的差异。</p>
<h3>二、核心概念讲解</h3><p><b>差序格局：</b>以己为中心，像石子投水泛起涟漪，亲疏有别、弹性伸缩。</p>
<p><b>对比：</b>西洋"团体格局"如柴捆，界限分明。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>为何"公"与"私"在中国语境下界限模糊？</p>
<p><b>【讲解】</b>差序格局下关系有远近，站在圈里即"公"，圈外即"私"，故具相对性。</p>
<h3>四、名师总结</h3><p>理解差序格局，方能读懂中国乡土社会的人际逻辑。</p>`}
    ],
    "英语": [
      {id:"L-YY-1",title:"定语从句关系词",keyword:"who/which/where/介词+which",html:`
<h3>一、课前导入</h3><p>怎样把"那个男孩赢了奖"和"他很努力"连成一句？用定语从句。</p>
<h3>二、核心概念讲解</h3><p><b>关系代词：</b>who/whom(人)、which(物)、that(通用)，在从句中作主/宾/表语。</p>
<p><b>关系副词：</b>when(时间)、where(地点)、why(原因)，在从句中作状语。</p>
<p><b>介词+which/whom：</b>介词由搭配或从句缺状语决定。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>This is the book ____ I'm interested.</p>
<p><b>【讲解】</b>be interested <b>in</b>，介词in提前→in which。</p>
<h3>四、名师总结</h3><p>判关系词三步：看先行词→看从句缺什么成分→定代词还是副词。</p>`},
      {id:"L-YY-2",title:"应用文书信格式",keyword:"书信/邀请信",html:`
<h3>一、课前导入</h3><p>高考英语写作常考书信，格式错了直接丢分。</p>
<h3>二、核心概念讲解</h3><p><b>结构：</b>称呼(Dear...)→开头寒暄→正文要点→结尾客套→署名(Yours, Li Hua 右下)。</p>
<p><b>类型：</b>邀请信、建议信、申请信、告知信。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>写邀请外教参加运动会。</p>
<p><b>【讲解】</b>首段表明目的，中段给时间地点，末段期待回复；语气礼貌。</p>
<h3>四、名师总结</h3><p>格式+要点+礼貌，三要素缺一不可。</p>`},
      {id:"L-YY-3",title:"现在进行时表将来",keyword:"位移动词/进行时表将来",html:`
<h3>一、课前导入</h3><p>"The bus is coming" 车并没在动，为何用进行时？</p>
<h3>二、核心概念讲解</h3><p><b>规则：</b>位移动词(come, go, leave, arrive, start) 用现在进行时表已计划的将来。</p>
<h3>三、典型例题</h3><p><b>【例题】</b>We ____ for the match tomorrow.(leave)</p>
<p><b>【讲解】</b>are leaving，表既定安排。</p>
<h3>四、名师总结</h3><p>记住"位移动词+进行=将来安排"这一特殊用法。</p>`}
    ]
  },

  /* ============ 模块4：样例完整试卷（每科1套示意） ============ */
  samplePapers: {
    "数学": {
      title:"人教版高一数学模拟试卷（第1套 · 基础）",
      meta:"考试时间：120分钟  满分：150分  适用：内蒙古地区",
      sections:[
        {name:"一、选择题（每题5分，共12题，60分）",items:[
          {stem:"已知集合A={1,2,3},B={2,3,4}，则A∩B=",options:["{1,2}","{2,3}","{3,4}","{1,4}"],answer:"B",analysis:"交集取公共元素{2,3}。"},
          {stem:"函数f(x)=√(x-1)的定义域是",options:["[1,+∞)","(1,+∞)","(-∞,1]","R"],answer:"A",analysis:"x-1≥0→x≥1。"},
          {stem:"sin(π/6)的值为",options:["1/2","√3/2","√2/2","1"],answer:"A",analysis:"特殊角sin30°=1/2。"},
          {stem:"若a>0,b>0且a+b=2，则ab最大值为",options:["1","2","4","1/2"],answer:"A",analysis:"ab≤((a+b)/2)²=1。"}
        ]},
        {name:"二、填空题（每题5分，共4题，20分）",items:[
          {stem:"log₂8 = ____。",options:[],answer:"3",analysis:"2³=8。"},
          {stem:"函数y=x²的奇偶性为____（奇/偶/非奇非偶）。",options:[],answer:"偶",analysis:"f(-x)=(-x)²=x²=f(x)。"}
        ]},
        {name:"三、解答题（共70分）",items:[
          {stem:"(10分) 用定义证明 f(x)=2x+1 在R上单调递增。",options:[],answer:"任取x₁<x₂，f(x₁)-f(x₂)=2(x₁-x₂)<0，故f(x₁)<f(x₂)，得证。",analysis:"一次函数斜率正，作差即可证。"},
          {stem:"(12分) 汽车以v₀=20m/s匀速，刹车加速度a=-5m/s²，求刹车到停止的时间与位移。",options:[],answer:"t=v₀/|a|=4s；x=v₀t+½at²=20×4-½×5×16=40m。",analysis:"匀变速公式直接代入。"}
        ]}
      ]
    },
    "物理": {
      title:"人教版高一物理模拟试卷（第1套 · 基础）",
      meta:"考试时间：90分钟  满分：100分  适用：内蒙古地区",
      sections:[
        {name:"一、选择题（每题4分，共10题，40分）",items:[
          {stem:"下列物理量中是矢量的是",options:["时间","质量","位移","路程"],answer:"C",analysis:"位移有方向，是矢量。"},
          {stem:"物体做自由落体，g取10m/s²，2s末速度为",options:["10m/s","20m/s","5m/s","40m/s"],answer:"B",analysis:"v=gt=20m/s。"}
        ]},
        {name:"二、实验题（共20分）",items:[
          {stem:"(10分) 打点计时器使用____电源（填'交流'或'直流'），频率50Hz时打点周期T=____s。",options:[],answer:"交流；0.02",analysis:"电磁打点计时器用交流，T=1/f=0.02s。"}
        ]},
        {name:"三、计算题（共40分）",items:[
          {stem:"(15分) 质量m=5kg物体受水平推力F=30N、摩擦f=5N，求加速度与3s内位移。",options:[],answer:"a=(30-5)/5=5m/s²；x=½at²=½×5×9=22.5m。",analysis:"牛顿第二定律+匀变速位移。"}
        ]}
      ]
    },
    "化学": {
      title:"人教版高一化学模拟试卷（第1套 · 基础）",
      meta:"考试时间：90分钟  满分：100分  适用：内蒙古地区",
      sections:[
        {name:"一、选择题（每题3分，共15题，45分）",items:[
          {stem:"下列物质属于电解质的是",options:["Cu","NaCl溶液","熔融KNO₃","酒精"],answer:"C",analysis:"熔融KNO₃是化合物且导电，属电解质。"},
          {stem:"标准状况下 22.4L O₂ 的物质的量为",options:["0.5mol","1mol","2mol","44g"],answer:"B",analysis:"n=22.4/22.4=1mol。"}
        ]},
        {name:"二、填空题（每题5分，共20分）",items:[
          {stem:"写出 Na 与水反应的化学方程式：____。",options:[],answer:"2Na+2H₂O=2NaOH+H₂↑",analysis:"钠与水剧烈反应放出氢气。"}
        ]},
        {name:"三、推断/计算题（共35分）",items:[
          {stem:"(15分) 配制 0.2mol/L 的 NaCl 溶液 250mL，需称取 NaCl 多少克？（M=58.5g/mol）",options:[],answer:"n=cV=0.2×0.25=0.05mol；m=nM=0.05×58.5=2.925g。",analysis:"c=n/V 与 m=nM 联合使用。"}
        ]}
      ]
    },
    "语文": {
      title:"人教版高一语文模拟试卷（第1套 · 基础）",
      meta:"考试时间：150分钟  满分：150分  适用：内蒙古地区",
      sections:[
        {name:"一、现代文阅读（35分）",items:[
          {stem:"阅读《故都的秋》选段，概括作者笔下'清、静、悲凉'的秋味体现在哪些景物上。",options:[],answer:"体现在破屋、槐树落蕊、秋蝉残声、都市闲人话秋等意象中，以冷清景物寄寓家国之忧。",analysis:"考查情景交融与信息提取。"}
        ]},
        {name:"二、古诗文默写（10分）",items:[
          {stem:"补写：'君子博学而日参省乎己，____。'（《劝学》）",options:[],answer:"则知明而行无过矣",analysis:"荀子名句，注意'知'通'智'。"}
        ]},
        {name:"三、作文（60分）",items:[
          {stem:"请以'劳动的滋味'为题，结合《喜看稻菽千重浪》《以工匠精神雕琢时代品质》的阅读体验，写一篇不少于800字的记叙文。",options:[],answer:"（评分标准：切合题意、中心明确、内容充实、情感真实、语言流畅，一类卷54-60分）",analysis:"贴合内蒙古农耕文化语境，考查记叙与立意。"}
        ]}
      ]
    },
    "英语": {
      title:"人教版高一英语模拟试卷（第1套 · 基础）",
      meta:"考试时间：120分钟  满分：150分  适用：内蒙古地区",
      sections:[
        {name:"一、语法填空（每题1.5分，共20题，30分）",items:[
          {stem:"The girl ____ (who/which) is dancing is my sister.",options:[],answer:"who",analysis:"先行词指人、从句缺主语，用who。"}
        ]},
        {name:"二、阅读理解（共40分）",items:[
          {stem:"Read: 'Tom, a 16-year-old student, joined the school running club to keep fit...' What is Tom's purpose? (A) To make friends (B) To keep fit (C) To win a prize (D) To travel",options:["A","B","C","D"],answer:"B",analysis:"原文'keep fit'直接对应。"}
        ]},
        {name:"三、书面表达（25分）",items:[
          {stem:"假定你是李华，写一封邮件邀请外教 Mr. Smith 参加学校运动会。要点：时间、地点、活动。词数80左右。",options:[],answer:"(评分：格式正确、要点齐全、语言得体为一档；注意书信格式与礼貌用语)",analysis:"考查应用文书信与邀请信结构。"}
        ]}
      ]
    }
  }
};

/* 暴露到全局 */
if (typeof window !== "undefined") window.DATA = DATA;
