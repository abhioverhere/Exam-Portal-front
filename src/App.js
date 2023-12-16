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
import RegList from './components/RegList.jsx';
import IneligList from './components/IneligList.jsx';
import ResultPage from './components/ResultPage.jsx';
import UserDash from './components/UserDash.jsx';
import Help from './components/Help.jsx';
import RegForm from './components/Form.jsx';
import { Logout } from './Logout.js';
import { RequireUserauth } from './UserAuth.js';
import { RequireAdminauth } from './AdminAuth.js';

import './App.css'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Main child={<Login/>}/>}/>
      <Route path ={'/logout'} element={<Logout/>}></Route>

      <Route path={'/admindash'} element={<RequireAdminauth><AdminMain child={<AdminDash/>}/></RequireAdminauth>}/>
      <Route path={'/batches'} element={<RequireAdminauth><AdminMainSub child={<Batches/>}/></RequireAdminauth>}/>
      <Route path={'/upload'} element={<RequireAdminauth><AdminMainSub child={<ResultPage/>}/></RequireAdminauth>}/>
      <Route path={'/list'} element={<RequireAdminauth><AdminMainSub child={<List/>}/></RequireAdminauth>}/>   
      <Route path={'/reglist'} element={<RequireAdminauth><AdminMainSub child={<RegList/>}/></RequireAdminauth>}/>   
      <Route path={'/unreglist'} element={<RequireAdminauth><AdminMainSub child={<UnregList/>}/></RequireAdminauth>}/>   
      <Route path={'/ineliglist'} element={<RequireAdminauth><AdminMainSub child={<IneligList/>}/></RequireAdminauth>}/>   
      
      <Route path={'/userdash'} element={<RequireUserauth><UserMain child={<UserDash/>}/></RequireUserauth>}/>
      <Route path={'/help'} element={<RequireUserauth><UserSubMain child={<Help/>}/></RequireUserauth>}/>
      <Route path={'/regform'} element={<RequireUserauth><UserSubMain child={<RegForm/>}/></RequireUserauth>}/>

    </Routes>
  );
}

export default App;
