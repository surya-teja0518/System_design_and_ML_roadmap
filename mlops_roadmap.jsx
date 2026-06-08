const mlopsWeeks = [
  {
    week: 1,
    phase: "Data Engineering",
    title: "Data Engineering Foundations & Storage",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn data ingestion, ETL vs ELT pipelines, and file formats (Parquet vs Avro vs CSV): [DataTalksClub Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)",
        "Understand differences between Data Lakes (S3, GCS) and Data Warehouses (Snowflake, BigQuery): [Google Cloud Data Lakehouse Info](https://cloud.google.com/learn/what-is-a-data-lakehouse)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study schema registry, serialization, and deserialization patterns: [Confluent Schema Registry Docs](https://docs.confluent.io/platform/current/schema-registry/index.html)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Write a python script downloading, cleaning, and storing tabular data as Parquet: [PyArrow Getting Started](https://arrow.apache.org/docs/python/index.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Practice schema design for ingestion logs, comparing row-based vs column-based read speeds: [GeeksforGeeks Row vs Column Oriented Databases](https://www.geeksforgeeks.org/row-oriented-vs-column-oriented-databases/)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "Data Engineering",
    title: "Distributed Data Processing with Spark",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Apache Spark concepts, distributed execution, RDDs, and DataFrames: [freeCodeCamp Apache Spark Course](https://www.youtube.com/watch?v=_C8kWso4ne4)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master PySpark syntax, operations, transformations, actions, and lazy evaluations: [PySpark Getting Started Guide](https://spark.apache.org/docs/latest/api/python/getting_started/index.html)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study Spark distributed joins, partition optimization, and query execution plans: [Spark Performance Tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Write a PySpark script executing joins and aggregations on a mock 10GB dataset: [Spark SQL Programming Guide](https://spark.apache.org/docs/latest/sql-programming-guide.html)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Data Engineering",
    title: "Workflow Orchestration (Airflow / Prefect)",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn orchestration concepts, directed acyclic graphs (DAGs), operators, and tasks: [Astronomer Airflow Academy Basics](https://www.astronomer.io/academy/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Set up Apache Airflow locally and write your first simple DAG: [Apache Airflow Writing a DAG Tutorial](https://airflow.apache.org/docs/apache-airflow/stable/howto/write-dag.html)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Implement task dependencies, scheduling, triggers, retries, and slack error notifications: [Airflow Tasks Scheduling](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Build an orchestration pipeline that pulls data, triggers feature engineering, and updates a storage partition: [freeCodeCamp Airflow Tutorial](https://www.freecodecamp.org/news/apache-airflow-guide/)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "MLOps Core",
    title: "Experiment Tracking & Model Registry (MLflow)",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn experiment tracking, parameters logging, metrics tracking, and artifact storage: [MLflow Getting Started](https://mlflow.org/docs/latest/getting-started/index.html)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Set up MLflow autologging and a local/remote tracking server: [MLflow Autologging Guide](https://mlflow.org/docs/latest/tracking/autolog.html)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master the Model Registry, model versioning, and state transitions (Staging, Production, Archived): [MLflow Model Registry Guide](https://mlflow.org/docs/latest/model-registry.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Write a training pipeline that logs model parameters, training curves, and registers the output: [MLflow Training Example](https://mlflow.org/docs/latest/getting-started/getting-started-python/index.html)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "MLOps Core",
    title: "Containerization & Kubernetes Deployments",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Write optimized Dockerfiles using multi-stage builds and non-root users: [Docker Official Get Started](https://docs.docker.com/get-started/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Containerize a model serving endpoint and test it locally with Docker Compose: [FastAPI Docker Guide](https://fastapi.tiangolo.com/deployment/docker/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn Kubernetes basics: Pods, Deployments, Services, ConfigMaps, and Secrets: [TechWorld with Nana Kubernetes Beginners Course](https://www.youtube.com/watch?v=X48VuDVv0do)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Write a Kubernetes manifest deploying your model API server locally using Minikube: [Kubernetes Workloads Guide](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Scale serving",
    title: "High-Scale Serving (FastAPI, Triton)",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand serving optimizations: batching inference requests, thread pool sizing, and asynchronous loops: [FastAPI Concurrency Guide](https://fastapi.tiangolo.com/concurrency/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study Triton Inference Server, configuration files, and model repository layouts: [Triton Model Configuration](https://github.com/triton-inference-server/server/blob/main/docs/user_guide/model_configuration.md)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Deploy models on Triton using PyTorch, ONNX, and TensorRT backends: [Triton Server Quickstart](https://github.com/triton-inference-server/server)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Run load tests and performance analyses on Triton endpoints: [Triton Performance Analyzer](https://github.com/triton-inference-server/client/blob/main/src/python/library/tritonclient/utils/perf_analyzer.md)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Scale serving",
    title: "Feature Stores & Real-time Pipelines",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand feature stores, online vs offline storage, and point-in-time correctness: [Feast Feature Store Architecture](https://docs.feast.dev/concepts/architecture)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Set up Feast feature definitions, define entity sources, and materialize features: [Feast Quickstart Guide](https://docs.feast.dev/getting-started/quickstart)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn Apache Kafka, partitions, topics, and real-time streaming feature ingestion: [Confluent Kafka Python Developer Guide](https://developer.confluent.io/get-started/python/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Build a feature ingestion pipeline extracting from Kafka and loading features into Feast Redis: [Feast Real-time Ingestion Guide](https://docs.feast.dev/tutorials/real-time-feature-ingestion-with-spark-and-kafka)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Interview Practice",
    title: "Model Monitoring & CI/CD for Machine Learning",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Study Concept Drift, Data Drift, and model degradation over time: [Evidently AI ML Monitoring Course](https://www.evidentlyai.com/ml-system-design-course)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Set up Evidently reports to track and alert on feature data drift: [Evidently Data Drift Reports Guide](https://docs.evidentlyai.com/reports/data-drift)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Implement CI/CD workflows for training verification and integration tests using GitHub Actions: [Iterative CML Getting Started](https://cml.dev/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Perform a full MLOps mock system review: design a secure, automated retraining loop: [MLOps Zoomcamp Mock Design](https://github.com/DataTalksClub/mlops-zoomcamp)"
      ]}
    ]
  }
];

window.mlopsWeeks = mlopsWeeks;

window.MLOpsRoadmap = function({ user }) {
  const config = {
    id: "mlops",
    title: "MLOps & Data Engineering Roadmap",
    subtitle: "Data Pipelines to Production Monitoring",
    tagline: "Synapse · MLOps Engineer Track",
    description: "Master distributed PySpark pipelines, Airflow DAG workflow orchestrations, MLflow experiment registries, Docker containerization, Kubernetes serving scales, Feast feature stores, and drift monitoring.",
    accentColor: "#10B981",
    weeks: mlopsWeeks,
    phases: [
      { phase: "Data Engineering", weeks: "1-3", desc: "Data ingestion, ETL, Spark DataFrames, distributed joins, Airflow DAG orchestrations" },
      { phase: "MLOps Core", weeks: "4-5", desc: "MLflow experiment tracking, model registry stages, Docker multi-stage images, Kubernetes manifests" },
      { phase: "Scale serving", weeks: "6-7", desc: "FastAPI concurrency, Triton inference serving configs, Feast feature registries, Kafka streams" },
      { phase: "Interview Practice", weeks: "8", desc: "Concept drift monitors, Evidently reports, CML CI/CD pipeline deployments" }
    ],
    insights: [
      {
        title: "💡 Why MLOps & Data Engineering are Critical",
        text: "Building a model is only 10% of the ML lifecycle. The remaining 90% is the engineering infrastructure required to process data at scale, track experiments, deploy servers, and monitor drift. Mastering **Triton serving** ensures low-latency SLA compliance, while **Airflow** orchestrates robust ingestion pipelines.",
        color: "#10B981"
      }
    ],
    videos: [
      { title: "DataTalksClub Data Engineering Zoomcamp", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp" },
      { title: "TechWorld with Nana Kubernetes Course", url: "https://www.youtube.com/watch?v=X48VuDVv0do" },
      { title: "Evidently AI ML Monitoring Course", url: "https://www.evidentlyai.com/ml-system-design-course" },
      { title: "Apache Spark freeCodeCamp Tutorial", url: "https://www.youtube.com/watch?v=_C8kWso4ne4" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
