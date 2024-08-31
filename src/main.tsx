// importando o react e o react-dom
import { StrictMode } from "react";
// importando o App da aplicação e o index.css
import ReactDOM from "react-dom/client";
// importando o App da aplicação e o index.css
import App from "./App.tsx";
// importando o index.css
import "./index.css";
// impotando o router do react-router-dom para renderizar a aplicação no navegador
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
// importando o componente Home
import Home from "./routes/home.tsx";

// criando o router para a aplicação invocando a função createBrowserRouter que dentro dela passa um array que passa um objeto com a rota e o componente que será renderizado App é o componente principal da aplicação repetido em toda as paginas, nele vai ter o titulo da aplicação e vai ser o container dela
const router = createBrowserRouter([
  {
    // rota principal
    path: "/",
    // componente que será renderizado
    element: <App />,
    // subrotas
    children: [
      {
        // rota
        path: "/",
        // componente que será renderizado  na rota
        element: <Home />,
      },
    ],
  },
]);

// criando o router para a aplicação no navegador e renderizando a aplicação no navegador com o react-router-dom e react-dom
// React Router e React Router Dom são pacotes que ajudam a criar aplicativos de página únicas e reutilizações de componentes. O React Router Dom permite que os usuários naveguem entre as páginas sem precisar recarregar a página inteira.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <StrictMode> é um componente do React que ajuda a identificar problemas potenciais na aplicação.
  // Ele ativa verificações e avisos adicionais para seus descendentes. Essas verificações são acionadas apenas em modo de desenvolvimento.
  // <RouterProvider> é um componente do React Router que fornece o contexto do roteador para a aplicação.
  // O prop `router` é passado para o <RouterProvider>, que contém a configuração das rotas da aplicação.
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
