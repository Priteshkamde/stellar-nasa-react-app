import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
    return(
        <div>
            {/* <ul>
                <Link to="/">Take Me Home</Link>
            </ul> */}
            <Nav variant="pills" className="justify-content-start p-2 bg-light" activeKey="">
                <Nav.Item>
                    <Nav.Link href="/" className="btn-dark">Back to Home</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
};
