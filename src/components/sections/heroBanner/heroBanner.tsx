import styles from "./heroBanner.module.scss";

export default function HeroBanner() {
    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={`container ${styles.content}`}>
                <h1 id="hero-title" className={styles.title}>
                    Venha conhecer nossas promoções
                </h1>
                <p className={styles.subtitle}>
                    <strong>50% Off</strong> nos produtos
                </p>
                <a href="#" className={styles.button}>
                    Ver produto
                </a>
            </div>
        </section>
    )
}