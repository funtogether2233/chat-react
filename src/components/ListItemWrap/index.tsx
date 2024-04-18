import React from 'react';
import styles from './ListItemWrap.module.less';

export default function ListItemWrap({
  onClick,
  children,
  height = 60,
  paddingY = 0,
  paddingX = 20
}: {
  onClick?: () => void;
  children: React.ReactNode;
  height?: number;
  paddingY?: number;
  paddingX?: number;
}) {
  return (
    <div
      onClick={onClick}
      className={styles.listItemWrap}
      style={{ height: `${height}px`, padding: `${paddingY}px ${paddingX}px` }}
    >
      {children}
    </div>
  );
}
