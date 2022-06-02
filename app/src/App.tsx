// React
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Componentes, Contextos, Hooks e Pages
import { AuthContextProvider } from "./contexts/AuthContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ForgotPassword } from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/home" exact component={Home} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
