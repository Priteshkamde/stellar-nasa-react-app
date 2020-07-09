import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'

const apikey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    //Using React Hooks
    
    const [photoData, setphotoData] = useState(null)     
    
    useEffect(() => {

        fetchPhoto();

        async  function fetchPhoto() {
            const result = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apikey}`
            );
            const data = await result.json();
            setphotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;
    
    return(
        <>
        <NavBar />
        <Jumbotron className="bg-dark" fluid>
            <Container>            
                {photoData.media_type === "image" ? (
                    <Image src={photoData.url} alt={photoData.title} fluid rounded />
                ) : (
                    <iframe  
                    title="space-video"
                    src={photoData.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                    />
                )}
            </Container>
        </Jumbotron>

            <Container className="text-center">
                <div>
                    <h1 className="display-4">{photoData.title}</h1>
                    <kbd className="">{photoData.date}</kbd>
                    <p className="mt-3 text-justify lead">{photoData.explanation}</p>
                </div>
            </Container>

    </>
    );
}
