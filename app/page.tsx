import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hi, my name is Josh</h1>
        <div>
          I am a software engineer
        </div>
      </main>
      <footer className={styles.footer}>
          <a
            href="https://github.com/jcole356"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-cole-17390943/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
      </footer>
    </div>
  );
}
