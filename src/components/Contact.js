import React from 'react';
import './Contact.css';


let online = true;
let avatar = 'https://randomuser.me/api/portraits/women/84.jpg';
let name = 'Jane Sheppard'

function Contact() {
    return(
        <div className='Contact'>
        <img className='avatar' src={avatar}/>
        <div>
            <div className='name'>{name}</div>
            <div className='status'>
                <div className='status-online'></div>
                <div className='status-text'>{online ? 'online' : 'offline'}</div>
            </div>
        </div>
        </div>
    )

    }
export default Contact;
