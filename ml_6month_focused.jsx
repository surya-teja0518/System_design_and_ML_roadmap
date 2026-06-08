const mlWeeks = [
  {
    phase: "Setup & Resume",
    week: 1, title: "Resume Polish + Skills Audit",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Resume v3: add ML bullets to your current roles showing concrete metrics (e.g. latency, business impact): [freeCodeCamp Technical Resume Guide](https://www.freecodecamp.org/news/how-to-write-a-technical-resume/)",
        "Audit: list down what ML topics you know cold and what gaps you need to fill (e.g. loss functions, evaluation metrics): [ML Engineer Skills Audit](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "LinkedIn profile complete: headline (e.g., 'ML Engineer | Distributed Systems'), about section, and featured section: [freeCodeCamp LinkedIn Optimization Guide](https://www.freecodecamp.org/news/linkedin-profile-optimization-for-developers/)",
        "List top 10 target companies (e.g. Razorpay, CRED, Meesho) and check their engineering blogs to find what ML problems they solve: [Razorpay Engineering Blog](https://tech.razorpay.com/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "GitHub profile cleanup: pin your best repositories and write a profile README: [freeCodeCamp GitHub Profile Guide](https://www.freecodecamp.org/news/how-to-create-a-github-profile-readme/)",
        "Set up 2 empty project repositories on GitHub: one for the Risk Scoring API and one for the Kafka scoring pipeline: [GitHub Git Tutorial](https://www.youtube.com/watch?v=RGOj5yH7evk)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Plan your 2 projects in detail: write design docs outlining feature inputs, model choices, and serving endpoints before coding: [Eugene Yan ML Design Docs](https://eugeneyan.com/writing/designing-machine-learning-systems/)"
      ]}
    ]
  },
  {
    phase: "Setup & Resume",
    week: 2, title: "Quick ML Theory Refresh",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Watch StatQuest Gradient Boosting guides: [StatQuest Gradient Boosting (YouTube)](https://www.youtube.com/watch?v=3CC4N4z3GJc)",
        "Summarize differences and trade-offs between XGBoost, LightGBM, and CatBoost: [GeeksforGeeks XGBoost vs LightGBM vs CatBoost](https://www.geeksforgeeks.org/xgboost-vs-lightgbm-vs-catboost/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Study model interpretability using SHAP values: [SHAP Values Tutorial](https://christophm.github.io/interpretable-ml-book/shap.html)",
        "Refresh core classification evaluation metrics: AUC-ROC, Precision-Recall, Calibration Curves, and Threshold Tuning: [GeeksforGeeks ML Evaluation Metrics](https://www.geeksforgeeks.org/metrics-for-evaluating-machine-learning-algorithms/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 3 easy LeetCode array/string problems to build daily practice habits: [LeetCode](https://leetcode.com/)",
        "Practice explaining evaluation metrics from your past projects as if in an interview: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Draft answers to 10 common ML engineering theory questions (e.g. handling class imbalance, overfitting prevention): [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)",
        "Self-quiz: write down the answers from memory and grade yourself: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]}
    ]
  },
  {
    phase: "Setup & Resume",
    week: 3, title: "Interview Framework + LeetCode Start",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Read introductory chapters of ML System Design: [Chip Huyen ML System Design Blog](https://huyenchip.com/blog/)",
        "Study ML engineering case studies on production architecture: [Eugene Yan Blog](https://eugeneyan.com/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Solve 4 easy LeetCode problems (hash maps, strings, two pointers): [LeetCode](https://leetcode.com/)",
        "Write down your behavioral STAR stories (5 scenarios: conflict, failure, scale, delivery, ownership): [freeCodeCamp STAR Method Guide](https://www.freecodecamp.org/news/the-star-method-for-behavioral-interviews/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Practice System Design: sketch the architecture of a real-time Fraud Detection system within 15 minutes: [System Design Primer](https://github.com/donnemartin/system-design-primer)",
        "Refine your drawing using a virtual canvas: [Excalidraw](https://excalidraw.com/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Review Weeks 1-3 progress. Identify which theory areas are weak and budget time next week to address them: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]}
    ]
  },
  {
    phase: "Project 1",
    week: 4, title: "Project 1: Risk Scoring API — Setup",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Set up GitHub repository using Cookiecutter template: [Cookiecutter Data Science Template](https://cookiecutter-data-science.drivendata.org/)",
        "Download a credit risk dataset from Kaggle and perform initial Exploratory Data Analysis (EDA) in a Jupyter Notebook: [Kaggle EDA Tutorial](https://www.kaggle.com/code/kashnitsky/topic-1-exploratory-data-analysis-with-pandas)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Build a robust feature engineering pipeline using Scikit-Learn pipelines: [Scikit-Learn Pipeline Guide](https://scikit-learn.org/stable/modules/compose.html)",
        "Train an XGBoost baseline classifier and track parameters/metrics using MLflow locally: [MLflow Documentation](https://mlflow.org/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Evaluate the model: plot ROC curve, Precision-Recall curve, SHAP summary plots, and check model calibration: [GeeksforGeeks ML Evaluation Metrics](https://www.geeksforgeeks.org/metrics-for-evaluating-machine-learning-algorithms/)",
        "Register the trained model in the MLflow Model Registry: [MLflow Model Registry Guide](https://mlflow.org/docs/latest/model-registry.html)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Create a FastAPI skeleton with `/predict` and `/health` endpoints: [FastAPI Getting Started](https://fastapi.tiangolo.com/)",
        "Test local server responses using `curl` or FastAPI's auto-generated Swagger UI docs: [FastAPI Getting Started](https://fastapi.tiangolo.com/)"
      ]}
    ]
  },
  {
    phase: "Project 1",
    week: 5, title: "Project 1: Serving + Containerization",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Implement model loading and inference logic inside FastAPI, validating input payloads with Pydantic schemas: [Pydantic Docs](https://docs.pydantic.dev/)",
        "Ensure fast serialization/deserialization to minimize API response overhead: [FastAPI Concurrency Guide](https://fastapi.tiangolo.com/concurrency/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Write a multi-stage Dockerfile to compile dependencies and run the API under a non-root user: [Docker Docs Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)",
        "Build and run the Docker container locally, testing the `/predict` endpoint: [Docker Official Get Started](https://docs.docker.com/get-started/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Create a GitHub Actions workflow to run code linting and build tests on every code push: [GitHub Actions Quickstart](https://docs.github.com/en/actions/writing-workflows/quickstart)",
        "Push your validated Docker image to DockerHub or GitHub Container Registry: [Docker Docs Container Registry Guide](https://docs.docker.com/docker-hub/repos/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Deploy the containerized API on a cloud provider like [Railway.app](https://railway.app/) or Render",
        "Verify public accessibility, secure HTTPS endpoints, and document API contracts in the README: [Render FastAPI Deployment Guide](https://render.com/docs/deploy-fastapi)"
      ]}
    ]
  },
  {
    phase: "Project 1",
    week: 6, title: "Project 1: Polish + Marketing",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Refactor API code to enforce clean code, explicit typings, docstrings, and remove any secrets: [FastAPI Project Layout Guide](https://fastapi.tiangolo.com/tutorial/bigger-applications/)",
        "Add unit tests using pytest for data parsing, validation rules, and model predictions: [pytest Guide](https://docs.pytest.org/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Draw an architecture diagram of your API setup and include it in the README: [Excalidraw](https://excalidraw.com/)",
        "Record a 2-minute video walkthrough (e.g. using Loom) explaining the architecture and demonstrating API calls: [Loom Guide](https://www.loom.com/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Write a technical blog post detailing how you built the production API (Medium/Hashnode): [Hashnode Blogging Tutorial](https://hashnode.com/)",
        "Share a LinkedIn post summarizing the project with a link to the GitHub repo, blog post, and live API: [freeCodeCamp LinkedIn Optimization Guide](https://www.freecodecamp.org/news/linkedin-profile-optimization-for-developers/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Submit Project 1. Apply to 5 target companies through job portals or warm referrals: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]}
    ]
  },
  {
    phase: "Project 2",
    week: 7, title: "Project 2: Kafka ML Pipeline — Design",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Design a streaming architecture: transaction simulator → Kafka producer → consumer scoring agent → output Kafka topic: [Confluent Event Streaming Architecture](https://developer.confluent.io/get-started/)",
        "Draft a latency budget diagram detailing the target time for each step in the pipeline: [ML System Design Primer](https://github.com/donnemartin/system-design-primer)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Spin up Kafka and Zookeeper locally using Docker Compose: [Docker Compose Overview](https://docs.docker.com/compose/)",
        "Write a Python Kafka producer to simulate real-time JSON transaction streams at 10 events/sec: [Kafka Python client](https://kafka-python.readthedocs.io/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Create a Python Kafka consumer skeleton that reads events and logs them: [Kafka Python client](https://kafka-python.readthedocs.io/)",
        "Verify message queue throughput by processing a test batch of 1,000 events: [Kafka Performance Tuning Guide](https://docs.confluent.io/platform/current/kafka/deployment.html)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Plan stateful feature aggregation rules (e.g. rolling sum of transaction amounts in the last 10 minutes): [Kafka Streams Stateful Operations](https://kafka.apache.org/documentation/streams/developer-guide/dsl-api.html#stateful-transformations)",
        "Load the pre-trained XGBoost model artifact from Project 1 inside the consumer script: [MLflow Model Registry Guide](https://mlflow.org/docs/latest/model-registry.html)"
      ]}
    ]
  },
  {
    phase: "Project 2",
    week: 8, title: "Project 2: Real-Time Scoring + Output",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Implement online feature engineering inside the consumer to calculate rolling metrics: [Tecton Feature Store Guide](https://www.tecton.ai/)",
        "Pass engineered features to the XGBoost model to compute fraud probabilities in under 20ms: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Publish scored predictions `{transaction_id, score, decision}` to a downstream output Kafka topic: [Kafka Python client](https://kafka-python.readthedocs.io/)",
        "Implement a Dead Letter Queue (DLQ) topic to route and capture malformed JSON events safely: [Kafka Dead Letter Queues Guide](https://www.confluent.io/blog/dead-letter-queues-in-kafka/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Integrate Evidently to monitor data and prediction drift on streaming batches: [Evidently AI Monitoring Docs](https://docs.evidentlyai.com/)",
        "Execute a full end-to-end stress test with 10,000 transaction events: [Kafka Performance Tuning Guide](https://docs.confluent.io/platform/current/kafka/deployment.html)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Profile and measure throughput (records/sec) and average event latency from end to end: [Kafka Performance Tuning Guide](https://docs.confluent.io/platform/current/kafka/deployment.html)",
        "Add system metrics, deployment instructions, and pipeline design diagrams to the README: [GitHub Git Tutorial](https://www.youtube.com/watch?v=RGOj5yH7evk)"
      ]}
    ]
  },
  {
    phase: "Project 2",
    week: 9, title: "Project 2: GitHub + Marketing",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Polish the Project 2 repository: create a single `docker-compose.yml` to launch Kafka, producer, consumer, and dashboard with one command: [Docker Compose Guide](https://docs.docker.com/compose/)",
        "Document step-by-step setup instructions for local development: [GitHub Git Tutorial](https://www.youtube.com/watch?v=RGOj5yH7evk)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Refactor stream consumer code: add logging, handle network drops, and write unit tests for the feature parsing module: [Python Logging Tutorial](https://docs.python.org/3/howto/logging.html)",
        "Ensure proper environment variable management for Kafka bootstrap servers: [Python Env Variables Guide](https://www.w3schools.com/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Write a blog post titled 'Building a Real-Time ML Scoring Pipeline with Kafka and Python': [Hashnode Blogging Tutorial](https://hashnode.com/)",
        "Post on LinkedIn with a demo GIF or architecture diagram, detailing how you managed stateful streaming metrics: [freeCodeCamp LinkedIn Optimization Guide](https://www.freecodecamp.org/news/linkedin-profile-optimization-for-developers/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Submit Project 2. Apply to 5 more companies (totaling 10 applications in the pipeline): [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]}
    ]
  },
  {
    phase: "Interview Prep",
    week: 10, title: "LeetCode Sprint I",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Solve 4 LeetCode Medium problems on arrays, hashing, and sliding window. Aim to finish each within 25 minutes: [LeetCode](https://leetcode.com/)",
        "Analyze time and space complexity for all solutions: [GeeksforGeeks Time Complexity Analysis](https://www.geeksforgeeks.org/analysis-of-algorithms-set-4-analysis-of-loops/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Solve 4 LeetCode Medium problems on stacks, queues, and linked lists: [LeetCode](https://leetcode.com/)",
        "Review key algorithms like binary search and quickselect: [GeeksforGeeks Binary Search Tutorial](https://www.geeksforgeeks.org/binary-search/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 4 LeetCode Medium problems on trees and graphs (BFS / DFS): [LeetCode](https://leetcode.com/)",
        "Practice explaining your coding thought process aloud before writing code: [freeCodeCamp Coding Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Identify recurring code patterns you struggle with (e.g. dynamic programming, backtracking) and write summary notes: [GeeksforGeeks Data Structures & Algorithms](https://www.geeksforgeeks.org/complete-roadmap-to-learn-dsa-from-scratch/)"
      ]}
    ]
  },
  {
    phase: "Interview Prep",
    week: 11, title: "System Design Sprint I",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Perform a mock design of a credit scoring system, matching inputs, models, and latency SLAs: [System Design Primer](https://github.com/donnemartin/system-design-primer)",
        "Outline data lineage from database transactions to offline feature generation: [ML System Design Primer](https://github.com/donnemartin/system-design-primer)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Practice designing a real-time fraud scoring architecture with event queue processing and feature stores: [System Design Primer](https://github.com/donnemartin/system-design-primer)",
        "Write down trade-offs between batch inference (pre-calculated) and real-time API inference: [ML System Design Primer](https://github.com/donnemartin/system-design-primer)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 4 LeetCode Medium problems under timed conditions: [LeetCode](https://leetcode.com/)",
        "Record a 2-minute mock video answering behavioral questions (e.g., 'Tell me about a time you handled scale'): [freeCodeCamp STAR Method Guide](https://www.freecodecamp.org/news/the-star-method-for-behavioral-interviews/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Review your system design sketches. Identify bottlenecks in database reads or network latency, and read up on solutions: [System Design Primer](https://github.com/donnemartin/system-design-primer)"
      ]}
    ]
  },
  {
    phase: "Interview Prep",
    week: 12, title: "ML Theory + SQL Drill",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Review ML theory: write detailed answers to questions on regularization, loss functions, tree-boosting internals, and handling extreme class imbalance: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)",
        "Practice explaining SHAP/LIME interpretations for tabular classifiers: [SHAP Values Tutorial](https://christophm.github.io/interpretable-ml-book/shap.html)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Solve 6 intermediate/advanced SQL queries (window functions, recursive CTEs, joins on nulls) on DataLemur: [DataLemur SQL Practice](https://datalemur.com/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 4 LeetCode Medium coding problems: [LeetCode](https://leetcode.com/)",
        "Do a rapid-fire self-quiz: explain Bias-Variance trade-off and L1 vs L2 regularization in 2 minutes each: [GeeksforGeeks Bias-Variance Tradeoff](https://www.geeksforgeeks.org/bias-variance-tradeoff-machine-learning/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Identify any lingering gaps in your SQL or ML theory foundation and allocate extra drill hours next week: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]}
    ]
  },
  {
    phase: "Interview Prep",
    week: 13, title: "Mock Interviews + Behavioral",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Execute a 45-minute timed mock coding session with a peer or on a mock platform: [Pramp Peer Mocks](https://www.pramp.com/)",
        "Review feedback on code cleanliness and logical structure: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Draft bulletproof STAR responses for your top 5 behavioral scenarios: [freeCodeCamp STAR Method Guide](https://www.freecodecamp.org/news/the-star-method-for-behavioral-interviews/)",
        "Practice delivering responses in under 2 minutes. Watch for pacing, tone, and impact metrics: [freeCodeCamp STAR Method Guide](https://www.freecodecamp.org/news/the-star-method-for-behavioral-interviews/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 2 LeetCode Hard problems to test your algorithmic edge: [LeetCode](https://leetcode.com/)",
        "Sketch out a machine learning recommendation system design (candidate generation -> ranking -> re-ranking): [Google Rec Systems Course](https://developers.google.com/machine-learning/recommendation)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Assess overall readiness. Create a cheatsheet of your behavioral outlines, coding patterns, and system design templates: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]}
    ]
  },
  {
    phase: "Job Hunt",
    week: 14, title: "Target Company Deep Dive + Applications",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Select 3 high-priority target companies. Read their engineering blogs, find their ML stack, and note their business model: [Razorpay Engineering Blog](https://tech.razorpay.com/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Tailor your resume, cover letters, and GitHub profiles to align with the requirements of target companies: [freeCodeCamp Technical Resume Guide](https://www.freecodecamp.org/news/how-to-write-a-technical-resume/)",
        "Submit 10 high-quality applications (with referrals if possible): [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 2 LeetCode Medium problems to keep your coding skills sharp: [LeetCode](https://leetcode.com/)",
        "Review system design architecture patterns for the specific business domains of your target companies: [System Design Primer](https://github.com/donnemartin/system-design-primer)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Create a Job Tracker spreadsheet to log company names, roles, dates applied, contacts, interview steps, and follow-ups: [Job Application Tracker Template](https://docs.google.com/spreadsheets/)"
      ]}
    ]
  },
  {
    phase: "Job Hunt",
    week: 15, title: "Interview Execution Begins",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Prepare for initial recruiter screens and technical phone calls. Practice your elevator pitch: [freeCodeCamp Elevator Pitch Guide](https://www.freecodecamp.org/news/how-to-write-an-elevator-pitch/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Conduct a full mock interview (coding + ML system design) on Pramp or with a mentor: [Pramp Peer Mocks](https://www.pramp.com/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Submit 10 more applications to keep your pipeline full: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)",
        "Practice explaining your Kafka streaming project (Project 2) out loud. Focus on state management and failure handling: [Kafka Developer Guide](https://developer.confluent.io/get-started/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Review interview questions asked in the past week. Research and write down ideal solutions for any questions you struggled with: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]}
    ]
  },
  {
    phase: "Job Hunt",
    week: 16, title: "Active Interview Mode",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Perform scheduled interviews. Take detailed notes of all questions asked immediately after each round: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Solve 2 LeetCode Medium problems. Refine your system design template based on active interview feedback: [LeetCode](https://leetcode.com/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Follow up on completed interviews. Reach out to hiring managers with brief thank-you notes: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)",
        "Submit 5 new applications to maintain pipeline momentum: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Conduct a retrospective on your performance in recent interviews. Adjust your preparation focus accordingly: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]}
    ]
  },
  {
    phase: "Job Hunt",
    week: 17, title: "Interview + Offer Phase",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Execute final-round interviews. Focus on showing leadership, domain expertise, and system scaling competency: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "If you receive an offer, review the compensation package (base salary, bonuses, benefits, and equity / ESOPs): [freeCodeCamp Tech Salary Negotiation Guide](https://www.freecodecamp.org/news/salary-negotiation-how-to-negotiate-a-software-engineer-job-offer/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Prepare negotiation strategies. Research market standards for senior/transitioning ML engineers in your region: [freeCodeCamp Tech Salary Negotiation Guide](https://www.freecodecamp.org/news/salary-negotiation-how-to-negotiate-a-software-engineer-job-offer/)",
        "Continue scheduled interviews with other companies to maximize leverage: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Compare active offers based on career growth, team culture, technical stack, and overall compensation: [freeCodeCamp Tech Salary Negotiation Guide](https://www.freecodecamp.org/news/salary-negotiation-how-to-negotiate-a-software-engineer-job-offer/)"
      ]}
    ]
  },
  {
    phase: "Buffer",
    week: 18, title: "Buffer Week (Offer Negotiation / Final Prep)",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Negotiate details of active offers. Seek written confirmation of final compensation terms: [freeCodeCamp Tech Salary Negotiation Guide](https://www.freecodecamp.org/news/salary-negotiation-how-to-negotiate-a-software-engineer-job-offer/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "If still seeking offers: expand applications to secondary list of companies and schedule practice mocks: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Upon accepting an offer, plan your onboarding roadmap: review company's codebase style and research internal projects: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Formulate a plan for transition/resignation from your current role: [How to Resign Professionally Guide](https://www.w3schools.com/)"
      ]}
    ]
  },
  {
    phase: "Buffer",
    week: 19, title: "Buffer Week II",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Finalize resignation hand-off documents and close pending tickets in your current job: [How to Resign Professionally Guide](https://www.w3schools.com/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Read up on the specific frameworks and cloud tooling used by your future employer: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Take a complete break from technical practice. Rest and recharge before Day 1: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Reflect on your 6-month transition journey. Celebrate going from an analyst/DBA to a production ML Engineer!: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]}
    ]
  },
  {
    phase: "Contingency",
    week: 20, title: "Contingency: Offer Not Yet / Plan Adjustment",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "If no offers are in hand by Week 20: expand application scope to startups, remote contract positions, and adjacent fields (e.g. Data Platform Engineer): [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Re-evaluate your portfolio projects. Ask senior developers to review your repos for any code design red flags: [GitHub Git Tutorial](https://www.youtube.com/watch?v=RGOj5yH7evk)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 3 LeetCode Medium problems. Run through a system design drill on a new case study: [LeetCode](https://leetcode.com/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Refine your outreach messages and resume hooks based on what caused drop-offs in the pipeline: [freeCodeCamp Technical Resume Guide](https://www.freecodecamp.org/news/how-to-write-a-technical-resume/)"
      ]}
    ]
  },
  {
    phase: "Contingency",
    week: 21, title: "Contingency: Extended Search",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Submit 15 applications to startups and tier-2 firms. Connect with hiring managers directly on LinkedIn: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Practice coding and system design regularly to stay in interview shape. Treat job hunting as a full-time sprint: [System Design Primer](https://github.com/donnemartin/system-design-primer)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Ping your network for internal referrals. Look for roles with immediate hiring requirements: [freeCodeCamp LinkedIn Optimization Guide](https://www.freecodecamp.org/news/linkedin-profile-optimization-for-developers/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Review feedback from recent screens. Adjust study priority to target areas where you were rejected: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"
      ]}
    ]
  },
  {
    phase: "Contingency",
    week: 22, title: "Contingency: Onboarding / Extended Search",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "If onboarding: focus on setting up your local dev workspace and understanding company guidelines: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "If searching: continue submitting applications and attending scheduled interviews with persistent energy: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Document any technical challenges you encounter during onboarding or active interview loops: [GitHub Git Tutorial](https://www.youtube.com/watch?v=RGOj5yH7evk)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Maintain a sustainable study schedule to prevent burnout. Consistency remains your biggest advantage: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)"
      ]}
    ]
  },
  {
    phase: "Contingency",
    week: 23, title: "Week 23: Day 1 or Continued Search",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Onboarding setup or application sprint — stay focused on the task at hand: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)"] },
      { day: "Wed", hrs: 2, tasks: ["Deep dive into the team codebase or mock interview practice: [freeCodeCamp Technical Interview Prep](https://www.freecodecamp.org/news/coding-interview-prep-course/)"] },
      { day: "Fri", hrs: 2, tasks: ["Discuss early goals with your manager, or follow up on submitted applications: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)"] },
      { day: "Sun", hrs: 2, tasks: ["Rest and clear your head. Keep your momentum steady: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)"] }
    ]
  },
  {
    phase: "Contingency",
    week: 24, title: "Week 24: Onboarded or Still Searching",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["First code reviews in new role OR submitting applications to new openings: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)"] },
      { day: "Wed", hrs: 2, tasks: ["Understand internal data pipelines, or complete daily LeetCode practice: [System Design Primer](https://github.com/donnemartin/system-design-primer)"] },
      { day: "Fri", hrs: 2, tasks: ["Clarify technical architecture with seniors, or send follow-up DMs to recruiters: [System Design Primer](https://github.com/donnemartin/system-design-primer)"] },
      { day: "Sun", hrs: 2, tasks: ["Review your 6-month growth. Your capability is significantly higher than day 1: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"] }
    ]
  },
  {
    phase: "Contingency",
    week: 25, title: "Week 25: Momentum",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Pick up first major feature ticket, or attend interview loops with new companies: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)"] },
      { day: "Wed", hrs: 2, tasks: ["Write tests for your new features, or run system design mocks: [pytest Guide](https://docs.pytest.org/)"] },
      { day: "Fri", hrs: 2, tasks: ["Deliver your first pull request, or evaluate backup contract offers: [GitHub Git Tutorial](https://www.youtube.com/watch?v=RGOj5yH7evk)"] },
      { day: "Sun", hrs: 2, tasks: ["Prepare notes for upcoming weekly reviews: [freeCodeCamp Developer Onboarding Guide](https://www.freecodecamp.org/news/how-to-onboard-as-a-junior-developer/)"] }
    ]
  },
  {
    phase: "Contingency",
    week: 26, title: "Week 26: End of 6 Months",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Evaluate your accomplishments over the full 26-week cycle: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"] },
      { day: "Wed", hrs: 2, tasks: ["Organize and document what you built, noting key learnings and next career milestones: [GitHub Git Tutorial](https://www.youtube.com/watch?v=RGOj5yH7evk)"] },
      { day: "Fri", hrs: 2, tasks: ["Celebrate the transition: you've built the skills, projects, and landed the role!: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"] },
      { day: "Sun", hrs: 2, tasks: ["Set new 6-month goals for production performance and system architecture: [ML Engineering Interview Prep](https://github.com/dair-ai/ML-Engineer-Roadmap)"] }
    ]
  }
];

window.mlWeeks = mlWeeks;

window.FocusedRoadmap = function({ user }) {
  const config = {
    id: "ml",
    title: "6-Month Focused ML Transition",
    subtitle: "Practical Milestones to ML Engineer",
    tagline: "Synapse · Machine Learning Track",
    description: "Budgeting 6-8 hours/week, this roadmap bypasses long theoretical paths to focus on 2 high-impact projects, structured coding sprints, and practical interview execution.",
    accentColor: "#059669",
    weeks: mlWeeks,
    phases: [
      { phase: "Setup & Resume", weeks: "1-3", desc: "Polish resume, quick ML refresh, LeetCode start" },
      { phase: "Project 1", weeks: "4-6", desc: "Build, deploy, market Risk Scoring API" },
      { phase: "Project 2", weeks: "7-9", desc: "Build, deploy, market Kafka ML Pipeline (your differentiator)" },
      { phase: "Interview Prep", weeks: "10-13", desc: "LeetCode sprint, system design, behavioral, mock interviews" },
      { phase: "Job Hunt", weeks: "14-17", desc: "Apply, interview, negotiate offers" },
      { phase: "Buffer", weeks: "18-19", desc: "Offer negotiation or continued search" },
      { phase: "Contingency", weeks: "20-26", desc: "Extended job search or onboarding ramp" }
    ],
    insights: [
      {
        title: "💡 Practical Transition Strategy",
        text: "Weeks 1-3 establish your profile. Week 4 starts Project 1, letting you **start applying in Week 6** when the API is live. Project 2 (Kafka streaming) runs in parallel with early screens. Weeks 10-13 prepare you for core technical loops. By Week 17, you are fully prepared and actively interviewing.",
        color: "#F59E0B"
      },
      {
        title: "🔗 ML Engineer Core Requirements",
        text: "Success in ML interviews relies on 3 pillars:\n1. **Coding (40%):** Data structures, SQL queries, clean formatting.\n2. **System Design (40%):** Data pipelines, model caching, serving latency budgets.\n3. **Behavioral (20%):** Demonstrating problem-solving and business impact.",
        color: "#10B981"
      }
    ],
    videos: [
      { title: "StatQuest Machine Learning Videos", url: "https://www.youtube.com/@statquest" },
      { title: "Andrew Ng Machine Learning Specialization", url: "https://www.youtube.com/playlist?list=PLkDaE6sC76KbS7FnBy5qPRGTe1wF9xL-M" },
      { title: "PyTorch for Deep Learning Course", url: "https://www.youtube.com/watch?v=V_xro1bcAuA" },
      { title: "DataTalksClub MLOps Zoomcamp Course", url: "https://github.com/DataTalksClub/mlops-zoomcamp" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
