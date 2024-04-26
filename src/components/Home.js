import {React, useEffect} from "react";
import { Button, Container } from "reactstrap";
import "../css/jumbotron.css"
const Home = () => {
  useEffect(()=>{
    document.title="Home || Let's Code";
},[])
  return (
    <div className="jumbotron text-center bg-warning" >
        
        <h1>Book Course with Let's Study</h1>
        <p>We deliver quality courses to study new technologies</p>
        <Container>
          <Button color="primary" outline>Start Using</Button>
        </Container>
        
    </div>
  )
};


export default Home;
