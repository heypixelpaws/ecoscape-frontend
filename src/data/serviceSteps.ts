import {
  PhoneCall,
  ClipboardList,
  Presentation,
  FileCheck,
  Hammer,
  Key,
} from "lucide-react";

export const serviceSteps = [
  {
    icon: PhoneCall,
    title: "1. Initial Consultation",
    description:
      "Begin your journey with a free consultation. Share your vision, requirements, and budget with our experts. We'll discuss your project scope and answer any questions you might have about our services and process.",
  },
  {
    icon: ClipboardList,
    title: "2. Project Assessment",
    description:
      "Our team conducts a detailed assessment of your requirements. For interior projects, we calculate per square foot rates starting from 600 tk/sft for basic packages to 1000 tk/sft for premium solutions. Building design consultancy starts at 15 tk/sft.",
  },
  {
    icon: Presentation,
    title: "3. Design Proposal",
    description:
      "Receive a comprehensive design proposal including 3D visualizations, layout plans, and material suggestions. For interior projects, choose between Basic and Premium packages with varying features and warranty options.",
  },
  {
    icon: FileCheck,
    title: "4. Contract & Planning",
    description:
      "Once you're satisfied with the proposal, we'll finalize the contract and create a detailed project timeline. We'll outline payment schedules, material selections, and project milestones.",
  },
  {
    icon: Hammer,
    title: "5. Project Execution",
    description:
      "Watch your vision come to life as our skilled team begins the construction or installation process. We maintain strict quality control and provide regular updates on project progress.",
  },
  {
    icon: Key,
    title: "6. Project Handover",
    description:
      "Upon completion, we conduct a thorough inspection with you to ensure everything meets our high standards. Receive warranty documentation and maintenance guidelines for your new space.",
  },
] as const;
