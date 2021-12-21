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
      <Link to="/main">
        <b className="backButton"><FaAngleLeft /></b>
      </Link>
      <article className="regionTitle">
        <h2>{regionInfo.name}</h2>
        <p>
          {regionInfo.today_confirmed}
          {' '}
          <br />
          cases confirmed
          <br />
          **
        </p>
      </article>
      <span className="regionBanner">REGION BREAKDOWN - 2021-12-15</span>
      <SpecificRegion data={regionInfo} />
    </>
  );
};

export default SecondPage;
