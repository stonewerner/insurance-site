import React from "react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "./ui/button";
import { Github, Twitter, Facebook, Phone, MapPin } from "lucide-react";
import { Section, Container } from "./craft";
import Logo from "@/public/lange-logo-trans.png";

export default function Footer() {
  return (
    <footer id="footer">
      <Section>
        <Container className="grid gap-6">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">Lange & Associates</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={350}
                height={63}
                className="transition-all hover:opacity-75"
              />
            </Link>
            <p>
                <Balancer>
                    Lange and Associates has been &quot;The Contractors&apos; Insurance Specialist&quot; for over 35 years.
              </Balancer>
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Contact Information</h4>
              <p className="flex items-center gap-2">
                <Phone size={16} /> (800) 288-9555
              </p>
              <p className="italic">&quot;The Contractors&apos; Insurance Specialist&quot;</p>
              <p>Jonathan Lange, CIC, CRM</p>
              <p>CA License# 0760031</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h5 className="font-semibold">CA Office</h5>
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>22300 Cohasset St. Canoga Park, CA 91303</span>
                </p>
                <p>Tel: (818) 886-6800</p>
                <p>Cell: (818) 292-1246</p>
                <p>Fax: (818) 886-8659</p>
              </div>
              <div className="flex flex-col gap-1 mt-4">
                <h5 className="font-semibold">NY Office</h5>
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>604 Monterey Ave. Pelham Manor, NY 10803</span>
                </p>
                <p>Tel: (914) 738-1212</p>
                <p>Cell: (818) 292-1246</p>
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row">
            <Link href="/policy">Policy Page</Link>
            <Link href="/glossary">Glossary</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Github />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © <a href="/">Lange & Associates</a>. All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}