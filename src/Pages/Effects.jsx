import React from "react";
import * as motion from "motion/react-client";
import { scale } from "motion";

export default function Effects() {
  return (
    <>
      <hr />
      <p>Кнопка меняет свое состояние</p>
      <motion.button
        whileHover={{ scale: 1.1, background: "#ff9800" }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#2196f3",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Наведи на меня
      </motion.button>
      <hr />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 15, ease: "easeOut" }}
        style={{
          padding: "20px",
          backgroundColor: "#e0f7fa",
          borderRadius: "8px",
          margin: "20px 0",
        }}
      >
        Появляюсь плавно
      </motion.div>
      <hr />
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.5 },
          },
        }}
        style={{ listStyle: "none", padding: 0 }}
      >
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          style={{
            padding: "20px",
            backgroundColor: "#e0f7fa",
            borderRadius: "8px",
            margin: "20px 0",
            fontSize: "36px",
          }}
        >
          Текст 1
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          style={{
            padding: "20px",
            backgroundColor: "#e0f7fa",
            borderRadius: "8px",
            margin: "20px 0",
            fontSize: "36px",
          }}
        >
          Текст 2
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          style={{
            padding: "20px",
            backgroundColor: "#e0f7fa",
            borderRadius: "8px",
            margin: "20px 0",
            fontSize: "36px",
          }}
        >
          Текст 3
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          style={{
            padding: "20px",
            backgroundColor: "#e0f7fa",
            borderRadius: "8px",
            margin: "20px 0",
            fontSize: "36px",
          }}
        >
          Текст 4
        </motion.li>
      </motion.ul>
    </>
  );
}
