import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Inputs = styled.input`
margin: 10px;
padding: 10px;
background: lightgray;
border: 3px solid black;
width: 250px;
`

const Botao = styled.button`
margin: 10px;
padding: 10px;
`



class App extends React.Component {

  state = {

    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost: "",

    posts: [
      {
        nome: "paulinha",
        foto: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },

      {
        nome: "Gê Fanfarrona",
        foto: "https://picsum.photos/400/400?a=2",
        fotoPost: "https://picsum.photos/400/400?a=3"
      },

      {
        nome: "viagens.incriveis",
        foto: "https://picsum.photos/400/400?a=4",
        fotoPost: "https://picsum.photos/400/400?a=5"
      }
    ]
  };

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      foto: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost,
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({ posts: novoPosts });
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };




  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nome}
          fotoUsuario={post.foto}
          fotoPost={post.fotoPost}
        />
      );
    });


    return (
      <MainContainer>
        <Inputs value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}/>
        <Inputs value={this.state.valorInputFoto}
          onChange={this.onChangeInputFoto}
          placeholder={"Foto Usuário"}/>
          <Inputs value={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"Foto Post"}/>
        <Botao onClick={this.adicionaPost}>Adicionar novo post</Botao>

        {listaDePosts}
      </MainContainer>
    )

  }
}

export default App;
