import styles from "./StoreBanner.module.css";

function StoreBanner({ title, subtitle, image }) {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        {image && <img src={image} alt={title} className={styles.image} />}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}

export default StoreBanner;