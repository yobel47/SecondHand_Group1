import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import ProfileReducer from './ProfileReducer';
import HomeReducer from './HomeReducer';
import GlobalReducers from './GlobalReducer';
import DetailReducer from './DetailReducer';
import AllBidReducer from './AllBidReducer';
import SellReducer from './SellReducer';

const AllReducers = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  profile: ProfileReducer,
  home: HomeReducer,
  global: GlobalReducers,
  detail: DetailReducer,
  allBid: AllBidReducer,
  sell: SellReducer,
});

export default AllReducers;
