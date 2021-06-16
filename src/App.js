import VideoKYC from "./screens/VideoKYC";
import Header14 from "./components/Header14";
import PopUp15 from "./components/PopUp15";
import HomeComp from "./screens/HomeComp";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

function App() {
  const listData = [
    { details: "DOB", data: "12June2012" },
    { details: "MName", data: "Neeta" },
    { details: "POB", data: "Mahabubnagar" },
    { details: "Occupation", data: "Service" },
    { details: "Pincode", data: "410009" },
  ];
  const pageNotFound = () => {
    return <div>404</div>;
  };
  return (
    <div>
      {/* <div>
              <VideoKYC></VideoKYC>
      </div> */}
      <div>{/* <Header14 userName1={"Vivek V Shahir"} pipeText={"Lorem ipsum dolor ipsum"}></Header14> */}</div>
      <div>{/* <PopUp15></PopUp15> */}</div>
      <Router>
        <Switch>
          <Route path="/" component={HomeComp} exact={true}></Route>
          <Route path="/VidoeKYC" component={VideoKYC} exact={true}></Route>
          <Route component={PopUp15} exact={true}></Route>
          <Route component={pageNotFound} exact={true}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
