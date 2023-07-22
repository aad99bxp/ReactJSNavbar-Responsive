import './App.css';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <div className="qe">
      <header className="qe">
          <BrowserRouter>
              <Navbar />
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
