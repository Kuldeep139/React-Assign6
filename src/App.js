import './App.css';
import './components/style.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import NavigationBar from './components/NavBar';
import AddStudent from './components/AddStudent';
import Details from './components/Details'
import Edit from './components/Edit';


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
        <Route path ='AddStudent'element={<AddStudent/>}/>
        <Route path ='/Edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    
    </Details>

  );
}

export default App;
