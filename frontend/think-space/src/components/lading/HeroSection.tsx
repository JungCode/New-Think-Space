import { SignInButton, useClerk } from '@clerk/clerk-react';

const HeroSection = () => {
  const { redirectToSignIn } = useClerk();

  return (
    <main className="basis-1/3 md:my-0 my-10 flex md:items-start flex-col items-center fade-in-up">
      <h1 className="text-5xl font-bold mb-10 md:max-w-sm md:text-start text-center">
        Build perfect docs, together.
      </h1>
      <div className="inline-block bg-black text-white rounded-full py-2 px-5 hover:bg-gray-600 hover:scale-x-105 transform transition duration-200">
        <SignInButton />
      </div>
      <button
        onClick={() => redirectToSignIn()}
        className="block mt-3 hover:text-gray-600 hover:translate-x-4 transform transition duration-300"
      >
        Get started -&#62;
      </button>
    </main>
  );
};

export default HeroSection;
