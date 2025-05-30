const weeks = [
  // Week 1-3 (Existing data remains unchanged)
  // ... (Your provided Weeks 1-3 here)
  {
    title: "Week 1: JavaScript & C++ Fundamentals",
    startDate: "June 3",
    days: [
      {
        title: "Monday",
        date: "June 3",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "C++ setup, Hello World, variables, data types",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (JS)",
            desc: "JS syntax, console.log, math operations, variables",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Build tip calculator (JS)",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Data types review, practice problems",
            completed: false,
          },
        ],
        resources: [
          { name: "Learn C++", url: "https://www.learncpp.com/" },
          { name: "JavaScript.info", url: "https://javascript.info/" },
        ],
      },
      {
        title: "Tuesday",
        date: "June 4",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "C++ operators, user input, conditionals",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (JS)",
            desc: "Comparison operators, conditionals, truthy/falsy",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Number guessing game (JS)",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Operator precedence, conditional logic",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Operators",
            url: "https://www.w3schools.com/cpp/cpp_operators.asp",
          },
          {
            name: "JS Conditionals",
            url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals",
          },
        ],
      },
      {
        title: "Wednesday",
        date: "June 5",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Loops (for, while), control flow",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (JS)",
            desc: "Loops (for, while), array basics, iteration",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Multiplication table generator",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Loop optimization, time complexity basics",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Loops",
            url: "https://www.programiz.com/cpp-programming/for-loop",
          },
          {
            name: "JS Loops",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
          },
        ],
      },
      {
        title: "Thursday",
        date: "June 6",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Functions, parameters, return values",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (JS)",
            desc: "JS functions, scope, arrow functions",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Temperature converter (C/F)",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Function overloading, default parameters",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Functions",
            url: "https://www.w3schools.com/cpp/cpp_functions.asp",
          },
          {
            name: "JS Functions",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
          },
        ],
      },
      {
        title: "Friday",
        date: "June 7",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Arrays, multi-dimensional arrays",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (JS)",
            desc: "Array methods (map, filter, reduce)",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "To-do list manager (console)",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Array traversal, searching algorithms",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Arrays",
            url: "https://www.w3schools.com/cpp/cpp_arrays.asp",
          },
          {
            name: "JS Array Methods",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
          },
        ],
      },
      {
        title: "Saturday",
        date: "June 8",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Strings, string manipulation",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (JS)",
            desc: "Objects, JSON, destructuring",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Simple shopping cart system",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "String algorithms, palindrome check",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Strings",
            url: "https://www.w3schools.com/cpp/cpp_strings.asp",
          },
          {
            name: "JS Objects",
            url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics",
          },
        ],
      },
    ],
  },
  {
    title: "Week 2: React Foundations & C++ OOP",
    startDate: "June 10",
    days: [
      {
        title: "Monday",
        date: "June 10",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Classes, objects, methods",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "JSX, components, props",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "React Hello World setup",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "OOP principles, encapsulation",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Classes",
            url: "https://www.w3schools.com/cpp/cpp_classes.asp",
          },
          {
            name: "React Components",
            url: "https://reactjs.org/docs/components-and-props.html",
          },
        ],
      },
      {
        title: "Tuesday",
        date: "June 11",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Constructors, destructors",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "State management with useState",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Counter app with state",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Initialization lists, access specifiers",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Constructors",
            url: "https://en.cppreference.com/w/cpp/language/constructor",
          },
          {
            name: "React State",
            url: "https://reactjs.org/docs/hooks-state.html",
          },
        ],
      },
      {
        title: "Wednesday",
        date: "June 12",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Inheritance, polymorphism",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "Event handling, forms",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Login form UI",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Polymorphism in OOP",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Inheritance",
            url: "https://www.programiz.com/cpp-programming/inheritance",
          },
          {
            name: "React Events",
            url: "https://reactjs.org/docs/handling-events.html",
          },
        ],
      },
      {
        title: "Thursday",
        date: "June 13",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Pointers introduction",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "Conditional rendering",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Tabbed interface component",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Memory addresses, pointer arithmetic",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Pointers",
            url: "https://www.learncpp.com/cpp-tutorial/pointers/",
          },
          {
            name: "Conditional Rendering",
            url: "https://reactjs.org/docs/conditional-rendering.html",
          },
        ],
      },
      {
        title: "Friday",
        date: "June 14",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "LeetCode Arrays problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "useEffect hook basics",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Persist todo items locally",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Array rotation problems",
            completed: false,
          },
        ],
        resources: [
          { name: "LeetCode Arrays", url: "https://leetcode.com/tag/array/" },
          {
            name: "useEffect Hook",
            url: "https://reactjs.org/docs/hooks-effect.html",
          },
        ],
      },
      {
        title: "Saturday",
        date: "June 15",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Linked list fundamentals",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "Component libraries",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Responsive navbar",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Linked list implementation",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Linked Lists",
            url: "https://www.geeksforgeeks.org/data-structures/linked-list/",
          },
          { name: "Material UI", url: "https://mui.com/" },
        ],
      },
    ],
  },
  {
    title: "Week 3: Advanced React & C++ DSA Basics",
    startDate: "June 17",
    days: [
      {
        title: "Monday",
        date: "June 17",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Arrays, vectors, memory management",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "React Router, navigation",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Multi-page todo app",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Array operations, vector resizing",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Vectors",
            url: "https://en.cppreference.com/w/cpp/container/vector",
          },
          { name: "React Router", url: "https://reactrouter.com/" },
        ],
      },
      {
        title: "Tuesday",
        date: "June 18",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Linked lists, pointers",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "Custom hooks, reusable logic",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Dark/light mode toggle",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Pointer arithmetic, memory management",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Linked Lists",
            url: "https://www.geeksforgeeks.org/data-structures/linked-list/",
          },
          {
            name: "React Custom Hooks",
            url: "https://reactjs.org/docs/hooks-custom.html",
          },
        ],
      },
      {
        title: "Wednesday",
        date: "June 19",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Recursion, stack frames",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "Context API for state management",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Theme switcher with context",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Recursive algorithms, base cases",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Recursion",
            url: "https://www.programiz.com/cpp-programming/recursion",
          },
          {
            name: "React Context",
            url: "https://reactjs.org/docs/context.html",
          },
        ],
      },
      {
        title: "Thursday",
        date: "June 20",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Time complexity analysis",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "Redux fundamentals",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Redux counter implementation",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Big O notation, complexity classes",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Time Complexity",
            url: "https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/",
          },
          { name: "Redux", url: "https://redux.js.org/" },
        ],
      },
      {
        title: "Friday",
        date: "June 21",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Sorting algorithms",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "API calls with Axios",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Weather app UI with API data",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Bubble sort, insertion sort",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Sorting Algorithms",
            url: "https://www.geeksforgeeks.org/sorting-algorithms/",
          },
          { name: "Axios", url: "https://axios-http.com/" },
        ],
      },
      {
        title: "Saturday",
        date: "June 22",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "LeetCode Arrays problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (React)",
            desc: "Component testing basics",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Add analytics dashboard",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Time complexity analysis",
            completed: false,
          },
        ],
        resources: [
          { name: "LeetCode", url: "https://leetcode.com/" },
          {
            name: "React Testing",
            url: "https://reactjs.org/docs/testing.html",
          },
        ],
      },
    ],
  },
  // WEEK 4: Node/Express + C++ STL
  {
    title: "Week 4: Node/Express + C++ STL",
    startDate: "June 24",
    days: [
      // Monday (June 24) - Existing
      // Tuesday
      {
        title: "Tuesday",
        date: "June 25",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "STL lists, stacks, queues",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Backend)",
            desc: "Express middleware, routing",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "REST API for todo app",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Stack/queue implementation",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ STL Containers",
            url: "https://www.geeksforgeeks.org/containers-cpp-stl/",
          },
          {
            name: "Express Routing",
            url: "https://expressjs.com/en/guide/routing.html",
          },
        ],
      },
      // Wednesday
      {
        title: "Wednesday",
        date: "June 26",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "STL sets, maps",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Backend)",
            desc: "Error handling, async/await",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Error middleware implementation",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Hashmap implementation",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ STL Map",
            url: "https://www.geeksforgeeks.org/map-associative-containers-the-c-standard-template-library-stl/",
          },
          {
            name: "Express Error Handling",
            url: "https://expressjs.com/en/guide/error-handling.html",
          },
        ],
      },
      // Thursday
      {
        title: "Thursday",
        date: "June 27",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "LeetCode Hashmap problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Backend)",
            desc: "RESTful API design principles",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "CRUD API for blog posts",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Collision resolution techniques",
            completed: false,
          },
        ],
        resources: [
          {
            name: "LeetCode Hashmap",
            url: "https://leetcode.com/tag/hash-table/",
          },
          { name: "REST API Tutorial", url: "https://restfulapi.net/" },
        ],
      },
      // Friday
      {
        title: "Friday",
        date: "June 28",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Binary search fundamentals",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Backend)",
            desc: "Authentication with JWT",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "User registration API",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Binary search variations",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Binary Search",
            url: "https://leetcode.com/explore/learn/card/binary-search/",
          },
          { name: "JWT Authentication", url: "https://jwt.io/introduction" },
        ],
      },
      // Saturday
      {
        title: "Saturday",
        date: "June 29",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "LeetCode Binary Search problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Backend)",
            desc: "Password hashing, security",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Login system with JWT",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Time complexity analysis",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Binary Search Problems",
            url: "https://leetcode.com/tag/binary-search/",
          },
          {
            name: "Bcrypt Security",
            url: "https://www.npmjs.com/package/bcrypt",
          },
        ],
      },
    ],
  },

  // WEEK 5: MongoDB + C++ OOP Advanced
  {
    title: "Week 5: MongoDB + C++ OOP Advanced",
    startDate: "July 1",
    days: [
      // Monday
      {
        title: "Monday",
        date: "July 1",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Templates, generic programming",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Database)",
            desc: "MongoDB CRUD operations",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Connect Express to MongoDB",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Template specialization",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Templates",
            url: "https://www.learncpp.com/cpp-tutorial/function-templates/",
          },
          {
            name: "MongoDB CRUD",
            url: "https://www.mongodb.com/docs/manual/crud/",
          },
        ],
      },
      // Tuesday
      {
        title: "Tuesday",
        date: "July 2",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Exception handling",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Database)",
            desc: "Mongoose schemas, models",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "User model implementation",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Exception safety guarantees",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Exceptions",
            url: "https://www.tutorialspoint.com/cplusplus/cpp_exceptions_handling.htm",
          },
          {
            name: "Mongoose Guide",
            url: "https://mongoosejs.com/docs/guide.html",
          },
        ],
      },
      // Wednesday
      {
        title: "Wednesday",
        date: "July 3",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Smart pointers",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Database)",
            desc: "Data validation, middleware",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Data validation for APIs",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "RAII pattern",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Smart Pointers",
            url: "https://www.geeksforgeeks.org/smart-pointers-cpp/",
          },
          {
            name: "Mongoose Validation",
            url: "https://mongoosejs.com/docs/validation.html",
          },
        ],
      },
      // Thursday
      {
        title: "Thursday",
        date: "July 4",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Move semantics",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Database)",
            desc: "Relationships, population",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Post model with user reference",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "rvalue references",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Move Semantics",
            url: "https://en.cppreference.com/w/cpp/language/move_constructor",
          },
          {
            name: "Mongoose Populate",
            url: "https://mongoosejs.com/docs/populate.html",
          },
        ],
      },
      // Friday
      {
        title: "Friday",
        date: "July 5",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "LeetCode OOP problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Database)",
            desc: "Aggregation pipeline",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "User statistics endpoint",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Class design patterns",
            completed: false,
          },
        ],
        resources: [
          { name: "OOP Problems", url: "https://leetcode.com/tag/oop/" },
          {
            name: "MongoDB Aggregation",
            url: "https://www.mongodb.com/docs/manual/aggregation/",
          },
        ],
      },
      // Saturday
      {
        title: "Saturday",
        date: "July 6",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Design patterns review",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "MERN Learning (Database)",
            desc: "Indexing, performance",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Development",
            desc: "Optimize slow queries",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Singleton pattern",
            completed: false,
          },
        ],
        resources: [
          {
            name: "C++ Design Patterns",
            url: "https://refactoring.guru/design-patterns/cpp",
          },
          {
            name: "MongoDB Indexes",
            url: "https://www.mongodb.com/docs/manual/indexes/",
          },
        ],
      },
    ],
  },

  // WEEK 6: Project 1 - DevConnector
  {
    title: "Week 6: Project 1 - DevConnector",
    startDate: "July 8",
    days: [
      // Monday
      {
        title: "Monday",
        date: "July 8",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Tree fundamentals",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Project Planning",
            desc: "DevConnector features, ERD",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Setup",
            desc: "Initialize MERN stack, Git repo",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Binary tree properties",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Trees",
            url: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
          },
          {
            name: "MERN Boilerplate",
            url: "https://github.com/mernjs/mern-starter",
          },
        ],
      },
      // Tuesday
      {
        title: "Tuesday",
        date: "July 9",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Binary tree traversal",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Backend Development",
            desc: "User auth implementation",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Frontend Development",
            desc: "Auth forms (register/login)",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "DFS vs BFS",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Tree Traversal",
            url: "https://leetcode.com/explore/learn/card/data-structure-tree/",
          },
          {
            name: "JWT Auth Tutorial",
            url: "https://www.bezkoder.com/node-js-express-login-mongodb/",
          },
        ],
      },
      // Wednesday
      {
        title: "Wednesday",
        date: "July 10",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "LeetCode Tree problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Backend Development",
            desc: "Profile API endpoints",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Frontend Development",
            desc: "Profile creation UI",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Tree height/diameter",
            completed: false,
          },
        ],
        resources: [
          { name: "Tree Problems", url: "https://leetcode.com/tag/tree/" },
          { name: "React Formik", url: "https://formik.org/" },
        ],
      },
      // Thursday
      {
        title: "Thursday",
        date: "July 11",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "BST fundamentals",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Backend Development",
            desc: "Post model and API",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Frontend Development",
            desc: "Post feed UI",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "BST validation",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Binary Search Trees",
            url: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/",
          },
          {
            name: "React Infinite Scroll",
            url: "https://www.npmjs.com/package/react-infinite-scroll-component",
          },
        ],
      },
      // Friday
      {
        title: "Friday",
        date: "July 12",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "LeetCode BST problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Feature Implementation",
            desc: "Like/comment functionality",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "UI Enhancement",
            desc: "Real-time updates",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "BST operations",
            completed: false,
          },
        ],
        resources: [
          {
            name: "BST Problems",
            url: "https://leetcode.com/tag/binary-search-tree/",
          },
          { name: "Socket.io", url: "https://socket.io/" },
        ],
      },
      // Saturday
      {
        title: "Saturday",
        date: "July 13",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Heap fundamentals",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Testing & Debugging",
            desc: "Full app testing",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Deployment Prep",
            desc: "Dockerize application",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Heap operations",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Heaps",
            url: "https://www.geeksforgeeks.org/heap-data-structure/",
          },
          {
            name: "Docker for Node.js",
            url: "https://nodejs.org/en/docs/guides/nodejs-docker-webapp/",
          },
        ],
      },
    ],
  },

  // WEEK 7: Project 2 - E-Commerce
  {
    title: "Week 7: Project 2 - E-Commerce",
    startDate: "July 15",
    days: [
      // Monday
      {
        title: "Monday",
        date: "July 15",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Heap problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Project Planning",
            desc: "E-commerce features, architecture",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Setup",
            desc: "Initialize project, DB schema",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Priority queues",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Heap Problems",
            url: "https://leetcode.com/tag/heap-priority-queue/",
          },
          {
            name: "E-commerce Reference",
            url: "https://github.com/jeffersonRibeiro/react-shopping-cart",
          },
        ],
      },
      // Tuesday
      {
        title: "Tuesday",
        date: "July 16",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Graph fundamentals",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Backend Development",
            desc: "Product API, categories",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Frontend Development",
            desc: "Product listing page",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Graph representations",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Graphs",
            url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
          },
          {
            name: "React Pagination",
            url: "https://www.npmjs.com/package/react-paginate",
          },
        ],
      },
      // Wednesday
      {
        title: "Wednesday",
        date: "July 17",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Graph traversal",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Backend Development",
            desc: "Shopping cart API",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Frontend Development",
            desc: "Cart functionality UI",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Shortest path concepts",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Graph Traversal",
            url: "https://leetcode.com/explore/learn/card/graph/",
          },
          { name: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
        ],
      },
      // Thursday
      {
        title: "Thursday",
        date: "July 18",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "LeetCode Graph problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Payment Integration",
            desc: "Stripe/Paypal setup",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Checkout Flow",
            desc: "Order processing system",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Topological sort",
            completed: false,
          },
        ],
        resources: [
          { name: "Graph Problems", url: "https://leetcode.com/tag/graph/" },
          { name: "Stripe Docs", url: "https://stripe.com/docs" },
        ],
      },
      // Friday
      {
        title: "Friday",
        date: "July 19",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Dynamic programming basics",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Admin Dashboard",
            desc: "Order management system",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Search & Filters",
            desc: "Implement product search",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Memoization",
            completed: false,
          },
        ],
        resources: [
          {
            name: "DP Basics",
            url: "https://www.geeksforgeeks.org/dynamic-programming/",
          },
          {
            name: "React Admin",
            url: "https://github.com/marmelab/react-admin",
          },
        ],
      },
      // Saturday
      {
        title: "Saturday",
        date: "July 20",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "DP problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Testing & Optimization",
            desc: "Performance testing",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Deployment",
            desc: "Deploy to Render/Vercel",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Tabulation",
            completed: false,
          },
        ],
        resources: [
          {
            name: "DP Problems",
            url: "https://leetcode.com/tag/dynamic-programming/",
          },
          {
            name: "Render Deployment",
            url: "https://render.com/docs/deploy-node-express-app",
          },
        ],
      },
    ],
  },

  // WEEK 8: DSA Intensive Focus
  {
    title: "Week 8: DSA Intensive Focus",
    startDate: "July 22",
    days: [
      // Monday
      {
        title: "Monday",
        date: "July 22",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Arrays & Strings deep dive",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "DSA Patterns",
            desc: "Two pointers, sliding window",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "LeetCode Practice",
            desc: "Solve 5 array problems",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Review Solutions",
            desc: "Analyze time/space complexity",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Two Pointers",
            url: "https://leetcode.com/tag/two-pointers/",
          },
          {
            name: "Sliding Window",
            url: "https://leetcode.com/tag/sliding-window/",
          },
        ],
      },
      // Tuesday
      {
        title: "Tuesday",
        date: "July 23",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Linked lists advanced",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "DSA Patterns",
            desc: "Fast & slow pointers",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "LeetCode Practice",
            desc: "Solve 5 linked list problems",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Review Solutions",
            desc: "Compare iterative/recursive",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Linked List Problems",
            url: "https://leetcode.com/tag/linked-list/",
          },
          {
            name: "Fast & Slow Pointers",
            url: "https://leetcode.com/problems/linked-list-cycle/solution/",
          },
        ],
      },
      // Wednesday
      {
        title: "Wednesday",
        date: "July 24",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Trees advanced",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "DSA Patterns",
            desc: "BFS/DFS variations",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "LeetCode Practice",
            desc: "Solve 5 tree problems",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Review Solutions",
            desc: "Recursive to iterative",
            completed: false,
          },
        ],
        resources: [
          { name: "Tree Problems", url: "https://leetcode.com/tag/tree/" },
          {
            name: "Tree Traversals",
            url: "https://leetcode.com/explore/learn/card/data-structure-tree/",
          },
        ],
      },
      // Thursday
      {
        title: "Thursday",
        date: "July 25",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Graphs advanced",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "DSA Patterns",
            desc: "Union-Find, Dijkstra",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "LeetCode Practice",
            desc: "Solve 5 graph problems",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Review Solutions",
            desc: "Pathfinding algorithms",
            completed: false,
          },
        ],
        resources: [
          { name: "Graph Problems", url: "https://leetcode.com/tag/graph/" },
          {
            name: "Dijkstra Algorithm",
            url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
          },
        ],
      },
      // Friday
      {
        title: "Friday",
        date: "July 26",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Dynamic programming advanced",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "DSA Patterns",
            desc: "Knapsack, LCS patterns",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "LeetCode Practice",
            desc: "Solve 5 DP problems",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Review Solutions",
            desc: "State transition analysis",
            completed: false,
          },
        ],
        resources: [
          {
            name: "DP Problems",
            url: "https://leetcode.com/tag/dynamic-programming/",
          },
          {
            name: "DP Patterns",
            url: "https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns",
          },
        ],
      },
      // Saturday
      {
        title: "Saturday",
        date: "July 27",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "Mock Interview",
            desc: "Solve 2 DSA problems (45 mins each)",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Complexity Analysis",
            desc: "Big-O deep dive",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Weakness Review",
            desc: "Focus on problem areas",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Plan Optimization",
            desc: "Adjust study priorities",
            completed: false,
          },
        ],
        resources: [
          { name: "Pramp", url: "https://www.pramp.com/" },
          { name: "Big-O Cheatsheet", url: "https://www.bigocheatsheet.com/" },
        ],
      },
    ],
  },

  // WEEK 9: Project 3 - Unique App
  {
    title: "Week 9: Project 3 - Unique App",
    startDate: "July 29",
    days: [
      // Monday
      {
        title: "Monday",
        date: "July 29",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Trie fundamentals",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Project Ideation",
            desc: "Finalize unique app concept",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Tech Stack Selection",
            desc: "Choose libraries/services",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Trie applications",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Tries",
            url: "https://www.geeksforgeeks.org/trie-insert-and-search/",
          },
          {
            name: "Project Ideas",
            url: "https://github.com/florinpop17/app-ideas",
          },
        ],
      },
      // Tuesday
      {
        title: "Tuesday",
        date: "July 30",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "LeetCode Trie problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Backend Architecture",
            desc: "Design API endpoints",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Frontend Architecture",
            desc: "Component structure",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Autocomplete systems",
            completed: false,
          },
        ],
        resources: [
          { name: "Trie Problems", url: "https://leetcode.com/tag/trie/" },
          {
            name: "API Design",
            url: "https://swagger.io/resources/articles/best-practices-in-api-design/",
          },
        ],
      },
      // Wednesday
      {
        title: "Wednesday",
        date: "July 31",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Advanced DP problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Core Feature Implementation",
            desc: "Build main functionality",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "UI/UX Design",
            desc: "Implement responsive design",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "State machine design",
            completed: false,
          },
        ],
        resources: [
          {
            name: "DP Problems",
            url: "https://leetcode.com/tag/dynamic-programming/",
          },
          {
            name: "React Beautiful DnD",
            url: "https://github.com/atlassian/react-beautiful-dnd",
          },
        ],
      },
      // Thursday
      {
        title: "Thursday",
        date: "August 1",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "System design basics",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Integration Testing",
            desc: "Test critical workflows",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Performance Optimization",
            desc: "Improve load times",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Load balancing concepts",
            completed: false,
          },
        ],
        resources: [
          {
            name: "System Design Primer",
            url: "https://github.com/donnemartin/system-design-primer",
          },
          {
            name: "React Profiler",
            url: "https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html",
          },
        ],
      },
      // Friday
      {
        title: "Friday",
        date: "August 2",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "LeetCode system design",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Security Implementation",
            desc: "Add auth, rate limiting",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Documentation",
            desc: "Write README, API docs",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "API security best practices",
            completed: false,
          },
        ],
        resources: [
          {
            name: "System Design Questions",
            url: "https://leetcode.com/discuss/interview-question/system-design/",
          },
          { name: "Swagger Docs", url: "https://swagger.io/specification/" },
        ],
      },
      // Saturday
      {
        title: "Saturday",
        date: "August 3",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "Mock Interview",
            desc: "Full-stack problem solving",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Deployment",
            desc: "CI/CD pipeline setup",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Demo Preparation",
            desc: "Record project walkthrough",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Project Retrospective",
            desc: "Identify improvements",
            completed: false,
          },
        ],
        resources: [
          {
            name: "GitHub Actions",
            url: "https://github.com/features/actions",
          },
          {
            name: "Vercel CI/CD",
            url: "https://vercel.com/docs/concepts/deployments/git",
          },
        ],
      },
    ],
  },

  // WEEK 10: Resume & Portfolio
  {
    title: "Week 10: Resume & Portfolio",
    startDate: "August 5",
    days: [
      // Monday
      {
        title: "Monday",
        date: "August 5",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Review core concepts",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Portfolio Website",
            desc: "Design personal portfolio",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Showcase",
            desc: "Prepare project demos",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Complexity analysis",
            completed: false,
          },
        ],
        resources: [
          { name: "LeetCode Review", url: "https://leetcode.com/explore/" },
          {
            name: "Portfolio Examples",
            url: "https://github.com/emmabostian/developer-portfolios",
          },
        ],
      },
      // Tuesday
      {
        title: "Tuesday",
        date: "August 6",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Solve 3 medium problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Resume Building",
            desc: "Draft technical resume",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Achievement Highlighting",
            desc: "Quantify project impacts",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Algorithm tradeoffs",
            completed: false,
          },
        ],
        resources: [
          { name: "Resume Builder", url: "https://resume.io/" },
          {
            name: "Tech Resume Guide",
            url: "https://www.freecodecamp.org/news/writing-a-killer-software-engineering-resume-b11c91ef699d/",
          },
        ],
      },
      // Wednesday
      {
        title: "Wednesday",
        date: "August 7",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "Mock Interview",
            desc: "Behavioral questions",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "LinkedIn Optimization",
            desc: "Complete profile, network",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "GitHub Cleanup",
            desc: "Organize repositories",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Profile Review",
            desc: "Get feedback on profiles",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Behavioral Questions",
            url: "https://github.com/viraptor/reverse-interview",
          },
          {
            name: "LinkedIn Checklist",
            url: "https://www.linkedin.com/pulse/linkedin-profile-checklist-2021-stephen-payne/",
          },
        ],
      },
      // Thursday
      {
        title: "Thursday",
        date: "August 8",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Solve 3 hard problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Cover Letter Crafting",
            desc: "Personalized templates",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Online Presence",
            desc: "Write technical blog post",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Problem-solving patterns",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Cover Letter Guide",
            url: "https://www.themuse.com/advice/3-cover-letter-templates-for-any-type-of-job-seeker",
          },
          { name: "Dev.to", url: "https://dev.to/" },
        ],
      },
      // Friday
      {
        title: "Friday",
        date: "August 9",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "Mock Interview",
            desc: "Full technical interview",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Portfolio Deployment",
            desc: "Deploy to Vercel/Netlify",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Project Documentation",
            desc: "Write detailed READMEs",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Feedback Incorporation",
            desc: "Improve materials",
            completed: false,
          },
        ],
        resources: [
          { name: "Pramp", url: "https://www.pramp.com/" },
          {
            name: "Netlify Deployment",
            url: "https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/",
          },
        ],
      },
      // Saturday
      {
        title: "Saturday",
        date: "August 10",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Weak Areas",
            desc: "Focus on problem topics",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Final Polish",
            desc: "Refine all materials",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Job Tracker Setup",
            desc: "Organize applications",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Strategy Session",
            desc: "Plan application approach",
            completed: false,
          },
        ],
        resources: [
          {
            name: "LeetCode Weak Areas",
            url: "https://leetcode.com/problemset/all/",
          },
          { name: "Job Tracker", url: "https://huntr.co/" },
        ],
      },
    ],
  },

  // WEEK 11: Interview Preparation
  {
    title: "Week 11: Interview Preparation",
    startDate: "August 12",
    days: [
      // Monday
      {
        title: "Monday",
        date: "August 12",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "Mock Interview",
            desc: "DSA focus (2 problems)",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Problem Analysis",
            desc: "Review solutions, optimize",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Behavioral Practice",
            desc: "STAR method exercises",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Company Research",
            desc: "Study target companies",
            completed: false,
          },
        ],
        resources: [
          { name: "Interviewing.io", url: "https://interviewing.io/" },
          {
            name: "STAR Method",
            url: "https://www.themuse.com/advice/star-interview-method",
          },
        ],
      },
      // Tuesday
      {
        title: "Tuesday",
        date: "August 13",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "System Design Basics",
            desc: "Design URL shortener",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Tradeoff Analysis",
            desc: "Discuss scalability",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Whiteboard Practice",
            desc: "On-site simulation",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Database indexing",
            completed: false,
          },
        ],
        resources: [
          {
            name: "System Design Primer",
            url: "https://github.com/donnemartin/system-design-primer",
          },
          {
            name: "Design Gurus",
            url: "https://www.educative.io/courses/grokking-the-system-design-interview",
          },
        ],
      },
      // Wednesday
      {
        title: "Wednesday",
        date: "August 14",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "Mock Interview",
            desc: "Full-stack focus",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Code Review Practice",
            desc: "Analyze code samples",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Technical Q&A Prep",
            desc: "Common tech questions",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "API design principles",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Frontend Interview Questions",
            url: "https://github.com/h5bp/Front-end-Developer-Interview-Questions",
          },
          {
            name: "Backend Interview Questions",
            url: "https://github.com/arialdomartini/Back-End-Developer-Interview-Questions",
          },
        ],
      },
      // Thursday
      {
        title: "Thursday",
        date: "August 15",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice (C++)",
            desc: "Blind 75 problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Negotiation Prep",
            desc: "Salary research tactics",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Portfolio Presentation",
            desc: "Practice project demos",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Caching strategies",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Blind 75",
            url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions",
          },
          {
            name: "Salary Negotiation",
            url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/",
          },
        ],
      },
      // Friday
      {
        title: "Friday",
        date: "August 16",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "Mock Interview",
            desc: "Full technical screen",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Feedback Incorporation",
            desc: "Improve weak areas",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Company-specific Prep",
            desc: "Research interview formats",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "DSA Concepts & Revision",
            desc: "Concurrency concepts",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Glassdoor Interviews",
            url: "https://www.glassdoor.com/index.htm",
          },
          {
            name: "LeetCode Company Questions",
            url: "https://leetcode.com/company/",
          },
        ],
      },
      // Saturday
      {
        title: "Saturday",
        date: "August 17",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "Final Mock",
            desc: "Full interview simulation",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Stress Management",
            desc: "Interview anxiety techniques",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Q&A Preparation",
            desc: "Questions for interviewers",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Materials Review",
            desc: "Ensure everything is ready",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Calming Techniques",
            url: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress/art-20046037",
          },
          {
            name: "Questions to Ask",
            url: "https://github.com/viraptor/reverse-interview",
          },
        ],
      },
    ],
  },

  // WEEK 12: Job Applications
  {
    title: "Week 12: Job Applications",
    startDate: "August 19",
    days: [
      // Monday
      {
        title: "Monday",
        date: "August 19",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Maintenance",
            desc: "Solve 2 problems daily",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Application Strategy",
            desc: "Identify target roles",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Personalized Applications",
            desc: "Apply to 10 companies",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Follow-up System",
            desc: "Track application status",
            completed: false,
          },
        ],
        resources: [
          {
            name: "LeetCode Daily",
            url: "https://leetcode.com/problemset/all/",
          },
          { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
        ],
      },
      // Tuesday
      {
        title: "Tuesday",
        date: "August 20",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice",
            desc: "Focus on weak topics",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Networking Outreach",
            desc: "Contact 5 recruiters",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Referral Requests",
            desc: "Seek employee referrals",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Application Follow-ups",
            desc: "Update tracking system",
            completed: false,
          },
        ],
        resources: [
          {
            name: "Cold Email Templates",
            url: "https://www.artofemails.com/engineering-recruiters",
          },
          {
            name: "Referral Platforms",
            url: "https://www.rooftopslushie.com/",
          },
        ],
      },
      // Wednesday
      {
        title: "Wednesday",
        date: "August 21",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "Technical Refresher",
            desc: "Review core concepts",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Interview Practice",
            desc: "Behavioral scenarios",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Coding Challenge Prep",
            desc: "HackerRank practice",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Application Expansion",
            desc: "Apply to 5 more companies",
            completed: false,
          },
        ],
        resources: [
          { name: "HackerRank", url: "https://www.hackerrank.com/" },
          { name: "Codility", url: "https://www.codility.com/" },
        ],
      },
      // Thursday
      {
        title: "Thursday",
        date: "August 22",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Practice",
            desc: "Solve 3 medium problems",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Recruiter Calls",
            desc: "Practice pitch",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Company Research",
            desc: "Deep dive on targets",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Follow-ups",
            desc: "Check application status",
            completed: false,
          },
        ],
        resources: [
          { name: "Company Research", url: "https://www.keyvalues.com/" },
          { name: "Culture Queries", url: "https://www.kununu.com/us" },
        ],
      },
      // Friday
      {
        title: "Friday",
        date: "August 23",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "Mock Interview",
            desc: "Final practice round",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Application Batch",
            desc: "Apply to 10 startups",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Profile Optimization",
            desc: "Update all online profiles",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Week Review",
            desc: "Track progress metrics",
            completed: false,
          },
        ],
        resources: [
          { name: "AngelList", url: "https://angel.co/jobs" },
          { name: "Wellfound", url: "https://wellfound.com/" },
        ],
      },
      // Saturday
      {
        title: "Saturday",
        date: "August 24",
        sessions: [
          {
            time: "8:00-9:30 AM",
            title: "DSA Maintenance",
            desc: "Daily problem solving",
            completed: false,
          },
          {
            time: "10:00-12:00 PM",
            title: "Community Engagement",
            desc: "Contribute to OSS",
            completed: false,
          },
          {
            time: "1:00-2:30 PM",
            title: "Learning Plan",
            desc: "Prepare ongoing study",
            completed: false,
          },
          {
            time: "2:30-3:30 PM",
            title: "Mindset Preparation",
            desc: "Stay positive, persistent",
            completed: false,
          },
        ],
        resources: [
          {
            name: "First Contributions",
            url: "https://github.com/firstcontributions/first-contributions",
          },
          {
            name: "Growth Mindset",
            url: "https://www.mindsetworks.com/science/",
          },
        ],
      },
    ],
  },
];
let currentWeekIndex = 0;

// Initialize the timeline
function initTimeline() {
  const weekContainer = document.getElementById("week-container");
  weekContainer.innerHTML = "";

  weeks.forEach((week, index) => {
    const weekElement = document.createElement("div");
    weekElement.className = "week";
    weekElement.id = `week-${index}`;
    weekElement.style.display = index === currentWeekIndex ? "block" : "none";

    weekElement.innerHTML = `
          <div class="week-header">
            <h3><i class="fas fa-chevron-right"></i> ${week.title}</h3>
          </div>
          <div class="week-content">
            ${week.days
              .map(
                (day) => `
              <div class="day" data-week="${index}" data-day="${day.date}">
                <div class="day-header">
                  <div class="day-title">${day.title}</div>
                  <div class="day-date">${day.date}</div>
                </div>
                ${day.sessions
                  .map(
                    (session, i) => `
                  <div class="session">
                    <div class="completion-badge ${
                      session.completed ? "completed" : ""
                    }" data-week="${index}" data-day="${
                      day.date
                    }" data-session="${i}">
                      <i class="fas fa-check"></i>
                    </div>
                    <div class="session-time"><i class="far fa-clock"></i> ${
                      session.time
                    }</div>
                    <div class="session-title">${session.title}</div>
                    <div class="session-desc">${session.desc}</div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            `
              )
              .join("")}
          </div>
        `;
    weekContainer.appendChild(weekElement);

    // Toggle week collapse
    // weekElement.querySelector('.week-header').addEventListener('click', () => {
    //   weekElement.classList.toggle('active');
    // });
    weekElement.classList.add("active"); // Make sure it's open by default

    // Open day modal
    weekElement.querySelectorAll(".day").forEach((day) => {
      day.addEventListener("click", (e) => {
        if (!e.target.closest(".completion-badge")) {
          const weekIndex = parseInt(day.getAttribute("data-week"));
          const date = day.getAttribute("data-day");
          openDayModal(weekIndex, date);
        }
      });
    });

    // Toggle session completion
    weekElement.querySelectorAll(".completion-badge").forEach((badge) => {
      badge.addEventListener("click", function () {
        const weekIndex = parseInt(this.getAttribute("data-week"));
        const dayDate = this.getAttribute("data-day");
        const sessionIndex = parseInt(this.getAttribute("data-session"));

        weeks[weekIndex].days.find((d) => d.date === dayDate).sessions[
          sessionIndex
        ].completed = !weeks[weekIndex].days.find((d) => d.date === dayDate)
          .sessions[sessionIndex].completed;

        this.classList.toggle("completed");
        updateProgress();
      });
    });
  });

  updateCurrentWeekDisplay();
  updateProgress();
}

// Show only current week
function showOnlyCurrentWeek() {
  const allWeeks = document.querySelectorAll(".week");
  allWeeks.forEach((week, index) => {
    week.style.display = index === currentWeekIndex ? "block" : "none";
  });
}

// Update current week display
function updateCurrentWeekDisplay() {
  const week = weeks[currentWeekIndex];
  document.getElementById("current-week").textContent = `Week ${
    currentWeekIndex + 1
  }: ${week.startDate}`;
}

// Update progress bars
function updateProgress() {
  let mernCompleted = 0,
    mernTotal = 0;
  let dsaCompleted = 0,
    dsaTotal = 0;
  let leetcodeCompleted = 0;
  const leetcodeTotal = 150;

  weeks.forEach((week) => {
    week.days.forEach((day) => {
      day.sessions.forEach((session) => {
        if (
          session.title.includes("MERN") ||
          session.title.includes("Project")
        ) {
          mernTotal++;
          if (session.completed) mernCompleted++;
        }
        if (
          session.title.includes("DSA") ||
          session.title.includes("LeetCode")
        ) {
          dsaTotal++;
          if (session.completed) dsaCompleted++;
          if (session.completed && session.title.includes("LeetCode")) {
            leetcodeCompleted += 2;
          }
        }
      });
    });
  });

  const project1 = document.getElementById("project1").checked;
  const project2 = document.getElementById("project2").checked;
  const project3 = document.getElementById("project3").checked;
  const projectsCompleted =
    (project1 ? 1 : 0) + (project2 ? 1 : 0) + (project3 ? 1 : 0);

  const mernPercent =
    mernTotal > 0 ? Math.round((mernCompleted / mernTotal) * 100) : 0;
  const dsaPercent =
    dsaTotal > 0 ? Math.round((dsaCompleted / dsaTotal) * 100) : 0;
  const projectPercent = Math.round((projectsCompleted / 3) * 100);
  const leetcodePercent = Math.min(
    Math.round((leetcodeCompleted / leetcodeTotal) * 100),
    100
  );

  document.getElementById("mern-percent").textContent = `${mernPercent}%`;
  document.getElementById("mern-progress").style.width = `${mernPercent}%`;

  document.getElementById("dsa-percent").textContent = `${dsaPercent}%`;
  document.getElementById("dsa-progress").style.width = `${dsaPercent}%`;

  document.getElementById("project-percent").textContent = `${projectPercent}%`;
  document.getElementById(
    "project-progress"
  ).style.width = `${projectPercent}%`;

  document.getElementById(
    "leetcode-percent"
  ).textContent = `${leetcodePercent}%`;
  document.getElementById(
    "leetcode-progress"
  ).style.width = `${leetcodePercent}%`;
}

// Navigation controls
document.getElementById("prev-week").addEventListener("click", () => {
  if (currentWeekIndex > 0) {
    currentWeekIndex--;
    initTimeline();
  }
});

document.getElementById("next-week").addEventListener("click", () => {
  if (currentWeekIndex < weeks.length - 1) {
    currentWeekIndex++;
    initTimeline();
  }
});

// Open day modal
function openDayModal(weekIndex, date) {
  const week = weeks[weekIndex];
  const day = week.days.find((d) => d.date === date);
  if (!day) return;

  document.getElementById(
    "modal-title"
  ).textContent = `${day.title}, ${day.date} - ${week.title}`;
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
        <div class="day-details">
          <div class="detail-card">
            <h3><i class="fas fa-tasks"></i> Daily Schedule</h3>
            <ul>
              ${day.sessions
                .map(
                  (session, i) => `
                <li>
                  <strong>${session.time}:</strong> ${session.title}<br>
                  <em>${session.desc}</em>
                  <div class="session-checkbox">
                    <input type="checkbox" id="session-${i}" 
                      ${session.completed ? "checked" : ""}
                      data-week="${weekIndex}" data-day="${date}" data-session="${i}">
                    <label for="session-${i}">Mark as completed</label>
                  </div>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
          <div class="detail-card">
            <h3><i class="fas fa-book"></i> Learning Resources</h3>
            <ul class="resources-list">
              ${day.resources
                .map(
                  (resource) => `
                <li><a href="${resource.url}" target="_blank">${resource.name}</a></li>
              `
                )
                .join("")}
            </ul>
            <div class="resources-list">
              <h3><i class="fas fa-lightbulb"></i> Additional Tips</h3>
              <ul>
                <li>Review yesterday's concepts before starting</li>
                <li>Take breaks every 50 minutes for better retention</li>
                <li>Practice coding by hand for interview preparation</li>
                <li>Document your progress in a learning journal</li>
              </ul>
            </div>
          </div>
        </div>
      `;

  modalBody.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const weekIndex = parseInt(this.getAttribute("data-week"));
      const dayDate = this.getAttribute("data-day");
      const sessionIndex = parseInt(this.getAttribute("data-session"));

      weeks[weekIndex].days.find((d) => d.date === dayDate).sessions[
        sessionIndex
      ].completed = this.checked;

      updateProgress();

      const badge = document.querySelector(
        `.completion-badge[data-week="${weekIndex}"][data-day="${dayDate}"][data-session="${sessionIndex}"]`
      );
      if (badge) badge.classList.toggle("completed", this.checked);
    });
  });

  document.getElementById("day-modal").style.display = "flex";
}

// Close modal
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("day-modal").style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("day-modal")) {
    document.getElementById("day-modal").style.display = "none";
  }
});

// Project checkbox listeners
document.querySelectorAll(".project-checkbox input").forEach((checkbox) => {
  checkbox.addEventListener("change", updateProgress);
});

// Initialize on load
window.addEventListener("DOMContentLoaded", initTimeline);
