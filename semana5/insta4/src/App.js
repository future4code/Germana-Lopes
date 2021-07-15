import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Gê Fanfarrona'}
          fotoUsuario={'https://picsum.photos/400/400?a=2'}
          fotoPost={'https://picsum.photos/400/400?a=3'}
        />

        <Post
          nomeUsuario={'viagens.incriveis'}
          fotoUsuario={'https://picsum.photos/400/400?a=4'}
          fotoPost={'https://picsum.photos/400/400?a=5'}
        />
      </MainContainer>


    );
  }
}

export default App;
