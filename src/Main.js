import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import App from './App';
import Home from './component/Home';
import MyHotel from './component/MyHotel';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Sharing from './component/Sharing';


function Main (){
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='app' element={<App/>}/>
          <Route path='myHotel' element={<MyHotel/>}/>
          <Route path='signIn' element={<SignIn/>}/>
          <Route path='signUp' element={<SignUp/>}/>
          <Route path='sharing' element={<Sharing />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Main;