// React Router
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <div className="bg-slate-50 max-w-full ">
      <div className="containers  md:px-4 sm:px-10">
        <Header />
        <Main />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
