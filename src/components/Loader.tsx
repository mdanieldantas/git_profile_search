// Importa o ícone FaSpinner da biblioteca react-icons
import { FaSpinner } from "react-icons/fa";

// Importa os estilos do arquivo CSS Loader.module.css
import classes from "./Loader.module.css";

// Define o componente funcional Loader
const Loader = () => {
  return (
    <>
      {/* Renderiza o ícone FaSpinner com a classe CSS 'loader' */}
      <FaSpinner className={classes.loader} />
    </>
  );
};

// Exporta o componente Loader como padrão
export default Loader;
