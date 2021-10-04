import React from "react";
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

class Home extends React.Component {


    render() {
        return (
            <>
                <div>
                    <ul>
                        {/* <li><Link to="/">Home</Link></li>

                        <li><Link to="/addmovie">AddMovie</Link></li>
                        <li><Link to="/viewmovie">ViewMovie</Link></li>
                        <li><Link to="/addcustomer">AddCustomer</Link></li>
                        <li><Link to="/viewcustomer">ViewCustomer</Link></li>
                        <li><Link to="/addreservation">AddReservation</Link></li>
                        <li><Link to="/viewreservation">ViewReservation</Link></li> */}


                        <Navbar bg="dark" variant="dark" style={{margin:0}}>
                            <Container>
                                
                                <Nav className="me-auto">
                                    <Nav.Link ><li><Link style={{color:"white", textDecoration:"none"}} to="/">Home</Link></li></Nav.Link>
                                    <Nav.Link ><li><Link style={{color:"white", textDecoration:"none"}} to="/addmovie">AddMovie</Link></li></Nav.Link>
                                    <Nav.Link ><li><Link style={{color:"white", textDecoration:"none"}} to="/viewmovie">ViewMovie</Link></li></Nav.Link>
                                    <Nav.Link ><li><Link style={{color:"white", textDecoration:"none"}} to="/addcustomer">AddCustomer</Link></li></Nav.Link>
                                    <Nav.Link><li><Link style={{color:"white",textDecoration:"none"}} to="/viewcustomer">ViewCustomer</Link></li></Nav.Link>
                                    <Nav.Link ><li><Link style={{color:"white", textDecoration:"none"}} to="/addreservation">AddReservation</Link></li></Nav.Link>
                                    <Nav.Link ><li><Link style={{color:"white", textDecoration:"none"}} to="/viewreservation">ViewReservation</Link></li></Nav.Link>
                                    
                                </Nav>
                            </Container>
                        </Navbar>

                    </ul>
                </div>
            </>

        )
    }

}

export default Home