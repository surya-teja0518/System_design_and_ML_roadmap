const javaCoreWeeks = [
  {
    week: 1,
    phase: "Java Core",
    title: "Java Syntax & Execution Model",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn JVM execution architecture: compilation to bytecode, JIT compiler, and classloader subsystems: [Durga Software JVM Architecture](https://www.youtube.com/watch?v=ZBJ0u9MaKtM)",
        "Write your first Java class, compile it via javac, and run it using java command: [W3Schools Java Get Started](https://www.w3schools.com/java/java_getstarted.asp)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Understand primitive data types, wrapper classes, variables, and type casting rules in Java: [W3Schools Java Data Types](https://www.w3schools.com/java/java_data_types.asp)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master flow control structures: if-else conditions, switch cases, loops (for, while, do-while), and break/continue: [W3Schools Java Control Flow](https://www.w3schools.com/java/java_conditions.asp)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Practice single-dimensional and multi-dimensional Java arrays, array operations, and utility methods: [W3Schools Java Arrays](https://www.w3schools.com/java/java_arrays.asp)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "Java Core",
    title: "Object-Oriented Programming (OOP)",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Master core OOP principles: Classes, objects, constructors, encapsulation, and access modifiers: [Programming with Mosh Java OOP](https://www.youtube.com/watch?v=hBh_X1L3Tdo)",
        "Understand static keyword, memory allocation for static variables/methods, and instance initializers: [GeeksforGeeks Static Keyword](https://www.geeksforgeeks.org/static-keyword-java/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Learn class inheritance, method overriding, super keyword, abstract classes, and interfaces: [W3Schools Java Inheritance](https://www.w3schools.com/java/java_inheritance.asp)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand compile-time vs runtime polymorphism, casting objects, and instanceOf operator: [GeeksforGeeks Polymorphism in Java](https://www.geeksforgeeks.org/polymorphism-in-java/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Study inner classes, anonymous inner classes, and modern record classes introduced in Java 14+: [Baeldung Java Record Types](https://www.baeldung.com/java-record-keyword)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Java Core",
    title: "Exception Handling & File I/O",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand checked vs unchecked exceptions, the throwable hierarchy, and try-catch-finally block structure: [GeeksforGeeks Exception Handling](https://www.geeksforgeeks.org/exceptions-in-java/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master throws and throw clauses, creating custom exception classes, and modern try-with-resources statement: [Baeldung Try-With-Resources](https://www.baeldung.com/java-try-with-resources)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn File API, reading/writing files using FileReader/FileWriter, and buffering streams: [W3Schools Java Files](https://www.w3schools.com/java/java_files.asp)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Understand object serialization and deserialization, Serializable interface, and transient fields: [GeeksforGeeks Java Serialization](https://www.geeksforgeeks.org/serialization-in-java/)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "Collections & Data Structures",
    title: "Java Collections Framework",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Master Lists: ArrayList, LinkedList, vector differences, performance characteristics, and operation costs: [GeeksforGeeks Java List](https://www.geeksforgeeks.org/list-interface-in-java-with-examples/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Sets: HashSet, LinkedHashSet, TreeSet, how hashing maps elements, and Comparable/Comparator sorting: [GeeksforGeeks Java Set](https://www.geeksforgeeks.org/set-in-java/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Maps: HashMap internals (hash index, buckets, collision resolutions), LinkedHashMap, TreeMap: [GeeksforGeeks HashMap Internals](https://www.geeksforgeeks.org/internal-working-of-hashmap-in-java/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Understand Queue, Deque, PriorityQueue, iterators, fail-fast vs fail-safe iterators: [GeeksforGeeks Java Queue](https://www.geeksforgeeks.org/queue-interface-java/)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "Modern Java Features",
    title: "Generics & Java 8 Features",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn generic classes, generic methods, bounded parameters, wildcards (? extends / ? super), and type erasure: [Baeldung Java Generics](https://www.baeldung.com/java-generics)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master lambda expressions, functional interfaces, and built-in interfaces (Predicate, Function, Consumer, Supplier): [GeeksforGeeks Functional Interfaces](https://www.geeksforgeeks.org/functional-interfaces-java/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Java Streams API: intermediate (filter, map, flatMap) and terminal (collect, reduce, foreach) pipeline steps: [Java Brains Streams API](https://www.youtube.com/watch?v=t1-YZ6bF-g0)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Understand Optional API for preventing null checks and modern LocalDate, LocalTime API (java.time): [Baeldung Java Optional Guide](https://www.baeldung.com/java-optional)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Modern Java Features",
    title: "Multithreading & Concurrency",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand multi-threaded execution models, creating threads (Thread class vs Runnable), and thread lifecycle: [GeeksforGeeks Multithreading](https://www.geeksforgeeks.org/multithreading-in-java/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master thread synchronization: synchronized blocks, intrinsic locks, reentrant locks, and wait/notify/notifyAll: [Baeldung Java Synchronization](https://www.baeldung.com/java-synchronized)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn volatile variables, thread safety patterns, ThreadLocal storage, and atomic collections (java.util.concurrent): [Baeldung Volatile Keyword](https://www.baeldung.com/java-volatile)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master Thread Pools (ExecutorService, ThreadPoolExecutor), Callable, Future, and CompletableFuture async patterns: [Baeldung Java Thread Pool](https://www.baeldung.com/thread-pool-java-and-guava)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "JVM Internals",
    title: "JVM Memory Management & GC",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand heap vs stack memory allocations, class metadata space (Metaspace), thread stacks: [Baeldung JVM Memory Model](https://www.baeldung.com/java-stack-heap)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study Garbage Collection algorithms: mark-and-sweep, copying, generational hypothesis, finding memory leaks: [GeeksforGeeks GC in Java](https://www.geeksforgeeks.org/garbage-collection-in-java/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Compare JVM GC implementations: Serial, Parallel, Garbage-First (G1 GC), and Z Garbage Collector (ZGC): [Baeldung Java Garbage Collectors](https://www.baeldung.com/jvm-garbage-collectors)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn key JVM tuning configurations (-Xms, -Xmx, GC switches) and profile memory using VisualVM: [Baeldung JVM Tuning](https://www.baeldung.com/jvm-parameters)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Database & Tooling",
    title: "Database Connectivity & Tooling",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand JDBC architecture: importing drivers, Connection, Statement, and PreparedStatement query configurations: [GeeksforGeeks JDBC Tutorial](https://www.geeksforgeeks.org/introducing-jdbc/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Learn executing database queries, parsing ResultSet, transaction boundaries, commit/rollback, and batch executions: [Baeldung JDBC Transactions](https://www.baeldung.com/java-jdbc-transaction-isolation-isolation-levels)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand build systems (Maven/Gradle), POM/build files, managing dependency versions, and build phases: [Baeldung Maven Guide](https://www.baeldung.com/maven-crash-course)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Write unit tests using JUnit 5: test annotations, assertions, parameterized testing, and mock frameworks: [freeCodeCamp JUnit 5 Testing](https://www.freecodecamp.org/news/junit-5-testing-course/)"
      ]}
    ]
  }
];

window.javaCoreWeeks = javaCoreWeeks;

window.JavaRoadmap = function({ user }) {
  const config = {
    id: "java_core",
    title: "Java Core Foundations",
    subtitle: "Language Syntax, OOP, Collections & Concurrency",
    tagline: "Synapse · Core Java Language Track",
    description: "Master the foundations of the Java programming language. Cover bytecode compilation, JVM execution, object-oriented concepts, the collections framework, file streams, multi-threading, concurrency, memory profiling, and JDBC database access.",
    accentColor: "#EC4899",
    weeks: javaCoreWeeks,
    phases: [
      { phase: "Java Core", weeks: "1-3", desc: "Bytecode compilation, JVM, OOP design patterns, abstract classes, interfaces, checked exceptions, and serialization" },
      { phase: "Collections & Concurrency", weeks: "4-6", desc: "ArrayList, HashSet, HashMap internals, lambda expressions, Streams API, thread states, reentrant locks, and Executors" },
      { phase: "JVM & Ecosystem", weeks: "7-8", desc: "JVM memory profiling, garbage collection (G1/ZGC), tuning configurations, JDBC transactions, Maven build tools, and JUnit 5" }
    ],
    insights: [
      {
        title: "💡 Why Core Java is Crucial for Engineers",
        text: "Spring Boot, Kafka, Hadoop, Spark, and Elasticsearch are built on Java/JVM systems. Knowing the language fundamentals—such as **HashMap bucket structures**, **G1 Garbage Collector sweeping algorithms**, and **CompletableFuture async blocks**—is essential to write efficient and performant backend code.",
        color: "#EC4899"
      }
    ],
    videos: [
      { title: "Programming with Mosh Java Course", url: "https://www.youtube.com/watch?v=eIrMbLyXSZs" },
      { title: "Durga Software JVM Internals", url: "https://www.youtube.com/watch?v=ZBJ0u9MaKtM" },
      { title: "Java Brains Java Streams API Tutorial", url: "https://www.youtube.com/watch?v=t1-YZ6bF-g0" },
      { title: "freeCodeCamp JUnit 5 Testing Basics", url: "https://www.freecodecamp.org/news/junit-5-testing-course/" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
