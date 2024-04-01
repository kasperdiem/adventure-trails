import * as PropTypes from "prop-types"

function CardTrilha({dadosTrilha}) {
    return (
        <div>
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <p>Cidade: {dadosTrilha.cidade}</p>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado} </span>
            <img width={200} src={dadosTrilha.img} alt="imagem trilha" />
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