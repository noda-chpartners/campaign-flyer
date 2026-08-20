import Image from 'next/image';
import styles from './Decorations.module.css';

const accents = [
  { src: '/images/sunflower01.png', alt: '', className: styles.sunflowerLeft, width: 220, height: 220 },
  { src: '/images/beachball.png', alt: '', className: styles.beachball, width: 170, height: 170 },
  { src: '/images/watermelon.png', alt: '', className: styles.watermelon, width: 200, height: 200 },
  { src: '/images/shaved.png', alt: '', className: styles.shaved, width: 190, height: 190 },
] as const;

export default function Decorations() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {accents.map((item) => (
        <Image
          key={item.src}
          className={item.className}
          src={item.src}
          alt=""
          width={item.width}
          height={item.height}
        />
      ))}
    </div>
  );
}
