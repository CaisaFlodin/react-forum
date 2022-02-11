import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appContainer">
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
          <Route
            path="/post/:id"
            render={(props) => <PostPage {...props} />}
          ></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
