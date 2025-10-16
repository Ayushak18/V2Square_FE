import { motion, AnimatePresence } from "framer-motion";

const CustomOverlay = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with fade-in/out animation */}
          <motion.div
            className="fixed inset-0 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Centered Overlay with scale + fade animation */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-full h-full backdrop-blur-sm rounded-xl shadow-lg p-6
            transform -translate-x-1/2 -translate-y-1/2 overflow-auto"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};


export default CustomOverlay;