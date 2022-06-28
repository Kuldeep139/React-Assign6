import './App.css';
import './components/style.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home';
import Students from './components/Students';
import Contact from './components/Contact';
import NavigationBar from './components/NavBar';
import AddStudents from './components/AddStudent';
import Details from './components/Details'

function App() {
  return (
    <Details>
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path ='Home' element={<Home/>}/>
        <Route path ='Students' element={<Students/>}/>
        <Route path ='Contact' element={<Contact/>}/>
        <Route path ='AddStudents'element={<AddStudents/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    
    </Details>

  );
}

export default App;
