import { BsSearch } from "react-icons/bs";

const Search = () => {

    return (

    <>
    <h2>Busque por usuário</h2>
    <p>Conheça seus melhores repositorios</p>
    <div>   
            <input type="text" placeholder="Digite o nome do usuário" />
            <button><BsSearch /></button>
    </div>
    </>
    );
}

export default Search;