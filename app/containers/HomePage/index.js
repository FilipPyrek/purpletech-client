/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import messages from './messages';
import { fetchRate, setBase, setQuote, setAmount } from './actions';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    intl: intlShape,
    fetch: PropTypes.object,
    data: PropTypes.object,
    onFetch: PropTypes.func.isRequired,
    onSetBase: PropTypes.func.isRequired,
    onSetQuote: PropTypes.func.isRequired,
    onSetAmount: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const { onFetch, data } = this.props;
    if (data.base && data.quote && data.amount) {
      onFetch({ base: data.base, quote: data.quote, amount: data.amount });
    }
  }

  render() {
    const {
      intl,
      fetch,
      data,
      onSetBase,
      onSetQuote,
      onSetAmount,
    } = this.props;
    return (
      <h1>
        <FormattedMessage {...messages.header} />
        <form onSubmit={this.submit}>
          <input
            placeholder={intl.formatMessage(messages.base)}
            onChange={(e) => onSetBase(e.target.value)}
            value={data.base}
          />
          /
          <input
            placeholder={intl.formatMessage(messages.quote)}
            onChange={(e) => onSetQuote(e.target.value)}
            value={data.quote}
          />
          (
          <input
            placeholder={intl.formatMessage(messages.amount)}
            onChange={(e) => onSetAmount(e.target.value)}
            value={data.amount}
          />
          )
          <button type="sumit">
            <FormattedMessage {...messages.fetch} />
          </button>
          <pre>{JSON.stringify(fetch, null, 2)}</pre>
        </form>
      </h1>
    );
  }
}

const mapDispatchToProps = {
  onFetch: fetchRate,
  onSetBase: setBase,
  onSetQuote: setQuote,
  onSetAmount: setAmount,
};

const mapStateToProps = (state) => ({
  fetch: state.getIn(['home', 'fetch']).toJS(),
  data: state.getIn(['home', 'form']).toJS(),
});

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
