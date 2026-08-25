/* ============================================================
   高一学习辅助系统 — 应用逻辑（无总调度 · 哈希路由 · 白底蓝字）
   模块：考点库 / 复习计划 / 思维导图 / 模拟训练 / 真题解析 / 名师讲堂
   考点可点击进入独立详情页（知识讲解 + 例题解析）
   ============================================================ */
(function () {
  "use strict";
  const D = window.DATA;
  const SUBJECTS = D.meta.subjects;
  const view = document.getElementById("view");
  const state = { subject: SUBJECTS[0], module: "points" };
  const MODULES = [
    { key: "points", name: "考点库" },
    { key: "plan", name: "复习计划" },
    { key: "mind", name: "思维导图" },
    { key: "quiz", name: "模拟训练" },
    { key: "past", name: "真题解析" },
    { key: "lecture", name: "名师讲堂" }
  ];

  /* ---------- 工具 ---------- */
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
  function pageHead(title, sub) {
    return "<h2>" + esc(title) + "</h2>" +
      (sub ? "<div class='note info'>数据来源：人教版高一必修教材 + 内蒙古地区考纲适配" + (sub ? " ｜ " + esc(sub) : "") + "</div>" : "");
  }
  function go(hash) { location.hash = hash; }

  /* ---------- 导航骨架 ---------- */
  function renderChrome() {
    const sn = document.getElementById("subjectNav");
    sn.innerHTML = SUBJECTS.map(s =>
      "<button class='chip" + (s === state.subject ? " on" : "") + "' data-subj='" + s + "'>" + s + "</button>").join("");
    sn.querySelectorAll(".chip").forEach(c => c.onclick = () => {
      const subj = c.dataset.subj;
      state.subject = subj;
      go("#/s/" + subj + "/" + state.module);
    });
    const mn = document.getElementById("moduleNav");
    mn.innerHTML = "<div class='module-nav-inner'>" + MODULES.map(m =>
      "<button class='mtab" + (m.key === state.module ? " on" : "") + "' data-mod='" + m.key + "'>" + m.name + "</button>").join("") + "</div>";
    mn.querySelectorAll(".mtab").forEach(t => t.onclick = () => {
      const mod = t.dataset.mod;
      state.module = mod;
      go("#/s/" + state.subject + "/" + mod);
    });
  }

  /* ---------- 路由 ---------- */
  function parseHash() {
    const raw = (location.hash || "").replace(/^#\/?/, "");
    const p = raw.split("/").filter(Boolean); // [s, subject, module, kind, id]
    return { subject: p[1], module: p[2], kind: p[3], id: p[4] };
  }
  function route() {
    const h = parseHash();
    if (h.subject && SUBJECTS.includes(h.subject)) state.subject = h.subject;
    if (h.module && MODULES.some(m => m.key === h.module)) state.module = h.module;
    renderChrome();
    if (h.kind === "p" && h.id) return renderPointDetail(h.id);
    if (h.kind === "l" && h.id) return renderLectureDetail(h.id);
    switch (state.module) {
      case "points": return renderPoints();
      case "plan": return renderPlan();
      case "mind": return renderMindmap();
      case "quiz": return renderQuiz();
      case "past": return renderPast();
      case "lecture": return renderLecture();
      default: return renderPoints();
    }
  }
  window.addEventListener("hashchange", route);

  /* ---------- 模块1 考点库（卡片化，可点击进入详情） ---------- */
  let pf = { freq: [], type: "", errOnly: false, chapter: "" };
  function renderPoints() {
    const subj = state.subject;
    const pts = D.points[subj] || [];
    const chapters = [...new Set(pts.map(p => p.chapter))];
    view.innerHTML = pageHead("考点库 · " + subj, "点击任意考点卡片进入独立讲解页（知识详解 + 配套例题）") +
      "<div class='card'>" +
      "<div class='row'>" +
      "<div class='field' style='flex:1.4'><label>筛选考频</label><div class='checklist' id='pf-freq'>" +
      ["高频", "中频", "低频"].map(f => "<span class='check' data-f='" + f + "'>" + f + "</span>").join("") + "</div></div>" +
      "<div class='field' style='flex:1.2'><label>章节</label><select class='select' id='pf-chap'>" +
      "<option value=''>全部章节</option>" + chapters.map(c => "<option>" + esc(c) + "</option>").join("") + "</select></div>" +
      "<div class='field' style='flex:1.2'><label>题型关键词</label><input class='input' id='pf-type' placeholder='如：选择/默写'></div>" +
      "<div class='field' style='flex:0 0 auto'><label>&nbsp;</label><label class='check' id='pf-err'><input type='checkbox' style='vertical-align:middle;margin-right:6px'>仅看易错</label></div>" +
      "</div></div><div id='pf-result'></div>";
    document.querySelectorAll("#pf-freq .check").forEach(c => c.onclick = () => {
      c.classList.toggle("on");
      pf.freq = [...document.querySelectorAll("#pf-freq .check.on")].map(x => x.dataset.f);
      paintPoints(subj);
    });
    document.getElementById("pf-chap").onchange = e => { pf.chapter = e.target.value; paintPoints(subj); };
    document.getElementById("pf-type").oninput = e => { pf.type = e.target.value.trim(); paintPoints(subj); };
    document.getElementById("pf-err").onclick = e => {
      const cb = e.currentTarget.querySelector("input");
      setTimeout(() => { pf.errOnly = cb.checked; paintPoints(subj); }, 0);
    };
    paintPoints(subj);
  }
  function paintPoints(subj) {
    let list = (D.points[subj] || []).filter(p => {
      if (pf.freq.length && !pf.freq.includes(p.freq)) return false;
      if (pf.chapter && p.chapter !== pf.chapter) return false;
      if (pf.type && !(p.type || "").includes(pf.type)) return false;
      if (pf.errOnly && !(p.error || "").trim()) return false;
      return true;
    });
    const high = list.filter(p => p.freq === "高频").length;
    let html = "<div class='stat-row'>" +
      "<div class='stat'><div class='num'>" + list.length + "</div><div class='lbl'>命中考点</div></div>" +
      "<div class='stat'><div class='num'>" + high + "</div><div class='lbl'>其中高频</div></div>" +
      "<div class='stat'><div class='num'>" + (D.points[subj] || []).length + "</div><div class='lbl'>本库总量</div></div></div>";
    if (!list.length) { html += "<div class='note warn'>未匹配到考点，请放宽筛选条件。</div>"; document.getElementById("pf-result").innerHTML = html; return; }
    // 按章节分组
    const groups = {};
    list.forEach(p => (groups[p.chapter] = groups[p.chapter] || []).push(p));
    html += Object.keys(groups).map(ch => {
      const cards = groups[ch].map(p => {
        const err = (p.error || "").trim() ? "<div class='pc-err'>⚠ 易错：" + esc(p.error) + "</div>" : "";
        return "<div class='point-card' data-id='" + p.id + "'>" +
          "<div class='pc-name'>" + esc(p.name) + "</div>" +
          "<div class='pc-meta'>" + freqBadge(p.freq) + stars(p.difficulty) + "<span class='muted'>" + esc(p.type) + "</span></div>" +
          err + "<div class='pc-go'>查看讲解与例题 →</div></div>";
      }).join("");
      return "<div class='chapter-block'><div class='chapter-title'>" + esc(ch) + "</div><div class='point-grid'>" + cards + "</div></div>";
    }).join("");
    const out = document.getElementById("pf-result");
    out.innerHTML = html;
    out.querySelectorAll(".point-card").forEach(c => c.onclick = () =>
      go("#/s/" + subj + "/points/p/" + c.dataset.id));
  }

  /* ---------- 考点独立详情页 ---------- */
  function renderPointDetail(id) {
    const subj = state.subject;
    const p = (D.points[subj] || []).find(x => x.id === id);
    if (!p) { view.innerHTML = "<div class='note warn'>未找到该考点。</div>"; return; }
    const detailHTML = (p.detail || "（该考点讲解持续完善中）").split("\n").filter(Boolean).map(s => "<p>" + esc(s) + "</p>").join("");
    const errBlock = (p.error || "").trim() ? "<div class='pit'><b>易错提示：</b>" + esc(p.error) + "</div>" : "";
    const exCount = (p.examples || []).length;
    let html = "<div class='back-bar'><button class='back-btn' data-back>← 返回考点库</button></div>";
    html += "<div class='detail-head'><div class='crumbs'><a data-back2>" + subj + "</a> / 考点库 / " + esc(p.chapter) + "</div>" +
      "<h1>" + esc(p.name) + "</h1>" +
      "<div class='dh-meta'>" + freqBadge(p.freq) + stars(p.difficulty) +
      "<span class='badge' style='background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3)'>" + esc(p.type) + "</span>" +
      (p.page ? "<span class='badge' style='background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3)'>教材 " + esc(p.page) + "</span>" : "") + "</div></div>";
    html += "<div class='knowledge'><h2>知识讲解</h2>" + detailHTML + errBlock + "</div>";
    html += "<div class='section-label'>配套例题（含完整解析）" + (exCount ? " · " + exCount + " 题" : "") + "</div><div id='ex-list'></div>";
    view.innerHTML = html;
    view.querySelectorAll("[data-back],[data-back2]").forEach(b => b.onclick = () => go("#/s/" + subj + "/points"));
    // 例题
    const exList = document.getElementById("ex-list");
    const exs = p.examples || [];
    if (!exs.length) { exList.innerHTML = "<div class='note'>该考点配套例题持续整理中。</div>"; }
    else {
      exList.innerHTML = exs.map((ex, i) => exampleHTML(ex, i)).join("");
      exList.querySelectorAll(".example").forEach(el => {
        const i = +el.dataset.ex; const ex = exs[i];
        if (ex.options && ex.options.length) {
          el.querySelectorAll(".q-opt").forEach(opt => opt.onclick = () => {
            if (el.dataset.done) return; el.dataset.done = "1";
            const ai = +opt.dataset.i;
            el.querySelectorAll(".q-opt").forEach(o => o.classList.remove("sel"));
            opt.classList.add("sel");
            const ans = el.querySelector(".ex-answer"); const an = el.querySelector(".ex-analysis");
            ans.style.display = "block"; an.style.display = "block";
            if (ai === ex.answer) { opt.classList.add("correct"); }
            else { opt.classList.add("wrong"); el.querySelectorAll(".q-opt")[ex.answer].classList.add("correct"); }
            ans.textContent = "答案：" + String.fromCharCode(65 + ex.answer);
            an.innerHTML = "<b>解析：</b>" + esc(ex.analysis);
          });
        } else {
          const btn = el.querySelector(".ex-show");
          const ans = el.querySelector(".ex-answer"); const an = el.querySelector(".ex-analysis");
          btn.onclick = () => {
            ans.style.display = "block"; an.style.display = "block";
            ans.textContent = "答案：" + esc(ex.answer);
            an.innerHTML = "<b>解析：</b>" + esc(ex.analysis);
          };
        }
      });
    }
  }

  function exampleHTML(ex, i) {
    let body;
    if (ex.options && ex.options.length) {
      body = ex.options.map((o, k) =>
        "<div class='q-opt' data-i='" + k + "'>" + String.fromCharCode(65 + k) + ". " + esc(o) + "</div>").join("") +
        "<div class='ex-answer' style='display:none'></div>" +
        "<div class='ex-analysis' style='display:none'></div>";
    } else {
      body = "<button class='btn btn-sm btn-ghost ex-show'>显示答案 / 解析</button>" +
        "<div class='ex-answer' style='display:none'></div>" +
        "<div class='ex-analysis' style='display:none'></div>";
    }
    return "<div class='example' data-ex='" + i + "'><div class='ex-no'>例题 " + (i + 1) + "</div><div class='ex-stem'>" + esc(ex.stem) + "</div>" + body + "</div>";
  }

  /* ---------- 模块2 复习计划 ---------- */
  function renderPlan() {
    view.innerHTML = pageHead("复习计划生成", "输入时长与目标，自动排布五科分阶段计划与复盘节点") +
      "<div class='card'>" +
      "<div class='row'>" +
      "<div class='field'><label>每日可复习时长（小时）</label><input class='input' id='pl-hours' type='number' min='1' max='10' step='0.5' value='3'></div>" +
      "<div class='field'><label>复习周期（天）</label><input class='input' id='pl-days' type='number' min='7' max='120' step='1' value='28'></div>" +
      "<div class='field'><label>目标</label><select class='select' id='pl-goal'>" +
      ["期末备考", "单元巩固", "基础夯实", "查漏补缺"].map(g => "<option>" + g + "</option>").join("") + "</select></div>" +
      "</div>" +
      "<div class='field'><label>薄弱章节（按学科勾选，将获得加码训练）</label><div id='pl-weak'></div></div>" +
      "<button class='btn' id='pl-gen'>⚙️ 生成复习计划</button>" +
      "</div><div id='pl-out'></div>";
    const weak = document.getElementById("pl-weak");
    weak.innerHTML = SUBJECTS.map(s => {
      const chs = [...new Set((D.points[s] || []).map(p => p.chapter))];
      return "<div style='margin-bottom:10px'><div class='badge b-info' style='margin-bottom:6px'>" + s + "</div><div class='checklist' data-subj='" + s + "'>" +
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
    let base = Math.max(1, Math.round(days * 0.4));
    let strength = Math.max(1, Math.round(days * 0.35));
    let sprint = Math.max(1, days - base - strength);
    const chaptersOf = {};
    SUBJECTS.forEach(s => chaptersOf[s] = [...new Set((D.points[s] || []).map(p => p.chapter))]);
    const weights = SUBJECTS.map(s => D.subjects[s].weight);
    const wSum = weights.reduce((a, b) => a + b, 0);
    function allocDay() {
      let alloc = {}; let rem = hours * 60;
      SUBJECTS.forEach((s, i) => { alloc[s] = Math.min(90, Math.round(hours * 60 * weights[i] / wSum)); rem -= alloc[s]; });
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
    const taskType = ph => ph === 0 ? "概念背诵+考点梳理" : ph === 1 ? "专题练习+错题" : "模拟冲刺+复盘";
    for (let w = 0; w < Math.ceil(days / 7); w++) {
      const row = {};
      for (let d = 0; d < 7; d++) {
        const dayIdx = w * 7 + d;
        if (dayIdx >= days) { row[dayNames[d]] = "—"; continue; }
        const phase = dayIdx < base ? 0 : dayIdx < base + strength ? 1 : 2;
        const isReview = (dayIdx + 1) % 7 === 0;
        const alloc = allocDay();
        const cells = SUBJECTS.map(s => {
          let chs = chaptersOf[s];
          if (!chs.length) return s + "：自主复习";
          let ch = chs[cursor[s] % chs.length]; cursor[s]++;
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
      "<div class='stat'><div class='num'>" + totalWeak + "</div><div class='lbl'>薄弱章节加码</div></div></div>" +
      "<div class='note'>目标：<b>" + goal + "</b>　·　单科单次≤1.5h，每7天设1次复盘日，艾宾浩斯节奏循环巩固薄弱项。</div>" +
      "<div class='table-wrap'><table><thead><tr><th>周</th>" +
      dayNames.map(d => "<th>" + d + "</th>").join("") + "</tr></thead><tbody>" +
      weekRows.map((r, i) => "<tr><td><b>第" + (i + 1) + "周</b></td>" +
        dayNames.map(d => "<td style='font-size:12px;line-height:1.5'>" + esc(r[d] || "—") + "</td>").join("") + "</tr>").join("") +
      "</tbody></table></div>" +
      "<h3 style='margin-top:16px'>执行说明</h3><ol style='color:var(--ink-2);padding-left:20px;line-height:1.9'>" +
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
    view.innerHTML = pageHead("知识点思维导图 · " + subj, "单章知识体系 + 跨章节关联，可展开/收起") +
      (chapters.length ?
        "<div class='card'><div class='field' style='max-width:420px'><label>选择章节</label><select class='select' id='mm-chap'>" +
        chapters.map(c => "<option>" + esc(c) + "</option>").join("") + "</select></div><div id='mm-out'></div></div>" :
        "<div class='note warn'>该学科思维导图内容建设中，可先用「考点库」按章节复习。</div>");
    if (chapters.length) {
      const paint = () => paintMindmap(maps[document.getElementById("mm-chap").value]);
      document.getElementById("mm-chap").onchange = paint; paint();
    }
  }
  function paintMindmap(tree) {
    let count = 0;
    function node(n, depth) {
      count++;
      const hasChildren = n.children && n.children.length;
      const cls = depth === 0 ? "mm-l1" : depth === 1 ? "mm-l2" : "mm-l3";
      let inner = "<div class='mm-head'><span>" + esc(n.t) + "</span>" +
        (hasChildren ? "<span class='mm-toggle'>[展开/收起]</span>" : "") + "</div>";
      if (hasChildren) inner += "<div class='mm-children'>" + n.children.map(c => node(c, depth + 1)).join("") + "</div>";
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
  }

  /* ---------- 模块4 模拟训练 ---------- */
  function renderQuiz() {
    const subj = state.subject;
    const bank = D.questions[subj] || [];
    view.innerHTML = pageHead("模拟训练 · " + subj, "按难度结构抽卷，在线答题评分 + 逐题解析") +
      "<div class='card'><div class='row'>" +
      "<div class='field'><label>抽题数量</label><select class='select' id='qz-n'>" +
      [5, 8, 10, 12, 15].map(n => "<option>" + n + "</option>").join("") + "</select></div>" +
      "<div class='field'><label>难度结构</label><select class='select' id='qz-mix'>" +
      ["基础为主(6:3:1)", "提升为主(3:5:2)", "冲刺为主(1:3:6)", "均衡(1:1:1)"].map(m => "<option>" + m + "</option>").join("") + "</select></div>" +
      "<div class='field' style='flex:0 0 auto'><label>&nbsp;</label><button class='btn' id='qz-gen'>🎲 生成练习卷</button></div>" +
      "</div>" +
      "<div class='note info'>选择题点击选项即时判分；填空/计算/解答题点击「显示答案」核对。提交后给出客观题得分。</div>" +
      "<div style='margin-top:10px'><button class='btn btn-ghost' id='qz-sample'>📄 查看完整样例试卷（含解析）</button></div>" +
      "</div><div id='qz-out'></div>";
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
      "<div style='margin-top:14px'><button class='btn' id='qz-submit'>提交并查看成绩</button> <span id='qz-final' class='badge b-info' style='margin-left:8px'></span></div>" +
      "</div>";
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
    const meta = "<div class='q-meta'>" + freqBadge("高频") +
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
    if (!sp) { openModal("<h3>样例试卷</h3><p>该科样例试卷建设中。</p>"); return; }
    let html = "<div style='display:flex;justify-content:space-between;align-items:center'><h3>" + esc(sp.title) + "</h3><button class='back-btn' onclick='this.closest(\".modal-box\").parentElement.remove()'>关闭 ✕</button></div><div class='note'>" + esc(sp.meta) + "</div>";
    sp.sections.forEach(sec => {
      html += "<h4 style='margin:14px 0 8px;color:var(--blue-700)'>" + esc(sec.name) + "</h4>";
      sec.items.forEach(it => {
        let inner;
        if (it.options && it.options.length) {
          inner = it.options.map((o, k) =>
            "<div class='q-opt correct'>" + String.fromCharCode(65 + k) + ". " + esc(o) + "</div>").join("") +
            "<div class='ex-analysis'><span class='ans'>答案：" + esc(it.answer) + "</span> ｜ " + esc(it.analysis) + "</div>";
        } else {
          inner = "<div class='ex-analysis'><span class='ans'>参考答案：</span>" + esc(it.answer) + " ｜ " + esc(it.analysis) + "</div>";
        }
        html += "<div class='qbank-item'><div class='q-stem'>" + esc(it.stem) + "</div>" + inner + "</div>";
      });
    });
    openModal(html);
  }
  function openModal(html) {
    const ov = document.createElement("div");
    ov.style.cssText = "position:fixed;inset:0;background:rgba(11,37,69,.45);z-index:200;display:flex;align-items:flex-start;justify-content:center;padding:30px 14px;overflow:auto";
    ov.onclick = e => { if (e.target === ov) ov.remove(); };
    const box = document.createElement("div");
    box.className = "modal-box card";
    box.style.cssText = "max-width:760px;width:100%;margin:auto";
    box.innerHTML = html;
    ov.appendChild(box);
    document.body.appendChild(ov);
  }

  /* ---------- 模块5 真题解析 ---------- */
  function renderPast() {
    const subj = state.subject;
    const list = D.pastPapers[subj] || [];
    const byYear = {};
    list.forEach(p => { (byYear[p.year] = byYear[p.year] || []).push(p); });
    view.innerHTML = pageHead("5年真题解析 · " + subj, "近5年全国乙卷（内蒙古适用）高一范围真题，附命题思路精讲") +
      "<div id='past-out'></div>";
    const out = document.getElementById("past-out");
    if (!list.length) { out.innerHTML = "<div class='note warn'>该科真题收集中。</div>"; return; }
    out.innerHTML = Object.keys(byYear).sort((a, b) => b - a).map(year =>
      "<div class='card'><h3>" + year + "年 " + esc(byYear[year][0].volume) + "（高一部分）</h3>" +
      byYear[year].map(p => pastItem(p)).join("") + "</div>").join("");
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
    return "<div class='qbank-item'><div class='q-meta'><span class='badge b-info'>" + esc(p.type) + "</span> <span class='muted'>" + esc(p.volume) + "</span></div><div class='q-stem'>" + esc(p.stem) + "</div>" + inner + "</div>";
  }

  /* ---------- 模块6 名师讲堂（结构化，可进入详情页） ---------- */
  function renderLecture() {
    const subj = state.subject;
    const list = D.lectures[subj] || [];
    view.innerHTML = pageHead("名师讲堂 · " + subj, "一线名师精讲 + 题型专项，点击进入完整讲解页") +
      (list.length ? "<div class='lec-grid'>" + list.map(l =>
        "<div class='lec-card' data-id='" + l.id + "'><div class='lc-title'>" + esc(l.title) + "</div>" +
        "<div class='lc-cat'><span class='badge b-info'>" + esc(l.category || "知识点精讲") + "</span></div>" +
        "<div class='muted'>" + esc(l.knowledge || "") + "</div>" +
        "<div class='pc-go' style='color:var(--blue-600);font-weight:700;font-size:12.5px'>进入讲堂 →</div></div>").join("") + "</div>" :
        "<div class='note warn'>该科讲堂内容建设中。</div>");
    view.querySelectorAll(".lec-card").forEach(c => c.onclick = () =>
      go("#/s/" + subj + "/lecture/l/" + c.dataset.id));
  }
  function renderLectureDetail(id) {
    const subj = state.subject;
    const l = (D.lectures[subj] || []).find(x => x.id === id);
    if (!l) { view.innerHTML = "<div class='note warn'>未找到该讲堂内容。</div>"; return; }
    let html = "<div class='back-bar'><button class='back-btn' data-back>← 返回名师讲堂</button></div>";
    html += "<div class='detail-head'><div class='crumbs'><a data-back2>" + subj + "</a> / 名师讲堂 / " + esc(l.category || "知识点精讲") + "</div>" +
      "<h1>🎓 " + esc(l.title) + "</h1>" +
      "<div class='dh-meta'><span class='badge' style='background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3)'>" + esc(l.knowledge || "") + "</span></div></div>";
    html += "<div class='lec-body'>";
    if (l.intro) html += "<div class='intro'>" + esc(l.intro) + "</div>";
    if (l.concept && l.concept.length) {
      html += "<h4 style='margin-top:18px;color:var(--blue-700)'>一、核心概念讲解</h4><ul class='concept'>" +
        l.concept.map(c => "<li>" + esc(c) + "</li>").join("") + "</ul>";
    }
    if (l.examples && l.examples.length) {
      html += "<h4 style='margin-top:18px;color:var(--blue-700)'>二、典型例题</h4><div id='lec-ex'></div>";
    }
    if (l.template) html += "<h4 style='margin-top:18px;color:var(--blue-700)'>三、解题模板</h4><div class='template'>" + esc(l.template) + "</div>";
    if (l.summary) html += "<h4 style='margin-top:18px;color:var(--blue-700)'>四、名师总结</h4><div class='summary'>" + esc(l.summary) + "</div>";
    if (l.mnemonic) html += "<div class='mnemonic'>记忆口诀：" + esc(l.mnemonic) + "</div>";
    html += "</div>";
    view.innerHTML = html;
    view.querySelectorAll("[data-back],[data-back2]").forEach(b => b.onclick = () => go("#/s/" + subj + "/lecture"));
    const exRoot = document.getElementById("lec-ex");
    if (exRoot && l.examples) {
      exRoot.innerHTML = l.examples.map((ex, i) => exampleHTML(ex, i)).join("");
      // 绑定：从 l.examples 取数据
      exRoot.querySelectorAll(".example").forEach(el => {
        const i = +el.dataset.ex; const ex = l.examples[i];
        if (ex.options && ex.options.length) {
          el.querySelectorAll(".q-opt").forEach(opt => opt.onclick = () => {
            if (el.dataset.done) return; el.dataset.done = "1";
            const ai = +opt.dataset.i;
            el.querySelectorAll(".q-opt").forEach(o => o.classList.remove("sel"));
            opt.classList.add("sel");
            const ans = el.querySelector(".ex-answer"); const an = el.querySelector(".ex-analysis");
            ans.style.display = "block"; an.style.display = "block";
            if (ai === ex.answer) { opt.classList.add("correct"); ans.textContent = "答案：" + String.fromCharCode(65 + ex.answer); }
            else { opt.classList.add("wrong"); el.querySelectorAll(".q-opt")[ex.answer].classList.add("correct"); ans.textContent = "答案：" + String.fromCharCode(65 + ex.answer); }
            an.innerHTML = "<b>解析：</b>" + esc(ex.analysis);
          });
        } else {
          const btn = el.querySelector(".ex-show");
          const ans = el.querySelector(".ex-answer"); const an = el.querySelector(".ex-analysis");
          btn.onclick = () => {
            ans.style.display = "block"; an.style.display = "block";
            ans.textContent = "答案：" + esc(ex.answer);
            an.innerHTML = "<b>解析：</b>" + esc(ex.analysis);
          };
        }
      });
    }
  }

  /* ---------- 启动 ---------- */
  if (!location.hash) location.hash = "#/s/" + state.subject + "/points";
  route();
})();
