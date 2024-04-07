import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({ dadosTrilha }) {
    return (
        <div className="card_container">
            <img className="card_imagem" width={200} src={dadosTrilha.img} alt="imagem trilha" />
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado} </span>
        </div>
    )
}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string,
        estado: PropTypes.string,
        duracao: PropTypes.number,
        trajeto: PropTypes.number,
        dificuldade: PropTypes.string,
        tipo: PropTypes.string,
        nomeUsuario: PropTypes.string,
        img: PropTypes.string,
    })

}

export default CardTrilha;