import Header from "../../components/index/Header";
import AboutTheApp from "../../components/index/AboutTheApp";
import HowWeDoIt from "../../components/index/HowWeDoIt";
function LandingPage() { 
  return (
    <div className="space-y-40 grow pb-20 ">
      <section className={`flex justify-start pt-40 px-14 w-full h-screen`}>
        <Header/>   
      </section>
      <AboutTheApp/>
      <HowWeDoIt/>
    </div>
  );
}

export default LandingPage