import React from "react";
import { Link }  from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import SpaceStyles from './../SpaceStyles.css'

export default function Home() {
    return(
        <div>
        <Jumbotron fluid className="space-background">
            <Container>
                <h1 className="display-3">Jump into Unknown</h1>
            </Container>
        </Jumbotron>

        <Container className="text-center">
            <Link to="/nasaphoto">
                <Button variant="outline-dark btn-lg pb-0 pt-3">
                    <p className="lead"> 
                    <img 
                    className="img_resize mr-2"            
                    src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png?v8"
                    />
                    Interstellar
                    <img 
                    className="img_resize ml-2"            
                    src="https://github.githubassets.com/images/icons/emoji/unicode/1f30c.png?v8"
                    />
                    </p>
                </Button>
            </Link>
        </Container>
            
        </div>
    );
}