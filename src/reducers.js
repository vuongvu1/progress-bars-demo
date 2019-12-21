import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import progressBarsReducer from './containers/ProgressBarsDemo/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  progressBar: progressBarsReducer,
});
