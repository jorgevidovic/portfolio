import CoverParticles from "./components/CoverParticles"
import Introduction from "./components/Introduction";
import TransitionPage from "./components/TransitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction/>
      </div>
    </main>
  );
}
