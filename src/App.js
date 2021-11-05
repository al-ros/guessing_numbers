import './App.css';
import Header from './components/Header';
import Start from './components/Start';
import EnterName from './components/EnterName';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Start />}></Route>

          <Route path="/EnterName" element={<EnterName />}></Route>

          

        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
