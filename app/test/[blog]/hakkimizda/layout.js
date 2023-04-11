import React from "react";
import styles from "./styles.module.css";

function HakkimizdaLayout({ children }) {
  return (
    <div className={styles.layoutFirst}>
      <h2>Ben hakkimizda layoutundan geliyorum</h2>
      <div>{children}</div>
    </div>
  );
}

export default HakkimizdaLayout;
