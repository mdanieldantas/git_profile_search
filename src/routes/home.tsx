
// impotando o componente User e o UserProps da aplicação 
import { UserProps } from "../types/user";
// impotando o componente Search 
import Search from "../components/Search";
// importando o useState do react  para criar um estado local para o componente Home
import { useState } from "react";


// criando o componente Home
const Home = () => {
  // criando o estado local para o componente Home e o setUser para atualizar o estado local começa por null e vai receber um objeto do tipo UserProps
const [user, setUser] = useState<UserProps|null>(null);

const loadUser = async (userName: string) => {

  const res = await fetch(`https://api.github.com/users/${userName}`);

  const data = await res.json();

  console.log(data);

}
  return <div>
    <Search loadUser={loadUser}/>
    </div>;
};
// exportando o componente Home
export default Home;
