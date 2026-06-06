const { useState, useEffect } = React;

const mlWeeks = [
  {
    phase: "Setup & Resume",
    week: 1, title: "Resume Polish + Skills Audit",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Resume v3: add ML bullets to CGI role (you already have this)", "Audit: what ML topics do you know cold? (list them)"] },
      { day: "Wed", hrs: 2, tasks: ["LinkedIn profile complete: headline, about, featured section", "List target companies (top 10) — what do they ask in interviews?"] },
      { day: "Fri", hrs: 2, tasks: ["GitHub profile cleanup: pinned repos, profile README", "Set up 2 project repos (empty) — Risk API + Kafka Pipeline"] },
      { day: "Sun", hrs: 2, tasks: ["Research target company tech blogs — what ML problems do they solve?", "Plan your 2 projects in detail — design docs before code"] },
    ]
  },
  {
    phase: "Setup & Resume",
    week: 2, title: "Quick ML Theory Refresh",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["StatQuest: Gradient Boosting (all 4 videos, 40 min total)", "Your understanding: can you explain XGBoost vs CatBoost trade-offs?"] },
      { day: "Wed", hrs: 2, tasks: ["SHAP deep dive (20 min video + 20 min practicing on your old CGI work)", "Refresh: AUC-ROC, calibration, threshold tuning"] },
      { day: "Fri", hrs: 2, tasks: ["LeetCode: 3x Easy array problems (30 min)", "Review: can you explain your evaluation metrics from CGI work in an interview?"] },
      { day: "Sun", hrs: 2, tasks: ["Write down: 10 ML interview questions you should be able to answer cold", "Self-quiz: answer them from memory"] },
    ]
  },
  {
    phase: "Setup & Resume",
    week: 3, title: "Interview Framework + LeetCode Start",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Read: Chip Huyen ML System Design intro (30 min)", "Watch: Eugene Yan system design case study (30 min)"] },
      { day: "Wed", hrs: 2, tasks: ["LeetCode: 4x Easy (arrays, hash map, strings) — 30 min", "Write down your STAR stories (5 total, 3 min each when spoken)"] },
      { day: "Fri", hrs: 2, tasks: ["System Design practice: Fraud detection case (60 min)", "Draw architecture: you have 15 min to sketch the full system"] },
      { day: "Sun", hrs: 2, tasks: ["Review: week 1-3, what's clear, what still feels fuzzy?", "Adjust plan if needed — flexibility is okay at this stage"] },
    ]
  },
  {
    phase: "Project 1",
    week: 4, title: "Project 1: Risk Scoring API — Setup",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Set up GitHub repo: cookiecutter data science template", "Load dataset (Kaggle credit risk), initial EDA (30 min)"] },
      { day: "Wed", hrs: 2, tasks: ["Feature engineering pipeline in sklearn (1 hr)", "Train XGBoost baseline model, log params/metrics to MLflow"] },
      { day: "Fri", hrs: 2, tasks: ["Model evaluation: AUC, F1, calibration curve, SHAP summary plot", "Save best model to MLflow Model Registry"] },
      { day: "Sun", hrs: 2, tasks: ["FastAPI skeleton: /predict, /health endpoints", "Test locally with curl — basic functionality working"] },
    ]
  },
  {
    phase: "Project 1",
    week: 5, title: "Project 1: Serving + Containerization",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["FastAPI: load MLflow model, handle predictions, return JSON", "Pydantic validation: what fields are required, what's optional"] },
      { day: "Wed", hrs: 2, tasks: ["Dockerfile: multi-stage build, non-root user", "Test Docker build locally — image runs, /predict works"] },
      { day: "Fri", hrs: 2, tasks: ["GitHub Actions: basic CI/CD (tests + Docker build on push)", "Push Docker image to DockerHub"] },
      { day: "Sun", hrs: 2, tasks: ["Deploy on Railway.app (free) — get live HTTPS endpoint URL", "Write README: what the project does, API docs, live URL"] },
    ]
  },
  {
    phase: "Project 1",
    week: 6, title: "Project 1: Polish + Marketing",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Code review pass: docstrings, clean code, no hardcoded secrets", "Add pytest: data validation test, model performance threshold test"] },
      { day: "Wed", hrs: 2, tasks: ["Create architecture diagram (draw.io) — include in README", "Record 2-min Loom demo: show the API working end-to-end"] },
      { day: "Fri", hrs: 2, tasks: ["Write blog post (Medium/Hashnode): 'Building a production ML API' (20 min writing + 20 min polish)", "LinkedIn post: link to GitHub + blog, show live API"] },
      { day: "Sun", hrs: 2, tasks: ["Push everything to GitHub — this is Project 1 DONE", "Apply to 5 companies (start pipeline early)"] },
    ]
  },

  {
    phase: "Project 2",
    week: 7, title: "Project 2: Kafka ML Pipeline — Design",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Design: Kafka producer → consumer → XGBoost → output topic", "Draw full architecture diagram with latency budget"] },
      { day: "Wed", hrs: 2, tasks: ["Set up: Docker Compose with Kafka + Zookeeper locally", "Build Kafka producer: simulate transaction events (JSON)"] },
      { day: "Fri", hrs: 2, tasks: ["Kafka consumer skeleton: consume events, deserialize, placeholder for scoring", "Test: produce 100 events, verify consumer receives them"] },
      { day: "Sun", hrs: 2, tasks: ["Plan feature engineering: what 5 features will you engineer on events?", "Load your pre-trained XGBoost model from Project 1"] },
    ]
  },
  {
    phase: "Project 2",
    week: 8, title: "Project 2: Real-Time Scoring + Output",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Implement feature engineering in consumer: transaction_amount_log, hour_of_day, merchant_risk_tier", "Score each event with XGBoost, get fraud probability"] },
      { day: "Wed", hrs: 2, tasks: ["Output topic: produce scored events {transaction_id, fraud_prob, risk_tier}", "Dead letter queue: route errors to separate topic"] },
      { day: "Fri", hrs: 2, tasks: ["Add Evidently monitoring: generate DataDriftReport every 500 events", "End-to-end test: 1000 events through full pipeline"] },
      { day: "Sun", hrs: 2, tasks: ["Benchmark: measure throughput (events/sec) and per-event latency", "Document: architecture diagram, data flow, performance numbers"] },
    ]
  },
  {
    phase: "Project 2",
    week: 9, title: "Project 2: GitHub + Marketing",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["GitHub repo: README with architecture diagram, how to run, performance metrics", "Docker Compose: everything in one `docker-compose up`"] },
      { day: "Wed", hrs: 2, tasks: ["Code cleanup: docstrings, logging, error handling", "Add pytest: basic tests for feature engineering, model scoring"] },
      { day: "Fri", hrs: 2, tasks: ["Blog post: 'Real-time ML inference with Kafka — architecture and learnings' (30 min)", "LinkedIn post: diagram + link to GitHub, emphasize the Kafka+ML angle"] },
      { day: "Sun", hrs: 2, tasks: ["Push to GitHub — Project 2 DONE", "Apply to 5 more companies (total 10 applications)"] },
    ]
  },

  {
    phase: "Interview Prep",
    week: 10, title: "LeetCode Sprint I",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["LeetCode: 4x Medium (arrays, hash maps, two pointers) — aim for 20 min per problem", "Time yourself — build the clock discipline"] },
      { day: "Wed", hrs: 2, tasks: ["LeetCode: 4x Medium (linked lists, stacks, trees) — 20 min each", "Review: what patterns did you miss? What's your weakest?"] },
      { day: "Fri", hrs: 2, tasks: ["LeetCode: 4x Medium (graphs, DP intro) — 20 min each", "Practice explaining your approach BEFORE coding"] },
      { day: "Sun", hrs: 2, tasks: ["Review the week: 12 problems done. Identify 2-3 patterns you need to drill.", "Plan next week"] },
    ]
  },
  {
    phase: "Interview Prep",
    week: 11, title: "System Design Sprint I",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["System Design case: Credit risk scoring (your domain expertise!)", "Design: data → features → model → serving → monitoring (60 min)"] },
      { day: "Wed", hrs: 2, tasks: ["System Design case: Payment fraud detection (tie in Kafka + real-time)", "60 min: architecture, latency budget, how you'd deploy on OCP"] },
      { day: "Fri", hrs: 2, tasks: ["LeetCode: 4x Medium (DP, mixed patterns) — 20 min each", "Behavioral: practice telling your STAR stories (5 total, 2 min each)"] },
      { day: "Sun", hrs: 2, tasks: ["Review: are you thinking in terms of data pipeline → model → serving?", "Weak area: deepen it next week"] },
    ]
  },
  {
    phase: "Interview Prep",
    week: 12, title: "ML Theory + SQL Drill",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["ML Theory: write answers to 20 questions (no time limit, detailed)", "Topics: XGBoost internals, SHAP, class imbalance, calibration, AUC vs F1"] },
      { day: "Wed", hrs: 2, tasks: ["SQL: 4x medium questions (window functions, CTEs, running totals)", "Use DataLemur (free)"] },
      { day: "Fri", hrs: 2, tasks: ["LeetCode: 4x Medium (mixed hard patterns) — 20 min each", "Self-quiz: 10 ML questions rapid fire (5 min total, no notes)"] },
      { day: "Sun", hrs: 2, tasks: ["Identify weak topic: is it probability, stats, SQL, or DP?", "Plan intensive drill for next week"] },
    ]
  },
  {
    phase: "Interview Prep",
    week: 13, title: "Mock Interviews + Behavioral",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Full mock: 2x LeetCode Medium (timed, 20 min each)", "Debrief: would a senior engineer be impressed?"] },
      { day: "Wed", hrs: 2, tasks: ["Behavioral deep prep: write out all 5 STAR stories in detail", "Practice saying each story aloud (record yourself on Loom) — 2 min each"] },
      { day: "Fri", hrs: 2, tasks: ["LeetCode: 2x Hard (30 min each) — harder patterns", "ML System Design: 1 new case (30 min) from your weak area"] },
      { day: "Sun", hrs: 2, tasks: ["Week 13 review: how ready do you feel?", "Adjust Plan: if weak in an area, double down next week"] },
    ]
  },

  {
    phase: "Job Hunt",
    week: 14, title: "Target Company Deep Dive + Applications",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Pick 3 target companies (Razorpay, CRED, PhonePe, Zepto, Meesho)", "Deep research: read their engineering blogs, understand their ML stack"] },
      { day: "Wed", hrs: 2, tasks: ["Tailor your resume for each company: emphasize relevant experience", "Apply to 10 companies (direct + referral DMs where possible)"] },
      { day: "Fri", hrs: 2, tasks: ["LeetCode: 2x Medium (20 min each) — keep sharp", "System Design: practice cases relevant to target companies (fraud for payments, risk for lending)"] },
      { day: "Sun", hrs: 2, tasks: ["Create job tracker in Notion: company, role, applied date, status, follow-up", "Follow up on Week 6 applications if no response"] },
    ]
  },
  {
    phase: "Job Hunt",
    week: 15, title: "Interview Execution Begins",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Any interviews scheduled? Deep prep for that company", "Research: what problems do they solve with ML?"] },
      { day: "Wed", hrs: 2, tasks: ["Mock interview (Pramp or peer): full round (coding + system design)", "Debrief: what went well, what to improve"] },
      { day: "Fri", hrs: 2, tasks: ["Apply to 10 more companies (total ~30)", "Practice 3 STAR stories out loud — record yourself"] },
      { day: "Sun", hrs: 2, tasks: ["If you have interviews this week: review target company + practice system design", "If no interviews: keep applying, the pipeline fills eventually"] },
    ]
  },
  {
    phase: "Job Hunt",
    week: 16, title: "Active Interview Mode",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Interview execution (if scheduled) OR mock interview (Pramp)", "Post-interview: write down every question asked, how you answered"] },
      { day: "Wed", hrs: 2, tasks: ["LeetCode: 2x Medium — keep sharp during interview cycle", "Behavioral refinement: 2-3 STAR stories you'll tell this week"] },
      { day: "Fri", hrs: 2, tasks: ["Apply to 5 more companies if needed", "Follow up on pending applications"] },
      { day: "Sun", hrs: 2, tasks: ["Week review: interviews scheduled, offers coming, next steps?", "Rest: you've done the work"] },
    ]
  },
  {
    phase: "Job Hunt",
    week: 17, title: "Interview + Offer Phase",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Interviews (likely multiple this week)", "Evaluate offers: total comp, team quality, growth opportunity"] },
      { day: "Wed", hrs: 2, tasks: ["If offer received: evaluate framework (base + bonus + ESOPs)", "If still interviewing: keep momentum, apply to remaining targets"] },
      { day: "Fri", hrs: 2, tasks: ["Salary negotiation (if offer): know your market rate, counter offer", "Continue interviews with other companies (don't stop at first offer)"] },
      { day: "Sun", hrs: 2, tasks: ["Decision: best offer, best culture fit, best growth?", "Sign or negotiate further"] },
    ]
  },
  {
    phase: "Buffer",
    week: 18, title: "Buffer Week (Offer Negotiation / Final Prep)",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Negotiate offers (if multiple)", "Ask for time to decide if needed"] },
      { day: "Wed", hrs: 2, tasks: ["If no offers yet: apply to backup list + keep interviewing", "Mock interview: stay sharp"] },
      { day: "Fri", hrs: 2, tasks: ["Offer accepted? Plan onboarding: tech stack, team, first projects", "If still in process: keep pushing"] },
      { day: "Sun", hrs: 2, tasks: ["Week review: where are you?", "Celebrate or refocus — either way, you've done serious work"] },
    ]
  },
  {
    phase: "Buffer",
    week: 19, title: "Buffer Week II",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["If offer signed: celebrate, prepare for Day 1", "If still interviewing: focused push on remaining companies"] },
      { day: "Wed", hrs: 2, tasks: ["Prep: tech stack review for your new role", "Intro call with manager: ask what to prepare"] },
      { day: "Fri", hrs: 2, tasks: ["Personal: rest, reflect on the 6-month journey", "LeetCode: 1-2 problems if you want (optional)"] },
      { day: "Sun", hrs: 2, tasks: ["Reflect: you went from frustrated DBA to ML Engineer at a product company", "That's real. That's yours."] },
    ]
  },

  {
    phase: "Contingency",
    week: 20, title: "Contingency: Offer Not Yet / Plan Adjustment",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["If you don't have an offer by Week 20: expand target list", "Apply to startups, contract roles, adjacent roles (Analytics Engineer, Data Engineer with ML)"] },
      { day: "Wed", hrs: 2, tasks: ["Revisit your projects: are they showcasing the right skills?", "Do another round of cold outreach on LinkedIn"] },
      { day: "Fri", hrs: 2, tasks: ["LeetCode: 2x Medium (stay sharp)", "System Design: 1 new case (practice doesn't hurt)"] },
      { day: "Sun", hrs: 2, tasks: ["Regroup: what's working, what's not?", "Adjust messaging or target list if needed"] },
    ]
  },
  {
    phase: "Contingency",
    week: 21, title: "Contingency: Extended Search",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Apply to 10 more companies (Startups, Tier-2 companies)", "Look at AngelList/Wellfound for early-stage ML roles"] },
      { day: "Wed", hrs: 2, tasks: ["Interview prep: refresh weak areas", "Mock interview: stay interview-ready"] },
      { day: "Fri", hrs: 2, tasks: ["Networking: reach out to 5 ex-Cognizant colleagues in product", "Ask for referrals, advice, practice interviews"] },
      { day: "Sun", hrs: 2, tasks: ["Review: what's different from Week 1?", "Your skills are real. The right opportunity will come."] },
    ]
  },
  {
    phase: "Contingency",
    week: 22, title: "Contingency: Onboarding / Extended Search",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["If you have an offer: focus on onboarding", "If not: keep the search active but sustainable"] },
      { day: "Wed", hrs: 2, tasks: ["Day 1 prep: review your new company's tech stack", "Or: continue interviews with momentum"] },
      { day: "Fri", hrs: 2, tasks: ["Celebrate: you've built 2 projects, survived 6 months of 6-8 hrs/week discipline", "That's not nothing"] },
      { day: "Sun", hrs: 2, tasks: ["Whatever comes next, you earned it."] },
    ]
  },
  {
    phase: "Contingency",
    week: 23, title: "Week 23: Day 1 or Continued Search",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Day 1 of your ML Engineer role OR keep applying", "Either way: you have the skills"] },
      { day: "Wed", hrs: 2, tasks: ["Onboarding ramp or interview push — full focus"] },
      { day: "Fri", hrs: 2, tasks: ["Setup or search — whatever's needed"] },
      { day: "Sun", hrs: 2, tasks: ["Rest"] },
    ]
  },
  {
    phase: "Contingency",
    week: 24, title: "Week 24: Onboarded or Still Searching",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["First week as ML Engineer or final push of applications"] },
      { day: "Wed", hrs: 2, tasks: ["Learning the codebase or interview prep"] },
      { day: "Fri", hrs: 2, tasks: ["Settling in or staying persistent"] },
      { day: "Sun", hrs: 2, tasks: ["You did 6 months of deliberate, sustained effort. That's character."] },
    ]
  },
  {
    phase: "Contingency",
    week: 25, title: "Week 25: Momentum",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Full focus: onboarding or search"] },
      { day: "Wed", hrs: 2, tasks: ["Build or apply"] },
      { day: "Fri", hrs: 2, tasks: ["Contribute or interview"] },
      { day: "Sun", hrs: 2, tasks: ["This is just the beginning."] },
    ]
  },
  {
    phase: "Contingency",
    week: 26, title: "Week 26: End of 6 Months",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Reflect on the 6-month journey"] },
      { day: "Wed", hrs: 2, tasks: ["What you built, what you learned, where you are"] },
      { day: "Fri", hrs: 2, tasks: ["Next chapter: Day 1 at a product company or Day N of continued effort"] },
      { day: "Sun", hrs: 2, tasks: ["Either way: you earned this. Own it."] },
    ]
  },
];

function FocusedRoadmap({ user }) {
  const [activeWeek, setActiveWeek] = useState(0);
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [checked, setChecked] = useState({});

  const progressKey = `ml-progress-${user || 'guest'}`;

  useEffect(() => {
    const saved = localStorage.getItem(progressKey);
    if (saved) {
      try {
        setChecked(JSON.parse(saved));
      } catch (e) {
        setChecked({});
      }
    }
  }, [progressKey]);

  const toggleChecked = (id) => {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    localStorage.setItem(progressKey, JSON.stringify(next));
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const totalCount = mlWeeks.reduce((sum, week) => sum + week.days.reduce((inner, d) => inner + d.tasks.length, 0), 0);

  const currentWeek = mlWeeks[activeWeek];
  const phaseColor = {
    "Setup & Resume": "#2563EB",
    "Project 1": "#059669",
    "Project 2": "#7C3AED",
    "Interview Prep": "#DC2626",
    "Job Hunt": "#F59E0B",
    "Buffer": "#10B981",
    "Contingency": "#6366F1"
  };

  const color = phaseColor[currentWeek.phase];

  return (
    <div style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif", background: "#0A0A0F", minHeight: "100vh", color: "#E8E8F0", padding: "20px 16px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, color: "#6B7280", marginBottom: 6 }}>SYNAPSE · 6-MONTH FOCUSED ROADMAP</div>
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>ML Engineer Transition<br/><span style={{ color: "#6B7280", fontSize: 14, fontWeight: 400 }}>6-8 hrs/week · 26 weeks · 2 projects + interviews</span></div>
          <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.7 }}>
            <strong>The reality:</strong> You have 1-2 hours per day. That's ~6-8 hours per week. In 6 months, that's ~192 hours total. Focus ruthlessly: 2 killer projects + interview readiness. Skip the fluff. Get hired. Then go deeper.
          </div>
          <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 12 }}>
            Checklist progress for <strong style={{ color: "#fff" }}>{user}</strong>: {completedCount}/{totalCount} tasks completed.
          </div>
        </div>

        {/* Week selector */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, letterSpacing: 2, color: "#6B7280", fontWeight: 700, marginBottom: 10 }}>WEEKS 1–26</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(13, 1fr)", gap: 4 }}>
            {mlWeeks.map((w, i) => (
              <button key={i} onClick={() => { setActiveWeek(i); setExpandedWeek(null); }}
                style={{
                  background: activeWeek === i ? phaseColor[w.phase] : "#1A1A2E",
                  border: activeWeek === i ? `2px solid ${phaseColor[w.phase]}` : "1px solid #2A2A3E",
                  borderRadius: 6,
                  padding: "8px 6px",
                  cursor: "pointer",
                  color: activeWeek === i ? "#fff" : "#6B7280",
                  fontSize: 9,
                  fontWeight: 700,
                  textAlign: "center",
                  lineHeight: 1.3
                }}>
                W{i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Current week detail */}
        <div style={{ background: "#1A1A2E", border: `1px solid ${color}44`, borderLeft: `4px solid ${color}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 11, letterSpacing: 2, color: color, fontWeight: 700, marginBottom: 4 }}>{currentWeek.phase} · {currentWeek.hrs}h</div>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 2 }}>Week {currentWeek.week}: {currentWeek.title}</div>
            <div style={{ fontSize: 12, color: "#9CA3AF" }}>~{Math.round(currentWeek.hrs / 5)} hr per day average</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {currentWeek.days.map((d, i) => (
              <div key={i} style={{ background: "#0F0F13", borderRadius: 8, padding: 12, border: "1px solid #2A2A3E" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontWeight: 700, color: color, fontSize: 13 }}>{d.day}</span>
                  <span style={{ fontSize: 11, color: "#6B7280" }}>{d.hrs}h</span>
                </div>
                {d.tasks.map((task, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6, lineHeight: 1.4, paddingLeft: 16, position: 'relative', color: '#D1D5DB', fontSize: 12 }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <input type="checkbox" checked={checked[`ml-${currentWeek.week}-${i}-${j}`] || false} onChange={() => toggleChecked(`ml-${currentWeek.week}-${i}-${j}`)} style={{ width: 14, height: 14 }} />
                      <span>{task}</span>
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, padding: 12, background: "#0F0F13", borderRadius: 8, fontSize: 12, color: "#9CA3AF", borderLeft: `3px solid ${color}` }}>
            <strong style={{ color: color }}>Focus:</strong> This week, what's the ONE thing that matters most? Finish it. Don't spread thin.
          </div>
        </div>

        {/* Phase breakdown */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, letterSpacing: 2, color: "#6B7280", fontWeight: 700, marginBottom: 12 }}>ROADMAP STRUCTURE</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
            {[
              { phase: "Setup & Resume", weeks: "1-3", color: "#2563EB", desc: "Polish resume, quick ML refresh, LeetCode start" },
              { phase: "Project 1", weeks: "4-6", color: "#059669", desc: "Build, deploy, market Risk Scoring API" },
              { phase: "Project 2", weeks: "7-9", color: "#7C3AED", desc: "Build, deploy, market Kafka ML Pipeline (your differentiator)" },
              { phase: "Interview Prep", weeks: "10-13", color: "#DC2626", desc: "LeetCode sprint, system design, behavioral, mock interviews" },
              { phase: "Job Hunt", weeks: "14-17", color: "#F59E0B", desc: "Apply, interview, negotiate offers" },
              { phase: "Buffer", weeks: "18-19", color: "#10B981", desc: "Offer negotiation or continued search" },
              { phase: "Contingency", weeks: "20-26", color: "#6366F1", desc: "Extended job search or onboarding ramp" },
            ].map((p, i) => (
              <div key={i} style={{ background: "#1A1A2E", border: `1px solid ${p.color}33`, borderLeft: `4px solid ${p.color}`, borderRadius: 10, padding: 12 }}>
                <div style={{ fontWeight: 700, color: p.color, fontSize: 12, marginBottom: 4 }}>{p.phase} · Weeks {p.weeks}</div>
                <div style={{ fontSize: 12, color: "#9CA3AF" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key insight */}
        <div style={{ background: "#1A1A2E", border: "1px solid #2A2A3E", borderLeft: "4px solid #F59E0B", borderRadius: 12, padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.8 }}>
            <strong style={{ color: "#F59E0B" }}>Strategy:</strong> Weeks 1-3 are not wasted. They polish your foundation and let you START applying in Week 6 when Project 1 is live. Weeks 10-13 are interview prep in parallel with job hunting (Weeks 14-17). By Week 17, you've applied to 30+ companies and had multiple interviews. If no offer by Week 18, you pivot — maybe a different role, maybe an internal move, maybe a contract gig. But you have a 6-month plan that accounts for reality.
          </div>
        </div>

        {/* SYNAPSE note */}
        <div style={{ background: "#1A1A2E", border: "1px solid #DC262633", borderLeft: "4px solid #DC2626", borderRadius: 12, padding: 14 }}>
          <div style={{ fontSize: 12, color: "#FCA5A5", lineHeight: 1.7 }}>
            <strong style={{ color: "#DC2626" }}>SYNAPSE:</strong> 6-8 hours per week is tight. But here's the honest truth: it's MORE than most people are willing to do. Most people talk about career transitions. You're actually building the projects and getting hired. That's the difference between talking and doing. Finish Week 6, deploy Project 1, and you're in the top 1% of ML candidates already. The second project makes you unstoppable.
          </div>
        </div>
      </div>
    </div>
  );
}
