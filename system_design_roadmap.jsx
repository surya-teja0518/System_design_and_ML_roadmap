const { useState, useEffect } = React;

const systemWeeks = [
  {
    week: 1, phase: "Foundations", title: "System Design Fundamentals",
    topics: [
      { day: "Mon", hrs: 1, topic: "Scalability basics: Vertical vs Horizontal scaling, load balancing", resources: ["Designing Data-Intensive Apps Ch.1 (30 min)", "Grokking System Design (intro video, 20 min)"], hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Database fundamentals: SQL vs NoSQL, ACID vs BASE, CAP theorem", resources: ["System Design Primer (GitHub)", "Grokking Ch.2 (30 min)"], hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "Caching: In-memory vs distributed, Cache invalidation, Redis basics", resources: ["Designing Data-Intensive Apps Ch.3 (40 min)", "Redis docs overview"], hld: "HLD" },
      { day: "Sun", hrs: 1, topic: "API Design: REST principles, rate limiting, versioning", resources: ["REST API best practices blog (20 min)", "API design patterns"], hld: "HLD" },
    ]
  },
  {
    week: 2, phase: "Foundations", title: "Distributed Systems Basics",
    topics: [
      { day: "Mon", hrs: 1, topic: "Networking: DNS, TCP/IP, HTTP/HTTPS, WebSockets", resources: ["Computer Networking video (30 min)", "Grokking System Design Ch.3"], hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Message Queues: Kafka, RabbitMQ, async processing", resources: ["Kafka overview (20 min)", "Your existing Kafka knowledge at CGI"], hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "Data serialization: JSON, Protobuf, Avro, when to use which", resources: ["Protobuf vs JSON blog (15 min)", "Avro docs overview"], hld: "HLD" },
      { day: "Sun", hrs: 1, topic: "Consistency models: Strong vs eventual consistency, 2-phase commit", resources: ["Designing Data-Intensive Apps Ch.9 (30 min)", "Consistency blog post"], hld: "HLD" },
    ]
  },
  {
    week: 3, phase: "Foundations", title: "Monitoring & Reliability",
    topics: [
      { day: "Mon", hrs: 1, topic: "Monitoring: Metrics (latency, QPS, error rate), logging, tracing", resources: ["Observability eng blog (20 min)", "Prometheus overview"], hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Reliability: SLO/SLA, circuit breakers, graceful degradation", resources: ["Google SRE Book Ch.4 (30 min)", "Circuit breaker pattern"], hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "Data pipeline design: batch vs stream, idempotency, deduplication", resources: ["Your CGI DSP experience (re-examine)", "Stream processing patterns"], hld: "HLD" },
      { day: "Sun", hrs: 1, topic: "Security fundamentals: Authentication vs authorization, encryption, OAuth", resources: ["Auth0 blog (20 min)", "OWASP top 10 summary"], hld: "HLD" },
    ]
  },
  {
    week: 4, phase: "Case Studies", title: "Case Study: Real-Time Fraud Detection (Your Domain)",
    topics: [
      { day: "Mon", hrs: 1, topic: "Problem scoping: fraud signals, false positive cost, real-time requirement (< 100ms)", resources: ["Stripe ML blog: fraud (15 min)", "Your CGI banking experience"], lld: "LLD", hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Architecture: event source (Kafka) → feature service → model service → decision engine", resources: ["draw.io or Excalidraw", "Your Project 2"], lld: "LLD", hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "Feature store design: offline vs online store, point-in-time correctness", resources: ["Feast docs (20 min)", "Feature store blog"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Model serving: batching vs real-time, inference latency budget, versioning strategy", resources: ["KServe docs (15 min)", "Model serving patterns"], lld: "LLD" },
    ]
  },
  {
    week: 5, phase: "Case Studies", title: "Case Study: Recommendation System (E-commerce)",
    topics: [
      { day: "Mon", hrs: 1, topic: "Problem scoping: ranking relevance + diversity, cold start problem, exploration-exploitation", resources: ["DoorDash ML blog (15 min)", "Recommendation systems overview"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Data flow: user-item interactions → offline training → online serving → A/B testing", resources: ["Netflix recommendation blog (20 min)", "Grokking rec systems"], hld: "HLD", lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Candidate generation: collaborative filtering, content-based, two-tower models", resources: ["Two-tower architecture blog (15 min)", "Matrix factorization basics"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Re-ranking: personalization, diversity, business metrics (CTR, revenue), real-time freshness", resources: ["Learning-to-rank blog (15 min)", "Re-ranking patterns"], lld: "LLD" },
    ]
  },
  {
    week: 6, phase: "Case Studies", title: "Case Study: Payment System (Fintech)",
    topics: [
      { day: "Mon", hrs: 1, topic: "Problem scoping: ACID transactions, reconciliation, dispute handling, compliance (PCI-DSS)", resources: ["Stripe engineering blog (20 min)", "Your banking domain knowledge"], hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Architecture: API → payment processor → settlement → reconciliation", resources: ["Payment flow diagrams (15 min)", "System Design Primer payment"], hld: "HLD", lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Idempotency & reconciliation: handling duplicate requests, eventual consistency", resources: ["Idempotency blog (15 min)", "Reconciliation patterns"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Failure handling: timeouts, retries, circuit breakers, rollbacks", resources: ["Grokking fault tolerance (20 min)", "Chaos engineering intro"], lld: "LLD" },
    ]
  },
  {
    week: 7, phase: "Case Studies", title: "Case Study: Search System (Real-time Index)",
    topics: [
      { day: "Mon", hrs: 1, topic: "Problem scoping: latency < 200ms, relevance, indexing strategy, query understanding", resources: ["Google search ranking blog (15 min)", "Elasticsearch intro"], hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Indexing: inverted index, sharding strategy, replication", resources: ["Lucene/Elasticsearch indexing (20 min)", "Sharding patterns"], hld: "HLD", lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Query processing: tokenization, ranking, personalization, autocomplete", resources: ["Query processing blog (15 min)", "BM25 algorithm"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Consistency & freshness: near-real-time indexing, eventual consistency", resources: ["Indexing tradeoffs blog (15 min)", "Consistency models"], lld: "LLD" },
    ]
  },
  {
    week: 8, phase: "LLD Focus", title: "Low-Level Design: Database Design",
    topics: [
      { day: "Mon", hrs: 1, topic: "Schema design: normalization vs denormalization, choosing primary/foreign keys, indexing strategy", resources: ["Database design tutorial (30 min)", "Your Oracle DBA knowledge"], lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Query optimization: execution plans, index design, query patterns, partitioning", resources: ["Your CGI Oracle optimization work", "Query optimization guide (20 min)"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Transactions: ACID properties, isolation levels, locking, deadlock prevention", resources: ["Transaction patterns blog (20 min)", "ACID deep dive"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Replication & sharding: consistency, failover, resharding strategy, geo-distribution", resources: ["Designing Data-Intensive Apps Ch.5 (30 min)", "Sharding patterns"], lld: "LLD" },
    ]
  },
  {
    week: 9, phase: "LLD Focus", title: "Low-Level Design: API & Service Layer",
    topics: [
      { day: "Mon", hrs: 1, topic: "Service interface design: request/response models, status codes, error handling, versioning", resources: ["API design best practices (20 min)", "REST conventions"], lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Rate limiting: token bucket, leaky bucket, fixed window, sliding window algorithms", resources: ["Rate limiting algorithms blog (20 min)", "Redis rate limiter"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Caching strategy: cache invalidation (TTL, LRU, write-through, write-back), distributed caching", resources: ["Cache invalidation blog (15 min)", "Redis patterns"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Async processing: queues, workers, retry logic, dead letter queues, timeout handling", resources: ["Async patterns blog (20 min)", "Your Kafka knowledge"], lld: "LLD" },
    ]
  },
  {
    week: 10, phase: "LLD Focus", title: "Low-Level Design: ML Serving Specifics",
    topics: [
      { day: "Mon", hrs: 1, topic: "Feature store LLD: schema (feature tables, versions), metadata store, retrieval API", resources: ["Feast API docs (20 min)", "Feature store design deep dive"], lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Model service LLD: model loading/caching, inference API, batch vs real-time, versioning", resources: ["KServe LLD (20 min)", "Model serving patterns"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Online feature computation: stateful aggregations, windowed operations, freshness guarantees", resources: ["Kafka streams stateful ops (20 min)", "Your real-time ML project"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "ML-specific concerns: training-serving skew, feature leakage prevention, data versioning", resources: ["Hidden Technical Debt in ML (paper summary, 15 min)", "Your Feature eng experience"], lld: "LLD" },
    ]
  },
  {
    week: 11, phase: "Integration", title: "Putting It Together: Fraud Detection Deep Dive",
    topics: [
      { day: "Mon", hrs: 1, topic: "Full system design (HLD): event ingestion → feature computation → model inference → decision engine → logging", resources: ["Your Project 2 architecture", "Stripe fraud blog"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Database schema (LLD): transactions table, features table, predictions table, labels table (for retraining)", resources: ["Schema design patterns (20 min)", "Your Oracle experience"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "API design (LLD): /predict endpoint, /batch_predict, /model_info, /metrics endpoints", resources: ["Your FastAPI Project 1 (20 min review)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Monitoring & debugging (LLD): latency tracking, model performance metrics, data quality checks, alerting", resources: ["Observability for ML blog (15 min)", "Evidently AI"], lld: "LLD" },
    ]
  },
  {
    week: 12, phase: "Integration", title: "Putting It Together: Kafka Real-Time Pipeline Deep Dive",
    topics: [
      { day: "Mon", hrs: 1, topic: "Full pipeline (HLD): data source → feature enrichment → ML scoring → decision → action", resources: ["Your Project 2 (review + expand)", "Kafka architecture patterns"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "State management (LLD): event deduplication, exactly-once semantics, windowed aggregations, state store", resources: ["Kafka state management (20 min)", "Stream processing patterns"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Failure handling (LLD): retries, dead letter queues, circuit breakers, graceful degradation", resources: ["Grokking fault tolerance (20 min)", "Resilience patterns"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Scaling (HLD + LLD): consumer groups, partitioning strategy, backpressure handling, throughput optimization", resources: ["Kafka scaling guide (20 min)", "Your DSP experience"], hld: "HLD", lld: "LLD" },
    ]
  },
  {
    week: 13, phase: "Interview Practice", title: "System Design Practice: Fraud Detection (60 min)",
    topics: [
      { day: "Mon", hrs: 1.5, topic: "Full 60-min mock: Design real-time fraud detection end-to-end", resources: ["Whiteboard or Excalidraw", "Pramp.com"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Deep dive: Your architecture — be ready to defend every choice", resources: ["Your design", "Trade-off analysis"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "LLD follow-up questions: how do you version models, handle feature drift, scale to 10k TPS?", resources: ["Follow-up questions list (20 min)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Reflect: what questions tripped you up? Double down on those areas", resources: ["Your weak areas"], hld: "HLD", lld: "LLD" },
    ]
  },
  {
    week: 14, phase: "Interview Practice", title: "System Design Practice: Recommendation System (60 min)",
    topics: [
      { day: "Mon", hrs: 1.5, topic: "Full 60-min mock: Design recommendation system for e-commerce", resources: ["Whiteboard", "Pramp.com"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "HLD focus: Can you explain candidate generation, ranking, re-ranking in your architecture?", resources: ["Grokking rec systems (20 min)"], hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "LLD focus: How do you handle real-time personalization at scale? Feature freshness?", resources: ["Feature store patterns (20 min)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Practice: explain A/B testing strategy for ranking changes", resources: ["A/B testing guide"], hld: "HLD", lld: "LLD" },
    ]
  },
  {
    week: 15, phase: "Interview Practice", title: "System Design Practice: Payment System (60 min)",
    topics: [
      { day: "Mon", hrs: 1.5, topic: "Full 60-min mock: Design payment system (ACID + eventual consistency)", resources: ["Whiteboard", "Pramp.com"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "HLD: architecture layers (API, processor, settlement, reconciliation)", resources: ["Grokking payment system (20 min)"], hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "LLD: transaction storage, idempotency, retry logic, timeout handling", resources: ["Idempotency patterns (15 min)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Compliance deep dive: PCI-DSS, reconciliation requirements, audit trails", resources: ["Your banking domain knowledge"], lld: "LLD" },
    ]
  },
  {
    week: 16, phase: "Interview Practice", title: "System Design Practice: Custom Cases (Your Choice)",
    topics: [
      { day: "Mon", hrs: 1.5, topic: "Mock: Design a system relevant to your target company (Razorpay: payments, CRED: credit scoring, Zepto: inventory)", resources: ["Target company tech blog", "Whiteboard"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Mock: Design a machine learning system (training pipeline + serving)", resources: ["Chip Huyen book Ch.4-5 (20 min review)", "Whiteboard"], hld: "HLD", lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Practice: follow-up questions deep dive (why this database, how do you scale, what if X fails)", resources: ["Follow-up patterns list"], hld: "HLD", lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Reflection: which system design cases are you most confident in? Which need work?", resources: ["Your practice notes"], hld: "HLD", lld: "LLD" },
    ]
  },
];

function SystemDesignRoadmap({ user }) {
  const [activeWeek, setActiveWeek] = useState(0);
  const [view, setView] = useState("list");
  const [checked, setChecked] = useState({});

  const progressKey = `system-progress-${user || 'guest'}`;

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
  const totalCount = systemWeeks.reduce((sum, week) => sum + week.topics.length, 0);

  const currentWeek = systemWeeks[activeWeek];
  const phaseColors = {
    "Foundations": "#2563EB",
    "Case Studies": "#7C3AED",
    "LLD Focus": "#059669",
    "Integration": "#F59E0B",
    "Interview Practice": "#DC2626"
  };

  const color = phaseColors[currentWeek.phase] || "#2563EB";

  return (
    <div style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif", background: "#0A0A0F", minHeight: "100vh", color: "#E8E8F0", padding: "18px 14px" }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, color: "#6B7280", marginBottom: 6 }}>SYNAPSE · SYSTEM DESIGN ROADMAP</div>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>LLD + HLD Parallel Learning<br/><span style={{ color: "#6B7280", fontSize: 13, fontWeight: 400 }}>16 weeks · 1-1.5 hrs/week per topic · Interview-ready system design</span></div>
          <div style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.7 }}>
            Learn system design in parallel with your projects. Weeks 1-3 are HLD (high-level architecture). Weeks 4-7 are case studies covering both HLD and LLD. Weeks 8-10 deep-dive into LLD specifics. Weeks 11-12 integrate HLD+LLD. Weeks 13-16 are pure interview practice on 60-min cases.
          </div>
          <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 12 }}>
            Checklist saved in this browser for <strong style={{ color: "#fff" }}>{user}</strong>. {completedCount}/{totalCount} total topics completed.
          </div>
        </div>

        {/* Week selector */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#6B7280", fontWeight: 700, marginBottom: 8 }}>SELECT WEEK</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 3 }}>
            {systemWeeks.map((w, i) => (
              <button key={i} onClick={() => setActiveWeek(i)}
                style={{
                  background: activeWeek === i ? phaseColors[w.phase] : "#1A1A2E",
                  border: activeWeek === i ? `2px solid ${phaseColors[w.phase]}` : "1px solid #2A2A3E",
                  borderRadius: 6,
                  padding: "8px 4px",
                  cursor: "pointer",
                  color: activeWeek === i ? "#fff" : "#6B7280",
                  fontSize: 9,
                  fontWeight: 700,
                  textAlign: "center",
                  lineHeight: 1.3
                }}>
                W{w.week}
              </button>
            ))}
          </div>
        </div>

        {/* View toggle */}
        <div style={{ display: "flex", gap: 3, marginBottom: 16, background: "#1A1A2E", borderRadius: 8, padding: 3 }}>
          {[["list", "📋 Week View"], ["topics", "🎯 Topics List"]].map(([v, label]) => (
            <button key={v} onClick={() => setView(v)}
              style={{ flex: 1, background: view === v ? color : "transparent", border: "none", borderRadius: 6, padding: "8px", color: view === v ? "#fff" : "#6B7280", fontWeight: 600, fontSize: 11, cursor: "pointer" }}>
              {label}
            </button>
          ))}
        </div>

        {/* Week header */}
        <div style={{ background: "#1A1A2E", border: `1px solid ${color}44`, borderLeft: `4px solid ${color}`, borderRadius: 10, padding: 16, marginBottom: 14 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: color, fontWeight: 700, marginBottom: 4 }}>{currentWeek.phase}</div>
          <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 2 }}>Week {currentWeek.week}: {currentWeek.title}</div>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>~{currentWeek.topics.reduce((a, t) => a + (t.hrs || 1), 0).toFixed(1)} hrs total · Mix of HLD {currentWeek.topics.some(t => t.hld) ? "✓" : ""} & LLD {currentWeek.topics.some(t => t.lld) ? "✓" : ""}</div>
        </div>

        {/* Week view */}
        {view === "list" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginBottom: 14 }}>
            {currentWeek.topics.map((t, i) => (
              <div key={i} style={{ background: "#1A1A2E", border: "1px solid #2A2A3E", borderRadius: 9, padding: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "start" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: color, fontSize: 12 }}>{t.day}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{t.hrs}h</div>
                  </div>
                  <div style={{ display: "flex", gap: 4, alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#9CA3AF' }}>
                      <input type="checkbox" checked={checked[`system-${currentWeek.week}-${i}`] || false} onChange={() => toggleChecked(`system-${currentWeek.week}-${i}`)} style={{ width: 14, height: 14 }} />
                      Done
                    </label>
                    <div style={{ display: "flex", gap: 4 }}>
                      {t.hld && <span style={{ fontSize: 9, background: "#2563EB33", color: "#60A5FA", padding: "3px 6px", borderRadius: 4, fontWeight: 700 }}>HLD</span>}
                      {t.lld && <span style={{ fontSize: 9, background: "#16A34A33", color: "#86EFAC", padding: "3px 6px", borderRadius: 4, fontWeight: 700 }}>LLD</span>}
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 12.5, color: "#D1D5DB", lineHeight: 1.5, marginBottom: 8 }}>{t.topic}</div>
                <div style={{ fontSize: 11, color: "#6B7280" }}>
                  {t.resources.map((r, j) => (
                    <div key={j} style={{ marginBottom: 3 }}>• {r}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Topics view */}
        {view === "topics" && (
          <div style={{ background: "#1A1A2E", border: "1px solid #2A2A3E", borderRadius: 10, padding: 16, marginBottom: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 12 }}>Week {currentWeek.week} Topics</div>
            {currentWeek.topics.map((t, i) => (
              <div key={i} style={{ marginBottom: 14, paddingBottom: 12, borderBottom: i < currentWeek.topics.length - 1 ? "1px solid #2A2A3E" : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: 'center' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: '#D1D5DB' }}>
                    <input type="checkbox" checked={checked[`system-${currentWeek.week}-${i}`] || false} onChange={() => toggleChecked(`system-${currentWeek.week}-${i}`)} style={{ width: 14, height: 14 }} />
                    {i + 1}. {t.topic}
                  </label>
                  <div style={{ display: "flex", gap: 4 }}>
                    {t.hld && <span style={{ fontSize: 9, background: "#2563EB44", color: "#93C5FD", padding: "2px 5px", borderRadius: 3, fontWeight: 700 }}>HLD</span>}
                    {t.lld && <span style={{ fontSize: 9, background: "#16A34A44", color: "#BBF7D0", padding: "2px 5px", borderRadius: 3, fontWeight: 700 }}>LLD</span>}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.6 }}>
                  {t.resources.map((r, j) => (
                    <div key={j}>• {r}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Phase timeline */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#6B7280", fontWeight: 700, marginBottom: 10 }}>ROADMAP STRUCTURE</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 8 }}>
            {[
              { phase: "Foundations", weeks: "1-3", color: "#2563EB", desc: "HLD basics: scalability, databases, caching, APIs, monitoring" },
              { phase: "Case Studies", weeks: "4-7", color: "#7C3AED", desc: "4 full cases: fraud, recommendations, payments, search (HLD + LLD)" },
              { phase: "LLD Focus", weeks: "8-10", color: "#059669", desc: "Deep dives: database design, API layer, ML serving (LLD only)" },
              { phase: "Integration", weeks: "11-12", color: "#F59E0B", desc: "Full integration: fraud & Kafka pipelines (HLD + LLD combined)" },
              { phase: "Interview Practice", weeks: "13-16", color: "#DC2626", desc: "Mock interviews: 60-min design sessions, interview-ready" },
            ].map((p, i) => (
              <div key={i} style={{ background: "#1A1A2E", border: `1px solid ${p.color}33`, borderLeft: `4px solid ${p.color}`, borderRadius: 8, padding: 10 }}>
                <div style={{ fontWeight: 700, color: p.color, fontSize: 11, marginBottom: 3 }}>{p.phase} · W{p.weeks}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key insights */}
        <div style={{ background: "#1A1A2E", border: "1px solid #2A2A3E", borderLeft: "4px solid #F59E0B", borderRadius: 10, padding: 14, marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", marginBottom: 6 }}>💡 HLD vs LLD Breakdown</div>
          <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.7 }}>
            <div><strong>HLD (High-Level Design):</strong> Big picture architecture — data flow, services, databases, external systems. Weeks 1-3 focus on HLD fundamentals.</div>
            <div style={{ marginTop: 6 }}><strong>LLD (Low-Level Design):</strong> Implementation details — schema design, API endpoints, caching strategies, failure handling. Weeks 8-10 deep-dive into LLD.</div>
            <div style={{ marginTop: 6 }}><strong>Case Studies:</strong> Weeks 4-7 cover full cases that require BOTH HLD (explaining the system) and LLD (implementing the details).</div>
          </div>
        </div>

        {/* Integration with main roadmap */}
        <div style={{ background: "#1A1A2E", border: "1px solid #2A2A3E", borderLeft: "4px solid #10B981", borderRadius: 10, padding: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#10B981", marginBottom: 6 }}>🔗 Integration with 6-Month Plan</div>
          <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.7 }}>
            <div><strong>Weeks 1-3 (main plan):</strong> While building Project 1, learn HLD fundamentals (Weeks 1-3 system design).</div>
            <div style={{ marginTop: 6 }}><strong>Weeks 4-9 (main plan):</strong> While building Projects 1-2, study case studies and early LLD (Weeks 4-10 system design).</div>
            <div style={{ marginTop: 6 }}><strong>Weeks 10-13 (main plan):</strong> While in interview prep, do integration & early practice cases (Weeks 11-13 system design).</div>
            <div style={{ marginTop: 6 }}><strong>Weeks 14-16 (main plan):</strong> While job hunting & interviewing, use Weeks 13-16 system design mocks as final prep.</div>
          </div>
        </div>

        {/* SYNAPSE note */}
        <div style={{ marginTop: 14, background: "#1A1A2E", border: "1px solid #DC262633", borderLeft: "4px solid #DC2626", borderRadius: 10, padding: 12 }}>
          <div style={{ fontSize: 11, color: "#FCA5A5", lineHeight: 1.7 }}>
            <strong style={{ color: "#DC2626" }}>SYNAPSE:</strong> System design is 40% of ML engineer interviews (other 40% is LeetCode, 20% is behavioral). This roadmap gives you a structured path from basics to interview-ready. By Week 12, you can design fraud detection and Kafka pipelines from scratch. By Week 16, you're ready for any system design question.
          </div>
        </div>
      </div>
    </div>
  );
}
