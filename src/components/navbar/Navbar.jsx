import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {

    const [active,setActive] = useState(false);
    const [open,setOpen]=useState(false);

    const {pathname} = useLocation();

    const isActive= () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll",isActive);
        };
    },[]);

    const currentUser={
        id:1,
        username: "John Doe",
        isSeller: true  
    }

    return (
        <div className={active || pathname!=="/" ? "navbar active" : "navbar"}>
        <div className='container'>
            <div className=''>
            <Link to="/" className='link'>
                <span className='text'>
                    <img className='logo' src='./img/logo.gif'/>
                </span>
            </Link>
            </div>
            <div className='links'>
                <span>History</span>
                <span>Contribute</span>
                <span>Contact Us</span>
                
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser &&(
                    <div className='user' onClick={() => setOpen(!open)}>
                        <span>{currentUser?.username}</span>
                        <img src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg ' alt='' />
                        
                        {open && 
                      
                        <div className='options'>
                            {currentUser?.isSeller && 
                            (
                                <>
                                <Link to="/mygigs" className="link">Gigs</Link>
                                <Link to="/add" className="link">Add New Gig</Link>
                                </>
                            )
                            }
                            <Link to="/orders" className="link">Orders</Link>
                            <Link to="/messages" className="link">Messages</Link>
                            <Link to="/" className="link">LogOut</Link>
                        </div>
                        
                        }
                    </div>
                )}
            </div>
        </div>
        {/* //if active then show this -> */}
        {active  &&
            <>
            <hr/>
            <div className='menu'>
                <Link to="/" className='link'>About</Link>
                <Link to="/" className='link'>Vision & Aim</Link>
                <Link to="/" className='link'>Facts</Link>
                <Link to="/" className='link'>Contributions</Link>
                <Link to="/" className='link'>Members</Link>
                
                

            </div>
            </>
        }
        {pathname!=="/"  &&
            <>
            <hr/>
            <div className='menu'>
            <Link to="/" className='link'>About</Link>
                <Link to="/" className='link'>Vision & Aim</Link>
                <Link to="/" className='link'>Facts</Link>
                <Link to="/" className='link'>Contributions</Link>
                <Link to="/" className='link'>Members</Link>

            </div>
            </>
        }
        </div>
    )
}

export default Navbar