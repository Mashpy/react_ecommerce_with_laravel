import {Navbar, Nav} from 'react-bootstrap'

function Header(){
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Navbar>
            <br />
            <Navbar bg="light">
                <Navbar.Brand>Brand text</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header