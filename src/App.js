// React Router
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <>
        <Header />
        <Main />
    </>
    </ThemeProvider>
  );
}

export default App;
