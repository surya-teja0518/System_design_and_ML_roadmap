const mathWeeks = [
  {
    week: 1,
    phase: "Foundations",
    title: "Linear Algebra for Machine Learning",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn vectors, vector spaces, linear combinations, span, and basis vectors: [3Blue1Brown Linear Algebra Chapter 1](https://www.youtube.com/watch?v=fNk_zzaMoEs)",
        "Understand dot product, projections, and geometric intuition behind vector calculations"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master linear transformations, matrix-vector multiplication, and determinants: [3Blue1Brown Matrix Transformations](https://www.youtube.com/watch?v=XkY2DOUCWMU)",
        "Understand shear, rotation, scaling, and how matrices act as functions"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study inverse matrices, column space, null space, and systems of equations: [3Blue1Brown Inverse Matrices](https://www.youtube.com/watch?v=uQhTuRlWMxA)",
        "Learn rank, linear independence, and span of matrix columns"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master eigenvalues, eigenvectors, and the intuition behind Singular Value Decomposition (SVD): [3Blue1Brown Eigenvectors & Eigenvalues](https://www.youtube.com/watch?v=PFDu9oVAE-g)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "Foundations",
    title: "Multivariate Calculus & Optimization",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Review derivatives, limits, and derivative rules (power, product, quotient rules): [3Blue1Brown Calculus Chapter 1](https://www.youtube.com/watch?v=WUvTyaaNkzM)",
        "Study the geometric meaning of tangents and instantaneous rate of change"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master the chain rule and derivatives of exponentials and logarithmic functions: [3Blue1Brown Chain Rule](https://www.youtube.com/watch?v=YG15m2VwSjA)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn partial derivatives, gradients, directional derivatives, and the Jacobian matrix: [Khan Academy Partial Derivatives](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivatives/v/partial-derivatives-introduction)",
        "Understand how the gradient points in the direction of steepest ascent"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master Gradient Descent optimization, learning rates, local/global minima, and convergence: [3Blue1Brown Gradient Descent](https://www.youtube.com/watch?v=IHZwWFHWa-w)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Foundations",
    title: "Probability & Statistics",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Review probability basics, sample spaces, joint probability, and conditional probability: [Khan Academy Conditional Probability](https://www.khanacademy.org/math/ap-statistics/probability-ap/stats-conditional-probability/v/bayes-theorem-visualized)",
        "Master Bayes' Theorem and its applications in Bayesian inference"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study random variables, expected values, variance, covariance, and correlation coefficient: [Khan Academy Random Variables](https://www.khanacademy.org/math/statistics-probability/random-variables-hot-spot)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master discrete and continuous probability distributions (Normal, Binomial, Bernoulli, Poisson): [Khan Academy Normal Distribution](https://www.khanacademy.org/math/statistics-probability/modeling-distributions-of-data)",
        "Understand the Central Limit Theorem (CLT) and why it matters in real-world data"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn Maximum Likelihood Estimation (MLE), hypothesis testing, p-values, and confidence intervals: [StatQuest Hypothesis Testing](https://www.youtube.com/watch?v=0oc49DyA3hU)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "Classical ML",
    title: "Supervised Learning: Regression & Classification",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Linear Regression, ordinary least squares (OLS) derivation, and the mean squared error (MSE) cost function: [StatQuest Linear Regression](https://www.youtube.com/watch?v=NkI9ia2CLHQ)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study overfitting, underfitting, L1 regularization (Lasso), and L2 regularization (Ridge): [StatQuest Regularization](https://www.youtube.com/watch?v=Q81RR3yKn30)",
        "Understand how penalty terms affect weights and feature selection"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Logistic Regression, the sigmoid function, log odds, and cross-entropy loss: [StatQuest Logistic Regression](https://www.youtube.com/watch?v=yIYKR4sgzI8)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Understand Support Vector Machines (SVMs), maximum margin classification, and the kernel trick: [StatQuest Support Vector Machines](https://www.youtube.com/watch?v=efR1C6Vcftw)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "Classical ML",
    title: "Tree Models & Ensemble Methods",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Study Decision Trees, entropy, information gain, and Gini impurity: [StatQuest Decision Trees](https://www.youtube.com/watch?v=7VeUPuFGJHk)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Random Forest, bagging ensemble, and out-of-bag (OOB) error estimation: [StatQuest Random Forests](https://www.youtube.com/watch?v=J4Wdy0Wc_xQ)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn AdaBoost and sequential weight updates: [StatQuest AdaBoost](https://www.youtube.com/watch?v=LsK-xG1cLYA)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master Gradient Boosting, XGBoost, LightGBM, and regularization in boosting: [StatQuest Gradient Boosting](https://www.youtube.com/watch?v=3CC4N4z3GJc)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Classical ML",
    title: "Unsupervised Learning & Dimensionality Reduction",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn K-Means clustering, centroid updates, the elbow method, and silhouette score: [StatQuest K-Means Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study Hierarchical clustering, dendrograms, and DBSCAN clustering: [StatQuest Hierarchical Clustering](https://www.youtube.com/watch?v=7xHsRkOdVwo)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Principal Component Analysis (PCA), covariance matrices, and eigenvectors: [StatQuest PCA](https://www.youtube.com/watch?v=FgakZw6K1QQ)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Understand t-SNE dimensionality reduction and compare it with PCA for manifold visualization: [StatQuest t-SNE](https://www.youtube.com/watch?v=NEaUSP4YerM)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Classical ML",
    title: "Model Evaluation & Validation Strategies",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Master classification evaluation: Confusion Matrix, Precision, Recall, F1-Score, and ROC-AUC: [Google ML Classification Metrics](https://developers.google.com/machine-learning/crash-course/classification/roc-curve-and-auc)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study Cross-Validation (K-Fold, Stratified, GroupKFold) and prevent data leakage: [StatQuest Cross Validation](https://www.youtube.com/watch?v=fSytzGwwCyk)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand the Bias-Variance Trade-off and analyze learning curves to identify overfitting: [StatQuest Bias-Variance](https://www.youtube.com/watch?v=EuBBz3bI-aA)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Study techniques for handling class imbalance (SMOTE, downsampling, class weights): [Imbalanced Classification Guide](https://machinelearningmastery.com/tactics-to-combat-imbalanced-datasets-in-machine-learning/)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Interview Prep",
    title: "ML Theory & Mock Interviews",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Practice implementing basic algorithms from scratch in NumPy (Linear Regression, K-Means): [ML Algorithms From Scratch](https://github.com/eriklindernoren/ML-From-Scratch)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Prepare explanations for key algorithms, highlighting hyperparameter settings and trade-offs: [ML Interview Cheat Sheet](https://github.com/khangich/machine-learning-interview-cheat-sheet)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study ML Case Study designs: system goals, data sources, metric tracking: [ML System Design Cases](https://github.com/chiphuyen/machine-learning-systems-design)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Conduct a full mock interview on classical ML theory: [DataTalksClub ML Zoomcamp](https://github.com/DataTalksClub/machine-learning-zoomcamp)"
      ]}
    ]
  }
];

window.mathWeeks = mathWeeks;

window.MathMLRoadmap = function({ user }) {
  const config = {
    id: "math",
    title: "Math & Classical Machine Learning",
    subtitle: "Foundational Math to Algorithmic Mastery",
    tagline: "Synapse · Core ML Theory Track",
    description: "Build an intuitive and mathematical understanding of linear algebra, calculus, probability theory, statistics, supervised/unsupervised algorithms, evaluation metrics, and classical ML theory.",
    accentColor: "#F59E0B",
    weeks: mathWeeks,
    phases: [
      { phase: "Foundations", weeks: "1-3", desc: "Linear algebra, multivariable calculus, gradients, probability, distributions, MLE" },
      { phase: "Classical ML", weeks: "4-7", desc: "Regression, regularizations, SVMs, decision trees, boosting (XGBoost), PCA, evaluations" },
      { phase: "Interview Practice", weeks: "8", desc: "NumPy algorithm coding from scratch, ML case studies, theory mock interviews" }
    ],
    insights: [
      {
        title: "💡 Why Math and Classical ML is Critical",
        text: "Deep learning is built on linear algebra and calculus. Knowing how **gradients** propagate prevents optimization bugs. Furthermore, tree-based models like **XGBoost** are still the industry standard for tabular data (which makes up 80%+ of company data). Mastering evaluation metrics like **ROC-AUC** ensures you build mathematically correct models.",
        color: "#F59E0B"
      }
    ],
    videos: [
      { title: "3Blue1Brown Linear Algebra Playlist", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MurYDfExLH_oHDtBYjs" },
      { title: "3Blue1Brown Calculus Playlist", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
      { title: "StatQuest Machine Learning Basics", url: "https://www.youtube.com/playlist?list=PLMCXHnjXnJeND0K13O4z4L5t5pG02Pnb1" },
      { title: "DataTalksClub Machine Learning Zoomcamp", url: "https://github.com/DataTalksClub/machine-learning-zoomcamp" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
