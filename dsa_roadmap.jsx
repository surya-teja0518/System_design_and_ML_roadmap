const dsaWeeks = [
  {
    week: 1,
    phase: "Data Structures",
    title: "Arrays, Strings & Complexity",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Array representation, memory allocation, contiguous storage, and Big O space/time complexity: [NeetCode Big O Notation](https://www.youtube.com/watch?v=V6mKVRU1evU)",
        "Practice basic operations: insertion, deletion, lookup in O(1) vs O(N): [W3Schools Data Structures Arrays](https://www.w3schools.com/dsa/dsa_theory_arrays.php)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Two-Pointer technique: reverse array, target sum, move zeros, and container with most water: [NeetCode Two Pointer technique](https://www.youtube.com/watch?v=cHP84zJ1bT0)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Sliding Window pattern (fixed vs variable size): longest substring without repeating characters, minimum size subarray sum: [NeetCode Sliding Window technique](https://www.youtube.com/watch?v=gWRrMHSz_8k)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn String operations under the hood, immutable strings, anagram checks, and palindrome checks: [GeeksforGeeks String Problems](https://www.geeksforgeeks.org/string-data-structure/)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "Data Structures",
    title: "Linked Lists, Stacks & Queues",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Singly, Doubly, and Circular Linked Lists: node insertion, deletion, list reversal, and Floyd's cycle detection: [NeetCode Reverse Linked List](https://www.youtube.com/watch?v=G0_I-ZF0S38)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Learn Stack LIFO operations (push, pop, peek), array vs linked list representations, and Valid Parentheses: [NeetCode Valid Parentheses](https://www.youtube.com/watch?v=WTzjTskDFMg)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn Queue FIFO operations (enqueue, dequeue), circular queue implementations, and implementing queues using stacks: [GeeksforGeeks Queue Operations](https://www.geeksforgeeks.org/queue-data-structure/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Study Double Ended Queues (Deques), monotonic stack patterns, and Next Greater Element problems: [GeeksforGeeks Next Greater Element](https://www.geeksforgeeks.org/next-greater-element/)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Algorithms",
    title: "Recursion & Backtracking",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Recursion fundamentals: base cases, stack frames, call stack depth, recursion tree drawing: [freeCodeCamp Recursion Tutorial](https://www.youtube.com/watch?v=IJDJ0kBx2LM)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Binary Search: iterative vs recursive models, search space boundaries, search in rotated sorted array: [NeetCode Binary Search](https://www.youtube.com/watch?v=s4DPM8ct1Hs)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study sorting algorithms: Bubble, Selection, Insertion (O(N^2)) vs Merge and Quick Sort (O(N log N)) with execution limits: [GeeksforGeeks Sorting Algorithms](https://www.geeksforgeeks.org/sorting-algorithms/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn Backtracking strategy: generate subsets, permutations, combination sum, and N-Queens: [NeetCode Backtracking subsets](https://www.youtube.com/watch?v=REOH22IV5js)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "Data Structures",
    title: "Trees & Binary Search Trees",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Binary Trees, node heights, depths, DFS traversals (In-order, Pre-order, Post-order): [NeetCode Binary Tree Traversals](https://www.youtube.com/watch?v=jmy0La5M3mE)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Level-order traversal (BFS) using queues, maximum depth of binary tree, invert binary tree: [NeetCode Tree BFS Level Order](https://www.youtube.com/watch?v=6Zny5L0Ia9M)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Binary Search Trees (BST): insertion, lookup, deletion, validating BST properties: [NeetCode Validate BST](https://www.youtube.com/watch?v=s6ATEkipzow)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Find Lowest Common Ancestor (LCA) in binary tree and BST, count leaf nodes, path sum search: [NeetCode Lowest Common Ancestor](https://www.youtube.com/watch?v=gs2LMfuOR9k)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "Data Structures",
    title: "Heaps & Priority Queues",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Binary Heaps, array-backed complete binary tree properties, heapify up/down operations: [GeeksforGeeks Binary Heap](https://www.geeksforgeeks.org/binary-heap/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Build Heap algorithm with O(N) complexity analysis, Min-Heap vs Max-Heap operations: [Abdul Bari Heap Building](https://www.youtube.com/watch?v=HqPJF2L5h9U)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Heap Sort, Find Kth Largest element, and Top K Frequent elements using priority queues: [NeetCode Kth Largest Element](https://www.youtube.com/watch?v=hGK_5n81d1E)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Understand K-way merge, merge K sorted lists, running median tracker using min/max heaps: [NeetCode Find Median from Data Stream](https://www.youtube.com/watch?v=itmhHWaHupI)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Algorithms",
    title: "Graphs & Algorithms",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Graph representations (adjacency list vs matrix) and Breadth-First Search (BFS) for shortest paths: [NeetCode Graph BFS](https://www.youtube.com/watch?v=t0Cq6tVFeBA)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Depth-First Search (DFS) for connectivity, path finding, and cycle detection (directed vs undirected): [NeetCode Graph DFS Cycle Detection](https://www.youtube.com/watch?v=fHW7981L1IE)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand Topological Sort (Kahn's indegree algorithm, DFS-based), course schedule scheduling: [NeetCode Course Schedule](https://www.youtube.com/watch?v=EgI5nU9etnU)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master Single-Source Shortest Path using Dijkstra's algorithm with priority queues: [NeetCode Dijkstra's Algorithm](https://www.youtube.com/watch?v=XB4MIexjvY0)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Algorithms",
    title: "Dynamic Programming & Greedy",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Dynamic Programming core: memoization (top-down) vs tabulation (bottom-up), overlapping subproblems: [NeetCode Dynamic Programming Intro](https://www.youtube.com/watch?v=Hdr64lKQ3e4)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Solve classic DP problems: 0/1 Knapsack, Coin Change, Subset Sum, Climbing Stairs: [NeetCode Coin Change](https://www.youtube.com/watch?v=H9bfqozjoqs)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Solve Longest Common Subsequence (LCS) and Longest Increasing Subsequence (LIS): [NeetCode Longest Common Subsequence](https://www.youtube.com/watch?v=Ua0GhsJSlWM)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Master Greedy choice properties: Fractional Knapsack, Activity Selection, Huffman Coding: [Abdul Bari Greedy Algorithms](https://www.youtube.com/watch?v=ARvQurI9RJE)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Algorithms",
    title: "Curated Interview Patterns",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Master Trie (Prefix Tree) implementation: insert, search, and startsWith operations: [NeetCode Trie prefix tree](https://www.youtube.com/watch?v=oobqoCJl500)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Disjoint Set Union (Union-Find) with path compression and union by rank/size: [NeetCode Union Find](https://www.youtube.com/watch?v=VHRhDX7gdB8)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand Segment Trees: array representations, range sum queries, point updates in O(log N): [GeeksforGeeks Segment Tree](https://www.geeksforgeeks.org/segment-tree-data-structure-tutorial/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Consolidate top coding patterns (Two pointers, Sliding window, DFS/BFS, Backtracking, DP) and solve NeetCode Blind 75: [NeetCode Blind 75 List](https://neetcode.io/practice)"
      ]}
    ]
  }
];

window.dsaWeeks = dsaWeeks;

window.DSARoadmap = function({ user }) {
  const config = {
    id: "dsa",
    title: "Data Structures & Algorithms",
    subtitle: "Core Coding Patterns to Advanced DSA",
    tagline: "Synapse · Algorithmic Foundations Track",
    description: "Build a rock-solid foundation in problem-solving and software engineering interviews. Master arrays, sliding windows, linked lists, stacks, queues, sorting, binary search, recursions, binary trees, heaps, graphs, dynamic programming, and greedy algorithms.",
    accentColor: "#3B82F6",
    weeks: dsaWeeks,
    phases: [
      { phase: "Data Structures", weeks: "1-2", desc: "Arrays complexity, strings operations, two pointers, sliding windows, linked lists, stacks, monotonic queues" },
      { phase: "Algorithms Core", weeks: "3-5", desc: "Recursion trees, backtracking subsets, merge/quick sort, binary trees DFS/BFS, binary search trees, heap structures" },
      { phase: "Advanced Graphs & DP", weeks: "6-8", desc: "Graph DFS/BFS cycle checks, topological sorting course schedule, Dijkstra, Dynamic programming, Coin change, LCS, Trie trees, and Union-Find" }
    ],
    insights: [
      {
        title: "💡 Why DSA is Critical for Job Hunt",
        text: "Every major software engineering interview loop contains at least two coding sessions. Master the **sliding window**, **level-order traversals**, and **memoized dynamic programming** patterns to solve intermediate-to-hard problems in under 30 minutes.",
        color: "#3B82F6"
      }
    ],
    videos: [
      { title: "NeetCode DSA Roadmap Introduction", url: "https://www.youtube.com/watch?v=V6mKVRU1evU" },
      { title: "freeCodeCamp Data Structures & Algorithms", url: "https://www.youtube.com/watch?v=8hly31xKjhc" },
      { title: "Abdul Bari Algorithms playlist", url: "https://www.youtube.com/playlist?list=PLDN4rRl4ldJv4V_2S1498b8LgVfW6Kz4k" },
      { title: "NeetCode Blind 75 Solutions", url: "https://neetcode.io/" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
