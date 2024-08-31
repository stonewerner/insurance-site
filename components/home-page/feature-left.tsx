// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/insurance-stock.jpg";

const FeatureLeft = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">Gary Erdossy</h3>
          <h4 className="!my-0">CEO, Nexus Residential</h4>
          <p className="font-light leading-[1.4] opacity-70">
          In spite of a strong relationship with our former broker, I gave Lange & Associates a chance to quote my condo wrap policy and it was one of the best decisions I ever made! I saved over $750,000 on a project specific policy. With Lange & Associates, my insurance costs will never be a deal breaker again. Thanks, Jonathan!,

          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureLeft;
