import CircleImage from "@/app/components/CircleImage";
import Container from "@/app/components/Container";
import PortfolioBox from "@/app/components/PortfolioBox";
import TransitionPage from "@/app/components/TransitionPage";
import { dataPortfolio } from "@/data";
import React from "react";

const ProjectsPage = () => {
  return (
    <Container>
      <TransitionPage />
      <div className="flex flex-col justify-center h-full mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center md:text-left md:mt-10 font-bold md:px-20">
          Proyectos
        </h1>
      </div>

      <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
        {dataPortfolio.map((data) => (
          <PortfolioBox key={data.id} data={data} />
        ))}
      </div>

      <CircleImage />
    </Container>
  );
};

export default ProjectsPage;
