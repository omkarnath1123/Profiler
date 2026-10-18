// Single source of truth for the site. Public site: no phone numbers,
// no internal facility codes or metrics -- keep it LinkedIn-level.

export const person = {
  name: "Omkar Nath",
  title: "Software Engineer III @ Walmart Global Tech",
  tagline: "Backend & distributed systems engineer building systems that move data reliably at scale.",
  location: "Bengaluru, India",
  email: "omkarnath1123@gmail.com",
};

export const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/omkarnath1123/" },
  { label: "GitHub", href: "https://github.com/omkarnath1123" },
  { label: "LeetCode", href: "https://leetcode.com/omkarnath1123" },
  { label: "Email", href: `mailto:${person.email}` },
];

export const about = [
  "At Walmart Global Tech I'm a core developer and one of the owners of Rapid-Relayer, the event publisher behind Walmart's supply-chain platform. It uses the transactional outbox pattern, so services never lose an event between their database and Kafka, and a consistent-hashing design, so it scales out across pods instead of depending on a single leader node.",
  "I also build allocation, fulfillment, slotting and warehouse-automation features for automated distribution-center launches, and support them through go-live.",
  "Before Walmart: Ethernet VPN services at Ciena, healthcare platforms at MphRx, and network-site deployment automation for Bharti Airtel across all 23 of its circles in India.",
];

export const experience = [
  {
    company: "Walmart Global Tech",
    role: "Software Engineer III",
    period: "Aug 2022 – Present",
    place: "Bengaluru",
    summary: "Backend engineer on Walmart's supply-chain platform, which runs receiving, inventory, allocation, fulfillment and loading for Walmart and Sam's Club distribution and fulfillment centers.",
    groups: [
      {
        name: "Rapid-Relayer – distributed event publisher (transactional outbox)",
        points: [
          "Core developer and one of the owners of the service that publishes warehouse events from databases to Kafka, IBM MQ, HTTP, GCP and BigQuery with near-100% delivery and minimal lag",
          "MurmurHash3 consistent-hashing ring with virtual nodes, leader election and automatic rebalancing, so throughput grows with the number of pods",
          "Built source and sink connectors (SQL Server, Cosmos DB, Azure Blob, Kafka, IBM MQ, HTTP, GCP, BigQuery); now runs in dozens of deployments across Walmart and Sam's Club",
          "Cut database size by about 40% with day-of-week partitioning, turning purges that took most of an hour per million rows into seconds",
          "Self-service onboarding UI, automated secret rotation, disaster recovery, message reconciliation and alerting",
        ],
      },
      {
        name: "Peacemaker – retry platform",
        points: ["Built its integration with Rapid-Relayer, republishing failed Kafka messages under per-app retry policies"],
      },
      {
        name: "Distribution-center launches",
        points: [
          "Automated grocery DC: orchestration steps for allocation, fulfillment and invoicing, the item-update flow to the automation system, and outbox publishing",
          "Two-tier fulfillment center: automatic release-and-allocate, a replenishment scheduler, consumable / shelf-life handling and short / damage flows",
          "Fulfillment-center expansion with automated conveyor lanes: slotting APIs for put-to-light signal resend, quantity correction and idempotent conveyor-control responses, backed by Redis",
          "Triaged and fixed production issues during go-live hypercare",
        ],
      },
    ],
  },
  {
    company: "Ciena",
    role: "Software Engineer 1B → 2A",
    period: "Dec 2020 – Jul 2022",
    place: "Gurugram",
    summary: "Ethernet VPN (EVPN) networking services. Promoted to 2A within 17 months.",
    groups: [{ points: [
      "Improved bulk-task execution performance by up to 270%",
      "Real-time heartbeat monitoring for network entities, visible in the UI",
      "Cut resource-adapter lag between microservices from seconds to milliseconds",
    ] }],
  },
  {
    company: "MphRx",
    role: "Software Engineer 2",
    period: "Sep 2019 – Nov 2020",
    place: "Gurugram",
    summary: "Backend engineer on healthcare platforms.",
    groups: [{ points: [
      "COVID-19 questionnaire module for practitioners and patients",
      "Identity-management portal that verifies patient documents against Austrian government servers",
      "Report and document generation for DICOM medical imaging files",
    ] }],
  },
  {
    company: "App Street (for Bharti Airtel)",
    role: "Software Developer",
    period: "Jun 2018 – Aug 2019",
    place: "Gurugram",
    summary: "Bharti Airtel's Network Digitization program.",
    groups: [{ points: [
      "Automated end-to-end site deployment for radio, microwave and fiber networks, used by all 23 Airtel circles across India",
      "Job-scheduling web crawler with Puppeteer",
    ] }],
  },
  {
    company: "Chegg Inc.",
    role: "Computer Science Expert (freelance)",
    period: "Nov 2017 – Aug 2019",
    place: "Remote",
    summary: "Answered computer science and coding questions for students worldwide on the Chegg Expert Q&A platform.",
    groups: [],
  },
  {
    company: "StartupFlux",
    role: "Backend Developer (intern)",
    period: "Dec 2016 – Jan 2017",
    place: "Noida",
    summary: "Scraping and crawling pipelines into MongoDB, feeding a model that predicts startup growth.",
    groups: [],
  },
];

export const education = {
  school: "Delhi Technological University (formerly DCE)",
  degree: "B.Tech, Mathematics and Computing",
  period: "2014 – 2018",
};

export const awards = [
  { title: "Bravo Award", by: "Walmart Global Tech", date: "Oct 2024",
    text: "For independently owning a Rapid-Relayer product lifecycle, from design to successful deployment." },
  { title: "Nirmaan Hackathon – 1st Runner-up", by: "Walmart Global Tech", date: "2024",
    text: "1st runner-up among 150+ teams with RAPTOR, a distributed task-processing library." },
];

export const skills = [
  { group: "Languages", items: ["Java", "SQL", "Python", "JavaScript", "Bash"] },
  { group: "Frameworks", items: ["Spring Boot", "Spring Kafka", "Kafka Streams", "Liquibase", "Redisson"] },
  { group: "Data & messaging", items: ["Apache Kafka", "SQL Server / Azure SQL", "Cosmos DB", "BigQuery", "IBM MQ", "Redis", "MongoDB"] },
  { group: "Cloud & ops", items: ["Kubernetes", "Docker", "Azure", "GCP", "Prometheus", "Grafana"] },
  { group: "Patterns", items: ["Transactional outbox", "Consistent hashing", "Leader election", "Retry & backoff", "Event-driven microservices"] },
];

export const projects = [
  { name: "RAPTOR", year: "2024",
    text: "Distributed task-processing library on a team's existing database: Murmur3 hash-range shards, leader-based rebalancing, delayed jobs and retries. Hackathon 1st runner-up." },
  { name: "LeetCode solutions", year: "2026", href: "https://github.com/omkarnath1123/LeetCode",
    text: "Java solutions to a few hundred LeetCode problems." },
  { name: "System Design notes", year: "2022", href: "https://github.com/omkarnath1123/System-Design",
    text: "Notes and case studies on system design." },
  { name: "Spider REST API", year: "2019", href: "https://github.com/omkarnath1123/Spider-REST-API",
    text: "A REST API that generates and updates its own data." },
  { name: "Algorithm Visualizer", year: "2019", href: "https://github.com/omkarnath1123/standalone-algorithm-visualizer",
    text: "Standalone app for learning algorithms interactively." },
];
