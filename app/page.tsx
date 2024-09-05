import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hi, my name is Josh</h1>
        <div>
          I am a software engineer
        </div>
        <div>
          <h2>Technologies</h2>
          <h3>Here is some of the tech that I have experience with:</h3>
          <div className={styles.tech}>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Next.js</span>
            <span>Ruby on Rails</span>
            <span>PostgreSQL</span>
            <span>GraphQL</span>
            <span>Vue.js</span>
            <span>Backbone.js</span>
            <span>jQuery</span>
          </div>
          <h3>Here is some more tech that you likely don&apos;t care about anymore:</h3>
          <div className={styles.tech}>
            <span>Angular.js</span>
            <span>Backbone.js</span>
            <span>jQuery</span>
          </div>
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
