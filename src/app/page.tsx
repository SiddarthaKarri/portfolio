"use client";

import Container from '@/components/common/Container';
import Hero from '@/components/landing/Hero';
import Experience from '@/components/landing/Experience';
import Projects from '@/components/landing/Projects';
import CompetitiveProgramming from '@/components/cp/CompetitiveProgramming';
import Github from '@/components/landing/Github';

export default function Page() {
  return (
    <>
      <Container className="min-h-screen py-16 space-y-24">
        <Hero />
        <Experience />
        <Projects />
        <CompetitiveProgramming />
        <Github />
      </Container>
    </>
  );
}
