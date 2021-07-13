import logo from './logo.svg';
import './App.css';
import logoyt from "./img/logo-yt.jpg"
import emalta from "./img/icone-emalta.png"
import inscricoes from "./img/icone-inscricoes.png"
import originais from "./img/icone-originais.png"
import historico from "./img/logo-historico.png"

function App() {

  const titulo = "Titulo do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  function botaoFunciona() {
    alert("Viu?! Esse botão funciona!")
  }

  function backEnd () {
    alert("Quando eu aprender backend esse botão vai funcionar de verdade!!")
  }



  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>Lab Tube</h1>
          <input type="text" placeholder="Procure aqui seu vídeo" id="campoDeBusca" onClick={backEnd} />
        </header>

        <main>
          <nav className="menu-vertical" onClick={botaoFunciona}>
            <ul>
              <div className="logos">
                <img className="tamanho-logos" src={logoyt} />
                <li className="botoes-meunu-vertical">Início</li>
              </div>
              <div className="logos">
                <img className="tamanho-logos" src={emalta} />
                <li className="botoes-meunu-vertical">Em alta</li>
              </div>
              <div className="logos">
                <img className="tamanho-logos" src={inscricoes} />
                <li className="botoes-meunu-vertical">Inscrições</li>
              </div>
              <div className="logos">
                <img className="tamanho-logos" src={originais} />
                <li className="botoes-meunu-vertical">Originais</li>
              </div>
              <div className="logos">
                <img className="tamanho-logos" src={historico} />
                <li className="botoes-meunu-vertical">Histórico</li>
              </div>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>

        <footer>
          <h4>O YouTube não tem footer! Site eterno!</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
