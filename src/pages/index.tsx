import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Questao from '../../components/Questao'
import { Inter } from 'next/font/google'
import QuestaoModel from '../../model/questao'
import RespostaModel from '../../model/resposta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'Melhor cor?', [
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Vermelha'),
    RespostaModel.errada('Azul'),
    RespostaModel.certa('Preta'),
  ])
  return (
    <div className={styles.container}>
      <Questao valor={questaoTeste} />
    </div>
  )
}
