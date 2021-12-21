import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Input from '../components/Input';
import data from './__mocks__/apimock';

describe('Input page renders as required', () => {
  it('Should be rendering 27 regions', () => {
    render(<BrowserRouter><Input data={data} /></BrowserRouter>);

    expect(data.length).toBe(27);
  });

  it('Should be rendering 27 regions', () => {
    const data = [
      {
        id: 'MockState1',
        today_confirmed: 241846,
      },
      {
        id: 'MockState2',
        today_confirmed: 241846,
      },
      {
        id: 'MockState3',
        today_confirmed: 241846,
      },
      {
        id: 'MockState4',
        today_confirmed: 241846,
      },
    ];
    render(<BrowserRouter><Input data={data} /></BrowserRouter>);

    expect(data.length).toBe(4);
  });

  it('Component has Alagoas', () => {
    render(<BrowserRouter><Input data={data} /></BrowserRouter>);

    expect(screen.getByText(/Alagoas/i)).toBeInTheDocument();
  });

  it('Component has Río', () => {
    render(<BrowserRouter><Input data={data} /></BrowserRouter>);

    expect(screen.getByText(/Alagoas/i)).toBeInTheDocument();
  });

  it('Component has Sao Paulo', () => {
    render(<BrowserRouter><Input data={data} /></BrowserRouter>);

    expect(screen.getByText(/Sao/i)).toBeInTheDocument();
  });

  it('Component has number of cases in Mato Grosso', () => {
    render(<BrowserRouter><Input data={data} /></BrowserRouter>);

    expect(screen.getByText(/216/i)).toBeInTheDocument();
  });
});
