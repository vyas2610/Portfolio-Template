// React Router
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-slate-50 max-w-full ">
      <div className="containers  md:px-4 sm:px-10">
        <Header />
      </div>
    </div>
  );
}

export default App;
