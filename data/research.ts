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
      "An IoT middleware system written in C99 that lets devices on a single network port talk over MQTT, CoAP, HTTP, or QUIC — whichever protocol fits the conditions best. It picks the right protocol at runtime using a decision tree distilled from a cloud-trained neural network, so even constrained hardware can make smart choices without a cloud call.",
    details: `PaumIoT is built around a few core ideas:

Unified Protocol Gateway: One network port handles all four protocols. Byte-level packet inspection figures out which protocol each incoming packet uses, no config needed on the device side.

Protocol-Agnostic Message Model: Internally, all messages use the same format — UUID, ISO 8601 timestamp, binary payload, QoS level — regardless of which protocol delivered them.

Edge Intelligence for Protocol Selection: A distilled decision tree (about 2KB) runs directly on the device and picks protocols using a LinUCB contextual bandit. Decision latency is under 100μs, making it practical on ESP32 and similar hardware.

PRIoTP (Priority-Aware Reliable IoT Protocol): A custom protocol built into the system that balances message delivery guarantees against bandwidth and power limits.

Hardware tested on ESP32 and Linux-based edge devices with a minimal memory footprint.`,
    conference: "IEEE DCOSS-IoT 2026",
    paperNumber: "157",
    technologies: ["C99", "MQTT", "CoAP", "HTTP/QUIC", "Machine Learning", "Edge Computing", "Linux", "ESP32"],
    image: "/paumiot.png",
    links: {
      repository: "https://github.com/rahmanmehraj182/PaumIoT",
      paper: "https://dcoss.org",
    },
  },
];

export default data;
