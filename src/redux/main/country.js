const FETCH_DATA_COUNTRY = 'FETCH_DATA_COUNTRY';
const HANDLE_FETCH_ERROR = 'HANDLE_FETCH_ERROR';
const apiURL = 'https://api.covid19tracking.narrativa.com/api/';
// AIzaSyAvEFXz3-bZRMojyQL0ufIfZopKUYMVy2A

const initialState = [];

export const fetchData = (data) => ({
  type: FETCH_DATA_COUNTRY,
  payload: data,
});

const handleFetchError = () => ({
  type: HANDLE_FETCH_ERROR,
});

export const fetchGetDataCountry = (date, country) => async (dispatch) => {
  const countryParam = country;
  const res = await fetch(`${apiURL + date}/country/${countryParam}`).catch((error) => dispatch(handleFetchError(error)));
  if (res.ok) {
    const data = await res.json();
    const today = data.dates;
    const infoObj = Object.values(today)[0].countries;
    const withParam = infoObj[countryParam];
    dispatch(fetchData(withParam));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_COUNTRY:
      if (state !== initialState) {
        return state;
      }
      return action.payload;
    case HANDLE_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
