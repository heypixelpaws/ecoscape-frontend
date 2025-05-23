import {
  Leaf,
  Paintbrush,
  Recycle,
  Clock,
  DollarSign,
  UserRoundCheck,
} from "lucide-react";

const faq = [
  {
    icon: Leaf,
    question: "What makes Ecoscape's designs sustainable?",
    answer:
      "Our designs prioritize eco-friendly materials, energy efficiency, and waste reduction. We use renewable resources, implement water-saving fixtures, and focus on creating spaces that promote well-being and environmental consciousness.",
  },
  {
    icon: Paintbrush,
    question: "How long does a typical interior design project take?",
    answer:
      "Project timelines vary based on scope and complexity. A small room redesign might take 4-6 weeks, while a full home renovation could take 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    icon: Recycle,
    question: "Do you work with recycled or upcycled materials?",
    answer:
      "We love incorporating recycled and upcycled materials into our designs. This includes reclaimed wood, recycled glass, and repurposed furniture. It's a great way to add unique character while being environmentally responsible.",
  },
  {
    icon: DollarSign,
    question: "What's the cost range for your services?",
    answer:
      "Our pricing varies based on project scope, materials, and labor. We offer packages starting from $5,000 for single room designs, up to comprehensive home renovations. We provide detailed quotes after our initial consultation.",
  },
  {
    icon: Clock,
    question: "How does the design process work?",
    answer:
      "Our process includes an initial consultation, concept development, design presentation, revisions, and implementation. We collaborate closely with you at each stage to ensure the final result aligns with your vision and sustainability goals.",
  },
  {
    icon: UserRoundCheck,
    question: "Do you offer virtual design consultations?",
    answer:
      "Yes, we offer virtual consultations for clients who prefer remote services. We use video calls, 3D modeling, and digital mood boards to bring your sustainable design vision to life, no matter where you're located.",
  },
];

const FAQSection = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="wrapper w-full">
        <h2 className="text-center text-2xl font-medium !leading-[1.15] tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Frequently Asked{" "}
          <span className="font-bold text-[#4CAF50]">Questions</span>
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground sm:mt-3 sm:text-base md:text-lg">
          Common questions about our sustainable design and construction
          services.
        </p>

        <div className="mt-8 grid gap-4 rounded-xl outline outline-[1px] outline-background sm:mt-12 sm:gap-6 md:grid-cols-2">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-4 sm:p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4CAF50]/10 text-[#4CAF50] sm:h-10 sm:w-10">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h3 className="mb-1 mt-2 text-base font-semibold tracking-tight sm:mb-2 sm:mt-3 sm:text-lg md:text-xl">
                {question}
              </h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                {answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
