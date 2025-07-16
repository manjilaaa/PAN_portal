import React, { useEffect, useState } from "react";
import Pan1 from "../../Assets/pan1.jpg";
import "./HomePage.css";
const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll',handleScroll);
    }, []);

    const opacity = Math.max(1- scrollY /100 , 0);
    const transform = `translateY(-${Math.min(scrollY,100)}px)` ;
    return(
        <div className="body_text"  style={{ opacity, transform }}>
            <h1>WELCOME TO THE QUICKPAN.</h1>
             <p>Here, you can easily register for a PAN, get your PAN and check your information.</p>
    </div>
    )
};

export default HomePage;
