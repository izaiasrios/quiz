import styles from "../src/styles/Questao.module.css"
import QuestaoModel from "../model/questao"

interface QuestaoProps{
    valor: QuestaoModel
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    return (
        <div className={styles.Questao}>

            <h1>Questão</h1>

        </div>
    )
}