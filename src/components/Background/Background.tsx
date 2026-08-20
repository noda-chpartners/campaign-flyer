import Image from 'next/image';
import styles from './Background.module.css';

export default function Background() {
  return (
    <div className={styles.background} aria-hidden="true">
      <Image src="/images/background.jpg" alt="" fill priority sizes="100vw" />
    </div>
  );
}
