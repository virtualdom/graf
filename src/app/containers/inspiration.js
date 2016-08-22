import { connect } from 'react-redux';

import Inspiration from '../components/inspiration.jsx';

module.exports = connect(
  function mapStateToProps (state) {
    return { dailyQuote: state.get('dailyquote'), loading: state.get('loading') };
  },
  function mapDispatchToProps (dispatch) {
    return {};
  }
)(Inspiration);
