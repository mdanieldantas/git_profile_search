// Importando o tipo UserProps da aplicação
import { UserProps } from "../types/user";
// Importando o componente Search
import Search from "../components/Search";
// Importando o useState do React para criar um estado local no componente Home
import { useState } from "react";

// Criando o componente Home
const Home = () => {
  // Criando um estado local chamado 'user' e uma função 'setUser' para atualizar esse estado.
  // O estado inicial é null e ele pode receber um objeto do tipo UserProps
  const [user, setUser] = useState<UserProps | null>(null);

  // Função assíncrona para carregar os dados do usuário a partir do GitHub
  const loadUser = async (userName: string) => {
    // Fazendo uma requisição para a API do GitHub com o nome de usuário fornecido
    const res = await fetch(`https://api.github.com/users/${userName}`);

    // Convertendo a resposta para JSON
    const data = await res.json();

    // Extraindo os dados necessários da resposta
    const { avatar_url, login, location, followers, following } = data;

    // Criando um objeto do tipo UserProps com os dados extraídos
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    };

    // Atualizando o estado 'user' com os dados do usuário
    setUser(userData);
  };

  // Renderizando o componente Search e passando a função loadUser como prop
  // Se o estado 'user' não for null, renderiza o login do usuário
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <p>{user.login}</p>}
    </div>
  );
};

// Exportando o componente Home
export default Home;
