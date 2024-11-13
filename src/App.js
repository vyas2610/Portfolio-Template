// React Router
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div className='bg-slate-50 max-w-full'>
      <div className="containers  px-4">
          <Header />
          <Main />
      </div>
    </div>
  );
}

export default App;
