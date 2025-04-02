import { Layers } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SuggestedForYou = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-center h-64 w-full p-6 text-gray-400 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center gap-5">
          <Layers size={20} />
          <span>Pages revelant to you will show up here.</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SuggestedForYou;
