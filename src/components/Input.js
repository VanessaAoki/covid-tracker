/* eslint-disable react/prop-types */
import React from 'react';
import DataCard from './AllRegionsCard';

const Input = (props) => {
  const { data } = props;
  let searchResult = '';
  const [state, setState] = React.useState({
    search: '',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (state) {
    const inputValue = state.search.toLowerCase();
    searchResult = data.filter((name) => name.id.includes(inputValue))
      .map((info) => (info));
  }

  return (
    <>
      <form>
        <input type="text" value={state.value} name="search" placeholder="Search by region name" onChange={handleChange} id="searchInput" />
      </form>
      <DataCard data={searchResult} />
    </>
  );
};

export default Input;
