import { motion } from 'framer-motion';
import { BadgeProps } from '../types.ts';

export default function Badge({ caption }: BadgeProps) {
  return (
    <motion.span
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.3 }}
      className="badge"
    >
      {caption}
    </motion.span>
  );
}
