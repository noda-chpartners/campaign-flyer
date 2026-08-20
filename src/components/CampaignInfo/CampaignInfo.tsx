import styles from './CampaignInfo.module.css';

type CampaignInfoProps = {
  title: string;
  overview: {
    label: string;
    text: string;
  };
  period: {
    label: string;
    text: string;
  };
};

export default function CampaignInfo({ title, overview, period }: CampaignInfoProps) {
  return (
    <section className={styles.panel}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.row}>
        <span className={styles.label}>{overview.label}</span>
        <span className={styles.text}>{overview.text}</span>
      </p>
      <p className={styles.row}>
        <span className={styles.label}>{period.label}</span>
        <span className={`${styles.text} ${styles.period}`}>{period.text}</span>
      </p>
    </section>
  );
}
