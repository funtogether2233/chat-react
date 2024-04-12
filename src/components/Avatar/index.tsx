import styles from './Avatar.module.less';

export default function Avatar({
  size = 40,
  img,
  onClick
}: {
  size?: number;
  img?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={styles.avatar}
      onClick={onClick}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img src={img} />
    </div>
  );
}
