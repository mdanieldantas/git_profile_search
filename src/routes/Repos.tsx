// Importa os hooks useState e useEffect do React
import { useState, useEffect } from "react";
// Importa o hook useParams do react-router-dom para acessar os parâmetros da URL
import { useParams } from "react-router-dom";
// Importa o componente BackBtn
import BackBtn from "../components/BackBtn";
// Importa os estilos do arquivo CSS Repos.module.css
import classes from "./Repos.module.css";

// Define o componente funcional Repos
const Repos = () => {
    // Usa o hook useParams para obter o parâmetro 'username' da URL
    const { username } = useParams();

    // Retorna um elemento div que contém o botão de voltar e exibe o texto "Repos" seguido pelo valor de 'username'
    return (
        <div>
            {/* Renderiza o componente BackBtn */}
            <BackBtn />
            {/* Exibe o texto "Repos" seguido pelo valor de 'username' */}
            Repos {username}
        </div>
    );
};

// Exporta o componente Repos como padrão
export default Repos;
