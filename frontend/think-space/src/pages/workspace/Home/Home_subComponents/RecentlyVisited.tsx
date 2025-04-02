import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
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
    </motion.div>
  );
};

export default RecentlyVisited;
