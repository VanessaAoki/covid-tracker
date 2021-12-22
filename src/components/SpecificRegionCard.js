/* eslint-disable react/prop-types */
import React from 'react';

const SpecificRegion = (props) => {
  const { data } = props;

  return (
    <>
      <section className="regionTodayContainer">
        <article>
          <b>Confirmed cases:</b>
          <p>{data.today_new_confirmed}</p>
        </article>
        <article>
          <b>Number of deaths:</b>
          <p>{data.today_new_deaths}</p>
        </article>
        <article>
          <b>Number of open cases:</b>
          <p>{data.today_new_open_cases}</p>
        </article>
        <article>
          <b>Number of intensive care cases:</b>
          <p>{data.today_new_intensive_care}</p>
        </article>
      </section>
      <span className="regionBanner">REGION BREAKDOWN - OVERALL</span>
      <section className="regionOverallContainer">
        <article>
          <b>Total number of deaths:</b>
          <p>{data.today_deaths}</p>
        </article>
        <article>
          <b>Total number of open cases:</b>
          <p>{data.today_open_cases}</p>
        </article>
        <article>
          <b>Total number of intensive care cases:</b>
          <p>{data.today_intensive_care}</p>
        </article>
      </section>

    </>
  );
};

export default SpecificRegion;
