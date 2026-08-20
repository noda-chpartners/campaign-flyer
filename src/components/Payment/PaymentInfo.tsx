import styles from './PaymentInfo.module.css';

type PaymentInfoProps = {
  title: string;
  description: string;
};

export default function PaymentInfo({ title, description }: PaymentInfoProps) {
  return (
    <section className={styles.panel}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
}
