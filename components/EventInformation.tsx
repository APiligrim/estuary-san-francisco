import styles from '@components/EventInformation.module.scss';

export default function EventInformation() {
  return (
    <div style={{ background: 'var(--color-green)', zIndex: '3', position: 'sticky' }}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div>
            <h2 className={styles.heading2}>Date</h2> <p className={styles.caption}>Feb 20th, 2023</p>
          </div>
        </div>
        <div className={styles.column}>
          <div>
            <h2 className={styles.heading2}>Time</h2> <p className={styles.caption}>3pm-7pm PST</p>
          </div>
        </div>
        <div className={styles.column}>
          <div>
            <h2 className={styles.heading2}>Venue</h2>
            <a style={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }} href={'https://cliotoronto.com/spaces/'}>
              <p className={styles.caption}>San Francisco</p>
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <div>
            <h2 className={styles.heading2}>Dresscode</h2> <p className={styles.caption}>Smart Casual </p>
          </div>
        </div>
      </div>
    </div>
  );
}
