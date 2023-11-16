
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Basic } from './Page/Basic';
import { Advance } from './Page/Advance';
import { Warning } from './components/Warning';


function App() {

  return (
    <div className=' flex flex-col justify-center items-center '>
    
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/basic' element={<Basic/>}></Route>
  <Route path='/advance' element={<Advance/>}></Route>
</Routes>

    </div>
  );
}

export default App;
