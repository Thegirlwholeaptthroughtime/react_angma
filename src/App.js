import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";



function App() {
  return (

    <BrowserRouter>
    <div className="App">
       <Header />
       <DayList />
       <Day />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
