// React
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Componentes, Contextos, Hooks e Pages
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
      </Switch>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
