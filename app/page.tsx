import CoverParticles from "./components/CoverParticles"
import Introduction from "./components/Introduction";
import TransitionPage from "./components/TransitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="relative flex min-h-[100vh] h-full bg-gradient-cover bg-no-repeat overflow-hidden">
        {/* Decorative top-right glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
        <CoverParticles />
        <Introduction/>
      </div>
    </main>
  );
}
