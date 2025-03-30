import Header from '../components/layout/Header';
import HeroSection from '../components/layout/HeroSection';
import FeaturesSection from '../components/features/FeaturesSection';
import WindowControls from '../components/layout/WindowControls';
import Logo from '../assets/LetterT.svg';

const Landing = () => {
  return (
    <div className="min-h-screen overflow-hidden md:gap-16 flex px-5 md:px-0 md:flex-row flex-col bg-gray-100 mx-auto max-w-[1920px] py-3">
      <div className="flex flex-col basis-5/12 justify-between md:py-16 md:ps-16">
        <Header />
        <HeroSection />
        <figure className="grid items-end hidden md:flex">
          <img
            src={Logo}
            alt="Think Space Logo"
            className="logo w-14 inline-block mr-3"
          />
        </figure>
      </div>
      <section className="bg-white md:mt-16 mt-5 shadow-2xl rounded-3xl md:rounded-e-none w-full">
        <WindowControls />
        <FeaturesSection />
      </section>
    </div>
  );
};

export default Landing;
