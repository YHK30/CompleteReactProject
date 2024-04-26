import './App.css';
import { ToastContainer} from "react-toastify";
import Home from './components/Home';
import Course from './components/Course'
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Container } from 'reactstrap';
import {Row, Col} from 'reactstrap';
import Header from './components/Header';
import Menus from './components/Menus';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UpdateCourse from './components/UpdateCourse';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {

  /*const btnHandle=()=>{
      toast("This is my first message form reactjs.",
      {position: "top-center"});
  }*/
  return (
   <div>
      <Router>
      <ToastContainer/>
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
            <Menus/>
          </Col>
          <Col md={8}>
            <Routes>
            <Route path='/' Component={Home} exact/>
            <Route path='/add-course' Component={AddCourse} exact/>
            <Route path='/view-course' Component={AllCourses} exact/>
            <Route path='/update-course/:id' Component={UpdateCourse} exact/>
            <Route path='/about-us' Component={AboutUs} exact/>
            <Route path='/contact-us' Component={ContactUs} exact/>
            
      
            </Routes>
            </Col>
        </Row>
      </Container>
      </Router>
  </div>
  );
}

export default App;


//In return()
//<h1> This is bootstrap components</h1>
//<Button color="warning" outline onClick={btnHandle}>First React Button</Button>
   
//Basic code
/*<Home/>
      <Course course={{title:"React Course", description:"This is React course"} }/>
      <Course course={{title:"Java Course", description:"This is Java course"} }/>
      <Course course={{title:"MySQL Course", description:"This is MySQL course"} }/>

      <AllCourses/>

      <AddCourse/>*/