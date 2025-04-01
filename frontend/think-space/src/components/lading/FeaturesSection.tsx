import FeatureCard from './FeatureCard';
import {
  faBookOpen,
  faBullseye,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  const features = [
    {
      icon: faBookOpen,
      title: 'Wiki',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      description:
        "It's hard to move fast if you've not got a clunky and disorganized workspace. Centralize all your knowledge in Think Space instead.",
    },
    {
      icon: faBullseye,
      title: 'Projects',
      bgColor: 'bg-sky-100',
      textColor: 'text-sky-600',
      description:
        "Projects are complex. Let's Think Space bring speed and clarity with connected, AI-powered tools to manage any project.",
    },
    {
      icon: faFile,
      title: 'Docs',
      bgColor: 'bg-amber-100',
      textColor: 'text-amber-600',
      description:
        "Simple, Powerful, Beautiful. Communicate more efficiently with Think Space's flexible, user-friendly building blocks.",
    },
  ];

  return (
    <div className="grid justify-items-center px-8">
      <h2 className="font-extrabold text-3xl text-center mt-14">
        Write, Plan, Share. With AI at your side
      </h2>
      <p className="text-center font-semibold mt-4 mb-7">
        Think Space is the connected space where better, faster work happens
      </p>
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesSection;
