import exp from "constants";
import questoes from "../questoes/bancoDeQuestoes";
import { embaralhar } from "../../../../model/functions/arrays";

export default (req, res) => {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}