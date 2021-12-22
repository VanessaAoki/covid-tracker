import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import SpecificRegion from './SpecificRegionCard';
import './Details.css';

const SecondPage = () => {
  const location = useLocation();
  const regionInfo = location.state.info;

  return (
    <>
      <article className="regionTitle">
        <Link to="/main" className="backButton">
          <b><FaAngleLeft /></b>
        </Link>
        <h2>{regionInfo.name}</h2>
        <p>
          Total cases confirmed:
          <br />
          {regionInfo.today_confirmed}
          <br />
          **
        </p>
      </article>
      <span className="regionBanner">REGION BREAKDOWN - TODAY</span>
      <SpecificRegion data={regionInfo} />
    </>
  );
};

export default SecondPage;
