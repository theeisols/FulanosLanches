import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react';
import './css/index.css';
import './css/index.css';
import lanches from './lib/lanches';
import CardLanche from './components/CardLanche';
import Modal from './components/Modal';

function App() {
  // função do toast
    const notifyToast = () => {
      toast.info('Adicionado com sucesso!', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    };
  
  // função do alert
  function clickEnviar(event){
    altEstModal();
    event.preventDefault();
    notifyAlert();
  }
  const notifyAlert = () => {
    toast.success('Pedido realizado com sucesso!', {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  }

  // funções menu
    // fixar menus e botao cardápio
    const[estMenuDesk, fixarMenuDesk] = useState(false)
    useEffect(() => {
      function scrollObserver1(){
        if(window.scrollY >= 170 && window.innerWidth > 768){
          fixarMenuDesk(true)
        } else if(window.scrollY < 170 && window.innerWidth > 768){
          fixarMenuDesk(false)
        }
      }
      window.addEventListener("scroll", scrollObserver1)
    },[])

    const[cardapioFixado, fixarCardapio] = useState(false);
    const[estMenuMob, fixarMenuMob] = useState(false)
    useEffect(() => {
      function scrollObserver2(){
        if(window.scrollY >= 170 && window.innerWidth <= 768){
          fixarCardapio(true)
          fixarMenuMob(true)
        } else if(window.scrollY < 170){
          fixarCardapio(false)
          fixarMenuMob(false)
        } else if (window.scrollY > 170 && window.innerWidth > 768){
          fixarMenuMob(false)
        }
      }
      window.addEventListener("scroll", scrollObserver2)
    },[])

    // display menu
    const[estadoMenu, alterarEstadoMenu] = useState();
    useEffect(() =>{
      window.addEventListener("resize", () => {
        if(window.innerWidth <= 768){
          alterarEstadoMenu("none")
        } else{
          alterarEstadoMenu("flex")
        }
      })
    },[window.innerWidth])

  // funções botão cardápio
    // mudar cor e ícone ao clicar no botão cardápio
    const[botaoClicado, clicarBotao] = useState(false)
    const[minhaClasse, definirClasse] = useState("fa-solid fa-caret-down")
    const[corBackground, definirCor] = useState({backgroundColor:"#000000"})
    function buttonObserver(){
        if(botaoClicado){ // se o menu estiver aberto
            clicarBotao(false)
            definirClasse("fa-solid fa-caret-down")
            definirCor({backgroundColor:"#000000"})
            alterarEstadoMenu("none")
        } else{
            clicarBotao(true)
            definirClasse("fa-solid fa-caret-up")
            definirCor({backgroundColor:"#cc0000"})
            alterarEstadoMenu("flex")
        }
    }

    // mudar cor e ícone ao selecionar opção do cardápio
    function selectionObserver(){
      if (window.innerWidth <= 768) {
        clicarBotao(false)
        definirClasse("fa-solid fa-caret-down");
        definirCor({ backgroundColor: "#000000" });
        alterarEstadoMenu("none");
      }
    }

    // abrir/fechar modal
    const[estadoModal, mudarEstModal] = useState(false)
    function altEstModal(){
      mudarEstModal(!estadoModal)
    }

    // adicionar ao carrinho
    let[qnt, altQnt] = useState(0)
    function somarQnt(){
      altQnt(qnt+=1)
    }

    // lanches do carrinho
    let[lanchesCarrinho, addLanchesCarrinho] = useState([])

  return (
    <div className="App">
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fulano's Lanches</title>
        <link rel="stylesheet" href="index.css" />
        <link rel="stylesheet" href="modal.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" type="image/png" href="img/logo.png" />
        <header>
          <div id="logo">
            <a href="">
              <img src="img/logo.png" alt="Logo Fulano's Lanches" />
            </a>
          </div>


          <button id="btn-menu"
          className={cardapioFixado && 'fixo-cardapio'}
          onClick={() => buttonObserver()}
          style={corBackground}
          >
            <div>Cardápio</div>
            <div>
                <i className={`${minhaClasse}`} />
            </div>
          </button>

          <nav
          id="menu-lanches"
          className={`${estMenuDesk ? 'fixo-desktop' : ''} ${estMenuMob ? 'fixo-mobile' : ''}`}
          style={{display:estadoMenu}}
          >
            <div id="botoes-lanches">
              <a href="#combos" id="botao-combos" onClick={() => selectionObserver()}>
                Combos
              </a>
              <p className="linha-menu" />
              <a href="#burguers" id="botao-burguers" onClick={() => selectionObserver()}>
                Burguers
              </a>
              <p className="linha-menu" />
              <a href="#batatas" id="botao-batatas" onClick={() => selectionObserver()}>
                Batatas
              </a>
              <p className="linha-menu" />
              <a href="#bebidas" id="botao-bebidas" onClick={() => selectionObserver()}>
                Bebidas
              </a>
              <p className="linha-menu" />
              <a href="#sobremesas" id="botao-sobremesas" onClick={() => selectionObserver()}>
                Sobremesas
              </a>
            </div>

            <div
            id="carrinho-desk"
            onClick={() => altEstModal()}
            >
              <span id="cont-desk">{qnt}</span>
              <button title="Conferir carrinho">
                <i className="fa-solid fa-cart-shopping" />
              </button>
            </div>
          </nav>

            <div
            id="carrinho-mob"
            onClick={() => altEstModal()}
            >
              <span id="cont-mob">{qnt}</span>
              <button title="Conferir carrinho">
                <i className="fa-solid fa-cart-shopping" />
              </button>
            </div>
          
        </header>
        
        <main>
          <div>
            <ToastContainer
              position="bottom-right"
              autoClose={false}
              limit={1}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              theme="colored"
            />
          </div>

          
          <Modal
          qnt={qnt}
          altQnt={altQnt}
          lanchesCarrinho={lanchesCarrinho}
          addLanchesCarrinho={addLanchesCarrinho}
          estadoModal={estadoModal}
          altEstModal={altEstModal}
          clickEnviar={clickEnviar}/>

          <ul id="cardapio">
            <h1 id="combos" className="titulo">
              Combos
            </h1>
            {(lanches.combos).map((lanche, index) => (
            <CardLanche lanchesCarrinho={lanchesCarrinho} addLanchesCarrinho={addLanchesCarrinho} somarQnt={somarQnt} notifyToast={notifyToast} lanche={lanche} key={index} />
            ))}
            <h1 id="burguers" className="titulo">
              Burguers
            </h1>
            {(lanches.burguers).map((lanche, index) => (
            <CardLanche lanchesCarrinho={lanchesCarrinho} addLanchesCarrinho={addLanchesCarrinho} somarQnt={somarQnt} notifyToast={notifyToast} lanche={lanche} key={index} />
            ))}
            <h1 id="batatas" className="titulo">
              Batatas
            </h1>
            {(lanches.batatas).map((lanche, index) => (
            <CardLanche lanchesCarrinho={lanchesCarrinho} addLanchesCarrinho={addLanchesCarrinho} somarQnt={somarQnt} notifyToast={notifyToast} lanche={lanche} key={index} />
            ))}
            <h1 id="bebidas" className="titulo">
              Bebidas
            </h1>
            {(lanches.bebidas).map((lanche, index) => (
            <CardLanche lanchesCarrinho={lanchesCarrinho} addLanchesCarrinho={addLanchesCarrinho} somarQnt={somarQnt} notifyToast={notifyToast} lanche={lanche} key={index} />
            ))}
            <h1 id="sobremesas" className="titulo">
              Sobremesas
            </h1>
            {(lanches.sobremesas).map((lanche, index) => (
            <CardLanche lanchesCarrinho={lanchesCarrinho} addLanchesCarrinho={addLanchesCarrinho} somarQnt={somarQnt} notifyToast={notifyToast} lanche={lanche} key={index} />
            ))}
          </ul>

          <a href="#logo" id="btnTopo" title="Ir para o topo da página">
            <i className="fa-solid fa-arrow-up" />
          </a>
        </main>
        <footer>
          <p>
            2023
            <i className="fa-regular fa-copyright" />
            FulanosLanches
          </p>
          <img src="img/fulanosfooter.png" width="100px" />
          <ul id="social">
            <li>
              <a href="https://www.whatsapp.com/" id="whatsapp">
                <i className="fa-brands fa-whatsapp" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" id="instagram">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
          </ul>
        </footer>
      </>
    </div>
  );
}

export default App;