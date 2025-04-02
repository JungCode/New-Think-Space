import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const UpcomingEvents = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="rounded-lg overflow-hidden">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=956e9f63a01a6610e6b3fe9b772be62b807de1613b0b7df7623ce6a5d84aa2af%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh"
          className="w-full min-h-[800px]"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default UpcomingEvents;
