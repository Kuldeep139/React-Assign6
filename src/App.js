import './App.css';
import './components/style.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import NavigationBar from './components/NavBar';
import Details from './components/Details'
import EditStudent from './components/EditStudent';
import NewStudents from './components/NewStudents';


function App() {
  return (
    <Details>
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path ='Home' element={<Home/>}/>
        <Route path ='Student' element={<Student/>}/>
        <Route path ='Contact' element={<Contact/>}/>
        <Route path ='/EditStudent/:id' element={<EditStudent/>}/>
        <Route path = "/NewStudents" element={<NewStudents/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    
    </Details>

  );
}

export default App;
