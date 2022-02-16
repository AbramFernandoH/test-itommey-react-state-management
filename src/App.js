import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Show from './components/Show';
import { ContextAPI } from './context/contextSetup';
import './App.css';

function App() {
  return (
    <ContextAPI>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/show' element={<Show />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ContextAPI>
  );
}

export default App;
