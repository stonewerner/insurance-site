import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";
import Placeholder from "@/public/business-stock.png";

export default function Hero2() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
          <Button
            asChild
            className="not-prose mb-6 flex w-fit"
            size="sm"
            variant="outline"
          >
            <Link href="#cta">
              Get a Free Quote <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          <h1 className="!mb-0">
            <Balancer>
              Lange & Associates Insurance Agency, Inc.
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              &quot;The Contractors&apos; Insurance Specialist.&quot; We&apos;ve been providing expert insurance solutions for over 25 years.
            </Balancer>
          </h3>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="not-prose h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="Lange and Associates Insurance"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}