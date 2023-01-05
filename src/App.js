// import React, { useState, useEffect } from "react";
import { BASE_URL, BASE_URL_HP } from "./constants/constants";
// import axios from "axios";
import { Title, NameContainer, PostContainer } from "./style";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
// import useCapturarNome from './Hooks/useCapturarNome'
// import useCapturarPostagens from './Hooks/useCapturarPostagens'
import useResquestData from "./Hooks/useResquestData";

function App() {
  // const nomeUsuarios = useCapturarNome()
  // const postagens = useCapturarPostagens()

  const [nomeUsuarios, loading, erroUsuario] = useResquestData(
    BASE_URL,
    "users"
  );
  const [postagens, loadingPostagem, erroPostagem] = useResquestData(
    BASE_URL,
    "comments"
  );

  const [personagens] = useResquestData(BASE_URL_HP, "/characters");

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      {erroUsuario && <p> Erro na requisição, aguarde! </p>}
      {!loading ? (
        <NameContainer>
          {nomeUsuarios.map((usuario) => {
            return (
              <Card
                key={usuario.id}
                text={usuario.name}
                backgroudColor={"nome"}
                textColor={"nome"}
              />
            );
          })}
        </NameContainer>
      ) : (
        <p>carregando...</p>
      )}
      <Title>Comentários dos usuários</Title>
      {erroPostagem && <p> Erro na requisição, aguarde! </p>}
      {!loadingPostagem ? (
        <PostContainer>
          {postagens.map((post) => {
            //console.log(post);
            return (
              <Card
                key={post.id}
                text={post.body}
                backgroudColor={"#1dc690"}
                textColor={"#ffffff"}
              />
            );
          })}
        </PostContainer>
      ) : (
        <p> Carregando... </p>
      )}
      <hr />
      <h3> Exercício 4</h3>
      {personagens.map((personagem) => {
        return <p key={personagem.id}> {personagem.name} v</p>;
      })}
    </div>
  );
}

export default App;
