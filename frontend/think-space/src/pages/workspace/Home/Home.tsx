import { Clock, CalendarClock, Lightbulb, Book } from 'lucide-react';
import RecentlyVisited from './Home_subComponents/RecentlyVisited';
import UpcomingEvents from './Home_subComponents/UpcomingEvents';
import SuggestedForYou from './Home_subComponents/SuggestedForYou';
import Learn from './Home_subComponents/Learn';
import HomeGreeding from './Home_subComponents/HomeGreeding';

interface AppSidebarProps {
  user: {
    imageUrl: string;
    name: string;
  };
}

const Home = ({ user }: AppSidebarProps) => {
  const mainItems = [
    {
      title: 'Recently Visited',
      icon: Clock,
      children: <RecentlyVisited user={user} />,
    },
    {
      title: 'Upcoming Events',
      icon: CalendarClock,
      children: <UpcomingEvents />,
    },
    {
      title: 'Suggested for you',
      icon: Lightbulb,
      children: <SuggestedForYou />,
    },
    {
      title: 'Learn',
      icon: Book,
      children: <Learn />,
    },
  ];

  return (
    <div className="flex-col justify-center mt-0 max-w-full">
      <HomeGreeding user={user} />
      <div className="">
        <ul className="flex flex-col items-center">
          {mainItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-2 mb-12 max-w-[1080px] w-full"
            >
              <div className="flex items-center gap-2 text-gray-600 fade-in-up">
                <item.icon size={12} />
                <span className="text-xs font-medium">{item.title}</span>
              </div>
              <div>{item.children}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
