import styles from './Exclusions.module.css';

type ExclusionsProps = {
  title: string;
  items: string[];
  notes: string[];
};

export default function Exclusions({ title, items, notes }: ExclusionsProps) {
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

      <ul className={styles.notes}>
        {notes.map((note) => (
          <li key={note} className={styles.note}>
            {note}
          </li>
        ))}
      </ul>
    </section>
  );
}
