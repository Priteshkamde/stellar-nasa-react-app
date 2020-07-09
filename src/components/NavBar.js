import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
    return(
        <div>
            <Nav variant="pills" className="justify-content-start p-1 bg-light" activeKey="">
                <Nav.Item>
                    <Nav.Link href="/" className="btn btn-sm btn-dark"><code>Back to Home</code></Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
};
