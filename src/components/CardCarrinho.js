function CardCarrinho({lancheCarrinho, preco, attPreco}){
    function somar(event){
        event.preventDefault();
        attPreco(preco+=lancheCarrinho.preco)
    }

    function subtrair(event){
        event.preventDefault();
        if(preco > 0){
            attPreco(preco-=lancheCarrinho.preco)
        }
    }

    return(
        <li className="lanche">
            <img
                className="img-lanche"
                src={lancheCarrinho.foto}
                alt="img"
                width="80px"
                height="80px"
            />
            <p className="titulo-lanche">{lancheCarrinho.nome}</p>
            <div className="adicionar-remover-lanche">
                <button
                className="remover-lanche"
                onClick={(event) => subtrair(event)}
                >
                    <p>-</p>
                </button>
                <span className="qnt-lanche">0</span>
                <button
                className="adicionar-lanche"
                onClick={(event) => somar(event)}
                >
                    <p>+</p>
                </button>
            </div>
        </li>
    )
}

export default CardCarrinho;