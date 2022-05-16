import styles from './styles.module.scss'

interface CardProps {
    cardName:string,
    cardColor:string
}
export function Card({ cardName, cardColor}: CardProps) {
    

    return (
        <div className={styles.card}>
            <div className={styles.cardColor} style={{background:`${cardColor}`}} >
               <strong>{cardName}</strong>
            </div>
            <button style={{border:`2px solid ${cardColor}`}}>
                Get Services
            </button>
        </div>
    )
}