// Importando o componente Outlet do React Router Dom para renderizar o componente principal da aplicação
import { Outlet } from "react-router-dom";

// Importando o arquivo de estilos App.css
import classes from "./App.module.css";

function App() {
  return (
    <>
      {/* Div principal que envolve o conteúdo da aplicação */}
      <div className={classes.app}>
        {/* Título da aplicação */}
        <h1>Github Finder</h1>
        {/* Outlet é um placeholder para o conteúdo das rotas definidas no React Router */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
