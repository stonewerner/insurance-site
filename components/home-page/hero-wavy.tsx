'use client'

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { WavyBackground } from '../ui/wavy-background';
import { useTheme } from 'next-themes';
import Balancer from "react-wrap-balancer";


export default function HeroWavy() {
    const { resolvedTheme } = useTheme();
    const [backgroundFill, setBackgroundFill] = useState<string | null>(null);

    useEffect(() => {
        setBackgroundFill(resolvedTheme === 'dark' ? "black" : "white");
    }, [resolvedTheme]);

    return (
        <Section className="pb-0">
            <Container className="pb-0">
                <div className="flex flex-col items-center text-center">
                    <WavyBackground className="max-w-4xl mx-auto pb-0" backgroundFill={backgroundFill}> {/* Reduced bottom padding */}
                        <p className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center text-black dark:text-white pt-150"> {/* Added text color classes and top padding */}
                        <Balancer>
                            Lange & Associates Insurance Agency, Inc.
                        </Balancer>
                        </p>
                    </WavyBackground>
                </div>
            </Container>
        </Section>
    );
}