import data from '../../data/data';

const initialState = {
  itinerary: data.segments,
};

export default function reducers(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    default:
      return state;
  }
}
