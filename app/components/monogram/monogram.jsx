import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="78"
      height="59"
      viewBox="0 0 78 59"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path transform="scale(0.939)" d="M24.927 53.833v-32.51H36.61q17.576 0 17.576 15.848 0 7.59-4.797 12.127-4.797 4.535-12.78 4.535zm7.431-26.473v20.436h3.658q4.811 0 7.543-2.834t2.732-7.71q0-4.61-2.71-7.25-2.71-2.642-7.609-2.642z"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%"/>
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
