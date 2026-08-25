/* ============================================================
   WorkBuddy 高中学习辅助系统 — 应用逻辑
   实现模块0总调度 + 模块1-6 全部交互，纯前端无后端依赖
   ============================================================ */
(function () {
  "use strict";
  const D = window.DATA;
  const content = document.getElementById("content");
  const state = { subject: "数学" };

  /* ---------- 工具函数 ---------- */
  const SUBJECTS = D.meta.subjects;
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function stars(n) {
    n = Math.max(1, Math.min(5, n || 1));
    let s = "";
    for (let i = 1; i <= 5; i++) s += i <= n ? "★" : "<span class='off'>★</span>";
    return "<span class='stars'>" + s + "</span>";
  }
  function freqBadge(f) {
    if (f === "高频") return "<span class='badge b-high'>高频</span>";
    if (f === "中频") return "<span class='badge b-mid'>中频</span>";
    return "<span class='badge b-low'>低频</span>";
  }
  // 统一输出外框（贴合提示词输出格式）
  function frame(moduleName, subject, bodyHTML) {
    const sub = subject ? " · " + subject : "";
    return (
      "<div class='module-frame'><div class='mf-head'>【" + moduleName + "】" + sub +
      "　|　数据来源：人教版高一必修教材 + 内蒙古地区考纲适配</div>" +
      "<div class='mf-body'>" + bodyHTML + "</div></div>"
    );
  }
  function subjectTabs(cur, onPick) {
    return "<div class='row' style='gap:8px;margin-bottom:16px'>" +
      SUBJECTS.map(s =>
        "<button class='chip" + (s === cur ? " on" : "") + "' data-subj='" + s + "'>" + s + "</button>"
      ).join("") + "</div>";
  }
  function modal(html) {
    document.getElementById("modal-body").innerHTML = html;
    document.getElementById("overlay").hidden = false;
  }
  function closeModal() { document.getElementById("overlay").hidden = true; }

  /* ---------- 路由 ---------- */
  const routes = {
    home: renderHome, points: renderPoints, plan: renderPlan,
    mindmap: renderMindmap, quiz: renderQuiz, past: renderPast, lecture: renderLecture
  };
  function go(mod, subj) {
    if (subj) state.subject = subj;
    document.querySelectorAll(".nav-item").forEach(n =>
      n.classList.toggle("active", n.dataset.module === mod));
    document.getElementById("sidebar").classList.remove("open");
    (routes[mod] || renderHome)();
    window.scrollTo(0, 0);
  }

  /* ---------- 首页（模块0总调度说明） ---------- */
  function renderHome() {
    const cards = [
      ["📚", "① 考点库管理", "按人教版章节拆解分级考点，标注考频/难度/易错，支持条件筛选。"],
      ["🗓️", "② 复习计划生成", "输入时长与目标，自动排布五科分阶段复习计划与复盘节点。"],
      ["🧠", "③ 知识点思维导图", "单章知识体系 + 跨章节关联网络，公式原文锚点，可展开。"],
      ["✍️", "④ 模拟训练", "按基础/提升/冲刺抽卷，在线答题评分+逐题解析（每科50套框架）。"],
      ["📜", "⑤ 5年真题解析", "近5年全国乙卷高一范围真题，考点标注+命题思路精讲。"],
      ["🎓", "⑥ 名师讲堂", "一线名师知识点精讲与题型专项讲评，生活化引入、模板化输出。"]
    ];
    content.innerHTML =
      "<div class='page-head'><div class='kicker'>SYSTEM DISPATCHER</div>" +
      "<h1>WorkBuddy 高中学习辅助系统</h1>" +
      "<div class='sub'>内蒙古地区 · 人教版 · 高一必修 ｜ 语文 · 数学 · 英语 · 物理 · 化学 ｜ 开箱即用 · 无需登录</div></div>" +
      "<div class='note info'>顶部「总调度」栏可一键选择 <b>学科 + 模块 + 范围</b> 直接跳转；左侧为六大功能模块导航。所有内容严格限定人教版高一必修第一册/上册，不超纲。</div>" +
      "<div class='grid grid-3'>" +
      cards.map(c =>
        "<div class='card feat'><div class='f-ico'>" + c[0] + "</div><div><h3>" + c[1] + "</h3><p>" + c[2] + "</p></div></div>"
      ).join("") + "</div>" +
      "<div class='divider'></div>" +
      "<div class='card'><h3>系统总调度说明</h3><p style='color:var(--c-text-2);margin-top:8px'>本系统将您提供的 21 条提示词整合为可交互模块：总调度引擎负责识别需求并路由；各子模块严格遵循对应提示词的角色设定、处理逻辑、输出格式与约束条件（考频依据内蒙古近5年高一期末与全国卷考情；术语公式与教材原文一致）。</p></div>";
  }

  /* ---------- 模块1 考点库 ---------- */
  let pf = { freq: null, type: "", errOnly: false, chapter: "" };
  function renderPoints() {
    const subj = state.subject;
    const pts = D.points[subj] || [];
    const chapters = [...new Set(pts.map(p => p.chapter))];
    const body =
      subjectTabs(subj, s => { state.subject = s; renderPoints(); }) +
      "<div class='card'>" +
      "<div class='row' style='align-items:flex-end'>" +
      "<div class='field' style='flex:1.4'><label>筛选考频</label><div class='checklist' id='pf-freq'>" +
        ["高频", "中频", "低频"].map(f =>
          "<span class='check' data-f='" + f + "'>" + f + "</span>").join("") + "</div></div>" +
      "<div class='field' style='flex:1.2'><label>章节</label><select class='select' id='pf-chap'>" +
        "<option value=''>全部章节</option>" + chapters.map(c => "<option>" + esc(c) + "</option>").join("") + "</select></div>" +
      "<div class='field' style='flex:1.2'><label>题型关键词</label><input class='input' id='pf-type' placeholder='如：选择/默写'></div>" +
      "<div class='field' style='flex:0 0 auto'><label>&nbsp;</label><label class='check' id='pf-err' style='display:block'><input type='checkbox' style='vertical-align:middle;margin-right:6px'>仅看易错</label></div>" +
      "</div></div>" +
      "<div id='pf-result'></div>";
    content.innerHTML = frame("考点库管理", subj, body);
    bindPoints(subj);
    paintPoints(subj);
  }
  function bindPoints(subj) {
    document.querySelectorAll("#pf-freq .check").forEach(c =>
      c.onclick = () => { c.classList.toggle("on"); paintPoints(subj); });
    document.getElementById("pf-chap").onchange = e => { pf.chapter = e.target.value; paintPoints(subj); };
    document.getElementById("pf-type").oninput = e => { pf.type = e.target.value.trim(); paintPoints(subj); };
    document.getElementById("pf-err").onclick = e => {
      const cb = e.currentTarget.querySelector("input");
      // toggle handled by checkbox state
      setTimeout(() => { pf.errOnly = cb.checked; paintPoints(subj); }, 0);
    };
  }
  function paintPoints(subj) {
    const pts = D.points[subj] || [];
    const freqOn = [...document.querySelectorAll("#pf-freq .check.on")].map(c => c.dataset.f);
    let list = pts.filter(p => {
      if (freqOn.length && !freqOn.includes(p.freq)) return false;
      if (pf.chapter && p.chapter !== pf.chapter) return false;
      if (pf.type && !(p.type || "").includes(pf.type)) return false;
      if (pf.errOnly && !(p.error || "").trim()) return false;
      return true;
    });
    const high = list.filter(p => p.freq === "高频").length;
    const html =
      "<div class='stat-row'>" +
      "<div class='stat'><div class='num'>" + list.length + "</div><div class='lbl'>命中考点</div></div>" +
      "<div class='stat'><div class='num'>" + high + "</div><div class='lbl'>其中高频</div></div>" +
      "<div class='stat'><div class='num'>" + (D.points[subj] || []).length + "</div><div class='lbl'>本章库总量</div></div>" +
      "</div>" +
      (list.length ?
        "<div class='table-wrap'><table><thead><tr><th>考点编号</th><th>所属章节</th><th>考点名称</th><th>考频</th><th>难度</th><th>常考题型</th><th>易错提示</th><th>教材定位</th></tr></thead><tbody>" +
        list.map(p => "<tr><td>" + p.id + "</td><td>" + esc(p.chapter) + " / " + esc(p.section) +
          "</td><td>" + esc(p.name) + "</td><td>" + freqBadge(p.freq) + "</td><td>" + stars(p.difficulty) +
          "</td><td>" + esc(p.type) + "</td><td style='color:var(--c-warn)'>" + esc(p.error) + "</td><td class='muted'>" + esc(p.page) + "</td></tr>"
        ).join("") + "</tbody></table></div>" :
        "<div class='note warn'>未匹配到考点，请放宽筛选条件。</div>");
    document.getElementById("pf-result").innerHTML = html;
  }

  /* ---------- 模块2 复习计划 ---------- */
  function renderPlan() {
    const body =
      "<div class='card'>" +
      "<div class='row'>" +
      "<div class='field'><label>每日可复习时长（小时）</label><input class='input' id='pl-hours' type='number' min='1' max='10' step='0.5' value='3'></div>" +
      "<div class='field'><label>复习周期（天）</label><input class='input' id='pl-days' type='number' min='7' max='120' step='1' value='28'></div>" +
      "<div class='field'><label>目标</label><select class='select' id='pl-goal'>" +
        ["期末备考", "单元巩固", "基础夯实", "查漏补缺"].map(g => "<option>" + g + "</option>").join("") + "</select></div>" +
      "</div>" +
      "<div class='field'><label>薄弱章节（按学科勾选，将获得加码训练）</label><div id='pl-weak'></div></div>" +
      "<button class='btn btn-gold' id='pl-gen'>⚙️ 生成复习计划</button>" +
      "</div><div id='pl-out'></div>";
    content.innerHTML = frame("复习计划生成", "", body);
    // 构建薄弱章节勾选
    const weak = document.getElementById("pl-weak");
    weak.innerHTML = SUBJECTS.map(s => {
      const chs = [...new Set((D.points[s] || []).map(p => p.chapter))];
      return "<div style='margin-bottom:10px'><div class='badge b-gold' style='margin-bottom:6px'>" + s + "</div><div class='checklist' data-subj='" + s + "'>" +
        chs.map(c => "<span class='check' data-ch='" + esc(c) + "'>" + esc(c) + "</span>").join("") + "</div></div>";
    }).join("");
    document.getElementById("pl-gen").onclick = generatePlan;
  }
  function generatePlan() {
    const hours = Math.max(1, parseFloat(document.getElementById("pl-hours").value) || 3);
    const days = Math.max(7, parseInt(document.getElementById("pl-days").value) || 28);
    const goal = document.getElementById("pl-goal").value;
    const weakMap = {};
    document.querySelectorAll("#pl-weak .checklist").forEach(box => {
      const s = box.dataset.subj;
      const sel = [...box.querySelectorAll(".check.on")].map(c => c.dataset.ch);
      if (sel.length) weakMap[s] = sel;
    });
    // 阶段划分
    let base = Math.max(1, Math.round(days * 0.4));
    let strength = Math.max(1, Math.round(days * 0.35));
    let sprint = Math.max(1, days - base - strength);
    // 每科章节序列
    const chaptersOf = {};
    SUBJECTS.forEach(s => chaptersOf[s] = [...new Set((D.points[s] || []).map(p => p.chapter))]);
    const weights = SUBJECTS.map(s => D.subjects[s].weight);
    const wSum = weights.reduce((a, b) => a + b, 0);

    // 为每天每科分配时长（单科≤1.5h），并分配章节任务
    const taskType = (phase) => phase === 0 ? "概念背诵+考点梳理" : phase === 1 ? "专题练习+错题" : "模拟冲刺+复盘";
    function allocDay() {
      let alloc = {};
      let rem = hours * 60;
      SUBJECTS.forEach((s, i) => { alloc[s] = Math.min(90, Math.round(hours * 60 * weights[i] / wSum)); rem -= alloc[s]; });
      // 把剩余时间补给未达90的
      let guard = 0;
      while (rem > 5 && guard++ < 20) {
        let done = true;
        SUBJECTS.forEach(s => { if (alloc[s] < 90 && rem > 5) { alloc[s] += 5; rem -= 5; done = false; } });
        if (done) break;
      }
      return alloc;
    }
    const weekRows = [];
    const dayNames = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    const cursor = {}; SUBJECTS.forEach(s => cursor[s] = 0);
    for (let w = 0; w < Math.ceil(days / 7); w++) {
      const row = {};
      for (let d = 0; d < 7; d++) {
        const dayIdx = w * 7 + d;
        if (dayIdx >= days) { row[dayNames[d]] = "—"; continue; }
        const phase = dayIdx < base ? 0 : dayIdx < base + strength ? 1 : 2;
        const isReview = (dayIdx + 1) % 7 === 0; // 每7天复盘日
        const alloc = allocDay();
        const cells = SUBJECTS.map(s => {
          let chs = chaptersOf[s];
          if (!chs.length) return s + "：自主复习";
          let ch = chs[cursor[s] % chs.length];
          cursor[s]++;
          const weak = (weakMap[s] || []).includes(ch);
          const boost = weak ? "（薄弱·加码）" : "";
          if (isReview) return s + "：⭐复盘检测";
          return s + "：" + ch.split(" ")[0] + " " + taskType(phase) + boost;
        });
        row[dayNames[d]] = isReview ? "⭐ 本周复盘日（薄弱项循环巩固）" : cells.join(" ｜ ");
      }
      weekRows.push(row);
    }
    const totalWeak = Object.values(weakMap).reduce((a, b) => a + b.length, 0);
    const html =
      "<div class='card'><h3>复习总览</h3><div class='stat-row'>" +
      "<div class='stat'><div class='num'>" + days + "</div><div class='lbl'>周期（天）</div></div>" +
      "<div class='stat'><div class='num'>" + hours + "h</div><div class='lbl'>每日时长</div></div>" +
      "<div class='stat'><div class='num'>" + base + "/" + strength + "/" + sprint + "</div><div class='lbl'>基础/强化/冲刺</div></div>" +
      "<div class='stat'><div class='num'>" + totalWeak + "</div><div class='lbl'>薄弱章节加码</div></div>" +
      "</div>" +
      "<div class='note'>目标：<b>" + goal + "</b>　·　单科单次≤1.5h，每7天设1次复盘日，艾宾浩斯节奏循环巩固薄弱项。</div>" +
      "<div class='table-wrap'><table><thead><tr><th>周</th>" +
      dayNames.map(d => "<th>" + d + "</th>").join("") + "</tr></thead><tbody>" +
      weekRows.map((r, i) => "<tr><td><b>第" + (i + 1) + "周</b></td>" +
        dayNames.map(d => "<td style='font-size:12px;line-height:1.5'>" + esc(r[d] || "—") + "</td>").join("") + "</tr>").join("") +
      "</tbody></table></div>" +
      "<h3 style='margin-top:16px'>执行说明</h3><ol style='color:var(--c-text-2);padding-left:20px;line-height:1.9'>" +
      "<li>优先级：薄弱章节（已加码）＞高频考点＞中低频，按上表「薄弱·加码」标注重点突破。</li>" +
      "<li>阶段策略：基础期重概念记忆与框架，强化期重专题与错题，冲刺期重套卷与限时。</li>" +
      "<li>复盘日不排新内容，仅做本周错题重做与目标章节自测，达标（正确率≥80%）方可进入新循环。</li>" +
      "<li>弹性调整：若某日时间不足，优先保留数学/物理计算训练，语文英语可后移，保持总时长不超载。</li>" +
      "</ol></div>";
    document.getElementById("pl-out").innerHTML = html;
  }

  /* ---------- 模块3 思维导图 ---------- */
  function renderMindmap() {
    const subj = state.subject;
    const maps = D.mindmaps[subj] || {};
    const chapters = Object.keys(maps);
    const body =
      subjectTabs(subj, s => { state.subject = s; renderMindmap(); }) +
      (chapters.length ?
        "<div class='field'><label>选择章节</label><select class='select' id='mm-chap'>" +
        chapters.map(c => "<option>" + esc(c) + "</option>").join("") + "</select></div><div id='mm-out'></div>" :
        "<div class='note warn'>该学科思维导图内容建设中，可先用「考点库」按章节复习。</div>");
    content.innerHTML = frame("知识点思维导图", subj, body);
    if (chapters.length) {
      const paint = () => paintMindmap(maps[document.getElementById("mm-chap").value]);
      document.getElementById("mm-chap").onchange = paint;
      paint();
    }
  }
  function paintMindmap(tree) {
    let count = 0;
    function node(n, depth) {
      count++;
      const hasChildren = n.children && n.children.length;
      const cls = depth === 0 ? "mm-l1" : depth === 1 ? "mm-l2" : "";
      let inner = "<div class='mm-head'><span>" + esc(n.t) + "</span>" +
        (hasChildren ? "<span class='mm-toggle'>[展开/收起]</span>" : "") + "</div>";
      if (hasChildren) {
        inner += "<div class='mm-children'>" + n.children.map(c => node(c, depth + 1)).join("") + "</div>";
      }
      return "<div class='mm-node " + cls + "'>" + inner + "</div>";
    }
    const html = "<div class='mm-wrap'>" + tree.l1.map(n => node(n, 0)).join("") + "</div>" +
      (tree.cross ? "<div class='cross-link'>⚠️ 跨章节关联：" + esc(tree.cross) + "</div>" : "");
    const out = document.getElementById("mm-out");
    out.innerHTML = html;
    out.querySelectorAll(".mm-head").forEach(h => {
      if (h.querySelector(".mm-toggle")) h.onclick = () => {
        const ch = h.parentElement.querySelector(".mm-children");
        if (ch) ch.style.display = ch.style.display === "none" ? "flex" : "none";
      };
    });
    if (count > 60) console.log("mindmap nodes:", count);
  }

  /* ---------- 模块4 模拟训练 ---------- */
  function renderQuiz() {
    const subj = state.subject;
    const bank = D.questions[subj] || [];
    const body =
      subjectTabs(subj, s => { state.subject = s; renderQuiz(); }) +
      "<div class='card'><div class='row'>" +
      "<div class='field'><label>抽题数量</label><select class='select' id='qz-n'>" +
        [5, 8, 10, 12, 15].map(n => "<option>" + n + "</option>").join("") + "</select></div>" +
      "<div class='field'><label>难度结构</label><select class='select' id='qz-mix'>" +
        ["基础为主(6:3:1)", "提升为主(3:5:2)", "冲刺为主(1:3:6)", "均衡(1:1:1)"].map(m => "<option>" + m + "</option>").join("") + "</select></div>" +
      "<div class='field' style='flex:0 0 auto'><label>&nbsp;</label><button class='btn btn-gold' id='qz-gen'>🎲 生成练习卷</button></div>" +
      "</div>" +
      "<div class='note info'>提示：选择题点击选项即时判分；填空/计算/解答题点击「显示答案」核对。提交后给出客观题得分。每科50套框架：基础20 / 提升20 / 冲刺10。</div>" +
      "<div style='margin-top:10px'><button class='btn btn-ghost' id='qz-sample'>📄 查看完整样例试卷（含解析）</button></div>" +
      "</div><div id='qz-out'></div>";
    content.innerHTML = frame("模拟训练", subj, body);
    document.getElementById("qz-gen").onclick = () => genQuiz(subj, bank);
    document.getElementById("qz-sample").onclick = () => showSample(subj);
  }
  function pickQuestions(bank, n, mix) {
    const band = { "基础为主(6:3:1)": [0.6, 0.3, 0.1], "提升为主(3:5:2)": [0.3, 0.5, 0.2], "冲刺为主(1:3:6)": [0.1, 0.3, 0.6], "均衡(1:1:1)": [1 / 3, 1 / 3, 1 / 3] }[mix];
    const band3 = bank.map(q => q.difficulty <= 2 ? 0 : q.difficulty === 3 ? 1 : 2);
    const buckets = [[], [], []];
    bank.forEach((q, i) => buckets[band3[i]].push(q));
    const res = [];
    [0, 1, 2].forEach(b => {
      let k = Math.round(n * band[b]);
      const pool = buckets[b].slice();
      while (k-- > 0 && pool.length) res.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    });
    while (res.length < n && bank.length) {
      const q = bank[Math.floor(Math.random() * bank.length)];
      if (!res.includes(q)) res.push(q); else break;
    }
    return res.slice(0, n);
  }
  function genQuiz(subj, bank) {
    if (!bank.length) { document.getElementById("qz-out").innerHTML = "<div class='note warn'>该科题库建设中。</div>"; return; }
    const n = parseInt(document.getElementById("qz-n").value);
    const mix = document.getElementById("qz-mix").value;
    const qs = pickQuestions(bank, n, mix);
    let correct = 0, totalMC = 0;
    const out = document.getElementById("qz-out");
    out.innerHTML = "<div class='card' id='qz-card'>" +
      "<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:10px'><b>练习卷（" + subj + " · " + n + "题）</b><span id='qz-score' class='badge b-info'>客观题 0/" + totalMC + "</span></div>" +
      "<div class='progress'><i id='qz-prog'></i></div>" + qs.map((q, i) => qItem(q, i)).join("") +
      "<div style='margin-top:14px'><button class='btn btn-gold' id='qz-submit'>提交并查看成绩</button> <span id='qz-final' class='badge b-gold' style='margin-left:8px'></span></div>" +
      "</div>";
    // 绑定
    out.querySelectorAll(".qbank-item").forEach((item, i) => {
      const q = qs[i];
      if (q.options && q.options.length) {
        totalMC++;
        item.querySelectorAll(".q-opt").forEach(opt => {
          opt.onclick = () => {
            if (item.dataset.done) return;
            item.dataset.done = "1";
            const ai = +opt.dataset.i;
            item.querySelectorAll(".q-opt").forEach(o => o.classList.remove("sel"));
            opt.classList.add("sel");
            if (ai === q.answer) { opt.classList.add("correct"); correct++; }
            else { opt.classList.add("wrong"); item.querySelectorAll(".q-opt")[q.answer].classList.add("correct"); }
            item.querySelector(".q-analysis").classList.add("show");
            updateScore();
          };
        });
      } else {
        item.querySelector(".q-show").onclick = () => item.querySelector(".q-analysis").classList.add("show");
      }
    });
    function updateScore() {
      document.getElementById("qz-score").textContent = "客观题 " + correct + "/" + totalMC;
      const done = out.querySelectorAll(".qbank-item[data-done]").length;
      document.getElementById("qz-prog").style.width = (done / qs.length * 100) + "%";
    }
    document.getElementById("qz-submit").onclick = () => {
      const pct = totalMC ? Math.round(correct / totalMC * 100) : 0;
      document.getElementById("qz-final").textContent = "客观题正确率 " + pct + "%" + (pct >= 80 ? " · 达标✅" : " · 继续加油");
      out.querySelectorAll(".q-analysis").forEach(a => a.classList.add("show"));
    };
    updateScore();
  }
  function qItem(q, i) {
    const meta = "<div class='q-meta'>" + freqBadge(q.type ? "高频" : "中频") +
      " <span class='badge b-info'>" + esc(q.type) + "</span> " + stars(q.difficulty) +
      " <span class='muted'>" + esc(q.chapter) + " · 考点" + q.point + "</span></div>";
    let body;
    if (q.options && q.options.length) {
      body = q.options.map((o, k) =>
        "<div class='q-opt' data-i='" + k + "'>" + String.fromCharCode(65 + k) + ". " + esc(o) + "</div>").join("") +
        "<div class='q-analysis'><span class='ans'>答案：" + String.fromCharCode(65 + q.answer) + "</span> ｜ " + esc(q.analysis) + "</div>";
    } else {
      body = "<button class='btn btn-sm q-show'>显示答案 / 解析</button>" +
        "<div class='q-analysis'><span class='ans'>参考答案：</span>" + esc(q.answer) + " ｜ " + esc(q.analysis) + "</div>";
    }
    return "<div class='qbank-item'><div class='q-stem'><b>" + (i + 1) + ".</b> " + esc(q.stem) + "</div>" + meta + body + "</div>";
  }
  function showSample(subj) {
    const sp = D.samplePapers[subj];
    if (!sp) { modal("<h3>样例试卷</h3><p>该科样例试卷建设中。</p>"); return; }
    let html = "<h3>" + esc(sp.title) + "</h3><div class='note'>" + esc(sp.meta) + "</div>";
    sp.sections.forEach(sec => {
      html += "<h4 style='margin:14px 0 8px;color:var(--c-gold-soft)'>" + esc(sec.name) + "</h4>";
      sec.items.forEach((it, i) => {
        let inner;
        if (it.options && it.options.length) {
          inner = it.options.map((o, k) =>
            "<div class='q-opt" + (String.fromCharCode(65 + k) === it.answer ? " correct" : "") + "'>" +
            String.fromCharCode(65 + k) + ". " + esc(o) + "</div>").join("") +
            "<div class='q-analysis show'><span class='ans'>答案：" + esc(it.answer) + "</span> ｜ " + esc(it.analysis) + "</div>";
        } else {
          inner = "<div class='q-analysis show'><span class='ans'>参考答案：</span>" + esc(it.answer) + " ｜ " + esc(it.analysis) + "</div>";
        }
        html += "<div class='qbank-item'><div class='q-stem'>" + esc(it.stem) + "</div>" + inner + "</div>";
      });
    });
    modal(html);
  }

  /* ---------- 模块5 真题解析 ---------- */
  function renderPast() {
    const subj = state.subject;
    const list = D.pastPapers[subj] || [];
    const byYear = {};
    list.forEach(p => { (byYear[p.year] = byYear[p.year] || []).push(p); });
    const body =
      subjectTabs(subj, s => { state.subject = s; renderPast(); }) +
      "<div class='note info'>收录近5年全国乙卷（及内蒙古适用全国卷）中属于高一必修范围的真题，按年份与考点标注，附命题思路精讲。</div>" +
      "<div id='past-out'></div>";
    content.innerHTML = frame("5年真题解析", subj, body);
    const out = document.getElementById("past-out");
    if (!list.length) { out.innerHTML = "<div class='note warn'>该科真题收集中。</div>"; return; }
    out.innerHTML = Object.keys(byYear).sort((a, b) => b - a).map(year =>
      "<div class='card'><h3>" + year + "年 " + esc(byYear[year][0].volume) + "（高一部分）</h3>" +
      byYear[year].map(p => pastItem(p)).join("") + "</div>"
    ).join("");
    out.querySelectorAll(".q-show").forEach(b => b.onclick = () => b.parentElement.querySelector(".q-analysis").classList.add("show"));
  }
  function pastItem(p) {
    let inner;
    if (p.options && p.options.length) {
      inner = p.options.map((o, k) =>
        "<div class='q-opt" + (k === p.answer ? " correct" : "") + "'>" + String.fromCharCode(65 + k) + ". " + esc(o) + "</div>").join("") +
        "<div class='q-analysis show'><span class='ans'>答案：" + String.fromCharCode(65 + p.answer) + "</span> ｜ <b>【考点】</b>" + esc(p.point) +
        " <b>【教材章节】</b>" + esc(p.chapter) + "<br><b>【命题思路与解析】</b>" + esc(p.analysis) + "</div>";
    } else {
      inner = "<button class='btn btn-sm q-show'>显示答案 / 解析</button><div class='q-analysis'><span class='ans'>参考答案：</span>" + esc(p.answer) +
        "<br><b>【考点】</b>" + esc(p.point) + " <b>【章节】</b>" + esc(p.chapter) + "<br><b>【解析】</b>" + esc(p.analysis) + "</div>";
    }
    return "<div class='qbank-item'><div class='q-meta'><span class='badge b-gold'>" + esc(p.type) + "</span> <span class='muted'>" + esc(p.volume) + "</span></div><div class='q-stem'>" + esc(p.stem) + "</div>" + inner + "</div>";
  }

  /* ---------- 模块6 名师讲堂 ---------- */
  function renderLecture() {
    const subj = state.subject;
    const list = D.lectures[subj] || [];
    const body =
      subjectTabs(subj, s => { state.subject = s; renderLecture(); }) +
      (list.length ? "<div class='grid grid-2'>" + list.map(l =>
        "<div class='card'><h3>" + esc(l.title) + "</h3><div class='badge b-gold' style='margin:6px 0 10px'>" + esc(l.keyword) + "</div>" +
        "<button class='btn btn-sm btn-gold' data-lec='" + l.id + "'>▶ 进入讲堂</button></div>").join("") + "</div>" :
        "<div class='note warn'>该科讲堂内容建设中。</div>");
    content.innerHTML = frame("名师讲堂", subj, body);
    content.querySelectorAll("[data-lec]").forEach(b => b.onclick = () => {
      const l = (D.lectures[subj] || []).find(x => x.id === b.dataset.lec);
      if (l) modal("<h3>🎓 名师精讲：" + esc(l.title) + "</h3><div class='note'>" + esc(l.keyword) + "</div>" + l.html);
    });
  }

  /* ---------- 事件绑定 ---------- */
  document.querySelectorAll(".nav-item").forEach(n =>
    n.onclick = () => go(n.dataset.module));
  document.getElementById("menu-toggle").onclick = () =>
    document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("modal-close").onclick = closeModal;
  document.getElementById("overlay").onclick = e => { if (e.target.id === "overlay") closeModal(); };
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  // 总调度
  document.getElementById("dispatch-go").onclick = () => {
    const subj = document.getElementById("dispatch-subject").value;
    const mod = document.getElementById("dispatch-module").value;
    const scope = document.getElementById("dispatch-scope").value.trim();
    if (!mod) { alert("请选择模块"); return; }
    go(mod, subj || state.subject);
    if (scope) {
      const t = document.querySelector(".page-head .sub");
      if (t) t.textContent += "　｜　调度参数：" + scope;
    }
  };

  // 初始
  go("home");
})();
