import Image from 'next/image';
import styles from './RankingCard.module.css';

type RankingItem = {
  rank: number;
  amount: string;
};

type RankingCardProps = {
  title: string;
  target: string;
  ap: RankingItem[];
  cl: RankingItem[];
  leader: RankingItem[];
  colorClass: string;
};

const medalClass: Record<number, string> = {
  1: styles.rank1,
  2: styles.rank2,
  3: styles.rank3,
};

const rankIcons: Record<number, string> = {
  1: '/images/ranking-icon01.png',
  2: '/images/ranking-icon02.png',
  3: '/images/ranking-icon03.png',
};

function RankList({ label, items }: { label: string; items: RankingItem[] }) {
  return (
    <section className={styles.group}>
      <h3 className={styles.groupTitle}>{label}</h3>
      <ul className={styles.rows}>
        {items.map((item) => (
          <li key={item.rank} className={`${styles.row} ${medalClass[item.rank] ?? ''}`}>
            <span className={styles.rank}>
              {rankIcons[item.rank] ? <Image className={styles.rankIcon} src={rankIcons[item.rank]} alt="" width={64} height={64} /> : null}
              <span className={styles.rankNum}>{item.rank}</span>位
            </span>
            <span className={`${styles.amount} ${item.amount === '-' ? styles.amountNone : ''}`}>{item.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function RankingCard({ title, target, ap, cl, leader, colorClass }: RankingCardProps) {
  return (
    <article className={`${styles.card} ${colorClass}`}>
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.target}>{target}</p>
      </div>

      <div className={styles.body}>
        <RankList label="AP" items={ap} />
        <RankList label="CL" items={cl} />
        <RankList label="リーダー" items={leader} />
      </div>
    </article>
  );
}
