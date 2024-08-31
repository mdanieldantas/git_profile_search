// importando o componente Outlet do React Router Dom para renderizar o componente principal da aplicação
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <h1>Github Finder</h1>
        {/* renderizando o componente Outlet para renderizar o componente principal da aplicação */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
