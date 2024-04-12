import React from 'react';
import styles from './ListItemWrap.module.less';

export default function ListItemWrap({
  onClick,
  children
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div onClick={onClick} className={styles.listItemWrap}>
      {children}
    </div>
  );
}
