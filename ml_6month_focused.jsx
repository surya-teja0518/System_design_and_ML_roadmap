const mlWeeks = [
  {
    phase: "Setup & Resume",
    week: 1, title: "Resume Polish + Skills Audit",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Resume v3: add ML bullets to your current roles showing concrete metrics (e.g. latency, business impact)",
        "Audit: list down what ML topics you know cold and what gaps you need to fill (e.g. loss functions, evaluation metrics)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "LinkedIn profile complete: headline (e.g., 'ML Engineer | Distributed Systems'), about section, and featured section",
        "List top 10 target companies (e.g. Razorpay, CRED, Meesho) and check their engineering blogs to find what ML problems they solve: [Razorpay Engineering Blog](https://tech.razorpay.com/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "GitHub profile cleanup: pin your best repositories and write a profile README",
        "Set up 2 empty project repositories on GitHub: one for the Risk Scoring API and one for the Kafka scoring pipeline"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Plan your 2 projects in detail: write design docs outlining feature inputs, model choices, and serving endpoints before coding"
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
        "Summarize differences and trade-offs between XGBoost, LightGBM, and CatBoost"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Study model interpretability using SHAP values: [SHAP Values Tutorial](https://christophm.github.io/interpretable-ml-book/shap.html)",
        "Refresh core classification evaluation metrics: AUC-ROC, Precision-Recall, Calibration Curves, and Threshold Tuning"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 3 easy LeetCode array/string problems to build daily practice habits: [LeetCode](https://leetcode.com/)",
        "Practice explaining evaluation metrics from your past projects as if in an interview"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Draft answers to 10 common ML engineering theory questions (e.g. handling class imbalance, overfitting prevention)",
        "Self-quiz: write down the answers from memory and grade yourself"
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
        "Write down your behavioral STAR stories (5 scenarios: conflict, failure, scale, delivery, ownership)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Practice System Design: sketch the architecture of a real-time Fraud Detection system within 15 minutes",
        "Refine your drawing using a virtual canvas: [Excalidraw](https://excalidraw.com/)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Review Weeks 1-3 progress. Identify which theory areas are weak and budget time next week to address them"
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
        "Download a credit risk dataset from Kaggle and perform initial Exploratory Data Analysis (EDA) in a Jupyter Notebook"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Build a robust feature engineering pipeline using Scikit-Learn pipelines",
        "Train an XGBoost baseline classifier and track parameters/metrics using MLflow locally: [MLflow Documentation](https://mlflow.org/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Evaluate the model: plot ROC curve, Precision-Recall curve, SHAP summary plots, and check model calibration",
        "Register the trained model in the MLflow Model Registry"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Create a FastAPI skeleton with `/predict` and `/health` endpoints: [FastAPI Getting Started](https://fastapi.tiangolo.com/)",
        "Test local server responses using `curl` or FastAPI's auto-generated Swagger UI docs"
      ]}
    ]
  },
  {
    phase: "Project 1",
    week: 5, title: "Project 1: Serving + Containerization",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Implement model loading and inference logic inside FastAPI, validating input payloads with Pydantic schemas",
        "Ensure fast serialization/deserialization to minimize API response overhead"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Write a multi-stage Dockerfile to compile dependencies and run the API under a non-root user",
        "Build and run the Docker container locally, testing the `/predict` endpoint"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Create a GitHub Actions workflow to run code linting and build tests on every code push",
        "Push your validated Docker image to DockerHub or GitHub Container Registry"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Deploy the containerized API on a cloud provider like [Railway.app](https://railway.app/) or Render",
        "Verify public accessibility, secure HTTPS endpoints, and document API contracts in the README"
      ]}
    ]
  },
  {
    phase: "Project 1",
    week: 6, title: "Project 1: Polish + Marketing",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Refactor API code to enforce clean code, explicit typings, docstrings, and remove any secrets",
        "Add unit tests using pytest for data parsing, validation rules, and model predictions: [pytest Guide](https://docs.pytest.org/)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Draw an architecture diagram of your API setup and include it in the README: [Excalidraw](https://excalidraw.com/)",
        "Record a 2-minute video walkthrough (e.g. using Loom) explaining the architecture and demonstrating API calls"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Write a technical blog post detailing how you built the production API (Medium/Hashnode)",
        "Share a LinkedIn post summarizing the project with a link to the GitHub repo, blog post, and live API"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Submit Project 1. Apply to 5 target companies through job portals or warm referrals"
      ]}
    ]
  },
  {
    phase: "Project 2",
    week: 7, title: "Project 2: Kafka ML Pipeline — Design",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Design a streaming architecture: transaction simulator → Kafka producer → consumer scoring agent → output Kafka topic",
        "Draft a latency budget diagram detailing the target time for each step in the pipeline"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Spin up Kafka and Zookeeper locally using Docker Compose: [Docker Compose Overview](https://docs.docker.com/compose/)",
        "Write a Python Kafka producer to simulate real-time JSON transaction streams at 10 events/sec"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Create a Python Kafka consumer skeleton that reads events and logs them: [Kafka Python client](https://kafka-python.readthedocs.io/)",
        "Verify message queue throughput by processing a test batch of 1,000 events"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Plan stateful feature aggregation rules (e.g. rolling sum of transaction amounts in the last 10 minutes)",
        "Load the pre-trained XGBoost model artifact from Project 1 inside the consumer script"
      ]}
    ]
  },
  {
    phase: "Project 2",
    week: 8, title: "Project 2: Real-Time Scoring + Output",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Implement online feature engineering inside the consumer to calculate rolling metrics",
        "Pass engineered features to the XGBoost model to compute fraud probabilities in under 20ms"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Publish scored predictions `{transaction_id, score, decision}` to a downstream output Kafka topic",
        "Implement a Dead Letter Queue (DLQ) topic to route and capture malformed JSON events safely"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Integrate Evidently to monitor data and prediction drift on streaming batches: [Evidently AI Monitoring Docs](https://docs.evidentlyai.com/)",
        "Execute a full end-to-end stress test with 10,000 transaction events"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Profile and measure throughput (records/sec) and average event latency from end to end",
        "Add system metrics, deployment instructions, and pipeline design diagrams to the README"
      ]}
    ]
  },
  {
    phase: "Project 2",
    week: 9, title: "Project 2: GitHub + Marketing",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Polish the Project 2 repository: create a single `docker-compose.yml` to launch Kafka, producer, consumer, and dashboard with one command",
        "Document step-by-step setup instructions for local development"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Refactor stream consumer code: add logging, handle network drops, and write unit tests for the feature parsing module",
        "Ensure proper environment variable management for Kafka bootstrap servers"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Write a blog post titled 'Building a Real-Time ML Scoring Pipeline with Kafka and Python'",
        "Post on LinkedIn with a demo GIF or architecture diagram, detailing how you managed stateful streaming metrics"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Submit Project 2. Apply to 5 more companies (totaling 10 applications in the pipeline)"
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
        "Analyze time and space complexity for all solutions"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Solve 4 LeetCode Medium problems on stacks, queues, and linked lists",
        "Review key algorithms like binary search and quickselect"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 4 LeetCode Medium problems on trees and graphs (BFS / DFS)",
        "Practice explaining your coding thought process aloud before writing code"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Identify recurring code patterns you struggle with (e.g. dynamic programming, backtracking) and write summary notes"
      ]}
    ]
  },
  {
    phase: "Interview Prep",
    week: 11, title: "System Design Sprint I",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Perform a mock design of a credit scoring system, matching inputs, models, and latency SLAs",
        "Outline data lineage from database transactions to offline feature generation"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Practice designing a real-time fraud scoring architecture with event queue processing and feature stores",
        "Write down trade-offs between batch inference (pre-calculated) and real-time API inference"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 4 LeetCode Medium problems under timed conditions",
        "Record a 2-minute mock video answering behavioral questions (e.g., 'Tell me about a time you handled scale')"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Review your system design sketches. Identify bottlenecks in database reads or network latency, and read up on solutions"
      ]}
    ]
  },
  {
    phase: "Interview Prep",
    week: 12, title: "ML Theory + SQL Drill",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Review ML theory: write detailed answers to questions on regularization, loss functions, tree-boosting internals, and handling extreme class imbalance",
        "Practice explaining SHAP/LIME interpretations for tabular classifiers"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Solve 6 intermediate/advanced SQL queries (window functions, recursive CTEs, joins on nulls) on DataLemur: [DataLemur SQL Practice](https://datalemur.com/)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 4 LeetCode Medium coding problems",
        "Do a rapid-fire self-quiz: explain Bias-Variance trade-off and L1 vs L2 regularization in 2 minutes each"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Identify any lingering gaps in your SQL or ML theory foundation and allocate extra drill hours next week"
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
        "Review feedback on code cleanliness and logical structure"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Draft bulletproof STAR responses for your top 5 behavioral scenarios",
        "Practice delivering responses in under 2 minutes. Watch for pacing, tone, and impact metrics"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 2 LeetCode Hard problems to test your algorithmic edge",
        "Sketch out a machine learning recommendation system design (candidate generation -> ranking -> re-ranking)"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Assess overall readiness. Create a cheatsheet of your behavioral outlines, coding patterns, and system design templates"
      ]}
    ]
  },
  {
    phase: "Job Hunt",
    week: 14, title: "Target Company Deep Dive + Applications",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Select 3 high-priority target companies. Read their engineering blogs, find their ML stack, and note their business model"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Tailor your resume, cover letters, and GitHub profiles to align with the requirements of target companies",
        "Submit 10 high-quality applications (with referrals if possible)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 2 LeetCode Medium problems to keep your coding skills sharp",
        "Review system design architecture patterns for the specific business domains of your target companies"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Create a Job Tracker spreadsheet to log company names, roles, dates applied, contacts, interview steps, and follow-ups"
      ]}
    ]
  },
  {
    phase: "Job Hunt",
    week: 15, title: "Interview Execution Begins",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Prepare for initial recruiter screens and technical phone calls. Practice your elevator pitch"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Conduct a full mock interview (coding + ML system design) on Pramp or with a mentor"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Submit 10 more applications to keep your pipeline full",
        "Practice explaining your Kafka streaming project (Project 2) out loud. Focus on state management and failure handling"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Review interview questions asked in the past week. Research and write down ideal solutions for any questions you struggled with"
      ]}
    ]
  },
  {
    phase: "Job Hunt",
    week: 16, title: "Active Interview Mode",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Perform scheduled interviews. Take detailed notes of all questions asked immediately after each round"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Solve 2 LeetCode Medium problems. Refine your system design template based on active interview feedback"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Follow up on completed interviews. Reach out to hiring managers with brief thank-you notes",
        "Submit 5 new applications to maintain pipeline momentum"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Conduct a retrospective on your performance in recent interviews. Adjust your preparation focus accordingly"
      ]}
    ]
  },
  {
    phase: "Job Hunt",
    week: 17, title: "Interview + Offer Phase",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Execute final-round interviews. Focus on showing leadership, domain expertise, and system scaling competency"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "If you receive an offer, review the compensation package (base salary, bonuses, benefits, and equity / ESOPs)"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Prepare negotiation strategies. Research market standards for senior/transitioning ML engineers in your region",
        "Continue scheduled interviews with other companies to maximize leverage"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Compare active offers based on career growth, team culture, technical stack, and overall compensation"
      ]}
    ]
  },
  {
    phase: "Buffer",
    week: 18, title: "Buffer Week (Offer Negotiation / Final Prep)",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Negotiate details of active offers. Seek written confirmation of final compensation terms"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "If still seeking offers: expand applications to secondary list of companies and schedule practice mocks"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Upon accepting an offer, plan your onboarding roadmap: review company's codebase style and research internal projects"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Formulate a plan for transition/resignation from your current role"
      ]}
    ]
  },
  {
    phase: "Buffer",
    week: 19, title: "Buffer Week II",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Finalize resignation hand-off documents and close pending tickets in your current job"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Read up on the specific frameworks and cloud tooling used by your future employer"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Take a complete break from technical practice. Rest and recharge before Day 1"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Reflect on your 6-month transition journey. Celebrate going from an analyst/DBA to a production ML Engineer!"
      ]}
    ]
  },
  {
    phase: "Contingency",
    week: 20, title: "Contingency: Offer Not Yet / Plan Adjustment",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "If no offers are in hand by Week 20: expand application scope to startups, remote contract positions, and adjacent fields (e.g. Data Platform Engineer)"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Re-evaluate your portfolio projects. Ask senior developers to review your repos for any code design red flags"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Solve 3 LeetCode Medium problems. Run through a system design drill on a new case study"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Refine your outreach messages and resume hooks based on what caused drop-offs in the pipeline"
      ]}
    ]
  },
  {
    phase: "Contingency",
    week: 21, title: "Contingency: Extended Search",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "Submit 15 applications to startups and tier-2 firms. Connect with hiring managers directly on LinkedIn"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "Practice coding and system design regularly to stay in interview shape. Treat job hunting as a full-time sprint"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Ping your network for internal referrals. Look for roles with immediate hiring requirements"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Review feedback from recent screens. Adjust study priority to target areas where you were rejected"
      ]}
    ]
  },
  {
    phase: "Contingency",
    week: 22, title: "Contingency: Onboarding / Extended Search",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: [
        "If onboarding: focus on setting up your local dev workspace and understanding company guidelines"
      ]},
      { day: "Wed", hrs: 2, tasks: [
        "If searching: continue submitting applications and attending scheduled interviews with persistent energy"
      ]},
      { day: "Fri", hrs: 2, tasks: [
        "Document any technical challenges you encounter during onboarding or active interview loops"
      ]},
      { day: "Sun", hrs: 2, tasks: [
        "Maintain a sustainable study schedule to prevent burnout. Consistency remains your biggest advantage"
      ]}
    ]
  },
  {
    phase: "Contingency",
    week: 23, title: "Week 23: Day 1 or Continued Search",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Onboarding setup or application sprint — stay focused on the task at hand"] },
      { day: "Wed", hrs: 2, tasks: ["Deep dive into the team codebase or mock interview practice"] },
      { day: "Fri", hrs: 2, tasks: ["Discuss early goals with your manager, or follow up on submitted applications"] },
      { day: "Sun", hrs: 2, tasks: ["Rest and clear your head. Keep your momentum steady"] }
    ]
  },
  {
    phase: "Contingency",
    week: 24, title: "Week 24: Onboarded or Still Searching",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["First code reviews in new role OR submitting applications to new openings"] },
      { day: "Wed", hrs: 2, tasks: ["Understand internal data pipelines, or complete daily LeetCode practice"] },
      { day: "Fri", hrs: 2, tasks: ["Clarify technical architecture with seniors, or send follow-up DMs to recruiters"] },
      { day: "Sun", hrs: 2, tasks: ["Review your 6-month growth. Your capability is significantly higher than day 1"] }
    ]
  },
  {
    phase: "Contingency",
    week: 25, title: "Week 25: Momentum",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Pick up first major feature ticket, or attend interview loops with new companies"] },
      { day: "Wed", hrs: 2, tasks: ["Write tests for your new features, or run system design mocks"] },
      { day: "Fri", hrs: 2, tasks: ["Deliver your first pull request, or evaluate backup contract offers"] },
      { day: "Sun", hrs: 2, tasks: ["Prepare notes for upcoming weekly reviews"] }
    ]
  },
  {
    phase: "Contingency",
    week: 26, title: "Week 26: End of 6 Months",
    hrs: 8,
    days: [
      { day: "Mon", hrs: 2, tasks: ["Evaluate your accomplishments over the full 26-week cycle"] },
      { day: "Wed", hrs: 2, tasks: ["Organize and document what you built, noting key learnings and next career milestones"] },
      { day: "Fri", hrs: 2, tasks: ["Celebrate the transition: you've built the skills, projects, and landed the role!"] },
      { day: "Sun", hrs: 2, tasks: ["Set new 6-month goals for production performance and system architecture"] }
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
