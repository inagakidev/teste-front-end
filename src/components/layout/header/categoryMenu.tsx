import styles from "./header.module.scss";
import crownIcon from "../../../assets/crownSimple.svg";

interface Category {
    label: string;
    href: string;
    highlight?: boolean;
    icon?: string;
}

const categories: Category[] = [
    { label: 'Todas categorias', href: '#' },
    { label: 'Supermercado', href: '#' },
    { label: 'Livros', href: '#' },
    { label: 'Moda', href: '#' },
    { label: 'Lançamentos', href: '#' },
    { label: 'Ofertas do dia', href: '#', highlight: true },
    { label: 'Assinatura', href: '#', icon: crownIcon },
]

export default function CategoryMenu() {
    return (
        <nav className={styles.menu} aria-label="Categorias">
            <ul className={styles.menuList}>
                {categories.map((category) => (
                    <li key={category.label}>
                        <a
                            href={category.href}
                            className={`${styles.menuLink} ${category.highlight ? styles.menuHighlight : ''}`}
                        >
                            {category.icon && <img src={category.icon} alt="" width={20} height={20} />}
                            {category.label}
                        </a>
                    </li>
                ))}
            </ul>

        </nav>
    )
}