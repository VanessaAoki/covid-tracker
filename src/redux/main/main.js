const FETCH_DATA = 'FETCH_DATA';
const HANDLE_FETCH_ERROR = 'HANDLE_FETCH_ERROR';
const apiURL = 'https://api.covid19tracking.narrativa.com/api/';

const initialState = [];

export const fetchData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

const handleFetchError = () => ({
  type: HANDLE_FETCH_ERROR,
});

export const fetchGetData = (date, country) => async (dispatch) => {
  const countryParam = country;
  const res = await fetch(`${apiURL + date}/country/${countryParam}`).catch((error) => dispatch(handleFetchError(error)));
  if (res.ok) {
    const data = await res.json();
    const today = data.dates;
    const infoObj = Object.values(today)[0].countries;
    const withParam = infoObj[countryParam];
    const withRegion = withParam.regions;
    dispatch(fetchData(withRegion));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case HANDLE_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
