const sqlWeeks = [
  {
    week: 1,
    phase: "Foundations",
    title: "Relational Databases & SQL Basics",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn the basics of relational database models and schema: [Khan Academy Relational Database Intro](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)",
        "Master the SELECT statement, column aliasing, and LIMIT / FETCH: [SQLBolt Lesson 1: SELECT](https://sqlbolt.com/lesson/select_queries_introduction)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study conditional filtering with WHERE, AND/OR/NOT, and comparison operators: [SQLBolt Lesson 2: Queries with constraints](https://sqlbolt.com/lesson/select_queries_with_constraints)",
        "Use LIKE, IN, BETWEEN, and IS NULL for pattern and range filtering"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn to sort query output using ORDER BY (ASC / DESC) and avoid null sorting bugs: [SQLBolt Lesson 3: Queries with constraints pt. 2](https://sqlbolt.com/lesson/select_queries_with_constraints_pt_2)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve 5 basic filtering and sorting exercises: [SQLBolt Lessons 1-3 Interactive Exercises](https://sqlbolt.com/)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "Foundations",
    title: "Aggregations & Joins",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Master aggregate functions (SUM, AVG, COUNT, MIN, MAX) and GROUP BY: [SQLBolt Lesson 10: Queries with aggregates](https://sqlbolt.com/lesson/select_queries_with_aggregates)",
        "Understand filter conditions on aggregate results using HAVING vs WHERE: [Mode Analytics GROUP BY Guide](https://mode.com/sql-tutorial/sql-group-by/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study relational joins (INNER, LEFT, RIGHT, FULL OUTER): [SQLBolt Lesson 6: Multi-table queries with JOINs](https://sqlbolt.com/lesson/select_queries_with_joins)",
        "Understand Cartesian products (CROSS JOIN) and self-joins: [W3Schools SQL Self Join](https://www.w3schools.com/sql/sql_join_self.asp)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Read about multi-table join conditions and handling NULL values in OUTER JOINs: [SQLBolt Lessons 7-8: JOINs with NULLs](https://sqlbolt.com/lesson/select_queries_with_outer_joins)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Practice 4 multi-table join queries on [SQLBolt Interactive Exercises](https://sqlbolt.com/)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Foundations",
    title: "Subqueries & Common Table Expressions (CTEs)",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand subqueries inside SELECT, FROM, and WHERE clauses: [SQLBolt Lesson 15: Subqueries](https://sqlbolt.com/lesson/subqueries)",
        "Study correlated subqueries vs non-correlated subqueries and their performance impact"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Common Table Expressions (CTEs) using the WITH clause for readable queries: [Mode Analytics CTEs](https://mode.com/sql-tutorial/sql-common-table-expressions/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn Set operations: UNION, UNION ALL, INTERSECT, and EXCEPT: [W3Schools SQL Union](https://www.w3schools.com/sql/sql_ref_union.asp)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve 4 intermediate SQL queries using subqueries and CTEs: [Mode Analytics Subqueries](https://mode.com/sql-tutorial/sql-subqueries/)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "Foundations",
    title: "Window Functions",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand the windowing concept, OVER clause, and PARTITION BY vs GROUP BY: [Mode Analytics SQL Window Functions](https://mode.com/sql-tutorial/sql-window-functions/)",
        "Master ranking functions: ROW_NUMBER, RANK, and DENSE_RANK: [DataLemur Window Functions Guide](https://datalemur.com/blog/sql-window-functions-tutorial)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Learn value window functions: LEAD, LAG, FIRST_VALUE, and LAST_VALUE: [GeeksforGeeks LEAD and LAG](https://www.geeksforgeeks.org/lead-and-lag-analytial-functions-in-sql/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study running totals, moving averages, and window frame specifications (ROWS/RANGE BETWEEN)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve 5 window function problems on [DataLemur (Free SQL questions)](https://datalemur.com/questions)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "LLD Focus",
    title: "Schema Design & Normalization",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Study database normalization rules (1NF, 2NF, 3NF, BCNF): [GeeksforGeeks Normalization in Databases](https://www.geeksforgeeks.org/dbms-normalization-1nf-2nf-3nf-bcnf/)",
        "Understand anomalies (insert, update, delete) and why we normalize schemas"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Learn database constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL): [W3Schools SQL Constraints](https://www.w3schools.com/sql/sql_constraints.asp)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Entity-Relationship (ER) modeling and table relationships (1-to-1, 1-to-many, many-to-many): [Lucidchart ER Diagram Tutorial](https://www.lucidchart.com/pages/ER-diagram-tutorial)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Design a relational schema (ER diagram) for an E-commerce system with users, orders, and products: [freeCodeCamp Data Modeling](https://www.freecodecamp.org/news/what-is-data-modeling/)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "LLD Focus",
    title: "Indexing & Performance Tuning",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand database indexes under the hood (B-Trees, Hash, GiST): [GeeksforGeeks Database Indexing](https://www.geeksforgeeks.org/indexing-in-databases-sql/)",
        "Read about clustered vs non-clustered indexes and when to create composite indexes: [Use The Index, Luke!](https://use-the-index-luke.com/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Learn to read query execution plans using EXPLAIN and EXPLAIN ANALYZE: [PostgreSQL EXPLAIN docs](https://www.postgresql.org/docs/current/using-explain.html)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study query optimization: avoiding SELECT *, indexing joins, subquery vs join speed, partition pruning: [SQLShack Query Optimization Tips](https://www.sqlshack.com/sql-query-optimization-techniques-and-tips/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Analyze a slow query execution plan, create an index, and verify the performance improvement"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Integration",
    title: "Concurrency, Transactions & Locks",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand database Transactions and ACID properties: [GeeksforGeeks ACID Properties in DBMS](https://www.geeksforgeeks.org/acid-properties-in-dbms/)",
        "Learn write/commit/rollback operations in transactions: [W3Schools SQL Transactions](https://www.w3schools.com/sql/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study Transaction Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable): [PostgreSQL Transaction Isolation](https://www.postgresql.org/docs/current/transaction-iso.html)",
        "Learn concurrency read anomalies: Dirty Reads, Non-Repeatable Reads, Phantom Reads"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand database locks (Shared vs Exclusive), row-level locks, and deadlocks: [GeeksforGeeks Concurrency Control](https://www.geeksforgeeks.org/concurrency-control-in-dbms/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Write a transaction script with error checking to simulate a secure bank transfer"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Interview Practice",
    title: "SQL vs NoSQL & Practice Drills",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Compare SQL vs NoSQL: Document, Key-Value, Columnar, and Graph Databases: [MongoDB SQL vs NoSQL Comparison](https://www.mongodb.com/nosql-explained/nosql-vs-sql)",
        "Understand scaling trade-offs (sharding, replication, eventual consistency)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Practice medium and hard SQL interview questions (retention rate, rolling averages, consecutive active days): [DataLemur SQL Interview Questions](https://datalemur.com/questions)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Solve 4 hard SQL queries under 20-minute time constraints"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Perform a full mock SQL interview covering window functions, CTEs, and query tuning"
      ]}
    ]
  }
];

window.sqlWeeks = sqlWeeks;

window.SQLRoadmap = function({ user }) {
  const config = {
    id: "sql",
    title: "SQL & Relational Database Roadmap",
    subtitle: "Query Mastery to Performance Tuning",
    tagline: "Synapse · Database Engineer Track",
    description: "Master relational algebra, complex SQL queries, analytics window functions, query execution plan analysis, B-Tree indexes, and transaction concurrency models.",
    accentColor: "#0284C7",
    weeks: sqlWeeks,
    phases: [
      { phase: "Foundations", weeks: "1-4", desc: "Select, filtering, aggregates, joins, subqueries, CTEs, window functions" },
      { phase: "LLD Focus", weeks: "5-6", desc: "Normalization, ER diagrams, schemas, B-tree indexes, execution plans, tuning" },
      { phase: "Integration", weeks: "7", desc: "ACID properties, isolation levels, database locks, deadlock prevention" },
      { phase: "Interview Practice", weeks: "8", desc: "SQL vs NoSQL scaling, DataLemur SQL drills, mock interviews" }
    ],
    insights: [
      {
        title: "💡 Why SQL is Crucial for System Design & ML",
        text: "Database bottlenecks are the #1 cause of low system performance. Understanding **B-Tree indexes** helps you design high-throughput APIs. Knowing **transaction isolation levels** prevents double-payment bugs. In Machine Learning, feature stores require complex SQL queries for historical features and point-in-time correctness.",
        color: "#F97316"
      }
    ],
    videos: [
      { title: "freeCodeCamp SQL & Databases Course", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { title: "Alex The Analyst SQL Bootcamp", url: "https://www.youtube.com/playlist?list=PLUaB-1hjhk8GZO-j11uqF5U2n5pPz9mte" },
      { title: "Luke Barousse SQL for Data Analysis", url: "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
      { title: "Kudvenkat SQL Server Transactions", url: "https://www.youtube.com/playlist?list=PL08903FB7ACA1C2FB" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
