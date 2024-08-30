import { useEffect, useState } from 'react';

import NavBar from '../components/navbar/Navbar';
// import HomePage from '../pages/HomePage';

const ScrollHandler = () => {

    // shared state to hold scrolling information
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect (() => {
        const handleScroll = () => {
            // determine whether page has been scrolled
            console.log('Scrolling');
            const scrolled = window.scrollY > 100;
            console.log('Is Scrolled:', scrolled);
            setIsScrolled(scrolled)
        }

        // add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <NavBar 
                isScrolled={isScrolled}
             />
        </>
    )
}

export default ScrollHandler;