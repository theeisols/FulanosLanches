function CardLanche({lanche, notifyToast, somarQnt, lanchesCarrinho, addLanchesCarrinho}){

    function setLanchesCarrinho(lanche){
        addLanchesCarrinho((lanchesCarrinho) => {
            const lancheEscolhido = {
              foto: lanche.foto,
              nome: lanche.nome,
              preco: lanche.preco
            };
            return [...lanchesCarrinho, lancheEscolhido];
        });
    }

    return(
    <li>
        <img src={lanche.foto} alt={lanche.nome} />
        <div className="conteudo">
            <h1>
            {lanche.nome}
            </h1>
            <p>
            {lanche.descricao}
            </p>
            <h2>
            R${lanche.preco},00
            </h2>
            <button onClick={() => { notifyToast(); somarQnt(); setLanchesCarrinho(lanche)}} title="Adicionar lanche ao carrinho.">
            <i className="fa-solid fa-cart-plus" />
            Adicionar
            </button>
        </div>
    </li>
    )
}

export default CardLanche;