const aiEngineerWeeks = [
  {
    week: 1,
    phase: "LLM Basics & APIs",
    title: "GenAI Basics & LLM APIs",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn core LLM concepts: Tokenization, tiktoken parser, context windows, and cost calculations: [DeepLearning.ai ChatGPT Prompt Engineering (YouTube)](https://www.youtube.com/watch?v=mEsleV16qdo)",
        "Understand compilation vs generation parameters: decoding algorithms, autoregressive models, and temperature: [Cohere LLM Parameters Guide](https://docs.cohere.com/docs/llm-parameters)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master closed-source LLM APIs: Invoke OpenAI Chat Completions, Anthropic Claude SDK, and Google Gemini API: [freeCodeCamp OpenAI API Tutorial](https://www.youtube.com/watch?v=uK8MvIVSmLg)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn open-source models and local hosting: install Ollama, pull Llama/Mistral models, and run local API requests: [Ollama Python Guide](https://github.com/ollama/ollama-python)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Host local endpoints via LM Studio and connect Python scripts using OpenAI-compatible SDK clients: [LM Studio Guide](https://lmstudio.ai/docs)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "LLM Basics & APIs",
    title: "Prompt Engineering & Safety",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Master prompt techniques: Zero-shot, Few-shot, Chain-of-Thought (CoT), and the ReAct framework: [freeCodeCamp Prompt Engineering Full Course](https://www.youtube.com/watch?v=52a9v2L5WdI)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Configure inference parameters: Temperature, Top-K, Top-P, Frequency/Presence penalties: [Cohere LLM Parameters Guide](https://docs.cohere.com/docs/llm-parameters)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn Prompt Safety: Prevent prompt injection attacks, jailbreak defenses, and write robust system prompts: [DeepLearning.ai Building Secure LLM Applications](https://www.deeplearning.ai/short-courses/building-secure-llm-applications/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Implement Content Moderation: Use OpenAI Moderation API, guardrails, and input/output filters: [OpenAI Moderation Guide](https://platform.openai.com/docs/guides/moderation)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Embeddings & Vector search",
    title: "Embeddings & Semantic Search",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Embeddings: Word vectors, high-dimensional spaces, distance metrics (Cosine vs Euclidean vs Dot Product): [3Blue1Brown Word Embeddings Visualized](https://www.youtube.com/watch?v=gQddtTdmG_8)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Generate embeddings programmatically: Use OpenAI Embeddings API and Google Gemini Embedding SDK: [freeCodeCamp OpenAI Embeddings Guide](https://www.youtube.com/watch?v=ySEx_BqVx14)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Run open-source embeddings: Learn Sentence Transformers library and pull models from Hugging Face Hub: [Hugging Face Sentence Transformers Guide](https://huggingface.co/docs/hub/sentence-transformers)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Implement semantic search, anomaly detection, recommendations, and categorization using vector distance: [Pinecone Semantic Search Guide](https://www.pinecone.io/learn/semantic-search/)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "Embeddings & Vector search",
    title: "Vector Databases",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn vector indexing: Hierarchical Navigable Small World (HNSW) vs Inverted File Index (IVF): [Pinecone Vector Indexes Guide](https://www.pinecone.io/learn/vector-indexes/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Compare popular Vector Databases: Chroma DB (local), Pinecone (cloud), Qdrant, and Supabase pgvector: [freeCodeCamp Vector Database Course](https://www.youtube.com/watch?v=klTvEwg3XJ4)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Implement CRUD operations and similarity query parameters with Chroma or Pinecone Python clients: [Chroma DB Getting Started](https://docs.trychroma.com/getting-started)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Understand Hybrid Search: Combine sparse keyword queries (BM25/TF-IDF) with dense vector representations: [Pinecone Hybrid Search Guide](https://www.pinecone.io/learn/hybrid-search/)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "Retrieval & RAG",
    title: "RAG Fundamentals",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand RAG (Retrieval-Augmented Generation) architectures, ingestion, retrieval, and synthesis: [freeCodeCamp RAG Tutorial](https://www.youtube.com/watch?v=qN_FeL4FDEk)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Implement Text Chunking strategies: fixed-size chunking, recursive character chunking, and semantic chunking: [Pinecone Chunking Strategies](https://www.pinecone.io/learn/chunking-strategies/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Load unstructured data: Parse PDFs, Markdown files, and HTML templates using Python parsing toolkits: [LlamaIndex Data Connectors Guide](https://docs.llamaindex.ai/en/stable/module_guides/loading/connector/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Assess architectural trade-offs: RAG vs Fine-Tuning in context limits, hallucination rates, and hosting costs: [DeepLearning.ai RAG vs Fine-tuning Guide](https://www.deeplearning.ai/blog/rag-vs-finetuning/)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Retrieval & RAG",
    title: "Advanced RAG & Orchestration",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Master LangChain: Prompt templates, ChatModels, output parsers, memory state, and LangChain Expression Language (LCEL): [freeCodeCamp LangChain Full Course](https://www.youtube.com/watch?v=lG7Uxts9SXs)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master LlamaIndex: Data connectors, indexes, node postprocessors, and query engines: [freeCodeCamp LlamaIndex Course](https://www.youtube.com/watch?v=J393tPz-g8E)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Optimize search results: Learn context re-ranking using Cohere Re-rank and Cross-Encoders: [Pinecone Reranking Guide](https://www.pinecone.io/learn/reranking/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Implement query translation patterns: sub-query decomposition, query expansion, and route selectors: [LlamaIndex Advanced Retrieval Strategies](https://docs.llamaindex.ai/en/stable/examples/query_engine/sub_question_query_engine/)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Agents & Function Calling",
    title: "Tools & Function Calling",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand LLM Function Calling: define JSON schema inputs, bind tools to models, and process tool call responses: [DeepLearning.ai Functions Tool Calling (YouTube)](https://www.youtube.com/watch?v=mEsleV16qdo)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Build execution loops: execute python code, run SQL statements, and call external REST APIs based on LLM decisions: [LangChain Tool Calling Guide](https://python.langchain.com/docs/how_to/tool_calling/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Enforce structured outputs: Use Pydantic schemas, JSON Mode, and libraries like Instructor: [Instructor structured data parser](https://jxnl.github.io/instructor/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Integrate external web search: configure SerpAPI or Tavily Search API as tools for real-time data lookups: [Tavily Search API documentation](https://docs.tavily.com/)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Agents & Function Calling",
    title: "AI Agents & Agentic Workflows",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Agentic patterns: autonomous ReAct loops, planning, self-reflection, and tool memory: [Andrew Ng Agentic Design Patterns (YouTube)](https://www.youtube.com/watch?v=q6gSCG4J1_U)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Build multi-agent pipelines with CrewAI: Define agents with specialized roles, task assignments, and shared memory: [CrewAI Quickstart Guide](https://docs.crewai.com/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Design stateful graphs with LangGraph: nodes, edges, state variables, user-in-the-loop, and cyclic transitions: [LangGraph Quickstart Guide](https://langchain-ai.github.io/langgraph/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Trace, debug, and monitor agent steps and latencies using Arize Phoenix or LangSmith: [Arize Phoenix Tracing Guide](https://docs.arize.com/phoenix)"
      ]}
    ]
  }
];

window.aiEngineerWeeks = aiEngineerWeeks;

window.AIEngineerRoadmap = function({ user }) {
  const config = {
    id: "ai_engineer",
    title: "AI Engineer (Generative AI)",
    subtitle: "LLM Integration, RAG Pipelines & Multi-Agent Workflows",
    tagline: "Synapse · Generative AI Track",
    description: "Master modern Generative AI application development. Build production-grade systems using LLM APIs (OpenAI/Anthropic/Gemini), prompt safety guardrails, high-dimensional vector embeddings, RAG architectures (LangChain/LlamaIndex), tool invocation databases, and autonomous multi-agent state machines.",
    accentColor: "#6366F1",
    weeks: aiEngineerWeeks,
    phases: [
      { phase: "LLM APIs & Prompting", weeks: "1-2", desc: "Token pricing calculations, API invocation (OpenAI/Gemini/DeepSeek), local inference (Ollama), few-shot patterns, safety guardrails, jailbreak defenses" },
      { phase: "Embeddings & Retrieval (RAG)", weeks: "3-6", desc: "Vector similarity calculations, database indexes (HNSW), ingestion document loading, chunking pipelines, LangChain Expression Language (LCEL), LlamaIndex connectors, re-ranking" },
      { phase: "Structured Tools & Agents", weeks: "7-8", desc: "Function calling bindings, python execution loops, structured schemas validation (Pydantic/Instructor), ReAct agent loops, multi-agent frameworks (CrewAI), state graphs (LangGraph)" }
    ],
    insights: [
      {
        title: "💡 The GenAI Engineering Shift",
        text: "The barrier to entry for AI has shifted. Instead of training 100M+ parameter models from scratch, success relies on orchestrating pre-trained models. Mastering **RAG indexing pipelines**, **structured tool binding**, and **stateful multi-agent feedback graphs** enables you to build cutting-edge business solutions.",
        color: "#6366F1"
      }
    ],
    videos: [
      { title: "DeepLearning.ai ChatGPT Prompting Course", url: "https://www.youtube.com/watch?v=mEsleV16qdo" },
      { title: "freeCodeCamp LangChain Full Course", url: "https://www.youtube.com/watch?v=lG7Uxts9SXs" },
      { title: "freeCodeCamp Vector Database Course", url: "https://www.youtube.com/watch?v=klTvEwg3XJ4" },
      { title: "Andrew Ng Agentic Design Patterns Lectures", url: "https://www.youtube.com/watch?v=q6gSCG4J1_U" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
