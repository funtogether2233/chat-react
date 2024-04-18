import styles from './SimpleButton.module.less';

export default function SimpleButton({
  btnTxt,
  onClick,
  margin = '',
  borderRadius = 5,
  width = 60,
  height = 30,
  display = true
}: {
  btnTxt?: string;
  onClick?: () => void;
  margin?: string;
  borderRadius?: number;
  width?: number;
  height?: number;
  display?: boolean;
}) {
  return (
    <>
      {display ? (
        <div
          className={styles.simpleButton}
          onClick={onClick}
          style={{
            margin: margin,
            borderRadius: `${borderRadius}px`,
            width: `${width}px`,
            height: `${height}px`
          }}
        >
          {btnTxt}
        </div>
      ) : null}
    </>
  );
}
