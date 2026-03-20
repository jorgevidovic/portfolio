"use client";

import Container from "@/app/components/Container";
import PortfolioBox from "@/app/components/PortfolioBox";
import TransitionPage from "@/app/components/TransitionPage";
import { useLang } from "@/app/lib/LangContext";
import { dataPortfolio } from "@/data";
import React from "react";

const ProjectsPage = () => {
  const { tr } = useLang();

  return (
    <Container>
      <TransitionPage />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center md:text-left md:mt-10 font-extrabold mb-10">
        {tr("projects_title")}
      </h1>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl items-stretch">
        {dataPortfolio.map((data) => (
          <PortfolioBox key={data.id} data={data} />
        ))}
      </div>
    </Container>
  );
};

export default ProjectsPage;
