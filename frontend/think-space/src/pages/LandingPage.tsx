import Header from '../components/lading/Header';
import HeroSection from '../components/lading/HeroSection';
import FeaturesSection from '../components/lading/FeaturesSection';
import WindowControls from '../components/lading/WindowControls';
import Logo from '../assets/LetterT.svg';

const Landing = () => {
  return (
    <div className="min-h-screen overflow-hidden md:gap-16 flex px-5 md:px-0 md:flex-row flex-col bg-gray-100 mx-auto pb-10 max-w-[1920px] py-3">
      <div className="flex flex-col basis-5/12 justify-between md:py-16 md:ps-16">
        <Header />
        <HeroSection />
        <figure className="items-end hidden md:flex fade-in-up">
          <img
            src={Logo}
            alt="Think Space Logo"
            className="logo w-14 inline-block mr-3"
          />
        </figure>
      </div>
      <section className="bg-white md:mt-16 mt-5 shadow-2xl rounded-3xl md:rounded-e-none w-full fade-in-left-to-right">
        <WindowControls />
        <FeaturesSection />
      </section>
    </div>
  );
};

export default Landing;
