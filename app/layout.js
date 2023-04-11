import styles from "./styles.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.layoutSecond}>
        <header>Header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
