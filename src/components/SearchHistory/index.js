import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
  return {
    searchHist: store.search.searchHist
  };
}

export default connect(mapStoreToProps)(SearchHistory);