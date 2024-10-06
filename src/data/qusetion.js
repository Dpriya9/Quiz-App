const questions = [
    {
      id: 1,
      question: " What is the primary purpose of React?",
      options: [
        "To manage the database",
        "To handle HTTP requests",
        "To build user interfaces",
        "To develop mobile apps"
      ],
      answer: "To build user interfaces",
    },
    {
      id: 2,
      question: " What is JSX?",
      options: [
        "A JavaScript XML syntax extension",
        "A JSON parser",
        "A type of JavaScript function",
        "A JavaScript template engine"
      ],
      answer: "A JavaScript XML syntax extension",
    },
    {
      id: 3,
      question: "Which of the following is a correct way to handle state in a React component?",
      options: [
        "this.setState",
        "setState() directly",
        "updateState()",
        "this.handleState()"
      ],
      answer: "this.setState",
    },
    {
      id: 4,
      question: " Which hook is used to manage state in functional components?",
      options: ["useEffect", "useReducer", "useState", "useContext"],
      answer: "useState",
    },
    {
      id: 5,
      question: " What is a 'key' prop used for in React?",
      options: [
        "To uniquely identify elements in an array",
        "To handle events",
        "To store data in local storage",
        "To optimize component rendering"
      ],
      answer: "To uniquely identify elements in an array",
    },
    {
      id: 6,
      question: " Which method is used to render a React component into the DOM?",
      options: ["ReactDOM.render", "React.render", "React.createElement", "renderComponent"],
      answer: "ReactDOM.render",
    },
    {
      id: 7,
      question: " What is the virtual DOM in React?",
      options: [
        "A copy of the real DOM kept in memory",
        "A physical DOM element",
        "A global state object",
        "A type of event listener in React"
      ],
      answer: "A copy of the real DOM kept in memory",
    },
    {
      id: 8,
      question: " Which of the following is a valid way to pass data from a parent component to a child component?",
      options: ["Using state", "Using refs", "Using props", "Using Redux"],
      answer: "Using props",
    },
    {
      id: 9,
      question: " Which React hook is used to perform side effects like data fetching?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      answer: "useEffect",
    },
    {
      id: 10,
      question: " What is the correct syntax to create a functional component in React?",
      options: [
        "function MyComponent() { return <div> </div>; }",
        "class MyComponent extends React.Component { render() { return <div> </div>; }}",
        "React.createComponent('MyComponent', function() { return <div> </div>; })",
        "const MyComponent = new React.Component() { render() { return <div> </div>; }}"
      ],
      answer: "function MyComponent() { return <div> </div>; }",
    }
  ];
  
  export default questions;
  