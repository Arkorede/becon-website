// import becon_bg from "./assets/becon_bg.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Faq from "./components/Faq";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import "./App.css";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <div className="max-[412px]:w-[412px]">
        <Header />
        <Hero />
        <About />
        <Testimony />
        <Faq />
        <Questions />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}

//

export default App;
