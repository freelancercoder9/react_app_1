import VideoKYC from "./screens/VideoKYC";
import Header14 from "./components/Header14";
import PopUp15 from "./components/PopUp15";
function App() {
  const listData = [
    { details: "DOB", data: "12June2012" },
    { details: "MName", data: "Neeta" },
    { details: "POB", data: "Mahabubnagar" },
    { details: "Occupation", data: "Service" },
    { details: "Pincode", data: "410009" },
  ];
  return (
    <div>
      {/* <div>
        <VideoKYC></VideoKYC>
      </div> */}
      <div>{/* <Header14 userName1={"Vivek V Shahir"} pipeText={"Lorem ipsum dolor ipsum"}></Header14> */}</div>
      <div>
        <PopUp15></PopUp15>
      </div>
    </div>
  );
}

export default App;
