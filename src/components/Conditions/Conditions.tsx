import styles from './Conditions.module.css';

type ConditionsProps = {
  title: string;
  items: string[];
};

export default function Conditions({ title, items }: ConditionsProps) {
  return (
    <section className={styles.panel}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
