const oracleDBAWeeks = [
  {
    week: 1,
    phase: "Architecture & Networking",
    title: "Oracle Architecture & API Network Configs",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Oracle instance memory components (SGA: Shared Pool, Buffer Cache, Redo Log; and PGA) and database processes: [RebellionRider Oracle Memory Architecture](https://www.youtube.com/playlist?list=PL739D163D56346294)",
        "Understand tablespaces, segments, extents, and database blocks storage architecture: [Database Star Tablespace Management Guide](https://www.databasestar.com/oracle-tablespace/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Configure Oracle networking listeners and local names parameters (`listener.ora`, `tnsnames.ora`, `sqlnet.ora`): [Oracle Help Center Network Configuration](https://docs.oracle.com/en/database/oracle/oracle-database/19/netag/configuring-and-administering-oracle-net-listener.html)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Set up connection pooling using Database Resident Connection Pool (DRCP) and client configurations to support scaling APIs: [Oracle Universal Connection Pool Guide](https://docs.oracle.com/en/database/oracle/oracle-database/19/jjucp/ucp-overview.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Practice installing Oracle Database XE (Express Edition) and configuring custom service listeners using NetCA/DBCA: [RebellionRider Oracle Installation](https://www.youtube.com/watch?v=kYJjZfW4WfA)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "PL/SQL & JSON Integration",
    title: "Advanced PL/SQL & Native JSON Processing",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Write advanced PL/SQL Blocks: procedures, packages, database triggers, and transactional savepoints: [RebellionRider PL/SQL Tutorial](https://www.youtube.com/playlist?list=PL5F806BD2662909C2)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Store JSON documents in Oracle: Configure standard JSON constraints and execute semantic checks on document columns: [Oracle Base JSON Support in Oracle Database](https://oracle-base.com/articles/12c/json-support-in-oracle-database-12cr1)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Extract specific JSON fields from documents using `JSON_VALUE`, `JSON_QUERY`, and native dot-notation query syntax: [Oracle Base JSON Queries Guide](https://oracle-base.com/articles/12c/json-support-in-oracle-database-12cr1#query-json)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Convert API JSON array payloads into standard relational rows using the `JSON_TABLE` function for SQL joins: [Oracle Help Center JSON_TABLE Functions](https://docs.oracle.com/en/database/oracle/oracle-database/19/adjsn/json-table-general-info.html)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Architecture & Networking",
    title: "Storage, Security & API Credentials",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Manage tablespaces: Create, resize, rename, drop permanent, temporary, and undo tablespaces: [Database Star Tablespace Management Guide](https://www.databasestar.com/oracle-tablespace/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Secure database users: Manage profiles, passwords policies, system privileges, object grants, and custom roles: [Oracle Docs User Security](https://docs.oracle.com/en/database/oracle/oracle-database/19/dbseg/managing-security-for-users-roles-and-profiles.html)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Secure application connection files: Configure passwordless access using Oracle Wallet configurations (`cwallet.sso`): [Oracle Base Wallets and Transport Layer Security](https://oracle-base.com/articles/misc/configure-tcpip-with-ssl-and-tls-tsl-connections-using-orapki-and-wallets)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Configure Automatic Storage Management (ASM) disk groups and understand raw device allocations for databases: [Oracle Docs ASM Introduction](https://docs.oracle.com/en/database/oracle/oracle-database/19/ostmg/introducing-automatic-storage-management.html)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "Backup & Recovery (RMAN)",
    title: "Backup & Recovery (RMAN)",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Configure ARCHIVELOG mode, select recovery areas (FRA), and manage online redo logs switches: [Database Star Archivelog Mode Guide](https://www.databasestar.com/oracle-archivelog-mode/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Recovery Manager (RMAN): Perform online hot backups, incremental backups, and validation checks: [Oracle RMAN Backup and Recovery Tutorial](https://www.youtube.com/playlist?list=PLB-c5cZaEwZ_H8W5L3TfN7VqE4y_QvK0u)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Configure catalog databases to store RMAN backup histories and write shell scripts to automate daily runs: [Oracle Base RMAN Catalog Setup](https://oracle-base.com/articles/8i/recovery-manager-rman#recovery_catalog)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Perform Point-in-Time Recovery (PITR) to restore production schemas to specific points in time before corruptions: [Oracle Base Point-in-Time Recovery Guide](https://oracle-base.com/articles/8i/recovery-manager-rman#tspitr)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "Tuning & Diagnostics",
    title: "Performance Tuning & Diagnostic Analysis",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Interpret Execution plans: Use `EXPLAIN PLAN` and SQL Developer AutoTrace to detect slow index operations: [Database Star SQL Performance Tuning](https://www.databasestar.com/oracle-sql-performance-tuning/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Implement diagnostic analysis: Tune SGA pool parameters, analyze wait events, and optimize library cache hits: [Oracle Help Center SGA Tuning](https://docs.oracle.com/en/database/oracle/oracle-database/19/tgdba/tuning-system-global-area.html)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Optimize complex queries: Execute SQL Tuning Advisor and implement SQL Profiles for database optimizer plans: [Oracle Base SQL Tuning Advisor Guide](https://oracle-base.com/articles/10g/sql-tuning-advisor-10g)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Generate and analyze Automatic Workload Repository (AWR) and ADDM reports to identify bottleneck API queries: [Oracle Help Center AWR Reports Guide](https://docs.oracle.com/en/database/oracle/oracle-database/19/tgdba/gathering-database-statistics.html)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "High Availability",
    title: "High Availability (Data Guard)",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Configure Active Data Guard standby instances, redo log transport services, and Data Guard Broker configurations: [Oracle Data Guard Setup Tutorial](https://www.youtube.com/watch?v=Tq_Yc0tV2dE)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Understand role transitions: Perform safe switchovers for maintenance windows and failovers for crash scenarios: [Oracle Base Data Guard Role Transitions Guide](https://oracle-base.com/articles/11g/data-guard-setup-11gr2#switchover_failover)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Offload API read traffic: Route read-only query workloads to active standby nodes while keeping primary for writes: [Oracle Active Data Guard Features](https://www.oracle.com/technetwork/database/availability/active-data-guard-wp-12c-1896131.pdf)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Configure Far Sync instances to allow zero data loss replication across long geographic distances: [Oracle Base Far Sync Setup](https://oracle-base.com/articles/12c/data-guard-far-sync-12cr1)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "High Availability",
    title: "Real Application Clusters (RAC) & API Failover",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand RAC Clusterware: CSS, CRS, EVM daemons, OLR registries, and interconnect networks: [Oracle RAC Architecture & Concepts (YouTube)](https://www.youtube.com/playlist?list=PLB-c5cZaEwZ8Y3qQ7T2Yh9HkLskVv09dE)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Configure cluster database resources and execute node control operations using `srvctl` and `crsctl` commands: [Oracle Base RAC Services Guide](https://oracle-base.com/articles/10g/rac-services-10g)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand Cache Fusion block transfers and configure RAC load balancing parameters: [Oracle Docs RAC Cache Fusion](https://docs.oracle.com/en/database/oracle/oracle-database/19/tdprc/managing-oracle-rac-environments.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Configure Fast Application Notification (FAN) and Transaction Guard to enable zero-downtime client failover: [Oracle Transaction Guard Application Guide](https://www.oracle.com/a/tech/docs/tg-application-guide.pdf)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Tuning & Diagnostics",
    title: "Database CI/CD & Production Deployments",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Automate schema migrations: Integrate database migration tools like Liquibase or Flyway inside CI/CD deployment pipelines: [Liquibase Oracle Database Guide](https://docs.liquibase.com/databases/oracle.html)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Implement Edition-Based Redefinition (EBR) to allow online, zero-downtime database upgrades of API structures: [Oracle Base Edition-Based Redefinition Guide](https://oracle-base.com/articles/11g/edition-based-redefinition-11gr2)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Oracle Data Pump Export and Import (`expdp`/`impdp`) utility configurations for schema migrations: [Oracle Data Pump expdp/impdp Guide](https://www.youtube.com/watch?v=GkXp3w6F5bQ)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Understand cloud services: Deploy and configure Autonomous Databases inside Oracle Cloud Infrastructure (OCI): [Oracle Docs OCI Autonomous Database](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html)"
      ]}
    ]
  }
];

window.oracleDBAWeeks = oracleDBAWeeks;

window.OracleDBARoadmap = function({ user }) {
  const config = {
    id: "oracle_dba",
    title: "Oracle DBA (Database Administrator)",
    subtitle: "Enterprise Database Tuning, Backup Orchestration & High Availability",
    tagline: "Synapse · Oracle Administration Track",
    description: "Learn to manage and optimize enterprise-grade Oracle Databases. Build secure listener networking profiles, query native JSON payloads, implement automated RMAN hot backup strategies, diagnose high-load SQL bottlenecks using ADDM/AWR, set up active physical standby failover servers using Data Guard Broker, orchestrate RAC shared storage clusters, and automate schema upgrades using Liquibase pipelines and Edition-Based Redefinition (EBR).",
    accentColor: "#0D9488",
    weeks: oracleDBAWeeks,
    phases: [
      { phase: "Architecture & Networking", weeks: "1-3", desc: "SGA/PGA memory, network listeners, DRCP connection pools, native JSON collections, Oracle Wallet secure credentials" },
      { phase: "Backup & Recovery (RMAN)", weeks: "4", desc: "ARCHIVELOG database configurations, RMAN online backups, Catalog configuration, point-in-time recovery (PITR)" },
      { phase: "Tuning & Diagnostics", weeks: "5, 8", desc: "AWR report diagnostics, SQL Tuning advisor execution plans, Liquibase pipelines, zero-downtime upgrades (EBR)" },
      { phase: "High Availability", weeks: "6-7", desc: "Data Guard broker, Active Standby offloading, RAC Grid infrastructure, Fast Application Notification (FAN) failover" }
    ],
    insights: [
      {
        title: "💡 The Production-First DBA Mindset",
        text: "Modern DBAs do not just maintain offline database instances; they work closely with developers to scale APIs. By managing connection pools (DRCP), encrypting server keys via wallets, offloading read requests using Active Standby, and integrating Flyway schema changes, a DBA guarantees application scalability.",
        color: "#0D9488"
      }
    ],
    videos: [
      { title: "RebellionRider Oracle Memory Architecture", url: "https://www.youtube.com/playlist?list=PL739D163D56346294" },
      { title: "Oracle RMAN Backup and Recovery Tutorials", url: "https://www.youtube.com/playlist?list=PLB-c5cZaEwZ_H8W5L3TfN7VqE4y_QvK0u" },
      { title: "Oracle Data Guard Administration Tutorials", url: "https://www.youtube.com/watch?v=Tq_Yc0tV2dE" },
      { title: "Oracle RAC Grid Architecture Tutorials", url: "https://www.youtube.com/playlist?list=PLB-c5cZaEwZ8Y3qQ7T2Yh9HkLskVv09dE" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
