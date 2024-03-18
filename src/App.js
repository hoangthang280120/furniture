import './App.css';
import { Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </div>
  );
}

export default App;


