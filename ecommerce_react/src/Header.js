import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    <Link>Add Product</Link>
                    <Link>Update Product</Link>
                    <Link>Login</Link>
                    <Link>Register</Link>
                </Nav>
            </Navbar>
        </div> 
    )
}

export default Header