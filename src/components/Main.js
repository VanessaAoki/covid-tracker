/* eslint-disable no-use-before-define */
import { React, useEffect, useState } from 'react';
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

  const [inputDate, setInputDate] = useState(newDate);

  useEffect(() => {
    dispatch(fetchGetData(inputDate, 'Spain'));
  }, [inputDate]);

  useEffect(() => {
    dispatch(fetchGetDataCountry(inputDate, 'Spain'));
  }, [inputDate]);

  const handleChange = (e) => {
    setInputDate(e.target.value);
  };

  return (
    <div className="mainContainer">
      <section className="mainSection">
        <article className="mainHeader">
          <h2>SPAIN</h2>
          <p>
            Cases confirmed on
            {' '}
            <input type="date" className="date" name="date" value={inputDate} onChange={handleChange} />
            :
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
