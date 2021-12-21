import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpecificRegionCard from '../components/SpecificRegionCard';

describe('Region card loads as it should', () => {
  const data = {
    date: '2021-12-15',
    name: 'Alagoas',
    today_confirmed: 241846,
    today_deaths: 6372,
    today_new_confirmed: 14,
    today_new_deaths: 0,
    today_new_open_cases: 14,
    today_new_recovered: 0,
    today_open_cases: 12153,
    today_recovered: 223321,
  };

  it('Component has the number of total recovered cases', () => {
    render(<BrowserRouter><SpecificRegionCard data={data} /></BrowserRouter>);

    expect(screen.getByText(/223321/i)).toBeInTheDocument();
  });

  it('Component has the number of total deaths', () => {
    render(<BrowserRouter><SpecificRegionCard data={data} /></BrowserRouter>);

    expect(screen.getByText(/6372/i)).toBeInTheDocument();
  });

  it('Component has the number of total open cases', () => {
    render(<BrowserRouter><SpecificRegionCard data={data} /></BrowserRouter>);

    expect(screen.getByText(/12153/i)).toBeInTheDocument();
  });
});
