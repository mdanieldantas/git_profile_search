// Definindo o tipo SearchProps que espera uma função loadUser que recebe uma string (userName) e não retorna nada (void)
type SearchProps = {
  loadUser: (userName: string) => void;
};

// Importando o hook useState do React para gerenciar o estado local
import { useState, KeyboardEvent } from "react";

// Importando o ícone BsSearch do pacote react-icons
import { BsSearch } from "react-icons/bs";

// Importando os estilos CSS do módulo Search.module.css
import classes from "./Search.module.css";

// Definindo o componente funcional Search que recebe as props do tipo SearchProps
const Search = ({ loadUser }: SearchProps) => {
  // Criando um estado local chamado userName e uma função setUserName para atualizar esse estado
  // O estado inicial é uma string vazia
  const [userName, setUserName] = useState("");

  // Função que lida com o evento de pressionar uma tecla
  // Se a tecla pressionada for "Enter", chama a função loadUser com o userName atual
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      loadUser(userName);
    }
  };

  // Retornando o JSX que será renderizado pelo componente
  return (
    <div className={classes.search}>
      {/* Título do componente */}
      <h2>Busque por usuário</h2>
      {/* Descrição do componente */}
      <p>Conheça seus melhores repositórios</p>
      {/* Div que contém o campo de entrada de texto e o botão */}
      <div className={classes.search_container}>
        {/* Campo de entrada de texto para digitar o nome do usuário */}
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          // Atualiza o estado userName sempre que o valor do input mudar
          onChange={(e) => setUserName(e.target.value)}
          // Chama a função handleKeyDown ao pressionar uma tecla
          onKeyDown={handleKeyDown}
        />
        {/* Botão que, ao ser clicado, chama a função loadUser passando o userName como argumento */}
        <button onClick={() => loadUser(userName)}>
          {/* Ícone de busca dentro do botão */}
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

// Exportando o componente Search para ser usado em outros lugares da aplicação
export default Search;
