import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetData } from '../redux/main/main';
import { fetchGetDataCountry } from '../redux/main/country';
import Input from './Input';
import './Data.css';
import './Main.css';

const MainPage = () => {
  const data = useSelector((state) => state.data);
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const date = new Date();
  const newDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  useEffect(() => {
    dispatch(fetchGetData(newDate, 'Spain'));
  }, []);

  useEffect(() => {
    dispatch(fetchGetDataCountry(newDate, 'Spain'));
  }, []);

  return (
    <div className="mainContainer">
      <section className="mainSection">
        <article className="mainHeader">
          <h2>SPAIN</h2>
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
