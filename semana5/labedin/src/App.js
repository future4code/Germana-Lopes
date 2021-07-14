import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imgPerfil from "./img/profile.jpg";
import logoCozinha from "./img/logo-cozinheira.jpg";
import logoTattoo from "./img/logo-tattoo.png";
import logoemail from "./img/email.svg";
import logoendereco from "./img/endereco.svg";
import CardPequeno from './components/CardPequeno';
import ingles from "./img/ccaa.jpg";
import lgbt from "./img/lesbicas.png";




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={imgPerfil}
          nome="Germana Etges"
          descricao="Olá, me chamo Germana, tenho 38 anos e sou completamente novata em desenvolvimento Web. Sinto que estou melhorando a cada dia, sendo motivada pelos desafios e pela sede de conhecimento!"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

    <div>
      <CardPequeno 
      imagem={logoemail}
      tituloDescricao="E-mail:"
      descricao="germanaetges@gmail.com"
      />
      <CardPequeno
      imagem={logoendereco}
      tituloDescricao="Endereço:"
      descricao="Rua dos Sonhos, 420, Florianópolis"
      />
    </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={logoCozinha}
          nome="Cozinheira Fanfarrona - culinária vegana"
          descricao="Aqui eu literalmente fiz de tudo: cozinheira, shopper, atendimento ao cliente, social media e marketing digital! Animadora de jantares também!"
        />

        <CardGrande
          imagem={logoTattoo}
          nome="Corpo Fechado Tattoo"
          descricao="Aqui eu trabalhei como gerente do estúdio e mostruário vivo de tatuagens!"
        />
      </div>

      <div className="page-section-container">
      <h2>Demais atividades</h2>
      <CardGrande
      imagem={ingles}
      nome="Formada e Fluente em Inglês"
      descricao="Estudei e sou formada em Inglês pela escola CCAA Idiomas."
    />
    <CardGrande
      imagem={lgbt}
      nome="Militante Lésbica há mais de 20 anos"
      descricao="Já participei de ONGs, organizei 3 paradas LGBTs e atuo diariamente contra o preconceito."
    />

      </div>

      <div>
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
