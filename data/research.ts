interface research {
  id: number;
  title: string;
  description: string;
  details: string;
  conference?: string;
  paperNumber?: string;
  technologies: string[];
  image: string;
  links: {
    repository: string;
    paper?: string;
  };
}

const data: research[] = [
  {
    id: 1,
    title: "PaumIoT: Protocol-Agnostic Universal Middleware for IoT",
    description:
      "Cutting-edge IoT middleware system written in C99 that unifies multi-protocol device connectivity within a single network port. Implements intelligent protocol selection using reinforcement learning and machine learning techniques, enabling IoT deployments to dynamically adapt communication protocols based on real-time network conditions.",
    details: `PaumIoT represents production-ready research code with enterprise-grade architecture featuring:

Unified Protocol Gateway: Accepts MQTT, CoAP, HTTP, and QUIC protocols on a single port with byte-level packet inspection for protocol identification.

Protocol-Agnostic Message Model: Internal message format with UUID identifier, ISO 8601 timestamps, binary payload, QoS levels, and cross-protocol compatibility.

Intelligent Protocol Selection: Combines distilled decision tree from cloud-trained neural network with LinUCB contextual bandit for real-time adaptive protocol selection. Compact footprint of ~2KB with sub-100μs decision latency on edge devices.

Priority-Aware Reliable Protocol: Novel PRIoTP implementation ensuring message delivery guarantees while optimizing for bandwidth and power constraints.

Hardware Support: Tested on ESP32 and Linux-based edge devices with minimal memory requirements.

Research Contribution: Bridges gap between lightweight edge devices and cloud ML systems through effective knowledge distillation for embedded systems.`,
    conference: "IEEE DCOSS-IoT 2026",
    paperNumber: "157",
    technologies: ["C99", "MQTT", "CoAP", "HTTP/QUIC", "Machine Learning", "Edge Computing", "Linux", "ESP32"],
    image: "https://via.placeholder.com/400x300/1f2937/ffffff?text=PaumIoT",
    links: {
      repository: "https://github.com/rahmanmehraj182/PaumIoT",
      paper: "https://dcoss.org",
    },
  },
];

export default data;
