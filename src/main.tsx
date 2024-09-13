// Importando o React e o ReactDOM
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Importando o componente App e o arquivo de estilos index.css
import App from "./App.tsx";
import "./index.css";

// Importando o router do react-router-dom para renderizar a aplicação no navegador
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
// Importando os componentes Home e Repos
import Home from "./routes/Home.tsx";
import Repos from "./routes/Repos.tsx";

// Criando o router para a aplicação invocando a função createBrowserRouter
// Dentro dela, passa um array que contém um objeto com a rota e o componente que será renderizado
// App é o componente principal da aplicação, repetido em todas as páginas
const router = createBrowserRouter([
  {
    // Rota principal
    path: "/",
    // Componente que será renderizado
    element: <App />,
    // Subrotas
    children: [
      {
        // Rota
        path: "/",
        // Componente que será renderizado na rota
        element: <Home />,
      },
      {
        path: "/repos/:username",
        element: <Repos />,
      },
    ],
  },
]);

// Criando o router para a aplicação no navegador e renderizando a aplicação no navegador com o react-router-dom e react-dom
// React Router e React Router Dom são pacotes que ajudam a criar aplicativos de página única e reutilizações de componentes.
// O React Router Dom permite que os usuários naveguem entre as páginas sem precisar recarregar a página inteira.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <StrictMode> é um componente do React que ajuda a identificar problemas potenciais na aplicação.
  // Ele ativa verificações e avisos adicionais para seus descendentes. Essas verificações são acionadas apenas em modo de desenvolvimento.
  <StrictMode>
    {/* <RouterProvider> é um componente do React Router que fornece o contexto do roteador para a aplicação.
    O prop `router` é passado para o <RouterProvider>, que contém a configuração das rotas da aplicação. */}
    <RouterProvider router={router} />
  </StrictMode>
);
