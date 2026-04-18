import StoreBanner from "../components/StoreBanner";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.page}>
      <StoreBanner
        title="Stack & Shuffle"
        subtitle="A trading card shop focused on singles for collectors and players."
      />
    </div>
  );
}

export default HomePage;