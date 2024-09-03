// impotando o componente Search 
import Search from "../components/Search";
// importando o useState do react  para criar um estado local para o componente Home
import { useState } from "react";


// criando o componente Home
const Home = () => {
  // criando o estado local user e setUser
const [user, setUser] = useState(null);

  return <div>
    <Search />
    </div>;
};
// exportando o componente Home
export default Home;
