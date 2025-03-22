import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      className="loader"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
};

export default Loader;
