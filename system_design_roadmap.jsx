const systemWeeks = [
  {
    week: 1, phase: "Foundations", title: "System Design Fundamentals",
    topics: [
      { day: "Mon", hrs: 1, topic: "Scalability basics: Vertical vs Horizontal scaling, load balancing", resources: ["[Designing Data-Intensive Apps Ch.1 Summary](https://github.com/keyvanakbary/learning-notes/blob/master/books/designing-data-intensive-applications.md)", "[System Design Scalability Video](https://www.youtube.com/watch?v=m8Isk_y7UdU)"], hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Database fundamentals: SQL vs NoSQL, ACID vs BASE, CAP theorem", resources: ["[System Design Primer (GitHub)](https://github.com/donnemartin/system-design-primer)", "[CAP Theorem Explained](https://www.ibm.com/topics/cap-theorem)"], hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "Caching: In-memory vs distributed, Cache invalidation, Redis basics", resources: ["[Designing Data-Intensive Apps Ch.3 Summary](https://github.com/keyvanakbary/learning-notes/blob/master/books/designing-data-intensive-applications.md)", "[Redis Docs Overview](https://redis.io/docs/)"], hld: "HLD" },
      { day: "Sun", hrs: 1, topic: "API Design: REST principles, rate limiting, versioning", resources: ["[REST API Best Practices Blog](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)", "[API Design Patterns Guide](https://cloud.google.com/apis/design)"], hld: "HLD" },
    ]
  },
  {
    week: 2, phase: "Foundations", title: "Distributed Systems Basics",
    topics: [
      { day: "Mon", hrs: 1, topic: "Networking: DNS, TCP/IP, HTTP/HTTPS, WebSockets", resources: ["[Computer Networking Crash Course Video](https://www.youtube.com/watch?v=IPvYjX917K4)", "[MDN WebSockets Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)"], hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Message Queues: Kafka, RabbitMQ, async processing", resources: ["[Apache Kafka Intro](https://kafka.apache.org/documentation/#intro)", "[RabbitMQ Getting Started](https://www.rabbitmq.com/getstarted.html)"], hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "Data serialization: JSON, Protobuf, Avro, when to use which", resources: ["[Protobuf vs JSON Performance](https://auth0.com/blog/beating-json-performance-with-protobuf/)", "[Apache Avro Overview](https://avro.apache.org/docs/current/)"], hld: "HLD" },
      { day: "Sun", hrs: 1, topic: "Consistency models: Strong vs eventual consistency, 2-phase commit", resources: ["[Designing Data-Intensive Apps Ch.9 Summary](https://github.com/keyvanakbary/learning-notes/blob/master/books/designing-data-intensive-applications.md)", "[Two-Phase Commit Protocol](https://www.geeksforgeeks.org/two-phase-commit-2pc-protocol-in-distributed-database/)"], hld: "HLD" },
    ]
  },
  {
    week: 3, phase: "Foundations", title: "Monitoring & Reliability",
    topics: [
      { day: "Mon", hrs: 1, topic: "Monitoring: Metrics (latency, QPS, error rate), logging, tracing", resources: ["[Observability Engineering Blog](https://www.honeycomb.io/blog/observability-vs-monitoring)", "[Prometheus Overview](https://prometheus.io/docs/introduction/overview/)"], hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Reliability: SLO/SLA, circuit breakers, graceful degradation", resources: ["[Google SRE Book Ch.4](https://sre.google/sre-book/service-level-objectives/)", "[Circuit Breaker Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)"], hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "Data pipeline design: batch vs stream, idempotency, deduplication", resources: ["[Stream Processing Patterns](https://hazelcast.com/glossary/stream-processing/)", "[Idempotency in Data Pipelines](https://segment.com/blog/idempotent-api-design/)"], hld: "HLD" },
      { day: "Sun", hrs: 1, topic: "Security fundamentals: Authentication vs authorization, encryption, OAuth", resources: ["[Auth0 Authentication vs Authorization](https://auth0.com/docs/get-started/identity-labs/authentication-vs-authorization)", "[OWASP Top 10 Security Summary](https://owasp.org/www-project-top-ten/)"], hld: "HLD" },
    ]
  },
  {
    week: 4, phase: "Case Studies", title: "Case Study: Real-Time Fraud Detection (Your Domain)",
    topics: [
      { day: "Mon", hrs: 1, topic: "Problem scoping: fraud signals, false positive cost, real-time requirement (< 100ms)", resources: ["[Stripe ML Blog: Fraud](https://stripe.com/blog/radar-machine-learning-infrastructure)", "[Designing Fraud Systems](https://www.youtube.com/watch?v=1dY1o2v9vhs)"], lld: "LLD", hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Architecture: event source (Kafka) → feature service → model service → decision engine", resources: ["[Excalidraw Diagram Tool](https://excalidraw.com/)", "[ByteByteGo Event-Driven Design](https://bytebytego.com/)"], lld: "LLD", hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "Feature store design: offline vs online store, point-in-time correctness", resources: ["[Feast Feature Store Docs](https://docs.feast.dev/)", "[Feature Store Architecture](https://www.tecton.ai/blog/what-is-a-feature-store/)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Model serving: batching vs real-time, inference latency budget, versioning strategy", resources: ["[KServe Serving Docs](https://kserve.github.io/website/)", "[Model Serving Patterns](https://www.youtube.com/watch?v=S0T09J5k0F0)"], lld: "LLD" },
    ]
  },
  {
    week: 5, phase: "Case Studies", title: "Case Study: Recommendation System (E-commerce)",
    topics: [
      { day: "Mon", hrs: 1, topic: "Problem scoping: ranking relevance + diversity, cold start problem, exploration-exploitation", resources: ["[DoorDash Rec System Blog](https://doordash.engineering/2020/02/25/building-doordashs-recommendation-service/)", "[Google Rec Systems Course](https://developers.google.com/machine-learning/recommendation)"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Data flow: user-item interactions → offline training → online serving → A/B testing", resources: ["[Netflix Recommendation Research](https://research.netflix.com/research-area/recommendation-systems)", "[A/B Testing Guide](https://vwo.com/ab-testing/)"], hld: "HLD", lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Candidate generation: collaborative filtering, content-based, two-tower models", resources: ["[Two-Tower Architecture Blog](https://medium.com/mlearning-ai/understanding-the-two-tower-neural-network-recommendation-model-6110ee27878)", "[Matrix Factorization Basics](https://developers.google.com/machine-learning/recommendation/collaborative/matrix)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Re-ranking: personalization, diversity, business metrics (CTR, revenue), real-time freshness", resources: ["[Learning to Rank Tutorial](https://www.geeksforgeeks.org/learning-to-rank/)"], lld: "LLD" },
    ]
  },
  {
    week: 6, phase: "Case Studies", title: "Case Study: Payment System (Fintech)",
    topics: [
      { day: "Mon", hrs: 1, topic: "Problem scoping: ACID transactions, reconciliation, dispute handling, compliance (PCI-DSS)", resources: ["[Stripe Payments Architecture Blog](https://stripe.com/blog/reconciliation-system)", "[PCI-DSS Compliance Quick Guide](https://www.pcisecuritystandards.org/merchants/)"], hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Architecture: API → payment processor → settlement → reconciliation", resources: ["[How Payment Gateways Work](https://www.youtube.com/watch?v=olPq1aH-w30)", "[System Design Payment Processing](https://bytebytego.com/)"], hld: "HLD", lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Idempotency & reconciliation: handling duplicate requests, eventual consistency", resources: ["[Stripe Idempotent API Keys Guide](https://stripe.com/blog/idempotency)", "[Database Reconciliation Methods](https://reconcile.io/)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Failure handling: timeouts, retries, circuit breakers, rollbacks", resources: ["[Circuit Breaker Patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)", "[Database Transaction Rollbacks](https://www.geeksforgeeks.org/sql-rollback-statement/)"], lld: "LLD" },
    ]
  },
  {
    week: 7, phase: "Case Studies", title: "Case Study: Search System (Real-time Index)",
    topics: [
      { day: "Mon", hrs: 1, topic: "Problem scoping: latency < 200ms, relevance, indexing strategy, query understanding", resources: ["[Google Search Ranking Systems](https://www.google.com/search/howsearchworks/ranking-results/)", "[Elasticsearch Overview](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html)"], hld: "HLD" },
      { day: "Wed", hrs: 1, topic: "Indexing: inverted index, sharding strategy, replication", resources: ["[Inverted Index Explained](https://www.geeksforgeeks.org/inverted-index/)", "[Database Sharding Patterns](https://hazelcast.com/glossary/sharding/)"], hld: "HLD", lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Query processing: tokenization, ranking, personalization, autocomplete", resources: ["[Elasticsearch Query Processing](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html)", "[Okapi BM25 Ranking Algorithm](https://www.elastic.co/blog/practical-bm25-part-1-how-match-score-is-calculated-in-elasticsearch)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Consistency & freshness: near-real-time indexing, eventual consistency", resources: ["[Near Real-Time Indexing Tradeoffs](https://semi-technology.medium.com/near-real-time-search-architecture-a5cf4be2880)"], lld: "LLD" },
    ]
  },
  {
    week: 8, phase: "LLD Focus", title: "Low-Level Design: Database Design",
    topics: [
      { day: "Mon", hrs: 1, topic: "Schema design: normalization vs denormalization, choosing primary/foreign keys, indexing strategy", resources: ["[Database Schema Normalization Tutorial](https://www.geeksforgeeks.org/dbms-normalization-1nf-2nf-3nf-bcnf/)"], lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Query optimization: execution plans, index design, query patterns, partitioning", resources: ["[SQL Query Optimization Guide](https://www.sqlshack.com/sql-query-optimization-techniques-and-tips/)"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Transactions: ACID properties, isolation levels, locking, deadlock prevention", resources: ["[PostgreSQL Transaction Isolation](https://www.postgresql.org/docs/current/transaction-iso.html)", "[Database Locks and Deadlocks](https://www.geeksforgeeks.org/concurrency-control-in-dbms/)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Replication & sharding: consistency, failover, resharding strategy, geo-distribution", resources: ["[Designing Data-Intensive Apps Ch.5 Summary](https://github.com/keyvanakbary/learning-notes/blob/master/books/designing-data-intensive-applications.md)"], lld: "LLD" },
    ]
  },
  {
    week: 9, phase: "LLD Focus", title: "Low-Level Design: API & Service Layer",
    topics: [
      { day: "Mon", hrs: 1, topic: "Service interface design: request/response models, status codes, error handling, versioning", resources: ["[API Design Best Practices Blog](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)"], lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Rate limiting: token bucket, leaky bucket, fixed window, sliding window algorithms", resources: ["[Rate Limiting Algorithms Guide](https://konghq.com/blog/engineering/system-design-rate-limiting-algorithms)"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Caching strategy: cache invalidation (TTL, LRU, write-through, write-back), distributed caching", resources: ["[Cache Invalidation Strategies](https://www.f5.com/glossary/cache-invalidation)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Async processing: queues, workers, retry logic, dead letter queues, timeout handling", resources: ["[Kafka Dead Letter Queues](https://www.confluent.io/blog/dead-letter-queues-in-kafka/)"], lld: "LLD" },
    ]
  },
  {
    week: 10, phase: "LLD Focus", title: "Low-Level Design: ML Serving Specifics",
    topics: [
      { day: "Mon", hrs: 1, topic: "Feature store LLD: schema (feature tables, versions), metadata store, retrieval API", resources: ["[Feast Feature Store Architecture](https://docs.feast.dev/concepts/architecture)"], lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Model service LLD: model loading/caching, inference API, batch vs real-time, versioning", resources: ["[KServe Inference Architecture](https://kserve.github.io/website/concepts/architecture/)"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Online feature computation: stateful aggregations, windowed operations, freshness guarantees", resources: ["[Kafka Streams Stateful Operations](https://kafka.apache.org/documentation/streams/developer-guide/dsl-api.html#stateful-transformations)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "ML-specific concerns: training-serving skew, feature leakage prevention, data versioning", resources: ["[Hidden Technical Debt in ML (Paper Summary)](https://research.google/pubs/pub43146/)"], lld: "LLD" },
    ]
  },
  {
    week: 11, phase: "Integration", title: "Putting It Together: Fraud Detection Deep Dive",
    topics: [
      { day: "Mon", hrs: 1, topic: "Full system design (HLD): event ingestion → feature computation → model inference → decision engine → logging", resources: ["[Stripe Fraud Model serving](https://stripe.com/blog/radar-machine-learning-infrastructure)"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Database schema (LLD): transactions table, features table, predictions table, labels table (for retraining)", resources: ["[DB Schema Design Patterns](https://www.geeksforgeeks.org/sql-schema-design-best-practices/)"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "API design (LLD): /predict endpoint, /batch_predict, /model_info, /metrics endpoints", resources: ["[FastAPI Project Layout Guide](https://fastapi.tiangolo.com/tutorial/bigger-applications/)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Monitoring & debugging (LLD): latency tracking, model performance metrics, data quality checks, alerting", resources: ["[Evidently AI Model Monitoring](https://www.evidentlyai.com/)"], lld: "LLD" },
    ]
  },
  {
    week: 12, phase: "Integration", title: "Putting It Together: Kafka Real-Time Pipeline Deep Dive",
    topics: [
      { day: "Mon", hrs: 1, topic: "Full pipeline (HLD): data source → feature enrichment → ML scoring → decision → action", resources: ["[Real-time ML scoring architecture](https://kafka.apache.org/documentation/#intro)"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "State management (LLD): event deduplication, exactly-once semantics, windowed aggregations, state store", resources: ["[Kafka Exactly-Once Semantics](https://www.confluent.io/blog/transactions-in-apache-kafka/)"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Failure handling (LLD): retries, dead letter queues, circuit breakers, graceful degradation", resources: ["[Microservices Resilience Patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/resiliency)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Scaling (HLD + LLD): consumer groups, partitioning strategy, backpressure handling, throughput optimization", resources: ["[Scaling Kafka Consumer Groups](https://docs.confluent.io/platform/current/clients/consumer.html)"], hld: "HLD", lld: "LLD" },
    ]
  },
  {
    week: 13, phase: "Interview Practice", title: "System Design Practice: Fraud Detection (60 min)",
    topics: [
      { day: "Mon", hrs: 1.5, topic: "Full 60-min mock: Design real-time fraud detection end-to-end", resources: ["[Excalidraw Whiteboard](https://excalidraw.com/)", "[Pramp Peer Mocks](https://www.pramp.com/)"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Deep dive: Your architecture — be ready to defend every choice", resources: ["[Architecture Trade-off Analysis](https://en.wikipedia.org/wiki/Architecture_trade-off_analysis_method)"], lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "LLD follow-up questions: how do you version models, handle feature drift, scale to 10k TPS?", resources: ["[Model Drift & Versioning Guide](https://www.evidentlyai.com/blog/machine-learning-model-drift)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Reflect: what questions tripped you up? Double down on those areas", resources: [], hld: "HLD", lld: "LLD" },
    ]
  },
  {
    week: 14, phase: "Interview Practice", title: "System Design Practice: Recommendation System (60 min)",
    topics: [
      { day: "Mon", hrs: 1.5, topic: "Full 60-min mock: Design recommendation system for e-commerce", resources: ["[Excalidraw Whiteboard](https://excalidraw.com/)", "[Pramp Mocks](https://www.pramp.com/)"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "HLD focus: Can you explain candidate generation, ranking, re-ranking in your architecture?", resources: ["[Google Recommender Candidate Generation](https://developers.google.com/machine-learning/recommendation/collaborative/candidate-generation)"], hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "LLD focus: How do you handle real-time personalization at scale? Feature freshness?", resources: ["[Tecton Real-time Recommendation features](https://www.tecton.ai/blog/feature-freshness/)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Practice: explain A/B testing strategy for ranking changes", resources: ["[Netflix A/B Testing Infrastructure](https://netflixtechblog.com/building-netflixs-post-launch-experience-testing-platform-155e8c691316)"], hld: "HLD", lld: "LLD" },
    ]
  },
  {
    week: 15, phase: "Interview Practice", title: "System Design Practice: Payment System (60 min)",
    topics: [
      { day: "Mon", hrs: 1.5, topic: "Full 60-min mock: Design payment system (ACID + eventual consistency)", resources: ["[Excalidraw](https://excalidraw.com/)", "[Pramp](https://www.pramp.com/)"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "HLD: architecture layers (API, processor, settlement, reconciliation)", resources: ["[Stripe Reconciliation system design](https://stripe.com/blog/reconciliation-system)"], hld: "HLD" },
      { day: "Fri", hrs: 1, topic: "LLD: transaction storage, idempotency, retry logic, timeout handling", resources: ["[Idempotency Patterns](https://stripe.com/blog/idempotency)"], lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Compliance deep dive: PCI-DSS, reconciliation requirements, audit trails", resources: ["[PCI-DSS Standards guide](https://www.pcisecuritystandards.org/merchants/)"], lld: "LLD" },
    ]
  },
  {
    week: 16, phase: "Interview Practice", title: "System Design Practice: Custom Cases (Your Choice)",
    topics: [
      { day: "Mon", hrs: 1.5, topic: "Mock: Design a system relevant to your target company (Razorpay: payments, CRED: credit scoring, Zepto: inventory)", resources: ["[Excalidraw Whiteboard](https://excalidraw.com/)"], hld: "HLD", lld: "LLD" },
      { day: "Wed", hrs: 1, topic: "Mock: Design a machine learning system (training pipeline + serving)", resources: ["[Designing Machine Learning Systems Book](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/)"], hld: "HLD", lld: "LLD" },
      { day: "Fri", hrs: 1, topic: "Practice: follow-up questions deep dive (why this database, how do you scale, what if X fails)", resources: ["[ByteByteGo System Design followups](https://bytebytego.com/)"], hld: "HLD", lld: "LLD" },
      { day: "Sun", hrs: 1, topic: "Reflection: which system design cases are you most confident in? Which need work?", resources: [], hld: "HLD", lld: "LLD" },
    ]
  },
];

window.systemWeeks = systemWeeks;

window.SystemDesignRoadmap = function({ user }) {
  const config = {
    id: "system",
    title: "System Design Roadmap",
    subtitle: "HLD & LLD Parallel Learning Track",
    tagline: "Synapse · System Architect Track",
    description: "Learn high-level distributed systems design (HLD) in parallel with low-level details (LLD), database schemas, event queues, and interview-ready case studies.",
    accentColor: "#7C3AED",
    weeks: systemWeeks,
    phases: [
      { phase: "Foundations", weeks: "1-3", desc: "HLD basics: scalability, databases, caching, APIs, monitoring" },
      { phase: "Case Studies", weeks: "4-7", desc: "4 full cases: fraud, recommendations, payments, search (HLD + LLD)" },
      { phase: "LLD Focus", weeks: "8-10", desc: "Deep dives: database design, API layer, ML serving (LLD only)" },
      { phase: "Integration", weeks: "11-12", desc: "Full integration: fraud & Kafka pipelines (HLD + LLD combined)" },
      { phase: "Interview Practice", weeks: "13-16", desc: "Mock interviews: 60-min design sessions, interview-ready" }
    ],
    insights: [
      {
        title: "💡 HLD vs LLD Breakdown",
        text: "**HLD (High-Level Design):** Big picture architecture — data flow, services, databases, external systems.\n\n**LLD (Low-Level Design):** Implementation details — schema design, API endpoints, caching strategies, failure handling.\n\n**Case Studies:** Weeks 4-7 cover full cases that require BOTH HLD (explaining the system) and LLD (implementing the details).",
        color: "#F59E0B"
      },
      {
        title: "🔗 Integration with 6-Month Plan",
        text: "**Weeks 1-3:** While building Project 1, learn HLD fundamentals.\n\n**Weeks 4-9:** While building Projects 1-2, study case studies and early LLD.\n\n**Weeks 10-13:** While in interview prep, do integration & early practice cases.\n\n**Weeks 14-16:** While job hunting & interviewing, use Weeks 13-16 system design mocks as final prep.",
        color: "#10B981"
      }
    ],
    videos: [
      { title: "freeCodeCamp System Design Course", url: "https://www.youtube.com/watch?v=m8Isk_y7UdU" },
      { title: "Gaurav Sen's System Design Playlist", url: "https://www.youtube.com/playlist?list=PLMCXHnjXnJeMhs6tEyiKfFbnpY45t7zUM" },
      { title: "Suren's Low-Level Design Patterns", url: "https://www.youtube.com/playlist?list=PL6W8aSzy-D37GvL4t2A9r79H54J40pU01" },
      { title: "Alex Xu (ByteByteGo) Channel", url: "https://www.youtube.com/@ByteByteGo" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
