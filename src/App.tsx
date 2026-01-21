import { Header, Footer } from './components/layout';
import {
  Hero,
  About,
  Features,
  HowToPlay,
  CoreActions,
  Harvest,
  Scoring,
  Components,
  ComingSoon,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <HowToPlay />
        <CoreActions />
        <Harvest />
        <Scoring />
        <Components />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}

export default App;
