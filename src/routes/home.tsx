// Importando o tipo UserProps da aplicação
import { UserProps } from "../types/user";
// Importando o componente Search
import Search from "../components/Search";
// Importando o useState do React para criar um estado local no componente Home
import { useState } from "react";
// Importando o componente User
import User from "../components/User";
// Importando o componente Error
import Error from "../components/Error";
// Importando o componente Loader
import Loader from "../components/Loader";

// Criando o componente Home
const Home = () => {
  // Criando um estado local chamado 'user' e uma função 'setUser' para atualizar esse estado.
  // O estado inicial é null e ele pode receber um objeto do tipo UserProps
  const [user, setUser] = useState<UserProps | null>(null);

  // Criando um estado local chamado 'error' e uma função 'setError' para atualizar esse estado.
  // O estado inicial é false, indicando que não há erro inicialmente
  const [error, setError] = useState(false);

  // Criando um estado local chamado 'isLoading' e uma função 'setLoading' para atualizar esse estado.
  // O estado inicial é false, indicando que não está carregando inicialmente
  const [isLoading, setLoading] = useState(false);

  // Função assíncrona para carregar os dados do usuário a partir do GitHub
  const loadUser = async (userName: string) => {
    // Define o estado de carregamento como true
    setLoading(true);
    // Resetando o estado de erro para false e o estado de usuário para null
    setError(false);
    setUser(null);
    // Fazendo uma requisição para a API do GitHub com o nome de usuário fornecido
    const res = await fetch(`https://api.github.com/users/${userName}`);

    // Convertendo a resposta para JSON
    const data = await res.json();

    // Define o estado de carregamento como false
    setLoading(false);

    // Se o status da resposta for 404 (não encontrado), define o estado de erro como true e retorna
    if (res.status === 404) {
      setError(true);
      return;
    }

    // Extraindo os dados necessários da resposta
    const { avatar_url, login, location, followers, following } = data;

    // Criando um objeto do tipo UserProps com os dados extraídos
    const userData: UserProps = {
      avatar_url, // URL do avatar do usuário
      login, // Nome de usuário
      location, // Localização do usuário
      followers, // Número de seguidores
      following, // Número de pessoas que o usuário está seguindo
    };

    // Atualizando o estado 'user' com os dados do usuário
    setUser(userData);
  };

  // Renderizando o componente Search e passando a função loadUser como prop
  // Renderiza o componente Loader enquanto os dados estão sendo carregados
  // Se o estado 'user' não for null, renderiza o componente User com os dados do usuário
  // Se o estado 'error' for true, renderiza o componente Error
  return (
    <div>
      {/* Renderiza o componente Search e passa a função loadUser como prop */}
      <Search loadUser={loadUser} />
      {/* Renderiza o componente Loader enquanto os dados estão sendo carregados */}
      {isLoading && <Loader />}
      {/* Se o estado 'user' estiver definido, renderiza o componente User com os dados do usuário */}
      {user && <User {...user} />}
      {/* Se o estado 'error' for true, renderiza o componente Error */}
      {error && <Error />}
    </div>
  );
};

// Exportando o componente Home para ser usado em outros lugares da aplicação
export default Home;
