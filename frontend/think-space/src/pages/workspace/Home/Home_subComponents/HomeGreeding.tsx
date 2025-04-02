import React from 'react';

interface AppSidebarProps {
  user: {
    imageUrl: string;
    name: string;
  };
}

const HomeGreeding = ({ user }: AppSidebarProps) => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };
  return (
    <h1 className="flex justify-center mb-20 text-3xl font-semibold fade-in-up">
      {getGreeting()}, {user.name}
    </h1>
  );
};

export default HomeGreeding;
