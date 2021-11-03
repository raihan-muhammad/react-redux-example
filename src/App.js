import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import About from "./Pages/About";
import Home from "./Pages/Home";
import TodoApp from "./Components/TodoApp";
import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={TodoApp} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
