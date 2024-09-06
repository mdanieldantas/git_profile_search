// Importando o tipo UserProps do arquivo de tipos
import { UserProps } from "../types/user";

// Importando o ícone MdLocationPin do pacote react-icons
import { MdLocationPin } from "react-icons/md";

// Importando o componente Link do pacote react-router-dom para navegação
import { Link } from "react-router-dom";

// Importando os estilos CSS do módulo User.module.css
import classes from "./User.module.css";

// Definindo o componente funcional User que recebe as props do tipo UserProps
const User = ({
  login, // Nome de usuário
  avatar_url, // URL do avatar do usuário
  followers, // Número de seguidores
  following, // Número de pessoas que o usuário está seguindo
  location, // Localização do usuário
}: UserProps) => {
  return (
    <div className={classes.user}>
      {/* Imagem do avatar do usuário */}
      <img src={avatar_url} alt={login} />
      {/* Nome de usuário */}
      <h2>{login}</h2>

      {/* Localização do usuário, renderizada apenas se estiver definida */}
      {location && (
        <p className={classes.location}>
          <MdLocationPin /> {/* Ícone de localização */}
          <span>{location}</span>
        </p>
      )}

      {/* Div que contém as informações de seguidores e seguindo */}
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>

      {/* Link para ver os melhores projetos do usuário */}
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
};

// Exportando o componente User para ser usado em outros lugares da aplicação
export default User;
