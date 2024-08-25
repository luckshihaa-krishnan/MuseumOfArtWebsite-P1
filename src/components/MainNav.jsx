import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { Form,Button } from 'react-bootstrap'
import { useState } from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router'

export default function MainNav(){
    const [searchText, setSearchText] = useState('')
    const router = useRouter();

    const searchButtonPressed = (e) => {
        e.preventDefault();
        router.push(`/artwork?title=true&q=${searchText}`)  
    }    

    return(<>
        <Navbar expand="lg" className="fixed-top navbar-dark bg-dark">
        <Container>
            <Navbar.Brand>Luckshihaa Krishnan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
            <Link href="/search" passHref legacyBehavior><Nav.Link>Advanced Search</Nav.Link></Link>
            </Nav>

            <form class="d-flex" onSubmit={searchButtonPressed}>
                <input type="search" value={searchText} onChange={(e)=> setSearchText(e.target.value)} placeholder="Search" aria-label="Search" />
                &nbsp; <Button type="submit" variant="outline-success">Search</Button>
            </form>

            </Navbar.Collapse>
        </Container>
        
        </Navbar>
        <br/><br/>
    </>)
}