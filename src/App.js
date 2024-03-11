import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      animate={{ x: 100, }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      Hello
    </motion.div>
  );
}

export default App;
