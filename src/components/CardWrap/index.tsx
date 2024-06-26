import React from 'react';
import styles from './CardWrap.module.less';

export default function CardWrap({
  children,
  titleContent
}: {
  children?: React.ReactNode;
  titleContent?: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{titleContent}</div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}
