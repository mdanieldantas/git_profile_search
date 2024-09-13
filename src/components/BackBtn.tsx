// Importa os estilos do arquivo CSS BackBtn.module.css
import classes from "./BackBtn.module.css";

// Importa o hook useNavigate do react-router-dom para navegação
import { useNavigate } from "react-router-dom";

// Define o componente funcional BackBtn
const BackBtn = () => {
  // Usa o hook useNavigate para obter a função de navegação
  const navigate = useNavigate();

  return (
    <>
      {/* Renderiza um botão com estilo e funcionalidade de navegação */}
      <button className={classes.back_btn} onClick={() => navigate(-1)}>
        Voltar {/* Texto do botão */}
      </button>
    </>
  );
};

// Exporta o componente BackBtn como padrão
export default BackBtn;
