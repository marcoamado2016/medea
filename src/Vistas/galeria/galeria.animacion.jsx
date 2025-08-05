import { motion, AnimatePresence } from "framer-motion";

const Animacion = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            margin: "0 auto",
            background: "white",
            padding: "20px",
            width: "300px",
            zIndex: 1000,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px"
          }}
        >
          <h2>Este es el modal</h2>
          <p>Solo se cierra manualmente.</p>
          <button onClick={() => setOpen(false)}>Cerrar</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Animacion;
