import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetData } from '../redux/main/main';
import { fetchGetDataCountry } from '../redux/main/country';
import Input from './Input';
import brazil from '../assets/brazil.png';
import './Data.css';
import './Main.css';

const MainPage = () => {
  const data = useSelector((state) => state.data);
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetData('2021-12-15', 'Brazil'));
  }, []);

  useEffect(() => {
    dispatch(fetchGetDataCountry('2021-12-15', 'Brazil'));
  }, []);

  return (
    <div className="mainContainer">
      <section className="mainSection">
        <img src={brazil} alt="brazil's map" className="brazilMap" />
        <article className="mainHeader">
          <h2>BRAZIL</h2>
          <p>
            Cases confirmed today:
            <br />
            {country.today_new_confirmed}
            <br />
            **
          </p>
        </article>
      </section>
      <Input data={data} />
    </div>
  );
};

export default MainPage;
