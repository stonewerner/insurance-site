// React and Next.js
import Link from "next/link";

// Third-party libraries
import Balancer from "react-wrap-balancer";

// Custom components
import { Section, Container } from "@/components/craft";

// Icons
import { Coins, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  name: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    name: "Gary Erdossy",
    title: "CEO, Nexus Residential",
    href: "/",
    description:
    "In spite of a strong relationship with our former broker, I gave Lange & Associates a chance to quote my condo wrap policy and it was one of the best decisions I ever made! I saved over $750,000 on a project specific policy. With Lange & Associates, my insurance costs will never be a deal breaker again. Thanks, Jonathan!",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    name: "Gary Erdossy",
    title: "CEO, Nexus Residential",
    href: "/",
    description:
    "In spite of a strong relationship with our former broker, I gave Lange & Associates a chance to quote my condo wrap policy and it was one of the best decisions I ever made! I saved over $750,000 on a project specific policy. With Lange & Associates, my insurance costs will never be a deal breaker again. Thanks, Jonathan!",
  },
];

const FeatureDouble = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Kind words from satisfied clients
            </Balancer>
          </h3>
          {/*<h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Balancer>
        </h4>*/}

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(
              ({ icon, name, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h3 className="text-xl text-primary">{name}</h3>
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureDouble;
