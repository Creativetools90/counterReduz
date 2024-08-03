import "./App.css";
import { useSelector , useDispatch } from "react-redux";
import { randomNameIncreement } from "./Redux/randomName/RandomNameSlice";
function App() {
  const R_name = useSelector((state) => state.randomName.value); 
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>your random name : {R_name} </h2>
        <button onClick={()=>dispatch(randomNameIncreement())} >random name get</button>
      </div>
    </>
  );
}

export default App;
