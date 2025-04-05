import React from 'react';
import './index.css';
import './Home';
import './AboutMe';
import './Qualification';
import './Achievements';
const Navbar=()=>{
return(
    <>
    <div className='navbar'>
        <table>
            <tr>
            <th className='thnavbar'><i className="material-symbols-outlined">business_chip</i></th>
            <th className='thnavbar'><a href='#home'>Home</a></th> 
            <th className='thnavbar'><a href='#about'>About Me</a></th> 
            <th className='thnavbar'><a href='#qualification'>Qualification</a></th>  
            <th className='thnavbar'><a href='#certificate'>Certifications</a></th>
            <th className='thnavbar'><a href='#achieve'>Achievements</a></th>  
            </tr>
        </table>
    </div>
    </>
);
}
export default Navbar;