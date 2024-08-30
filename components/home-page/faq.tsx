import { Section, Container } from "@/components/craft";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://google.com",
  },
  {
    question: "Ut enim ad minim veniam?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const bidAndPerformanceBond: FAQItem[] = [
    {
      question: "How do I get a Bid and Performance Bond?",
      answer:
        "• The first step requires you to complete a lengthy questionnaire.\n" +
        "• Anticipate a couple of weeks for final approval, after you've answered all the questions.\n" +
        "• Approval is based on your credit history, equity you have in improved real estate in California, especially your home.\n" +
        "• The closer the first bid bond amount is to the sum of your assets, the more likely the bond will be issued for you.\n" +
        "• After the first bond has been satisfactorily completed, the next bond will be easier and, usually the company will be willing to cover a higher amount.\n" +
        "• The amount of bond required can often be negotiated.\n" +
        "EXAMPLE: Even though a contract may be for $200,000, contractors are paid as certain stages are completed. Sometimes they might accept a $50,000 bond instead of the full $200,000.",
    },
  ];
  
  const commercialVehicleCoverage: FAQItem[] = [
    {
      question: "What is Commercial Vehicle Coverage?",
      answer:
        "Commercial Vehicle Coverage is the limit of liability you must have to satisfy State law is sometimes regulated by vehicle weight. If the gross weight exceeds 10,000 lbs then you must carry at least $750,000 of coverage per occurrence in California. A company prefers (or may insist) that you carry commercial (rather than personal) coverage on a vehicle, especially if any of the following is true:\n" +
        "• The vehicle is EVER driven by employees.\n" +
        "• You have signs on the vehicle\n" +
        "• You EVER have an employee in the vehicle.\n" +
        "• You require a certificate of insurance showing that you have commercial coverage for your vehicle.\n" +
        "• The primary use of the vehicle is for commercial purposes.\n" +
        "• The vehicle is not normally used as a personal vehicle (e.g. a dump truck)\n" +
        "• The vehicle is very heavy and not considered a personal or recreational vehicle.",
    },
    {
      question: "Can I have more than one company insure my vehicles?",
      answer:
        "Never have more than one company insure your vehicles at any moment. If you do you lose coverages that might have otherwise apply. Automatic newly acquired vehicle coverage is one thing you lose. Also the deductibles from both companies are added together before paying you on any covered loss.",
    },
    {
      question: "Should I have the same or different coverage plans for my vehicles?",
      answer:
        "Each vehicle should have the exact same limit of LIABILITY coverage. Comprehensive and Collision Coverage's can vary as much as you wish. Coverage can be purchased as split or combined limit for the Liability Section of a Policy.",
    },
    {
      question: "Why Do You Need Commercial Vehicle Coverage?",
      answer: "It will pay your legal liability if you hurt someone or damaged/destroyed some of their property with your commercial vehicle.",
    },
    {
      question: "Which is better, Split Limit or Combined Single Limit?",
      answer: "Some people prefer the combined limit because an accident could be a case of your liability for only damaged property, or only bodily injury, but just to one person. You only have one limit (not three) to be concerned with. Split limit coverage is usually cheaper to purchase.",
    },
    {
      question: "What does UM stand for?",
      answer: "UM is a common abbreviation for Uninsured Motorists Coverage. It will pay to you and passengers in your car, for medical injuries and other associated financial losses in the event any of you are injured, the accident was the fault of another and that person was \"hit and run\" or just had no insurance.",
    },
    {
      question: "What does comprehensive mean?",
      answer: "Comprehensive: An insurance term to mean just about anything except a crash (and that would be collision coverage). It includes potential losses like falling aircraft, flood, theft of the car, vandalism...It is a very comprehensive list.",
    },
    {
      question: "What does Collision Losses in my policy refer to?",
      answer: "Collision Losses under this section of your policy refers to damage to your vehicle regardless of whose fault it is. Unless you go through the other party's insurance you must pay your deductible regardless whose fault the accident was. You may get it reimbursed from your company, but if it was the fault of another and he had insurance, you probably would do better to go directly through his insurance company.",
    },
  ];
  
  const generalLiability: FAQItem[] = [
    {
      question: "What is General Liability?",
      answer: "While it is important to have liability insurance, there is no legal amount of coverage you must have to operate within the legal guidelines of your license as a contractor. If you do residential work your customers are less likely to ask for proof of insurance than if you deal with more savvy commercial clients.",
    },
    {
      question: "Is there a penalty for underestimating your premium that you are getting quoted?",
      answer: "No penalty for underestimating at the time your estimated premium is quoted. You'll pay based on the minimum premium stated when you buy the policy, increased by payroll or gross receipts you report at each audit period.",
    },
    {
      question: "What is the annual premium based on?",
      answer: "The annual premium can be based on either payroll or gross receipts. If the premium is based on payroll the company will consider any payroll you have pay to a payroll service. If your rate is based on gross receipts the company considers a total of everything, including subcontracted costs, material, etc. The final price is subject to audit. The company can readjust the final price if your gross receipts or payroll have changed from your initial estimate.",
    },
    {
      question: "What are the most common types of coverage written in California?",
      answer: "Most common types of coverage written in California are\n" +
        "• FULL OCCURRENCE Under the full occurrence form you have coverage for claims which occur during the policy coverage period yet may not be discovered for years later.\n" +
        "• MODIFIED OCCURRENCE, and CLAIMS MADE. Under Claims Made, the policy will cover you for claims reported during the specified time limit defined in the policy. Usually the policy will exclude coverage for events which occurred prior to policy inception. You have a limited time after the conclusion of the policy to purchase \"tail-on\" coverage which will extend the reporting period for another year.",
    },
    // ... (other definitions)
  ];
  
  const licenseBond: FAQItem[] = [
    {
      question: "Why do I need a license Bond?",
      answer: "If a claim against your bond is paid, it will be both expensive and difficult for you to obtain future coverage for at least three years, whether you repay the bond company or not.",
    },
  ];
  
  const workersCompensation: FAQItem[] = [
    {
      question: "What needs Financing?",
      answer: "While almost any premium can be financed, the highest percentage of finance charge is assessed for the smallest balances to be set up into payments.",
    },
    {
      question: "When do I need to make a Claim?",
      answer: "Do not delay in advising your agent or company of a potential claim. If you wait too long, you violate terms of your policy and may be denied coverage. If you begin to pay for some of the loss, or sign any agreement accepting the responsibility for the loss, you cannot obligate the insurer to pay for the loss. Don't start paying for a claim unless you are certain that you can handle the claim to its final conclusion. Usually you won't be reimbursed for any money you paid to the claimant.",
    },
    {
      question: "How do I get Worker's Compensation?",
      answer: "It is easy to buy. After a four minute conversation with an insurance broker, you'll be far down the road to having your own policy.\n" +
        "• It is easy to control its cost. Because the rate is based on your payroll figures.\n" +
        "• It is easy to factor in the cost of Work Comp into your bid.",
    },
    // ... (other questions and answers)
  ];
  
  const allFAQs = [
    ...bidAndPerformanceBond,
    ...commercialVehicleCoverage,
    ...generalLiability,
    ...licenseBond,
    ...workersCompensation,
  ];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
