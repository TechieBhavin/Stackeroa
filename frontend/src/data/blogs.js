export const blogs = [
  // =========================
  // REACT CATEGORY
  // =========================
  {
    slug: "react-hooks-guide",
    title: "Complete Guide to React Hooks",
    excerpt: "Master useState, useEffect, useMemo in React.",
    author: "Bhavin Patel",
    readTime: "6 min read",
    date: "May 12, 2026",
    tags: ["React", "Frontend"],
    category: "react",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400",
    content: [
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "React Hooks allow functional components to manage state and lifecycle methods without using class components.",
      },
      {
        type: "p",
        text: "They simplify code structure and improve reusability across components.",
      },
      { type: "h2", text: "useState Hook" },
      {
        type: "p",
        text: "useState lets you create state variables inside functional components.",
      },
      {
        type: "code",
        text: `const [count, setCount] = useState(0);`,
      },
      { type: "h2", text: "useEffect Hook" },
      {
        type: "p",
        text: "useEffect handles side effects like API calls, timers, and DOM updates.",
      },
      {
        type: "code",
        text: `useEffect(() => {
  document.title = count;
}, [count]);`,
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Hooks are the foundation of modern React development.",
      },
    ],
  },

  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization Tips",
    excerpt: "Improve rendering speed and app performance.",
    author: "Sarah Johnson",
    readTime: "7 min read",
    date: "May 11, 2026",
    tags: ["React"],
    category: "react",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400",
    content: [
      { type: "h2", text: "Why Performance Matters" },
      {
        type: "p",
        text: "Poor React performance leads to slow UI rendering and bad user experience.",
      },
      { type: "h2", text: "React.memo" },
      {
        type: "p",
        text: "React.memo prevents unnecessary re-renders of components.",
      },
      {
        type: "code",
        text: `export default React.memo(Component);`,
      },
      { type: "h2", text: "useMemo & useCallback" },
      {
        type: "p",
        text: "These hooks help optimize expensive computations and function re-creation.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Use optimization techniques wisely to avoid unnecessary complexity.",
      },
    ],
  },

  {
    slug: "react-router-guide",
    title: "React Router Deep Dive",
    excerpt: "Master routing in React apps.",
    author: "John Doe",
    readTime: "6 min read",
    date: "May 9, 2026",
    tags: ["React"],
    category: "react",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1400",
    content: [
      { type: "h2", text: "What is Routing?" },
      {
        type: "p",
        text: "Routing allows navigation between pages without reloading the browser.",
      },
      { type: "h2", text: "Setup" },
      {
        type: "code",
        text: `import { BrowserRouter, Routes, Route } from "react-router-dom";`,
      },
      { type: "h2", text: "Example" },
      {
        type: "code",
        text: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`,
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "React Router is essential for SPA navigation.",
      },
    ],
  },

  // =========================
  // JAVASCRIPT CATEGORY
  // =========================
  {
    slug: "javascript-closures",
    title: "JavaScript Closures Explained",
    excerpt: "Understand closures in depth.",
    author: "Neha Verma",
    readTime: "5 min read",
    date: "April 20, 2026",
    tags: ["JavaScript"],
    category: "javascript",
    image:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=1400",
    content: [
      { type: "h2", text: "What is a Closure?" },
      {
        type: "p",
        text: "A closure is a function that remembers its outer scope even after execution.",
      },
      { type: "h2", text: "Example" },
      {
        type: "code",
        text: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}`,
      },
      { type: "h2", text: "Use Cases" },
      {
        type: "p",
        text: "Closures are used in data encapsulation, callbacks, and memoization.",
      },
    ],
  },

  {
    slug: "async-await",
    title: "Async/Await in JavaScript",
    excerpt: "Simplify async programming.",
    author: "Rohit Mehta",
    readTime: "6 min read",
    date: "March 18, 2026",
    tags: ["JavaScript"],
    category: "javascript",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1400",
    content: [
      { type: "h2", text: "Why Async/Await?" },
      {
        type: "p",
        text: "It makes asynchronous code easier to read and maintain.",
      },
      { type: "h2", text: "Example" },
      {
        type: "code",
        text: `async function fetchData() {
  const res = await fetch(url);
  return await res.json();
}`,
      },
      { type: "h2", text: "Error Handling" },
      {
        type: "code",
        text: `try {
  await fetchData();
} catch (err) {
  console.log(err);
}`,
      },
    ],
  },

  // =========================
  // DSA CATEGORY
  // =========================
  {
    slug: "arrays-dsa",
    title: "Arrays in Data Structures",
    excerpt: "Learn array basics.",
    author: "Bhavin Patel",
    readTime: "5 min read",
    date: "May 4, 2026",
    tags: ["DSA"],
    category: "dsa",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400",
    content: [
      { type: "h2", text: "What is an Array?" },
      {
        type: "p",
        text: "Arrays store elements in contiguous memory locations.",
      },
      { type: "h2", text: "Example" },
      {
        type: "code",
        text: `let arr = [1, 2, 3, 4];`,
      },
      { type: "h2", text: "Operations" },
      {
        type: "p",
        text: "Insertion, deletion, traversal, and searching.",
      },
    ],
  },

  {
    slug: "linked-list",
    title: "Linked List Explained",
    excerpt: "Understand linked lists.",
    author: "Rahul Mehta",
    readTime: "6 min read",
    date: "May 3, 2026",
    tags: ["DSA"],
    category: "dsa",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1400",
    content: [
      { type: "h2", text: "What is Linked List?" },
      {
        type: "p",
        text: "A linked list is a linear data structure where nodes are connected using pointers.",
      },
      { type: "h2", text: "Node Structure" },
      {
        type: "code",
        text: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}`,
      },
      { type: "h2", text: "Types" },
      {
        type: "p",
        text: "Singly, doubly, and circular linked lists.",
      },
    ],
  },

  // =========================
  // SYSTEM DESIGN
  // =========================
  {
    slug: "system-design-basics",
    title: "System Design Fundamentals",
    excerpt: "Learn scalable architecture.",
    author: "Alex Kim",
    readTime: "10 min read",
    date: "May 8, 2026",
    tags: ["System Design"],
    category: "system-design",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400",
    content: [
      { type: "h2", text: "What is System Design?" },
      {
        type: "p",
        text: "System design focuses on building scalable and reliable systems.",
      },
      { type: "h2", text: "Architecture" },
      {
        type: "code",
        text: `User → Load Balancer → Servers → Database`,
      },
      { type: "h2", text: "Key Concepts" },
      {
        type: "p",
        text: "Scalability, availability, caching, and load balancing.",
      },
    ],
  },

  {
    slug: "load-balancing",
    title: "Load Balancing Explained",
    excerpt: "How large systems handle traffic.",
    author: "John Doe",
    readTime: "8 min read",
    date: "May 6, 2026",
    tags: ["System Design"],
    category: "system-design",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400",
    content: [
      { type: "h2", text: "What is Load Balancing?" },
      {
        type: "p",
        text: "It distributes traffic across multiple servers.",
      },
      { type: "h2", text: "Benefits" },
      {
        type: "p",
        text: "Improves availability and performance.",
      },
    ],
  },

  // =========================
  // DEVOPS CATEGORY
  // =========================
  {
    slug: "devops-intro",
    title: "DevOps Basics Explained",
    excerpt: "CI/CD and automation basics.",
    author: "Karan Joshi",
    readTime: "7 min read",
    date: "May 6, 2026",
    tags: ["DevOps"],
    category: "devops",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400",
    content: [
      { type: "h2", text: "What is DevOps?" },
      {
        type: "p",
        text: "DevOps combines development and operations for faster delivery.",
      },
      { type: "h2", text: "CI/CD Pipeline" },
      {
        type: "code",
        text: `Code → Build → Test → Deploy`,
      },
      { type: "h2", text: "Tools" },
      {
        type: "p",
        text: "Docker, Jenkins, Kubernetes, GitHub Actions.",
      },
    ],
  },

  {
    slug: "docker-basics",
    title: "Docker Basics",
    excerpt: "Learn containerization.",
    author: "Sarah Johnson",
    readTime: "6 min read",
    date: "May 5, 2026",
    tags: ["DevOps"],
    category: "devops",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400",
    content: [
      { type: "h2", text: "What is Docker?" },
      {
        type: "p",
        text: "Docker allows applications to run in isolated containers.",
      },
      { type: "h2", text: "Basic Command" },
      {
        type: "code",
        text: `docker run hello-world`,
      },
      { type: "h2", text: "Benefits" },
      {
        type: "p",
        text: "Portability, scalability, and consistency.",
      },
    ],
  },
];

export const getBlogBySlug = (slug) => {
  return blogs.find((b) => b.slug === slug);
};