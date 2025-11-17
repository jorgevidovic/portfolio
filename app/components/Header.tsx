import React from "react";
import MotionTransition from "./TransitionComponent";
import Link from "next/link";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-2"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex px-2">
          <Link href="/">
            <h2 className="my-3 text-4xl font-bold text-center md:text-left">
              Jorge
              <span className="text-secondary"> Vidovic</span>
            </h2>
          </Link>

          <div className="flex items-center justify-center gap-7 px-2">
            {socialNetworks.map(({ logo, src, id, name }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar perfil de ${name}`}
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
