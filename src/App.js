import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import './App.css';

import { HookUseContext } from './components/HookUseContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
 
function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>React Hooks</h1>
        {/* Barra de Navegação */}
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <br />
              <Link to="/about">Sobre</Link>
            </li>
          </ul>

          {/* Criando Rotas */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
