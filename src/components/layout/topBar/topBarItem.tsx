import styles from './topBar.module.scss';

interface TopBarItemProps {
  icon: string;
  before?: string;
  highlight: string;
  after?: string;
}

export default function TopBarItem({ icon, before, highlight, after }: TopBarItemProps) {
  return (
    <li className={styles.item}>
      <img src={icon} alt="" />
      <span>
        {before} <strong>{highlight}</strong> {after}
      </span>
    </li>
  );
}
