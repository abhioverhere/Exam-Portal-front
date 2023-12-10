import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main.jsx';
import AdminMain from './pages/AdminMain.jsx';
import AdminMainSub from './pages/AdminMainSub.jsx';
import UserMain from './pages/UserMain.jsx';
import UserSubMain from './pages/UserSubMain.jsx';
import Login from './components/Login.jsx';
import AdminDash from './components/AdminDash.jsx';
import Batches from './components/Batches.jsx';
import List from './components/List.jsx';
import UnregList from './components/UnregList.jsx';
import IneligList from './components/IneligList.jsx';
import ResultPage from './components/ResultPage.jsx';
import UserDash from './components/UserDash.jsx';
import Help from './components/Help.jsx';
import RegForm from './components/Form.jsx';
import { Logout } from './Logout.js';
import { Requireauth } from './Auth.js';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Main child={<Login/>}/>}/>
      <Route path ={'/logout'} element={<Logout/>}></Route>

      <Route path={'/admindash'} element={<Requireauth><AdminMain child={<AdminDash/>}/></Requireauth>}/>
      <Route path={'/batches'} element={<Requireauth><AdminMainSub child={<Batches/>}/></Requireauth>}/>
      <Route path={'/upload'} element={<Requireauth><AdminMainSub child={<ResultPage/>}/></Requireauth>}/>
      <Route path={'/list'} element={<Requireauth><AdminMainSub child={<List/>}/></Requireauth>}/>   
      <Route path={'/unreglist'} element={<Requireauth><AdminMainSub child={<UnregList/>}/></Requireauth>}/>   
      <Route path={'/ineliglist'} element={<Requireauth><AdminMainSub child={<IneligList/>}/></Requireauth>}/>   
      
      <Route path={'/userdash'} element={<Requireauth><UserMain child={<UserDash/>}/></Requireauth>}/>
      <Route path={'/help'} element={<Requireauth><UserSubMain child={<Help/>}/></Requireauth>}/>
      <Route path={'/regform'} element={<Requireauth><UserSubMain child={<RegForm/>}/></Requireauth>}/>

    </Routes>
  );
}

export default App;
