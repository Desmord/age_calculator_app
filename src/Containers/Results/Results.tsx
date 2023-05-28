import styles from './Results.module.scss';

const Results = ({
    days,
    years,
    months,
}: {
    days: string,
    years: string,
    months: string,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.years}><span className={styles.result}>{years ? years : `--`}</span> years</div>
            <div className={styles.months}><span className={styles.result}>{months ? months : `--`}</span> months</div>
            <div className={styles.days}><span className={styles.result}>{days ? days : `--`}</span> days</div>
        </div >
    )
}

export default Results;