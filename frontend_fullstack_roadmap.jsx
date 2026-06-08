const frontendWeeks = [
  {
    week: 1,
    phase: "JS & TS Core",
    title: "Modern JavaScript (ES6+) & TypeScript Foundations",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Master ES6+ JavaScript features: arrow functions, template literals, destructuring, rest/spread operators, and array methods (map, filter, reduce): [W3Schools JavaScript ES6](https://www.w3schools.com/js/js_es6.asp)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Learn asynchronous JavaScript: Promises, async/await syntax, API fetching with `fetch()` and Axios, error handling: [freeCodeCamp JS Async Guide](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-in-js/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand TypeScript benefits, core syntax: basic types, interfaces, type aliases, and compiling: [freeCodeCamp TypeScript Course](https://www.youtube.com/watch?v=gp5H0Vw39yw)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master advanced TypeScript features: union types, intersection types, classes, decorators, and writing generic functions: [freeCodeCamp TypeScript Handbook](https://www.freecodecamp.org/news/learn-typescript-complete-handbook/)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "React",
    title: "React Fundamentals & Essential Hooks",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand React's virtual DOM, JSX, components (functional style), and props passing: [Programming with Mosh React Tutorial](https://www.youtube.com/watch?v=Ke90Tje7VS0)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master React state management with `useState` and state lifting patterns, handling events: [W3Schools React useState](https://www.w3schools.com/react/react_usestate.asp)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn React lifecycle hooks: `useEffect` for data fetching, event listeners, and cleanups: [W3Schools React useEffect](https://www.w3schools.com/react/react_useeffect.asp)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Implement global state sharing with the Context API and `useContext` hook to avoid prop-drilling: [W3Schools React useContext](https://www.w3schools.com/react/react_usecontext.asp)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "React",
    title: "Advanced React & Single Page App Routing",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Master client-side routing with React Router v6: configuration, nested routes, parameters (`useParams`), navigation (`useNavigate`): [Net Ninja React Router](https://www.youtube.com/watch?v=Law7wREgRbM)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Create custom React hooks to reuse stateful logic (e.g. `useFetch`, `useAuth`, `useWindowSize`): [W3Schools React Custom Hooks](https://www.w3schools.com/react/react_customhooks.asp)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master React Performance Hooks: `useMemo` for memoizing calculations, `useCallback` for caching callback functions, and `React.memo` for component memoization: [W3Schools React useMemo](https://www.w3schools.com/react/react_usememo.asp)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Study React Forms handling: controlled vs uncontrolled inputs, validating forms using Formik or React Hook Form: [W3Schools React Forms](https://www.w3schools.com/react/react_forms.asp)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "React & Styling",
    title: "Global State (Redux Toolkit) & Tailwind Styling",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn global state architecture, Redux Toolkit core concepts: store, slices, actions, and reducers: [Dave Gray Redux Toolkit Course](https://www.youtube.com/watch?v=NqzdVN2tyvQ)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Implement asynchronous actions in Redux using `createAsyncThunk` for API data fetches and dispatching actions: [freeCodeCamp Redux Async Guide](https://www.freecodecamp.org/news/how-to-use-redux-toolkit-with-async-thunks/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn modern CSS and layout styling using Tailwind CSS, responsive utility classes, and glassmorphic designs: [Tailwind CSS Official Guide](https://tailwindcss.com/docs/installation)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Build a fully-functional React CRUD application styled with Tailwind CSS and backed by Redux state management: [freeCodeCamp React Redux CRUD Tutorial](https://www.freecodecamp.org/news/build-a-crud-app-with-react-and-redux/)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "Angular",
    title: "Angular Framework Architecture & Components",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Angular core concepts, modules (`NgModule`), standalone components, and Angular CLI: [Codevolution Angular Full Course](https://www.youtube.com/watch?v=3qBXWUpoPHo)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Angular Templates: interpolation `{{}}`, property binding `[]`, event binding `()`, and two-way data binding `[()]` using FormsModule: [GeeksforGeeks Angular Data Binding](https://www.geeksforgeeks.org/data-binding-in-angular/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn built-in directives (`*ngIf`, `*ngFor`, `ngClass`, `ngStyle`) and create custom structural/attribute directives: [GeeksforGeeks Angular Directives](https://www.geeksforgeeks.org/angular-directives/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master component communication: parent-to-child data flows (`@Input`) and child-to-parent event notification (`@Output`, `EventEmitter`): [GeeksforGeeks Component Interaction](https://www.geeksforgeeks.org/component-communication-in-angular/)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Angular",
    title: "Angular Dependency Injection, Services, & Routing",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Angular Dependency Injection (DI) system, creating and injecting services to share business logic: [Telusko Angular HTTP & RxJS](https://www.youtube.com/watch?v=3h2pL996w5k)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master RxJS Observables, observers, operators (map, filter, switchMap, catchError) for handling asynchronous streams: [RxJS Official Guide](https://rxjs.dev/guide/overview)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Implement HTTP data requests using Angular's `HttpClient` module, setting up request interceptors and handling API responses: [GeeksforGeeks Angular HttpClient](https://www.geeksforgeeks.org/angular-httpclient/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master Angular Router: setting up routes, route parameters, wildcards, child routing, and protecting paths with Route Guards: [GeeksforGeeks Angular Routing](https://www.geeksforgeeks.org/angular-routing/)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Angular State",
    title: "Angular Forms & State Management (NgRx)",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Study Template-driven Forms vs Reactive Forms in Angular: setup, value tracking, and CSS state indicators: [GeeksforGeeks Angular Forms](https://www.geeksforgeeks.org/angular-forms/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Implement advanced Reactive Form validation: built-in validators, custom regex validation, and async validation: [Angular Form Validation Guide](https://angular.dev/guide/forms/form-validation)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn NgRx global state architecture in Angular: Store, Actions, Reducers, and Selectors: [Academind NgRx Store Tutorial](https://www.youtube.com/watch?v=f97ASElkPhI)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Implement NgRx Effects to handle side-effects like database fetches and background sync tasks: [NgRx Effects Official Guide](https://ngrx.io/guide/effects)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Full Integration",
    title: "Backend API Integration & Production Deployment",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn how frontend frameworks communicate with backend servers: handling CORS, cookies, API prefix routing, and headers: [GeeksforGeeks Frontend Backend Connection](https://www.geeksforgeeks.org/how-to-connect-frontend-to-backend-in-web-development/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Write a lightweight mock Express API server to serve data and handle user authentication requests: [Academind Full Stack Deployment](https://www.youtube.com/watch?v=Vz2m2cskXf0)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Build the production bundle using Angular CLI (`ng build`) and React Vite/Webpack compiles (`npm run build`), analyzing asset sizes: [Vite Build Guide](https://vitejs.dev/guide/build.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Deploy the static frontend application to Vercel, Netlify, or AWS Amplify, and configure environment variables: [Vercel Deployment Guide](https://vercel.com/docs/deployments/overview)"
      ]}
    ]
  }
];

window.frontendWeeks = frontendWeeks;

window.FrontendFullStackRoadmap = function({ user }) {
  const config = {
    id: "frontend",
    title: "React & Angular Frontend / Full Stack",
    subtitle: "Modern JavaScript to Scalable Single-Page Applications",
    tagline: "Synapse · Full Stack Engineer Track",
    description: "Master Modern JavaScript (ES6+), TypeScript types, React functional hooks, Context APIs, Redux Toolkit states, Angular components, RxJS Observable streams, NgRx state stores, and secure backend RESTful integrations.",
    accentColor: "#8B5CF6",
    weeks: frontendWeeks,
    phases: [
      { phase: "JS/TS Foundations", weeks: "1", desc: "Modern ES6+ syntax, async promises, API calls, TypeScript type definitions, generics" },
      { phase: "React SPA Development", weeks: "2-4", desc: "React virtual DOM, props, hooks (state/effect/context), React Router v6, Redux Toolkit, Tailwind CSS designs" },
      { phase: "Angular Development", weeks: "5-8", desc: "Angular modules, component bindings, directives, Dependency Injection services, RxJS Observables, NgRx store, API hosting deploys" }
    ],
    insights: [
      {
        title: "💡 Why React and Angular are Critical",
        text: "Building dynamic user interfaces requires master-level knowledge of modern frameworks. **React** leads the global startup/consumer market with its virtual-DOM hooks model, while **Angular** is the standard for structured, enterprise enterprise architectures. Understanding **RxJS Streams** and **Redux global states** allows you to build high-performance client applications.",
        color: "#8B5CF6"
      }
    ],
    videos: [
      { title: "Programming with Mosh React Course", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0" },
      { title: "Codevolution Angular Full Course", url: "https://www.youtube.com/watch?v=3qBXWUpoPHo" },
      { title: "freeCodeCamp TypeScript Tutorial", url: "https://www.youtube.com/watch?v=gp5H0Vw39yw" },
      { title: "Dave Gray Redux Toolkit Guide", url: "https://www.youtube.com/watch?v=NqzdVN2tyvQ" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
