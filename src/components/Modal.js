import { useState, useEffect } from "react";
import "../css/modal.css";
import CardCarrinho from "./CardCarrinho";

function Modal({estadoModal, altEstModal, clickEnviar, lanchesCarrinho, addLanchesCarrinho, qnt, altQnt}){
    // alternar abas do modal
    const[modoLanches, setModoLanches] = useState("ativado")
    const[modoEntrega, setModoEntrega] = useState("desativado")
    const[lanchesDisplay, setLanchesDisplay] = useState("block")
    const[entregaDisplay, setEntregaDisplay] = useState("none")
    function verLanches(){
      setModoLanches("ativado")
      setModoEntrega("desativado")
      setLanchesDisplay("block")
      setEntregaDisplay("none")
    }
    function verEntrega(){
      setModoEntrega("ativado")
      setModoLanches("desativado")
      setEntregaDisplay("block")
      setLanchesDisplay("none")
    }

    // toggle
    const[modoToggle, setModoToggle] = useState("fa-solid fa-toggle-off")
    const[readOnly, setReadOnly] = useState(false)
    const[backgroundColor, setBackgroundColor] = useState("#ffffff")

    function alterarToggle(event){
      event.preventDefault();
      if(modoToggle == "fa-solid fa-toggle-off"){
        setModoToggle("fa-solid fa-toggle-on")
        setReadOnly(true)
        setBackgroundColor("#dbdbdb")
      } else{
        setModoToggle("fa-solid fa-toggle-off")
        setReadOnly(false)
        setBackgroundColor("#ffffff")
      }
    }

    // atualizar preço
    let[preco, attPreco] = useState(0)

    function zerarPreco(){
      attPreco(preco = 0)
    }

    // atualizar contadores
    function attConts(){
      altQnt(qnt = 0)
    }

    // atualizar carrinho
    function esvaziarCarrinho(){
      addLanchesCarrinho(lanchesCarrinho = [])
    }

    return(
      <>
        {estadoModal && (
          <dialog className="modal">
            <div className="conteudo-modal">
              <div className="topo-modal">
                <h1 className="titulo-modal">seu carrinho</h1>
                <span
                className="fechar-modal"
                onClick={() => altEstModal()}
                >
                  <i className="fa-solid fa-xmark" />
                </span>
              </div>
              <div id="botoes-alternar-abas">
                <button
                className={modoLanches}
                id="botao-lanches"
                onClick={() => verLanches()}
                >
                  lanches
                </button>
                <button
                className={modoEntrega}
                id="botao-entrega"
                onClick={() => verEntrega()}
                style={{ marginLeft: 5 }}>
                  entrega
                </button>
              </div>
              <form id="formulario">
                <div
                id="aba-lanches"
                className="aba"
                style={{display:lanchesDisplay}}
                >
                  <div id="lanches-carrinho" className="espaco-conteudo">
                    <ul>
                      {(lanchesCarrinho).map((lanche, index) => (
                      <CardCarrinho
                      preco={preco}
                      attPreco={attPreco}
                      lancheCarrinho={lanche}
                      key={index} />
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                id="aba-entrega"
                className="aba"
                style={{display:entregaDisplay}}
                >
                  <div id="entrega" className="espaco-conteudo">
                    <div id="form-cadastro">
                      <span id="retirar">
                        <p>retirar na loja?</p>
                        <button
                        id="toggle"
                        onClick={(event) => {alterarToggle(event)}}
                        className={modoToggle} />
                      </span>
                      <label htmlFor="nome">nome</label>
                      <input
                        style={{backgroundColor:backgroundColor}}
                        type="text"
                        name="nome"
                        readOnly={readOnly}
                      />
                      <div id="telefone-cep">
                        <div id="campo-telefone">
                          <label htmlFor="telefone">telefone</label>
                          <input
                            style={{backgroundColor:backgroundColor}}
                            type="text"
                            name="telefone"
                            placeholder="Ex.: 99999-9999"
                            readOnly={readOnly}
                          />
                        </div>
                        <div id="campo-cep" style={{ marginLeft: 10 }}>
                          <label htmlFor="cep">cep</label>
                          <input
                            style={{backgroundColor:backgroundColor}}
                            type="text"
                            name="cep"
                            placeholder="Ex.: 58000-000"
                            readOnly={readOnly}
                          />
                        </div>
                      </div>
                      <div id="campo-rua" style={{ marginTop: 5 }}>
                        <label htmlFor="rua">rua</label>
                        <input
                          style={{backgroundColor:backgroundColor}}
                          type="text"
                          name="rua"
                          readOnly={readOnly}
                        />
                      </div>
                      <div id="bairro-numero">
                        <div id="campo-bairro">
                          <label htmlFor="bairro">bairro</label>
                          <input
                            style={{backgroundColor:backgroundColor}}
                            type="text"
                            name="bairro"
                            readOnly={readOnly}
                          />
                        </div>
                        <div id="campo-numero" style={{ marginLeft: 10 }}>
                          <label htmlFor="numero">número</label>
                          <input
                            style={{backgroundColor:backgroundColor}}
                            type="number"
                            name="numero"
                            id="numero"
                            readOnly={readOnly}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="total-compra">
                  <h2>total:</h2>
                  <span id="valor-compra">R${preco},00</span>
                </div>
                <div id="botoes-carrinho">
                  <button
                  id="cancelar"
                  onClick={(event) => {altEstModal(); alterarToggle(event)}}
                  >cancelar</button>
                  <input
                    type="submit"
                    name="finalizar"
                    defaultValue="finalizar"
                    style={{ marginLeft: 5 }}
                    onClick={(event) => {clickEnviar(event); alterarToggle(event); attConts(); zerarPreco(); esvaziarCarrinho()}}
                  />
                </div>
              </form>
            </div>
          </dialog>
        )}
      </>
    )
}

export default Modal;