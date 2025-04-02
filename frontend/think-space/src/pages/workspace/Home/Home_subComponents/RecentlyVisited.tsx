import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AppSidebarProps {
  user: {
    imageUrl: string;
    name: string;
  };
}

const RecentlyVisited = ({ user }: AppSidebarProps) => {
  const Cards = [
    { title: '👾', description: 'Testing card', lastHours: '2 hours ago' },
    { title: '👾', description: 'Testing card', lastHours: '2 hours ago' },
    { title: '👾', description: 'Testing card', lastHours: '2 hours ago' },
    { title: '👾', description: 'Testing card', lastHours: '2 hours ago' },
    { title: '👾', description: 'Testing card', lastHours: '2 hours ago' },
    { title: '👾', description: 'Testing card', lastHours: '2 hours ago' },
    { title: '👾', description: 'Testing card', lastHours: '2 hours ago' },
  ];

  return (
    <div className="flex flex-row justify-center gap-3 ">
      {Cards.map((item, index) => (
        <Card
          key={index}
          className="max-w-36 aspect-square recent-card__container flex flex-col justify-between"
        >
          <CardHeader>
            <CardTitle className="mt-2">{item.title}</CardTitle>
            <CardDescription className="font-bold text-ellipsis w-full h-4 overflow-hidden">
              {item.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="gap-2 text-gray-600">
            <Avatar className="w-5 h-5">
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-xs">{item.lastHours}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default RecentlyVisited;
