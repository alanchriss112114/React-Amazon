import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login'
import Signup from './pages/signup'
import AdminLogin from './admin/login';
import AdminPanel from './admin/adminPanel';
import Products from './Components/productProducts/productProducts';
import {AuthContext,FirebaseContext} from './Store/firebaseContext'
import React,{useEffect,useContext} from 'react';
import DepartmentPanel from './admin/departmentPanel';
import UserPanel from './admin/userPanel';

function App() {

  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })

//  integration Node 

const [data, setData] = React.useState(null);

React.useEffect(() => {
  fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
}, []);

  return (
    <div className="App">
      <Router>

        <Routes>

          <Route exact path='/' element={<Home />}/>

          <Route path='/login' element={<Login />}/>

          <Route path='/signup' element={<Signup />}/>

          <Route path='/products' element={<Products/>}/>

          <Route path='/admin' element={<AdminLogin/>}/>

          <Route path='/adminpanel' element={<AdminPanel/>}/>

          <Route path='/departments' element={<DepartmentPanel/>}/>

          <Route path='/users' element={<UserPanel/>}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
