/* 名师讲堂增强层：用结构化 schema 替换并大幅扩充 5 科讲堂
   每科 10 讲，覆盖更多知识点与题型；app.js 按结构渲染 */
(function () {
  const D = window.DATA;

  D.lectures["语文"] = [
    { id: "L-YW-01", title: "意象与意境的赏析门道", category: "知识点精讲", knowledge: "现代诗歌/古代诗歌意象意境",
      intro: "读诗如看画：诗人从不直接说「我好愁」，而是丢给你一轮月、一地霜。学会抓意象，诗歌就懂了一半。",
      concept: ["意象=物象+情感（月常寄思乡，柳常送别，落木常悲秋）", "意境=多个意象组合出的整体氛围（雄浑/清幽/悲凉/闲适）", "赏析三步：找意象→析修饰→概括意境与情感"],
      examples: [{ stem: "「枯藤老树昏鸦，小桥流水人家」营造了怎样的意境？", options: ["A.欢快明朗", "B.萧瑟苍凉的羁旅之愁", "C.壮丽的边塞", "D.闲适的田园"], answer: 1, analysis: "枯藤、老树、昏鸦等意象衰飒，组合出萧瑟苍凉的游子思乡之境，选B。" }],
      summary: "意象是砖，意境是房；先砌砖再观房，赏析不离「景—情」对应。", mnemonic: "找意象、析修饰、概括境——三步读诗不踩空。" },

    { id: "L-YW-02", title: "文言文判断句与被动句", category: "知识点精讲", knowledge: "第六单元文言句式",
      intro: "古人说话爱绕弯子：「……者，……也」其实就是在说「是」。认清句式，翻译才不卡壳。",
      concept: ["判断句标志：者……也、乃、即、为、非（表否定判断）", "被动句标志：于（受制于人）、为……所……、见……于……", "无标志被动靠语境（如「锲而不舍，金石可镂」可镂即被雕刻）"],
      examples: [{ stem: "「人马烧溺死者甚众」属于：", options: ["A.判断句", "B.被动句（无标志，被烧溺而死）", "C.倒装句", "D.省略句"], answer: 1, analysis: "「烧溺死」表被动含义，属无标志被动，选B。" }],
      summary: "判断看「是」，被动看「被/于/为所」，标志词是翻译的钥匙。", mnemonic: "者也都、为非乃即——判标志；于、为所、见——被字诀。" },

    { id: "L-YW-03", title: "议论文三要素与论证方法", category: "题型专项", knowledge: "思辨性阅读与写作",
      intro: "议论文像打官司：论点是指控，论据是证据，论证是推理过程。三样齐了才站得住。",
      concept: ["论点要鲜明、正确、有针对性（常居段首或标题）", "论据分事实论据与道理论据，须典型真实", "论证方法：举例、道理、对比、比喻、因果、引用"],
      template: "① 定位论点（找中心句）② 区分论据类型 ③ 判定论证方法 ④ 评析论证是否严密",
      examples: [{ stem: "「不积跬步，无以至千里；不积小流，无以成江海」在论证中作用是：", options: ["A.提出论点", "B.用比喻（积少成多）论证「学须积累」", "C.总结全文", "D.交代背景"], answer: 1, analysis: "以行走、江河设喻论证积累之重要，属比喻论证，选B。" }],
      summary: "读议论文先抓论点，再看论据如何服务论点，方法看标志词。", mnemonic: "论点旗帜明，论据材料真，方法看标志，逻辑才服人。" },

    { id: "L-YW-04", title: "古诗词情感鉴赏题型", category: "题型专项", knowledge: "古代诗歌阅读",
      intro: "高考古诗词最爱问「抒发了什么感情」。别慌，情感都藏在题材与意象里。",
      concept: ["按题材速判：羁旅→思乡、送别→不舍、边塞→报国/悲苦、田园→闲适", "抓直抒胸臆句（「愁」「恨」「喜」「怜」）", "结合作者境遇与注释"],
      template: "① 读标题与作者定题材 ② 抓情语与景语 ③ 用术语作答：抒发……（思乡/报国/伤春/旷达）之情",
      examples: [{ stem: "「浊酒一杯家万里，燕然未勒归无计」表达的情感是：", options: ["A.思乡与功业未就的矛盾", "B.闲适恬淡", "C.儿女情长", "D.嘲讽时政"], answer: 0, analysis: "一杯酒念万里家，归期无计因功未立，思乡与报国矛盾交织，选A。" }],
      summary: "题材定大类，情语定具体，注释补背景，情感题不难。", mnemonic: "题材定调，情语定情，注释补因。" },

    { id: "L-YW-05", title: "比喻论证的作用怎么答", category: "知识点精讲", knowledge: "《劝学》等说理文",
      intro: "为什么大师爱打比方？因为抽象道理太干，一个比喻就润了。",
      concept: ["比喻论证=用相似事物说理，化抽象为具体", "作用表述：生动形象/深入浅出地论证了……观点，增强说服力", "与「比喻修辞」不同：论证是服务于论点的"],
      examples: [{ stem: "分析「积土成山，风雨兴焉」的比喻论证作用，最恰当的是：", options: ["A.写景", "B.以积土兴风雨设喻，形象论证学习须积累", "C.抒情", "D.交代人物"], answer: 1, analysis: "用自然现象喻学习积累，使道理形象易懂，选B。" }],
      summary: "答比喻论证＝「把X比作Y，形象论证了Z观点」。", mnemonic: "喻证三连：像什么、证什么、服谁人。" },

    { id: "L-YW-06", title: "现代文细节描写的作用", category: "知识点精讲", knowledge: "小说/散文阅读",
      intro: "一个大活人，往往靠一个小动作就立住了——这就是细节的魔力。",
      concept: ["细节=细小而典型的动作、语言、物件、神态", "作用：刻画人物性格、推动情节、暗示主题、渲染氛围", "答题：运用了……细节，表现了人物……心理/性格"],
      examples: [{ stem: "《百合花》写新媳妇「咬着嘴唇，伸手一针一针地缝」通讯员衣肩的破洞，作用是：", options: ["A.写她手巧", "B.以细节表现对战士的痛惜与敬意", "C.交代布料", "D.多余之笔"], answer: 1, analysis: "一针一线见深情，细节传神写出普通群众对烈士的质朴敬意，选B。" }],
      summary: "细节不细，落笔在人；问作用先想「为谁、显何情」。", mnemonic: "小细节，大性格；问作用，落人物。" },

    { id: "L-YW-07", title: "人物通讯的选材与结构", category: "知识点精讲", knowledge: "第二单元劳动",
      intro: "写一个人，不能记流水账。好通讯靠「选典型、搭骨架」。",
      concept: ["选材：抓最有代表性、最能体现精神的事例（以小见大）", "结构：小标题式最常见，每节一侧面", "语言：记叙为主，适当抒情议论点题"],
      examples: [{ stem: "《喜看稻菽千重浪》写袁隆平，主要采用的结构是：", options: ["A.小标题分侧面", "B.单一故事", "C.纯抒情", "D.剧本式"], answer: 0, analysis: "用小标题领起若干典型片段，多角度展现人物，选A。" }],
      summary: "通讯写作＝典型事例＋清晰结构＋点题之笔。", mnemonic: "选典型、分小标题、点上睛。" },

    { id: "L-YW-08", title: "情景交融散文的赏析", category: "题型专项", knowledge: "第七单元散文",
      intro: "散文高手从不多说「我好伤心」，他只写「一地梧桐雨」。",
      concept: ["景为情设，情寓景中（一切景语皆情语）", "抓情感基调词（清、静、悲凉、旷达）", "赏析：写了何景＋如何写＋寄寓何情"],
      template: "① 定位景物描写 ② 概括特点 ③ 点明情感 ④ 评手法（借景抒情/情景交融）",
      examples: [{ stem: "「庭阶寂寂，小鸟时来啄食」在《项脊轩志》中的效果是：", options: ["A.表现喧闹", "B.以动衬静，烘托轩中清幽与作者孤寂", "C.写鸟可爱", "D.交代时间"], answer: 1, analysis: "鸟啄食反衬庭阶寂静，烘托清幽孤寂，选B。" }],
      summary: "散文赏析＝景特点＋情基调＋情景关系。", mnemonic: "看景、品情、联手法。" },

    { id: "L-YW-09", title: "文言文实词推断技巧", category: "题型专项", knowledge: "文言阅读",
      intro: "遇到不认识的文言字别慌，上下文就是你的词典。",
      concept: ["形旁推断：带「钅」多与金属有关，带「氵」多与水有关", "对称结构：上下句同位置词义常相近或相反", "联想课内熟词（如「走」古义为跑）"],
      template: "① 看字形旁 ② 看上下文对举 ③ 联课内 ④ 代入验证",
      examples: [{ stem: "「收天下之兵，聚之咸阳」中「兵」的意思，由「聚之咸阳」可推为：", options: ["A.士兵", "B.兵器", "C.战争", "D.兵法"], answer: 1, analysis: "收聚到咸阳的应是兵器（兵器库），结合语境「兵」此处指武器，选B。" }],
      summary: "实词不识莫硬猜，形、境、课三法来。", mnemonic: "形旁看、对举推、课内联。" },

    { id: "L-YW-10", title: "考场作文的立意与结构", category: "题型专项", knowledge: "跨单元写作",
      intro: "作文如建房：立意是地基，结构是框架，细节是装修。",
      concept: ["立意：鲜明、积极、集中，忌大而空（小切口见大主题）", "结构：引论—本论（2~3分论点）—结论，段首亮明分论点", "素材：一材多用，紧扣分论点分析而非堆砌"],
      template: "① 审题定中心 ② 列3个分论点（并列/递进）③ 每段「观点+事例+分析」④ 结尾升华",
      examples: [{ stem: "以「劳动」为题，下列立意最恰当的是：", options: ["A.劳动就是干活", "B.以「劳动创造价值、涵养品格」为核，用小故事展开", "C.罗列名人名言", "D.空喊口号"], answer: 1, analysis: "立意具体有抓手、可展开分析，优于空泛，选B。" }],
      summary: "好作文＝好立意＋清结构＋真分析。", mnemonic: "意要正而聚，构要清而齐。" }
  ];

  D.lectures["数学"] = [
    { id: "L-SX-01", title: "集合运算与韦恩图", category: "知识点精讲", knowledge: "第一章集合",
      intro: "集合就像装东西的袋子，韦恩图帮你「看见」袋子怎么交、怎么并。",
      concept: ["交集A∩B：两袋共有的；并集A∪B：倒在了一起的全部", "补集∁UA：全集中去掉A剩下的", "元素三性：确定性、互异性、无序性"],
      examples: [{ stem: "U={1,2,3,4,5}, A={1,2}, B={2,3,4}，则 ∁U(A∪B)=？", options: ["A.{5}", "B.{1,2,3,4}", "C.{2}", "D.∅"], answer: 0, analysis: "A∪B={1,2,3,4}，全集中剩余{5}，选A。" }],
      summary: "集合运算先想韦恩图，交并补一目了然。", mnemonic: "交共有、并全有、补剩谁。" },

    { id: "L-SX-02", title: "充分必要条件判定", category: "题型专项", knowledge: "第一章逻辑",
      intro: "「条件」像门禁：谁放谁进来，关系就定了。",
      concept: ["p⇒q：p充分、q必要", "小范围⇒大范围（x>2⇒x>1）", "p⇔q：充要"],
      template: "① 写成「若p则q」② 判能否推出 ③ 双向都行即充要，单向定充分/必要",
      examples: [{ stem: "p：四边形是菱形；q：四边形是平行四边形。p是q的？", options: ["A.充分不必要", "B.必要不充分", "C.充要", "D.无关"], answer: 0, analysis: "菱形必是平行四边形（充分），平行四边形未必菱形（不必要），选A。" }],
      summary: "谁推谁，谁就「充分」；被推的就是「必要」。", mnemonic: "箭头指去是充分，被指过来是必要。" },

    { id: "L-SX-03", title: "函数单调性证明（作差法）", category: "题型专项", knowledge: "第三章函数",
      intro: "证明单调像打官司：任取两点，作差看符号，结论自然来。",
      concept: ["取值：任取x₁<x₂∈区间", "作差：f(x₁)−f(x₂)，通分/因式分解", "定号：由范围判符号⇒增减"],
      template: "① 设x₁<x₂ ② 作差变形 ③ 判号 ④ 下结论",
      examples: [{ stem: "证明 f(x)=−x² 在(0,+∞)上递减，关键作差是：", options: ["A.f(x₁)−f(x₂)=−(x₁²−x₂²)>0", "B.f(x₁)−f(x₂)=−(x₁−x₂)(x₁+x₂)>0（因x₁<x₂）", "C.=0", "D.无法证"], answer: 1, analysis: "作差=−(x₁−x₂)(x₁+x₂)，x₁<x₂使x₁−x₂<0，整体>0即f(x₁)>f(x₂)，递减，选B。" }],
      summary: "作差—变形—定号，三步定增减。", mnemonic: "任取两点差一差，符号定增减。" },

    { id: "L-SX-04", title: "函数奇偶性判断", category: "知识点精讲", knowledge: "第三章函数",
      intro: "奇偶看「对称」：偶像照镜子（y轴），奇像转圈圈（原点）。",
      concept: ["先查定义域是否关于原点对称，否则非奇非偶", "f(−x)=f(x)偶；f(−x)=−f(x)奇", "常见：x²偶、x³奇、常数偶（非零）"],
      examples: [{ stem: "f(x)=x+1/x 的奇偶性是：", options: ["A.偶函数", "B.奇函数", "C.非奇非偶", "D.既奇又偶"], answer: 1, analysis: "f(−x)=−x−1/x=−(x+1/x)=−f(x)，定义域x≠0对称，故奇函数，选B。" }],
      summary: "奇偶先看定义域，再代入−x比一比。", mnemonic: "定义域先对称，−x代入判同反。" },

    { id: "L-SX-05", title: "基本不等式求最值", category: "题型专项", knowledge: "第二章不等式",
      intro: "「两个正数和定积最大，积定和最小」——这是最值题的王牌。",
      concept: ["a,b>0时 a+b≥2√ab，等号当且仅当a=b", "「一正二定三相等」三条件缺一不可", "1的代换：和定值乘「1=表达式」构造"],
      template: "① 验正数 ② 凑出和为定值或积为定值 ③ 用公式 ④ 验等号可取",
      examples: [{ stem: "x>0时，求 2x+8/x 的最小值：", options: ["A.4", "B.8", "C.16", "D.2"], answer: 1, analysis: "2x+8/x≥2√(16)=8，x=2时取等，最小值8，选B。" }],
      summary: "最值用均值，牢记「一正二定三相等」。", mnemonic: "正定等，三件宝；和定积最大，积定和最小。" },

    { id: "L-SX-06", title: "二次函数、方程与不等式", category: "知识点精讲", knowledge: "第二章函数方程",
      intro: "一根线串三颗珠：函数图、方程根、不等式解，其实是一家。",
      concept: ["方程的根=图象与x轴交点横坐标", "不等式ax²+bx+c>0解集=图象在x轴上方的x范围", "Δ=b²−4ac定根的个数"],
      examples: [{ stem: "不等式 −x²+3x−2>0 的解集：", options: ["A.(1,2)", "B.(−∞,1)∪(2,+∞)", "C.{1,2}", "D.∅"], answer: 0, analysis: "等价于x²−3x+2<0，根1、2，开口上取中间(1,2)，选A。" }],
      summary: "数形结合：看图说话，根与解集全清楚。", mnemonic: "根是交点，解是图上，数形一家亲。" },

    { id: "L-SX-07", title: "指数与对数函数图象", category: "知识点精讲", knowledge: "第四章函数",
      intro: "指数对数像照镜子：一个过(0,1)，一个过(1,0)，互为反函数。",
      concept: ["y=a^x过(0,1)，a>1递增、0<a<1递减", "y=log_a x过(1,0)，与指数互为反函数，图关于y=x对称", "a>1时两者均增"],
      examples: [{ stem: "函数 y=log_2 x 的图象必过点：", options: ["A.(0,1)", "B.(1,0)", "C.(2,0)", "D.(0,0)"], answer: 1, analysis: "对数定点(1,0)，代入log_2 1=0成立，选B。" }],
      summary: "指数(0,1)、对数(1,0)，反函数镜像对称。", mnemonic: "指过(0,1)，对过(1,0)，对称y=x。" },

    { id: "L-SX-08", title: "三角函数诱导公式", category: "题型专项", knowledge: "第五章三角函数",
      intro: "诱导公式一整本，其实一句口诀全拿下。",
      concept: ["「奇变偶不变」：k·π/2±α中k奇变名、k偶不变", "「符号看象限」：把α当锐角看原函数正负", "常用：sin(π/2−α)=cosα，sin(π+α)=−sinα"],
      template: "① 看k奇偶定变不变名 ② 设α锐角判原函数值符号 ③ 写出结果",
      examples: [{ stem: "化简 cos(π/2+α)=？", options: ["A.sinα", "B.−sinα", "C.cosα", "D.−cosα"], answer: 1, analysis: "π/2为奇倍数⇒变名cos→sin；α锐角时π/2+α在第二象限，cos为负，故=−sinα，选B。" }],
      summary: "奇变偶不变，符号看象限，九字真言。", mnemonic: "奇变偶不变，符号看象限。" },

    { id: "L-SX-09", title: "y=Asin(ωx+φ) 参数求解", category: "题型专项", knowledge: "第五章三角函数",
      intro: "给一张正弦波照片，怎么读出A、ω、φ？五点法来帮忙。",
      concept: ["A=|最大−最小|/2（振幅）", "T=2π/ω，由相邻峰谷或零点距求T", "代入已知点（用五点法起点）求φ，注意单调区间避多解"],
      template: "① 读A ② 由周期求ω ③ 代点求φ ④ 检验",
      examples: [{ stem: "正弦曲线最大值为4、最小值为−2，则A=？", options: ["A.4", "B.3", "C.2", "D.6"], answer: 1, analysis: "A=(4−(−2))/2=3，选B。" }],
      summary: "读图三步走：振幅、周期、初相。", mnemonic: "A看峰谷差一半，T看周期ω算，点代入求φ。" },

    { id: "L-SX-10", title: "函数零点与方程根", category: "题型专项", knowledge: "跨章函数零点",
      intro: "零点不是「点」是「数」——它是图象踩到x轴的那个横坐标。",
      concept: ["零点：f(x)=0的实根=图象与x轴交点横坐标", "零点存在定理：f(a)f(b)<0且连续⇒(a,b)内至少一零点", "求零点可结合单调性判唯一"],
      template: "① 令f(x)=0 ② 验端点函数值异号 ③ 结合连续/单调定个数",
      examples: [{ stem: "f(x)=ln x + x −2 在(1,2)内零点个数：", options: ["A.0", "B.1", "C.2", "D.3"], answer: 1, analysis: "f(1)=−1<0，f(2)=ln2>0变号且f递增，故恰有1个零点，选B。" }],
      summary: "零点是根也是交点，异号定理找区间。", mnemonic: "零点是根也是横，变号连续区间有。" }
  ];

  D.lectures["英语"] = [
    { id: "L-YY-01", title: "定语从句·关系代词", category: "知识点精讲", knowledge: "Unit 1 定语从句",
      intro: "定语从句像个跟班，紧跟着它修饰的「先行词」。先搞清谁是被修饰的，再用对代词。",
      concept: ["先行词指人→who/that，指物→which/that", "关系代词在从句中作主语或宾语；作宾语可省略", "逗号后不用that（非限制定语从句用who/which）"],
      examples: [{ stem: "The girl _____ won the prize is my classmate.", options: ["A.which", "B.who", "C.whom", "D.whose"], answer: 1, analysis: "先行词girl指人，关系代词在从句中作主语，用who/that，选B。" }],
      summary: "看先行词是人还是物，看在从句里作主还是宾。", mnemonic: "人who物which，作主作宾记心里。" },

    { id: "L-YY-02", title: "定语从句·关系副词", category: "知识点精讲", knowledge: "Unit 4 定语从句",
      intro: "when、where、why 不是凑数的——它们专门在从句里当「时间/地点/原因」状语。",
      concept: ["when→时间状语（先行词为时间名词）", "where→地点状语（先行词为地点名词）", "why→原因状语（先行词为reason）", "缺状语才用副词，缺主宾用代词"],
      examples: [{ stem: "I'll never forget the day _____ we first met.", options: ["A.which", "B.that", "C.when", "D.what"], answer: 2, analysis: "先行词day表时间，关系词在从句中作时间状语，用when，选C。" }],
      summary: "副词管状语，代词管主宾，别混用。", mnemonic: "时间when地where，原因why莫记差。" },

    { id: "L-YY-03", title: "现在进行时表将来", category: "知识点精讲", knowledge: "Unit 2 时态",
      intro: "「我明天走」英语常说成 I'm leaving tomorrow——现在进行时竟能预言未来？只限「安排好」的位移。",
      concept: ["用于按计划、时刻表近期确定发生的动作", "限于位移动词：go, come, leave, arrive, start等", "不同于「正在发生」，强调「已安排」"],
      examples: [{ stem: "—When are you leaving? —I _____ at 8 tonight.", options: ["A.leave", "B.am leaving", "C.left", "D.have left"], answer: 1, analysis: "问句用现在进行时表将来，答句一致用am leaving，选B。" }],
      summary: "进行时表将来＝按计划要发生的位移动作。", mnemonic: "位移动词进行时，计划将来莫迟疑。" },

    { id: "L-YY-04", title: "介词+which/whom 定语从句", category: "题型专项", knowledge: "Unit 5 定语从句",
      intro: "介词跑到了关系词前面，别慌——它本来就在后面的搭配里。",
      concept: ["介词由动词/形容词/名词固定搭配或语境决定", "指人用whom，指物用which，介词提前", "which/whom不可省"],
      template: "① 找从句谓语动词搭配 ② 确定缺哪个介词 ③ 提前写『介词+which/whom』",
      examples: [{ stem: "The book _____ I learned a lot is very useful. (learn...from)", options: ["A.from which", "B.which from", "C.that", "D.from that"], answer: 0, analysis: "learn from the book，介词from提前，指物用which，即from which，选A。" }],
      summary: "介词看搭配，提前用which/whom。", mnemonic: "搭配定介词，提前whom/which。" },

    { id: "L-YY-05", title: "阅读理解·细节理解题", category: "题型专项", knowledge: "跨单元阅读",
      intro: "细节题是送分题，也是丢分题——秘诀只有四个字：回原文找。",
      concept: ["先读题干抓关键词（人名、数字、专有名词）", "回原文定位原句，逐词比对选项", "警惕偷换概念、以偏概全、颠倒因果"],
      template: "① 划题干关键词 ② 扫读定位 ③ 比对原文 ④ 排除干扰项",
      examples: [{ stem: "细节题正确选项通常：", options: ["A.与原文同义转述", "B.完全照抄原文", "C.凭常识推断", "D.最长是答案"], answer: 0, analysis: "正确项多为原文同义转换，照抄或凭常识易错，选A。" }],
      summary: "细节题＝定位＋比对，不靠脑补。", mnemonic: "关键词、回原文、细比对、排干扰。" },

    { id: "L-YY-06", title: "阅读理解·词义猜测", category: "题型专项", knowledge: "跨单元阅读策略",
      intro: "生词不可怕，上下文都是线索——同义、反义、举例、构词，总有一款能救你。",
      concept: ["看并列/转折前后找同义或反义线索", "看such as后举例推断", "构词法：un-否定、 -ful充满、 -less无", "定义式（is called / means）直接给义"],
      template: "① 定位生词所在句 ② 找上下文信号词 ③ 据线索推断 ④ 代入验证",
      examples: [{ stem: "『Unlike his gregarious sister, he is reserved.』中gregarious意为：", options: ["A.害羞的", "B.合群的（与reserved相反）", "C.高个的", "D.聪明的"], answer: 1, analysis: "unlike表对比，gregarious与reserved（内向）相反，故意为合群，选B。" }],
      summary: "猜词靠语境线索，不靠瞎蒙。", mnemonic: "同义反义举定义，构词帮忙猜词义。" },

    { id: "L-YY-07", title: "应用文·书信写作", category: "题型专项", knowledge: "跨单元写作",
      intro: "英文书信像穿正装：格式对了，印象分就到手。",
      concept: ["格式：右上日期→称呼Dear X,→正文→结尾Yours sincerely,→署名", "语气随对象：正式用sincerely，熟用best wishes", "正文先点明目的，再分条写要点"],
      template: "① 写日期与称呼 ② 首句说明来意 ③ 分段陈述要点 ④ 礼貌结尾+署名",
      examples: [{ stem: "英文正式书信结尾正确写法：", options: ["A.Yours sincerely,（逗号+署名）", "B.Bye,", "C.无结尾", "D.以上皆可"], answer: 0, analysis: "正式书信用Yours sincerely,后接逗号与署名，选A。" }],
      summary: "书信重格式与礼貌，要点分段更清晰。", mnemonic: "日期称呼不能少，sincerely收尾好。" },

    { id: "L-YY-08", title: "演讲稿写作要点", category: "知识点精讲", knowledge: "Unit 3 Sports",
      intro: "演讲稿不是写作文——它要「说」出来，开头抓耳、结尾鼓掌。",
      concept: ["开头：礼貌问候+吸引注意（提问/故事/数据）", "主体：分点论述（First… Besides… Most importantly…）", "结尾：总结+呼吁/致谢，语气积极"],
      examples: [{ stem: "演讲稿主体展开最清晰的方式是：", options: ["A.想到哪写到哪", "B.用First/Besides/Finally分点", "C.只写一个长段", "D.全用问句"], answer: 1, analysis: "分点标志词使结构清晰、易听易懂，选B。" }],
      summary: "演讲稿＝抓耳开头+分点主体+有力结尾。", mnemonic: "开头抓耳，主体分点，结尾鼓掌。" },

    { id: "L-YY-09", title: "高频动词短语积累", category: "知识点精讲", knowledge: "Unit 3 词汇",
      intro: "英语最坑的不是生词，是「熟词生义」和「动词+小词」组合。",
      concept: ["give up放弃 / give in屈服 / give out分发耗尽", "come up with想出 / put off推迟 / turn down拒绝", "代词宾语放中间：turn it down（不能说turn down it）"],
      examples: [{ stem: "『He couldn't _____ the noise and went out.』(忍受→put up with/turn down)", options: ["A.turn down", "B.put up with", "C.give up", "D.take off"], answer: 1, analysis: "句意为「忍受噪音」，put up with意为忍受，选B（turn down是拒绝）。" }],
      summary: "动词短语靠积累+语境，代词置中间。", mnemonic: "动词加小词，意思大不同；代词放当中。" },

    { id: "L-YY-10", title: "听力·数字与时间抓取", category: "题型专项", knowledge: "跨单元听力策略",
      intro: "听力里最会骗人的是数字：十几和几十只差一个轻读的音。",
      concept: ["听前预读选项，预测问数字/时间/价格/地点", "重点抓：thirteen/ thirty、a quarter、past/to", "边听边速记关键词，注意同义转换"],
      template: "① 预读选项 ② 锁定数字类型 ③ 听时速记 ④ 听清同义转述",
      examples: [{ stem: "听到『The train leaves at a quarter to ten』，时间是：", options: ["A.9:15", "B.9:45", "C.10:15", "D.10:45"], answer: 1, analysis: "a quarter to ten=9:45（差一刻到十点），选B。" }],
      summary: "听力数字靠预判+速记，别被十几几十绕晕。", mnemonic: "预读选项先预判，十几三十仔细辨。" }
  ];

  D.lectures["物理"] = [
    { id: "L-WL-01", title: "运动学图像 v-t 图", category: "题型专项", knowledge: "第二章匀变速",
      intro: "v-t图是运动学的「藏宝图」：斜率是加速度，面积是位移。",
      concept: ["斜率=加速度（正加速、负减速、零匀速）", "图线与t轴围成面积=位移（上正下负）", "交点≠相遇，是速度相等"],
      template: "① 看斜率判加速度 ② 算面积得位移 ③ 看横轴上下判方向",
      examples: [{ stem: "v-t图中倾斜直线且斜率为正，物体：", options: ["A.匀速", "B.匀加速直线", "C.静止", "D.匀减速"], answer: 1, analysis: "正斜率⇒a>0恒定，速度均匀增大，为匀加速直线运动，选B。" }],
      summary: "v-t图：斜率加速度，面积位移。", mnemonic: "斜加面位，看图不迷。" },

    { id: "L-WL-02", title: "匀变速直线运动公式", category: "知识点精讲", knowledge: "第二章匀变速",
      intro: "三兄弟公式：速度式、位移式、速度位移式，各管一个缺量。",
      concept: ["v=v₀+at（缺位移）", "x=v₀t+½at²（缺末速）", "v²−v₀²=2ax（缺时间，优先用）"],
      examples: [{ stem: "刹车初速20m/s、a=−5m/s²，停下位移：", options: ["A.40m", "B.20m", "C.80m", "D.10m"], answer: 0, analysis: "用v²−v₀²=2ax，0−400=2(−5)x⇒x=40m，选A。" }],
      summary: "选公式看缺啥量，缺时间用v²式最省事。", mnemonic: "缺位用速式，缺速用位式，缺时用平方式。" },

    { id: "L-WL-03", title: "自由落体运动", category: "知识点精讲", knowledge: "第二章自由落体",
      intro: "伽利略说：轻重物体同时落地——只要都只受重力。",
      concept: ["初速0、a=g≈9.8(常取10)的匀加速", "v=gt，h=½gt²，v²=2gh", "轻重同高同落（忽略空气阻力）"],
      examples: [{ stem: "从20m高处自由下落（g=10），落地时间：", options: ["A.1s", "B.2s", "C.4s", "D.√2 s"], answer: 1, analysis: "h=½gt²⇒20=5t²⇒t²=4⇒t=2s，选B。" }],
      summary: "自由落体=初速零的匀加速，套公式即可。", mnemonic: "自由落体零初速，g当家公式熟。" },

    { id: "L-WL-04", title: "受力分析与正交分解", category: "题型专项", knowledge: "第三章相互作用/牛顿",
      intro: "力学题九成错在「漏力」——按口诀挨个找，绝不漏。",
      concept: ["顺序：重力→弹力→摩擦力→其他外力", "先隔离研究对象，再画受力图", "多力用正交分解列ΣFx=0、ΣFy=0"],
      template: "① 隔离对象 ② 按序找力并画图 ③ 建坐标轴 ④ 分解列方程",
      examples: [{ stem: "斜面物体受力分析，一般不必分析的是：", options: ["A.重力", "B.支持力", "C.摩擦力（若有相对趋势）", "D.对象对斜面的压力（这是斜面受力）"], answer: 3, analysis: "受力分析研究「物体」自身，其对斜面的压力作用在斜面上，不属物体受力，选D。" }],
      summary: "受力分析按顺序画，正交分解列方程。", mnemonic: "重力弹摩其他力，隔离画图上坐标。" },

    { id: "L-WL-05", title: "摩擦力方向与大小", category: "知识点精讲", knowledge: "第三章相互作用",
      intro: "摩擦力最会「骗人」：它不一定阻碍运动，但一定阻碍相对运动（趋势）。",
      concept: ["滑动摩擦 f=μN，方向与相对运动相反", "静摩擦随外力变，0≤f≤f_max，方向反相对趋势", "判断静摩擦方向看「谁想动」"],
      examples: [{ stem: "物体在传送带上随带向右加速，物体受摩擦力方向：", options: ["A.向左", "B.向右（提供加速度）", "C.无摩擦", "D.向下"], answer: 1, analysis: "物体相对带向左滑趋势，静摩擦向右，正是它使物体加速，选B。" }],
      summary: "摩擦阻相对运动/趋势，静摩擦可成动力。", mnemonic: "滑动反相对，静摩擦随趋势；可动力可阻力。" },

    { id: "L-WL-06", title: "牛顿第二定律应用", category: "题型专项", knowledge: "第四章牛顿定律",
      intro: "F=ma 是物理的「发动机」：合外力决定加速度。",
      concept: ["先受力分析求合力ΣF", "a=ΣF/m，方向与ΣF相同", "瞬时性：力变加速度立变"],
      template: "① 受力分析 ② 求ΣF（常正交分解）③ a=ΣF/m ④ 运动学跟进",
      examples: [{ stem: "水平推力10N拉质量2kg物体（光滑面），a=？", options: ["A.5m/s²", "B.20m/s²", "C.2m/s²", "D.0.2m/s²"], answer: 0, analysis: "ΣF=10N，a=ΣF/m=10/2=5m/s²，选A。" }],
      summary: "牛顿第二律＝受力求合再除质量。", mnemonic: "受力求合除质量，a随合力瞬时变。" },

    { id: "L-WL-07", title: "超重与失重", category: "知识点精讲", knowledge: "第四章牛顿定律",
      intro: "电梯里变轻变重，不是重力变了，是「加速度」在捣鬼。",
      concept: ["加速度向上⇒超重（视重>重力）", "加速度向下⇒失重（视重<重力）", "自由落体⇒完全失重（视重为0）"],
      examples: [{ stem: "电梯减速上升时，人感受到：", options: ["A.超重", "B.失重", "C.正常", "D.无重力"], answer: 1, analysis: "减速上升⇒加速度向下⇒失重，选B。" }],
      summary: "超失重看加速度方向，不看速度方向。", mnemonic: "向上加速超，向下加速失；看加速非看速。" },

    { id: "L-WL-08", title: "牛顿第三定律", category: "知识点精讲", knowledge: "第四章牛顿定律",
      intro: "你推墙，墙也推你——这不是客气，是宇宙铁律。",
      concept: ["作用力与反作用力：等大、反向、共线", "作用在不同物体上，不能抵消", "同种性质、同时产生消失"],
      examples: [{ stem: "马拉车前进，关于力的大小关系：", options: ["A.马拉车的力>车拉马的力", "B.二力等大（作用力与反作用力）", "C.车拉马的力更大", "D.无关系"], answer: 1, analysis: "二力为相互作用力，必等大反向，选B（车前进因受地面摩擦小于马拉力）。" }],
      summary: "相互作用力等大反向、各作用一身。", mnemonic: "作用反作用，等大反向不同体。" },

    { id: "L-WL-09", title: "加速度的深刻理解", category: "知识点精讲", knowledge: "第一章运动描述",
      intro: "加速度不是「速度快」，是「速度变得快」——方向比大小更关键。",
      concept: ["a=Δv/Δt，描述速度变化快慢", "a与v同向⇒加速，反向⇒减速", "a为零速度不变（可匀速或静止）"],
      examples: [{ stem: "速度很大但加速度可能为零，例如：", options: ["A.火箭升空", "B.高速匀速飞行的飞机", "C.急刹车", "D.自由落体"], answer: 1, analysis: "匀速飞行速度大但速度不变⇒a=0，说明a与v大小无必然联系，选B。" }],
      summary: "加速度管快慢与方向，与速度大小无关。", mnemonic: "加速度看变化率，同向加反向减。" },

    { id: "L-WL-10", title: "打点计时器与逐差法", category: "题型专项", knowledge: "第二章实验",
      intro: "纸带是匀变速的「黑匣子」，逐差法帮你从一堆点里榨出加速度。",
      concept: ["电源50Hz⇒T=0.02s", "相邻相等时间位移差Δx=aT²（判断匀变）", "逐差法：a=[(x₄+x₅+x₆)−(x₁+x₂+x₃)]/(9T²)"],
      template: "① 定T ② 量各段位移 ③ 用逐差公式 ④ 算a",
      examples: [{ stem: "用逐差法求a的主要目的是：", options: ["A.减少偶然误差", "B.增加段数", "C.好看", "D.省略计算"], answer: 0, analysis: "充分利用所有数据点取平均，减小测量偶然误差，选A。" }],
      summary: "纸带逐差法＝全数据平均求a。", mnemonic: "定周期、量位移、逐差平误差。" }
  ];

  D.lectures["化学"] = [
    { id: "L-HX-01", title: "氧化还原反应·双线桥法", category: "题型专项", knowledge: "第一章氧化还原反应",
      intro: "氧化还原别晕，双线桥一画，谁升谁降、谁失谁得清清楚楚。",
      concept: ["升失氧：化合价升高、失电子、被氧化、作还原剂", "降得还：化合价降低、得电子、被还原、作氧化剂", "电子守恒：得电子总数=失电子总数"],
      template: "① 标各元素化合价 ② 画桥连同种元素 ③ 标升降与e⁻ ④ 判剂与产物",
      examples: [{ stem: "反应 Fe+CuSO₄=FeSO₄+Cu 中，Fe 是：", options: ["A.氧化剂（被还原）", "B.还原剂（被氧化，失电子）", "C.催化剂", "D.既非氧还"], answer: 1, analysis: "Fe价0→+2升高失电子被氧化，作还原剂，选B。" }],
      summary: "双线桥：升失氧还，降得还氧。", mnemonic: "升失氧、降得还，电子守恒是红线。" },

    { id: "L-HX-02", title: "离子方程式正误判断", category: "题型专项", knowledge: "第一章离子反应",
      intro: "离子方程式判错，专坑「不拆、不守恒、不真实」三处。",
      concept: ["拆错：弱电解质、难溶物、气体、单质不拆", "守恒：电荷、原子须守恒", "符合事实：如弱酸不能制强酸（一般）"],
      template: "① 查改写（该拆否拆）② 查电荷守恒 ③ 查事实 ④ 定正误",
      examples: [{ stem: "下列离子方程式正确的是：", options: ["A.CaCO₃+2H⁺=Ca²⁺+CO₂↑+H₂O", "B.CaCO₃+H⁺=Ca²⁺+CO₂+H₂O（未配平电荷）", "C.弱酸HCl=H⁺+Cl⁻", "D.以上都不对"], answer: 0, analysis: "A中CaCO₃难溶不拆、HCl强酸拆，电荷原子均守恒，正确；B电荷不守恒，选A。" }],
      summary: "离子式判错＝查拆、查守恒、查事实。", mnemonic: "拆写对、守恒齐、合事实。" },

    { id: "L-HX-03", title: "钠的性质全梳理", category: "知识点精讲", knowledge: "第二章钠",
      intro: "钠是个「活泼小钢炮」：遇氧变暗、遇水炸响、酚酞变红。",
      concept: ["常温4Na+O₂=2Na₂O（变暗）；点燃2Na+O₂=Na₂O₂（淡黄）", "与水：2Na+2H₂O=2NaOH+H₂↑（浮熔游响红）", "保存于煤油，取用镊子夹、滤纸吸油"],
      examples: [{ stem: "钠着火应选的灭火方式是：", options: ["A.水", "B.干沙/干燥砂土（隔绝空气）", "C.泡沫灭火器", "D.湿布"], answer: 1, analysis: "钠与水剧烈反应，遇水更旺，须用干沙隔绝空气灭火，选B。" }],
      summary: "钠活泼：氧成氧化物/过氧化物，水反应放氢。", mnemonic: "钠遇氧变暗，遇水浮熔响红；煤油里安家。" },

    { id: "L-HX-04", title: "物质的量计算", category: "题型专项", knowledge: "第二章物质的量",
      intro: "物质的量是连接微观与宏观的桥，n 是桥墩。",
      concept: ["n=N/N_A=m/M=V/V_m（标况V_m≈22.4）", "N_A≈6.02×10²³ mol⁻¹", "先求n，再据比例换算粒子数/质量/气体体积"],
      template: "① 明所求 ② 由已知求n ③ 用关系式换算 ④ 带单位算",
      examples: [{ stem: "标准状况下11.2L O₂的物质的量约为：", options: ["A.0.5mol", "B.1mol", "C.2mol", "D.0.25mol"], answer: 0, analysis: "n=V/V_m=11.2/22.4=0.5mol，选A。" }],
      summary: "n 是核心，四式互通。", mnemonic: "N比NA、m比M、V比Vm，n居中通四方。" },

    { id: "L-HX-05", title: "氯气的性质", category: "知识点精讲", knowledge: "第二章氯",
      intro: "黄绿色的氯气，氧化性十足，遇金属给高价、遇水生成漂白狠角色。",
      concept: ["与金属：2Fe+3Cl₂=2FeCl₃（给+3）", "与水：Cl₂+H₂O=HCl+HClO", "与碱：2Cl₂+2Ca(OH)₂=CaCl₂+Ca(ClO)₂+2H₂O（漂白粉）"],
      examples: [{ stem: "湿润氯气使有色布条褪色，起作用的是：", options: ["A.Cl₂本身", "B.HClO（强氧化漂白）", "C.HCl", "D.Ca(ClO)₂"], answer: 1, analysis: "真正漂白的是生成的HClO（不可逆氧化漂白），干燥Cl₂不漂白，选B。" }],
      summary: "氯氧化强，产物HClO能漂白。", mnemonic: "氯遇金属给高价，遇水生HClO漂白它。" },

    { id: "L-HX-06", title: "铁三角 Fe²⁺/Fe³⁺", category: "知识点精讲", knowledge: "第三章铁",
      intro: "铁有「两副面孔」：浅绿Fe²⁺、黄褐Fe³⁺，互相转换靠氧化剂/还原剂。",
      concept: ["Fe²⁺→Fe³⁺：加氧化剂（Cl₂、H₂O₂、O₂）", "Fe³⁺→Fe²⁺：加还原剂（Fe、Cu、I⁻）", "检验：Fe³⁺+KSCN→血红色；Fe²⁺+KSCN无色再氯水变红"],
      examples: [{ stem: "除去FeCl₃中的Fe²⁺，可加入：", options: ["A.铁粉", "B.氯水（氧化Fe²⁺→Fe³⁺）", "C.铜粉", "D.KSCN"], answer: 1, analysis: "氯水将Fe²⁺氧化为Fe³⁺且不引入新杂质（余氯逸出），选B。" }],
      summary: "铁三角：氧化剂升价、还原剂降价，KSCN验Fe³⁺。", mnemonic: "二价浅绿三价黄，氯水升来铁粉降。" },

    { id: "L-HX-07", title: "周期律·位构性", category: "知识点精讲", knowledge: "第四章周期律",
      intro: "元素在表里的位置，藏着它的「性格」——位置、结构、性质三位一体。",
      concept: ["电子层数=周期数；最外层电子数=主族序数", "同周期左→右：半径减小、金属性减弱非金属性增强", "同主族上→下：半径增大、金属性增强"],
      template: "① 由位置推电子层/最外层 ② 据规律推半径与金属性 ③ 推断性质",
      examples: [{ stem: "第三周期第ⅦA族元素，非金属性在该周期：", options: ["A.最弱", "B.最强", "C.居中", "D.无规律"], answer: 1, analysis: "同周期右端非金属性最强，Cl位于右端，选B。" }],
      summary: "位—构—性互推，是周期律的灵魂。", mnemonic: "层定周期族定最外，左金右非中有律。" },

    { id: "L-HX-08", title: "铝的两性", category: "知识点精讲", knowledge: "第三章金属",
      intro: "铝很「八面玲珑」：酸里能溶、碱里也能溶，都放氢气。",
      concept: ["与酸：2Al+6H⁺=2Al³⁺+3H₂↑", "与强碱：2Al+2OH⁻+2H₂O=2AlO₂⁻+3H₂↑", "Al₂O₃、Al(OH)₃也两性"],
      examples: [{ stem: "除去Mg中混有的Al，可用：", options: ["A.盐酸", "B.过量NaOH溶液（Al溶、Mg不溶）", "C.水", "D.氨水"], answer: 1, analysis: "Al溶于强碱而Mg不溶，过滤得纯Mg，选B。" }],
      summary: "铝两性：酸里碱里都放氢。", mnemonic: "铝遇酸碱都放氢，两性本色是根本。" },

    { id: "L-HX-09", title: "胶体与丁达尔效应", category: "知识点精讲", knowledge: "第一章物质分类",
      intro: "胶体是个「中间派」：粒子比溶液大、比浊液小，还自带「光柱」特效。",
      concept: ["分散质粒子1~100nm为胶体", "丁达尔效应：光过胶体现光柱，溶液无（鉴别用）", "渗析：半透膜分离胶体与小离子"],
      examples: [{ stem: "下列分散系能产生丁达尔效应的是：", options: ["A.硫酸铜溶液", "B.Fe(OH)₃胶体", "C.泥水", "D.蔗糖水"], answer: 1, analysis: "胶体有丁达尔效应，Fe(OH)₃胶体符合，溶液与浊液没有，选B。" }],
      summary: "胶体粒径居中，丁达尔是招牌。", mnemonic: "1到100纳米间，丁达尔光柱现。" },

    { id: "L-HX-10", title: "化学键类型判断", category: "题型专项", knowledge: "第四章化学键",
      intro: "化学键是原子间的「握手方式」：离子键 electrostatic、共价键共用电子对。",
      concept: ["离子键：典型活泼金属+活泼非金属（NaCl、NH₄⁺化合物）", "共价键：非金属间共用（HCl、H₂O、CO₂）", "含NH₄⁺的物质也有离子键"],
      template: "① 看组成元素 ② 活泼金属/铵根→离子键 ③ 非金属间→共价键",
      examples: [{ stem: "NaOH 中含有的化学键类型是：", options: ["A.只有离子键", "B.离子键（Na⁺与OH⁻）+共价键（O−H）", "C.只有共价键", "D.金属键"], answer: 1, analysis: "Na⁺与OH⁻间离子键，OH⁻内O−H共价键，故两者都有，选B。" }],
      summary: "离子键静电吸，共价键共电子。", mnemonic: "金非离子键，非非共价键；铵根也离子。" }
  ];
})();
