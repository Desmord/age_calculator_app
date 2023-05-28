import { useState } from 'react';

import styles from './Inputs.module.scss';

type TypeInputs = {
    day: string,
    setDay: React.Dispatch<React.SetStateAction<string>>,
    month: string,
    setMonth: React.Dispatch<React.SetStateAction<string>>,
    year: string,
    setYear: React.Dispatch<React.SetStateAction<string>>,
    dayError: string,
    monthError: string,
    yearError: string,
}

const Inputs = ({ day, setDay, month, setMonth, year, setYear, dayError, monthError, yearError }: TypeInputs) => {


    const isError = (errorText: string): boolean => errorText.length !== 0 ? true : false;

    return (
        <div className={styles.container}>
            <div className={styles.inputCell}>
                <span className={isError(dayError) ? styles.errorActive : ``}>DAY</span>
                <input
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className={isError(dayError) ? styles.errorActive : ``}
                    type="text"
                    placeholder='DD'
                    maxLength={2} />
                <span>{dayError}</span>
            </div>
            <div className={styles.inputCell}>
                <span className={isError(monthError) ? styles.errorActive : ``}>MONTH</span>
                <input
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className={isError(monthError) ? styles.errorActive : ``}
                    type="text"
                    placeholder='MM'
                    maxLength={2} />
                <span>{monthError}</span>
            </div>
            <div className={styles.inputCell}>
                <span className={isError(yearError) ? styles.errorActive : ``}>YEAR</span>
                <input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className={isError(yearError) ? styles.errorActive : ``}
                    type="text"
                    placeholder='YYYY'
                    maxLength={4} />
                <span>{yearError}</span>
            </div>

        </div>
    )
}

export default Inputs;