import VideoKYC from "./screens/VideoKYC";
import Header14 from "./components/Header14";
import PopUp15 from "./components/PopUp15";
import LivePanCard from "./components/LivePanCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={LoginScreen} exact={true}></Route>
          <Route path="/home" component={HomeScreen} exact={true}></Route>
          <Route path="/videoKYC" component={VideoKYC} exact={true}></Route>
          <Route path="/popUp15" component={PopUp15} exact={true}></Route>
          <Route path="/livePanCard" component={LivePanCard} exact={true}></Route>
          <Route path="/header14" component={Header14} exact={true}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
