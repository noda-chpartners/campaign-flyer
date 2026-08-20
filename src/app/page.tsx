import Image from 'next/image';
import { rankingData } from '@/data/ranking';
import styles from './page.module.css';

import CampaignInfo from '@/components/CampaignInfo/CampaignInfo';
import Conditions from '@/components/Conditions/Conditions';
import PaymentInfo from '@/components/Payment/PaymentInfo';
import Exclusions from '@/components/Exclusions/Exclusions';
import RankingCard from '@/components/RankingCard/RankingCard';
import Background from '@/components/Background/Background';
import Decorations from '@/components/Decorations/Decorations';

export default function Home() {
  return (
    <>
      <Background />
      <main className={styles.main}>
        <Decorations />
        <header className={styles.header}>
          <Image className={styles.logo} src={rankingData.header.logo} alt="CHpartnersロゴ" width={300} height={50} loading="eager" />
          <h1 className={styles.title}>{rankingData.header.title}</h1>
          <p className={styles.subtitle}>{rankingData.header.subtitle}</p>
          <p className={styles.month}>{rankingData.month}</p>
        </header>
        <section className={styles.cards}>
          <RankingCard colorClass={styles.groupA} {...rankingData.groupA} />
          <RankingCard colorClass={styles.groupB} {...rankingData.groupB} />
          <RankingCard colorClass={styles.groupC} {...rankingData.groupC} />
        </section>
        <CampaignInfo {...rankingData.campaign} />
        <section className={styles.details}>
          <Conditions {...rankingData.conditions} />
          <div className={styles.detailsColumn}>
            <PaymentInfo {...rankingData.payment} />
            <Exclusions {...rankingData.exclusions} notes={rankingData.notes} />
          </div>
        </section>
      </main>
    </>
  );
}
