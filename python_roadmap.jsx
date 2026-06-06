const pythonWeeks = [
  {
    week: 1,
    phase: "Foundations",
    title: "Python Basics & Execution Model",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand the compilation vs interpretation cycle in Python: [Real Python Intro to Python](https://realpython.com/python-intro/)",
        "Study Python variables, name binding, and dynamic typing: [W3Schools Python Variables](https://www.w3schools.com/python/python_variables.asp)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master control flow (if/else, for/while loops, break/continue): [Python Docs Control Flow](https://docs.python.org/3/tutorial/controlflow.html)",
        "Understand basic function definition, return values, and default arguments"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Read about Python Global Interpreter Lock (GIL) and CPU-bound limitations: [Real Python GIL Guide](https://realpython.com/python-gil/)",
        "Write short scripts testing Python scoping rules (Local, Enclosing, Global, Built-in)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Practice exercises on variables, conditional logic, and simple loops: [GeeksforGeeks Basic Python exercises](https://www.geeksforgeeks.org/python-programming-examples/)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "Foundations",
    title: "Data Structures & Complexity",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand lists, tuples, and their time complexity differences: [Real Python Data Structures](https://realpython.com/python-data-structures/)",
        "Practice list operations, slicing, and common list methods: [W3Schools Python List Methods](https://www.w3schools.com/python/python_ref_list.asp)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study dictionaries, hash maps under the hood, and sets: [Real Python Dictionaries](https://realpython.com/python-dicts/)",
        "Implement set operations (union, intersection, difference) and dictionary lookups"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand Time and Space Complexity (Big O Notation) for Python structures: [freeCodeCamp Big O Notation Guide](https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674c8502648/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve 4 easy LeetCode problems on lists and dicts (Two Sum, Valid Anagram, Contains Duplicate): [LeetCode Problems](https://leetcode.com/problemset/all/)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Foundations",
    title: "Functional Programming & Comprehensions",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Lambda functions and anonymous expressions: [Real Python Lambda Functions](https://realpython.com/python-lambda/)",
        "Master Map, Filter, and Reduce functions: [freeCodeCamp Map, Filter, Reduce](https://www.freecodecamp.org/news/python-map-filter-reduce-functions-explained/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study list, set, and dictionary comprehensions: [Real Python List Comprehensions](https://realpython.com/list-comprehension-python/)",
        "Practice rewriting nested loops as concise comprehensions"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand Iterators, Iterables, and Generators using `yield`: [Real Python Generators](https://realpython.com/introduction-to-python-generators/)",
        "Write custom generator functions to handle memory-efficient large data streams"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve 3 medium LeetCode exercises focusing on custom iterators or string preprocessing: [LeetCode](https://leetcode.com/)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "OOP & Metaprogramming",
    title: "Object-Oriented Programming (OOP) Deep Dive",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Python classes, instance attributes, class attributes, and methods: [Real Python OOP in Python](https://realpython.com/python3-object-oriented-programming/)",
        "Understand the difference between `__init__`, `__new__`, and variable scoping inside classes"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Single/Multiple Inheritance, Method Resolution Order (MRO), and `super()`: [GeeksforGeeks Inheritance](https://www.geeksforgeeks.org/inheritance-in-python/)",
        "Study polymorphism and method overriding in subclassing"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Explore Magic (Dunder) Methods (`__str__`, `__repr__`, `__len__`, `__getitem__`): [Real Python Operator Overloading](https://realpython.com/operator-overloading-python/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Create a custom Python class implementing vector operations using dunder methods: [GeeksforGeeks Dunder Methods](https://www.geeksforgeeks.org/dunder-magic-methods-python/)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "OOP & Metaprogramming",
    title: "Advanced Features & Metaprogramming",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand decorators, closure concepts, and wrapping functions: [Real Python Decorators Guide](https://realpython.com/primer-on-python-decorators/)",
        "Write custom decorators with arguments and class-based decorators"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master context managers (`with` statements) and `__enter__` / `__exit__` hooks: [Real Python Context Managers](https://realpython.com/python-with-statement/)",
        "Create a class-based context manager for handling file streams or database connections"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study custom exception handling and exception chaining: [Real Python Custom Exceptions](https://realpython.com/python-custom-exceptions/)",
        "Understand advanced arguments: `*args`, `**kwargs`, positional-only and keyword-only params: [Real Python args & kwargs](https://realpython.com/python-args-and-kwargs/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Read on metaclasses, class creation hook, and `type()`: [Real Python Metaclasses](https://realpython.com/python-metaclasses/)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Integration",
    title: "Concurrency & Async Python",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand CPU-bound vs I/O-bound tasks and how they relate to the GIL: [Real Python Threading vs Multiprocessing](https://realpython.com/python-concurrency/)",
        "Implement basic multi-threading and multi-processing using `concurrent.futures`"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Learn asynchronous programming, event loop concept, `async` and `await`: [Real Python Asyncio Guide](https://realpython.com/async-io-python/)",
        "Use `asyncio.gather` to execute multiple asynchronous API fetches concurrently"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Explore process and thread pools, and asynchronous event loops under heavy loads: [Python Docs ThreadPoolExecutor](https://docs.python.org/3/library/concurrent.futures.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Build a small concurrency demo scraper requesting multiple URLs asynchronously: [freeCodeCamp Web Scraping Guide](https://www.freecodecamp.org/news/web-scraping-python-tutorial-how-to-scrape-data-from-a-website/)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Integration",
    title: "Scientific Python & Performance Optimization",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand vectorization and array programming with NumPy: [Real Python NumPy Guide](https://realpython.com/numpy-tutorial/)",
        "Practice NumPy slicing, masking, and element-wise calculations"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Pandas DataFrames, indices, group-by, and merge operations: [Pandas Getting Started Guide](https://pandas.pydata.org/docs/getting_started/index.html)",
        "Optimize memory consumption of large CSV datasets using dtypes and chunking"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Use `cProfile` and `timeit` to profile and measure execution bottlenecks: [Python Docs Profiler](https://docs.python.org/3/library/profile.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Apply code optimization strategies (list comprehensions, local caching, built-in functions): [Real Python Speed Up Python](https://realpython.com/python-speed/)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Interview Practice",
    title: "Production Standards & Clean Code",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Python testing using `pytest`, fixtures, and parameterization: [Real Python Pytest Guide](https://realpython.com/pytest-python-testing/)",
        "Write comprehensive unit tests for a feature engineering module"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master virtual environments (`venv`, `poetry` or `pipenv`): [Real Python virtualenv Guide](https://realpython.com/python-virtual-environments-a-primer/)",
        "Learn PEP 8 standards, linters (flake8, pylint), and code formatters (black): [Real Python PEP 8 Guide](https://realpython.com/python-pep8/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study type hinting, static analysis with `mypy`, and docstring standards: [Real Python Type Hinting](https://realpython.com/python-type-checking/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Refactor an old codebase into a structured package with tests, typings, and a config file: [Real Python Packaging Projects](https://realpython.com/python-packages/)"
      ]}
    ]
  }
];

window.pythonWeeks = pythonWeeks;

window.PythonRoadmap = function({ user }) {
  const config = {
    id: "python",
    title: "Python Mastery Roadmap",
    subtitle: "Core Python to Advanced ML Pipelines",
    tagline: "Synapse · Python Developer Track",
    description: "Learn Python from the execution model up, focusing on OOP, concurrency, performance optimization, and scientific library ecosystems. Build production-grade code that is clean, tested, and high-performance.",
    accentColor: "#3776AB",
    weeks: pythonWeeks,
    phases: [
      { phase: "Foundations", weeks: "1-3", desc: "Syntax, GIL, scoping, data structures, complexity, functional programming" },
      { phase: "OOP & Metaprogramming", weeks: "4-5", desc: "Classes, inheritance, dunder methods, decorators, context managers" },
      { phase: "Integration", weeks: "6-7", desc: "Concurrency, async loops, NumPy, Pandas, profiling, speed optimizations" },
      { phase: "Interview Practice", weeks: "8", desc: "Testing (pytest), formatting, PEP 8, packaging, virtual envs" }
    ],
    insights: [
      {
        title: "💡 Why Core Python Matters for ML/Systems",
        text: "Machine Learning is built in Python, but production code requires understanding resource limits. Understanding the **GIL** is critical when designing Kafka ingestion pipelines. Knowing how **NumPy vectorization** works prevents slow Python loops. Mastering **decorators** and **context managers** helps write clean model serving microservices.",
        color: "#FFD43B"
      }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
