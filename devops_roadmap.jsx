const devopsWeeks = [
  {
    week: 1,
    phase: "Foundations",
    title: "Linux Administration & Shell Scripting",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Linux File System hierarchy, directory navigations, file attributes, and permissions (`chmod`, `chown`): [freeCodeCamp Linux CLI Tutorial](https://www.youtube.com/watch?v=wBp0Rb-ZJak)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Linux text processing tools: standard inputs/outputs, pipes, redirections, `grep`, `sed`, `awk`, and file archiving: [GeeksforGeeks Linux Text Processing](https://www.geeksforgeeks.org/text-processing-in-linux/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Learn Linux system administration: process monitoring (`top`, `ps`, `kill`), disk space management, and system services management via systemd: [GeeksforGeeks Linux System Administration](https://www.geeksforgeeks.org/system-administration-in-linux/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Write a Bash script automating local backups, checking resource usage, and sending alerts using variables, loops, and condition blocks: [freeCodeCamp Bash Scripting Guide](https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/)"
      ]}
    ]
  },
  {
    week: 2,
    phase: "Foundations",
    title: "Computer Networking & Server Security",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Computer Networking: OSI/TCP-IP models, IP addresses, subnets, gateways, route tables: [NetworkChuck Networking Course](https://www.youtube.com/playlist?list=PLIhvC56v6wIYVOxD6a3D2xH7338T0Y4X1)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Study network application protocols: DNS resolution flow, DHCP, HTTP/S request-response structure, and load balancing concepts: [GeeksforGeeks DNS Flow](https://www.geeksforgeeks.org/dns-domain-name-server-resolution-process/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Server Security: SSH configurations, SSH key authentication, port settings, and firewall configurations using UFW or IPTables: [GeeksforGeeks SSH Key Authentication](https://www.geeksforgeeks.org/ssh-key-based-authentication-in-linux/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn SSL/TLS certificates: asymmetric vs symmetric cryptography, public-private key signatures, and generating Let's Encrypt certificates: [GeeksforGeeks SSL/TLS Cryptography](https://www.geeksforgeeks.org/ssl-tls-handshake-process-in-networking/)"
      ]}
    ]
  },
  {
    week: 3,
    phase: "Containers",
    title: "Containerization with Docker",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn containerization basics: namespaces, cgroups, virtual machines vs containers, installing Docker: [TechWorld with Nana Docker Tutorial](https://www.youtube.com/watch?v=3c-iFnDc87c)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Write optimized Dockerfiles: base images, caching steps, multi-stage builds, non-root execution, and size optimization: [Docker Docs Optimized Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Docker volumes for state persistence, Docker port mappings, and container networks (bridge, host, overlay): [Docker Docs Volumes](https://docs.docker.com/storage/volumes/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn Docker Compose to orchestrate multi-container application stacks (e.g. API + Database + Redis) with environment variables: [Docker Docs Compose](https://docs.docker.com/compose/)"
      ]}
    ]
  },
  {
    week: 4,
    phase: "Orchestration",
    title: "Kubernetes Container Orchestration",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Kubernetes Architecture: control plane, worker nodes, kube-apiserver, etcd, scheduler, kubelet: [TechWorld with Nana Kubernetes Course](https://www.youtube.com/watch?v=X48VuDVv0do)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Kubernetes Workloads: writing YAML manifests for Pods, ReplicaSets, and Deployments, handling container restarts: [GeeksforGeeks Kubernetes Deployment](https://www.geeksforgeeks.org/kubernetes-deployment-yaml-file/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study Kubernetes Networking: Services (ClusterIP, NodePort, LoadBalancer), and Ingress Controllers (Nginx Ingress) for HTTP routing: [Kubernetes Services Guide](https://kubernetes.io/docs/concepts/services-networking/service/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn state configurations: ConfigMaps for environment settings, Secrets for sensitive keys, and persistent volume claims (PVCs) for storage: [GeeksforGeeks Kubernetes ConfigMap vs Secret](https://www.geeksforgeeks.org/difference-between-kubernetes-configmaps-and-secrets/)"
      ]}
    ]
  },
  {
    week: 5,
    phase: "CI/CD Pipeline",
    title: "Continuous Integration & Deployment (CI/CD)",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand CI/CD philosophies: pipeline triggers, continuous integration, continuous delivery vs deployment: [DevOps Directive CI/CD Tutorial](https://www.youtube.com/watch?v=R8_veQiYBjI)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master GitHub Actions workflows: writing YAML files defining actions, runners, triggers (push, pull_request), jobs, and steps: [GitHub Actions Quickstart Guide](https://docs.github.com/en/actions/writing-workflows/quickstart)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Build a CI pipeline: configuring automated linting, unit tests, Docker builds, and pushing images to Docker Hub or Amazon ECR: [GitHub Actions Docker Build CI](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn CD patterns: blue-green deployment, canary releases, and GitOps fundamentals using tools like ArgoCD or Flux: [GeeksforGeeks Deployment Strategies](https://www.geeksforgeeks.org/deployment-strategies-in-devops/)"
      ]}
    ]
  },
  {
    week: 6,
    phase: "Infrastructure",
    title: "Infrastructure as Code (IaC) with Terraform",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Learn Infrastructure as Code, declarative vs imperative styles, installing Terraform: [freeCodeCamp Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRCo)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Master Terraform Syntax: providers configuration, resource blocks, input variables, output values, and local values: [Terraform Official Syntax Guide](https://developer.hashicorp.com/terraform/language/syntax/configuration)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Understand Terraform State: state files, remote state backends (S3/Consul), state locks, plan vs apply commands: [Terraform State Tutorial](https://developer.hashicorp.com/terraform/language/state)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Write a Terraform config provisioning a server and storage bucket on cloud (AWS EC2/S3 or GCP Compute/Storage): [Terraform AWS Get Started](https://developer.hashicorp.com/terraform/tutorials/aws-get-started)"
      ]}
    ]
  },
  {
    week: 7,
    phase: "Automation",
    title: "Configuration Management with Ansible",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Configuration Management, agentless model, installing Ansible: [Jeff Geerling Ansible Series](https://www.youtube.com/playlist?list=PL2_OBreMn7FqZkvMYt6ATFfCbWy7zFiXI)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Write Ansible Inventories to define host groups, setting up passwordless SSH control access: [Ansible How to build inventories](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Master Ansible Playbooks: writing task lists using modules (apt, yum, service, copy, template) with handler notifications: [Ansible Playbook Guide](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Learn Ansible Roles to structure configuration tasks modularly and reuse playbooks for web server provisioning: [Ansible Roles Guide](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_reuse_roles.html)"
      ]}
    ]
  },
  {
    week: 8,
    phase: "Observability",
    title: "Monitoring, Observability, & Cloud Services",
    hrs: 6,
    days: [
      { day: "Mon", hrs: 1.5, tasks: [
        "Understand Observability metrics, logs, and traces. Set up Prometheus for metrics scraping: [TechWorld with Nana Prometheus & Grafana](https://www.youtube.com/watch?v=h4Sl21lh6_0)"
      ]},
      { day: "Wed", hrs: 1.5, tasks: [
        "Build Grafana dashboards: connecting Prometheus source, writing PromQL queries, and setting up alerting rules: [Grafana Official Tutorials](https://grafana.com/docs/grafana/latest/tutorials/)"
      ]},
      { day: "Fri", hrs: 1.5, tasks: [
        "Study Centralized Logging systems (ELK Stack / Loki) to collect and parse application log outputs: [GeeksforGeeks ELK Stack Guide](https://www.geeksforgeeks.org/elk-stack/)"
      ]},
      { day: "Sun", hrs: 1.5, tasks: [
        "Review cloud architecture patterns: VPC subnets, route tables, IAM roles, security groups, database hosting, and high availability: [AWS Virtual Private Cloud Tutorial](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)"
      ]}
    ]
  }
];

window.devopsWeeks = devopsWeeks;

window.DevOpsRoadmap = function({ user }) {
  const config = {
    id: "devops",
    title: "DevOps Infrastructure & Orchestration",
    subtitle: "Command Line Scripting to High-Availability Observability",
    tagline: "Synapse · DevOps Engineer Track",
    description: "Master Linux shell structures, computer networking models, Docker container packaging, Kubernetes orchestration YAMLs, GitHub Actions CI/CD workflows, Terraform IaC states, Ansible provisioning, and Prometheus metrics.",
    accentColor: "#10B981",
    weeks: devopsWeeks,
    phases: [
      { phase: "System Foundations", weeks: "1-2", desc: "Linux shell scripting, permissions, process systemd, IP networks routing, SSL/TLS keys" },
      { phase: "Containers & K8s", weeks: "3-4", desc: "Docker multi-stage builds, compose networks, Kubernetes Pods/Services deployments, Ingress configs" },
      { phase: "Infrastructure Deploys", weeks: "5-8", desc: "GitHub Actions CI/CD pipelines, Terraform IaC state provisioning, Ansible configuration playbooks, Prometheus & Grafana observability alerts" }
    ],
    insights: [
      {
        title: "💡 Why DevOps & Infrastructure are Critical",
        text: "Code only adds value when it runs reliably in production. DevOps bridge the gap between software creation and deployment. Understanding **Docker optimization**, **Kubernetes orchestration**, and **Terraform provisioning** allows you to design self-healing, automated, highly available infrastructures that scale dynamically.",
        color: "#10B981"
      }
    ],
    videos: [
      { title: "TechWorld with Nana DevOps Roadmap", url: "https://www.youtube.com/playlist?list=PLdpzxOOAlwvI0O4PeKVV1-yJoX2AqIWuf" },
      { title: "NetworkChuck Networking playlist", url: "https://www.youtube.com/playlist?list=PLIhvC56v6wIYVOxD6a3D2xH7338T0Y4X1" },
      { title: "freeCodeCamp Terraform Course", url: "https://www.youtube.com/watch?v=SLB_c_ayRCo" },
      { title: "Jeff Geerling Ansible Series", url: "https://www.youtube.com/playlist?list=PL2_OBreMn7FqZkvMYt6ATFfCbWy7zFiXI" }
    ]
  };

  return <window.RoadmapRenderer user={user} config={config} />;
};
