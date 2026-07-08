const pythonDSAWeeks = [
  {
    week: 1,
    phase: "Arrays & Strings",
    title: "Dynamic Arrays & String Slicing",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Python list internals: dynamic array resizing, amortized O(1) appends, and list slicing (`arr[start:stop:step]`): [Python List Data Structures](https://docs.python.org/3/tutorial/datastructures.html)",
        "Example - Dynamic Array creation: `arr = []` or `arr = [0] * size`. Amortized append cost is O(1) but triggers O(N) memory copy during growth thresholds: [Python List Internals](https://docs.python.org/3/tutorial/datastructures.html)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Code Syntax Example - Custom Dynamic Array: \n```python\nclass DynamicArray:\n    def __init__(self):\n        self.capacity = 1\n        self.size = 0\n        self.A = [None] * self.capacity\n    def append(self, val):\n        if self.size == self.capacity:\n            self._resize(2 * self.capacity)\n        self.A[self.size] = val\n        self.size += 1\n    def _resize(self, new_cap):\n        B = [None] * new_cap\n        for i in range(self.size):\n            B[i] = self.A[i]\n        self.A = B\n        self.capacity = new_cap\n```: [GeeksforGeeks Custom Array](https://www.geeksforgeeks.org/implementation-of-dynamic-array-in-python/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master string manipulations: joins, splits, reverses, and slicing syntaxes: [Python Strings Tutorial](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)",
        "Example - String reverse: `s = 'hello'; rev = s[::-1]`. String join optimization: `s_list = ['a', 'b', 'c']; res = ''.join(s_list)` runs in O(N) time compared to += string concatenations which run in O(N^2): [Python String Slicing](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Practice LeetCode array questions: Two Sum, Contains Duplicate, and Valid Anagram: [NeetCode Arrays & Hashing](https://neetcode.io/)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "Linked Lists",
    title: "Singly & Doubly Linked Lists",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Code Syntax Example - Singly Linked List Node: \n```python\nclass Node:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n```: [LeetCode Reverse Linked List Tutorial](https://leetcode.com/problems/reverse-linked-list/solution/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Code Syntax Example - Reversing a Singly Linked List (O(N) Time, O(1) Space): \n```python\ndef reverse_list(head):\n    prev = None\n    curr = head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev\n```: [Reverse Linked List LeetCode Tutorial](https://leetcode.com/problems/reverse-linked-list/solution/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Code Syntax Example - Doubly Linked List Node: \n```python\nclass DoubleNode:\n    def __init__(self, val=0, next=None, prev=None):\n        self.val = val\n        self.next = next\n        self.prev = prev\n```: [Doubly Linked List Guide](https://www.geeksforgeeks.org/doubly-linked-list/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Practice Linked List algorithms: Merge Two Sorted Lists, Reorder List, and Remove Nth Node From End: [NeetCode Linked List Problems](https://neetcode.io/)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Stacks & Queues",
    title: "Stacks & Queues",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Stack operations (LIFO): push, pop, peek, and check size using Python's native list: [Python Stack Implementation](https://realpython.com/how-to-implement-python-stack/)",
        "Example - Stack syntax: \n```python\nstack = []\nstack.append(10)  # Push O(1)\nstack.pop()       # Pop O(1)\ntop = stack[-1]   # Peek O(1)\n```: [Python Stack Guide](https://realpython.com/how-to-implement-python-stack/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Code Syntax Example - Valid Parentheses Stack Algorithm (O(N) Time, O(N) Space): \n```python\ndef is_valid(s):\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top:\n                return False\n        else:\n            stack.append(char)\n    return not stack\n```: [LeetCode Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn Queue operations (FIFO) using `collections.deque` for O(1) index pops: [Python deque documentation](https://docs.python.org/3/library/collections.html#collections.deque)",
        "Example - Queue syntax: \n```python\nfrom collections import deque\nq = deque()\nq.append(20)      # Enqueue O(1)\nq.popleft()       # Dequeue O(1)\n```: [Python Deque Guide](https://docs.python.org/3/library/collections.html#collections.deque)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve queue-based questions: Implement Queue using Stacks, and sliding window maximum: [NeetCode Stacks Problems](https://neetcode.io/)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "Hash Tables",
    title: "Hash Tables, Dictionaries & Sets",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Python Dictionary hashing mechanisms: collision chaining, bucket tables, and constant lookup O(1) complexity: [Python Dictionaries Guide](https://realpython.com/python-dicts/)",
        "Example - Dictionary syntax: `d = {'key': 'value'}`. Retrieve with default: `d.get('missing_key', 0)`. Default collections: `from collections import defaultdict; d = defaultdict(list)`: [Python Dictionary Guide](https://realpython.com/python-dicts/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Code Syntax Example - Custom Hash Table with Chaining: \n```python\nclass HashTable:\n    def __init__(self):\n        self.size = 10\n        self.table = [[] for _ in range(self.size)]\n    def put(self, key, val):\n        h = hash(key) % self.size\n        for item in self.table[h]:\n            if item[0] == key:\n                item[1] = val\n                return\n        self.table[h].append([key, val])\n    def get(self, key):\n        h = hash(key) % self.size\n        for item in self.table[h]:\n            if item[0] == key: return item[1]\n        return None\n```: [Hash Map Chaining in Python](https://www.geeksforgeeks.org/implementation-of-hash-table-in-python-using-separate-chaining/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master unique item collections using `set` and set operations: unions, intersections, and set comprehension syntax: [Python Sets Tutorial](https://realpython.com/python-sets/)",
        "Example - Set operations: `s = set()`. Set intersection: `s1 & s2`. Set difference: `s1 - s2`. Add: `s.add(val)`. Lookup: `if val in s` is O(1): [Python Sets Guide](https://realpython.com/python-sets/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve set and map problems: Longest Consecutive Sequence, Group Anagrams, and Two Sum: [NeetCode Hashing Problems](https://neetcode.io/)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "Trees & Heaps",
    title: "Trees, BSTs & Heaps",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Code Syntax Example - Binary Search Tree (BST) Node and Traversals: \n```python\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\ndef inorder(root):\n    return inorder(root.left) + [root.val] + inorder(root.right) if root else []\n```: [BST in Python](https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Code Syntax Example - Level Order Traversal (BFS) using Deque (O(N) Time, O(N) Space): \n```python\nfrom collections import deque\ndef level_order(root):\n    if not root: return []\n    q = deque([root])\n    res = []\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res\n```: [Binary Tree BFS Guide](https://www.geeksforgeeks.org/level-order-tree-traversal/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Heaps using Python's built-in `heapq` module: min-heap defaults and max-heap workarounds: [Python heapq module documentation](https://docs.python.org/3/library/heapq.html)",
        "Example - Min Heap syntax: \n```python\nimport heapq\nh = []\nheapq.heappush(h, 5)     # Push O(log N)\nheapq.heappush(h, 2)\nsmallest = heapq.heappop(h)  # Pop min O(log N)\n```\nFor Max Heap, store values as negative: `heapq.heappush(h, -val)`: [Python Heap Queue Guide](https://docs.python.org/3/library/heapq.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve tree/heap questions: Maximum Depth of Binary Tree, Invert Binary Tree, and Kth Largest Element in a Stream: [NeetCode Trees Problems](https://neetcode.io/)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Graphs",
    title: "Graphs & Traversals",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Graph representations: Adjacency Matrix vs Adjacency List using Python collections: [Python Adjacency List Guide](https://www.geeksforgeeks.org/graph-and-its-representations/)",
        "Example - Graph representation: \n```python\n# Using dictionary of lists\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'D'],\n    'C': ['A'],\n    'D': ['B']\n}\n```: [Python Graph Guide](https://www.geeksforgeeks.org/graph-and-its-representations/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Code Syntax Example - Depth-First Search (DFS) Traversal (Recursive): \n```python\ndef dfs(node, graph, visited):\n    if node in visited: return\n    visited.add(node)\n    print(node)  # Visit node\n    for neighbor in graph[node]:\n        dfs(neighbor, graph, visited)\n```: [Python DFS Graph Tutorial](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Code Syntax Example - Breadth-First Search (BFS) Traversal (Iterative): \n```python\nfrom collections import deque\ndef bfs(start, graph):\n    visited = {start}\n    q = deque([start])\n    while q:\n        node = q.popleft()\n        print(node)  # Visit node\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                q.append(neighbor)\n```: [Python BFS Graph Tutorial](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve graph questions: Number of Islands, Clone Graph, and Course Schedule: [NeetCode Graphs Problems](https://neetcode.io/)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Advanced DSA",
    title: "Advanced Trees & Tries",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Code Syntax Example - Prefix Trie Node and Insert/Search Methods: \n```python\nclass TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_word = False\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n    def insert(self, word):\n        curr = self.root\n        for char in word:\n            if char not in curr.children:\n                curr.children[char] = TrieNode()\n            curr = curr.children[char]\n        curr.is_word = True\n```: [Trie Implementation in Python](https://www.geeksforgeeks.org/trie-insert-and-search/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Code Syntax Example - Disjoint Set Union (Union-Find) with Path Compression and Rank: \n```python\nclass UnionFind:\n    def __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [1] * n\n    def find(self, i):\n        if self.parent[i] == i: return i\n        self.parent[i] = self.find(self.parent[i])  # Path compression\n        return self.parent[i]\n    def union(self, i, j):\n        root_i, root_j = self.find(i), self.find(j)\n        if root_i != root_j:\n            if self.rank[root_i] > self.rank[root_j]:\n                self.parent[root_j] = root_i\n            else:\n                self.parent[root_i] = root_j\n                if self.rank[root_i] == self.rank[root_j]:\n                    self.rank[root_j] += 1\n```: [Union-Find in Python](https://www.geeksforgeeks.org/union-find-algorithm-union-by-rank-and-path-compression/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand time/space complexity benefits of path compression (amortized O(alpha(N)) lookup costs): [Union-Find Analytics](https://www.geeksforgeeks.org/union-find-algorithm-union-by-rank-and-path-compression/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve advanced problems: Implement Trie, Redundant Connection, and Word Search II: [NeetCode Advanced Problems](https://neetcode.io/)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Sorting & Searching",
    title: "Sorting, Searching & Algorithms",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn search optimizations: custom Binary Search algorithms vs the standard `bisect` library: [Python bisect module documentation](https://docs.python.org/3/library/bisect.html)",
        "Example - Bisect search: \n```python\nimport bisect\narr = [1, 3, 5, 7]\nidx = bisect.bisect_left(arr, 4)  # Returns 2 (index to insert 4)\n```: [Python Bisect Guide](https://docs.python.org/3/library/bisect.html)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Code Syntax Example - Binary Search (Iterative O(log N) Time, O(1) Space): \n```python\ndef binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1\n```: [Binary Search Tutorial](https://www.geeksforgeeks.org/binary-search/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Code Syntax Example - Quick Sort Lomuto Partitioning (O(N log N) Average Time): \n```python\ndef quicksort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)\n```: [Quick Sort in Python](https://realpython.com/sorting-algorithms-python/#the-quicksort-algorithm-in-python)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Solve interview sorting/searching questions: Search in Rotated Sorted Array, Koko Eating Bananas, and Find Minimum in Rotated Sorted Array: [NeetCode Binary Search Problems](https://neetcode.io/)"
      ]}
    ]
  }
];

window.pythonDSAWeeks = pythonDSAWeeks;

window.PythonDSARoadmap = function({ user }) {
  const config = {
    id: "python_dsa",
    title: "Data Structures & Algorithms (Python)",
    subtitle: "Pythonic Implementations, Complexity Analysis & Interview Code Blocks",
    tagline: "Synapse · Python DSA Specialization",
    description: "Master Data Structures & Algorithms completely implemented in Python. Build custom Dynamic Arrays, execute recursive singly Linked List reversals, deploy double node lists, run FIFO collections queues, map custom chaining Hash Tables, perform BST DFS traversals, implement min-heaps using heapq, represent graphs adjacency lists, code character Prefix Tries, formulate Union-Find path compressions, and partition Quick Sort sub-arrays.",
    accentColor: "#D97706",
    weeks: pythonDSAWeeks,
    phases: [
      { phase: "Arrays & Lists", weeks: "1-2", desc: "Dynamic list resizing, slicing syntaxes, node links transitions, linked list reversals, pointer updates" },
      { phase: "Stacks, Queues & Hash Maps", weeks: "3-4", desc: "LIFO stack implementations, collections deque FIFO operations, custom hash table separate chaining, sets intersections" },
      { phase: "Trees, Heaps & Graphs", weeks: "5-6", desc: "BST nodes recursion traversals, heapq priorities, adjacency lists representations, DFS/BFS traversals" },
      { phase: "Advanced DSA & Sorting", weeks: "7-8", desc: "Trie character children trees, Union-Find path compression rank merges, bisect libraries binary search, quicksort splits" }
    ],
    insights: [
      {
        title: "💡 Pythonic DSA Strategy",
        text: "Writing DSA in Python requires balancing primitive nodes classes with Python's high-leverage standard libraries. While building custom trees or lists teaches pointer operations, performance-critical loops should utilize built-in modules like `collections.deque` and `heapq` which are optimized in C.",
        color: "#D97706"
      }
    ],
    videos: [
      { title: "NeetCode Arrays & Hashing Video Lectures", url: "https://www.youtube.com/playlist?list=PLot-Xpkr5xvgF0M1glCxotg40cjgs14yT" },
      { title: "freeCodeCamp Python DSA Full Course", url: "https://www.youtube.com/watch?v=pkYtud_gM-s" },
      { title: "Corey Schafer Python Lists & Dicts Tutorial", url: "https://www.youtube.com/watch?v=W8KRzm-HUcc" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
