import styles from './SubmitPanel.module.scss';

const SubmitPanel = ({ updateResult }: { updateResult: Function }) => {

    const handleClick = () => updateResult()

    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
            <div className={styles.button} onClick={() => handleClick()}>
                <img src="./images/icon-arrow.svg" alt="Submit" />
            </div>
        </div>
    )
}

export default SubmitPanel;