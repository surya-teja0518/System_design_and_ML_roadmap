const javaWeeks = [
  {
    week: 1,
    phase: "Java Core",
    title: "Java Foundations & Programming Basics",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Java Platform: JDK vs JRE vs JVM, compiler execution flow, bytecodes: [Programming with Mosh Java Intro](https://www.youtube.com/watch?v=eIrMbLyXSZs)",
        "Understand primitive data types, wrapper classes, variables, operators, and formatting console output: [W3Schools Java Data Types](https://www.w3schools.com/java/java_data_types.asp)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Java flow control: if-else statements, switch cases, loops (for, while, do-while), and break/continue keywords: [W3Schools Java Control Flow](https://www.w3schools.com/java/java_conditions.asp)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn Java Arrays: single-dimensional, multi-dimensional, sorting, and array manipulations: [W3Schools Java Arrays](https://www.w3schools.com/java/java_arrays.asp)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master Exception Handling: try-catch-finally blocks, throw/throws keywords, checked vs unchecked exceptions, custom exceptions: [GeeksforGeeks Java Exception Handling](https://www.geeksforgeeks.org/exceptions-in-java/)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "Java Core",
    title: "Object-Oriented Java & Collections",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Master OOP Principles in Java: Classes, objects, constructors, overloading, overriding, encapsulation: [Durga Software OOP Concepts](https://www.youtube.com/watch?v=hBh_X1L3Tdo)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Learn inheritance models (super keyword, interfaces, abstract classes) and polymorphism (runtime vs compile-time): [W3Schools Java Inheritance](https://www.w3schools.com/java/java_inheritance.asp)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Java Collections Framework: List (ArrayList, LinkedList), Set (HashSet, TreeSet), Map (HashMap, TreeMap): [Java Collections Guide](https://www.geeksforgeeks.org/collections-in-java/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Study Java Generics, Comparators vs Comparable, and functional programming with Java Streams API and Lambda expressions: [GeeksforGeeks Java Streams](https://www.geeksforgeeks.org/java-8-streams-with-examples/)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Spring Core",
    title: "Maven Build System & Spring Core Foundations",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Maven lifecycle, POM.xml files, managing dependencies, scope, and packaging: [Maven Crash Course](https://maven.apache.org/guides/getting-started/index.html)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Understand Spring Framework fundamentals: Inversion of Control (IoC), Dependency Injection (DI), Spring Beans: [Telusko Spring Framework Tutorial](https://www.youtube.com/watch?v=Xz0WwzJSS8M)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Spring configuration options: XML configuration, Java-based configuration (`@Configuration`, `@Bean`), annotation-based configuration (`@Component`, `@Autowired`): [GeeksforGeeks Spring Configuration](https://www.geeksforgeeks.org/spring-bean-configuration/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn Spring Bean scopes (Singleton, Prototype, Request, Session) and bean lifecycle callbacks (`@PostConstruct`, `@PreDestroy`): [Baeldung Spring Bean Scopes](https://www.baeldung.com/spring-bean-scopes)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "Spring Boot APIs",
    title: "Spring Boot & RESTful Web Service Design",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Spring Boot auto-configuration, starter POMs, application entry point (`@SpringBootApplication`): [Amigoscode Spring Boot Full Course](https://www.youtube.com/watch?v=9SGDpanrc8U)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Build REST API controllers: `@RestController`, `@RequestMapping`, `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`: [Baeldung Spring RestController](https://www.baeldung.com/spring-controllers)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master request parameters extraction: `@PathVariable`, `@RequestParam`, `@RequestBody`, `@RequestHeader`, and JSON parsing: [Baeldung Spring RequestParam vs PathVariable](https://www.baeldung.com/spring-requestparam-vs-pathvariable)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Implement REST API best practices: HTTP status codes, exception handling with `@ControllerAdvice` and `@ExceptionHandler`, DTO patterns: [Baeldung Spring Exception Handling](https://www.baeldung.com/exception-handling-for-rest-with-spring)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "Database JPA",
    title: "Relational Database Integration (JPA & Hibernate)",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Java Persistence API (JPA) and Hibernate ORM: Entity mappings (`@Entity`, `@Table`, `@Id`, `@GeneratedValue`): [Telusko Spring Data JPA](https://www.youtube.com/watch?v=yDPhM6y7g-4)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Model Entity Relationships: `@OneToOne`, `@OneToMany`, `@ManyToOne`, `@ManyToMany` mappings, cascade types, lazy vs eager fetching: [Baeldung Hibernate Entity Relationships](https://www.baeldung.com/jpa-one-to-one)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Spring Data JPA repositories: `JpaRepository` interface, custom query methods, `@Query` annotation (JPQL & Native SQL): [Baeldung Spring Data JPA Query](https://www.baeldung.com/spring-data-jpa-query)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn database transactions: ACID properties, `@Transactional` configuration, transaction propagation and isolation levels: [Baeldung Spring @Transactional](https://www.baeldung.com/transaction-configuration-with-jpa-and-spring)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Spring Security",
    title: "Security Foundations: Authentication & JWT",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Spring Security architecture: AuthenticationManager, Provider, FilterChain, SecurityContextHolder: [Java Guides Spring Security JWT](https://www.youtube.com/watch?v=KxqlJblhzfI)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Configure basic and form-based authentication, user roles and authorities, method-level security (`@PreAuthorize`): [Baeldung Spring Security Method Security](https://www.baeldung.com/spring-security-method-security)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Implement JSON Web Tokens (JWT) for stateless authentication: token generation, filter implementation, authorization checks: [freeCodeCamp Spring Security JWT Tutorial](https://www.freecodecamp.org/news/spring-boot-security-and-oauth2/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Handle CORS (Cross-Origin Resource Sharing), CSRF (Cross-Site Request Forgery) protections, and password hashing with BCrypt: [Baeldung Spring Security CORS & CSRF](https://www.baeldung.com/spring-security-cors-and-csrf)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Microservices",
    title: "Microservices Architecture & Cloud Integration",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Monolithic vs Microservices architecture, service discovery patterns: [Java Brains Spring Boot Microservices](https://www.youtube.com/watch?v=y8IU14d5V54)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Implement Service Discovery using Netflix Eureka Server and Client discovery registration: [Baeldung Spring Cloud Eureka](https://www.baeldung.com/spring-cloud-netflix-eureka)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Build an API Gateway using Spring Cloud Gateway to route client requests, handle CORS, and secure endpoints: [Baeldung Spring Cloud Gateway](https://www.baeldung.com/spring-cloud-custom-gateway-filter)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master Inter-service communication: synchronous REST calls via `RestTemplate` or `WebClient` and declarative REST clients with Spring Cloud OpenFeign: [Baeldung Spring Cloud OpenFeign](https://www.baeldung.com/spring-cloud-openfeign)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Testing & Deploy",
    title: "Unit Testing, Actuator, & Production Deployment",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Spring Boot Unit Testing: writing unit tests using JUnit 5, mocking dependencies with Mockito, testing controllers with `@WebMvcTest`: [Amigoscode Spring Boot Testing](https://www.youtube.com/watch?v=8Sg1Db52XSs)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Write integration tests using `@SpringBootTest` and configuring test profiles with H2 in-memory databases: [Baeldung Spring Boot Integration Tests](https://www.baeldung.com/spring-boot-testing)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Configure Spring Boot Actuator for health checks, metrics, and monitoring, alongside SLF4J/Logback configurations: [Baeldung Spring Boot Actuator](https://www.baeldung.com/spring-boot-actuators)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Deploy Spring Boot application: Dockerize the application using multi-stage builds and deploy to AWS Elastic Beanstalk or Render: [docker docs Spring Boot Guide](https://docs.docker.com/language/java/build-images/)"
      ]}
    ]
  }
];

window.javaWeeks = javaWeeks;

window.JavaFullStackRoadmap = function({ user }) {
  const config = {
    id: "java",
    title: "Java & Spring Boot Full Stack",
    subtitle: "Core OOP to Enterprise Microservices",
    tagline: "Synapse · Full Stack Developer Track",
    description: "Build robust backends and complete RESTful architectures using Core Java, OOP principles, Maven build lifecycles, Spring Framework dependencies, Spring Data JPA entities, JWT security filters, and microservices.",
    accentColor: "#F59E0B",
    weeks: javaWeeks,
    phases: [
      { phase: "Java Core", weeks: "1-2", desc: "JVM compilation, exceptions, OOP design, Collections, Streams, Lambda expressions" },
      { phase: "Spring Framework", weeks: "3-5", desc: "Maven lifecycles, Inversion of Control (IoC), Dependency Injection, Spring Boot REST APIs, Spring Data JPA Hibernate entities" },
      { phase: "Security & Scale", weeks: "6-8", desc: "Spring Security JWT authentication filters, microservices routing (Eureka/Gateway), JUnit/Mockito testing, Docker cloud deploys" }
    ],
    insights: [
      {
        title: "💡 Why Java and Spring Boot is Essential",
        text: "Java is the language of enterprise computing. Most large-scale backends, banking applications, and backend API services are built on the **Spring Boot** framework. Understanding **JPA/Hibernate** relationship mappings, **Spring Security JWT** interceptor chains, and **Eureka microservices** enables you to build cloud-native enterprise-grade products.",
        color: "#F59E0B"
      }
    ],
    videos: [
      { title: "Programming with Mosh Java Course", url: "https://www.youtube.com/watch?v=eIrMbLyXSZs" },
      { title: "Amigoscode Spring Boot Tutorial", url: "https://www.youtube.com/watch?v=9SGDpanrc8U" },
      { title: "Telusko Spring Framework Series", url: "https://www.youtube.com/watch?v=Xz0WwzJSS8M" },
      { title: "Java Guides Spring Security with JWT", url: "https://www.youtube.com/watch?v=KxqlJblhzfI" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
