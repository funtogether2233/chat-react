import React from 'react';
import styles from './ListWrap.module.less';

export default function ListWrap({ children }: { children?: React.ReactNode }) {
  return <div className={styles.listWrap}>{children}</div>;
}
