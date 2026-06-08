const dlWeeks = [
  {
    week: 1,
    phase: "Foundations",
    title: "Introduction to Neural Networks & PyTorch",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn perceptrons, Multi-Layer Perceptrons (MLPs), and activation functions (Sigmoid, Tanh, ReLU, Softmax): [Andrej Karpathy Neural Networks Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUbhyKy)",
        "Understand backpropagation mathematics and the chain rule under the hood: [3Blue1Brown Backpropagation](https://www.youtube.com/watch?v=Ilg3gGewQ5U)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study loss functions (MSE, Cross-Entropy) and optimization algorithms (SGD, Adam, RMSprop)",
        "Master PyTorch basics: Tensors, autograd, and building models using `nn.Module`: [PyTorch Basics Tutorial](https://pytorch.org/tutorials/beginner/basics/intro.html)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Write a training loop in PyTorch with dataset loading, forward pass, loss calculation, backprop, and optimizer step"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Train a custom MLP on the MNIST dataset and evaluate its accuracy: [PyTorch MNIST Training Example](https://github.com/pytorch/examples/tree/main/mnist)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "Foundations",
    title: "Convolutional Neural Networks (CNNs) for CV",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand convolutions, channels, strides, padding, and pooling layers: [Stanford CS231n CNN Notes](https://cs231n.github.io/convolutional-networks/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study modern CNN architectures: ResNet (residual connections), VGG, and EfficientNet: [Overview of ResNet](https://towardsdatascience.com/an-overview-of-resnet-and-its-variants-5281e2f56035)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn Transfer Learning and using pre-trained weights in PyTorch via `torchvision.models`: [PyTorch Transfer Learning Tutorial](https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Build and train an image classifier on a custom dataset (CIFAR-10): [PyTorch Image Classifier Guide](https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Foundations",
    title: "Sequence Models: RNNs & LSTMs",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn sequence data representation, recurrent connections, and basic RNN hidden states: [Stanford CS224n RNN Slides](https://web.stanford.edu/class/cs224n/readings/cs224n-slides-lecture06-rnn.pdf)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Long Short-Term Memory (LSTM) cells, Gated Recurrent Units (GRUs), and resolving the vanishing gradient problem: [Colah's LSTM Blog](https://colah.github.io/posts/2015-08-LSTM/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study Sequence-to-Sequence (Seq2Seq) encoder-decoder models and Bahdanau attention: [PyTorch Seq2Seq Translation Tutorial](https://pytorch.org/tutorials/intermediate/seq2seq_translation_tutorial.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Write a character-level text generator from scratch using PyTorch: [Andrej Karpathy Character Language Model](https://www.youtube.com/watch?v=PaCmpygFfXo)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "Transformers",
    title: "The Transformer Architecture",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Self-Attention, Query/Key/Value projections, and scaled dot-product attention: [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Multi-head attention, positional encodings, and feed-forward networks: [The Annotated Transformer (PyTorch implementation)](https://annotated-transformer.github.io/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study encoder-decoder architectures, residual connections, and layer normalization: [Attention Is All You Need (Paper)](https://arxiv.org/abs/1706.03762)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Build a multi-head self-attention block in PyTorch from scratch: [Build GPT from Scratch Video](https://www.youtube.com/watch?v=kCc8FmEb1nY)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "Large Language Models",
    title: "Large Language Models (LLMs) & Pre-training",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn LLM families (GPT, BERT, Llama, Mistral) and the pre-training workflow: [Andrej Karpathy Intro to LLMs](https://www.youtube.com/watch?v=zjkBMFhNj_g)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study Byte-Pair Encoding (BPE), SentencePiece tokenizers, and vocabulary constraints: [Hugging Face Tokenizers Guide](https://huggingface.co/docs/tokenizers/index)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand training scaling laws, FP16/BF16 mixed precision, and GPU memory profiling: [Hugging Face Training Optimization](https://huggingface.co/docs/transformers/v4.18.0/en/performance)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Run inference locally using pre-trained Hugging Face transformers: [Hugging Face Quicktour](https://huggingface.co/docs/transformers/quicktour)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Large Language Models",
    title: "LLM Fine-Tuning & Alignment",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Supervised Fine-Tuning (SFT) and dataset engineering for instruction following: [Hugging Face SFT Trainer Docs](https://huggingface.co/docs/trl/sft_trainer)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Parameter-Efficient Fine-Tuning (PEFT) using LoRA (Low-Rank Adaptation) and QLoRA: [Hugging Face PEFT Guide](https://huggingface.co/docs/peft/index)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study alignment algorithms: RLHF (Reinforcement Learning from Human Feedback), PPO, and DPO (Direct Preference Optimization): [DPO TRL Guide](https://huggingface.co/blog/dpo-trl)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Fine-tune a small LLM (e.g. Llama-3-8B or Phi-3) using Unsloth LoRA on a custom instruction dataset: [Unsloth LoRA Notebooks](https://github.com/unslothai/unsloth)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Large Language Models",
    title: "RAG & Vector Databases",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Retrieval-Augmented Generation (RAG) concepts and embedding generators: [LangChain RAG Tutorial](https://python.langchain.com/v0.2/docs/tutorials/rag/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study Vector database structures, indexing (HNSW, IVFFlat), and Vector DBs (Chroma, Pinecone): [Pinecone Vector Databases Course](https://www.pinecone.io/learn/vector-database/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn text chunking strategies, metadata filtering, and semantic query expansions using LangChain or LlamaIndex: [LangChain Academy](https://academy.langchain.com/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Build a local RAG pipeline querying your personal PDF collection with a vector store"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Interview Practice",
    title: "LLM Security, Agents & Evaluation",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Study Prompt Engineering, prompt injections, jailbreaks, and output validation guardrails: [DeepLearning.ai Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Learn LLM evaluation benchmarks (MMLU, GSM8k) and RAG system evaluation metrics: [Ragas RAG Evaluation Framework](https://docs.ragas.io/en/stable/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study LLM Agents, tool calling capabilities, and the ReAct reasoning-acting loop: [LangChain Agents Guide](https://python.langchain.com/v0.2/docs/concepts/#agents)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Perform a comprehensive evaluation report on your RAG pipeline: [DeepLearning.ai LLM Application Evaluation](https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/)"
      ]}
    ]
  }
];

window.dlWeeks = dlWeeks;

window.DeepLearningRoadmap = function({ user }) {
  const config = {
    id: "dl",
    title: "Deep Learning & Large Language Models",
    subtitle: "Neural Networks to Generative AI Applications",
    tagline: "Synapse · Deep Learning Track",
    description: "Master multi-layer perceptrons, backpropagation, CNNs for computer vision, RNN sequence models, the Transformer architecture, LLM pre-training, PEFT/LoRA fine-tuning, RAG systems, and LLM evaluation.",
    accentColor: "#8B5CF6",
    weeks: dlWeeks,
    phases: [
      { phase: "Foundations", weeks: "1-3", desc: "PyTorch tensors, backprop calculus, CNN CV classifiers, RNN sequence models" },
      { phase: "Transformers", weeks: "4", desc: "Attention mechanism, multi-head attention, encoder-decoder transformers" },
      { phase: "Large Language Models", weeks: "5-7", desc: "Pre-training, scaling laws, subwords, PEFT LoRA fine-tuning, RAG, Pinecone vector stores" },
      { phase: "Interview Practice", weeks: "8", desc: "Prompt injection defenses, LLM agent tool calling, Ragas evaluations" }
    ],
    insights: [
      {
        title: "💡 Why Deep Learning & LLMs are Essential",
        text: "Generative AI is shifting how products are built. Knowing how **self-attention** works allows you to debug LLM hallucinations. Understanding **LoRA** lets you deploy custom task-specific models at a fraction of the cost of full models. Developing secure **RAG** systems is the most sought-after skill in AI engineering today.",
        color: "#8B5CF6"
      }
    ],
    videos: [
      { title: "Andrej Karpathy Neural Networks Zero to Hero", url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUbhyKy" },
      { title: "Stanford CS224n NLP Course (YouTube)", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOFznDyHyWgspRMCVUdCcRY" },
      { title: "Hugging Face Transformers Guides", url: "https://huggingface.co/docs/transformers/index" },
      { title: "DeepLearning.ai Short LLM Courses", url: "https://www.deeplearning.ai/short-courses/" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
