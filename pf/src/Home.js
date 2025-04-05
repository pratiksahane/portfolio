import React from 'react';
import './index.css';
import Profile from './Profilepic.jpg';
const Home=()=>{
return(<>
<div className="homepage" id='home'>
<table>
    <tr>
        <td>
        <h1>Hi, I'm Pratik Sahane 👋</h1>
        <p>This is my Portfolio Website, feel free to explore!</p>
        </td>
        <td>
        <img src={Profile} alt="Pratik's Profile" className="profile-pic" />
        </td>
    </tr>
  </table>
</div>
</>);
}
export default Home;