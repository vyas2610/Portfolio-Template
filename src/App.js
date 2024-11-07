// React Router
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContent from './components/Main';

function App() {
  return (
    <div className='bg-slate-50'>
      <div className="containers px-4">
        
          <Header />
          <MainContent />
      </div>
    </div>
  );
}

export default App;
