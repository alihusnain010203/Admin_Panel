import './App.css'
import Home from './pages/home/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login/login';
import List from './pages/list/list';
import Single from './pages/single/Single';
import New from './pages/new/New'
import { productInputs, userInputs } from './components/Formsource';
import './components/style/Dark.scss'
import { useContext } from 'react';
import { DarkmodeContext } from './components/context/darkmodecontext.jsx';
function App() {
const {darkmode}=useContext(DarkmodeContext)
  return (
    
    <div className={darkmode ? 'app dark':'app'}>

    <BrowserRouter>
<Routes>
  <Route index path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
   <Route path='/:menu'>
<Route index element={<List/>}/>
<Route path=':userid' element={<Single/>}/>
<Route path='new' element={<New input={userInputs} title={"Add New User"}/>}/>
   </Route>
   <Route path='/products'>
<Route index element={<List/>}/>
<Route path=':productid' element={<Single/>}/>
<Route path='new' element={<New input={productInputs} title={"Add New Product"}/>}/>
   </Route>

</Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
