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
  /* ---------- 模块4 模拟训练（两种模式） ---------- */
  function renderQuiz() {
    const subj = state.subject;
    view.innerHTML = pageHead("模拟训练 · " + subj, "两种模式：① 按专题分类练习 ② 整套试卷（两种模式均附答案）") +
      "<div class='mode-tabs' id='qz-tabs'>" +
      "<button class='mtab2 on' data-mode='topic'>① 按专题分类练习</button>" +
      "<button class='mtab2' data-mode='paper'>② 整套试卷</button>" +
      "</div><div id='qz-body'></div>";
    document.querySelectorAll("#qz-tabs .mtab2").forEach(b => b.onclick = () => {
      document.querySelectorAll("#qz-tabs .mtab2").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      if (b.dataset.mode === "topic") renderTopicMode(subj);
      else renderPaperList(subj);
    });
    renderTopicMode(subj);
  }

  function uniqueChapters(subj) {
    const seen = [], out = [];
    (D.questions[subj] || []).forEach(q => { if (!seen.includes(q.chapter)) { seen.push(q.chapter); out.push(q.chapter); } });
    return out;
  }

  /* 模式一：按专题（章节）分类练习，每题附答案/解析 */
  function renderTopicMode(subj) {
    const bank = D.questions[subj] || [];
    const topics = uniqueChapters(subj);
    const body = document.getElementById("qz-body");
    body.innerHTML = "<div class='card'>" +
      "<div class='row'><div class='field' style='flex:1.3'><label>选择专题（章节）</label>" +
      "<select class='select' id='qz-topic'>" +
      "<option value='__all__'>全部专题（共 " + bank.length + " 题）</option>" +
      topics.map(t => "<option>" + esc(t) + "</option>").join("") + "</select></div>" +
      "<div class='field' style='flex:0 0 auto'><label>&nbsp;</label><button class='btn btn-ghost' id='qz-reveal'>显示全部答案</button></div>" +
      "</div>" +
      "<div class='note info'>选择题点击选项即判分；填空/解答题点「显示答案」核对。下方「显示全部答案」可一次性展开本专题全部解析。</div>" +
      "<div id='qz-list'></div></div>";
    const list = document.getElementById("qz-list");
    function paint(topic) {
      const qs = topic === "__all__" ? bank : bank.filter(q => q.chapter === topic);
      list.innerHTML = qs.length ? qs.map((q, i) => quizItemHTML(q, i, true)).join("") : "<div class='note warn'>该专题暂无题目。</div>";
      bindQuizItems(list);
    }
    document.getElementById("qz-topic").onchange = e => paint(e.target.value);
    document.getElementById("qz-reveal").onclick = () => revealAll(list);
    paint("__all__");
  }

  /* 模式二：整套试卷列表 */
  function renderPaperList(subj) {
    const papers = D.mockPapers[subj] || [];
    const body = document.getElementById("qz-body");
    if (!papers.length) { body.innerHTML = "<div class='note warn'>该科整套试卷收集中。</div>"; return; }
    body.innerHTML = "<div class='note info'>以下为完整成套模拟卷（含选择/填空/解答/实验/阅读/写作等全题型分区），每题附答案与解析。点击进入可逐题答题或一次性展开全部答案。</div>" +
      "<div class='paper-list'>" + papers.map((p, i) =>
        "<div class='paper-card' data-i='" + i + "'><div class='pc-title'>" + esc(p.title) + "</div>" +
        "<div class='muted'>" + esc(p.meta) + "</div>" +
        "<div class='pc-go'>开始答题 / 查看试卷 →</div></div>").join("") + "</div>";
    body.querySelectorAll(".paper-card").forEach(c => c.onclick = () =>
      renderFullPaper(papers[+c.dataset.i], "<button class='back-btn' data-back>← 返回整套试卷列表</button>", () => renderPaperList(subj)));
  }

  /* 共享：渲染一份完整试卷（模式二整套试卷 & 模块5真题 通用） */
  function renderFullPaper(paper, backHTML, backFn) {
    const total = paper.sections.reduce((a, s) => a + s.items.length, 0);
    let secHTML = paper.sections.map(sec =>
      "<div class='paper-section'><div class='ps-name'>" + esc(sec.name) + "</div>" +
      sec.items.map((it, i) => quizItemHTML(it, i, false)).join("") + "</div>").join("");
    view.innerHTML = (backHTML || "") +
      "<div class='detail-head' style='background:linear-gradient(120deg,var(--blue-700),var(--blue-500))'>" +
      "<h1 style='color:#fff'>" + esc(paper.title) + "</h1>" +
      "<div class='dh-meta'>" +
      "<span class='badge' style='background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3)'>" + esc(paper.meta) + "</span>" +
      "<span class='badge' style='background:rgba(255,255,255,.18);color:#fff;border:1px solid rgba(255,255,255,.3)'>共 " + total + " 题</span>" +
      "</div></div>" +
      "<div class='card' style='margin-top:14px'><button class='btn btn-ghost' id='fp-reveal'>显示全部答案</button></div>" +
      "<div id='fp-body'>" + secHTML + "</div>";
    view.querySelectorAll("[data-back]").forEach(b => b.onclick = backFn || (() => (state.module === "past" ? renderPast() : renderQuiz())));
    const fp = document.getElementById("fp-body");
    bindQuizItems(fp);
    document.getElementById("fp-reveal").onclick = () => revealAll(fp);
  }

  /* 共享：单题 HTML（isBank=true 时显示章节/考点徽标，用于模式一专题练习） */
  function quizItemHTML(q, i, isBank) {
    const isChoice = !!(q.options && q.options.length);
    const ansIdx = isChoice ? (typeof q.answer === "number" ? q.answer : String(q.answer).charCodeAt(0) - 65) : -1;
    const type = q.type || (isChoice ? "选择" : "解答");
    let meta = "<div class='q-meta'><span class='badge b-info'>" + esc(type) + "</span>" + stars(q.difficulty || 3);
    if (isBank) meta += " <span class='muted'>" + esc(q.chapter || "") + (q.point ? " · 考点" + esc(q.point) : "") + "</span>";
    meta += "</div>";
    let body;
    if (isChoice) {
      body = q.options.map((o, k) =>
        "<div class='q-opt' data-i='" + k + "'>" + String.fromCharCode(65 + k) + ". " + esc(o) + "</div>").join("") +
        "<div class='q-analysis'><span class='ans'>答案：" + esc(String.fromCharCode(65 + ansIdx)) + "</span> ｜ " + esc(q.analysis) + "</div>";
    } else {
      body = "<button class='btn btn-sm q-show'>显示答案 / 解析</button>" +
        "<div class='q-analysis'><span class='ans'>参考答案：</span>" + esc(q.answer) + " ｜ " + esc(q.analysis) + "</div>";
    }
    return "<div class='qbank-item' data-type='" + (isChoice ? "choice" : "text") + "' data-ans='" + ansIdx + "'>" +
      "<div class='q-stem'><b>" + (i + 1) + ".</b> " + esc(q.stem) + "</div>" + meta + body + "</div>";
  }

  function bindQuizItems(root) {
    root.querySelectorAll(".qbank-item").forEach(item => {
      const ans = +item.dataset.ans;
      const analysis = item.querySelector(".q-analysis");
      if (item.dataset.type === "choice") {
        item.querySelectorAll(".q-opt").forEach(opt => {
          opt.onclick = () => {
            if (item.dataset.done) return;
            item.dataset.done = "1";
            const ai = +opt.dataset.i;
            item.querySelectorAll(".q-opt").forEach(o => o.classList.remove("sel"));
            opt.classList.add("sel");
            if (ai === ans) opt.classList.add("correct");
            else { opt.classList.add("wrong"); item.querySelectorAll(".q-opt")[ans].classList.add("correct"); }
            analysis.classList.add("show");
          };
        });
      } else {
        const btn = item.querySelector(".q-show");
        if (btn) btn.onclick = () => analysis.classList.add("show");
      }
    });
  }

  function revealAll(root) {
    root.querySelectorAll(".qbank-item").forEach(item => {
      const ans = +item.dataset.ans;
      const analysis = item.querySelector(".q-analysis");
      analysis.classList.add("show");
      if (item.dataset.type === "choice" && !item.dataset.done) {
        const opts = item.querySelectorAll(".q-opt");
        if (opts[ans]) opts[ans].classList.add("correct");
      }
    });
  }

  /* ---------- 模块5 真题解析（完整全套试卷） ---------- */
  function renderPast() {
    const subj = state.subject;
    const papers = D.pastPapers[subj] || [];
    view.innerHTML = pageHead("5年真题解析 · " + subj, "近年全国卷（内蒙古适用）高一范围完整真题套卷，附逐题答案与命题思路精讲") +
      (papers.length
        ? "<div class='note info'>以下为完整成套真题卷，每题均附答案与解析。点击进入可逐题答题或一次性展开全部答案。</div>" +
          "<div class='paper-list'>" + papers.map((p, i) =>
            "<div class='paper-card' data-i='" + i + "'><div class='pc-title'>" + esc(p.title) + "</div>" +
            "<div class='muted'>" + esc(p.meta) + "</div>" +
            "<div class='pc-go'>开始答题 / 查看试卷 →</div></div>").join("") + "</div>"
        : "<div class='note warn'>该科真题收集中。</div>");
    view.querySelectorAll(".paper-card").forEach(c => c.onclick = () =>
      renderFullPaper(papers[+c.dataset.i], "<button class='back-btn' data-back>← 返回真题列表</button>", () => renderPast()));
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
