import styles from './sectionTitle.module.scss';

interface SectionTitleProps {
    id: string;
    title: string;
    linkLabel?: string;
    linkHref?: string;
}

export default function SectionTitle({ id, title, linkLabel, linkHref = '#' }: SectionTitleProps) {
    return (
        <div className={styles.wrapper}>
            <h2 id={id} className={styles.title}>
                {title}
            </h2>

            {linkLabel && (
                <a href={linkHref} className={styles.link}>
                    {linkLabel}
                </a>
            )}
        </div>
    );
}