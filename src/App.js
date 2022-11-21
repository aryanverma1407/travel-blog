
import Home from "./pages/home/Home";
import Topbar from "./components/Topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes,Route, BrowserRouter} from 'react-router-dom'
import SinglePost from "./components/singlePost/SinglePost";


function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/write' element={<Write/>}></Route>
      <Route path='/kerala' element={<Single/>}></Route>



    </Routes>
    </BrowserRouter>




    </>
  );
}

export default App;
