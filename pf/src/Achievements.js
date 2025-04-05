import React from "react";
import Image1 from './11th.png';
import Image2 from './12th.png';
import Image3 from './speech.png';

const Achievements = () => {
  return (
    <div className="achievements" id="achieve">
      <h1>Awards</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <img className="img1" src={Image1} alt="11th Grade Award" />
            </td>
            <td>
              <h2>Secured First Rank in Eleventh Grade from Science Stream.</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>Secured First Rank in Twelfth Grade from Science Stream.</h2>
            </td>
            <td>
              <img className="img2" src={Image2} alt="12th Grade Award" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img1" src={Image3} alt="Seminar Speech" />
            </td>
            <td>
              <h2>Speech for seminar on Branding and Profile Building.</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Achievements;
