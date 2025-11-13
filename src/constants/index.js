import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  temperaturesensor,
  hangle,
  yelprecommender,
  p2pmessaging,
  pipelinedcpu,
  coverImage,
  asksqlImage,
  digitalFilterImage,
  llmTeachingImage,
  pintosImage,
  pickleballImage,
  uiGeneratorImage,
  dbLogAnalyzerImage,
  barclaysLogo,
  nihLogo,
  buLogo,
  mimLogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "experiences",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Markets Summer Analyst",
    company_name: "Barclays",
    icon: barclaysLogo,
    iconBg: "#003366",
    date: "May 2025 - Aug 2025",
    points: [
      "Rates Options Trading | Electronic Trading",
      "Analyzed market data and trading patterns to support quantitative trading strategies",
      "Developed tools for electronic trading systems and market analysis",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "The National Institutes of Health (NIH)",
    icon: nihLogo,
    iconBg: "#003F87",
    date: "May 2024 - Aug 2025",
    points: [
      "Applied Python and Computer Vision techniques to biomedical research projects",
      "Developed data analysis pipelines for large-scale biomedical datasets",
      "Collaborated with researchers to analyze and visualize complex scientific data",
    ],
  },
  {
    title: "Teaching Assistant - Statistics and Data Science",
    company_name: "Boston University",
    icon: buLogo,
    iconBg: "#CC0000",
    date: "Sep 2024 - Present",
    points: [
      "Teach statistical concepts and data visualization techniques to engineering students",
      "Support Python programming and data analysis coursework",
      "Guide students through assignments and provide feedback on statistical analysis projects",
    ],
  },
  {
    title: "Research Assistant at BOTLAB",
    company_name: "Boston University",
    icon: buLogo,
    iconBg: "#CC0000",
    date: "Sep 2023 - Sep 2025",
    points: [
      "Applied Python and MATLAB for biomedical imaging and optical technology research",
      "Developed data processing pipelines for biomedical image analysis",
      "Collaborated with researchers on cutting-edge optical technologies",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "MIM Software",
    icon: mimLogo,
    iconBg: "#000000",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Built data pipelines and ETL processes for healthcare software applications",
      "Created visualizations using Tableau and Microsoft Power BI",
      "Developed data integration solutions for medical imaging software",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Virtual PICKLEBALL Game",
    description: "Coming Soon",
    comingSoon: true,
    detailedDescription: "We're developing an interactive pickleball paddle system that integrates advanced motion sensing and haptic feedback to create a realistic virtual pickleball experience within an Unreal Engine-based virtual environment.\n\nThe core objective is to design and build a \"smart paddle\" equipped with IMUs (Inertial Measurement Units), specifically accelerometers and gyroscopes, to track the paddle's orientation and motion in real-time. The paddle will interface with an Unreal Engine game environment, allowing players to engage in a virtual game of pickleball with lifelike ball dynamics and paddle responses.\n\nTo enhance realism, the paddle will feature localized haptic actuators that deliver tactile feedback based on the virtual point of impact, simulating the sensation of the ball striking different areas of the paddle surface. This project bridges mechanical design, electronics, and immersive software to create a next-generation sports simulation and training tool.",
    features: [],
    tags: [],
    image: pickleballImage,
    source_code_link: "",
  },
  {
    name: "UI GENERATOR",
    description: "Coming Soon",
    comingSoon: true,
    detailedDescription: "We're developing a UI Generator that produces image-to-code generation for simple website UIs. When given a photo of a proposed UI sketch from Photoshop or Figma, the system outputs a single page of HTML/CSS prototype that preserves the structure and approximate layout.\n\nOur approach implements a vision-to-code transformer pipeline that couples a pretrained Vision Transformer (ViT) encoder with a transformer-based autoregressive decoder that outputs structured HTML tokens. The overall design is inspired by prior work such as Pix2Code, but our model leverages modern transformer architectures and pretraining strategies to generalize better across diverse sketch styles and layouts.\n\nWe're using two established datasets: Pix2Code with ~1,500 paired GUI screenshots and markup sequences, and a 10K-20K subset of RICO containing Android UI screenshots with view hierarchies converted to HTML-like structures. The model will be evaluated using token-level accuracy, BLEU score, and exact match rate to assess structural and syntactic fidelity. Our goal is to address limitations in current image-to-text models that fail to generalize for diverse sketch styles, produce incomplete structured HTML, or fail to consider spatial relationships.",
    features: [],
    tags: [],
    image: uiGeneratorImage,
    source_code_link: "https://github.com/leophung21/UIDesigner",
  },
  {
    name: "DATABASE LOG ANALYZER",
    description: "Coming Soon",
    comingSoon: true,
    detailedDescription: "We're developing an intelligent database log analysis system that leverages Large Language Models (LLMs) to automate diagnosis and troubleshooting of database issues. The system transforms raw database logs into structured, queryable data and uses AI to help operators quickly identify root causes of failures.\n\nThe core architecture involves converting raw log files (XML/JSON format) into normalized schemas stored in DuckDB, an analytical database optimized for SQL-based analysis. The system generates time-windowed rollups (1s, 10s, 60s) to identify patterns and anomalies in metrics like latency, durability lag, and queue sizes.\n\nUsing LLM-powered analysis, the system can answer operator questions about log events, generate targeted SQL queries to investigate anomalies, and provide confidence-scored diagnoses. When confidence is below a threshold, the system recursively proposes additional queries until it reaches sufficient certainty. The AI also suggests next-step actions based on curated runbooks.\n\nThe entire workflow is accessible through a CLI interface, allowing operators to run queries, review AI suggestions, and validate results directly. The system includes anomaly detection using statistical methods (EWMA, z-score) and can handle large log volumes through intelligent chunking strategies that prioritize recent or anomaly-rich time windows.",
    features: [],
    tags: [],
    image: dbLogAnalyzerImage,
    source_code_link: "https://github.com/EC528-Fall-2025/DB-LogAnalyzer",
  },
  {
    name: "PINTOS OPERATING SYSTEM",
    description:
      "Complete OS implementation with threads, user programs, and virtual memory",
    detailedDescription:
      "I implemented a complete operating system based on Pintos, a teaching OS for 80x86 architecture. The project involved building core OS components from the ground up, starting with thread management and progressing through user programs, virtual memory, and file systems.\n\nThe implementation began with thread scheduling and synchronization primitives, including priority scheduling, multi-level feedback queues, and efficient lock/condition variable implementations. I then developed the user program execution system, implementing system calls, process management, and program loading mechanisms.\n\nThe virtual memory implementation included demand paging, page replacement algorithms, and memory-mapped files. The file system component featured extensible file support, subdirectories, and buffer cache management. Throughout the project, I worked with low-level system programming, debugging kernel-level issues, and optimizing performance-critical code paths.",
    features: [
      "Thread management with priority scheduling",
      "User program execution and system calls",
      "Virtual memory with demand paging",
      "Page replacement algorithms",
      "File system with subdirectories",
      "Buffer cache management",
      "Synchronization primitives (locks, semaphores)",
      "Multi-level feedback queue scheduling"
    ],
    tags: [
      {
        name: "Operating Systems",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "Systems Programming",
        color: "pink-text-gradient",
      },
      {
        name: "Kernel Development",
        color: "purple-text-gradient",
      },
    ],
    image: pintosImage,
    source_code_link: "https://github.com/eg-conley/EC440",
  },
  {
    name: "ASKSQL",
    description:
      "Chat-based data explorer with natural language queries",
    detailedDescription:
      "AskSQL is a chat-based data explorer that lets you load CSV files and query them with natural language using GPT and SQLite. No SQL knowledge required—just ask questions in plain English and get instant answers from your data.\n\nBuilt with Python, the application leverages GPT's natural language understanding to translate user queries into SQL statements, which are then executed against a SQLite database created from uploaded CSV files. The system handles data loading, schema inference, and query generation automatically.\n\nAskSQL makes data analysis accessible to everyone, allowing users to explore datasets, generate insights, and answer questions without writing a single line of SQL code.",
    features: [
      "Natural language to SQL conversion",
      "CSV file upload and processing",
      "Automatic schema inference",
      "SQLite database integration",
      "GPT-powered query generation",
      "Interactive chat interface",
      "No SQL knowledge required"
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "GPT",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "purple-text-gradient",
      },
    ],
    image: asksqlImage,
    source_code_link: "https://github.com/vanshikachaddha/AskSQL",
  },
  {
    name: "LLM TEACHING ASSISTANT",
    description:
      "AI-powered document analyzer for educators",
    detailedDescription:
      "I developed AIProf, a document and inquiry assistant built with FastAPI and OpenAI's Assistant API. The system helps educators automatically generate teaching materials, provide feedback on student submissions, and assign grades through intelligent document analysis.\n\nThe application supports uploading and analyzing multiple PDF files via OpenAI's Assistant API, enabling prompt-based interaction with uploaded documents through a DocBot interface. It also includes a ChatBot for general Q&A inquiries. The system features local SQLite document storage with save, read, and list endpoints, allowing educators to manage and access documents efficiently.\n\nBuilt with a FastAPI backend and a simple frontend interface, the application is fully dockerized and includes GitHub Actions CI integration. The system leverages large language models to assist teachers in automating routine tasks, allowing them to focus on more meaningful educational interactions.",
    features: [
      "PDF document upload and analysis via OpenAI Assistant API",
      "Prompt-based interaction with uploaded documents (DocBot)",
      "General Q&A assistant (ChatBot)",
      "Local SQLite document storage",
      "REST API endpoints for document management",
      "Web interface for easy interaction",
      "Dockerized deployment",
      "GitHub Actions CI integration"
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "purple-text-gradient",
      },
    ],
    image: llmTeachingImage,
    source_code_link: "https://github.com/vanshikachaddha/LLM-Teaching-Assistant",
  },
  {
    name: "PIPELINED MIPS CPU",
    description:
      "Pipelined processor with hazard detection and data forwarding",
    detailedDescription:
      "I implemented a pipelined MIPS CPU with comprehensive hazard detection and data forwarding capabilities. This Verilog-based processor handles Read After Write (RAW) hazards using forwarding units, eliminating the need for frequent pipeline stalls.\n\nThe system implements one-ahead hazard detection (EX/MEM forwarding) and two-ahead hazard detection (MEM/WB forwarding) to resolve data dependencies efficiently. The forwarding unit uses multiplexers connected to ALU inputs, selecting data from the appropriate pipeline stage based on register dependencies.\n\nFor load word (LW) hazards where data isn't immediately available, the system inserts NOPs appropriately. The design demonstrates proper forwarding logic, hazard resolution, and control signal evaluation, resulting in improved instruction throughput compared to a stalling approach.",
    features: [
      "One-ahead hazard detection (EX/MEM forwarding)",
      "Two-ahead hazard detection (MEM/WB forwarding)",
      "Data forwarding unit with multiplexer selection",
      "Load word (LW) hazard handling with NOP insertion",
      "RAW hazard resolution without pipeline stalls",
      "Comprehensive Verilog implementation",
      "Pipeline control and hazard unit integration"
    ],
    tags: [
      {
        name: "Verilog",
        color: "blue-text-gradient",
      },
      {
        name: "Computer Architecture",
        color: "green-text-gradient",
      },
      {
        name: "CPU Design",
        color: "pink-text-gradient",
      },
      {
        name: "Hardware",
        color: "purple-text-gradient",
      },
    ],
    image: coverImage,
    source_code_link: "https://github.com/vanshikachaddha/EC413_PipelinedCPUForwarding",
  },
  {
    name: "PEER-TO-PEER MESSAGING SYSTEM",
    description:
      "Decentralized P2P chat with real-time encryption",
    detailedDescription:
      "I built a Peer-to-Peer messaging system that enables direct communication between users through a publish-subscribe architecture. This Python application allows users to send real-time messages with local encryption.\n\nBuilt with sockets, Flask/FastAPI, and networking protocols, the system provides real-time messaging capabilities. Users can subscribe to channels, broadcast messages, and communicate directly with other peers.\n\nThe architecture uses distributed computing principles, allowing messages to flow directly between peers while maintaining encryption and real-time synchronization.",
    features: [
      "Real-time peer-to-peer messaging",
      "Local end-to-end encryption",
      "Publish-subscribe messaging model",
      "No central server required",
      "Flask/FastAPI backend architecture",
      "Socket-based networking",
      "Channel subscription system",
      "Distributed computing implementation"
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "P2P Networking",
        color: "green-text-gradient",
      },
      {
        name: "Flask/FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Encryption",
        color: "purple-text-gradient",
      },
    ],
    image: p2pmessaging,
    source_code_link: "https://github.com/vanshikachaddha/Peer-to-Peer-Messaging-System",
  },
  {
    name: "DIGITAL FILTERING + CONVOLUTION SYSTEM",
    description:
      "UART-based FPGA system with FIR filters and signal processing",
    detailedDescription:
      "I developed a comprehensive UART (Universal Asynchronous Receiver/Transmitter) system with digital filtering capabilities for FPGA implementation. The system integrates debouncing, FIFO buffers, baud rate generation, and FIR (Finite Impulse Response) filters to enable real-time signal processing and data communication.\n\nThe design includes three main configurations: manual debugging mode for testing, automated UART for continuous communication, and filtered data processing mode that applies FIR filters to incoming signals. The system processes serial data through UART receivers and transmitters, buffering data in FIFO queues, and applying digital filters for noise reduction and signal enhancement.\n\nImplemented in Verilog HDL for Artix-7 FPGA, the system demonstrates advanced hardware design principles including state machines, data buffering, and real-time signal processing. The FIR filter module uses configurable coefficients to perform convolution operations on input data streams.",
    features: [
      "UART communication system with RX/TX modules",
      "FIR filter implementation for signal processing",
      "FIFO buffers for data queuing",
      "Debouncing module for stable input signals",
      "Baud rate generator for serial communication",
      "Convolution filter module",
      "Multiple operational configurations",
      "FPGA-based hardware implementation"
    ],
    tags: [
      {
        name: "Verilog",
        color: "blue-text-gradient",
      },
      {
        name: "FPGA",
        color: "green-text-gradient",
      },
      {
        name: "Digital Signal Processing",
        color: "pink-text-gradient",
      },
      {
        name: "Hardware Design",
        color: "purple-text-gradient",
      },
    ],
    image: digitalFilterImage,
    source_code_link: "https://github.com/YashP007/ENGEC311_FinalProj",
  },
  {
    name: "YELP RECOMMENDER SYSTEM",
    description:
      "Rust-based restaurant recommender using Yelp review data",
    detailedDescription:
      "For my DS 210 Final Project, I developed a restaurant recommender system that generates personalized restaurant recommendations by analyzing user-business review data from the Yelp dataset.\n\nBuilt primarily in Rust with data analysis in Jupyter Notebook, the system processes large-scale review datasets to identify patterns and preferences. The recommender leverages collaborative filtering and content-based approaches to match users with restaurants based on their review history, ratings, and preferences.\n\nThe system efficiently handles massive datasets, implementing optimized algorithms for recommendation generation. By analyzing user behavior patterns and restaurant characteristics, it delivers accurate, personalized suggestions that help users discover new dining experiences tailored to their tastes.",
    features: [
      "Large-scale data processing with Yelp dataset",
      "Personalized restaurant recommendations",
      "Collaborative filtering algorithms",
      "Rust-based performance optimization",
      "Data analysis with Jupyter Notebook",
      "User preference pattern recognition"
    ],
    tags: [
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "Data Science",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "purple-text-gradient",
      },
    ],
    image: yelprecommender,
    source_code_link: "https://github.com/vanshikachaddha/Yelp-Restaurant-Reccomender",
  },
  {
    name: "HANGLE",
    description:
      "Hangman + Wordle Hybrid Game",
    detailedDescription:
      "For my EC327 final project, I built HANGLE, a word-puzzle game that combines the logic of Wordle with the classic mechanics of Hangman. The name \"HANGLE\" comes from this blend — Hangman + Wordle.\n\nPlayers guess a hidden word within a limited number of attempts, receiving Wordle-style color feedback while also tracking incorrect letters like Hangman. I implemented the full game logic in C++, designed the user interface layout, and developed features such as input validation, result feedback, and clean visual styling.\n\nHANGLE delivers a fast, simple, and engaging word-guessing experience inspired by two popular puzzle genres.",
    features: [
      "Wordle-style color feedback system",
      "Hangman letter tracking mechanics",
      "C++ game logic implementation",
      "User interface design and layout",
      "Input validation and error handling",
      "Visual styling and result feedback"
    ],
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Game Development",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX Design",
        color: "pink-text-gradient",
      },
      {
        name: "Algorithms",
        color: "purple-text-gradient",
      },
    ],
    image: hangle,
    source_code_link: "https://github.com/vanshikachaddha/EC327_Hangle",
  },
  {
    name: "TEMPERATURE SENSOR",
    description:
      "Design + Assembly using OnShape CAD and Arduino",
    detailedDescription:
      "For my Hands-on Engineering course, I designed and assembled a fully functional temperature-sensing device that integrated principles from electrical, mechanical, and computer engineering.\n\nI built the system using an Arduino Uno, temperature sensor, LCD display, LEDs, buzzer, resistors, a 9V power supply, and supporting wiring. I followed a detailed circuit diagram to ensure accurate connections, soldered joints where necessary, and selected proper wire gauges based on current requirements to maintain safety and reliability.\n\nAfter assembly, I tested and evaluated the prototype's performance. The device delivered temperature readings comparable to standard thermometers, while also revealing opportunities for future refinement.",
    features: [
      "Arduino Uno microcontroller integration",
      "Temperature sensor with LCD display",
      "LED indicators and buzzer alerts",
      "OnShape CAD design and modeling",
      "Circuit assembly and soldering",
      "Performance testing and evaluation"
    ],
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "OnShape CAD",
        color: "green-text-gradient",
      },
      {
        name: "Hardware",
        color: "pink-text-gradient",
      },
      {
        name: "Electronics",
        color: "purple-text-gradient",
      },
      {
        name: "Embedded Systems",
        color: "blue-text-gradient",
      },
    ],
    image: temperaturesensor,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };