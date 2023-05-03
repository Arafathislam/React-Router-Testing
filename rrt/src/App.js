import './App.css'
import { BrowserRouter ,Navigate,Route, Routes} from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Post from './components/pages/Post';
import Navbar  from './components/Navbar';
import Dashbord from './components/pages/Dashbord';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';

function App() {

  let isLogged = true;
  let data ={
    'st':'User not logged in'
  }

  return (
    <>
    <BrowserRouter >
    <Navbar/>
    <Routes>
    {/* <Route path="/" element={<h1>Boss</h1>}/> */}
    <Route path ="/" element={<Home/>}/>
    <Route path ="contact/" element={<Contact/>}/>
    <Route path ="about/" element={<About/>}/>
    <Route path ="dashbord/" element={isLogged ? <Dashbord/> :<Navigate to="/login"state={data} replace />}/>
    <Route path ="login/" element={<Login/>}/>
    <Route path ="logout/" element={<Logout/>}/>
    <Route path ="post/:category" element={<Post/>}/>
    <Route path ="*" element={<h1>Error 404 Page not found !!</h1>}/>

    </Routes>

    </BrowserRouter>
  
    </>
  );
}

export default App;
