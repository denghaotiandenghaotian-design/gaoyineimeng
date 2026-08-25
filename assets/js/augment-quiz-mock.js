/* augment-quiz-mock.js
 * 模块4 模拟训练 · 每科 10 套完整成套模拟卷（高一知识范围）
 * 加载于 data.js 之后、app.js 之前；整体替换 D.mockPapers[学科] = [卷1..卷10]
 *   卷结构：{ title, meta, sections:[{name, items:[{stem, options, answer, analysis}]}] }
 */
(function () {
  if (typeof window === "undefined" || !window.DATA) return;
  var D = window.DATA;
  D.mockPapers = {
 "数学": [
  {
   "title": "数学 模拟训练卷（第 1 套）",
   "meta": "数学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "已知集合 A={x|x²-x-2<0}，B={-1,0,1}，则 A∩B =",
       "options": [
        "{-1,0}",
        "{0,1}",
        "{-1,0,1}",
        "∅"
       ],
       "answer": "B",
       "analysis": "x²-x-2<0 ⇒ -1<x<2，A=(-1,2)，与 B 交集为 {0,1}。"
      },
      {
       "stem": "函数 f(x)=√(x-1) 的定义域为",
       "options": [
        "[1,+∞)",
        "(1,+∞)",
        "(-∞,1]",
        "R"
       ],
       "answer": "A",
       "analysis": "根号内 x-1≥0 ⇒ x≥1。"
      },
      {
       "stem": "sin(π/6) 的值为",
       "options": [
        "1/2",
        "√3/2",
        "√2/2",
        "1"
       ],
       "answer": "A",
       "analysis": "特殊角 sin30°=1/2。"
      },
      {
       "stem": "若 2ᵃ=5ᵇ=10，则 1/a+1/b =",
       "options": [
        "1",
        "2",
        "1/2",
        "0"
       ],
       "answer": "A",
       "analysis": "2ᵃ=10⇒a=log₂10，1/a=lg2；同理 1/b=lg5；和=lg10=1。"
      },
      {
       "stem": "下列函数中为偶函数的是",
       "options": [
        "y=x³",
        "y=x²+1",
        "y=1/x",
        "y=x+1"
       ],
       "answer": "B",
       "analysis": "f(-x)=(-x)²+1=x²+1=f(x)，且定义域 R 对称。"
      },
      {
       "stem": "log₂8 + log₂(1/4) =",
       "options": [
        "1",
        "2",
        "0",
        "-1"
       ],
       "answer": "A",
       "analysis": "log₂8=3，log₂(1/4)=log₂(2⁻²)=-2，和为 1。"
      },
      {
       "stem": "不等式 x²-3x+2<0 的解集为",
       "options": [
        "[1,2]",
        "(1,2)",
        "(-∞,1)∪(2,+∞)",
        "{1,2}"
       ],
       "answer": "B",
       "analysis": "方程根 1、2，开口向上，小于 0 取两根之间。"
      },
      {
       "stem": "函数 y=sin x 的最小正周期为",
       "options": [
        "π/2",
        "π",
        "2π",
        "4π"
       ],
       "answer": "C",
       "analysis": "正弦函数基本周期 2π。"
      },
      {
       "stem": "若 f(x)=x²，则 f(-2) =",
       "options": [
        "4",
        "-4",
        "2",
        "-2"
       ],
       "answer": "A",
       "analysis": "(-2)²=4。"
      },
      {
       "stem": "0.5⁻² 的值为",
       "options": [
        "4",
        "0.25",
        "2",
        "0.5"
       ],
       "answer": "A",
       "analysis": "(1/2)⁻²=2²=4。"
      },
      {
       "stem": "函数 y=2ˣ 是",
       "options": [
        "增函数",
        "减函数",
        "偶函数",
        "奇函数"
       ],
       "answer": "A",
       "analysis": "底数 2>1，指数函数单调递增。"
      },
      {
       "stem": "cos(π) 的值为",
       "options": [
        "-1",
        "0",
        "1",
        "√3/2"
       ],
       "answer": "A",
       "analysis": "特殊角 cos180°=-1。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 5 分，共 4 题，20 分）",
     "items": [
      {
       "stem": "2³ × 2⁴ = ____。",
       "options": [],
       "answer": "128",
       "analysis": "同底数相乘指数相加，2⁷=128。"
      },
      {
       "stem": "集合 {1,2,3} 的子集个数为 ____。",
       "options": [],
       "answer": "8",
       "analysis": "n 元集子集数 2ⁿ=2³=8。"
      },
      {
       "stem": "f(x)=x+1，则 f(3)= ____。",
       "options": [],
       "answer": "4",
       "analysis": "3+1=4。"
      },
      {
       "stem": "函数 y=x² 在区间 [0,2] 上的值域为 ____。",
       "options": [],
       "answer": "[0,4]",
       "analysis": "x∈[0,2] 时 x²∈[0,4]。"
      }
     ]
    },
    {
     "name": "三、解答题（共 4 题，50 分，写出必要步骤）",
     "items": [
      {
       "stem": "已知函数 f(x)=2x+1，求 f(0) 与 f(1)。",
       "options": [],
       "answer": "f(0)=1，f(1)=3",
       "analysis": "代入：f(0)=1，f(1)=3。"
      },
      {
       "stem": "化简：(a²)³·a⁴。",
       "options": [],
       "answer": "a¹⁰",
       "analysis": "(a²)³=a⁶，a⁶·a⁴=a¹⁰。"
      },
      {
       "stem": "求函数 y=3ˣ 的定义域与值域。",
       "options": [],
       "answer": "定义域 R，值域 (0,+∞)",
       "analysis": "指数定义域为 R；3ˣ>0，故值域 (0,+∞)。"
      },
      {
       "stem": "解方程 2ˣ=8。",
       "options": [],
       "answer": "x=3",
       "analysis": "8=2³，故 x=3。"
      }
     ]
    }
   ]
  },
  {
   "title": "数学 模拟训练卷（第 2 套）",
   "meta": "数学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "函数 f(x)=√(x-1) 的定义域为",
       "options": [
        "[1,+∞)",
        "(1,+∞)",
        "(-∞,1]",
        "R"
       ],
       "answer": "A",
       "analysis": "根号内 x-1≥0 ⇒ x≥1。"
      },
      {
       "stem": "sin(π/6) 的值为",
       "options": [
        "1/2",
        "√3/2",
        "√2/2",
        "1"
       ],
       "answer": "A",
       "analysis": "特殊角 sin30°=1/2。"
      },
      {
       "stem": "若 2ᵃ=5ᵇ=10，则 1/a+1/b =",
       "options": [
        "1",
        "2",
        "1/2",
        "0"
       ],
       "answer": "A",
       "analysis": "2ᵃ=10⇒a=log₂10，1/a=lg2；同理 1/b=lg5；和=lg10=1。"
      },
      {
       "stem": "下列函数中为偶函数的是",
       "options": [
        "y=x³",
        "y=x²+1",
        "y=1/x",
        "y=x+1"
       ],
       "answer": "B",
       "analysis": "f(-x)=(-x)²+1=x²+1=f(x)，且定义域 R 对称。"
      },
      {
       "stem": "log₂8 + log₂(1/4) =",
       "options": [
        "1",
        "2",
        "0",
        "-1"
       ],
       "answer": "A",
       "analysis": "log₂8=3，log₂(1/4)=log₂(2⁻²)=-2，和为 1。"
      },
      {
       "stem": "不等式 x²-3x+2<0 的解集为",
       "options": [
        "[1,2]",
        "(1,2)",
        "(-∞,1)∪(2,+∞)",
        "{1,2}"
       ],
       "answer": "B",
       "analysis": "方程根 1、2，开口向上，小于 0 取两根之间。"
      },
      {
       "stem": "函数 y=sin x 的最小正周期为",
       "options": [
        "π/2",
        "π",
        "2π",
        "4π"
       ],
       "answer": "C",
       "analysis": "正弦函数基本周期 2π。"
      },
      {
       "stem": "若 f(x)=x²，则 f(-2) =",
       "options": [
        "4",
        "-4",
        "2",
        "-2"
       ],
       "answer": "A",
       "analysis": "(-2)²=4。"
      },
      {
       "stem": "0.5⁻² 的值为",
       "options": [
        "4",
        "0.25",
        "2",
        "0.5"
       ],
       "answer": "A",
       "analysis": "(1/2)⁻²=2²=4。"
      },
      {
       "stem": "函数 y=2ˣ 是",
       "options": [
        "增函数",
        "减函数",
        "偶函数",
        "奇函数"
       ],
       "answer": "A",
       "analysis": "底数 2>1，指数函数单调递增。"
      },
      {
       "stem": "cos(π) 的值为",
       "options": [
        "-1",
        "0",
        "1",
        "√3/2"
       ],
       "answer": "A",
       "analysis": "特殊角 cos180°=-1。"
      },
      {
       "stem": "不等式 2x-1>3 的解集为",
       "options": [
        "x>2",
        "x<2",
        "x>1",
        "x<1"
       ],
       "answer": "A",
       "analysis": "2x>4 ⇒ x>2。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 5 分，共 4 题，20 分）",
     "items": [
      {
       "stem": "集合 {1,2,3} 的子集个数为 ____。",
       "options": [],
       "answer": "8",
       "analysis": "n 元集子集数 2ⁿ=2³=8。"
      },
      {
       "stem": "f(x)=x+1，则 f(3)= ____。",
       "options": [],
       "answer": "4",
       "analysis": "3+1=4。"
      },
      {
       "stem": "函数 y=x² 在区间 [0,2] 上的值域为 ____。",
       "options": [],
       "answer": "[0,4]",
       "analysis": "x∈[0,2] 时 x²∈[0,4]。"
      },
      {
       "stem": "300° 化为弧度是 ____。",
       "options": [],
       "answer": "5π/3",
       "analysis": "300°×π/180°=5π/3。"
      }
     ]
    },
    {
     "name": "三、解答题（共 4 题，50 分，写出必要步骤）",
     "items": [
      {
       "stem": "化简：(a²)³·a⁴。",
       "options": [],
       "answer": "a¹⁰",
       "analysis": "(a²)³=a⁶，a⁶·a⁴=a¹⁰。"
      },
      {
       "stem": "求函数 y=3ˣ 的定义域与值域。",
       "options": [],
       "answer": "定义域 R，值域 (0,+∞)",
       "analysis": "指数定义域为 R；3ˣ>0，故值域 (0,+∞)。"
      },
      {
       "stem": "解方程 2ˣ=8。",
       "options": [],
       "answer": "x=3",
       "analysis": "8=2³，故 x=3。"
      },
      {
       "stem": "已知 sinα=3/5，α∈(0,π/2)，求 cosα。",
       "options": [],
       "answer": "cosα=4/5",
       "analysis": "由 sin²α+cos²α=1，cosα=√(1-9/25)=4/5（α 在第一象限取正）。"
      }
     ]
    }
   ]
  },
  {
   "title": "数学 模拟训练卷（第 3 套）",
   "meta": "数学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "sin(π/6) 的值为",
       "options": [
        "1/2",
        "√3/2",
        "√2/2",
        "1"
       ],
       "answer": "A",
       "analysis": "特殊角 sin30°=1/2。"
      },
      {
       "stem": "若 2ᵃ=5ᵇ=10，则 1/a+1/b =",
       "options": [
        "1",
        "2",
        "1/2",
        "0"
       ],
       "answer": "A",
       "analysis": "2ᵃ=10⇒a=log₂10，1/a=lg2；同理 1/b=lg5；和=lg10=1。"
      },
      {
       "stem": "下列函数中为偶函数的是",
       "options": [
        "y=x³",
        "y=x²+1",
        "y=1/x",
        "y=x+1"
       ],
       "answer": "B",
       "analysis": "f(-x)=(-x)²+1=x²+1=f(x)，且定义域 R 对称。"
      },
      {
       "stem": "log₂8 + log₂(1/4) =",
       "options": [
        "1",
        "2",
        "0",
        "-1"
       ],
       "answer": "A",
       "analysis": "log₂8=3，log₂(1/4)=log₂(2⁻²)=-2，和为 1。"
      },
      {
       "stem": "不等式 x²-3x+2<0 的解集为",
       "options": [
        "[1,2]",
        "(1,2)",
        "(-∞,1)∪(2,+∞)",
        "{1,2}"
       ],
       "answer": "B",
       "analysis": "方程根 1、2，开口向上，小于 0 取两根之间。"
      },
      {
       "stem": "函数 y=sin x 的最小正周期为",
       "options": [
        "π/2",
        "π",
        "2π",
        "4π"
       ],
       "answer": "C",
       "analysis": "正弦函数基本周期 2π。"
      },
      {
       "stem": "若 f(x)=x²，则 f(-2) =",
       "options": [
        "4",
        "-4",
        "2",
        "-2"
       ],
       "answer": "A",
       "analysis": "(-2)²=4。"
      },
      {
       "stem": "0.5⁻² 的值为",
       "options": [
        "4",
        "0.25",
        "2",
        "0.5"
       ],
       "answer": "A",
       "analysis": "(1/2)⁻²=2²=4。"
      },
      {
       "stem": "函数 y=2ˣ 是",
       "options": [
        "增函数",
        "减函数",
        "偶函数",
        "奇函数"
       ],
       "answer": "A",
       "analysis": "底数 2>1，指数函数单调递增。"
      },
      {
       "stem": "cos(π) 的值为",
       "options": [
        "-1",
        "0",
        "1",
        "√3/2"
       ],
       "answer": "A",
       "analysis": "特殊角 cos180°=-1。"
      },
      {
       "stem": "不等式 2x-1>3 的解集为",
       "options": [
        "x>2",
        "x<2",
        "x>1",
        "x<1"
       ],
       "answer": "A",
       "analysis": "2x>4 ⇒ x>2。"
      },
      {
       "stem": "若 a<b<0，则 a² 与 b² 的大小关系是",
       "options": [
        "a²>b²",
        "a²<b²",
        "a²=b²",
        "无法判断"
       ],
       "answer": "A",
       "analysis": "a、b 均负，|a|>|b|，平方后 a²>b²。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 5 分，共 4 题，20 分）",
     "items": [
      {
       "stem": "f(x)=x+1，则 f(3)= ____。",
       "options": [],
       "answer": "4",
       "analysis": "3+1=4。"
      },
      {
       "stem": "函数 y=x² 在区间 [0,2] 上的值域为 ____。",
       "options": [],
       "answer": "[0,4]",
       "analysis": "x∈[0,2] 时 x²∈[0,4]。"
      },
      {
       "stem": "300° 化为弧度是 ____。",
       "options": [],
       "answer": "5π/3",
       "analysis": "300°×π/180°=5π/3。"
      },
      {
       "stem": "若 a>0,b>0 且 a+b=4，则 ab 的最大值为 ____。",
       "options": [],
       "answer": "4",
       "analysis": "ab≤((a+b)/2)²=4，当 a=b=2 取等。"
      }
     ]
    },
    {
     "name": "三、解答题（共 4 题，50 分，写出必要步骤）",
     "items": [
      {
       "stem": "求函数 y=3ˣ 的定义域与值域。",
       "options": [],
       "answer": "定义域 R，值域 (0,+∞)",
       "analysis": "指数定义域为 R；3ˣ>0，故值域 (0,+∞)。"
      },
      {
       "stem": "解方程 2ˣ=8。",
       "options": [],
       "answer": "x=3",
       "analysis": "8=2³，故 x=3。"
      },
      {
       "stem": "已知 sinα=3/5，α∈(0,π/2)，求 cosα。",
       "options": [],
       "answer": "cosα=4/5",
       "analysis": "由 sin²α+cos²α=1，cosα=√(1-9/25)=4/5（α 在第一象限取正）。"
      },
      {
       "stem": "解不等式组：{x+1>0，2x-1≤3}。",
       "options": [],
       "answer": "(-1,2]",
       "analysis": "x>-1 且 x≤2，合并得 -1<x≤2。"
      }
     ]
    }
   ]
  },
  {
   "title": "数学 模拟训练卷（第 4 套）",
   "meta": "数学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "若 2ᵃ=5ᵇ=10，则 1/a+1/b =",
       "options": [
        "1",
        "2",
        "1/2",
        "0"
       ],
       "answer": "A",
       "analysis": "2ᵃ=10⇒a=log₂10，1/a=lg2；同理 1/b=lg5；和=lg10=1。"
      },
      {
       "stem": "下列函数中为偶函数的是",
       "options": [
        "y=x³",
        "y=x²+1",
        "y=1/x",
        "y=x+1"
       ],
       "answer": "B",
       "analysis": "f(-x)=(-x)²+1=x²+1=f(x)，且定义域 R 对称。"
      },
      {
       "stem": "log₂8 + log₂(1/4) =",
       "options": [
        "1",
        "2",
        "0",
        "-1"
       ],
       "answer": "A",
       "analysis": "log₂8=3，log₂(1/4)=log₂(2⁻²)=-2，和为 1。"
      },
      {
       "stem": "不等式 x²-3x+2<0 的解集为",
       "options": [
        "[1,2]",
        "(1,2)",
        "(-∞,1)∪(2,+∞)",
        "{1,2}"
       ],
       "answer": "B",
       "analysis": "方程根 1、2，开口向上，小于 0 取两根之间。"
      },
      {
       "stem": "函数 y=sin x 的最小正周期为",
       "options": [
        "π/2",
        "π",
        "2π",
        "4π"
       ],
       "answer": "C",
       "analysis": "正弦函数基本周期 2π。"
      },
      {
       "stem": "若 f(x)=x²，则 f(-2) =",
       "options": [
        "4",
        "-4",
        "2",
        "-2"
       ],
       "answer": "A",
       "analysis": "(-2)²=4。"
      },
      {
       "stem": "0.5⁻² 的值为",
       "options": [
        "4",
        "0.25",
        "2",
        "0.5"
       ],
       "answer": "A",
       "analysis": "(1/2)⁻²=2²=4。"
      },
      {
       "stem": "函数 y=2ˣ 是",
       "options": [
        "增函数",
        "减函数",
        "偶函数",
        "奇函数"
       ],
       "answer": "A",
       "analysis": "底数 2>1，指数函数单调递增。"
      },
      {
       "stem": "cos(π) 的值为",
       "options": [
        "-1",
        "0",
        "1",
        "√3/2"
       ],
       "answer": "A",
       "analysis": "特殊角 cos180°=-1。"
      },
      {
       "stem": "不等式 2x-1>3 的解集为",
       "options": [
        "x>2",
        "x<2",
        "x>1",
        "x<1"
       ],
       "answer": "A",
       "analysis": "2x>4 ⇒ x>2。"
      },
      {
       "stem": "若 a<b<0，则 a² 与 b² 的大小关系是",
       "options": [
        "a²>b²",
        "a²<b²",
        "a²=b²",
        "无法判断"
       ],
       "answer": "A",
       "analysis": "a、b 均负，|a|>|b|，平方后 a²>b²。"
      },
      {
       "stem": "函数 y=ln x 的定义域为",
       "options": [
        "(0,+∞)",
        "[0,+∞)",
        "R",
        "(-∞,0)"
       ],
       "answer": "A",
       "analysis": "真数必须大于 0。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 5 分，共 4 题，20 分）",
     "items": [
      {
       "stem": "函数 y=x² 在区间 [0,2] 上的值域为 ____。",
       "options": [],
       "answer": "[0,4]",
       "analysis": "x∈[0,2] 时 x²∈[0,4]。"
      },
      {
       "stem": "300° 化为弧度是 ____。",
       "options": [],
       "answer": "5π/3",
       "analysis": "300°×π/180°=5π/3。"
      },
      {
       "stem": "若 a>0,b>0 且 a+b=4，则 ab 的最大值为 ____。",
       "options": [],
       "answer": "4",
       "analysis": "ab≤((a+b)/2)²=4，当 a=b=2 取等。"
      },
      {
       "stem": "log₃9 = ____。",
       "options": [],
       "answer": "2",
       "analysis": "3²=9，故对数值为 2。"
      }
     ]
    },
    {
     "name": "三、解答题（共 4 题，50 分，写出必要步骤）",
     "items": [
      {
       "stem": "解方程 2ˣ=8。",
       "options": [],
       "answer": "x=3",
       "analysis": "8=2³，故 x=3。"
      },
      {
       "stem": "已知 sinα=3/5，α∈(0,π/2)，求 cosα。",
       "options": [],
       "answer": "cosα=4/5",
       "analysis": "由 sin²α+cos²α=1，cosα=√(1-9/25)=4/5（α 在第一象限取正）。"
      },
      {
       "stem": "解不等式组：{x+1>0，2x-1≤3}。",
       "options": [],
       "answer": "(-1,2]",
       "analysis": "x>-1 且 x≤2，合并得 -1<x≤2。"
      },
      {
       "stem": "解一元二次不等式 x²-5x+6<0。",
       "options": [],
       "answer": "解集为 (2,3)",
       "analysis": "因式分解 (x-2)(x-3)<0，开口向上，小于 0 取两根之间，得 2<x<3。"
      }
     ]
    }
   ]
  },
  {
   "title": "数学 模拟训练卷（第 5 套）",
   "meta": "数学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "下列函数中为偶函数的是",
       "options": [
        "y=x³",
        "y=x²+1",
        "y=1/x",
        "y=x+1"
       ],
       "answer": "B",
       "analysis": "f(-x)=(-x)²+1=x²+1=f(x)，且定义域 R 对称。"
      },
      {
       "stem": "log₂8 + log₂(1/4) =",
       "options": [
        "1",
        "2",
        "0",
        "-1"
       ],
       "answer": "A",
       "analysis": "log₂8=3，log₂(1/4)=log₂(2⁻²)=-2，和为 1。"
      },
      {
       "stem": "不等式 x²-3x+2<0 的解集为",
       "options": [
        "[1,2]",
        "(1,2)",
        "(-∞,1)∪(2,+∞)",
        "{1,2}"
       ],
       "answer": "B",
       "analysis": "方程根 1、2，开口向上，小于 0 取两根之间。"
      },
      {
       "stem": "函数 y=sin x 的最小正周期为",
       "options": [
        "π/2",
        "π",
        "2π",
        "4π"
       ],
       "answer": "C",
       "analysis": "正弦函数基本周期 2π。"
      },
      {
       "stem": "若 f(x)=x²，则 f(-2) =",
       "options": [
        "4",
        "-4",
        "2",
        "-2"
       ],
       "answer": "A",
       "analysis": "(-2)²=4。"
      },
      {
       "stem": "0.5⁻² 的值为",
       "options": [
        "4",
        "0.25",
        "2",
        "0.5"
       ],
       "answer": "A",
       "analysis": "(1/2)⁻²=2²=4。"
      },
      {
       "stem": "函数 y=2ˣ 是",
       "options": [
        "增函数",
        "减函数",
        "偶函数",
        "奇函数"
       ],
       "answer": "A",
       "analysis": "底数 2>1，指数函数单调递增。"
      },
      {
       "stem": "cos(π) 的值为",
       "options": [
        "-1",
        "0",
        "1",
        "√3/2"
       ],
       "answer": "A",
       "analysis": "特殊角 cos180°=-1。"
      },
      {
       "stem": "不等式 2x-1>3 的解集为",
       "options": [
        "x>2",
        "x<2",
        "x>1",
        "x<1"
       ],
       "answer": "A",
       "analysis": "2x>4 ⇒ x>2。"
      },
      {
       "stem": "若 a<b<0，则 a² 与 b² 的大小关系是",
       "options": [
        "a²>b²",
        "a²<b²",
        "a²=b²",
        "无法判断"
       ],
       "answer": "A",
       "analysis": "a、b 均负，|a|>|b|，平方后 a²>b²。"
      },
      {
       "stem": "函数 y=ln x 的定义域为",
       "options": [
        "(0,+∞)",
        "[0,+∞)",
        "R",
        "(-∞,0)"
       ],
       "answer": "A",
       "analysis": "真数必须大于 0。"
      },
      {
       "stem": "函数 f(x)=x³ 是",
       "options": [
        "奇函数",
        "偶函数",
        "非奇非偶",
        "既奇又偶"
       ],
       "answer": "A",
       "analysis": "f(-x)=(-x)³=-x³=-f(x)。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 5 分，共 4 题，20 分）",
     "items": [
      {
       "stem": "300° 化为弧度是 ____。",
       "options": [],
       "answer": "5π/3",
       "analysis": "300°×π/180°=5π/3。"
      },
      {
       "stem": "若 a>0,b>0 且 a+b=4，则 ab 的最大值为 ____。",
       "options": [],
       "answer": "4",
       "analysis": "ab≤((a+b)/2)²=4，当 a=b=2 取等。"
      },
      {
       "stem": "log₃9 = ____。",
       "options": [],
       "answer": "2",
       "analysis": "3²=9，故对数值为 2。"
      },
      {
       "stem": "sin(π/2) = ____。",
       "options": [],
       "answer": "1",
       "analysis": "特殊角 sin90°=1。"
      }
     ]
    },
    {
     "name": "三、解答题（共 4 题，50 分，写出必要步骤）",
     "items": [
      {
       "stem": "已知 sinα=3/5，α∈(0,π/2)，求 cosα。",
       "options": [],
       "answer": "cosα=4/5",
       "analysis": "由 sin²α+cos²α=1，cosα=√(1-9/25)=4/5（α 在第一象限取正）。"
      },
      {
       "stem": "解不等式组：{x+1>0，2x-1≤3}。",
       "options": [],
       "answer": "(-1,2]",
       "analysis": "x>-1 且 x≤2，合并得 -1<x≤2。"
      },
      {
       "stem": "解一元二次不等式 x²-5x+6<0。",
       "options": [],
       "answer": "解集为 (2,3)",
       "analysis": "因式分解 (x-2)(x-3)<0，开口向上，小于 0 取两根之间，得 2<x<3。"
      },
      {
       "stem": "求值：log₂(8×4)。",
       "options": [],
       "answer": "5",
       "analysis": "8×4=32=2⁵，故 log₂32=5。"
      }
     ]
    }
   ]
  },
  {
   "title": "数学 模拟训练卷（第 6 套）",
   "meta": "数学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "log₂8 + log₂(1/4) =",
       "options": [
        "1",
        "2",
        "0",
        "-1"
       ],
       "answer": "A",
       "analysis": "log₂8=3，log₂(1/4)=log₂(2⁻²)=-2，和为 1。"
      },
      {
       "stem": "不等式 x²-3x+2<0 的解集为",
       "options": [
        "[1,2]",
        "(1,2)",
        "(-∞,1)∪(2,+∞)",
        "{1,2}"
       ],
       "answer": "B",
       "analysis": "方程根 1、2，开口向上，小于 0 取两根之间。"
      },
      {
       "stem": "函数 y=sin x 的最小正周期为",
       "options": [
        "π/2",
        "π",
        "2π",
        "4π"
       ],
       "answer": "C",
       "analysis": "正弦函数基本周期 2π。"
      },
      {
       "stem": "若 f(x)=x²，则 f(-2) =",
       "options": [
        "4",
        "-4",
        "2",
        "-2"
       ],
       "answer": "A",
       "analysis": "(-2)²=4。"
      },
      {
       "stem": "0.5⁻² 的值为",
       "options": [
        "4",
        "0.25",
        "2",
        "0.5"
       ],
       "answer": "A",
       "analysis": "(1/2)⁻²=2²=4。"
      },
      {
       "stem": "函数 y=2ˣ 是",
       "options": [
        "增函数",
        "减函数",
        "偶函数",
        "奇函数"
       ],
       "answer": "A",
       "analysis": "底数 2>1，指数函数单调递增。"
      },
      {
       "stem": "cos(π) 的值为",
       "options": [
        "-1",
        "0",
        "1",
        "√3/2"
       ],
       "answer": "A",
       "analysis": "特殊角 cos180°=-1。"
      },
      {
       "stem": "不等式 2x-1>3 的解集为",
       "options": [
        "x>2",
        "x<2",
        "x>1",
        "x<1"
       ],
       "answer": "A",
       "analysis": "2x>4 ⇒ x>2。"
      },
      {
       "stem": "若 a<b<0，则 a² 与 b² 的大小关系是",
       "options": [
        "a²>b²",
        "a²<b²",
        "a²=b²",
        "无法判断"
       ],
       "answer": "A",
       "analysis": "a、b 均负，|a|>|b|，平方后 a²>b²。"
      },
      {
       "stem": "函数 y=ln x 的定义域为",
       "options": [
        "(0,+∞)",
        "[0,+∞)",
        "R",
        "(-∞,0)"
       ],
       "answer": "A",
       "analysis": "真数必须大于 0。"
      },
      {
       "stem": "函数 f(x)=x³ 是",
       "options": [
        "奇函数",
        "偶函数",
        "非奇非偶",
        "既奇又偶"
       ],
       "answer": "A",
       "analysis": "f(-x)=(-x)³=-x³=-f(x)。"
      },
      {
       "stem": "已知集合 A={x|x²-x-2<0}，B={-1,0,1}，则 A∩B =",
       "options": [
        "{-1,0}",
        "{0,1}",
        "{-1,0,1}",
        "∅"
       ],
       "answer": "B",
       "analysis": "x²-x-2<0 ⇒ -1<x<2，A=(-1,2)，与 B 交集为 {0,1}。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 5 分，共 4 题，20 分）",
     "items": [
      {
       "stem": "若 a>0,b>0 且 a+b=4，则 ab 的最大值为 ____。",
       "options": [],
       "answer": "4",
       "analysis": "ab≤((a+b)/2)²=4，当 a=b=2 取等。"
      },
      {
       "stem": "log₃9 = ____。",
       "options": [],
       "answer": "2",
       "analysis": "3²=9，故对数值为 2。"
      },
      {
       "stem": "sin(π/2) = ____。",
       "options": [],
       "answer": "1",
       "analysis": "特殊角 sin90°=1。"
      },
      {
       "stem": "2³ × 2⁴ = ____。",
       "options": [],
       "answer": "128",
       "analysis": "同底数相乘指数相加，2⁷=128。"
      }
     ]
    },
    {
     "name": "三、解答题（共 4 题，50 分，写出必要步骤）",
     "items": [
      {
       "stem": "解不等式组：{x+1>0，2x-1≤3}。",
       "options": [],
       "answer": "(-1,2]",
       "analysis": "x>-1 且 x≤2，合并得 -1<x≤2。"
      },
      {
       "stem": "解一元二次不等式 x²-5x+6<0。",
       "options": [],
       "answer": "解集为 (2,3)",
       "analysis": "因式分解 (x-2)(x-3)<0，开口向上，小于 0 取两根之间，得 2<x<3。"
      },
      {
       "stem": "求值：log₂(8×4)。",
       "options": [],
       "answer": "5",
       "analysis": "8×4=32=2⁵，故 log₂32=5。"
      },
      {
       "stem": "已知函数 f(x)=2x+1，求 f(0) 与 f(1)。",
       "options": [],
       "answer": "f(0)=1，f(1)=3",
       "analysis": "代入：f(0)=1，f(1)=3。"
      }
     ]
    }
   ]
  },
  {
   "title": "数学 模拟训练卷（第 7 套）",
   "meta": "数学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "不等式 x²-3x+2<0 的解集为",
       "options": [
        "[1,2]",
        "(1,2)",
        "(-∞,1)∪(2,+∞)",
        "{1,2}"
       ],
       "answer": "B",
       "analysis": "方程根 1、2，开口向上，小于 0 取两根之间。"
      },
      {
       "stem": "函数 y=sin x 的最小正周期为",
       "options": [
        "π/2",
        "π",
        "2π",
        "4π"
       ],
       "answer": "C",
       "analysis": "正弦函数基本周期 2π。"
      },
      {
       "stem": "若 f(x)=x²，则 f(-2) =",
       "options": [
        "4",
        "-4",
        "2",
        "-2"
       ],
       "answer": "A",
       "analysis": "(-2)²=4。"
      },
      {
       "stem": "0.5⁻² 的值为",
       "options": [
        "4",
        "0.25",
        "2",
        "0.5"
       ],
       "answer": "A",
       "analysis": "(1/2)⁻²=2²=4。"
      },
      {
       "stem": "函数 y=2ˣ 是",
       "options": [
        "增函数",
        "减函数",
        "偶函数",
        "奇函数"
       ],
       "answer": "A",
       "analysis": "底数 2>1，指数函数单调递增。"
      },
      {
       "stem": "cos(π) 的值为",
       "options": [
        "-1",
        "0",
        "1",
        "√3/2"
       ],
       "answer": "A",
       "analysis": "特殊角 cos180°=-1。"
      },
      {
       "stem": "不等式 2x-1>3 的解集为",
       "options": [
        "x>2",
        "x<2",
        "x>1",
        "x<1"
       ],
       "answer": "A",
       "analysis": "2x>4 ⇒ x>2。"
      },
      {
       "stem": "若 a<b<0，则 a² 与 b² 的大小关系是",
       "options": [
        "a²>b²",
        "a²<b²",
        "a²=b²",
        "无法判断"
       ],
       "answer": "A",
       "analysis": "a、b 均负，|a|>|b|，平方后 a²>b²。"
      },
      {
       "stem": "函数 y=ln x 的定义域为",
       "options": [
        "(0,+∞)",
        "[0,+∞)",
        "R",
        "(-∞,0)"
       ],
       "answer": "A",
       "analysis": "真数必须大于 0。"
      },
      {
       "stem": "函数 f(x)=x³ 是",
       "options": [
        "奇函数",
        "偶函数",
        "非奇非偶",
        "既奇又偶"
       ],
       "answer": "A",
       "analysis": "f(-x)=(-x)³=-x³=-f(x)。"
      },
      {
       "stem": "已知集合 A={x|x²-x-2<0}，B={-1,0,1}，则 A∩B =",
       "options": [
        "{-1,0}",
        "{0,1}",
        "{-1,0,1}",
        "∅"
       ],
       "answer": "B",
       "analysis": "x²-x-2<0 ⇒ -1<x<2，A=(-1,2)，与 B 交集为 {0,1}。"
      },
      {
       "stem": "函数 f(x)=√(x-1) 的定义域为",
       "options": [
        "[1,+∞)",
        "(1,+∞)",
        "(-∞,1]",
        "R"
       ],
       "answer": "A",
       "analysis": "根号内 x-1≥0 ⇒ x≥1。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 5 分，共 4 题，20 分）",
     "items": [
      {
       "stem": "log₃9 = ____。",
       "options": [],
       "answer": "2",
       "analysis": "3²=9，故对数值为 2。"
      },
      {
       "stem": "sin(π/2) = ____。",
       "options": [],
       "answer": "1",
       "analysis": "特殊角 sin90°=1。"
      },
      {
       "stem": "2³ × 2⁴ = ____。",
       "options": [],
       "answer": "128",
       "analysis": "同底数相乘指数相加，2⁷=128。"
      },
      {
       "stem": "集合 {1,2,3} 的子集个数为 ____。",
       "options": [],
       "answer": "8",
       "analysis": "n 元集子集数 2ⁿ=2³=8。"
      }
     ]
    },
    {
     "name": "三、解答题（共 4 题，50 分，写出必要步骤）",
     "items": [
      {
       "stem": "解一元二次不等式 x²-5x+6<0。",
       "options": [],
       "answer": "解集为 (2,3)",
       "analysis": "因式分解 (x-2)(x-3)<0，开口向上，小于 0 取两根之间，得 2<x<3。"
      },
      {
       "stem": "求值：log₂(8×4)。",
       "options": [],
       "answer": "5",
       "analysis": "8×4=32=2⁵，故 log₂32=5。"
      },
      {
       "stem": "已知函数 f(x)=2x+1，求 f(0) 与 f(1)。",
       "options": [],
       "answer": "f(0)=1，f(1)=3",
       "analysis": "代入：f(0)=1，f(1)=3。"
      },
      {
       "stem": "化简：(a²)³·a⁴。",
       "options": [],
       "answer": "a¹⁰",
       "analysis": "(a²)³=a⁶，a⁶·a⁴=a¹⁰。"
      }
     ]
    }
   ]
  },
  {
   "title": "数学 模拟训练卷（第 8 套）",
   "meta": "数学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "函数 y=sin x 的最小正周期为",
       "options": [
        "π/2",
        "π",
        "2π",
        "4π"
       ],
       "answer": "C",
       "analysis": "正弦函数基本周期 2π。"
      },
      {
       "stem": "若 f(x)=x²，则 f(-2) =",
       "options": [
        "4",
        "-4",
        "2",
        "-2"
       ],
       "answer": "A",
       "analysis": "(-2)²=4。"
      },
      {
       "stem": "0.5⁻² 的值为",
       "options": [
        "4",
        "0.25",
        "2",
        "0.5"
       ],
       "answer": "A",
       "analysis": "(1/2)⁻²=2²=4。"
      },
      {
       "stem": "函数 y=2ˣ 是",
       "options": [
        "增函数",
        "减函数",
        "偶函数",
        "奇函数"
       ],
       "answer": "A",
       "analysis": "底数 2>1，指数函数单调递增。"
      },
      {
       "stem": "cos(π) 的值为",
       "options": [
        "-1",
        "0",
        "1",
        "√3/2"
       ],
       "answer": "A",
       "analysis": "特殊角 cos180°=-1。"
      },
      {
       "stem": "不等式 2x-1>3 的解集为",
       "options": [
        "x>2",
        "x<2",
        "x>1",
        "x<1"
       ],
       "answer": "A",
       "analysis": "2x>4 ⇒ x>2。"
      },
      {
       "stem": "若 a<b<0，则 a² 与 b² 的大小关系是",
       "options": [
        "a²>b²",
        "a²<b²",
        "a²=b²",
        "无法判断"
       ],
       "answer": "A",
       "analysis": "a、b 均负，|a|>|b|，平方后 a²>b²。"
      },
      {
       "stem": "函数 y=ln x 的定义域为",
       "options": [
        "(0,+∞)",
        "[0,+∞)",
        "R",
        "(-∞,0)"
       ],
       "answer": "A",
       "analysis": "真数必须大于 0。"
      },
      {
       "stem": "函数 f(x)=x³ 是",
       "options": [
        "奇函数",
        "偶函数",
        "非奇非偶",
        "既奇又偶"
       ],
       "answer": "A",
       "analysis": "f(-x)=(-x)³=-x³=-f(x)。"
      },
      {
       "stem": "已知集合 A={x|x²-x-2<0}，B={-1,0,1}，则 A∩B =",
       "options": [
        "{-1,0}",
        "{0,1}",
        "{-1,0,1}",
        "∅"
       ],
       "answer": "B",
       "analysis": "x²-x-2<0 ⇒ -1<x<2，A=(-1,2)，与 B 交集为 {0,1}。"
      },
      {
       "stem": "函数 f(x)=√(x-1) 的定义域为",
       "options": [
        "[1,+∞)",
        "(1,+∞)",
        "(-∞,1]",
        "R"
       ],
       "answer": "A",
       "analysis": "根号内 x-1≥0 ⇒ x≥1。"
      },
      {
       "stem": "sin(π/6) 的值为",
       "options": [
        "1/2",
        "√3/2",
        "√2/2",
        "1"
       ],
       "answer": "A",
       "analysis": "特殊角 sin30°=1/2。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 5 分，共 4 题，20 分）",
     "items": [
      {
       "stem": "sin(π/2) = ____。",
       "options": [],
       "answer": "1",
       "analysis": "特殊角 sin90°=1。"
      },
      {
       "stem": "2³ × 2⁴ = ____。",
       "options": [],
       "answer": "128",
       "analysis": "同底数相乘指数相加，2⁷=128。"
      },
      {
       "stem": "集合 {1,2,3} 的子集个数为 ____。",
       "options": [],
       "answer": "8",
       "analysis": "n 元集子集数 2ⁿ=2³=8。"
      },
      {
       "stem": "f(x)=x+1，则 f(3)= ____。",
       "options": [],
       "answer": "4",
       "analysis": "3+1=4。"
      }
     ]
    },
    {
     "name": "三、解答题（共 4 题，50 分，写出必要步骤）",
     "items": [
      {
       "stem": "求值：log₂(8×4)。",
       "options": [],
       "answer": "5",
       "analysis": "8×4=32=2⁵，故 log₂32=5。"
      },
      {
       "stem": "已知函数 f(x)=2x+1，求 f(0) 与 f(1)。",
       "options": [],
       "answer": "f(0)=1，f(1)=3",
       "analysis": "代入：f(0)=1，f(1)=3。"
      },
      {
       "stem": "化简：(a²)³·a⁴。",
       "options": [],
       "answer": "a¹⁰",
       "analysis": "(a²)³=a⁶，a⁶·a⁴=a¹⁰。"
      },
      {
       "stem": "求函数 y=3ˣ 的定义域与值域。",
       "options": [],
       "answer": "定义域 R，值域 (0,+∞)",
       "analysis": "指数定义域为 R；3ˣ>0，故值域 (0,+∞)。"
      }
     ]
    }
   ]
  },
  {
   "title": "数学 模拟训练卷（第 9 套）",
   "meta": "数学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "若 f(x)=x²，则 f(-2) =",
       "options": [
        "4",
        "-4",
        "2",
        "-2"
       ],
       "answer": "A",
       "analysis": "(-2)²=4。"
      },
      {
       "stem": "0.5⁻² 的值为",
       "options": [
        "4",
        "0.25",
        "2",
        "0.5"
       ],
       "answer": "A",
       "analysis": "(1/2)⁻²=2²=4。"
      },
      {
       "stem": "函数 y=2ˣ 是",
       "options": [
        "增函数",
        "减函数",
        "偶函数",
        "奇函数"
       ],
       "answer": "A",
       "analysis": "底数 2>1，指数函数单调递增。"
      },
      {
       "stem": "cos(π) 的值为",
       "options": [
        "-1",
        "0",
        "1",
        "√3/2"
       ],
       "answer": "A",
       "analysis": "特殊角 cos180°=-1。"
      },
      {
       "stem": "不等式 2x-1>3 的解集为",
       "options": [
        "x>2",
        "x<2",
        "x>1",
        "x<1"
       ],
       "answer": "A",
       "analysis": "2x>4 ⇒ x>2。"
      },
      {
       "stem": "若 a<b<0，则 a² 与 b² 的大小关系是",
       "options": [
        "a²>b²",
        "a²<b²",
        "a²=b²",
        "无法判断"
       ],
       "answer": "A",
       "analysis": "a、b 均负，|a|>|b|，平方后 a²>b²。"
      },
      {
       "stem": "函数 y=ln x 的定义域为",
       "options": [
        "(0,+∞)",
        "[0,+∞)",
        "R",
        "(-∞,0)"
       ],
       "answer": "A",
       "analysis": "真数必须大于 0。"
      },
      {
       "stem": "函数 f(x)=x³ 是",
       "options": [
        "奇函数",
        "偶函数",
        "非奇非偶",
        "既奇又偶"
       ],
       "answer": "A",
       "analysis": "f(-x)=(-x)³=-x³=-f(x)。"
      },
      {
       "stem": "已知集合 A={x|x²-x-2<0}，B={-1,0,1}，则 A∩B =",
       "options": [
        "{-1,0}",
        "{0,1}",
        "{-1,0,1}",
        "∅"
       ],
       "answer": "B",
       "analysis": "x²-x-2<0 ⇒ -1<x<2，A=(-1,2)，与 B 交集为 {0,1}。"
      },
      {
       "stem": "函数 f(x)=√(x-1) 的定义域为",
       "options": [
        "[1,+∞)",
        "(1,+∞)",
        "(-∞,1]",
        "R"
       ],
       "answer": "A",
       "analysis": "根号内 x-1≥0 ⇒ x≥1。"
      },
      {
       "stem": "sin(π/6) 的值为",
       "options": [
        "1/2",
        "√3/2",
        "√2/2",
        "1"
       ],
       "answer": "A",
       "analysis": "特殊角 sin30°=1/2。"
      },
      {
       "stem": "若 2ᵃ=5ᵇ=10，则 1/a+1/b =",
       "options": [
        "1",
        "2",
        "1/2",
        "0"
       ],
       "answer": "A",
       "analysis": "2ᵃ=10⇒a=log₂10，1/a=lg2；同理 1/b=lg5；和=lg10=1。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 5 分，共 4 题，20 分）",
     "items": [
      {
       "stem": "2³ × 2⁴ = ____。",
       "options": [],
       "answer": "128",
       "analysis": "同底数相乘指数相加，2⁷=128。"
      },
      {
       "stem": "集合 {1,2,3} 的子集个数为 ____。",
       "options": [],
       "answer": "8",
       "analysis": "n 元集子集数 2ⁿ=2³=8。"
      },
      {
       "stem": "f(x)=x+1，则 f(3)= ____。",
       "options": [],
       "answer": "4",
       "analysis": "3+1=4。"
      },
      {
       "stem": "函数 y=x² 在区间 [0,2] 上的值域为 ____。",
       "options": [],
       "answer": "[0,4]",
       "analysis": "x∈[0,2] 时 x²∈[0,4]。"
      }
     ]
    },
    {
     "name": "三、解答题（共 4 题，50 分，写出必要步骤）",
     "items": [
      {
       "stem": "已知函数 f(x)=2x+1，求 f(0) 与 f(1)。",
       "options": [],
       "answer": "f(0)=1，f(1)=3",
       "analysis": "代入：f(0)=1，f(1)=3。"
      },
      {
       "stem": "化简：(a²)³·a⁴。",
       "options": [],
       "answer": "a¹⁰",
       "analysis": "(a²)³=a⁶，a⁶·a⁴=a¹⁰。"
      },
      {
       "stem": "求函数 y=3ˣ 的定义域与值域。",
       "options": [],
       "answer": "定义域 R，值域 (0,+∞)",
       "analysis": "指数定义域为 R；3ˣ>0，故值域 (0,+∞)。"
      },
      {
       "stem": "解方程 2ˣ=8。",
       "options": [],
       "answer": "x=3",
       "analysis": "8=2³，故 x=3。"
      }
     ]
    }
   ]
  },
  {
   "title": "数学 模拟训练卷（第 10 套）",
   "meta": "数学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "0.5⁻² 的值为",
       "options": [
        "4",
        "0.25",
        "2",
        "0.5"
       ],
       "answer": "A",
       "analysis": "(1/2)⁻²=2²=4。"
      },
      {
       "stem": "函数 y=2ˣ 是",
       "options": [
        "增函数",
        "减函数",
        "偶函数",
        "奇函数"
       ],
       "answer": "A",
       "analysis": "底数 2>1，指数函数单调递增。"
      },
      {
       "stem": "cos(π) 的值为",
       "options": [
        "-1",
        "0",
        "1",
        "√3/2"
       ],
       "answer": "A",
       "analysis": "特殊角 cos180°=-1。"
      },
      {
       "stem": "不等式 2x-1>3 的解集为",
       "options": [
        "x>2",
        "x<2",
        "x>1",
        "x<1"
       ],
       "answer": "A",
       "analysis": "2x>4 ⇒ x>2。"
      },
      {
       "stem": "若 a<b<0，则 a² 与 b² 的大小关系是",
       "options": [
        "a²>b²",
        "a²<b²",
        "a²=b²",
        "无法判断"
       ],
       "answer": "A",
       "analysis": "a、b 均负，|a|>|b|，平方后 a²>b²。"
      },
      {
       "stem": "函数 y=ln x 的定义域为",
       "options": [
        "(0,+∞)",
        "[0,+∞)",
        "R",
        "(-∞,0)"
       ],
       "answer": "A",
       "analysis": "真数必须大于 0。"
      },
      {
       "stem": "函数 f(x)=x³ 是",
       "options": [
        "奇函数",
        "偶函数",
        "非奇非偶",
        "既奇又偶"
       ],
       "answer": "A",
       "analysis": "f(-x)=(-x)³=-x³=-f(x)。"
      },
      {
       "stem": "已知集合 A={x|x²-x-2<0}，B={-1,0,1}，则 A∩B =",
       "options": [
        "{-1,0}",
        "{0,1}",
        "{-1,0,1}",
        "∅"
       ],
       "answer": "B",
       "analysis": "x²-x-2<0 ⇒ -1<x<2，A=(-1,2)，与 B 交集为 {0,1}。"
      },
      {
       "stem": "函数 f(x)=√(x-1) 的定义域为",
       "options": [
        "[1,+∞)",
        "(1,+∞)",
        "(-∞,1]",
        "R"
       ],
       "answer": "A",
       "analysis": "根号内 x-1≥0 ⇒ x≥1。"
      },
      {
       "stem": "sin(π/6) 的值为",
       "options": [
        "1/2",
        "√3/2",
        "√2/2",
        "1"
       ],
       "answer": "A",
       "analysis": "特殊角 sin30°=1/2。"
      },
      {
       "stem": "若 2ᵃ=5ᵇ=10，则 1/a+1/b =",
       "options": [
        "1",
        "2",
        "1/2",
        "0"
       ],
       "answer": "A",
       "analysis": "2ᵃ=10⇒a=log₂10，1/a=lg2；同理 1/b=lg5；和=lg10=1。"
      },
      {
       "stem": "下列函数中为偶函数的是",
       "options": [
        "y=x³",
        "y=x²+1",
        "y=1/x",
        "y=x+1"
       ],
       "answer": "B",
       "analysis": "f(-x)=(-x)²+1=x²+1=f(x)，且定义域 R 对称。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 5 分，共 4 题，20 分）",
     "items": [
      {
       "stem": "集合 {1,2,3} 的子集个数为 ____。",
       "options": [],
       "answer": "8",
       "analysis": "n 元集子集数 2ⁿ=2³=8。"
      },
      {
       "stem": "f(x)=x+1，则 f(3)= ____。",
       "options": [],
       "answer": "4",
       "analysis": "3+1=4。"
      },
      {
       "stem": "函数 y=x² 在区间 [0,2] 上的值域为 ____。",
       "options": [],
       "answer": "[0,4]",
       "analysis": "x∈[0,2] 时 x²∈[0,4]。"
      },
      {
       "stem": "300° 化为弧度是 ____。",
       "options": [],
       "answer": "5π/3",
       "analysis": "300°×π/180°=5π/3。"
      }
     ]
    },
    {
     "name": "三、解答题（共 4 题，50 分，写出必要步骤）",
     "items": [
      {
       "stem": "化简：(a²)³·a⁴。",
       "options": [],
       "answer": "a¹⁰",
       "analysis": "(a²)³=a⁶，a⁶·a⁴=a¹⁰。"
      },
      {
       "stem": "求函数 y=3ˣ 的定义域与值域。",
       "options": [],
       "answer": "定义域 R，值域 (0,+∞)",
       "analysis": "指数定义域为 R；3ˣ>0，故值域 (0,+∞)。"
      },
      {
       "stem": "解方程 2ˣ=8。",
       "options": [],
       "answer": "x=3",
       "analysis": "8=2³，故 x=3。"
      },
      {
       "stem": "已知 sinα=3/5，α∈(0,π/2)，求 cosα。",
       "options": [],
       "answer": "cosα=4/5",
       "analysis": "由 sin²α+cos²α=1，cosα=√(1-9/25)=4/5（α 在第一象限取正）。"
      }
     ]
    }
   ]
  }
 ],
 "物理": [
  {
   "title": "物理 模拟训练卷（第 1 套）",
   "meta": "物理 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 10 题，50 分）",
     "items": [
      {
       "stem": "下列物理量中属于标量的是",
       "options": [
        "位移",
        "速度",
        "加速度",
        "时间"
       ],
       "answer": "D",
       "analysis": "时间只有大小无方向，是标量。"
      },
      {
       "stem": "物体做匀速直线运动，速度 2 m/s，3 s 内位移为",
       "options": [
        "3 m",
        "6 m",
        "2 m",
        "5 m"
       ],
       "answer": "B",
       "analysis": "s=vt=2×3=6 m。"
      },
      {
       "stem": "加速度描述的是",
       "options": [
        "速度的大小",
        "速度变化的快慢",
        "位移的大小",
        "路程的长短"
       ],
       "answer": "B",
       "analysis": "加速度 a=Δv/Δt，反映速度变化快慢。"
      },
      {
       "stem": "自由落体加速度 g 约为",
       "options": [
        "9.8 m/s²",
        "3.0 m/s²",
        "6.0 m/s²",
        "1.0 m/s²"
       ],
       "answer": "A",
       "analysis": "地球表面附近 g≈9.8 m/s²。"
      },
      {
       "stem": "在 v-t 图像中，图线的斜率表示",
       "options": [
        "位移",
        "加速度",
        "速度",
        "时间"
       ],
       "answer": "B",
       "analysis": "v-t 图斜率 = Δv/Δt = 加速度。"
      },
      {
       "stem": "物体惯性大小取决于",
       "options": [
        "速度",
        "质量",
        "加速度",
        "受力"
       ],
       "answer": "B",
       "analysis": "质量是惯性大小的唯一量度。"
      },
      {
       "stem": "牛顿第一定律又被称为",
       "options": [
        "作用力定律",
        "惯性定律",
        "引力定律",
        "平衡定律"
       ],
       "answer": "B",
       "analysis": "牛顿第一定律阐明惯性，又称惯性定律。"
      },
      {
       "stem": "两个力 F₁=3 N、F₂=4 N，其合力大小可能为",
       "options": [
        "5 N",
        "8 N",
        "1 N",
        "0 N"
       ],
       "answer": "A",
       "analysis": "合力范围 |F₁-F₂|~F₁+F₂ 即 1~7 N，5 N 在内。"
      },
      {
       "stem": "滑动摩擦力的方向",
       "options": [
        "与运动方向相同",
        "与相对运动方向相反",
        "总竖直向上",
        "总水平向左"
       ],
       "answer": "B",
       "analysis": "摩擦力总是阻碍相对运动，与相对运动方向相反。"
      },
      {
       "stem": "研究地球绕太阳公转时，地球可视为",
       "options": [
        "质点",
        "刚体",
        "流体",
        "不能简化"
       ],
       "answer": "A",
       "analysis": "地球大小相对轨道半径可忽略，可视为质点。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 3 题，12 分）",
     "items": [
      {
       "stem": "打点计时器使用的电源若为交流 50 Hz，则打点周期为 ____ s。",
       "options": [],
       "answer": "0.02",
       "analysis": "T=1/f=1/50=0.02 s。"
      },
      {
       "stem": "国际单位制中，长度、质量、时间的基本单位分别是 ____、____、____。",
       "options": [],
       "answer": "米、千克、秒",
       "analysis": "SI 基本单位：长度—米(m)，质量—千克(kg)，时间—秒(s)。"
      },
      {
       "stem": "重力加速度的方向总是 ____。",
       "options": [],
       "answer": "竖直向下",
       "analysis": "重力方向竖直向下指向地心。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "验证力的平行四边形定则实验中使用 ____ 测量力的大小。",
       "options": [],
       "answer": "弹簧测力计",
       "analysis": "用两个弹簧测力计互成角度拉橡皮条，验证合力。"
      }
     ]
    },
    {
     "name": "四、计算与解答题（共 3 题，36 分）",
     "items": [
      {
       "stem": "物体以 v=5 m/s 做匀速直线运动，10 s 内位移多少？",
       "options": [],
       "answer": "s=50 m",
       "analysis": "s=vt=5×10=50 m。"
      },
      {
       "stem": "一物体初速为 0，加速度 a=3 m/s²，求 4 s 末的速度。",
       "options": [],
       "answer": "v=12 m/s",
       "analysis": "v=at=3×4=12 m/s。"
      },
      {
       "stem": "汽车以 20 m/s 行驶，急刹车加速度 -5 m/s²，求刹车距离。",
       "options": [],
       "answer": "s=40 m",
       "analysis": "由 v²-v₀²=2as，0-400=2(-5)s ⇒ s=40 m。"
      }
     ]
    }
   ]
  },
  {
   "title": "物理 模拟训练卷（第 2 套）",
   "meta": "物理 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 10 题，50 分）",
     "items": [
      {
       "stem": "物体做匀速直线运动，速度 2 m/s，3 s 内位移为",
       "options": [
        "3 m",
        "6 m",
        "2 m",
        "5 m"
       ],
       "answer": "B",
       "analysis": "s=vt=2×3=6 m。"
      },
      {
       "stem": "加速度描述的是",
       "options": [
        "速度的大小",
        "速度变化的快慢",
        "位移的大小",
        "路程的长短"
       ],
       "answer": "B",
       "analysis": "加速度 a=Δv/Δt，反映速度变化快慢。"
      },
      {
       "stem": "自由落体加速度 g 约为",
       "options": [
        "9.8 m/s²",
        "3.0 m/s²",
        "6.0 m/s²",
        "1.0 m/s²"
       ],
       "answer": "A",
       "analysis": "地球表面附近 g≈9.8 m/s²。"
      },
      {
       "stem": "在 v-t 图像中，图线的斜率表示",
       "options": [
        "位移",
        "加速度",
        "速度",
        "时间"
       ],
       "answer": "B",
       "analysis": "v-t 图斜率 = Δv/Δt = 加速度。"
      },
      {
       "stem": "物体惯性大小取决于",
       "options": [
        "速度",
        "质量",
        "加速度",
        "受力"
       ],
       "answer": "B",
       "analysis": "质量是惯性大小的唯一量度。"
      },
      {
       "stem": "牛顿第一定律又被称为",
       "options": [
        "作用力定律",
        "惯性定律",
        "引力定律",
        "平衡定律"
       ],
       "answer": "B",
       "analysis": "牛顿第一定律阐明惯性，又称惯性定律。"
      },
      {
       "stem": "两个力 F₁=3 N、F₂=4 N，其合力大小可能为",
       "options": [
        "5 N",
        "8 N",
        "1 N",
        "0 N"
       ],
       "answer": "A",
       "analysis": "合力范围 |F₁-F₂|~F₁+F₂ 即 1~7 N，5 N 在内。"
      },
      {
       "stem": "滑动摩擦力的方向",
       "options": [
        "与运动方向相同",
        "与相对运动方向相反",
        "总竖直向上",
        "总水平向左"
       ],
       "answer": "B",
       "analysis": "摩擦力总是阻碍相对运动，与相对运动方向相反。"
      },
      {
       "stem": "研究地球绕太阳公转时，地球可视为",
       "options": [
        "质点",
        "刚体",
        "流体",
        "不能简化"
       ],
       "answer": "A",
       "analysis": "地球大小相对轨道半径可忽略，可视为质点。"
      },
      {
       "stem": "匀加速直线运动位移公式为",
       "options": [
        "s=v₀t+½at²",
        "s=v₀t",
        "s=½at²",
        "s=v₀+a"
       ],
       "answer": "A",
       "analysis": "初速不为零的匀加速位移公式。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 3 题，12 分）",
     "items": [
      {
       "stem": "国际单位制中，长度、质量、时间的基本单位分别是 ____、____、____。",
       "options": [],
       "answer": "米、千克、秒",
       "analysis": "SI 基本单位：长度—米(m)，质量—千克(kg)，时间—秒(s)。"
      },
      {
       "stem": "重力加速度的方向总是 ____。",
       "options": [],
       "answer": "竖直向下",
       "analysis": "重力方向竖直向下指向地心。"
      },
      {
       "stem": "1 m/s = ____ km/h。",
       "options": [],
       "answer": "3.6",
       "analysis": "1 m/s = 3.6 km/h。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "研究匀变速直线运动时，常通过纸带上相邻计数点的 ____ 差来计算加速度。",
       "options": [],
       "answer": "位移（或 Δx）",
       "analysis": "由 Δx=aT² 可求加速度。"
      }
     ]
    },
    {
     "name": "四、计算与解答题（共 3 题，36 分）",
     "items": [
      {
       "stem": "一物体初速为 0，加速度 a=3 m/s²，求 4 s 末的速度。",
       "options": [],
       "answer": "v=12 m/s",
       "analysis": "v=at=3×4=12 m/s。"
      },
      {
       "stem": "汽车以 20 m/s 行驶，急刹车加速度 -5 m/s²，求刹车距离。",
       "options": [],
       "answer": "s=40 m",
       "analysis": "由 v²-v₀²=2as，0-400=2(-5)s ⇒ s=40 m。"
      },
      {
       "stem": "汽车以初速度 v₀=10 m/s 匀减速行驶，加速度大小 a=2 m/s²，求刹车到停止所需时间。",
       "options": [],
       "answer": "t=5 s",
       "analysis": "由 v=v₀-at=0 得 t=v₀/a=10/2=5 s。"
      }
     ]
    }
   ]
  },
  {
   "title": "物理 模拟训练卷（第 3 套）",
   "meta": "物理 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 10 题，50 分）",
     "items": [
      {
       "stem": "加速度描述的是",
       "options": [
        "速度的大小",
        "速度变化的快慢",
        "位移的大小",
        "路程的长短"
       ],
       "answer": "B",
       "analysis": "加速度 a=Δv/Δt，反映速度变化快慢。"
      },
      {
       "stem": "自由落体加速度 g 约为",
       "options": [
        "9.8 m/s²",
        "3.0 m/s²",
        "6.0 m/s²",
        "1.0 m/s²"
       ],
       "answer": "A",
       "analysis": "地球表面附近 g≈9.8 m/s²。"
      },
      {
       "stem": "在 v-t 图像中，图线的斜率表示",
       "options": [
        "位移",
        "加速度",
        "速度",
        "时间"
       ],
       "answer": "B",
       "analysis": "v-t 图斜率 = Δv/Δt = 加速度。"
      },
      {
       "stem": "物体惯性大小取决于",
       "options": [
        "速度",
        "质量",
        "加速度",
        "受力"
       ],
       "answer": "B",
       "analysis": "质量是惯性大小的唯一量度。"
      },
      {
       "stem": "牛顿第一定律又被称为",
       "options": [
        "作用力定律",
        "惯性定律",
        "引力定律",
        "平衡定律"
       ],
       "answer": "B",
       "analysis": "牛顿第一定律阐明惯性，又称惯性定律。"
      },
      {
       "stem": "两个力 F₁=3 N、F₂=4 N，其合力大小可能为",
       "options": [
        "5 N",
        "8 N",
        "1 N",
        "0 N"
       ],
       "answer": "A",
       "analysis": "合力范围 |F₁-F₂|~F₁+F₂ 即 1~7 N，5 N 在内。"
      },
      {
       "stem": "滑动摩擦力的方向",
       "options": [
        "与运动方向相同",
        "与相对运动方向相反",
        "总竖直向上",
        "总水平向左"
       ],
       "answer": "B",
       "analysis": "摩擦力总是阻碍相对运动，与相对运动方向相反。"
      },
      {
       "stem": "研究地球绕太阳公转时，地球可视为",
       "options": [
        "质点",
        "刚体",
        "流体",
        "不能简化"
       ],
       "answer": "A",
       "analysis": "地球大小相对轨道半径可忽略，可视为质点。"
      },
      {
       "stem": "匀加速直线运动位移公式为",
       "options": [
        "s=v₀t+½at²",
        "s=v₀t",
        "s=½at²",
        "s=v₀+a"
       ],
       "answer": "A",
       "analysis": "初速不为零的匀加速位移公式。"
      },
      {
       "stem": "速度为零的时刻，加速度",
       "options": [
        "一定为零",
        "可以不为零",
        "一定不为零",
        "无法确定"
       ],
       "answer": "B",
       "analysis": "如竖直上抛到最高点时速度为零、加速度仍为 g。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 3 题，12 分）",
     "items": [
      {
       "stem": "重力加速度的方向总是 ____。",
       "options": [],
       "answer": "竖直向下",
       "analysis": "重力方向竖直向下指向地心。"
      },
      {
       "stem": "1 m/s = ____ km/h。",
       "options": [],
       "answer": "3.6",
       "analysis": "1 m/s = 3.6 km/h。"
      },
      {
       "stem": "牛顿第二定律的数学表达式为 F = ____。",
       "options": [],
       "answer": "ma",
       "analysis": "F=ma，力等于质量乘加速度。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "探究小车速度随时间变化规律时，常用 ____ 记录小车运动的位移与时间。",
       "options": [],
       "answer": "打点计时器",
       "analysis": "打点计时器在纸带上打点，可测位移与时间。"
      }
     ]
    },
    {
     "name": "四、计算与解答题（共 3 题，36 分）",
     "items": [
      {
       "stem": "汽车以 20 m/s 行驶，急刹车加速度 -5 m/s²，求刹车距离。",
       "options": [],
       "answer": "s=40 m",
       "analysis": "由 v²-v₀²=2as，0-400=2(-5)s ⇒ s=40 m。"
      },
      {
       "stem": "汽车以初速度 v₀=10 m/s 匀减速行驶，加速度大小 a=2 m/s²，求刹车到停止所需时间。",
       "options": [],
       "answer": "t=5 s",
       "analysis": "由 v=v₀-at=0 得 t=v₀/a=10/2=5 s。"
      },
      {
       "stem": "物体从静止自由下落 2 s，求下落高度（取 g=9.8 m/s²）。",
       "options": [],
       "answer": "h=19.6 m",
       "analysis": "h=½gt²=½×9.8×4=19.6 m。"
      }
     ]
    }
   ]
  },
  {
   "title": "物理 模拟训练卷（第 4 套）",
   "meta": "物理 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 10 题，50 分）",
     "items": [
      {
       "stem": "自由落体加速度 g 约为",
       "options": [
        "9.8 m/s²",
        "3.0 m/s²",
        "6.0 m/s²",
        "1.0 m/s²"
       ],
       "answer": "A",
       "analysis": "地球表面附近 g≈9.8 m/s²。"
      },
      {
       "stem": "在 v-t 图像中，图线的斜率表示",
       "options": [
        "位移",
        "加速度",
        "速度",
        "时间"
       ],
       "answer": "B",
       "analysis": "v-t 图斜率 = Δv/Δt = 加速度。"
      },
      {
       "stem": "物体惯性大小取决于",
       "options": [
        "速度",
        "质量",
        "加速度",
        "受力"
       ],
       "answer": "B",
       "analysis": "质量是惯性大小的唯一量度。"
      },
      {
       "stem": "牛顿第一定律又被称为",
       "options": [
        "作用力定律",
        "惯性定律",
        "引力定律",
        "平衡定律"
       ],
       "answer": "B",
       "analysis": "牛顿第一定律阐明惯性，又称惯性定律。"
      },
      {
       "stem": "两个力 F₁=3 N、F₂=4 N，其合力大小可能为",
       "options": [
        "5 N",
        "8 N",
        "1 N",
        "0 N"
       ],
       "answer": "A",
       "analysis": "合力范围 |F₁-F₂|~F₁+F₂ 即 1~7 N，5 N 在内。"
      },
      {
       "stem": "滑动摩擦力的方向",
       "options": [
        "与运动方向相同",
        "与相对运动方向相反",
        "总竖直向上",
        "总水平向左"
       ],
       "answer": "B",
       "analysis": "摩擦力总是阻碍相对运动，与相对运动方向相反。"
      },
      {
       "stem": "研究地球绕太阳公转时，地球可视为",
       "options": [
        "质点",
        "刚体",
        "流体",
        "不能简化"
       ],
       "answer": "A",
       "analysis": "地球大小相对轨道半径可忽略，可视为质点。"
      },
      {
       "stem": "匀加速直线运动位移公式为",
       "options": [
        "s=v₀t+½at²",
        "s=v₀t",
        "s=½at²",
        "s=v₀+a"
       ],
       "answer": "A",
       "analysis": "初速不为零的匀加速位移公式。"
      },
      {
       "stem": "速度为零的时刻，加速度",
       "options": [
        "一定为零",
        "可以不为零",
        "一定不为零",
        "无法确定"
       ],
       "answer": "B",
       "analysis": "如竖直上抛到最高点时速度为零、加速度仍为 g。"
      },
      {
       "stem": "下列单位中属于国际单位制基本单位的是",
       "options": [
        "牛顿",
        "米",
        "焦耳",
        "瓦特"
       ],
       "answer": "B",
       "analysis": "米是长度基本单位；牛顿、焦耳、瓦特均为导出单位。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 3 题，12 分）",
     "items": [
      {
       "stem": "1 m/s = ____ km/h。",
       "options": [],
       "answer": "3.6",
       "analysis": "1 m/s = 3.6 km/h。"
      },
      {
       "stem": "牛顿第二定律的数学表达式为 F = ____。",
       "options": [],
       "answer": "ma",
       "analysis": "F=ma，力等于质量乘加速度。"
      },
      {
       "stem": "在匀速直线运动中，物体的加速度为 ____。",
       "options": [],
       "answer": "0",
       "analysis": "速度不变，加速度为 0。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "验证力的平行四边形定则实验中使用 ____ 测量力的大小。",
       "options": [],
       "answer": "弹簧测力计",
       "analysis": "用两个弹簧测力计互成角度拉橡皮条，验证合力。"
      }
     ]
    },
    {
     "name": "四、计算与解答题（共 3 题，36 分）",
     "items": [
      {
       "stem": "汽车以初速度 v₀=10 m/s 匀减速行驶，加速度大小 a=2 m/s²，求刹车到停止所需时间。",
       "options": [],
       "answer": "t=5 s",
       "analysis": "由 v=v₀-at=0 得 t=v₀/a=10/2=5 s。"
      },
      {
       "stem": "物体从静止自由下落 2 s，求下落高度（取 g=9.8 m/s²）。",
       "options": [],
       "answer": "h=19.6 m",
       "analysis": "h=½gt²=½×9.8×4=19.6 m。"
      },
      {
       "stem": "水平推力 F=10 N 作用在质量 m=2 kg 的物体上，求加速度。",
       "options": [],
       "answer": "a=5 m/s²",
       "analysis": "由 F=ma，a=F/m=10/2=5 m/s²。"
      }
     ]
    }
   ]
  },
  {
   "title": "物理 模拟训练卷（第 5 套）",
   "meta": "物理 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 10 题，50 分）",
     "items": [
      {
       "stem": "在 v-t 图像中，图线的斜率表示",
       "options": [
        "位移",
        "加速度",
        "速度",
        "时间"
       ],
       "answer": "B",
       "analysis": "v-t 图斜率 = Δv/Δt = 加速度。"
      },
      {
       "stem": "物体惯性大小取决于",
       "options": [
        "速度",
        "质量",
        "加速度",
        "受力"
       ],
       "answer": "B",
       "analysis": "质量是惯性大小的唯一量度。"
      },
      {
       "stem": "牛顿第一定律又被称为",
       "options": [
        "作用力定律",
        "惯性定律",
        "引力定律",
        "平衡定律"
       ],
       "answer": "B",
       "analysis": "牛顿第一定律阐明惯性，又称惯性定律。"
      },
      {
       "stem": "两个力 F₁=3 N、F₂=4 N，其合力大小可能为",
       "options": [
        "5 N",
        "8 N",
        "1 N",
        "0 N"
       ],
       "answer": "A",
       "analysis": "合力范围 |F₁-F₂|~F₁+F₂ 即 1~7 N，5 N 在内。"
      },
      {
       "stem": "滑动摩擦力的方向",
       "options": [
        "与运动方向相同",
        "与相对运动方向相反",
        "总竖直向上",
        "总水平向左"
       ],
       "answer": "B",
       "analysis": "摩擦力总是阻碍相对运动，与相对运动方向相反。"
      },
      {
       "stem": "研究地球绕太阳公转时，地球可视为",
       "options": [
        "质点",
        "刚体",
        "流体",
        "不能简化"
       ],
       "answer": "A",
       "analysis": "地球大小相对轨道半径可忽略，可视为质点。"
      },
      {
       "stem": "匀加速直线运动位移公式为",
       "options": [
        "s=v₀t+½at²",
        "s=v₀t",
        "s=½at²",
        "s=v₀+a"
       ],
       "answer": "A",
       "analysis": "初速不为零的匀加速位移公式。"
      },
      {
       "stem": "速度为零的时刻，加速度",
       "options": [
        "一定为零",
        "可以不为零",
        "一定不为零",
        "无法确定"
       ],
       "answer": "B",
       "analysis": "如竖直上抛到最高点时速度为零、加速度仍为 g。"
      },
      {
       "stem": "下列单位中属于国际单位制基本单位的是",
       "options": [
        "牛顿",
        "米",
        "焦耳",
        "瓦特"
       ],
       "answer": "B",
       "analysis": "米是长度基本单位；牛顿、焦耳、瓦特均为导出单位。"
      },
      {
       "stem": "物体做匀减速直线运动，加速度方向与速度方向",
       "options": [
        "相同",
        "相反",
        "垂直",
        "无关"
       ],
       "answer": "B",
       "analysis": "减速时加速度与速度方向相反。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 3 题，12 分）",
     "items": [
      {
       "stem": "牛顿第二定律的数学表达式为 F = ____。",
       "options": [],
       "answer": "ma",
       "analysis": "F=ma，力等于质量乘加速度。"
      },
      {
       "stem": "在匀速直线运动中，物体的加速度为 ____。",
       "options": [],
       "answer": "0",
       "analysis": "速度不变，加速度为 0。"
      },
      {
       "stem": "打点计时器使用的电源若为交流 50 Hz，则打点周期为 ____ s。",
       "options": [],
       "answer": "0.02",
       "analysis": "T=1/f=1/50=0.02 s。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "研究匀变速直线运动时，常通过纸带上相邻计数点的 ____ 差来计算加速度。",
       "options": [],
       "answer": "位移（或 Δx）",
       "analysis": "由 Δx=aT² 可求加速度。"
      }
     ]
    },
    {
     "name": "四、计算与解答题（共 3 题，36 分）",
     "items": [
      {
       "stem": "物体从静止自由下落 2 s，求下落高度（取 g=9.8 m/s²）。",
       "options": [],
       "answer": "h=19.6 m",
       "analysis": "h=½gt²=½×9.8×4=19.6 m。"
      },
      {
       "stem": "水平推力 F=10 N 作用在质量 m=2 kg 的物体上，求加速度。",
       "options": [],
       "answer": "a=5 m/s²",
       "analysis": "由 F=ma，a=F/m=10/2=5 m/s²。"
      },
      {
       "stem": "物体以 v=5 m/s 做匀速直线运动，10 s 内位移多少？",
       "options": [],
       "answer": "s=50 m",
       "analysis": "s=vt=5×10=50 m。"
      }
     ]
    }
   ]
  },
  {
   "title": "物理 模拟训练卷（第 6 套）",
   "meta": "物理 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 10 题，50 分）",
     "items": [
      {
       "stem": "物体惯性大小取决于",
       "options": [
        "速度",
        "质量",
        "加速度",
        "受力"
       ],
       "answer": "B",
       "analysis": "质量是惯性大小的唯一量度。"
      },
      {
       "stem": "牛顿第一定律又被称为",
       "options": [
        "作用力定律",
        "惯性定律",
        "引力定律",
        "平衡定律"
       ],
       "answer": "B",
       "analysis": "牛顿第一定律阐明惯性，又称惯性定律。"
      },
      {
       "stem": "两个力 F₁=3 N、F₂=4 N，其合力大小可能为",
       "options": [
        "5 N",
        "8 N",
        "1 N",
        "0 N"
       ],
       "answer": "A",
       "analysis": "合力范围 |F₁-F₂|~F₁+F₂ 即 1~7 N，5 N 在内。"
      },
      {
       "stem": "滑动摩擦力的方向",
       "options": [
        "与运动方向相同",
        "与相对运动方向相反",
        "总竖直向上",
        "总水平向左"
       ],
       "answer": "B",
       "analysis": "摩擦力总是阻碍相对运动，与相对运动方向相反。"
      },
      {
       "stem": "研究地球绕太阳公转时，地球可视为",
       "options": [
        "质点",
        "刚体",
        "流体",
        "不能简化"
       ],
       "answer": "A",
       "analysis": "地球大小相对轨道半径可忽略，可视为质点。"
      },
      {
       "stem": "匀加速直线运动位移公式为",
       "options": [
        "s=v₀t+½at²",
        "s=v₀t",
        "s=½at²",
        "s=v₀+a"
       ],
       "answer": "A",
       "analysis": "初速不为零的匀加速位移公式。"
      },
      {
       "stem": "速度为零的时刻，加速度",
       "options": [
        "一定为零",
        "可以不为零",
        "一定不为零",
        "无法确定"
       ],
       "answer": "B",
       "analysis": "如竖直上抛到最高点时速度为零、加速度仍为 g。"
      },
      {
       "stem": "下列单位中属于国际单位制基本单位的是",
       "options": [
        "牛顿",
        "米",
        "焦耳",
        "瓦特"
       ],
       "answer": "B",
       "analysis": "米是长度基本单位；牛顿、焦耳、瓦特均为导出单位。"
      },
      {
       "stem": "物体做匀减速直线运动，加速度方向与速度方向",
       "options": [
        "相同",
        "相反",
        "垂直",
        "无关"
       ],
       "answer": "B",
       "analysis": "减速时加速度与速度方向相反。"
      },
      {
       "stem": "下列物理量中属于标量的是",
       "options": [
        "位移",
        "速度",
        "加速度",
        "时间"
       ],
       "answer": "D",
       "analysis": "时间只有大小无方向，是标量。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 3 题，12 分）",
     "items": [
      {
       "stem": "在匀速直线运动中，物体的加速度为 ____。",
       "options": [],
       "answer": "0",
       "analysis": "速度不变，加速度为 0。"
      },
      {
       "stem": "打点计时器使用的电源若为交流 50 Hz，则打点周期为 ____ s。",
       "options": [],
       "answer": "0.02",
       "analysis": "T=1/f=1/50=0.02 s。"
      },
      {
       "stem": "国际单位制中，长度、质量、时间的基本单位分别是 ____、____、____。",
       "options": [],
       "answer": "米、千克、秒",
       "analysis": "SI 基本单位：长度—米(m)，质量—千克(kg)，时间—秒(s)。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "探究小车速度随时间变化规律时，常用 ____ 记录小车运动的位移与时间。",
       "options": [],
       "answer": "打点计时器",
       "analysis": "打点计时器在纸带上打点，可测位移与时间。"
      }
     ]
    },
    {
     "name": "四、计算与解答题（共 3 题，36 分）",
     "items": [
      {
       "stem": "水平推力 F=10 N 作用在质量 m=2 kg 的物体上，求加速度。",
       "options": [],
       "answer": "a=5 m/s²",
       "analysis": "由 F=ma，a=F/m=10/2=5 m/s²。"
      },
      {
       "stem": "物体以 v=5 m/s 做匀速直线运动，10 s 内位移多少？",
       "options": [],
       "answer": "s=50 m",
       "analysis": "s=vt=5×10=50 m。"
      },
      {
       "stem": "一物体初速为 0，加速度 a=3 m/s²，求 4 s 末的速度。",
       "options": [],
       "answer": "v=12 m/s",
       "analysis": "v=at=3×4=12 m/s。"
      }
     ]
    }
   ]
  },
  {
   "title": "物理 模拟训练卷（第 7 套）",
   "meta": "物理 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 10 题，50 分）",
     "items": [
      {
       "stem": "牛顿第一定律又被称为",
       "options": [
        "作用力定律",
        "惯性定律",
        "引力定律",
        "平衡定律"
       ],
       "answer": "B",
       "analysis": "牛顿第一定律阐明惯性，又称惯性定律。"
      },
      {
       "stem": "两个力 F₁=3 N、F₂=4 N，其合力大小可能为",
       "options": [
        "5 N",
        "8 N",
        "1 N",
        "0 N"
       ],
       "answer": "A",
       "analysis": "合力范围 |F₁-F₂|~F₁+F₂ 即 1~7 N，5 N 在内。"
      },
      {
       "stem": "滑动摩擦力的方向",
       "options": [
        "与运动方向相同",
        "与相对运动方向相反",
        "总竖直向上",
        "总水平向左"
       ],
       "answer": "B",
       "analysis": "摩擦力总是阻碍相对运动，与相对运动方向相反。"
      },
      {
       "stem": "研究地球绕太阳公转时，地球可视为",
       "options": [
        "质点",
        "刚体",
        "流体",
        "不能简化"
       ],
       "answer": "A",
       "analysis": "地球大小相对轨道半径可忽略，可视为质点。"
      },
      {
       "stem": "匀加速直线运动位移公式为",
       "options": [
        "s=v₀t+½at²",
        "s=v₀t",
        "s=½at²",
        "s=v₀+a"
       ],
       "answer": "A",
       "analysis": "初速不为零的匀加速位移公式。"
      },
      {
       "stem": "速度为零的时刻，加速度",
       "options": [
        "一定为零",
        "可以不为零",
        "一定不为零",
        "无法确定"
       ],
       "answer": "B",
       "analysis": "如竖直上抛到最高点时速度为零、加速度仍为 g。"
      },
      {
       "stem": "下列单位中属于国际单位制基本单位的是",
       "options": [
        "牛顿",
        "米",
        "焦耳",
        "瓦特"
       ],
       "answer": "B",
       "analysis": "米是长度基本单位；牛顿、焦耳、瓦特均为导出单位。"
      },
      {
       "stem": "物体做匀减速直线运动，加速度方向与速度方向",
       "options": [
        "相同",
        "相反",
        "垂直",
        "无关"
       ],
       "answer": "B",
       "analysis": "减速时加速度与速度方向相反。"
      },
      {
       "stem": "下列物理量中属于标量的是",
       "options": [
        "位移",
        "速度",
        "加速度",
        "时间"
       ],
       "answer": "D",
       "analysis": "时间只有大小无方向，是标量。"
      },
      {
       "stem": "物体做匀速直线运动，速度 2 m/s，3 s 内位移为",
       "options": [
        "3 m",
        "6 m",
        "2 m",
        "5 m"
       ],
       "answer": "B",
       "analysis": "s=vt=2×3=6 m。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 3 题，12 分）",
     "items": [
      {
       "stem": "打点计时器使用的电源若为交流 50 Hz，则打点周期为 ____ s。",
       "options": [],
       "answer": "0.02",
       "analysis": "T=1/f=1/50=0.02 s。"
      },
      {
       "stem": "国际单位制中，长度、质量、时间的基本单位分别是 ____、____、____。",
       "options": [],
       "answer": "米、千克、秒",
       "analysis": "SI 基本单位：长度—米(m)，质量—千克(kg)，时间—秒(s)。"
      },
      {
       "stem": "重力加速度的方向总是 ____。",
       "options": [],
       "answer": "竖直向下",
       "analysis": "重力方向竖直向下指向地心。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "验证力的平行四边形定则实验中使用 ____ 测量力的大小。",
       "options": [],
       "answer": "弹簧测力计",
       "analysis": "用两个弹簧测力计互成角度拉橡皮条，验证合力。"
      }
     ]
    },
    {
     "name": "四、计算与解答题（共 3 题，36 分）",
     "items": [
      {
       "stem": "物体以 v=5 m/s 做匀速直线运动，10 s 内位移多少？",
       "options": [],
       "answer": "s=50 m",
       "analysis": "s=vt=5×10=50 m。"
      },
      {
       "stem": "一物体初速为 0，加速度 a=3 m/s²，求 4 s 末的速度。",
       "options": [],
       "answer": "v=12 m/s",
       "analysis": "v=at=3×4=12 m/s。"
      },
      {
       "stem": "汽车以 20 m/s 行驶，急刹车加速度 -5 m/s²，求刹车距离。",
       "options": [],
       "answer": "s=40 m",
       "analysis": "由 v²-v₀²=2as，0-400=2(-5)s ⇒ s=40 m。"
      }
     ]
    }
   ]
  },
  {
   "title": "物理 模拟训练卷（第 8 套）",
   "meta": "物理 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 10 题，50 分）",
     "items": [
      {
       "stem": "两个力 F₁=3 N、F₂=4 N，其合力大小可能为",
       "options": [
        "5 N",
        "8 N",
        "1 N",
        "0 N"
       ],
       "answer": "A",
       "analysis": "合力范围 |F₁-F₂|~F₁+F₂ 即 1~7 N，5 N 在内。"
      },
      {
       "stem": "滑动摩擦力的方向",
       "options": [
        "与运动方向相同",
        "与相对运动方向相反",
        "总竖直向上",
        "总水平向左"
       ],
       "answer": "B",
       "analysis": "摩擦力总是阻碍相对运动，与相对运动方向相反。"
      },
      {
       "stem": "研究地球绕太阳公转时，地球可视为",
       "options": [
        "质点",
        "刚体",
        "流体",
        "不能简化"
       ],
       "answer": "A",
       "analysis": "地球大小相对轨道半径可忽略，可视为质点。"
      },
      {
       "stem": "匀加速直线运动位移公式为",
       "options": [
        "s=v₀t+½at²",
        "s=v₀t",
        "s=½at²",
        "s=v₀+a"
       ],
       "answer": "A",
       "analysis": "初速不为零的匀加速位移公式。"
      },
      {
       "stem": "速度为零的时刻，加速度",
       "options": [
        "一定为零",
        "可以不为零",
        "一定不为零",
        "无法确定"
       ],
       "answer": "B",
       "analysis": "如竖直上抛到最高点时速度为零、加速度仍为 g。"
      },
      {
       "stem": "下列单位中属于国际单位制基本单位的是",
       "options": [
        "牛顿",
        "米",
        "焦耳",
        "瓦特"
       ],
       "answer": "B",
       "analysis": "米是长度基本单位；牛顿、焦耳、瓦特均为导出单位。"
      },
      {
       "stem": "物体做匀减速直线运动，加速度方向与速度方向",
       "options": [
        "相同",
        "相反",
        "垂直",
        "无关"
       ],
       "answer": "B",
       "analysis": "减速时加速度与速度方向相反。"
      },
      {
       "stem": "下列物理量中属于标量的是",
       "options": [
        "位移",
        "速度",
        "加速度",
        "时间"
       ],
       "answer": "D",
       "analysis": "时间只有大小无方向，是标量。"
      },
      {
       "stem": "物体做匀速直线运动，速度 2 m/s，3 s 内位移为",
       "options": [
        "3 m",
        "6 m",
        "2 m",
        "5 m"
       ],
       "answer": "B",
       "analysis": "s=vt=2×3=6 m。"
      },
      {
       "stem": "加速度描述的是",
       "options": [
        "速度的大小",
        "速度变化的快慢",
        "位移的大小",
        "路程的长短"
       ],
       "answer": "B",
       "analysis": "加速度 a=Δv/Δt，反映速度变化快慢。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 3 题，12 分）",
     "items": [
      {
       "stem": "国际单位制中，长度、质量、时间的基本单位分别是 ____、____、____。",
       "options": [],
       "answer": "米、千克、秒",
       "analysis": "SI 基本单位：长度—米(m)，质量—千克(kg)，时间—秒(s)。"
      },
      {
       "stem": "重力加速度的方向总是 ____。",
       "options": [],
       "answer": "竖直向下",
       "analysis": "重力方向竖直向下指向地心。"
      },
      {
       "stem": "1 m/s = ____ km/h。",
       "options": [],
       "answer": "3.6",
       "analysis": "1 m/s = 3.6 km/h。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "研究匀变速直线运动时，常通过纸带上相邻计数点的 ____ 差来计算加速度。",
       "options": [],
       "answer": "位移（或 Δx）",
       "analysis": "由 Δx=aT² 可求加速度。"
      }
     ]
    },
    {
     "name": "四、计算与解答题（共 3 题，36 分）",
     "items": [
      {
       "stem": "一物体初速为 0，加速度 a=3 m/s²，求 4 s 末的速度。",
       "options": [],
       "answer": "v=12 m/s",
       "analysis": "v=at=3×4=12 m/s。"
      },
      {
       "stem": "汽车以 20 m/s 行驶，急刹车加速度 -5 m/s²，求刹车距离。",
       "options": [],
       "answer": "s=40 m",
       "analysis": "由 v²-v₀²=2as，0-400=2(-5)s ⇒ s=40 m。"
      },
      {
       "stem": "汽车以初速度 v₀=10 m/s 匀减速行驶，加速度大小 a=2 m/s²，求刹车到停止所需时间。",
       "options": [],
       "answer": "t=5 s",
       "analysis": "由 v=v₀-at=0 得 t=v₀/a=10/2=5 s。"
      }
     ]
    }
   ]
  },
  {
   "title": "物理 模拟训练卷（第 9 套）",
   "meta": "物理 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 10 题，50 分）",
     "items": [
      {
       "stem": "滑动摩擦力的方向",
       "options": [
        "与运动方向相同",
        "与相对运动方向相反",
        "总竖直向上",
        "总水平向左"
       ],
       "answer": "B",
       "analysis": "摩擦力总是阻碍相对运动，与相对运动方向相反。"
      },
      {
       "stem": "研究地球绕太阳公转时，地球可视为",
       "options": [
        "质点",
        "刚体",
        "流体",
        "不能简化"
       ],
       "answer": "A",
       "analysis": "地球大小相对轨道半径可忽略，可视为质点。"
      },
      {
       "stem": "匀加速直线运动位移公式为",
       "options": [
        "s=v₀t+½at²",
        "s=v₀t",
        "s=½at²",
        "s=v₀+a"
       ],
       "answer": "A",
       "analysis": "初速不为零的匀加速位移公式。"
      },
      {
       "stem": "速度为零的时刻，加速度",
       "options": [
        "一定为零",
        "可以不为零",
        "一定不为零",
        "无法确定"
       ],
       "answer": "B",
       "analysis": "如竖直上抛到最高点时速度为零、加速度仍为 g。"
      },
      {
       "stem": "下列单位中属于国际单位制基本单位的是",
       "options": [
        "牛顿",
        "米",
        "焦耳",
        "瓦特"
       ],
       "answer": "B",
       "analysis": "米是长度基本单位；牛顿、焦耳、瓦特均为导出单位。"
      },
      {
       "stem": "物体做匀减速直线运动，加速度方向与速度方向",
       "options": [
        "相同",
        "相反",
        "垂直",
        "无关"
       ],
       "answer": "B",
       "analysis": "减速时加速度与速度方向相反。"
      },
      {
       "stem": "下列物理量中属于标量的是",
       "options": [
        "位移",
        "速度",
        "加速度",
        "时间"
       ],
       "answer": "D",
       "analysis": "时间只有大小无方向，是标量。"
      },
      {
       "stem": "物体做匀速直线运动，速度 2 m/s，3 s 内位移为",
       "options": [
        "3 m",
        "6 m",
        "2 m",
        "5 m"
       ],
       "answer": "B",
       "analysis": "s=vt=2×3=6 m。"
      },
      {
       "stem": "加速度描述的是",
       "options": [
        "速度的大小",
        "速度变化的快慢",
        "位移的大小",
        "路程的长短"
       ],
       "answer": "B",
       "analysis": "加速度 a=Δv/Δt，反映速度变化快慢。"
      },
      {
       "stem": "自由落体加速度 g 约为",
       "options": [
        "9.8 m/s²",
        "3.0 m/s²",
        "6.0 m/s²",
        "1.0 m/s²"
       ],
       "answer": "A",
       "analysis": "地球表面附近 g≈9.8 m/s²。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 3 题，12 分）",
     "items": [
      {
       "stem": "重力加速度的方向总是 ____。",
       "options": [],
       "answer": "竖直向下",
       "analysis": "重力方向竖直向下指向地心。"
      },
      {
       "stem": "1 m/s = ____ km/h。",
       "options": [],
       "answer": "3.6",
       "analysis": "1 m/s = 3.6 km/h。"
      },
      {
       "stem": "牛顿第二定律的数学表达式为 F = ____。",
       "options": [],
       "answer": "ma",
       "analysis": "F=ma，力等于质量乘加速度。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "探究小车速度随时间变化规律时，常用 ____ 记录小车运动的位移与时间。",
       "options": [],
       "answer": "打点计时器",
       "analysis": "打点计时器在纸带上打点，可测位移与时间。"
      }
     ]
    },
    {
     "name": "四、计算与解答题（共 3 题，36 分）",
     "items": [
      {
       "stem": "汽车以 20 m/s 行驶，急刹车加速度 -5 m/s²，求刹车距离。",
       "options": [],
       "answer": "s=40 m",
       "analysis": "由 v²-v₀²=2as，0-400=2(-5)s ⇒ s=40 m。"
      },
      {
       "stem": "汽车以初速度 v₀=10 m/s 匀减速行驶，加速度大小 a=2 m/s²，求刹车到停止所需时间。",
       "options": [],
       "answer": "t=5 s",
       "analysis": "由 v=v₀-at=0 得 t=v₀/a=10/2=5 s。"
      },
      {
       "stem": "物体从静止自由下落 2 s，求下落高度（取 g=9.8 m/s²）。",
       "options": [],
       "answer": "h=19.6 m",
       "analysis": "h=½gt²=½×9.8×4=19.6 m。"
      }
     ]
    }
   ]
  },
  {
   "title": "物理 模拟训练卷（第 10 套）",
   "meta": "物理 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 10 题，50 分）",
     "items": [
      {
       "stem": "研究地球绕太阳公转时，地球可视为",
       "options": [
        "质点",
        "刚体",
        "流体",
        "不能简化"
       ],
       "answer": "A",
       "analysis": "地球大小相对轨道半径可忽略，可视为质点。"
      },
      {
       "stem": "匀加速直线运动位移公式为",
       "options": [
        "s=v₀t+½at²",
        "s=v₀t",
        "s=½at²",
        "s=v₀+a"
       ],
       "answer": "A",
       "analysis": "初速不为零的匀加速位移公式。"
      },
      {
       "stem": "速度为零的时刻，加速度",
       "options": [
        "一定为零",
        "可以不为零",
        "一定不为零",
        "无法确定"
       ],
       "answer": "B",
       "analysis": "如竖直上抛到最高点时速度为零、加速度仍为 g。"
      },
      {
       "stem": "下列单位中属于国际单位制基本单位的是",
       "options": [
        "牛顿",
        "米",
        "焦耳",
        "瓦特"
       ],
       "answer": "B",
       "analysis": "米是长度基本单位；牛顿、焦耳、瓦特均为导出单位。"
      },
      {
       "stem": "物体做匀减速直线运动，加速度方向与速度方向",
       "options": [
        "相同",
        "相反",
        "垂直",
        "无关"
       ],
       "answer": "B",
       "analysis": "减速时加速度与速度方向相反。"
      },
      {
       "stem": "下列物理量中属于标量的是",
       "options": [
        "位移",
        "速度",
        "加速度",
        "时间"
       ],
       "answer": "D",
       "analysis": "时间只有大小无方向，是标量。"
      },
      {
       "stem": "物体做匀速直线运动，速度 2 m/s，3 s 内位移为",
       "options": [
        "3 m",
        "6 m",
        "2 m",
        "5 m"
       ],
       "answer": "B",
       "analysis": "s=vt=2×3=6 m。"
      },
      {
       "stem": "加速度描述的是",
       "options": [
        "速度的大小",
        "速度变化的快慢",
        "位移的大小",
        "路程的长短"
       ],
       "answer": "B",
       "analysis": "加速度 a=Δv/Δt，反映速度变化快慢。"
      },
      {
       "stem": "自由落体加速度 g 约为",
       "options": [
        "9.8 m/s²",
        "3.0 m/s²",
        "6.0 m/s²",
        "1.0 m/s²"
       ],
       "answer": "A",
       "analysis": "地球表面附近 g≈9.8 m/s²。"
      },
      {
       "stem": "在 v-t 图像中，图线的斜率表示",
       "options": [
        "位移",
        "加速度",
        "速度",
        "时间"
       ],
       "answer": "B",
       "analysis": "v-t 图斜率 = Δv/Δt = 加速度。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 3 题，12 分）",
     "items": [
      {
       "stem": "1 m/s = ____ km/h。",
       "options": [],
       "answer": "3.6",
       "analysis": "1 m/s = 3.6 km/h。"
      },
      {
       "stem": "牛顿第二定律的数学表达式为 F = ____。",
       "options": [],
       "answer": "ma",
       "analysis": "F=ma，力等于质量乘加速度。"
      },
      {
       "stem": "在匀速直线运动中，物体的加速度为 ____。",
       "options": [],
       "answer": "0",
       "analysis": "速度不变，加速度为 0。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "验证力的平行四边形定则实验中使用 ____ 测量力的大小。",
       "options": [],
       "answer": "弹簧测力计",
       "analysis": "用两个弹簧测力计互成角度拉橡皮条，验证合力。"
      }
     ]
    },
    {
     "name": "四、计算与解答题（共 3 题，36 分）",
     "items": [
      {
       "stem": "汽车以初速度 v₀=10 m/s 匀减速行驶，加速度大小 a=2 m/s²，求刹车到停止所需时间。",
       "options": [],
       "answer": "t=5 s",
       "analysis": "由 v=v₀-at=0 得 t=v₀/a=10/2=5 s。"
      },
      {
       "stem": "物体从静止自由下落 2 s，求下落高度（取 g=9.8 m/s²）。",
       "options": [],
       "answer": "h=19.6 m",
       "analysis": "h=½gt²=½×9.8×4=19.6 m。"
      },
      {
       "stem": "水平推力 F=10 N 作用在质量 m=2 kg 的物体上，求加速度。",
       "options": [],
       "answer": "a=5 m/s²",
       "analysis": "由 F=ma，a=F/m=10/2=5 m/s²。"
      }
     ]
    }
   ]
  }
 ],
 "化学": [
  {
   "title": "化学 模拟训练卷（第 1 套）",
   "meta": "化学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "下列物质属于纯净物的是",
       "options": [
        "空气",
        "食盐水",
        "蒸馏水",
        "石油"
       ],
       "answer": "C",
       "analysis": "蒸馏水只含水分子，是纯净物。"
      },
      {
       "stem": "下列物质属于电解质的是",
       "options": [
        "蔗糖",
        "NaCl",
        "酒精",
        "铜"
       ],
       "answer": "B",
       "analysis": "NaCl 在熔融或水溶液能导电，是电解质。"
      },
      {
       "stem": "离子方程式 H⁺+OH⁻=H₂O 可表示的反应是",
       "options": [
        "弱酸中和",
        "强酸强碱中和",
        "金属置换",
        "氧化还原反应"
       ],
       "answer": "B",
       "analysis": "强酸强碱生成可溶性盐的中和均可用此式表示。"
      },
      {
       "stem": "氧化还原反应的实质是",
       "options": [
        "元素化合价变化",
        "电子转移",
        "生成气体",
        "放热"
       ],
       "answer": "B",
       "analysis": "本质是有电子的转移（得失或偏移）。"
      },
      {
       "stem": "还原剂在反应中",
       "options": [
        "被还原",
        "被氧化",
        "化合价降低",
        "得电子"
       ],
       "answer": "B",
       "analysis": "还原剂失电子，化合价升高，被氧化。"
      },
      {
       "stem": "下列各组离子能大量共存的是",
       "options": [
        "Na⁺、K⁺、Cl⁻、NO₃⁻",
        "Ag⁺、Cl⁻、Na⁺、NO₃⁻",
        "Ba²⁺、SO₄²⁻、K⁺",
        "H⁺、CO₃²⁻、Na⁺"
       ],
       "answer": "A",
       "analysis": "B 生成 AgCl↓，C 生成 BaSO₄↓，D 生成 CO₂，均不共存。"
      },
      {
       "stem": "钠与水反应的现象中错误的是",
       "options": [
        "熔成小球",
        "浮在水面",
        "四处游动",
        "沉入水底"
       ],
       "answer": "D",
       "analysis": "钠密度小于水，应浮在水面。"
      },
      {
       "stem": "标准状况下，22.4 L 任何气体的物质的量约为",
       "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "22.4 mol"
       ],
       "answer": "B",
       "analysis": "标准状况气体摩尔体积 22.4 L/mol。"
      },
      {
       "stem": "下列分散系中属于胶体的是",
       "options": [
        "泥浆水",
        "蔗糖水",
        "豆浆",
        "食盐水"
       ],
       "answer": "C",
       "analysis": "豆浆是典型的胶体分散系。"
      },
      {
       "stem": "除去 CO₂ 中混有的少量 HCl，应通过的试剂是",
       "options": [
        "NaOH 溶液",
        "饱和 NaHCO₃ 溶液",
        "水",
        "浓硫酸"
       ],
       "answer": "B",
       "analysis": "饱和 NaHCO₃ 吸收 HCl 且不大量吸收 CO₂。"
      },
      {
       "stem": "配制一定物质的量浓度溶液时必需的仪器是",
       "options": [
        "容量瓶",
        "量筒",
        "漏斗",
        "蒸发皿"
       ],
       "answer": "A",
       "analysis": "容量瓶用于精确配制一定体积溶液。"
      },
      {
       "stem": "反应 CuO+H₂=Cu+H₂O 中，还原剂是",
       "options": [
        "CuO",
        "H₂",
        "Cu",
        "H₂O"
       ],
       "answer": "B",
       "analysis": "H₂ 失电子被氧化，是还原剂。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 4 题，16 分）",
     "items": [
      {
       "stem": "在氧化还原反应中，化合价升高的物质被 ____。",
       "options": [],
       "answer": "氧化",
       "analysis": "失电子、化合价升高 → 被氧化。"
      },
      {
       "stem": "配制 0.1 mol/L 的 NaCl 溶液 100 mL，需称量 NaCl ____ g（M=58.5）。",
       "options": [],
       "answer": "0.585",
       "analysis": "m=nM=cVM=0.1×0.1×58.5=0.585 g。"
      },
      {
       "stem": "除去 NaCl 溶液中少量 Na₂SO₄，可加入适量 ____ 溶液后过滤。",
       "options": [],
       "answer": "BaCl₂",
       "analysis": "Ba²⁺+SO₄²⁻=BaSO₄↓，除去硫酸根。"
      },
      {
       "stem": "物质的量的单位是 ____。",
       "options": [],
       "answer": "mol",
       "analysis": "物质的量单位为摩尔，符号 mol。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "用 pH 试纸测定溶液酸碱度时，不可用 ____ 直接蘸取待测液。",
       "options": [],
       "answer": "湿润的试纸（或手）",
       "analysis": "应取干燥 pH 试纸，用玻璃棒蘸取点滴于试纸。"
      }
     ]
    },
    {
     "name": "四、综合解答题（共 4 题，32 分）",
     "items": [
      {
       "stem": "除去 NaCl 中混有的 Na₂SO₄，写出所加试剂及相关离子方程式。",
       "options": [],
       "answer": "加 BaCl₂；Ba²⁺+SO₄²⁻=BaSO₄↓",
       "analysis": "Ba²⁺ 与 SO₄²⁻ 生成难溶 BaSO₄ 除去硫酸根。"
      },
      {
       "stem": "配平并写出加热 KMnO₄ 分解制 O₂ 的方程式。",
       "options": [],
       "answer": "2KMnO₄=K₂MnO₄+MnO₂+O₂↑",
       "analysis": "锰元素化合价变化，氧以 O₂ 放出。"
      },
      {
       "stem": "某溶液加 AgNO₃ 和稀 HNO₃ 生成白色沉淀，说明含什么离子？写出离子方程式。",
       "options": [],
       "answer": "含 Cl⁻；Ag⁺+Cl⁻=AgCl↓",
       "analysis": "白色沉淀不溶于稀硝酸，特征检验 Cl⁻。"
      },
      {
       "stem": "计算 5.85 g NaCl（M=58.5 g/mol）的物质的量。",
       "options": [],
       "answer": "n=0.1 mol",
       "analysis": "n=m/M=5.85/58.5=0.1 mol。"
      }
     ]
    }
   ]
  },
  {
   "title": "化学 模拟训练卷（第 2 套）",
   "meta": "化学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "下列物质属于电解质的是",
       "options": [
        "蔗糖",
        "NaCl",
        "酒精",
        "铜"
       ],
       "answer": "B",
       "analysis": "NaCl 在熔融或水溶液能导电，是电解质。"
      },
      {
       "stem": "离子方程式 H⁺+OH⁻=H₂O 可表示的反应是",
       "options": [
        "弱酸中和",
        "强酸强碱中和",
        "金属置换",
        "氧化还原反应"
       ],
       "answer": "B",
       "analysis": "强酸强碱生成可溶性盐的中和均可用此式表示。"
      },
      {
       "stem": "氧化还原反应的实质是",
       "options": [
        "元素化合价变化",
        "电子转移",
        "生成气体",
        "放热"
       ],
       "answer": "B",
       "analysis": "本质是有电子的转移（得失或偏移）。"
      },
      {
       "stem": "还原剂在反应中",
       "options": [
        "被还原",
        "被氧化",
        "化合价降低",
        "得电子"
       ],
       "answer": "B",
       "analysis": "还原剂失电子，化合价升高，被氧化。"
      },
      {
       "stem": "下列各组离子能大量共存的是",
       "options": [
        "Na⁺、K⁺、Cl⁻、NO₃⁻",
        "Ag⁺、Cl⁻、Na⁺、NO₃⁻",
        "Ba²⁺、SO₄²⁻、K⁺",
        "H⁺、CO₃²⁻、Na⁺"
       ],
       "answer": "A",
       "analysis": "B 生成 AgCl↓，C 生成 BaSO₄↓，D 生成 CO₂，均不共存。"
      },
      {
       "stem": "钠与水反应的现象中错误的是",
       "options": [
        "熔成小球",
        "浮在水面",
        "四处游动",
        "沉入水底"
       ],
       "answer": "D",
       "analysis": "钠密度小于水，应浮在水面。"
      },
      {
       "stem": "标准状况下，22.4 L 任何气体的物质的量约为",
       "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "22.4 mol"
       ],
       "answer": "B",
       "analysis": "标准状况气体摩尔体积 22.4 L/mol。"
      },
      {
       "stem": "下列分散系中属于胶体的是",
       "options": [
        "泥浆水",
        "蔗糖水",
        "豆浆",
        "食盐水"
       ],
       "answer": "C",
       "analysis": "豆浆是典型的胶体分散系。"
      },
      {
       "stem": "除去 CO₂ 中混有的少量 HCl，应通过的试剂是",
       "options": [
        "NaOH 溶液",
        "饱和 NaHCO₃ 溶液",
        "水",
        "浓硫酸"
       ],
       "answer": "B",
       "analysis": "饱和 NaHCO₃ 吸收 HCl 且不大量吸收 CO₂。"
      },
      {
       "stem": "配制一定物质的量浓度溶液时必需的仪器是",
       "options": [
        "容量瓶",
        "量筒",
        "漏斗",
        "蒸发皿"
       ],
       "answer": "A",
       "analysis": "容量瓶用于精确配制一定体积溶液。"
      },
      {
       "stem": "反应 CuO+H₂=Cu+H₂O 中，还原剂是",
       "options": [
        "CuO",
        "H₂",
        "Cu",
        "H₂O"
       ],
       "answer": "B",
       "analysis": "H₂ 失电子被氧化，是还原剂。"
      },
      {
       "stem": "下列物质溶于水后溶液显碱性的是",
       "options": [
        "NaCl",
        "Na₂O",
        "HCl",
        "SO₂"
       ],
       "answer": "B",
       "analysis": "Na₂O 与水反应生成 NaOH，溶液显碱性。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 4 题，16 分）",
     "items": [
      {
       "stem": "配制 0.1 mol/L 的 NaCl 溶液 100 mL，需称量 NaCl ____ g（M=58.5）。",
       "options": [],
       "answer": "0.585",
       "analysis": "m=nM=cVM=0.1×0.1×58.5=0.585 g。"
      },
      {
       "stem": "除去 NaCl 溶液中少量 Na₂SO₄，可加入适量 ____ 溶液后过滤。",
       "options": [],
       "answer": "BaCl₂",
       "analysis": "Ba²⁺+SO₄²⁻=BaSO₄↓，除去硫酸根。"
      },
      {
       "stem": "物质的量的单位是 ____。",
       "options": [],
       "answer": "mol",
       "analysis": "物质的量单位为摩尔，符号 mol。"
      },
      {
       "stem": "标准状况下气体摩尔体积约为 ____。",
       "options": [],
       "answer": "22.4 L/mol",
       "analysis": "标准状况（0℃、101 kPa）下 Vm≈22.4 L/mol。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "蒸馏实验中，温度计水银球应位于蒸馏烧瓶 ____ 处。",
       "options": [],
       "answer": "支管口",
       "analysis": "测蒸气温度，水银球与支管口相平。"
      }
     ]
    },
    {
     "name": "四、综合解答题（共 4 题，32 分）",
     "items": [
      {
       "stem": "配平并写出加热 KMnO₄ 分解制 O₂ 的方程式。",
       "options": [],
       "answer": "2KMnO₄=K₂MnO₄+MnO₂+O₂↑",
       "analysis": "锰元素化合价变化，氧以 O₂ 放出。"
      },
      {
       "stem": "某溶液加 AgNO₃ 和稀 HNO₃ 生成白色沉淀，说明含什么离子？写出离子方程式。",
       "options": [],
       "answer": "含 Cl⁻；Ag⁺+Cl⁻=AgCl↓",
       "analysis": "白色沉淀不溶于稀硝酸，特征检验 Cl⁻。"
      },
      {
       "stem": "计算 5.85 g NaCl（M=58.5 g/mol）的物质的量。",
       "options": [],
       "answer": "n=0.1 mol",
       "analysis": "n=m/M=5.85/58.5=0.1 mol。"
      },
      {
       "stem": "标况下 3.36 L CO₂ 的物质的量及质量（M=44）各是多少？",
       "options": [],
       "answer": "n=0.15 mol，m=6.6 g",
       "analysis": "n=3.36/22.4=0.15 mol；m=0.15×44=6.6 g。"
      }
     ]
    }
   ]
  },
  {
   "title": "化学 模拟训练卷（第 3 套）",
   "meta": "化学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "离子方程式 H⁺+OH⁻=H₂O 可表示的反应是",
       "options": [
        "弱酸中和",
        "强酸强碱中和",
        "金属置换",
        "氧化还原反应"
       ],
       "answer": "B",
       "analysis": "强酸强碱生成可溶性盐的中和均可用此式表示。"
      },
      {
       "stem": "氧化还原反应的实质是",
       "options": [
        "元素化合价变化",
        "电子转移",
        "生成气体",
        "放热"
       ],
       "answer": "B",
       "analysis": "本质是有电子的转移（得失或偏移）。"
      },
      {
       "stem": "还原剂在反应中",
       "options": [
        "被还原",
        "被氧化",
        "化合价降低",
        "得电子"
       ],
       "answer": "B",
       "analysis": "还原剂失电子，化合价升高，被氧化。"
      },
      {
       "stem": "下列各组离子能大量共存的是",
       "options": [
        "Na⁺、K⁺、Cl⁻、NO₃⁻",
        "Ag⁺、Cl⁻、Na⁺、NO₃⁻",
        "Ba²⁺、SO₄²⁻、K⁺",
        "H⁺、CO₃²⁻、Na⁺"
       ],
       "answer": "A",
       "analysis": "B 生成 AgCl↓，C 生成 BaSO₄↓，D 生成 CO₂，均不共存。"
      },
      {
       "stem": "钠与水反应的现象中错误的是",
       "options": [
        "熔成小球",
        "浮在水面",
        "四处游动",
        "沉入水底"
       ],
       "answer": "D",
       "analysis": "钠密度小于水，应浮在水面。"
      },
      {
       "stem": "标准状况下，22.4 L 任何气体的物质的量约为",
       "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "22.4 mol"
       ],
       "answer": "B",
       "analysis": "标准状况气体摩尔体积 22.4 L/mol。"
      },
      {
       "stem": "下列分散系中属于胶体的是",
       "options": [
        "泥浆水",
        "蔗糖水",
        "豆浆",
        "食盐水"
       ],
       "answer": "C",
       "analysis": "豆浆是典型的胶体分散系。"
      },
      {
       "stem": "除去 CO₂ 中混有的少量 HCl，应通过的试剂是",
       "options": [
        "NaOH 溶液",
        "饱和 NaHCO₃ 溶液",
        "水",
        "浓硫酸"
       ],
       "answer": "B",
       "analysis": "饱和 NaHCO₃ 吸收 HCl 且不大量吸收 CO₂。"
      },
      {
       "stem": "配制一定物质的量浓度溶液时必需的仪器是",
       "options": [
        "容量瓶",
        "量筒",
        "漏斗",
        "蒸发皿"
       ],
       "answer": "A",
       "analysis": "容量瓶用于精确配制一定体积溶液。"
      },
      {
       "stem": "反应 CuO+H₂=Cu+H₂O 中，还原剂是",
       "options": [
        "CuO",
        "H₂",
        "Cu",
        "H₂O"
       ],
       "answer": "B",
       "analysis": "H₂ 失电子被氧化，是还原剂。"
      },
      {
       "stem": "下列物质溶于水后溶液显碱性的是",
       "options": [
        "NaCl",
        "Na₂O",
        "HCl",
        "SO₂"
       ],
       "answer": "B",
       "analysis": "Na₂O 与水反应生成 NaOH，溶液显碱性。"
      },
      {
       "stem": "检验 Cl⁻ 常用的试剂是",
       "options": [
        "AgNO₃ 和稀 HNO₃",
        "BaCl₂",
        "盐酸",
        "石蕊"
       ],
       "answer": "A",
       "analysis": "Ag⁺+Cl⁻=AgCl↓（白），不溶于稀硝酸。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 4 题，16 分）",
     "items": [
      {
       "stem": "除去 NaCl 溶液中少量 Na₂SO₄，可加入适量 ____ 溶液后过滤。",
       "options": [],
       "answer": "BaCl₂",
       "analysis": "Ba²⁺+SO₄²⁻=BaSO₄↓，除去硫酸根。"
      },
      {
       "stem": "物质的量的单位是 ____。",
       "options": [],
       "answer": "mol",
       "analysis": "物质的量单位为摩尔，符号 mol。"
      },
      {
       "stem": "标准状况下气体摩尔体积约为 ____。",
       "options": [],
       "answer": "22.4 L/mol",
       "analysis": "标准状况（0℃、101 kPa）下 Vm≈22.4 L/mol。"
      },
      {
       "stem": "离子反应发生的条件通常是生成 ____、____ 或弱电解质。",
       "options": [],
       "answer": "沉淀、气体",
       "analysis": "离子反应趋向生成更难溶、更易逸出或难电离的物质。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "焰色试验中，钠元素火焰呈 ____ 色，钾元素需透过 ____ 观察呈紫色。",
       "options": [],
       "answer": "黄、蓝色钴玻璃",
       "analysis": "钠黄、钾紫（钴玻璃滤去钠黄光干扰）。"
      }
     ]
    },
    {
     "name": "四、综合解答题（共 4 题，32 分）",
     "items": [
      {
       "stem": "某溶液加 AgNO₃ 和稀 HNO₃ 生成白色沉淀，说明含什么离子？写出离子方程式。",
       "options": [],
       "answer": "含 Cl⁻；Ag⁺+Cl⁻=AgCl↓",
       "analysis": "白色沉淀不溶于稀硝酸，特征检验 Cl⁻。"
      },
      {
       "stem": "计算 5.85 g NaCl（M=58.5 g/mol）的物质的量。",
       "options": [],
       "answer": "n=0.1 mol",
       "analysis": "n=m/M=5.85/58.5=0.1 mol。"
      },
      {
       "stem": "标况下 3.36 L CO₂ 的物质的量及质量（M=44）各是多少？",
       "options": [],
       "answer": "n=0.15 mol，m=6.6 g",
       "analysis": "n=3.36/22.4=0.15 mol；m=0.15×44=6.6 g。"
      },
      {
       "stem": "写出钠与水反应的化学方程式。",
       "options": [],
       "answer": "2Na+2H₂O=2NaOH+H₂↑",
       "analysis": "钠置换水中氢，生成 NaOH 与 H₂。"
      }
     ]
    }
   ]
  },
  {
   "title": "化学 模拟训练卷（第 4 套）",
   "meta": "化学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "氧化还原反应的实质是",
       "options": [
        "元素化合价变化",
        "电子转移",
        "生成气体",
        "放热"
       ],
       "answer": "B",
       "analysis": "本质是有电子的转移（得失或偏移）。"
      },
      {
       "stem": "还原剂在反应中",
       "options": [
        "被还原",
        "被氧化",
        "化合价降低",
        "得电子"
       ],
       "answer": "B",
       "analysis": "还原剂失电子，化合价升高，被氧化。"
      },
      {
       "stem": "下列各组离子能大量共存的是",
       "options": [
        "Na⁺、K⁺、Cl⁻、NO₃⁻",
        "Ag⁺、Cl⁻、Na⁺、NO₃⁻",
        "Ba²⁺、SO₄²⁻、K⁺",
        "H⁺、CO₃²⁻、Na⁺"
       ],
       "answer": "A",
       "analysis": "B 生成 AgCl↓，C 生成 BaSO₄↓，D 生成 CO₂，均不共存。"
      },
      {
       "stem": "钠与水反应的现象中错误的是",
       "options": [
        "熔成小球",
        "浮在水面",
        "四处游动",
        "沉入水底"
       ],
       "answer": "D",
       "analysis": "钠密度小于水，应浮在水面。"
      },
      {
       "stem": "标准状况下，22.4 L 任何气体的物质的量约为",
       "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "22.4 mol"
       ],
       "answer": "B",
       "analysis": "标准状况气体摩尔体积 22.4 L/mol。"
      },
      {
       "stem": "下列分散系中属于胶体的是",
       "options": [
        "泥浆水",
        "蔗糖水",
        "豆浆",
        "食盐水"
       ],
       "answer": "C",
       "analysis": "豆浆是典型的胶体分散系。"
      },
      {
       "stem": "除去 CO₂ 中混有的少量 HCl，应通过的试剂是",
       "options": [
        "NaOH 溶液",
        "饱和 NaHCO₃ 溶液",
        "水",
        "浓硫酸"
       ],
       "answer": "B",
       "analysis": "饱和 NaHCO₃ 吸收 HCl 且不大量吸收 CO₂。"
      },
      {
       "stem": "配制一定物质的量浓度溶液时必需的仪器是",
       "options": [
        "容量瓶",
        "量筒",
        "漏斗",
        "蒸发皿"
       ],
       "answer": "A",
       "analysis": "容量瓶用于精确配制一定体积溶液。"
      },
      {
       "stem": "反应 CuO+H₂=Cu+H₂O 中，还原剂是",
       "options": [
        "CuO",
        "H₂",
        "Cu",
        "H₂O"
       ],
       "answer": "B",
       "analysis": "H₂ 失电子被氧化，是还原剂。"
      },
      {
       "stem": "下列物质溶于水后溶液显碱性的是",
       "options": [
        "NaCl",
        "Na₂O",
        "HCl",
        "SO₂"
       ],
       "answer": "B",
       "analysis": "Na₂O 与水反应生成 NaOH，溶液显碱性。"
      },
      {
       "stem": "检验 Cl⁻ 常用的试剂是",
       "options": [
        "AgNO₃ 和稀 HNO₃",
        "BaCl₂",
        "盐酸",
        "石蕊"
       ],
       "answer": "A",
       "analysis": "Ag⁺+Cl⁻=AgCl↓（白），不溶于稀硝酸。"
      },
      {
       "stem": "物质的量及其单位的符号是",
       "options": [
        "mol、n",
        "M、m",
        "V、v",
        "T、t"
       ],
       "answer": "A",
       "analysis": "物质的量符号 n，单位 mol。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 4 题，16 分）",
     "items": [
      {
       "stem": "物质的量的单位是 ____。",
       "options": [],
       "answer": "mol",
       "analysis": "物质的量单位为摩尔，符号 mol。"
      },
      {
       "stem": "标准状况下气体摩尔体积约为 ____。",
       "options": [],
       "answer": "22.4 L/mol",
       "analysis": "标准状况（0℃、101 kPa）下 Vm≈22.4 L/mol。"
      },
      {
       "stem": "离子反应发生的条件通常是生成 ____、____ 或弱电解质。",
       "options": [],
       "answer": "沉淀、气体",
       "analysis": "离子反应趋向生成更难溶、更易逸出或难电离的物质。"
      },
      {
       "stem": "金属钠通常保存在 ____ 中。",
       "options": [],
       "answer": "煤油（或石蜡油）",
       "analysis": "钠易与空气、水反应，密度大于煤油，故存于煤油隔绝空气。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "检验溶液中是否含 SO₄²⁻，应先加 ____，再加 BaCl₂ 溶液。",
       "options": [],
       "answer": "稀盐酸",
       "analysis": "先加盐酸排除 CO₃²⁻、SO₃²⁻ 等干扰，再生成 BaSO₄ 白沉淀。"
      }
     ]
    },
    {
     "name": "四、综合解答题（共 4 题，32 分）",
     "items": [
      {
       "stem": "计算 5.85 g NaCl（M=58.5 g/mol）的物质的量。",
       "options": [],
       "answer": "n=0.1 mol",
       "analysis": "n=m/M=5.85/58.5=0.1 mol。"
      },
      {
       "stem": "标况下 3.36 L CO₂ 的物质的量及质量（M=44）各是多少？",
       "options": [],
       "answer": "n=0.15 mol，m=6.6 g",
       "analysis": "n=3.36/22.4=0.15 mol；m=0.15×44=6.6 g。"
      },
      {
       "stem": "写出钠与水反应的化学方程式。",
       "options": [],
       "answer": "2Na+2H₂O=2NaOH+H₂↑",
       "analysis": "钠置换水中氢，生成 NaOH 与 H₂。"
      },
      {
       "stem": "除去 NaCl 中混有的 Na₂SO₄，写出所加试剂及相关离子方程式。",
       "options": [],
       "answer": "加 BaCl₂；Ba²⁺+SO₄²⁻=BaSO₄↓",
       "analysis": "Ba²⁺ 与 SO₄²⁻ 生成难溶 BaSO₄ 除去硫酸根。"
      }
     ]
    }
   ]
  },
  {
   "title": "化学 模拟训练卷（第 5 套）",
   "meta": "化学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "还原剂在反应中",
       "options": [
        "被还原",
        "被氧化",
        "化合价降低",
        "得电子"
       ],
       "answer": "B",
       "analysis": "还原剂失电子，化合价升高，被氧化。"
      },
      {
       "stem": "下列各组离子能大量共存的是",
       "options": [
        "Na⁺、K⁺、Cl⁻、NO₃⁻",
        "Ag⁺、Cl⁻、Na⁺、NO₃⁻",
        "Ba²⁺、SO₄²⁻、K⁺",
        "H⁺、CO₃²⁻、Na⁺"
       ],
       "answer": "A",
       "analysis": "B 生成 AgCl↓，C 生成 BaSO₄↓，D 生成 CO₂，均不共存。"
      },
      {
       "stem": "钠与水反应的现象中错误的是",
       "options": [
        "熔成小球",
        "浮在水面",
        "四处游动",
        "沉入水底"
       ],
       "answer": "D",
       "analysis": "钠密度小于水，应浮在水面。"
      },
      {
       "stem": "标准状况下，22.4 L 任何气体的物质的量约为",
       "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "22.4 mol"
       ],
       "answer": "B",
       "analysis": "标准状况气体摩尔体积 22.4 L/mol。"
      },
      {
       "stem": "下列分散系中属于胶体的是",
       "options": [
        "泥浆水",
        "蔗糖水",
        "豆浆",
        "食盐水"
       ],
       "answer": "C",
       "analysis": "豆浆是典型的胶体分散系。"
      },
      {
       "stem": "除去 CO₂ 中混有的少量 HCl，应通过的试剂是",
       "options": [
        "NaOH 溶液",
        "饱和 NaHCO₃ 溶液",
        "水",
        "浓硫酸"
       ],
       "answer": "B",
       "analysis": "饱和 NaHCO₃ 吸收 HCl 且不大量吸收 CO₂。"
      },
      {
       "stem": "配制一定物质的量浓度溶液时必需的仪器是",
       "options": [
        "容量瓶",
        "量筒",
        "漏斗",
        "蒸发皿"
       ],
       "answer": "A",
       "analysis": "容量瓶用于精确配制一定体积溶液。"
      },
      {
       "stem": "反应 CuO+H₂=Cu+H₂O 中，还原剂是",
       "options": [
        "CuO",
        "H₂",
        "Cu",
        "H₂O"
       ],
       "answer": "B",
       "analysis": "H₂ 失电子被氧化，是还原剂。"
      },
      {
       "stem": "下列物质溶于水后溶液显碱性的是",
       "options": [
        "NaCl",
        "Na₂O",
        "HCl",
        "SO₂"
       ],
       "answer": "B",
       "analysis": "Na₂O 与水反应生成 NaOH，溶液显碱性。"
      },
      {
       "stem": "检验 Cl⁻ 常用的试剂是",
       "options": [
        "AgNO₃ 和稀 HNO₃",
        "BaCl₂",
        "盐酸",
        "石蕊"
       ],
       "answer": "A",
       "analysis": "Ag⁺+Cl⁻=AgCl↓（白），不溶于稀硝酸。"
      },
      {
       "stem": "物质的量及其单位的符号是",
       "options": [
        "mol、n",
        "M、m",
        "V、v",
        "T、t"
       ],
       "answer": "A",
       "analysis": "物质的量符号 n，单位 mol。"
      },
      {
       "stem": "氧化还原反应中，元素化合价升高表明该物质被",
       "options": [
        "还原",
        "氧化",
        "分解",
        "化合"
       ],
       "answer": "B",
       "analysis": "化合价升高 = 失电子 = 被氧化。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 4 题，16 分）",
     "items": [
      {
       "stem": "标准状况下气体摩尔体积约为 ____。",
       "options": [],
       "answer": "22.4 L/mol",
       "analysis": "标准状况（0℃、101 kPa）下 Vm≈22.4 L/mol。"
      },
      {
       "stem": "离子反应发生的条件通常是生成 ____、____ 或弱电解质。",
       "options": [],
       "answer": "沉淀、气体",
       "analysis": "离子反应趋向生成更难溶、更易逸出或难电离的物质。"
      },
      {
       "stem": "金属钠通常保存在 ____ 中。",
       "options": [],
       "answer": "煤油（或石蜡油）",
       "analysis": "钠易与空气、水反应，密度大于煤油，故存于煤油隔绝空气。"
      },
      {
       "stem": "写出 NaOH 的电离方程式：NaOH = ____。",
       "options": [],
       "answer": "Na⁺ + OH⁻",
       "analysis": "NaOH 为强碱，完全电离。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "用 pH 试纸测定溶液酸碱度时，不可用 ____ 直接蘸取待测液。",
       "options": [],
       "answer": "湿润的试纸（或手）",
       "analysis": "应取干燥 pH 试纸，用玻璃棒蘸取点滴于试纸。"
      }
     ]
    },
    {
     "name": "四、综合解答题（共 4 题，32 分）",
     "items": [
      {
       "stem": "标况下 3.36 L CO₂ 的物质的量及质量（M=44）各是多少？",
       "options": [],
       "answer": "n=0.15 mol，m=6.6 g",
       "analysis": "n=3.36/22.4=0.15 mol；m=0.15×44=6.6 g。"
      },
      {
       "stem": "写出钠与水反应的化学方程式。",
       "options": [],
       "answer": "2Na+2H₂O=2NaOH+H₂↑",
       "analysis": "钠置换水中氢，生成 NaOH 与 H₂。"
      },
      {
       "stem": "除去 NaCl 中混有的 Na₂SO₄，写出所加试剂及相关离子方程式。",
       "options": [],
       "answer": "加 BaCl₂；Ba²⁺+SO₄²⁻=BaSO₄↓",
       "analysis": "Ba²⁺ 与 SO₄²⁻ 生成难溶 BaSO₄ 除去硫酸根。"
      },
      {
       "stem": "配平并写出加热 KMnO₄ 分解制 O₂ 的方程式。",
       "options": [],
       "answer": "2KMnO₄=K₂MnO₄+MnO₂+O₂↑",
       "analysis": "锰元素化合价变化，氧以 O₂ 放出。"
      }
     ]
    }
   ]
  },
  {
   "title": "化学 模拟训练卷（第 6 套）",
   "meta": "化学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "下列各组离子能大量共存的是",
       "options": [
        "Na⁺、K⁺、Cl⁻、NO₃⁻",
        "Ag⁺、Cl⁻、Na⁺、NO₃⁻",
        "Ba²⁺、SO₄²⁻、K⁺",
        "H⁺、CO₃²⁻、Na⁺"
       ],
       "answer": "A",
       "analysis": "B 生成 AgCl↓，C 生成 BaSO₄↓，D 生成 CO₂，均不共存。"
      },
      {
       "stem": "钠与水反应的现象中错误的是",
       "options": [
        "熔成小球",
        "浮在水面",
        "四处游动",
        "沉入水底"
       ],
       "answer": "D",
       "analysis": "钠密度小于水，应浮在水面。"
      },
      {
       "stem": "标准状况下，22.4 L 任何气体的物质的量约为",
       "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "22.4 mol"
       ],
       "answer": "B",
       "analysis": "标准状况气体摩尔体积 22.4 L/mol。"
      },
      {
       "stem": "下列分散系中属于胶体的是",
       "options": [
        "泥浆水",
        "蔗糖水",
        "豆浆",
        "食盐水"
       ],
       "answer": "C",
       "analysis": "豆浆是典型的胶体分散系。"
      },
      {
       "stem": "除去 CO₂ 中混有的少量 HCl，应通过的试剂是",
       "options": [
        "NaOH 溶液",
        "饱和 NaHCO₃ 溶液",
        "水",
        "浓硫酸"
       ],
       "answer": "B",
       "analysis": "饱和 NaHCO₃ 吸收 HCl 且不大量吸收 CO₂。"
      },
      {
       "stem": "配制一定物质的量浓度溶液时必需的仪器是",
       "options": [
        "容量瓶",
        "量筒",
        "漏斗",
        "蒸发皿"
       ],
       "answer": "A",
       "analysis": "容量瓶用于精确配制一定体积溶液。"
      },
      {
       "stem": "反应 CuO+H₂=Cu+H₂O 中，还原剂是",
       "options": [
        "CuO",
        "H₂",
        "Cu",
        "H₂O"
       ],
       "answer": "B",
       "analysis": "H₂ 失电子被氧化，是还原剂。"
      },
      {
       "stem": "下列物质溶于水后溶液显碱性的是",
       "options": [
        "NaCl",
        "Na₂O",
        "HCl",
        "SO₂"
       ],
       "answer": "B",
       "analysis": "Na₂O 与水反应生成 NaOH，溶液显碱性。"
      },
      {
       "stem": "检验 Cl⁻ 常用的试剂是",
       "options": [
        "AgNO₃ 和稀 HNO₃",
        "BaCl₂",
        "盐酸",
        "石蕊"
       ],
       "answer": "A",
       "analysis": "Ag⁺+Cl⁻=AgCl↓（白），不溶于稀硝酸。"
      },
      {
       "stem": "物质的量及其单位的符号是",
       "options": [
        "mol、n",
        "M、m",
        "V、v",
        "T、t"
       ],
       "answer": "A",
       "analysis": "物质的量符号 n，单位 mol。"
      },
      {
       "stem": "氧化还原反应中，元素化合价升高表明该物质被",
       "options": [
        "还原",
        "氧化",
        "分解",
        "化合"
       ],
       "answer": "B",
       "analysis": "化合价升高 = 失电子 = 被氧化。"
      },
      {
       "stem": "下列物质属于纯净物的是",
       "options": [
        "空气",
        "食盐水",
        "蒸馏水",
        "石油"
       ],
       "answer": "C",
       "analysis": "蒸馏水只含水分子，是纯净物。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 4 题，16 分）",
     "items": [
      {
       "stem": "离子反应发生的条件通常是生成 ____、____ 或弱电解质。",
       "options": [],
       "answer": "沉淀、气体",
       "analysis": "离子反应趋向生成更难溶、更易逸出或难电离的物质。"
      },
      {
       "stem": "金属钠通常保存在 ____ 中。",
       "options": [],
       "answer": "煤油（或石蜡油）",
       "analysis": "钠易与空气、水反应，密度大于煤油，故存于煤油隔绝空气。"
      },
      {
       "stem": "写出 NaOH 的电离方程式：NaOH = ____。",
       "options": [],
       "answer": "Na⁺ + OH⁻",
       "analysis": "NaOH 为强碱，完全电离。"
      },
      {
       "stem": "在氧化还原反应中，化合价升高的物质被 ____。",
       "options": [],
       "answer": "氧化",
       "analysis": "失电子、化合价升高 → 被氧化。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "蒸馏实验中，温度计水银球应位于蒸馏烧瓶 ____ 处。",
       "options": [],
       "answer": "支管口",
       "analysis": "测蒸气温度，水银球与支管口相平。"
      }
     ]
    },
    {
     "name": "四、综合解答题（共 4 题，32 分）",
     "items": [
      {
       "stem": "写出钠与水反应的化学方程式。",
       "options": [],
       "answer": "2Na+2H₂O=2NaOH+H₂↑",
       "analysis": "钠置换水中氢，生成 NaOH 与 H₂。"
      },
      {
       "stem": "除去 NaCl 中混有的 Na₂SO₄，写出所加试剂及相关离子方程式。",
       "options": [],
       "answer": "加 BaCl₂；Ba²⁺+SO₄²⁻=BaSO₄↓",
       "analysis": "Ba²⁺ 与 SO₄²⁻ 生成难溶 BaSO₄ 除去硫酸根。"
      },
      {
       "stem": "配平并写出加热 KMnO₄ 分解制 O₂ 的方程式。",
       "options": [],
       "answer": "2KMnO₄=K₂MnO₄+MnO₂+O₂↑",
       "analysis": "锰元素化合价变化，氧以 O₂ 放出。"
      },
      {
       "stem": "某溶液加 AgNO₃ 和稀 HNO₃ 生成白色沉淀，说明含什么离子？写出离子方程式。",
       "options": [],
       "answer": "含 Cl⁻；Ag⁺+Cl⁻=AgCl↓",
       "analysis": "白色沉淀不溶于稀硝酸，特征检验 Cl⁻。"
      }
     ]
    }
   ]
  },
  {
   "title": "化学 模拟训练卷（第 7 套）",
   "meta": "化学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "钠与水反应的现象中错误的是",
       "options": [
        "熔成小球",
        "浮在水面",
        "四处游动",
        "沉入水底"
       ],
       "answer": "D",
       "analysis": "钠密度小于水，应浮在水面。"
      },
      {
       "stem": "标准状况下，22.4 L 任何气体的物质的量约为",
       "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "22.4 mol"
       ],
       "answer": "B",
       "analysis": "标准状况气体摩尔体积 22.4 L/mol。"
      },
      {
       "stem": "下列分散系中属于胶体的是",
       "options": [
        "泥浆水",
        "蔗糖水",
        "豆浆",
        "食盐水"
       ],
       "answer": "C",
       "analysis": "豆浆是典型的胶体分散系。"
      },
      {
       "stem": "除去 CO₂ 中混有的少量 HCl，应通过的试剂是",
       "options": [
        "NaOH 溶液",
        "饱和 NaHCO₃ 溶液",
        "水",
        "浓硫酸"
       ],
       "answer": "B",
       "analysis": "饱和 NaHCO₃ 吸收 HCl 且不大量吸收 CO₂。"
      },
      {
       "stem": "配制一定物质的量浓度溶液时必需的仪器是",
       "options": [
        "容量瓶",
        "量筒",
        "漏斗",
        "蒸发皿"
       ],
       "answer": "A",
       "analysis": "容量瓶用于精确配制一定体积溶液。"
      },
      {
       "stem": "反应 CuO+H₂=Cu+H₂O 中，还原剂是",
       "options": [
        "CuO",
        "H₂",
        "Cu",
        "H₂O"
       ],
       "answer": "B",
       "analysis": "H₂ 失电子被氧化，是还原剂。"
      },
      {
       "stem": "下列物质溶于水后溶液显碱性的是",
       "options": [
        "NaCl",
        "Na₂O",
        "HCl",
        "SO₂"
       ],
       "answer": "B",
       "analysis": "Na₂O 与水反应生成 NaOH，溶液显碱性。"
      },
      {
       "stem": "检验 Cl⁻ 常用的试剂是",
       "options": [
        "AgNO₃ 和稀 HNO₃",
        "BaCl₂",
        "盐酸",
        "石蕊"
       ],
       "answer": "A",
       "analysis": "Ag⁺+Cl⁻=AgCl↓（白），不溶于稀硝酸。"
      },
      {
       "stem": "物质的量及其单位的符号是",
       "options": [
        "mol、n",
        "M、m",
        "V、v",
        "T、t"
       ],
       "answer": "A",
       "analysis": "物质的量符号 n，单位 mol。"
      },
      {
       "stem": "氧化还原反应中，元素化合价升高表明该物质被",
       "options": [
        "还原",
        "氧化",
        "分解",
        "化合"
       ],
       "answer": "B",
       "analysis": "化合价升高 = 失电子 = 被氧化。"
      },
      {
       "stem": "下列物质属于纯净物的是",
       "options": [
        "空气",
        "食盐水",
        "蒸馏水",
        "石油"
       ],
       "answer": "C",
       "analysis": "蒸馏水只含水分子，是纯净物。"
      },
      {
       "stem": "下列物质属于电解质的是",
       "options": [
        "蔗糖",
        "NaCl",
        "酒精",
        "铜"
       ],
       "answer": "B",
       "analysis": "NaCl 在熔融或水溶液能导电，是电解质。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 4 题，16 分）",
     "items": [
      {
       "stem": "金属钠通常保存在 ____ 中。",
       "options": [],
       "answer": "煤油（或石蜡油）",
       "analysis": "钠易与空气、水反应，密度大于煤油，故存于煤油隔绝空气。"
      },
      {
       "stem": "写出 NaOH 的电离方程式：NaOH = ____。",
       "options": [],
       "answer": "Na⁺ + OH⁻",
       "analysis": "NaOH 为强碱，完全电离。"
      },
      {
       "stem": "在氧化还原反应中，化合价升高的物质被 ____。",
       "options": [],
       "answer": "氧化",
       "analysis": "失电子、化合价升高 → 被氧化。"
      },
      {
       "stem": "配制 0.1 mol/L 的 NaCl 溶液 100 mL，需称量 NaCl ____ g（M=58.5）。",
       "options": [],
       "answer": "0.585",
       "analysis": "m=nM=cVM=0.1×0.1×58.5=0.585 g。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "焰色试验中，钠元素火焰呈 ____ 色，钾元素需透过 ____ 观察呈紫色。",
       "options": [],
       "answer": "黄、蓝色钴玻璃",
       "analysis": "钠黄、钾紫（钴玻璃滤去钠黄光干扰）。"
      }
     ]
    },
    {
     "name": "四、综合解答题（共 4 题，32 分）",
     "items": [
      {
       "stem": "除去 NaCl 中混有的 Na₂SO₄，写出所加试剂及相关离子方程式。",
       "options": [],
       "answer": "加 BaCl₂；Ba²⁺+SO₄²⁻=BaSO₄↓",
       "analysis": "Ba²⁺ 与 SO₄²⁻ 生成难溶 BaSO₄ 除去硫酸根。"
      },
      {
       "stem": "配平并写出加热 KMnO₄ 分解制 O₂ 的方程式。",
       "options": [],
       "answer": "2KMnO₄=K₂MnO₄+MnO₂+O₂↑",
       "analysis": "锰元素化合价变化，氧以 O₂ 放出。"
      },
      {
       "stem": "某溶液加 AgNO₃ 和稀 HNO₃ 生成白色沉淀，说明含什么离子？写出离子方程式。",
       "options": [],
       "answer": "含 Cl⁻；Ag⁺+Cl⁻=AgCl↓",
       "analysis": "白色沉淀不溶于稀硝酸，特征检验 Cl⁻。"
      },
      {
       "stem": "计算 5.85 g NaCl（M=58.5 g/mol）的物质的量。",
       "options": [],
       "answer": "n=0.1 mol",
       "analysis": "n=m/M=5.85/58.5=0.1 mol。"
      }
     ]
    }
   ]
  },
  {
   "title": "化学 模拟训练卷（第 8 套）",
   "meta": "化学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "标准状况下，22.4 L 任何气体的物质的量约为",
       "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "22.4 mol"
       ],
       "answer": "B",
       "analysis": "标准状况气体摩尔体积 22.4 L/mol。"
      },
      {
       "stem": "下列分散系中属于胶体的是",
       "options": [
        "泥浆水",
        "蔗糖水",
        "豆浆",
        "食盐水"
       ],
       "answer": "C",
       "analysis": "豆浆是典型的胶体分散系。"
      },
      {
       "stem": "除去 CO₂ 中混有的少量 HCl，应通过的试剂是",
       "options": [
        "NaOH 溶液",
        "饱和 NaHCO₃ 溶液",
        "水",
        "浓硫酸"
       ],
       "answer": "B",
       "analysis": "饱和 NaHCO₃ 吸收 HCl 且不大量吸收 CO₂。"
      },
      {
       "stem": "配制一定物质的量浓度溶液时必需的仪器是",
       "options": [
        "容量瓶",
        "量筒",
        "漏斗",
        "蒸发皿"
       ],
       "answer": "A",
       "analysis": "容量瓶用于精确配制一定体积溶液。"
      },
      {
       "stem": "反应 CuO+H₂=Cu+H₂O 中，还原剂是",
       "options": [
        "CuO",
        "H₂",
        "Cu",
        "H₂O"
       ],
       "answer": "B",
       "analysis": "H₂ 失电子被氧化，是还原剂。"
      },
      {
       "stem": "下列物质溶于水后溶液显碱性的是",
       "options": [
        "NaCl",
        "Na₂O",
        "HCl",
        "SO₂"
       ],
       "answer": "B",
       "analysis": "Na₂O 与水反应生成 NaOH，溶液显碱性。"
      },
      {
       "stem": "检验 Cl⁻ 常用的试剂是",
       "options": [
        "AgNO₃ 和稀 HNO₃",
        "BaCl₂",
        "盐酸",
        "石蕊"
       ],
       "answer": "A",
       "analysis": "Ag⁺+Cl⁻=AgCl↓（白），不溶于稀硝酸。"
      },
      {
       "stem": "物质的量及其单位的符号是",
       "options": [
        "mol、n",
        "M、m",
        "V、v",
        "T、t"
       ],
       "answer": "A",
       "analysis": "物质的量符号 n，单位 mol。"
      },
      {
       "stem": "氧化还原反应中，元素化合价升高表明该物质被",
       "options": [
        "还原",
        "氧化",
        "分解",
        "化合"
       ],
       "answer": "B",
       "analysis": "化合价升高 = 失电子 = 被氧化。"
      },
      {
       "stem": "下列物质属于纯净物的是",
       "options": [
        "空气",
        "食盐水",
        "蒸馏水",
        "石油"
       ],
       "answer": "C",
       "analysis": "蒸馏水只含水分子，是纯净物。"
      },
      {
       "stem": "下列物质属于电解质的是",
       "options": [
        "蔗糖",
        "NaCl",
        "酒精",
        "铜"
       ],
       "answer": "B",
       "analysis": "NaCl 在熔融或水溶液能导电，是电解质。"
      },
      {
       "stem": "离子方程式 H⁺+OH⁻=H₂O 可表示的反应是",
       "options": [
        "弱酸中和",
        "强酸强碱中和",
        "金属置换",
        "氧化还原反应"
       ],
       "answer": "B",
       "analysis": "强酸强碱生成可溶性盐的中和均可用此式表示。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 4 题，16 分）",
     "items": [
      {
       "stem": "写出 NaOH 的电离方程式：NaOH = ____。",
       "options": [],
       "answer": "Na⁺ + OH⁻",
       "analysis": "NaOH 为强碱，完全电离。"
      },
      {
       "stem": "在氧化还原反应中，化合价升高的物质被 ____。",
       "options": [],
       "answer": "氧化",
       "analysis": "失电子、化合价升高 → 被氧化。"
      },
      {
       "stem": "配制 0.1 mol/L 的 NaCl 溶液 100 mL，需称量 NaCl ____ g（M=58.5）。",
       "options": [],
       "answer": "0.585",
       "analysis": "m=nM=cVM=0.1×0.1×58.5=0.585 g。"
      },
      {
       "stem": "除去 NaCl 溶液中少量 Na₂SO₄，可加入适量 ____ 溶液后过滤。",
       "options": [],
       "answer": "BaCl₂",
       "analysis": "Ba²⁺+SO₄²⁻=BaSO₄↓，除去硫酸根。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "检验溶液中是否含 SO₄²⁻，应先加 ____，再加 BaCl₂ 溶液。",
       "options": [],
       "answer": "稀盐酸",
       "analysis": "先加盐酸排除 CO₃²⁻、SO₃²⁻ 等干扰，再生成 BaSO₄ 白沉淀。"
      }
     ]
    },
    {
     "name": "四、综合解答题（共 4 题，32 分）",
     "items": [
      {
       "stem": "配平并写出加热 KMnO₄ 分解制 O₂ 的方程式。",
       "options": [],
       "answer": "2KMnO₄=K₂MnO₄+MnO₂+O₂↑",
       "analysis": "锰元素化合价变化，氧以 O₂ 放出。"
      },
      {
       "stem": "某溶液加 AgNO₃ 和稀 HNO₃ 生成白色沉淀，说明含什么离子？写出离子方程式。",
       "options": [],
       "answer": "含 Cl⁻；Ag⁺+Cl⁻=AgCl↓",
       "analysis": "白色沉淀不溶于稀硝酸，特征检验 Cl⁻。"
      },
      {
       "stem": "计算 5.85 g NaCl（M=58.5 g/mol）的物质的量。",
       "options": [],
       "answer": "n=0.1 mol",
       "analysis": "n=m/M=5.85/58.5=0.1 mol。"
      },
      {
       "stem": "标况下 3.36 L CO₂ 的物质的量及质量（M=44）各是多少？",
       "options": [],
       "answer": "n=0.15 mol，m=6.6 g",
       "analysis": "n=3.36/22.4=0.15 mol；m=0.15×44=6.6 g。"
      }
     ]
    }
   ]
  },
  {
   "title": "化学 模拟训练卷（第 9 套）",
   "meta": "化学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "下列分散系中属于胶体的是",
       "options": [
        "泥浆水",
        "蔗糖水",
        "豆浆",
        "食盐水"
       ],
       "answer": "C",
       "analysis": "豆浆是典型的胶体分散系。"
      },
      {
       "stem": "除去 CO₂ 中混有的少量 HCl，应通过的试剂是",
       "options": [
        "NaOH 溶液",
        "饱和 NaHCO₃ 溶液",
        "水",
        "浓硫酸"
       ],
       "answer": "B",
       "analysis": "饱和 NaHCO₃ 吸收 HCl 且不大量吸收 CO₂。"
      },
      {
       "stem": "配制一定物质的量浓度溶液时必需的仪器是",
       "options": [
        "容量瓶",
        "量筒",
        "漏斗",
        "蒸发皿"
       ],
       "answer": "A",
       "analysis": "容量瓶用于精确配制一定体积溶液。"
      },
      {
       "stem": "反应 CuO+H₂=Cu+H₂O 中，还原剂是",
       "options": [
        "CuO",
        "H₂",
        "Cu",
        "H₂O"
       ],
       "answer": "B",
       "analysis": "H₂ 失电子被氧化，是还原剂。"
      },
      {
       "stem": "下列物质溶于水后溶液显碱性的是",
       "options": [
        "NaCl",
        "Na₂O",
        "HCl",
        "SO₂"
       ],
       "answer": "B",
       "analysis": "Na₂O 与水反应生成 NaOH，溶液显碱性。"
      },
      {
       "stem": "检验 Cl⁻ 常用的试剂是",
       "options": [
        "AgNO₃ 和稀 HNO₃",
        "BaCl₂",
        "盐酸",
        "石蕊"
       ],
       "answer": "A",
       "analysis": "Ag⁺+Cl⁻=AgCl↓（白），不溶于稀硝酸。"
      },
      {
       "stem": "物质的量及其单位的符号是",
       "options": [
        "mol、n",
        "M、m",
        "V、v",
        "T、t"
       ],
       "answer": "A",
       "analysis": "物质的量符号 n，单位 mol。"
      },
      {
       "stem": "氧化还原反应中，元素化合价升高表明该物质被",
       "options": [
        "还原",
        "氧化",
        "分解",
        "化合"
       ],
       "answer": "B",
       "analysis": "化合价升高 = 失电子 = 被氧化。"
      },
      {
       "stem": "下列物质属于纯净物的是",
       "options": [
        "空气",
        "食盐水",
        "蒸馏水",
        "石油"
       ],
       "answer": "C",
       "analysis": "蒸馏水只含水分子，是纯净物。"
      },
      {
       "stem": "下列物质属于电解质的是",
       "options": [
        "蔗糖",
        "NaCl",
        "酒精",
        "铜"
       ],
       "answer": "B",
       "analysis": "NaCl 在熔融或水溶液能导电，是电解质。"
      },
      {
       "stem": "离子方程式 H⁺+OH⁻=H₂O 可表示的反应是",
       "options": [
        "弱酸中和",
        "强酸强碱中和",
        "金属置换",
        "氧化还原反应"
       ],
       "answer": "B",
       "analysis": "强酸强碱生成可溶性盐的中和均可用此式表示。"
      },
      {
       "stem": "氧化还原反应的实质是",
       "options": [
        "元素化合价变化",
        "电子转移",
        "生成气体",
        "放热"
       ],
       "answer": "B",
       "analysis": "本质是有电子的转移（得失或偏移）。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 4 题，16 分）",
     "items": [
      {
       "stem": "在氧化还原反应中，化合价升高的物质被 ____。",
       "options": [],
       "answer": "氧化",
       "analysis": "失电子、化合价升高 → 被氧化。"
      },
      {
       "stem": "配制 0.1 mol/L 的 NaCl 溶液 100 mL，需称量 NaCl ____ g（M=58.5）。",
       "options": [],
       "answer": "0.585",
       "analysis": "m=nM=cVM=0.1×0.1×58.5=0.585 g。"
      },
      {
       "stem": "除去 NaCl 溶液中少量 Na₂SO₄，可加入适量 ____ 溶液后过滤。",
       "options": [],
       "answer": "BaCl₂",
       "analysis": "Ba²⁺+SO₄²⁻=BaSO₄↓，除去硫酸根。"
      },
      {
       "stem": "物质的量的单位是 ____。",
       "options": [],
       "answer": "mol",
       "analysis": "物质的量单位为摩尔，符号 mol。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "用 pH 试纸测定溶液酸碱度时，不可用 ____ 直接蘸取待测液。",
       "options": [],
       "answer": "湿润的试纸（或手）",
       "analysis": "应取干燥 pH 试纸，用玻璃棒蘸取点滴于试纸。"
      }
     ]
    },
    {
     "name": "四、综合解答题（共 4 题，32 分）",
     "items": [
      {
       "stem": "某溶液加 AgNO₃ 和稀 HNO₃ 生成白色沉淀，说明含什么离子？写出离子方程式。",
       "options": [],
       "answer": "含 Cl⁻；Ag⁺+Cl⁻=AgCl↓",
       "analysis": "白色沉淀不溶于稀硝酸，特征检验 Cl⁻。"
      },
      {
       "stem": "计算 5.85 g NaCl（M=58.5 g/mol）的物质的量。",
       "options": [],
       "answer": "n=0.1 mol",
       "analysis": "n=m/M=5.85/58.5=0.1 mol。"
      },
      {
       "stem": "标况下 3.36 L CO₂ 的物质的量及质量（M=44）各是多少？",
       "options": [],
       "answer": "n=0.15 mol，m=6.6 g",
       "analysis": "n=3.36/22.4=0.15 mol；m=0.15×44=6.6 g。"
      },
      {
       "stem": "写出钠与水反应的化学方程式。",
       "options": [],
       "answer": "2Na+2H₂O=2NaOH+H₂↑",
       "analysis": "钠置换水中氢，生成 NaOH 与 H₂。"
      }
     ]
    }
   ]
  },
  {
   "title": "化学 模拟训练卷（第 10 套）",
   "meta": "化学 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、单项选择题（每题 5 分，共 12 题，50 分）",
     "items": [
      {
       "stem": "除去 CO₂ 中混有的少量 HCl，应通过的试剂是",
       "options": [
        "NaOH 溶液",
        "饱和 NaHCO₃ 溶液",
        "水",
        "浓硫酸"
       ],
       "answer": "B",
       "analysis": "饱和 NaHCO₃ 吸收 HCl 且不大量吸收 CO₂。"
      },
      {
       "stem": "配制一定物质的量浓度溶液时必需的仪器是",
       "options": [
        "容量瓶",
        "量筒",
        "漏斗",
        "蒸发皿"
       ],
       "answer": "A",
       "analysis": "容量瓶用于精确配制一定体积溶液。"
      },
      {
       "stem": "反应 CuO+H₂=Cu+H₂O 中，还原剂是",
       "options": [
        "CuO",
        "H₂",
        "Cu",
        "H₂O"
       ],
       "answer": "B",
       "analysis": "H₂ 失电子被氧化，是还原剂。"
      },
      {
       "stem": "下列物质溶于水后溶液显碱性的是",
       "options": [
        "NaCl",
        "Na₂O",
        "HCl",
        "SO₂"
       ],
       "answer": "B",
       "analysis": "Na₂O 与水反应生成 NaOH，溶液显碱性。"
      },
      {
       "stem": "检验 Cl⁻ 常用的试剂是",
       "options": [
        "AgNO₃ 和稀 HNO₃",
        "BaCl₂",
        "盐酸",
        "石蕊"
       ],
       "answer": "A",
       "analysis": "Ag⁺+Cl⁻=AgCl↓（白），不溶于稀硝酸。"
      },
      {
       "stem": "物质的量及其单位的符号是",
       "options": [
        "mol、n",
        "M、m",
        "V、v",
        "T、t"
       ],
       "answer": "A",
       "analysis": "物质的量符号 n，单位 mol。"
      },
      {
       "stem": "氧化还原反应中，元素化合价升高表明该物质被",
       "options": [
        "还原",
        "氧化",
        "分解",
        "化合"
       ],
       "answer": "B",
       "analysis": "化合价升高 = 失电子 = 被氧化。"
      },
      {
       "stem": "下列物质属于纯净物的是",
       "options": [
        "空气",
        "食盐水",
        "蒸馏水",
        "石油"
       ],
       "answer": "C",
       "analysis": "蒸馏水只含水分子，是纯净物。"
      },
      {
       "stem": "下列物质属于电解质的是",
       "options": [
        "蔗糖",
        "NaCl",
        "酒精",
        "铜"
       ],
       "answer": "B",
       "analysis": "NaCl 在熔融或水溶液能导电，是电解质。"
      },
      {
       "stem": "离子方程式 H⁺+OH⁻=H₂O 可表示的反应是",
       "options": [
        "弱酸中和",
        "强酸强碱中和",
        "金属置换",
        "氧化还原反应"
       ],
       "answer": "B",
       "analysis": "强酸强碱生成可溶性盐的中和均可用此式表示。"
      },
      {
       "stem": "氧化还原反应的实质是",
       "options": [
        "元素化合价变化",
        "电子转移",
        "生成气体",
        "放热"
       ],
       "answer": "B",
       "analysis": "本质是有电子的转移（得失或偏移）。"
      },
      {
       "stem": "还原剂在反应中",
       "options": [
        "被还原",
        "被氧化",
        "化合价降低",
        "得电子"
       ],
       "answer": "B",
       "analysis": "还原剂失电子，化合价升高，被氧化。"
      }
     ]
    },
    {
     "name": "二、填空题（每题 4 分，共 4 题，16 分）",
     "items": [
      {
       "stem": "配制 0.1 mol/L 的 NaCl 溶液 100 mL，需称量 NaCl ____ g（M=58.5）。",
       "options": [],
       "answer": "0.585",
       "analysis": "m=nM=cVM=0.1×0.1×58.5=0.585 g。"
      },
      {
       "stem": "除去 NaCl 溶液中少量 Na₂SO₄，可加入适量 ____ 溶液后过滤。",
       "options": [],
       "answer": "BaCl₂",
       "analysis": "Ba²⁺+SO₄²⁻=BaSO₄↓，除去硫酸根。"
      },
      {
       "stem": "物质的量的单位是 ____。",
       "options": [],
       "answer": "mol",
       "analysis": "物质的量单位为摩尔，符号 mol。"
      },
      {
       "stem": "标准状况下气体摩尔体积约为 ____。",
       "options": [],
       "answer": "22.4 L/mol",
       "analysis": "标准状况（0℃、101 kPa）下 Vm≈22.4 L/mol。"
      }
     ]
    },
    {
     "name": "三、实验题（共 1 题，12 分）",
     "items": [
      {
       "stem": "蒸馏实验中，温度计水银球应位于蒸馏烧瓶 ____ 处。",
       "options": [],
       "answer": "支管口",
       "analysis": "测蒸气温度，水银球与支管口相平。"
      }
     ]
    },
    {
     "name": "四、综合解答题（共 4 题，32 分）",
     "items": [
      {
       "stem": "计算 5.85 g NaCl（M=58.5 g/mol）的物质的量。",
       "options": [],
       "answer": "n=0.1 mol",
       "analysis": "n=m/M=5.85/58.5=0.1 mol。"
      },
      {
       "stem": "标况下 3.36 L CO₂ 的物质的量及质量（M=44）各是多少？",
       "options": [],
       "answer": "n=0.15 mol，m=6.6 g",
       "analysis": "n=3.36/22.4=0.15 mol；m=0.15×44=6.6 g。"
      },
      {
       "stem": "写出钠与水反应的化学方程式。",
       "options": [],
       "answer": "2Na+2H₂O=2NaOH+H₂↑",
       "analysis": "钠置换水中氢，生成 NaOH 与 H₂。"
      },
      {
       "stem": "除去 NaCl 中混有的 Na₂SO₄，写出所加试剂及相关离子方程式。",
       "options": [],
       "answer": "加 BaCl₂；Ba²⁺+SO₄²⁻=BaSO₄↓",
       "analysis": "Ba²⁺ 与 SO₄²⁻ 生成难溶 BaSO₄ 除去硫酸根。"
      }
     ]
    }
   ]
  }
 ],
 "语文": [
  {
   "title": "语文 模拟训练卷（第 1 套）",
   "meta": "语文 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、现代文阅读（共 4 题，36 分）",
     "items": [
      {
       "stem": "【现代文阅读】朱自清《春》节选：\"盼望着，盼望着，东风来了，春天的脚步近了。\" 这句话使用的修辞手法是",
       "options": [
        "反复、比喻",
        "排比、夸张",
        "对偶、借代",
        "设问、反问"
       ],
       "answer": "A",
       "analysis": "\"盼望着，盼望着\"为反复，\"春天的脚步\"为比喻。"
      },
      {
       "stem": "【现代文阅读】同上：\"一切都像刚睡醒的样子，欣欣然张开了眼。\" 运用的修辞是",
       "options": [
        "比喻",
        "拟人",
        "夸张",
        "排比"
       ],
       "answer": "B",
       "analysis": "赋予万物人的情态\"睡醒\"\"睁眼\"，是拟人。"
      },
      {
       "stem": "【现代文阅读】鲁迅《从百草园到三味书屋》节选：\"不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树……\" 这段景物描写的顺序是",
       "options": [
        "由植物到动物",
        "由动物到植物",
        "由高到低",
        "由远及近"
       ],
       "answer": "A",
       "analysis": "先写植物（菜畦、树）后写动物（蝉、黄蜂、叫天子）。"
      },
      {
       "stem": "【现代文阅读】同上：\"油蛉在这里低唱，蟋蟀们在这里弹琴。\" 修辞是",
       "options": [
        "比喻",
        "拟人",
        "排比",
        "夸张"
       ],
       "answer": "B",
       "analysis": "\"低唱\"\"弹琴\"赋予昆虫人的动作，拟人。"
      }
     ]
    },
    {
     "name": "二、古诗文阅读（共 4 题，24 分）",
     "items": [
      {
       "stem": "【默写】锲而舍之，朽木不折；锲而不舍，____。",
       "options": [],
       "answer": "金石可镂",
       "analysis": "出自《劝学》，强调坚持。"
      },
      {
       "stem": "【文言实词】\"假舟楫者，非能水也，而绝江河。\" 中\"绝\"意为",
       "options": [
        "断绝",
        "横渡",
        "极尽",
        "消失"
       ],
       "answer": "B",
       "analysis": "\"绝江河\"即横渡江河。"
      },
      {
       "stem": "【文言虚词】\"青，取之于蓝，而青于蓝。\" 中\"而\"表",
       "options": [
        "顺承",
        "转折",
        "并列",
        "修饰"
       ],
       "answer": "B",
       "analysis": "前后语意转折，意为\"却\"。"
      },
      {
       "stem": "【古诗文】《荀子·劝学》：\"学不可以已。\" 句意是",
       "options": [
        "学习并不难",
        "学习不可以停止",
        "学习要速成",
        "学习没有用处"
       ],
       "answer": "B",
       "analysis": "\"已\"意为停止，全句指学习不能停止。"
      }
     ]
    },
    {
     "name": "三、语言运用（共 4 题，20 分）",
     "items": [
      {
       "stem": "【语言运用】下列标点符号使用正确的一项是",
       "options": [
        "我不知道他去哪儿？",
        "他说：\"走吧。\"",
        "苹果、梨、香蕉、等",
        "以上都对"
       ],
       "answer": "B",
       "analysis": "A 陈述句应用句号；C 顿号与\"等\"重复。"
      },
      {
       "stem": "【语言运用】仿写：例句\"书是钥匙，能开启智慧之门。\" 恰当的一项是",
       "options": [
        "书是钥匙，能开启智慧之门",
        "书是灯塔，能照亮前行之路",
        "书是桌子，能摆放物品",
        "书是食物，能吃下肚"
       ],
       "answer": "B",
       "analysis": "运用比喻且句式一致、意蕴相合。"
      },
      {
       "stem": "【语言运用】\"静谧\"一词中\"谧\"的读音是",
       "options": [
        "bì",
        "mì",
        "nì",
        "pì"
       ],
       "answer": "B",
       "analysis": "\"谧\"读 mì，意为安静。"
      },
      {
       "stem": "【语言运用】下列词语书写完全正确的一项是",
       "options": [
        "再接再励",
        "再接再厉",
        "不记其数",
        "迫不急待"
       ],
       "answer": "B",
       "analysis": "A 应为\"厉\"，C 应为\"计\"，D 应为\"及\"。"
      }
     ]
    },
    {
     "name": "四、作文（1 题，70 分）",
     "items": [
      {
       "stem": "【作文】题目《那一刻，我长大了》。请列出写作要点。",
       "options": [],
       "answer": "选取一个具体事件（如照顾家人、独立解决困难），描写\"那一刻\"的心理变化，点明\"长大\"的内涵。",
       "analysis": "评分要点：情节真实、心理刻画细腻、升华自然。"
      }
     ]
    }
   ]
  },
  {
   "title": "语文 模拟训练卷（第 2 套）",
   "meta": "语文 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、现代文阅读（共 4 题，36 分）",
     "items": [
      {
       "stem": "【现代文阅读】同上：\"一切都像刚睡醒的样子，欣欣然张开了眼。\" 运用的修辞是",
       "options": [
        "比喻",
        "拟人",
        "夸张",
        "排比"
       ],
       "answer": "B",
       "analysis": "赋予万物人的情态\"睡醒\"\"睁眼\"，是拟人。"
      },
      {
       "stem": "【现代文阅读】鲁迅《从百草园到三味书屋》节选：\"不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树……\" 这段景物描写的顺序是",
       "options": [
        "由植物到动物",
        "由动物到植物",
        "由高到低",
        "由远及近"
       ],
       "answer": "A",
       "analysis": "先写植物（菜畦、树）后写动物（蝉、黄蜂、叫天子）。"
      },
      {
       "stem": "【现代文阅读】同上：\"油蛉在这里低唱，蟋蟀们在这里弹琴。\" 修辞是",
       "options": [
        "比喻",
        "拟人",
        "排比",
        "夸张"
       ],
       "answer": "B",
       "analysis": "\"低唱\"\"弹琴\"赋予昆虫人的动作，拟人。"
      },
      {
       "stem": "【现代文阅读】朱自清《背影》节选：\"我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去……\" 主要运用了",
       "options": [
        "语言描写",
        "心理描写",
        "外貌与动作描写",
        "环境描写"
       ],
       "answer": "C",
       "analysis": "\"戴着\"\"穿着\"为外貌，\"走\"\"探身\"为动作描写。"
      }
     ]
    },
    {
     "name": "二、古诗文阅读（共 4 题，24 分）",
     "items": [
      {
       "stem": "【文言实词】\"假舟楫者，非能水也，而绝江河。\" 中\"绝\"意为",
       "options": [
        "断绝",
        "横渡",
        "极尽",
        "消失"
       ],
       "answer": "B",
       "analysis": "\"绝江河\"即横渡江河。"
      },
      {
       "stem": "【文言虚词】\"青，取之于蓝，而青于蓝。\" 中\"而\"表",
       "options": [
        "顺承",
        "转折",
        "并列",
        "修饰"
       ],
       "answer": "B",
       "analysis": "前后语意转折，意为\"却\"。"
      },
      {
       "stem": "【古诗文】《荀子·劝学》：\"学不可以已。\" 句意是",
       "options": [
        "学习并不难",
        "学习不可以停止",
        "学习要速成",
        "学习没有用处"
       ],
       "answer": "B",
       "analysis": "\"已\"意为停止，全句指学习不能停止。"
      },
      {
       "stem": "【古诗文】\"君子博学而日参省乎己，则知明而行无过矣。\" 强调",
       "options": [
        "博学即可",
        "每日反省自我",
        "依靠天赋",
        "师从名师"
       ],
       "answer": "B",
       "analysis": "\"参省乎己\"即反省自己，可增智慧少过错。"
      }
     ]
    },
    {
     "name": "三、语言运用（共 4 题，20 分）",
     "items": [
      {
       "stem": "【语言运用】仿写：例句\"书是钥匙，能开启智慧之门。\" 恰当的一项是",
       "options": [
        "书是钥匙，能开启智慧之门",
        "书是灯塔，能照亮前行之路",
        "书是桌子，能摆放物品",
        "书是食物，能吃下肚"
       ],
       "answer": "B",
       "analysis": "运用比喻且句式一致、意蕴相合。"
      },
      {
       "stem": "【语言运用】\"静谧\"一词中\"谧\"的读音是",
       "options": [
        "bì",
        "mì",
        "nì",
        "pì"
       ],
       "answer": "B",
       "analysis": "\"谧\"读 mì，意为安静。"
      },
      {
       "stem": "【语言运用】下列词语书写完全正确的一项是",
       "options": [
        "再接再励",
        "再接再厉",
        "不记其数",
        "迫不急待"
       ],
       "answer": "B",
       "analysis": "A 应为\"厉\"，C 应为\"计\"，D 应为\"及\"。"
      },
      {
       "stem": "【语言运用】\"请惠存\"一词用于",
       "options": [
        "自己保存",
        "请对方保存（赠物时）",
        "赠送礼物动作",
        "表示道歉"
       ],
       "answer": "B",
       "analysis": "\"惠存\"是敬辞，请别人保存自己赠送的东西。"
      }
     ]
    },
    {
     "name": "四、作文（1 题，70 分）",
     "items": [
      {
       "stem": "【作文】题目《这，才是成熟的模样》。请列出写作要点。",
       "options": [],
       "answer": "立意：成熟是责任与担当；选材：一次克服困难的成长经历；结构：叙述+抒情+议论；语言：细腻描写，真情实感。",
       "analysis": "评分要点：中心明确、内容充实、情感真实、结构完整。"
      }
     ]
    }
   ]
  },
  {
   "title": "语文 模拟训练卷（第 3 套）",
   "meta": "语文 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、现代文阅读（共 4 题，36 分）",
     "items": [
      {
       "stem": "【现代文阅读】鲁迅《从百草园到三味书屋》节选：\"不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树……\" 这段景物描写的顺序是",
       "options": [
        "由植物到动物",
        "由动物到植物",
        "由高到低",
        "由远及近"
       ],
       "answer": "A",
       "analysis": "先写植物（菜畦、树）后写动物（蝉、黄蜂、叫天子）。"
      },
      {
       "stem": "【现代文阅读】同上：\"油蛉在这里低唱，蟋蟀们在这里弹琴。\" 修辞是",
       "options": [
        "比喻",
        "拟人",
        "排比",
        "夸张"
       ],
       "answer": "B",
       "analysis": "\"低唱\"\"弹琴\"赋予昆虫人的动作，拟人。"
      },
      {
       "stem": "【现代文阅读】朱自清《背影》节选：\"我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去……\" 主要运用了",
       "options": [
        "语言描写",
        "心理描写",
        "外貌与动作描写",
        "环境描写"
       ],
       "answer": "C",
       "analysis": "\"戴着\"\"穿着\"为外貌，\"走\"\"探身\"为动作描写。"
      },
      {
       "stem": "【现代文阅读】同上：父亲穿过铁道买橘子的行为，主要表现了",
       "options": [
        "父亲的笨拙",
        "父亲对儿子的深爱",
        "路途的艰难",
        "作者的后悔"
       ],
       "answer": "B",
       "analysis": "细节刻画父亲不辞辛苦为子买橘，彰显父爱。"
      }
     ]
    },
    {
     "name": "二、古诗文阅读（共 4 题，24 分）",
     "items": [
      {
       "stem": "【文言虚词】\"青，取之于蓝，而青于蓝。\" 中\"而\"表",
       "options": [
        "顺承",
        "转折",
        "并列",
        "修饰"
       ],
       "answer": "B",
       "analysis": "前后语意转折，意为\"却\"。"
      },
      {
       "stem": "【古诗文】《荀子·劝学》：\"学不可以已。\" 句意是",
       "options": [
        "学习并不难",
        "学习不可以停止",
        "学习要速成",
        "学习没有用处"
       ],
       "answer": "B",
       "analysis": "\"已\"意为停止，全句指学习不能停止。"
      },
      {
       "stem": "【古诗文】\"君子博学而日参省乎己，则知明而行无过矣。\" 强调",
       "options": [
        "博学即可",
        "每日反省自我",
        "依靠天赋",
        "师从名师"
       ],
       "answer": "B",
       "analysis": "\"参省乎己\"即反省自己，可增智慧少过错。"
      },
      {
       "stem": "【古诗文】韩愈《师说》：\"师者，所以传道受业解惑也。\" 该句句式为",
       "options": [
        "判断句",
        "被动句",
        "倒装句",
        "省略句"
       ],
       "answer": "A",
       "analysis": "\"者……也\"表判断。"
      }
     ]
    },
    {
     "name": "三、语言运用（共 4 题，20 分）",
     "items": [
      {
       "stem": "【语言运用】\"静谧\"一词中\"谧\"的读音是",
       "options": [
        "bì",
        "mì",
        "nì",
        "pì"
       ],
       "answer": "B",
       "analysis": "\"谧\"读 mì，意为安静。"
      },
      {
       "stem": "【语言运用】下列词语书写完全正确的一项是",
       "options": [
        "再接再励",
        "再接再厉",
        "不记其数",
        "迫不急待"
       ],
       "answer": "B",
       "analysis": "A 应为\"厉\"，C 应为\"计\"，D 应为\"及\"。"
      },
      {
       "stem": "【语言运用】\"请惠存\"一词用于",
       "options": [
        "自己保存",
        "请对方保存（赠物时）",
        "赠送礼物动作",
        "表示道歉"
       ],
       "answer": "B",
       "analysis": "\"惠存\"是敬辞，请别人保存自己赠送的东西。"
      },
      {
       "stem": "【语言运用】将下面句子排序正确的一项是：①清晨我来到公园 ②草坪上露珠晶莹 ③鸟儿在枝头歌唱 ④这一切让人心旷神怡",
       "options": [
        "①②③④",
        "②①③④",
        "③①②④",
        "④①②③"
       ],
       "answer": "A",
       "analysis": "按时间先后与观察顺序：到公园→见露珠→闻鸟鸣→抒发感受。"
      }
     ]
    },
    {
     "name": "四、作文（1 题，70 分）",
     "items": [
      {
       "stem": "【作文】题目《劳动的滋味》。请列出写作要点。",
       "options": [],
       "answer": "写一次具体劳动体验（如家务、农活、志愿服务），突出过程描写与\"滋味\"（感悟：劳动创造价值、来之不易）。",
       "analysis": "评分要点：有细节、有感悟、扣题紧密。"
      }
     ]
    }
   ]
  },
  {
   "title": "语文 模拟训练卷（第 4 套）",
   "meta": "语文 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、现代文阅读（共 4 题，36 分）",
     "items": [
      {
       "stem": "【现代文阅读】同上：\"油蛉在这里低唱，蟋蟀们在这里弹琴。\" 修辞是",
       "options": [
        "比喻",
        "拟人",
        "排比",
        "夸张"
       ],
       "answer": "B",
       "analysis": "\"低唱\"\"弹琴\"赋予昆虫人的动作，拟人。"
      },
      {
       "stem": "【现代文阅读】朱自清《背影》节选：\"我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去……\" 主要运用了",
       "options": [
        "语言描写",
        "心理描写",
        "外貌与动作描写",
        "环境描写"
       ],
       "answer": "C",
       "analysis": "\"戴着\"\"穿着\"为外貌，\"走\"\"探身\"为动作描写。"
      },
      {
       "stem": "【现代文阅读】同上：父亲穿过铁道买橘子的行为，主要表现了",
       "options": [
        "父亲的笨拙",
        "父亲对儿子的深爱",
        "路途的艰难",
        "作者的后悔"
       ],
       "answer": "B",
       "analysis": "细节刻画父亲不辞辛苦为子买橘，彰显父爱。"
      },
      {
       "stem": "【现代文阅读】老舍《济南的冬天》节选：\"对于一个在北平住惯的人，像我，冬天要是不刮风，便觉得是奇迹。\" 主要表达方式是",
       "options": [
        "议论",
        "说明",
        "记叙",
        "描写"
       ],
       "answer": "C",
       "analysis": "叙述个人感受与经历，属记叙。"
      }
     ]
    },
    {
     "name": "二、古诗文阅读（共 4 题，24 分）",
     "items": [
      {
       "stem": "【古诗文】《荀子·劝学》：\"学不可以已。\" 句意是",
       "options": [
        "学习并不难",
        "学习不可以停止",
        "学习要速成",
        "学习没有用处"
       ],
       "answer": "B",
       "analysis": "\"已\"意为停止，全句指学习不能停止。"
      },
      {
       "stem": "【古诗文】\"君子博学而日参省乎己，则知明而行无过矣。\" 强调",
       "options": [
        "博学即可",
        "每日反省自我",
        "依靠天赋",
        "师从名师"
       ],
       "answer": "B",
       "analysis": "\"参省乎己\"即反省自己，可增智慧少过错。"
      },
      {
       "stem": "【古诗文】韩愈《师说》：\"师者，所以传道受业解惑也。\" 该句句式为",
       "options": [
        "判断句",
        "被动句",
        "倒装句",
        "省略句"
       ],
       "answer": "A",
       "analysis": "\"者……也\"表判断。"
      },
      {
       "stem": "【古诗文】\"是故弟子不必不如师，师不必贤于弟子。\" 说明",
       "options": [
        "弟子必不如师",
        "师生可互相学习",
        "师必贤于弟子",
        "不必从师"
       ],
       "answer": "B",
       "analysis": "闻道有先后，师生各有长短，可互相学习。"
      }
     ]
    },
    {
     "name": "三、语言运用（共 4 题，20 分）",
     "items": [
      {
       "stem": "【语言运用】下列词语书写完全正确的一项是",
       "options": [
        "再接再励",
        "再接再厉",
        "不记其数",
        "迫不急待"
       ],
       "answer": "B",
       "analysis": "A 应为\"厉\"，C 应为\"计\"，D 应为\"及\"。"
      },
      {
       "stem": "【语言运用】\"请惠存\"一词用于",
       "options": [
        "自己保存",
        "请对方保存（赠物时）",
        "赠送礼物动作",
        "表示道歉"
       ],
       "answer": "B",
       "analysis": "\"惠存\"是敬辞，请别人保存自己赠送的东西。"
      },
      {
       "stem": "【语言运用】将下面句子排序正确的一项是：①清晨我来到公园 ②草坪上露珠晶莹 ③鸟儿在枝头歌唱 ④这一切让人心旷神怡",
       "options": [
        "①②③④",
        "②①③④",
        "③①②④",
        "④①②③"
       ],
       "answer": "A",
       "analysis": "按时间先后与观察顺序：到公园→见露珠→闻鸟鸣→抒发感受。"
      },
      {
       "stem": "【语言运用】下列句子中成语使用正确的一项是",
       "options": [
        "运动会开幕式气势磅礴，令人叹为观止",
        "他上课总是娓娓动听地睡觉",
        "这篇小说差强人意，漏洞百出",
        "以上都不对"
       ],
       "answer": "A",
       "analysis": "叹为观止形容赞叹，使用正确；B、C 误用。"
      }
     ]
    },
    {
     "name": "四、作文（1 题，70 分）",
     "items": [
      {
       "stem": "【作文】题目《留一点____给自己》（半命题）。请列出写作要点。",
       "options": [],
       "answer": "补全如\"留一点微笑/空间/勇气给自己\"；写自我鼓励或调节的事例，结尾点明留白的意义。",
       "analysis": "评分要点：补题有新意、叙事具体、立意积极。"
      }
     ]
    }
   ]
  },
  {
   "title": "语文 模拟训练卷（第 5 套）",
   "meta": "语文 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、现代文阅读（共 4 题，36 分）",
     "items": [
      {
       "stem": "【现代文阅读】朱自清《背影》节选：\"我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去……\" 主要运用了",
       "options": [
        "语言描写",
        "心理描写",
        "外貌与动作描写",
        "环境描写"
       ],
       "answer": "C",
       "analysis": "\"戴着\"\"穿着\"为外貌，\"走\"\"探身\"为动作描写。"
      },
      {
       "stem": "【现代文阅读】同上：父亲穿过铁道买橘子的行为，主要表现了",
       "options": [
        "父亲的笨拙",
        "父亲对儿子的深爱",
        "路途的艰难",
        "作者的后悔"
       ],
       "answer": "B",
       "analysis": "细节刻画父亲不辞辛苦为子买橘，彰显父爱。"
      },
      {
       "stem": "【现代文阅读】老舍《济南的冬天》节选：\"对于一个在北平住惯的人，像我，冬天要是不刮风，便觉得是奇迹。\" 主要表达方式是",
       "options": [
        "议论",
        "说明",
        "记叙",
        "描写"
       ],
       "answer": "C",
       "analysis": "叙述个人感受与经历，属记叙。"
      },
      {
       "stem": "【现代文阅读】同上：\"山坡上卧着些小村庄，小村庄的房顶上卧着点雪。\" 中\"卧\"字妙在",
       "options": [
        "写出村庄高大",
        "运用拟人，静景写活",
        "强调雪大",
        "说明位置低"
       ],
       "answer": "B",
       "analysis": "\"卧\"拟人化，将静谧雪景写得温静可亲。"
      }
     ]
    },
    {
     "name": "二、古诗文阅读（共 4 题，24 分）",
     "items": [
      {
       "stem": "【古诗文】\"君子博学而日参省乎己，则知明而行无过矣。\" 强调",
       "options": [
        "博学即可",
        "每日反省自我",
        "依靠天赋",
        "师从名师"
       ],
       "answer": "B",
       "analysis": "\"参省乎己\"即反省自己，可增智慧少过错。"
      },
      {
       "stem": "【古诗文】韩愈《师说》：\"师者，所以传道受业解惑也。\" 该句句式为",
       "options": [
        "判断句",
        "被动句",
        "倒装句",
        "省略句"
       ],
       "answer": "A",
       "analysis": "\"者……也\"表判断。"
      },
      {
       "stem": "【古诗文】\"是故弟子不必不如师，师不必贤于弟子。\" 说明",
       "options": [
        "弟子必不如师",
        "师生可互相学习",
        "师必贤于弟子",
        "不必从师"
       ],
       "answer": "B",
       "analysis": "闻道有先后，师生各有长短，可互相学习。"
      },
      {
       "stem": "【默写】故不积跬步，____；不积小流，____。",
       "options": [],
       "answer": "无以至千里；无以成江海",
       "analysis": "出自《劝学》，强调积累。"
      }
     ]
    },
    {
     "name": "三、语言运用（共 4 题，20 分）",
     "items": [
      {
       "stem": "【语言运用】\"请惠存\"一词用于",
       "options": [
        "自己保存",
        "请对方保存（赠物时）",
        "赠送礼物动作",
        "表示道歉"
       ],
       "answer": "B",
       "analysis": "\"惠存\"是敬辞，请别人保存自己赠送的东西。"
      },
      {
       "stem": "【语言运用】将下面句子排序正确的一项是：①清晨我来到公园 ②草坪上露珠晶莹 ③鸟儿在枝头歌唱 ④这一切让人心旷神怡",
       "options": [
        "①②③④",
        "②①③④",
        "③①②④",
        "④①②③"
       ],
       "answer": "A",
       "analysis": "按时间先后与观察顺序：到公园→见露珠→闻鸟鸣→抒发感受。"
      },
      {
       "stem": "【语言运用】下列句子中成语使用正确的一项是",
       "options": [
        "运动会开幕式气势磅礴，令人叹为观止",
        "他上课总是娓娓动听地睡觉",
        "这篇小说差强人意，漏洞百出",
        "以上都不对"
       ],
       "answer": "A",
       "analysis": "叹为观止形容赞叹，使用正确；B、C 误用。"
      },
      {
       "stem": "【语言运用】病句：\"通过老师的帮助，使我的成绩提高了。\" 病因及修改是",
       "options": [
        "搭配不当，删\"成绩\"",
        "缺主语，删\"通过\"或\"使\"",
        "重复累赘，删\"帮助\"",
        "语序不当，调顺序"
       ],
       "answer": "B",
       "analysis": "\"通过……使\"并用淹没主语，删其一。"
      }
     ]
    },
    {
     "name": "四、作文（1 题，70 分）",
     "items": [
      {
       "stem": "【作文】题目《那一刻，我长大了》。请列出写作要点。",
       "options": [],
       "answer": "选取一个具体事件（如照顾家人、独立解决困难），描写\"那一刻\"的心理变化，点明\"长大\"的内涵。",
       "analysis": "评分要点：情节真实、心理刻画细腻、升华自然。"
      }
     ]
    }
   ]
  },
  {
   "title": "语文 模拟训练卷（第 6 套）",
   "meta": "语文 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、现代文阅读（共 4 题，36 分）",
     "items": [
      {
       "stem": "【现代文阅读】同上：父亲穿过铁道买橘子的行为，主要表现了",
       "options": [
        "父亲的笨拙",
        "父亲对儿子的深爱",
        "路途的艰难",
        "作者的后悔"
       ],
       "answer": "B",
       "analysis": "细节刻画父亲不辞辛苦为子买橘，彰显父爱。"
      },
      {
       "stem": "【现代文阅读】老舍《济南的冬天》节选：\"对于一个在北平住惯的人，像我，冬天要是不刮风，便觉得是奇迹。\" 主要表达方式是",
       "options": [
        "议论",
        "说明",
        "记叙",
        "描写"
       ],
       "answer": "C",
       "analysis": "叙述个人感受与经历，属记叙。"
      },
      {
       "stem": "【现代文阅读】同上：\"山坡上卧着些小村庄，小村庄的房顶上卧着点雪。\" 中\"卧\"字妙在",
       "options": [
        "写出村庄高大",
        "运用拟人，静景写活",
        "强调雪大",
        "说明位置低"
       ],
       "answer": "B",
       "analysis": "\"卧\"拟人化，将静谧雪景写得温静可亲。"
      },
      {
       "stem": "【现代文阅读】朱自清《春》节选：\"盼望着，盼望着，东风来了，春天的脚步近了。\" 这句话使用的修辞手法是",
       "options": [
        "反复、比喻",
        "排比、夸张",
        "对偶、借代",
        "设问、反问"
       ],
       "answer": "A",
       "analysis": "\"盼望着，盼望着\"为反复，\"春天的脚步\"为比喻。"
      }
     ]
    },
    {
     "name": "二、古诗文阅读（共 4 题，24 分）",
     "items": [
      {
       "stem": "【古诗文】韩愈《师说》：\"师者，所以传道受业解惑也。\" 该句句式为",
       "options": [
        "判断句",
        "被动句",
        "倒装句",
        "省略句"
       ],
       "answer": "A",
       "analysis": "\"者……也\"表判断。"
      },
      {
       "stem": "【古诗文】\"是故弟子不必不如师，师不必贤于弟子。\" 说明",
       "options": [
        "弟子必不如师",
        "师生可互相学习",
        "师必贤于弟子",
        "不必从师"
       ],
       "answer": "B",
       "analysis": "闻道有先后，师生各有长短，可互相学习。"
      },
      {
       "stem": "【默写】故不积跬步，____；不积小流，____。",
       "options": [],
       "answer": "无以至千里；无以成江海",
       "analysis": "出自《劝学》，强调积累。"
      },
      {
       "stem": "【默写】锲而舍之，朽木不折；锲而不舍，____。",
       "options": [],
       "answer": "金石可镂",
       "analysis": "出自《劝学》，强调坚持。"
      }
     ]
    },
    {
     "name": "三、语言运用（共 4 题，20 分）",
     "items": [
      {
       "stem": "【语言运用】将下面句子排序正确的一项是：①清晨我来到公园 ②草坪上露珠晶莹 ③鸟儿在枝头歌唱 ④这一切让人心旷神怡",
       "options": [
        "①②③④",
        "②①③④",
        "③①②④",
        "④①②③"
       ],
       "answer": "A",
       "analysis": "按时间先后与观察顺序：到公园→见露珠→闻鸟鸣→抒发感受。"
      },
      {
       "stem": "【语言运用】下列句子中成语使用正确的一项是",
       "options": [
        "运动会开幕式气势磅礴，令人叹为观止",
        "他上课总是娓娓动听地睡觉",
        "这篇小说差强人意，漏洞百出",
        "以上都不对"
       ],
       "answer": "A",
       "analysis": "叹为观止形容赞叹，使用正确；B、C 误用。"
      },
      {
       "stem": "【语言运用】病句：\"通过老师的帮助，使我的成绩提高了。\" 病因及修改是",
       "options": [
        "搭配不当，删\"成绩\"",
        "缺主语，删\"通过\"或\"使\"",
        "重复累赘，删\"帮助\"",
        "语序不当，调顺序"
       ],
       "answer": "B",
       "analysis": "\"通过……使\"并用淹没主语，删其一。"
      },
      {
       "stem": "【语言运用】下列标点符号使用正确的一项是",
       "options": [
        "我不知道他去哪儿？",
        "他说：\"走吧。\"",
        "苹果、梨、香蕉、等",
        "以上都对"
       ],
       "answer": "B",
       "analysis": "A 陈述句应用句号；C 顿号与\"等\"重复。"
      }
     ]
    },
    {
     "name": "四、作文（1 题，70 分）",
     "items": [
      {
       "stem": "【作文】题目《这，才是成熟的模样》。请列出写作要点。",
       "options": [],
       "answer": "立意：成熟是责任与担当；选材：一次克服困难的成长经历；结构：叙述+抒情+议论；语言：细腻描写，真情实感。",
       "analysis": "评分要点：中心明确、内容充实、情感真实、结构完整。"
      }
     ]
    }
   ]
  },
  {
   "title": "语文 模拟训练卷（第 7 套）",
   "meta": "语文 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、现代文阅读（共 4 题，36 分）",
     "items": [
      {
       "stem": "【现代文阅读】老舍《济南的冬天》节选：\"对于一个在北平住惯的人，像我，冬天要是不刮风，便觉得是奇迹。\" 主要表达方式是",
       "options": [
        "议论",
        "说明",
        "记叙",
        "描写"
       ],
       "answer": "C",
       "analysis": "叙述个人感受与经历，属记叙。"
      },
      {
       "stem": "【现代文阅读】同上：\"山坡上卧着些小村庄，小村庄的房顶上卧着点雪。\" 中\"卧\"字妙在",
       "options": [
        "写出村庄高大",
        "运用拟人，静景写活",
        "强调雪大",
        "说明位置低"
       ],
       "answer": "B",
       "analysis": "\"卧\"拟人化，将静谧雪景写得温静可亲。"
      },
      {
       "stem": "【现代文阅读】朱自清《春》节选：\"盼望着，盼望着，东风来了，春天的脚步近了。\" 这句话使用的修辞手法是",
       "options": [
        "反复、比喻",
        "排比、夸张",
        "对偶、借代",
        "设问、反问"
       ],
       "answer": "A",
       "analysis": "\"盼望着，盼望着\"为反复，\"春天的脚步\"为比喻。"
      },
      {
       "stem": "【现代文阅读】同上：\"一切都像刚睡醒的样子，欣欣然张开了眼。\" 运用的修辞是",
       "options": [
        "比喻",
        "拟人",
        "夸张",
        "排比"
       ],
       "answer": "B",
       "analysis": "赋予万物人的情态\"睡醒\"\"睁眼\"，是拟人。"
      }
     ]
    },
    {
     "name": "二、古诗文阅读（共 4 题，24 分）",
     "items": [
      {
       "stem": "【古诗文】\"是故弟子不必不如师，师不必贤于弟子。\" 说明",
       "options": [
        "弟子必不如师",
        "师生可互相学习",
        "师必贤于弟子",
        "不必从师"
       ],
       "answer": "B",
       "analysis": "闻道有先后，师生各有长短，可互相学习。"
      },
      {
       "stem": "【默写】故不积跬步，____；不积小流，____。",
       "options": [],
       "answer": "无以至千里；无以成江海",
       "analysis": "出自《劝学》，强调积累。"
      },
      {
       "stem": "【默写】锲而舍之，朽木不折；锲而不舍，____。",
       "options": [],
       "answer": "金石可镂",
       "analysis": "出自《劝学》，强调坚持。"
      },
      {
       "stem": "【文言实词】\"假舟楫者，非能水也，而绝江河。\" 中\"绝\"意为",
       "options": [
        "断绝",
        "横渡",
        "极尽",
        "消失"
       ],
       "answer": "B",
       "analysis": "\"绝江河\"即横渡江河。"
      }
     ]
    },
    {
     "name": "三、语言运用（共 4 题，20 分）",
     "items": [
      {
       "stem": "【语言运用】下列句子中成语使用正确的一项是",
       "options": [
        "运动会开幕式气势磅礴，令人叹为观止",
        "他上课总是娓娓动听地睡觉",
        "这篇小说差强人意，漏洞百出",
        "以上都不对"
       ],
       "answer": "A",
       "analysis": "叹为观止形容赞叹，使用正确；B、C 误用。"
      },
      {
       "stem": "【语言运用】病句：\"通过老师的帮助，使我的成绩提高了。\" 病因及修改是",
       "options": [
        "搭配不当，删\"成绩\"",
        "缺主语，删\"通过\"或\"使\"",
        "重复累赘，删\"帮助\"",
        "语序不当，调顺序"
       ],
       "answer": "B",
       "analysis": "\"通过……使\"并用淹没主语，删其一。"
      },
      {
       "stem": "【语言运用】下列标点符号使用正确的一项是",
       "options": [
        "我不知道他去哪儿？",
        "他说：\"走吧。\"",
        "苹果、梨、香蕉、等",
        "以上都对"
       ],
       "answer": "B",
       "analysis": "A 陈述句应用句号；C 顿号与\"等\"重复。"
      },
      {
       "stem": "【语言运用】仿写：例句\"书是钥匙，能开启智慧之门。\" 恰当的一项是",
       "options": [
        "书是钥匙，能开启智慧之门",
        "书是灯塔，能照亮前行之路",
        "书是桌子，能摆放物品",
        "书是食物，能吃下肚"
       ],
       "answer": "B",
       "analysis": "运用比喻且句式一致、意蕴相合。"
      }
     ]
    },
    {
     "name": "四、作文（1 题，70 分）",
     "items": [
      {
       "stem": "【作文】题目《劳动的滋味》。请列出写作要点。",
       "options": [],
       "answer": "写一次具体劳动体验（如家务、农活、志愿服务），突出过程描写与\"滋味\"（感悟：劳动创造价值、来之不易）。",
       "analysis": "评分要点：有细节、有感悟、扣题紧密。"
      }
     ]
    }
   ]
  },
  {
   "title": "语文 模拟训练卷（第 8 套）",
   "meta": "语文 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、现代文阅读（共 4 题，36 分）",
     "items": [
      {
       "stem": "【现代文阅读】同上：\"山坡上卧着些小村庄，小村庄的房顶上卧着点雪。\" 中\"卧\"字妙在",
       "options": [
        "写出村庄高大",
        "运用拟人，静景写活",
        "强调雪大",
        "说明位置低"
       ],
       "answer": "B",
       "analysis": "\"卧\"拟人化，将静谧雪景写得温静可亲。"
      },
      {
       "stem": "【现代文阅读】朱自清《春》节选：\"盼望着，盼望着，东风来了，春天的脚步近了。\" 这句话使用的修辞手法是",
       "options": [
        "反复、比喻",
        "排比、夸张",
        "对偶、借代",
        "设问、反问"
       ],
       "answer": "A",
       "analysis": "\"盼望着，盼望着\"为反复，\"春天的脚步\"为比喻。"
      },
      {
       "stem": "【现代文阅读】同上：\"一切都像刚睡醒的样子，欣欣然张开了眼。\" 运用的修辞是",
       "options": [
        "比喻",
        "拟人",
        "夸张",
        "排比"
       ],
       "answer": "B",
       "analysis": "赋予万物人的情态\"睡醒\"\"睁眼\"，是拟人。"
      },
      {
       "stem": "【现代文阅读】鲁迅《从百草园到三味书屋》节选：\"不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树……\" 这段景物描写的顺序是",
       "options": [
        "由植物到动物",
        "由动物到植物",
        "由高到低",
        "由远及近"
       ],
       "answer": "A",
       "analysis": "先写植物（菜畦、树）后写动物（蝉、黄蜂、叫天子）。"
      }
     ]
    },
    {
     "name": "二、古诗文阅读（共 4 题，24 分）",
     "items": [
      {
       "stem": "【默写】故不积跬步，____；不积小流，____。",
       "options": [],
       "answer": "无以至千里；无以成江海",
       "analysis": "出自《劝学》，强调积累。"
      },
      {
       "stem": "【默写】锲而舍之，朽木不折；锲而不舍，____。",
       "options": [],
       "answer": "金石可镂",
       "analysis": "出自《劝学》，强调坚持。"
      },
      {
       "stem": "【文言实词】\"假舟楫者，非能水也，而绝江河。\" 中\"绝\"意为",
       "options": [
        "断绝",
        "横渡",
        "极尽",
        "消失"
       ],
       "answer": "B",
       "analysis": "\"绝江河\"即横渡江河。"
      },
      {
       "stem": "【文言虚词】\"青，取之于蓝，而青于蓝。\" 中\"而\"表",
       "options": [
        "顺承",
        "转折",
        "并列",
        "修饰"
       ],
       "answer": "B",
       "analysis": "前后语意转折，意为\"却\"。"
      }
     ]
    },
    {
     "name": "三、语言运用（共 4 题，20 分）",
     "items": [
      {
       "stem": "【语言运用】病句：\"通过老师的帮助，使我的成绩提高了。\" 病因及修改是",
       "options": [
        "搭配不当，删\"成绩\"",
        "缺主语，删\"通过\"或\"使\"",
        "重复累赘，删\"帮助\"",
        "语序不当，调顺序"
       ],
       "answer": "B",
       "analysis": "\"通过……使\"并用淹没主语，删其一。"
      },
      {
       "stem": "【语言运用】下列标点符号使用正确的一项是",
       "options": [
        "我不知道他去哪儿？",
        "他说：\"走吧。\"",
        "苹果、梨、香蕉、等",
        "以上都对"
       ],
       "answer": "B",
       "analysis": "A 陈述句应用句号；C 顿号与\"等\"重复。"
      },
      {
       "stem": "【语言运用】仿写：例句\"书是钥匙，能开启智慧之门。\" 恰当的一项是",
       "options": [
        "书是钥匙，能开启智慧之门",
        "书是灯塔，能照亮前行之路",
        "书是桌子，能摆放物品",
        "书是食物，能吃下肚"
       ],
       "answer": "B",
       "analysis": "运用比喻且句式一致、意蕴相合。"
      },
      {
       "stem": "【语言运用】\"静谧\"一词中\"谧\"的读音是",
       "options": [
        "bì",
        "mì",
        "nì",
        "pì"
       ],
       "answer": "B",
       "analysis": "\"谧\"读 mì，意为安静。"
      }
     ]
    },
    {
     "name": "四、作文（1 题，70 分）",
     "items": [
      {
       "stem": "【作文】题目《留一点____给自己》（半命题）。请列出写作要点。",
       "options": [],
       "answer": "补全如\"留一点微笑/空间/勇气给自己\"；写自我鼓励或调节的事例，结尾点明留白的意义。",
       "analysis": "评分要点：补题有新意、叙事具体、立意积极。"
      }
     ]
    }
   ]
  },
  {
   "title": "语文 模拟训练卷（第 9 套）",
   "meta": "语文 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、现代文阅读（共 4 题，36 分）",
     "items": [
      {
       "stem": "【现代文阅读】朱自清《春》节选：\"盼望着，盼望着，东风来了，春天的脚步近了。\" 这句话使用的修辞手法是",
       "options": [
        "反复、比喻",
        "排比、夸张",
        "对偶、借代",
        "设问、反问"
       ],
       "answer": "A",
       "analysis": "\"盼望着，盼望着\"为反复，\"春天的脚步\"为比喻。"
      },
      {
       "stem": "【现代文阅读】同上：\"一切都像刚睡醒的样子，欣欣然张开了眼。\" 运用的修辞是",
       "options": [
        "比喻",
        "拟人",
        "夸张",
        "排比"
       ],
       "answer": "B",
       "analysis": "赋予万物人的情态\"睡醒\"\"睁眼\"，是拟人。"
      },
      {
       "stem": "【现代文阅读】鲁迅《从百草园到三味书屋》节选：\"不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树……\" 这段景物描写的顺序是",
       "options": [
        "由植物到动物",
        "由动物到植物",
        "由高到低",
        "由远及近"
       ],
       "answer": "A",
       "analysis": "先写植物（菜畦、树）后写动物（蝉、黄蜂、叫天子）。"
      },
      {
       "stem": "【现代文阅读】同上：\"油蛉在这里低唱，蟋蟀们在这里弹琴。\" 修辞是",
       "options": [
        "比喻",
        "拟人",
        "排比",
        "夸张"
       ],
       "answer": "B",
       "analysis": "\"低唱\"\"弹琴\"赋予昆虫人的动作，拟人。"
      }
     ]
    },
    {
     "name": "二、古诗文阅读（共 4 题，24 分）",
     "items": [
      {
       "stem": "【默写】锲而舍之，朽木不折；锲而不舍，____。",
       "options": [],
       "answer": "金石可镂",
       "analysis": "出自《劝学》，强调坚持。"
      },
      {
       "stem": "【文言实词】\"假舟楫者，非能水也，而绝江河。\" 中\"绝\"意为",
       "options": [
        "断绝",
        "横渡",
        "极尽",
        "消失"
       ],
       "answer": "B",
       "analysis": "\"绝江河\"即横渡江河。"
      },
      {
       "stem": "【文言虚词】\"青，取之于蓝，而青于蓝。\" 中\"而\"表",
       "options": [
        "顺承",
        "转折",
        "并列",
        "修饰"
       ],
       "answer": "B",
       "analysis": "前后语意转折，意为\"却\"。"
      },
      {
       "stem": "【古诗文】《荀子·劝学》：\"学不可以已。\" 句意是",
       "options": [
        "学习并不难",
        "学习不可以停止",
        "学习要速成",
        "学习没有用处"
       ],
       "answer": "B",
       "analysis": "\"已\"意为停止，全句指学习不能停止。"
      }
     ]
    },
    {
     "name": "三、语言运用（共 4 题，20 分）",
     "items": [
      {
       "stem": "【语言运用】下列标点符号使用正确的一项是",
       "options": [
        "我不知道他去哪儿？",
        "他说：\"走吧。\"",
        "苹果、梨、香蕉、等",
        "以上都对"
       ],
       "answer": "B",
       "analysis": "A 陈述句应用句号；C 顿号与\"等\"重复。"
      },
      {
       "stem": "【语言运用】仿写：例句\"书是钥匙，能开启智慧之门。\" 恰当的一项是",
       "options": [
        "书是钥匙，能开启智慧之门",
        "书是灯塔，能照亮前行之路",
        "书是桌子，能摆放物品",
        "书是食物，能吃下肚"
       ],
       "answer": "B",
       "analysis": "运用比喻且句式一致、意蕴相合。"
      },
      {
       "stem": "【语言运用】\"静谧\"一词中\"谧\"的读音是",
       "options": [
        "bì",
        "mì",
        "nì",
        "pì"
       ],
       "answer": "B",
       "analysis": "\"谧\"读 mì，意为安静。"
      },
      {
       "stem": "【语言运用】下列词语书写完全正确的一项是",
       "options": [
        "再接再励",
        "再接再厉",
        "不记其数",
        "迫不急待"
       ],
       "answer": "B",
       "analysis": "A 应为\"厉\"，C 应为\"计\"，D 应为\"及\"。"
      }
     ]
    },
    {
     "name": "四、作文（1 题，70 分）",
     "items": [
      {
       "stem": "【作文】题目《那一刻，我长大了》。请列出写作要点。",
       "options": [],
       "answer": "选取一个具体事件（如照顾家人、独立解决困难），描写\"那一刻\"的心理变化，点明\"长大\"的内涵。",
       "analysis": "评分要点：情节真实、心理刻画细腻、升华自然。"
      }
     ]
    }
   ]
  },
  {
   "title": "语文 模拟训练卷（第 10 套）",
   "meta": "语文 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、现代文阅读（共 4 题，36 分）",
     "items": [
      {
       "stem": "【现代文阅读】同上：\"一切都像刚睡醒的样子，欣欣然张开了眼。\" 运用的修辞是",
       "options": [
        "比喻",
        "拟人",
        "夸张",
        "排比"
       ],
       "answer": "B",
       "analysis": "赋予万物人的情态\"睡醒\"\"睁眼\"，是拟人。"
      },
      {
       "stem": "【现代文阅读】鲁迅《从百草园到三味书屋》节选：\"不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树……\" 这段景物描写的顺序是",
       "options": [
        "由植物到动物",
        "由动物到植物",
        "由高到低",
        "由远及近"
       ],
       "answer": "A",
       "analysis": "先写植物（菜畦、树）后写动物（蝉、黄蜂、叫天子）。"
      },
      {
       "stem": "【现代文阅读】同上：\"油蛉在这里低唱，蟋蟀们在这里弹琴。\" 修辞是",
       "options": [
        "比喻",
        "拟人",
        "排比",
        "夸张"
       ],
       "answer": "B",
       "analysis": "\"低唱\"\"弹琴\"赋予昆虫人的动作，拟人。"
      },
      {
       "stem": "【现代文阅读】朱自清《背影》节选：\"我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去……\" 主要运用了",
       "options": [
        "语言描写",
        "心理描写",
        "外貌与动作描写",
        "环境描写"
       ],
       "answer": "C",
       "analysis": "\"戴着\"\"穿着\"为外貌，\"走\"\"探身\"为动作描写。"
      }
     ]
    },
    {
     "name": "二、古诗文阅读（共 4 题，24 分）",
     "items": [
      {
       "stem": "【文言实词】\"假舟楫者，非能水也，而绝江河。\" 中\"绝\"意为",
       "options": [
        "断绝",
        "横渡",
        "极尽",
        "消失"
       ],
       "answer": "B",
       "analysis": "\"绝江河\"即横渡江河。"
      },
      {
       "stem": "【文言虚词】\"青，取之于蓝，而青于蓝。\" 中\"而\"表",
       "options": [
        "顺承",
        "转折",
        "并列",
        "修饰"
       ],
       "answer": "B",
       "analysis": "前后语意转折，意为\"却\"。"
      },
      {
       "stem": "【古诗文】《荀子·劝学》：\"学不可以已。\" 句意是",
       "options": [
        "学习并不难",
        "学习不可以停止",
        "学习要速成",
        "学习没有用处"
       ],
       "answer": "B",
       "analysis": "\"已\"意为停止，全句指学习不能停止。"
      },
      {
       "stem": "【古诗文】\"君子博学而日参省乎己，则知明而行无过矣。\" 强调",
       "options": [
        "博学即可",
        "每日反省自我",
        "依靠天赋",
        "师从名师"
       ],
       "answer": "B",
       "analysis": "\"参省乎己\"即反省自己，可增智慧少过错。"
      }
     ]
    },
    {
     "name": "三、语言运用（共 4 题，20 分）",
     "items": [
      {
       "stem": "【语言运用】仿写：例句\"书是钥匙，能开启智慧之门。\" 恰当的一项是",
       "options": [
        "书是钥匙，能开启智慧之门",
        "书是灯塔，能照亮前行之路",
        "书是桌子，能摆放物品",
        "书是食物，能吃下肚"
       ],
       "answer": "B",
       "analysis": "运用比喻且句式一致、意蕴相合。"
      },
      {
       "stem": "【语言运用】\"静谧\"一词中\"谧\"的读音是",
       "options": [
        "bì",
        "mì",
        "nì",
        "pì"
       ],
       "answer": "B",
       "analysis": "\"谧\"读 mì，意为安静。"
      },
      {
       "stem": "【语言运用】下列词语书写完全正确的一项是",
       "options": [
        "再接再励",
        "再接再厉",
        "不记其数",
        "迫不急待"
       ],
       "answer": "B",
       "analysis": "A 应为\"厉\"，C 应为\"计\"，D 应为\"及\"。"
      },
      {
       "stem": "【语言运用】\"请惠存\"一词用于",
       "options": [
        "自己保存",
        "请对方保存（赠物时）",
        "赠送礼物动作",
        "表示道歉"
       ],
       "answer": "B",
       "analysis": "\"惠存\"是敬辞，请别人保存自己赠送的东西。"
      }
     ]
    },
    {
     "name": "四、作文（1 题，70 分）",
     "items": [
      {
       "stem": "【作文】题目《这，才是成熟的模样》。请列出写作要点。",
       "options": [],
       "answer": "立意：成熟是责任与担当；选材：一次克服困难的成长经历；结构：叙述+抒情+议论；语言：细腻描写，真情实感。",
       "analysis": "评分要点：中心明确、内容充实、情感真实、结构完整。"
      }
     ]
    }
   ]
  }
 ],
 "英语": [
  {
   "title": "英语 模拟训练卷（第 1 套）",
   "meta": "英语 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、阅读理解（每题 4 分，共 5 题，40 分）",
     "items": [
      {
       "stem": "【Reading】Tom is a student. He likes reading books. Every morning he reads for an hour. What does Tom like doing?",
       "options": [
        "Reading books",
        "Playing football",
        "Watching TV",
        "Sleeping"
       ],
       "answer": "A",
       "analysis": "原文 He likes reading books。"
      },
      {
       "stem": "【Reading】Mary has a cat. Its name is Mimi. Mimi is white and small. What color is Mimi?",
       "options": [
        "White",
        "Black",
        "Brown",
        "Yellow"
       ],
       "answer": "A",
       "analysis": "原文 Mimi is white。"
      },
      {
       "stem": "【Reading】It is sunny today. We go to the park. We fly kites and have a picnic. What is the weather like?",
       "options": [
        "Sunny",
        "Rainy",
        "Windy",
        "Snowy"
       ],
       "answer": "A",
       "analysis": "原文 It is sunny today。"
      },
      {
       "stem": "【Reading】My school is big. There are 30 classes. We have Chinese, math, English and PE. How many classes are there?",
       "options": [
        "30",
        "20",
        "40",
        "50"
       ],
       "answer": "A",
       "analysis": "原文 There are 30 classes。"
      },
      {
       "stem": "【Reading】Lucy is from London. She speaks English. She wants to learn Chinese. Where is Lucy from?",
       "options": [
        "London",
        "Paris",
        "New York",
        "Tokyo"
       ],
       "answer": "A",
       "analysis": "原文 Lucy is from London。"
      }
     ]
    },
    {
     "name": "二、完形填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "I __ it some water.",
       "options": [
        "give",
        "gives",
        "gave",
        "giving"
       ],
       "answer": "C",
       "analysis": "过去时 gave。"
      },
      {
       "stem": "We played __.",
       "options": [
        "happy",
        "happily",
        "happiness",
        "happiest"
       ],
       "answer": "B",
       "analysis": "修饰动词用副词 happily。"
      },
      {
       "stem": "Then my mother __ me.",
       "options": [
        "call",
        "calls",
        "called",
        "calling"
       ],
       "answer": "C",
       "analysis": "过去时 called。"
      },
      {
       "stem": "We __ home together.",
       "options": [
        "walk",
        "walked",
        "walking",
        "walks"
       ],
       "answer": "B",
       "analysis": "过去时 walked。"
      },
      {
       "stem": "I was very __ that day.",
       "options": [
        "happily",
        "happy",
        "happiness",
        "unhappily"
       ],
       "answer": "B",
       "analysis": "be 后接形容词 happy。"
      },
      {
       "stem": "My father __ a new bike for me.",
       "options": [
        "buy",
        "buys",
        "bought",
        "buying"
       ],
       "answer": "C",
       "analysis": "过去时 bought。"
      },
      {
       "stem": "I __ it every day.",
       "options": [
        "ride",
        "rides",
        "rode",
        "riding"
       ],
       "answer": "A",
       "analysis": "every day 用一般现在时，主语 I 用 ride。"
      },
      {
       "stem": "School __ at 8:00.",
       "options": [
        "start",
        "starts",
        "started",
        "starting"
       ],
       "answer": "B",
       "analysis": "一般现在时，第三人称单数 starts。"
      },
      {
       "stem": "I like __ English.",
       "options": [
        "read",
        "reads",
        "reading",
        "to reading"
       ],
       "answer": "C",
       "analysis": "like doing sth."
      },
      {
       "stem": "She __ a song now.",
       "options": [
        "sing",
        "sings",
        "is singing",
        "sang"
       ],
       "answer": "C",
       "analysis": "now 用现在进行时 is singing。"
      }
     ]
    },
    {
     "name": "三、语法填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "They went to the park __ (happy).",
       "options": [],
       "answer": "happily",
       "analysis": "修饰动词用副词 happily。"
      },
      {
       "stem": "My mother __ (cook) dinner now.",
       "options": [],
       "answer": "is cooking",
       "analysis": "now 现在进行时。"
      },
      {
       "stem": "He __ (can) swim when he was five.",
       "options": [],
       "answer": "could",
       "analysis": "过去能力用 could。"
      },
      {
       "stem": "I enjoy __ (read) novels.",
       "options": [],
       "answer": "reading",
       "analysis": "enjoy doing。"
      },
      {
       "stem": "The book is __ (interest).",
       "options": [],
       "answer": "interesting",
       "analysis": "物作主语用 interesting。"
      },
      {
       "stem": "She said she __ (will) come.",
       "options": [],
       "answer": "would",
       "analysis": "间接引语 will→would。"
      },
      {
       "stem": "We __ (visit) the museum last week.",
       "options": [],
       "answer": "visited",
       "analysis": "last week 过去时。"
      },
      {
       "stem": "He made me __ (laugh).",
       "options": [],
       "answer": "laugh",
       "analysis": "make sb. do sth."
      },
      {
       "stem": "It's time __ (go) home.",
       "options": [],
       "answer": "to go",
       "analysis": "It's time to do。"
      },
      {
       "stem": "__ (not be) late again.",
       "options": [],
       "answer": "Don't be",
       "analysis": "祈使句否定 Don't be。"
      }
     ]
    },
    {
     "name": "四、书面表达（1 题，20 分）",
     "items": [
      {
       "stem": "【Writing】以日记形式写\"一次难忘的周末\"。要点：时间、活动（如爬山/做家务）、感受。",
       "options": [],
       "answer": "格式：左上角日期+天气；正文记叙活动经过；结尾抒发感受。用一般过去时。",
       "analysis": "评分：时态正确、细节生动、感受真实。"
      }
     ]
    }
   ]
  },
  {
   "title": "英语 模拟训练卷（第 2 套）",
   "meta": "英语 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、阅读理解（每题 4 分，共 5 题，40 分）",
     "items": [
      {
       "stem": "【Reading】Mary has a cat. Its name is Mimi. Mimi is white and small. What color is Mimi?",
       "options": [
        "White",
        "Black",
        "Brown",
        "Yellow"
       ],
       "answer": "A",
       "analysis": "原文 Mimi is white。"
      },
      {
       "stem": "【Reading】It is sunny today. We go to the park. We fly kites and have a picnic. What is the weather like?",
       "options": [
        "Sunny",
        "Rainy",
        "Windy",
        "Snowy"
       ],
       "answer": "A",
       "analysis": "原文 It is sunny today。"
      },
      {
       "stem": "【Reading】My school is big. There are 30 classes. We have Chinese, math, English and PE. How many classes are there?",
       "options": [
        "30",
        "20",
        "40",
        "50"
       ],
       "answer": "A",
       "analysis": "原文 There are 30 classes。"
      },
      {
       "stem": "【Reading】Lucy is from London. She speaks English. She wants to learn Chinese. Where is Lucy from?",
       "options": [
        "London",
        "Paris",
        "New York",
        "Tokyo"
       ],
       "answer": "A",
       "analysis": "原文 Lucy is from London。"
      },
      {
       "stem": "【Reading】A: Can I help you? B: I want a red skirt. A: Here you are. Where are they?",
       "options": [
        "In a shop",
        "At school",
        "At home",
        "In a library"
       ],
       "answer": "A",
       "analysis": "买裙子场景发生在商店。"
      }
     ]
    },
    {
     "name": "二、完形填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "We played __.",
       "options": [
        "happy",
        "happily",
        "happiness",
        "happiest"
       ],
       "answer": "B",
       "analysis": "修饰动词用副词 happily。"
      },
      {
       "stem": "Then my mother __ me.",
       "options": [
        "call",
        "calls",
        "called",
        "calling"
       ],
       "answer": "C",
       "analysis": "过去时 called。"
      },
      {
       "stem": "We __ home together.",
       "options": [
        "walk",
        "walked",
        "walking",
        "walks"
       ],
       "answer": "B",
       "analysis": "过去时 walked。"
      },
      {
       "stem": "I was very __ that day.",
       "options": [
        "happily",
        "happy",
        "happiness",
        "unhappily"
       ],
       "answer": "B",
       "analysis": "be 后接形容词 happy。"
      },
      {
       "stem": "My father __ a new bike for me.",
       "options": [
        "buy",
        "buys",
        "bought",
        "buying"
       ],
       "answer": "C",
       "analysis": "过去时 bought。"
      },
      {
       "stem": "I __ it every day.",
       "options": [
        "ride",
        "rides",
        "rode",
        "riding"
       ],
       "answer": "A",
       "analysis": "every day 用一般现在时，主语 I 用 ride。"
      },
      {
       "stem": "School __ at 8:00.",
       "options": [
        "start",
        "starts",
        "started",
        "starting"
       ],
       "answer": "B",
       "analysis": "一般现在时，第三人称单数 starts。"
      },
      {
       "stem": "I like __ English.",
       "options": [
        "read",
        "reads",
        "reading",
        "to reading"
       ],
       "answer": "C",
       "analysis": "like doing sth."
      },
      {
       "stem": "She __ a song now.",
       "options": [
        "sing",
        "sings",
        "is singing",
        "sang"
       ],
       "answer": "C",
       "analysis": "now 用现在进行时 is singing。"
      },
      {
       "stem": "They __ football yesterday.",
       "options": [
        "play",
        "plays",
        "played",
        "playing"
       ],
       "answer": "C",
       "analysis": "yesterday 用过去时 played。"
      }
     ]
    },
    {
     "name": "三、语法填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "My mother __ (cook) dinner now.",
       "options": [],
       "answer": "is cooking",
       "analysis": "now 现在进行时。"
      },
      {
       "stem": "He __ (can) swim when he was five.",
       "options": [],
       "answer": "could",
       "analysis": "过去能力用 could。"
      },
      {
       "stem": "I enjoy __ (read) novels.",
       "options": [],
       "answer": "reading",
       "analysis": "enjoy doing。"
      },
      {
       "stem": "The book is __ (interest).",
       "options": [],
       "answer": "interesting",
       "analysis": "物作主语用 interesting。"
      },
      {
       "stem": "She said she __ (will) come.",
       "options": [],
       "answer": "would",
       "analysis": "间接引语 will→would。"
      },
      {
       "stem": "We __ (visit) the museum last week.",
       "options": [],
       "answer": "visited",
       "analysis": "last week 过去时。"
      },
      {
       "stem": "He made me __ (laugh).",
       "options": [],
       "answer": "laugh",
       "analysis": "make sb. do sth."
      },
      {
       "stem": "It's time __ (go) home.",
       "options": [],
       "answer": "to go",
       "analysis": "It's time to do。"
      },
      {
       "stem": "__ (not be) late again.",
       "options": [],
       "answer": "Don't be",
       "analysis": "祈使句否定 Don't be。"
      },
      {
       "stem": "The boy is good at __ (play) basketball.",
       "options": [],
       "answer": "playing",
       "analysis": "be good at doing。"
      }
     ]
    },
    {
     "name": "四、书面表达（1 题，20 分）",
     "items": [
      {
       "stem": "【Writing】假定你是李华，给英国笔友 Tom 写一封邮件介绍你的学校生活。要点：1.课程丰富 2.社团活动 3.邀请他来访。",
       "options": [],
       "answer": "格式：开头 Dear Tom, 问候；正文三段分别对应三个要点（用一般现在时）；结尾 I'm looking forward to your reply. 注意书信格式与要点齐全。",
       "analysis": "评分：格式正确、要点完整、时态准确、语句通顺。"
      }
     ]
    }
   ]
  },
  {
   "title": "英语 模拟训练卷（第 3 套）",
   "meta": "英语 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、阅读理解（每题 4 分，共 5 题，40 分）",
     "items": [
      {
       "stem": "【Reading】It is sunny today. We go to the park. We fly kites and have a picnic. What is the weather like?",
       "options": [
        "Sunny",
        "Rainy",
        "Windy",
        "Snowy"
       ],
       "answer": "A",
       "analysis": "原文 It is sunny today。"
      },
      {
       "stem": "【Reading】My school is big. There are 30 classes. We have Chinese, math, English and PE. How many classes are there?",
       "options": [
        "30",
        "20",
        "40",
        "50"
       ],
       "answer": "A",
       "analysis": "原文 There are 30 classes。"
      },
      {
       "stem": "【Reading】Lucy is from London. She speaks English. She wants to learn Chinese. Where is Lucy from?",
       "options": [
        "London",
        "Paris",
        "New York",
        "Tokyo"
       ],
       "answer": "A",
       "analysis": "原文 Lucy is from London。"
      },
      {
       "stem": "【Reading】A: Can I help you? B: I want a red skirt. A: Here you are. Where are they?",
       "options": [
        "In a shop",
        "At school",
        "At home",
        "In a library"
       ],
       "answer": "A",
       "analysis": "买裙子场景发生在商店。"
      },
      {
       "stem": "【Reading】It's 7:00. Time for breakfast. I have milk and bread. What does the writer have for breakfast?",
       "options": [
        "Milk and bread",
        "Eggs",
        "Rice",
        "Noodles"
       ],
       "answer": "A",
       "analysis": "原文 I have milk and bread。"
      }
     ]
    },
    {
     "name": "二、完形填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "Then my mother __ me.",
       "options": [
        "call",
        "calls",
        "called",
        "calling"
       ],
       "answer": "C",
       "analysis": "过去时 called。"
      },
      {
       "stem": "We __ home together.",
       "options": [
        "walk",
        "walked",
        "walking",
        "walks"
       ],
       "answer": "B",
       "analysis": "过去时 walked。"
      },
      {
       "stem": "I was very __ that day.",
       "options": [
        "happily",
        "happy",
        "happiness",
        "unhappily"
       ],
       "answer": "B",
       "analysis": "be 后接形容词 happy。"
      },
      {
       "stem": "My father __ a new bike for me.",
       "options": [
        "buy",
        "buys",
        "bought",
        "buying"
       ],
       "answer": "C",
       "analysis": "过去时 bought。"
      },
      {
       "stem": "I __ it every day.",
       "options": [
        "ride",
        "rides",
        "rode",
        "riding"
       ],
       "answer": "A",
       "analysis": "every day 用一般现在时，主语 I 用 ride。"
      },
      {
       "stem": "School __ at 8:00.",
       "options": [
        "start",
        "starts",
        "started",
        "starting"
       ],
       "answer": "B",
       "analysis": "一般现在时，第三人称单数 starts。"
      },
      {
       "stem": "I like __ English.",
       "options": [
        "read",
        "reads",
        "reading",
        "to reading"
       ],
       "answer": "C",
       "analysis": "like doing sth."
      },
      {
       "stem": "She __ a song now.",
       "options": [
        "sing",
        "sings",
        "is singing",
        "sang"
       ],
       "answer": "C",
       "analysis": "now 用现在进行时 is singing。"
      },
      {
       "stem": "They __ football yesterday.",
       "options": [
        "play",
        "plays",
        "played",
        "playing"
       ],
       "answer": "C",
       "analysis": "yesterday 用过去时 played。"
      },
      {
       "stem": "He __ to bed at 9:00.",
       "options": [
        "go",
        "goes",
        "went",
        "going"
       ],
       "answer": "B",
       "analysis": "一般现在时，三单 goes。"
      }
     ]
    },
    {
     "name": "三、语法填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "He __ (can) swim when he was five.",
       "options": [],
       "answer": "could",
       "analysis": "过去能力用 could。"
      },
      {
       "stem": "I enjoy __ (read) novels.",
       "options": [],
       "answer": "reading",
       "analysis": "enjoy doing。"
      },
      {
       "stem": "The book is __ (interest).",
       "options": [],
       "answer": "interesting",
       "analysis": "物作主语用 interesting。"
      },
      {
       "stem": "She said she __ (will) come.",
       "options": [],
       "answer": "would",
       "analysis": "间接引语 will→would。"
      },
      {
       "stem": "We __ (visit) the museum last week.",
       "options": [],
       "answer": "visited",
       "analysis": "last week 过去时。"
      },
      {
       "stem": "He made me __ (laugh).",
       "options": [],
       "answer": "laugh",
       "analysis": "make sb. do sth."
      },
      {
       "stem": "It's time __ (go) home.",
       "options": [],
       "answer": "to go",
       "analysis": "It's time to do。"
      },
      {
       "stem": "__ (not be) late again.",
       "options": [],
       "answer": "Don't be",
       "analysis": "祈使句否定 Don't be。"
      },
      {
       "stem": "The boy is good at __ (play) basketball.",
       "options": [],
       "answer": "playing",
       "analysis": "be good at doing。"
      },
      {
       "stem": "If it __ (rain) tomorrow, we will stay home.",
       "options": [],
       "answer": "rains",
       "analysis": "条件状语从句主将从现，三单 rains。"
      }
     ]
    },
    {
     "name": "四、书面表达（1 题，20 分）",
     "items": [
      {
       "stem": "【Writing】以\"My Favorite Sport\"为题写一篇约 60 词短文。要点：运动名称、喜欢的原因、运动频率。",
       "options": [],
       "answer": "结构：首句点明运动；中间写原因（健康/快乐/交友）；末句写频率（every weekend）。用一般现在时。",
       "analysis": "评分：覆盖要点、逻辑清晰、无重大语法错误。"
      }
     ]
    }
   ]
  },
  {
   "title": "英语 模拟训练卷（第 4 套）",
   "meta": "英语 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、阅读理解（每题 4 分，共 5 题，40 分）",
     "items": [
      {
       "stem": "【Reading】My school is big. There are 30 classes. We have Chinese, math, English and PE. How many classes are there?",
       "options": [
        "30",
        "20",
        "40",
        "50"
       ],
       "answer": "A",
       "analysis": "原文 There are 30 classes。"
      },
      {
       "stem": "【Reading】Lucy is from London. She speaks English. She wants to learn Chinese. Where is Lucy from?",
       "options": [
        "London",
        "Paris",
        "New York",
        "Tokyo"
       ],
       "answer": "A",
       "analysis": "原文 Lucy is from London。"
      },
      {
       "stem": "【Reading】A: Can I help you? B: I want a red skirt. A: Here you are. Where are they?",
       "options": [
        "In a shop",
        "At school",
        "At home",
        "In a library"
       ],
       "answer": "A",
       "analysis": "买裙子场景发生在商店。"
      },
      {
       "stem": "【Reading】It's 7:00. Time for breakfast. I have milk and bread. What does the writer have for breakfast?",
       "options": [
        "Milk and bread",
        "Eggs",
        "Rice",
        "Noodles"
       ],
       "answer": "A",
       "analysis": "原文 I have milk and bread。"
      },
      {
       "stem": "【Reading】My friend Jack is good at sports. He plays basketball after school. What sport does Jack play?",
       "options": [
        "Basketball",
        "Football",
        "Tennis",
        "Swimming"
       ],
       "answer": "A",
       "analysis": "原文 He plays basketball。"
      }
     ]
    },
    {
     "name": "二、完形填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "We __ home together.",
       "options": [
        "walk",
        "walked",
        "walking",
        "walks"
       ],
       "answer": "B",
       "analysis": "过去时 walked。"
      },
      {
       "stem": "I was very __ that day.",
       "options": [
        "happily",
        "happy",
        "happiness",
        "unhappily"
       ],
       "answer": "B",
       "analysis": "be 后接形容词 happy。"
      },
      {
       "stem": "My father __ a new bike for me.",
       "options": [
        "buy",
        "buys",
        "bought",
        "buying"
       ],
       "answer": "C",
       "analysis": "过去时 bought。"
      },
      {
       "stem": "I __ it every day.",
       "options": [
        "ride",
        "rides",
        "rode",
        "riding"
       ],
       "answer": "A",
       "analysis": "every day 用一般现在时，主语 I 用 ride。"
      },
      {
       "stem": "School __ at 8:00.",
       "options": [
        "start",
        "starts",
        "started",
        "starting"
       ],
       "answer": "B",
       "analysis": "一般现在时，第三人称单数 starts。"
      },
      {
       "stem": "I like __ English.",
       "options": [
        "read",
        "reads",
        "reading",
        "to reading"
       ],
       "answer": "C",
       "analysis": "like doing sth."
      },
      {
       "stem": "She __ a song now.",
       "options": [
        "sing",
        "sings",
        "is singing",
        "sang"
       ],
       "answer": "C",
       "analysis": "now 用现在进行时 is singing。"
      },
      {
       "stem": "They __ football yesterday.",
       "options": [
        "play",
        "plays",
        "played",
        "playing"
       ],
       "answer": "C",
       "analysis": "yesterday 用过去时 played。"
      },
      {
       "stem": "He __ to bed at 9:00.",
       "options": [
        "go",
        "goes",
        "went",
        "going"
       ],
       "answer": "B",
       "analysis": "一般现在时，三单 goes。"
      },
      {
       "stem": "__ you like apples?",
       "options": [
        "Do",
        "Does",
        "Are",
        "Is"
       ],
       "answer": "A",
       "analysis": "主语 you 用助动词 Do。"
      }
     ]
    },
    {
     "name": "三、语法填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "I enjoy __ (read) novels.",
       "options": [],
       "answer": "reading",
       "analysis": "enjoy doing。"
      },
      {
       "stem": "The book is __ (interest).",
       "options": [],
       "answer": "interesting",
       "analysis": "物作主语用 interesting。"
      },
      {
       "stem": "She said she __ (will) come.",
       "options": [],
       "answer": "would",
       "analysis": "间接引语 will→would。"
      },
      {
       "stem": "We __ (visit) the museum last week.",
       "options": [],
       "answer": "visited",
       "analysis": "last week 过去时。"
      },
      {
       "stem": "He made me __ (laugh).",
       "options": [],
       "answer": "laugh",
       "analysis": "make sb. do sth."
      },
      {
       "stem": "It's time __ (go) home.",
       "options": [],
       "answer": "to go",
       "analysis": "It's time to do。"
      },
      {
       "stem": "__ (not be) late again.",
       "options": [],
       "answer": "Don't be",
       "analysis": "祈使句否定 Don't be。"
      },
      {
       "stem": "The boy is good at __ (play) basketball.",
       "options": [],
       "answer": "playing",
       "analysis": "be good at doing。"
      },
      {
       "stem": "If it __ (rain) tomorrow, we will stay home.",
       "options": [],
       "answer": "rains",
       "analysis": "条件状语从句主将从现，三单 rains。"
      },
      {
       "stem": "She __ (go) to school by bike every day.",
       "options": [],
       "answer": "goes",
       "analysis": "主语三单，一般现在时 goes。"
      }
     ]
    },
    {
     "name": "四、书面表达（1 题，20 分）",
     "items": [
      {
       "stem": "【Writing】你是班长，写一则通知：本周六上午 8:00 在校门口集合去博物馆。要点：时间、地点、携带物品（笔记本、水）。",
       "options": [],
       "answer": "格式：NOTICE 标题；正文写明时间、地点、事项、携带物；落款 班长+日期。",
       "analysis": "评分：要素齐全、语言简洁、格式规范。"
      }
     ]
    }
   ]
  },
  {
   "title": "英语 模拟训练卷（第 5 套）",
   "meta": "英语 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、阅读理解（每题 4 分，共 5 题，40 分）",
     "items": [
      {
       "stem": "【Reading】Lucy is from London. She speaks English. She wants to learn Chinese. Where is Lucy from?",
       "options": [
        "London",
        "Paris",
        "New York",
        "Tokyo"
       ],
       "answer": "A",
       "analysis": "原文 Lucy is from London。"
      },
      {
       "stem": "【Reading】A: Can I help you? B: I want a red skirt. A: Here you are. Where are they?",
       "options": [
        "In a shop",
        "At school",
        "At home",
        "In a library"
       ],
       "answer": "A",
       "analysis": "买裙子场景发生在商店。"
      },
      {
       "stem": "【Reading】It's 7:00. Time for breakfast. I have milk and bread. What does the writer have for breakfast?",
       "options": [
        "Milk and bread",
        "Eggs",
        "Rice",
        "Noodles"
       ],
       "answer": "A",
       "analysis": "原文 I have milk and bread。"
      },
      {
       "stem": "【Reading】My friend Jack is good at sports. He plays basketball after school. What sport does Jack play?",
       "options": [
        "Basketball",
        "Football",
        "Tennis",
        "Swimming"
       ],
       "answer": "A",
       "analysis": "原文 He plays basketball。"
      },
      {
       "stem": "【Reading】We should protect the earth. We can plant more trees and save water. What can we do to help?",
       "options": [
        "Plant trees and save water",
        "Cut trees",
        "Waste water",
        "Kill animals"
       ],
       "answer": "A",
       "analysis": "原文 plant more trees and save water。"
      }
     ]
    },
    {
     "name": "二、完形填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "I was very __ that day.",
       "options": [
        "happily",
        "happy",
        "happiness",
        "unhappily"
       ],
       "answer": "B",
       "analysis": "be 后接形容词 happy。"
      },
      {
       "stem": "My father __ a new bike for me.",
       "options": [
        "buy",
        "buys",
        "bought",
        "buying"
       ],
       "answer": "C",
       "analysis": "过去时 bought。"
      },
      {
       "stem": "I __ it every day.",
       "options": [
        "ride",
        "rides",
        "rode",
        "riding"
       ],
       "answer": "A",
       "analysis": "every day 用一般现在时，主语 I 用 ride。"
      },
      {
       "stem": "School __ at 8:00.",
       "options": [
        "start",
        "starts",
        "started",
        "starting"
       ],
       "answer": "B",
       "analysis": "一般现在时，第三人称单数 starts。"
      },
      {
       "stem": "I like __ English.",
       "options": [
        "read",
        "reads",
        "reading",
        "to reading"
       ],
       "answer": "C",
       "analysis": "like doing sth."
      },
      {
       "stem": "She __ a song now.",
       "options": [
        "sing",
        "sings",
        "is singing",
        "sang"
       ],
       "answer": "C",
       "analysis": "now 用现在进行时 is singing。"
      },
      {
       "stem": "They __ football yesterday.",
       "options": [
        "play",
        "plays",
        "played",
        "playing"
       ],
       "answer": "C",
       "analysis": "yesterday 用过去时 played。"
      },
      {
       "stem": "He __ to bed at 9:00.",
       "options": [
        "go",
        "goes",
        "went",
        "going"
       ],
       "answer": "B",
       "analysis": "一般现在时，三单 goes。"
      },
      {
       "stem": "__ you like apples?",
       "options": [
        "Do",
        "Does",
        "Are",
        "Is"
       ],
       "answer": "A",
       "analysis": "主语 you 用助动词 Do。"
      },
      {
       "stem": "There __ some milk in the glass.",
       "options": [
        "is",
        "are",
        "am",
        "be"
       ],
       "answer": "A",
       "analysis": "milk 不可数，用 is。"
      }
     ]
    },
    {
     "name": "三、语法填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "The book is __ (interest).",
       "options": [],
       "answer": "interesting",
       "analysis": "物作主语用 interesting。"
      },
      {
       "stem": "She said she __ (will) come.",
       "options": [],
       "answer": "would",
       "analysis": "间接引语 will→would。"
      },
      {
       "stem": "We __ (visit) the museum last week.",
       "options": [],
       "answer": "visited",
       "analysis": "last week 过去时。"
      },
      {
       "stem": "He made me __ (laugh).",
       "options": [],
       "answer": "laugh",
       "analysis": "make sb. do sth."
      },
      {
       "stem": "It's time __ (go) home.",
       "options": [],
       "answer": "to go",
       "analysis": "It's time to do。"
      },
      {
       "stem": "__ (not be) late again.",
       "options": [],
       "answer": "Don't be",
       "analysis": "祈使句否定 Don't be。"
      },
      {
       "stem": "The boy is good at __ (play) basketball.",
       "options": [],
       "answer": "playing",
       "analysis": "be good at doing。"
      },
      {
       "stem": "If it __ (rain) tomorrow, we will stay home.",
       "options": [],
       "answer": "rains",
       "analysis": "条件状语从句主将从现，三单 rains。"
      },
      {
       "stem": "She __ (go) to school by bike every day.",
       "options": [],
       "answer": "goes",
       "analysis": "主语三单，一般现在时 goes。"
      },
      {
       "stem": "They __ (be) students.",
       "options": [],
       "answer": "are",
       "analysis": "复数用 are。"
      }
     ]
    },
    {
     "name": "四、书面表达（1 题，20 分）",
     "items": [
      {
       "stem": "【Writing】以日记形式写\"一次难忘的周末\"。要点：时间、活动（如爬山/做家务）、感受。",
       "options": [],
       "answer": "格式：左上角日期+天气；正文记叙活动经过；结尾抒发感受。用一般过去时。",
       "analysis": "评分：时态正确、细节生动、感受真实。"
      }
     ]
    }
   ]
  },
  {
   "title": "英语 模拟训练卷（第 6 套）",
   "meta": "英语 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、阅读理解（每题 4 分，共 5 题，40 分）",
     "items": [
      {
       "stem": "【Reading】A: Can I help you? B: I want a red skirt. A: Here you are. Where are they?",
       "options": [
        "In a shop",
        "At school",
        "At home",
        "In a library"
       ],
       "answer": "A",
       "analysis": "买裙子场景发生在商店。"
      },
      {
       "stem": "【Reading】It's 7:00. Time for breakfast. I have milk and bread. What does the writer have for breakfast?",
       "options": [
        "Milk and bread",
        "Eggs",
        "Rice",
        "Noodles"
       ],
       "answer": "A",
       "analysis": "原文 I have milk and bread。"
      },
      {
       "stem": "【Reading】My friend Jack is good at sports. He plays basketball after school. What sport does Jack play?",
       "options": [
        "Basketball",
        "Football",
        "Tennis",
        "Swimming"
       ],
       "answer": "A",
       "analysis": "原文 He plays basketball。"
      },
      {
       "stem": "【Reading】We should protect the earth. We can plant more trees and save water. What can we do to help?",
       "options": [
        "Plant trees and save water",
        "Cut trees",
        "Waste water",
        "Kill animals"
       ],
       "answer": "A",
       "analysis": "原文 plant more trees and save water。"
      },
      {
       "stem": "【Reading】English is useful. I study it hard every day. Why does the writer study English?",
       "options": [
        "Because it is useful",
        "Because it is easy",
        "Because it is boring",
        "Because he must"
       ],
       "answer": "A",
       "analysis": "原文 English is useful。"
      }
     ]
    },
    {
     "name": "二、完形填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "My father __ a new bike for me.",
       "options": [
        "buy",
        "buys",
        "bought",
        "buying"
       ],
       "answer": "C",
       "analysis": "过去时 bought。"
      },
      {
       "stem": "I __ it every day.",
       "options": [
        "ride",
        "rides",
        "rode",
        "riding"
       ],
       "answer": "A",
       "analysis": "every day 用一般现在时，主语 I 用 ride。"
      },
      {
       "stem": "School __ at 8:00.",
       "options": [
        "start",
        "starts",
        "started",
        "starting"
       ],
       "answer": "B",
       "analysis": "一般现在时，第三人称单数 starts。"
      },
      {
       "stem": "I like __ English.",
       "options": [
        "read",
        "reads",
        "reading",
        "to reading"
       ],
       "answer": "C",
       "analysis": "like doing sth."
      },
      {
       "stem": "She __ a song now.",
       "options": [
        "sing",
        "sings",
        "is singing",
        "sang"
       ],
       "answer": "C",
       "analysis": "now 用现在进行时 is singing。"
      },
      {
       "stem": "They __ football yesterday.",
       "options": [
        "play",
        "plays",
        "played",
        "playing"
       ],
       "answer": "C",
       "analysis": "yesterday 用过去时 played。"
      },
      {
       "stem": "He __ to bed at 9:00.",
       "options": [
        "go",
        "goes",
        "went",
        "going"
       ],
       "answer": "B",
       "analysis": "一般现在时，三单 goes。"
      },
      {
       "stem": "__ you like apples?",
       "options": [
        "Do",
        "Does",
        "Are",
        "Is"
       ],
       "answer": "A",
       "analysis": "主语 you 用助动词 Do。"
      },
      {
       "stem": "There __ some milk in the glass.",
       "options": [
        "is",
        "are",
        "am",
        "be"
       ],
       "answer": "A",
       "analysis": "milk 不可数，用 is。"
      },
      {
       "stem": "I am __ in music.",
       "options": [
        "interest",
        "interested",
        "interesting",
        "interests"
       ],
       "answer": "B",
       "analysis": "be interested in 对……感兴趣。"
      }
     ]
    },
    {
     "name": "三、语法填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "She said she __ (will) come.",
       "options": [],
       "answer": "would",
       "analysis": "间接引语 will→would。"
      },
      {
       "stem": "We __ (visit) the museum last week.",
       "options": [],
       "answer": "visited",
       "analysis": "last week 过去时。"
      },
      {
       "stem": "He made me __ (laugh).",
       "options": [],
       "answer": "laugh",
       "analysis": "make sb. do sth."
      },
      {
       "stem": "It's time __ (go) home.",
       "options": [],
       "answer": "to go",
       "analysis": "It's time to do。"
      },
      {
       "stem": "__ (not be) late again.",
       "options": [],
       "answer": "Don't be",
       "analysis": "祈使句否定 Don't be。"
      },
      {
       "stem": "The boy is good at __ (play) basketball.",
       "options": [],
       "answer": "playing",
       "analysis": "be good at doing。"
      },
      {
       "stem": "If it __ (rain) tomorrow, we will stay home.",
       "options": [],
       "answer": "rains",
       "analysis": "条件状语从句主将从现，三单 rains。"
      },
      {
       "stem": "She __ (go) to school by bike every day.",
       "options": [],
       "answer": "goes",
       "analysis": "主语三单，一般现在时 goes。"
      },
      {
       "stem": "They __ (be) students.",
       "options": [],
       "answer": "are",
       "analysis": "复数用 are。"
      },
      {
       "stem": "He __ (have) a dog.",
       "options": [],
       "answer": "has",
       "analysis": "三单 has。"
      }
     ]
    },
    {
     "name": "四、书面表达（1 题，20 分）",
     "items": [
      {
       "stem": "【Writing】假定你是李华，给英国笔友 Tom 写一封邮件介绍你的学校生活。要点：1.课程丰富 2.社团活动 3.邀请他来访。",
       "options": [],
       "answer": "格式：开头 Dear Tom, 问候；正文三段分别对应三个要点（用一般现在时）；结尾 I'm looking forward to your reply. 注意书信格式与要点齐全。",
       "analysis": "评分：格式正确、要点完整、时态准确、语句通顺。"
      }
     ]
    }
   ]
  },
  {
   "title": "英语 模拟训练卷（第 7 套）",
   "meta": "英语 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、阅读理解（每题 4 分，共 5 题，40 分）",
     "items": [
      {
       "stem": "【Reading】It's 7:00. Time for breakfast. I have milk and bread. What does the writer have for breakfast?",
       "options": [
        "Milk and bread",
        "Eggs",
        "Rice",
        "Noodles"
       ],
       "answer": "A",
       "analysis": "原文 I have milk and bread。"
      },
      {
       "stem": "【Reading】My friend Jack is good at sports. He plays basketball after school. What sport does Jack play?",
       "options": [
        "Basketball",
        "Football",
        "Tennis",
        "Swimming"
       ],
       "answer": "A",
       "analysis": "原文 He plays basketball。"
      },
      {
       "stem": "【Reading】We should protect the earth. We can plant more trees and save water. What can we do to help?",
       "options": [
        "Plant trees and save water",
        "Cut trees",
        "Waste water",
        "Kill animals"
       ],
       "answer": "A",
       "analysis": "原文 plant more trees and save water。"
      },
      {
       "stem": "【Reading】English is useful. I study it hard every day. Why does the writer study English?",
       "options": [
        "Because it is useful",
        "Because it is easy",
        "Because it is boring",
        "Because he must"
       ],
       "answer": "A",
       "analysis": "原文 English is useful。"
      },
      {
       "stem": "【Reading】Tom is a student. He likes reading books. Every morning he reads for an hour. What does Tom like doing?",
       "options": [
        "Reading books",
        "Playing football",
        "Watching TV",
        "Sleeping"
       ],
       "answer": "A",
       "analysis": "原文 He likes reading books。"
      }
     ]
    },
    {
     "name": "二、完形填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "I __ it every day.",
       "options": [
        "ride",
        "rides",
        "rode",
        "riding"
       ],
       "answer": "A",
       "analysis": "every day 用一般现在时，主语 I 用 ride。"
      },
      {
       "stem": "School __ at 8:00.",
       "options": [
        "start",
        "starts",
        "started",
        "starting"
       ],
       "answer": "B",
       "analysis": "一般现在时，第三人称单数 starts。"
      },
      {
       "stem": "I like __ English.",
       "options": [
        "read",
        "reads",
        "reading",
        "to reading"
       ],
       "answer": "C",
       "analysis": "like doing sth."
      },
      {
       "stem": "She __ a song now.",
       "options": [
        "sing",
        "sings",
        "is singing",
        "sang"
       ],
       "answer": "C",
       "analysis": "now 用现在进行时 is singing。"
      },
      {
       "stem": "They __ football yesterday.",
       "options": [
        "play",
        "plays",
        "played",
        "playing"
       ],
       "answer": "C",
       "analysis": "yesterday 用过去时 played。"
      },
      {
       "stem": "He __ to bed at 9:00.",
       "options": [
        "go",
        "goes",
        "went",
        "going"
       ],
       "answer": "B",
       "analysis": "一般现在时，三单 goes。"
      },
      {
       "stem": "__ you like apples?",
       "options": [
        "Do",
        "Does",
        "Are",
        "Is"
       ],
       "answer": "A",
       "analysis": "主语 you 用助动词 Do。"
      },
      {
       "stem": "There __ some milk in the glass.",
       "options": [
        "is",
        "are",
        "am",
        "be"
       ],
       "answer": "A",
       "analysis": "milk 不可数，用 is。"
      },
      {
       "stem": "I am __ in music.",
       "options": [
        "interest",
        "interested",
        "interesting",
        "interests"
       ],
       "answer": "B",
       "analysis": "be interested in 对……感兴趣。"
      },
      {
       "stem": "Last Sunday, I __ to the park.",
       "options": [
        "go",
        "went",
        "going",
        "goes"
       ],
       "answer": "B",
       "analysis": "last Sunday 用一般过去时 went。"
      }
     ]
    },
    {
     "name": "三、语法填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "We __ (visit) the museum last week.",
       "options": [],
       "answer": "visited",
       "analysis": "last week 过去时。"
      },
      {
       "stem": "He made me __ (laugh).",
       "options": [],
       "answer": "laugh",
       "analysis": "make sb. do sth."
      },
      {
       "stem": "It's time __ (go) home.",
       "options": [],
       "answer": "to go",
       "analysis": "It's time to do。"
      },
      {
       "stem": "__ (not be) late again.",
       "options": [],
       "answer": "Don't be",
       "analysis": "祈使句否定 Don't be。"
      },
      {
       "stem": "The boy is good at __ (play) basketball.",
       "options": [],
       "answer": "playing",
       "analysis": "be good at doing。"
      },
      {
       "stem": "If it __ (rain) tomorrow, we will stay home.",
       "options": [],
       "answer": "rains",
       "analysis": "条件状语从句主将从现，三单 rains。"
      },
      {
       "stem": "She __ (go) to school by bike every day.",
       "options": [],
       "answer": "goes",
       "analysis": "主语三单，一般现在时 goes。"
      },
      {
       "stem": "They __ (be) students.",
       "options": [],
       "answer": "are",
       "analysis": "复数用 are。"
      },
      {
       "stem": "He __ (have) a dog.",
       "options": [],
       "answer": "has",
       "analysis": "三单 has。"
      },
      {
       "stem": "I __ (not like) apples.",
       "options": [],
       "answer": "don't like",
       "analysis": "主语 I 用 don't。"
      }
     ]
    },
    {
     "name": "四、书面表达（1 题，20 分）",
     "items": [
      {
       "stem": "【Writing】以\"My Favorite Sport\"为题写一篇约 60 词短文。要点：运动名称、喜欢的原因、运动频率。",
       "options": [],
       "answer": "结构：首句点明运动；中间写原因（健康/快乐/交友）；末句写频率（every weekend）。用一般现在时。",
       "analysis": "评分：覆盖要点、逻辑清晰、无重大语法错误。"
      }
     ]
    }
   ]
  },
  {
   "title": "英语 模拟训练卷（第 8 套）",
   "meta": "英语 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、阅读理解（每题 4 分，共 5 题，40 分）",
     "items": [
      {
       "stem": "【Reading】My friend Jack is good at sports. He plays basketball after school. What sport does Jack play?",
       "options": [
        "Basketball",
        "Football",
        "Tennis",
        "Swimming"
       ],
       "answer": "A",
       "analysis": "原文 He plays basketball。"
      },
      {
       "stem": "【Reading】We should protect the earth. We can plant more trees and save water. What can we do to help?",
       "options": [
        "Plant trees and save water",
        "Cut trees",
        "Waste water",
        "Kill animals"
       ],
       "answer": "A",
       "analysis": "原文 plant more trees and save water。"
      },
      {
       "stem": "【Reading】English is useful. I study it hard every day. Why does the writer study English?",
       "options": [
        "Because it is useful",
        "Because it is easy",
        "Because it is boring",
        "Because he must"
       ],
       "answer": "A",
       "analysis": "原文 English is useful。"
      },
      {
       "stem": "【Reading】Tom is a student. He likes reading books. Every morning he reads for an hour. What does Tom like doing?",
       "options": [
        "Reading books",
        "Playing football",
        "Watching TV",
        "Sleeping"
       ],
       "answer": "A",
       "analysis": "原文 He likes reading books。"
      },
      {
       "stem": "【Reading】Mary has a cat. Its name is Mimi. Mimi is white and small. What color is Mimi?",
       "options": [
        "White",
        "Black",
        "Brown",
        "Yellow"
       ],
       "answer": "A",
       "analysis": "原文 Mimi is white。"
      }
     ]
    },
    {
     "name": "二、完形填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "School __ at 8:00.",
       "options": [
        "start",
        "starts",
        "started",
        "starting"
       ],
       "answer": "B",
       "analysis": "一般现在时，第三人称单数 starts。"
      },
      {
       "stem": "I like __ English.",
       "options": [
        "read",
        "reads",
        "reading",
        "to reading"
       ],
       "answer": "C",
       "analysis": "like doing sth."
      },
      {
       "stem": "She __ a song now.",
       "options": [
        "sing",
        "sings",
        "is singing",
        "sang"
       ],
       "answer": "C",
       "analysis": "now 用现在进行时 is singing。"
      },
      {
       "stem": "They __ football yesterday.",
       "options": [
        "play",
        "plays",
        "played",
        "playing"
       ],
       "answer": "C",
       "analysis": "yesterday 用过去时 played。"
      },
      {
       "stem": "He __ to bed at 9:00.",
       "options": [
        "go",
        "goes",
        "went",
        "going"
       ],
       "answer": "B",
       "analysis": "一般现在时，三单 goes。"
      },
      {
       "stem": "__ you like apples?",
       "options": [
        "Do",
        "Does",
        "Are",
        "Is"
       ],
       "answer": "A",
       "analysis": "主语 you 用助动词 Do。"
      },
      {
       "stem": "There __ some milk in the glass.",
       "options": [
        "is",
        "are",
        "am",
        "be"
       ],
       "answer": "A",
       "analysis": "milk 不可数，用 is。"
      },
      {
       "stem": "I am __ in music.",
       "options": [
        "interest",
        "interested",
        "interesting",
        "interests"
       ],
       "answer": "B",
       "analysis": "be interested in 对……感兴趣。"
      },
      {
       "stem": "Last Sunday, I __ to the park.",
       "options": [
        "go",
        "went",
        "going",
        "goes"
       ],
       "answer": "B",
       "analysis": "last Sunday 用一般过去时 went。"
      },
      {
       "stem": "The weather was __.",
       "options": [
        "sun",
        "suny",
        "sunny",
        "sunning"
       ],
       "answer": "C",
       "analysis": "be 动词后接形容词 sunny。"
      }
     ]
    },
    {
     "name": "三、语法填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "He made me __ (laugh).",
       "options": [],
       "answer": "laugh",
       "analysis": "make sb. do sth."
      },
      {
       "stem": "It's time __ (go) home.",
       "options": [],
       "answer": "to go",
       "analysis": "It's time to do。"
      },
      {
       "stem": "__ (not be) late again.",
       "options": [],
       "answer": "Don't be",
       "analysis": "祈使句否定 Don't be。"
      },
      {
       "stem": "The boy is good at __ (play) basketball.",
       "options": [],
       "answer": "playing",
       "analysis": "be good at doing。"
      },
      {
       "stem": "If it __ (rain) tomorrow, we will stay home.",
       "options": [],
       "answer": "rains",
       "analysis": "条件状语从句主将从现，三单 rains。"
      },
      {
       "stem": "She __ (go) to school by bike every day.",
       "options": [],
       "answer": "goes",
       "analysis": "主语三单，一般现在时 goes。"
      },
      {
       "stem": "They __ (be) students.",
       "options": [],
       "answer": "are",
       "analysis": "复数用 are。"
      },
      {
       "stem": "He __ (have) a dog.",
       "options": [],
       "answer": "has",
       "analysis": "三单 has。"
      },
      {
       "stem": "I __ (not like) apples.",
       "options": [],
       "answer": "don't like",
       "analysis": "主语 I 用 don't。"
      },
      {
       "stem": "__ (do) he play soccer?",
       "options": [],
       "answer": "Does",
       "analysis": "三单用 Does。"
      }
     ]
    },
    {
     "name": "四、书面表达（1 题，20 分）",
     "items": [
      {
       "stem": "【Writing】你是班长，写一则通知：本周六上午 8:00 在校门口集合去博物馆。要点：时间、地点、携带物品（笔记本、水）。",
       "options": [],
       "answer": "格式：NOTICE 标题；正文写明时间、地点、事项、携带物；落款 班长+日期。",
       "analysis": "评分：要素齐全、语言简洁、格式规范。"
      }
     ]
    }
   ]
  },
  {
   "title": "英语 模拟训练卷（第 9 套）",
   "meta": "英语 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、阅读理解（每题 4 分，共 5 题，40 分）",
     "items": [
      {
       "stem": "【Reading】We should protect the earth. We can plant more trees and save water. What can we do to help?",
       "options": [
        "Plant trees and save water",
        "Cut trees",
        "Waste water",
        "Kill animals"
       ],
       "answer": "A",
       "analysis": "原文 plant more trees and save water。"
      },
      {
       "stem": "【Reading】English is useful. I study it hard every day. Why does the writer study English?",
       "options": [
        "Because it is useful",
        "Because it is easy",
        "Because it is boring",
        "Because he must"
       ],
       "answer": "A",
       "analysis": "原文 English is useful。"
      },
      {
       "stem": "【Reading】Tom is a student. He likes reading books. Every morning he reads for an hour. What does Tom like doing?",
       "options": [
        "Reading books",
        "Playing football",
        "Watching TV",
        "Sleeping"
       ],
       "answer": "A",
       "analysis": "原文 He likes reading books。"
      },
      {
       "stem": "【Reading】Mary has a cat. Its name is Mimi. Mimi is white and small. What color is Mimi?",
       "options": [
        "White",
        "Black",
        "Brown",
        "Yellow"
       ],
       "answer": "A",
       "analysis": "原文 Mimi is white。"
      },
      {
       "stem": "【Reading】It is sunny today. We go to the park. We fly kites and have a picnic. What is the weather like?",
       "options": [
        "Sunny",
        "Rainy",
        "Windy",
        "Snowy"
       ],
       "answer": "A",
       "analysis": "原文 It is sunny today。"
      }
     ]
    },
    {
     "name": "二、完形填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "I like __ English.",
       "options": [
        "read",
        "reads",
        "reading",
        "to reading"
       ],
       "answer": "C",
       "analysis": "like doing sth."
      },
      {
       "stem": "She __ a song now.",
       "options": [
        "sing",
        "sings",
        "is singing",
        "sang"
       ],
       "answer": "C",
       "analysis": "now 用现在进行时 is singing。"
      },
      {
       "stem": "They __ football yesterday.",
       "options": [
        "play",
        "plays",
        "played",
        "playing"
       ],
       "answer": "C",
       "analysis": "yesterday 用过去时 played。"
      },
      {
       "stem": "He __ to bed at 9:00.",
       "options": [
        "go",
        "goes",
        "went",
        "going"
       ],
       "answer": "B",
       "analysis": "一般现在时，三单 goes。"
      },
      {
       "stem": "__ you like apples?",
       "options": [
        "Do",
        "Does",
        "Are",
        "Is"
       ],
       "answer": "A",
       "analysis": "主语 you 用助动词 Do。"
      },
      {
       "stem": "There __ some milk in the glass.",
       "options": [
        "is",
        "are",
        "am",
        "be"
       ],
       "answer": "A",
       "analysis": "milk 不可数，用 is。"
      },
      {
       "stem": "I am __ in music.",
       "options": [
        "interest",
        "interested",
        "interesting",
        "interests"
       ],
       "answer": "B",
       "analysis": "be interested in 对……感兴趣。"
      },
      {
       "stem": "Last Sunday, I __ to the park.",
       "options": [
        "go",
        "went",
        "going",
        "goes"
       ],
       "answer": "B",
       "analysis": "last Sunday 用一般过去时 went。"
      },
      {
       "stem": "The weather was __.",
       "options": [
        "sun",
        "suny",
        "sunny",
        "sunning"
       ],
       "answer": "C",
       "analysis": "be 动词后接形容词 sunny。"
      },
      {
       "stem": "I __ a book under a tree.",
       "options": [
        "read",
        "reads",
        "reading",
        "red"
       ],
       "answer": "A",
       "analysis": "讲述过去用 read（过去式同形）。"
      }
     ]
    },
    {
     "name": "三、语法填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "It's time __ (go) home.",
       "options": [],
       "answer": "to go",
       "analysis": "It's time to do。"
      },
      {
       "stem": "__ (not be) late again.",
       "options": [],
       "answer": "Don't be",
       "analysis": "祈使句否定 Don't be。"
      },
      {
       "stem": "The boy is good at __ (play) basketball.",
       "options": [],
       "answer": "playing",
       "analysis": "be good at doing。"
      },
      {
       "stem": "If it __ (rain) tomorrow, we will stay home.",
       "options": [],
       "answer": "rains",
       "analysis": "条件状语从句主将从现，三单 rains。"
      },
      {
       "stem": "She __ (go) to school by bike every day.",
       "options": [],
       "answer": "goes",
       "analysis": "主语三单，一般现在时 goes。"
      },
      {
       "stem": "They __ (be) students.",
       "options": [],
       "answer": "are",
       "analysis": "复数用 are。"
      },
      {
       "stem": "He __ (have) a dog.",
       "options": [],
       "answer": "has",
       "analysis": "三单 has。"
      },
      {
       "stem": "I __ (not like) apples.",
       "options": [],
       "answer": "don't like",
       "analysis": "主语 I 用 don't。"
      },
      {
       "stem": "__ (do) he play soccer?",
       "options": [],
       "answer": "Does",
       "analysis": "三单用 Does。"
      },
      {
       "stem": "We __ (watch) TV now.",
       "options": [],
       "answer": "are watching",
       "analysis": "now 用现在进行时。"
      }
     ]
    },
    {
     "name": "四、书面表达（1 题，20 分）",
     "items": [
      {
       "stem": "【Writing】以日记形式写\"一次难忘的周末\"。要点：时间、活动（如爬山/做家务）、感受。",
       "options": [],
       "answer": "格式：左上角日期+天气；正文记叙活动经过；结尾抒发感受。用一般过去时。",
       "analysis": "评分：时态正确、细节生动、感受真实。"
      }
     ]
    }
   ]
  },
  {
   "title": "英语 模拟训练卷（第 10 套）",
   "meta": "英语 · 高一必修综合模拟（完整套卷 · 满分 150 分 · 附答案）",
   "sections": [
    {
     "name": "一、阅读理解（每题 4 分，共 5 题，40 分）",
     "items": [
      {
       "stem": "【Reading】English is useful. I study it hard every day. Why does the writer study English?",
       "options": [
        "Because it is useful",
        "Because it is easy",
        "Because it is boring",
        "Because he must"
       ],
       "answer": "A",
       "analysis": "原文 English is useful。"
      },
      {
       "stem": "【Reading】Tom is a student. He likes reading books. Every morning he reads for an hour. What does Tom like doing?",
       "options": [
        "Reading books",
        "Playing football",
        "Watching TV",
        "Sleeping"
       ],
       "answer": "A",
       "analysis": "原文 He likes reading books。"
      },
      {
       "stem": "【Reading】Mary has a cat. Its name is Mimi. Mimi is white and small. What color is Mimi?",
       "options": [
        "White",
        "Black",
        "Brown",
        "Yellow"
       ],
       "answer": "A",
       "analysis": "原文 Mimi is white。"
      },
      {
       "stem": "【Reading】It is sunny today. We go to the park. We fly kites and have a picnic. What is the weather like?",
       "options": [
        "Sunny",
        "Rainy",
        "Windy",
        "Snowy"
       ],
       "answer": "A",
       "analysis": "原文 It is sunny today。"
      },
      {
       "stem": "【Reading】My school is big. There are 30 classes. We have Chinese, math, English and PE. How many classes are there?",
       "options": [
        "30",
        "20",
        "40",
        "50"
       ],
       "answer": "A",
       "analysis": "原文 There are 30 classes。"
      }
     ]
    },
    {
     "name": "二、完形填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "She __ a song now.",
       "options": [
        "sing",
        "sings",
        "is singing",
        "sang"
       ],
       "answer": "C",
       "analysis": "now 用现在进行时 is singing。"
      },
      {
       "stem": "They __ football yesterday.",
       "options": [
        "play",
        "plays",
        "played",
        "playing"
       ],
       "answer": "C",
       "analysis": "yesterday 用过去时 played。"
      },
      {
       "stem": "He __ to bed at 9:00.",
       "options": [
        "go",
        "goes",
        "went",
        "going"
       ],
       "answer": "B",
       "analysis": "一般现在时，三单 goes。"
      },
      {
       "stem": "__ you like apples?",
       "options": [
        "Do",
        "Does",
        "Are",
        "Is"
       ],
       "answer": "A",
       "analysis": "主语 you 用助动词 Do。"
      },
      {
       "stem": "There __ some milk in the glass.",
       "options": [
        "is",
        "are",
        "am",
        "be"
       ],
       "answer": "A",
       "analysis": "milk 不可数，用 is。"
      },
      {
       "stem": "I am __ in music.",
       "options": [
        "interest",
        "interested",
        "interesting",
        "interests"
       ],
       "answer": "B",
       "analysis": "be interested in 对……感兴趣。"
      },
      {
       "stem": "Last Sunday, I __ to the park.",
       "options": [
        "go",
        "went",
        "going",
        "goes"
       ],
       "answer": "B",
       "analysis": "last Sunday 用一般过去时 went。"
      },
      {
       "stem": "The weather was __.",
       "options": [
        "sun",
        "suny",
        "sunny",
        "sunning"
       ],
       "answer": "C",
       "analysis": "be 动词后接形容词 sunny。"
      },
      {
       "stem": "I __ a book under a tree.",
       "options": [
        "read",
        "reads",
        "reading",
        "red"
       ],
       "answer": "A",
       "analysis": "讲述过去用 read（过去式同形）。"
      },
      {
       "stem": "A little dog __ to me.",
       "options": [
        "come",
        "comes",
        "came",
        "coming"
       ],
       "answer": "C",
       "analysis": "过去时 came。"
      }
     ]
    },
    {
     "name": "三、语法填空（每题 2 分，共 10 题，20 分）",
     "items": [
      {
       "stem": "__ (not be) late again.",
       "options": [],
       "answer": "Don't be",
       "analysis": "祈使句否定 Don't be。"
      },
      {
       "stem": "The boy is good at __ (play) basketball.",
       "options": [],
       "answer": "playing",
       "analysis": "be good at doing。"
      },
      {
       "stem": "If it __ (rain) tomorrow, we will stay home.",
       "options": [],
       "answer": "rains",
       "analysis": "条件状语从句主将从现，三单 rains。"
      },
      {
       "stem": "She __ (go) to school by bike every day.",
       "options": [],
       "answer": "goes",
       "analysis": "主语三单，一般现在时 goes。"
      },
      {
       "stem": "They __ (be) students.",
       "options": [],
       "answer": "are",
       "analysis": "复数用 are。"
      },
      {
       "stem": "He __ (have) a dog.",
       "options": [],
       "answer": "has",
       "analysis": "三单 has。"
      },
      {
       "stem": "I __ (not like) apples.",
       "options": [],
       "answer": "don't like",
       "analysis": "主语 I 用 don't。"
      },
      {
       "stem": "__ (do) he play soccer?",
       "options": [],
       "answer": "Does",
       "analysis": "三单用 Does。"
      },
      {
       "stem": "We __ (watch) TV now.",
       "options": [],
       "answer": "are watching",
       "analysis": "now 用现在进行时。"
      },
      {
       "stem": "She __ (read) a book yesterday.",
       "options": [],
       "answer": "read",
       "analysis": "yesterday 用过去式 read。"
      }
     ]
    },
    {
     "name": "四、书面表达（1 题，20 分）",
     "items": [
      {
       "stem": "【Writing】假定你是李华，给英国笔友 Tom 写一封邮件介绍你的学校生活。要点：1.课程丰富 2.社团活动 3.邀请他来访。",
       "options": [],
       "answer": "格式：开头 Dear Tom, 问候；正文三段分别对应三个要点（用一般现在时）；结尾 I'm looking forward to your reply. 注意书信格式与要点齐全。",
       "analysis": "评分：格式正确、要点完整、时态准确、语句通顺。"
      }
     ]
    }
   ]
  }
 ]
};
  var s = D.meta.subjects.map(function (x) { return x + ":" + (D.mockPapers[x] || []).length + "套"; }).join("  ");
  console.log("[augment-quiz-mock] 整套试卷数据完成 → " + s);
})();
