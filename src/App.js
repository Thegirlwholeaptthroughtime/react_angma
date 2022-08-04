import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import "./App.css"
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Routes>
              <Route path="/" element={<DayList />} />
              <Route path="/day" element={<Day />} />
              
             
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
