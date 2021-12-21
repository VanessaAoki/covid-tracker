import dataReducer from '../redux/main/main';

test('should return the initial state', () => {
  expect(dataReducer(undefined, {})).toEqual([]);
});
