/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.HomePage.header',
    defaultMessage: 'Let\'s convert!',
  },
  fetch: {
    id: 'app.components.HomePage.fetch',
    defaultMessage: 'Convert',
  },
  base: {
    id: 'app.components.HomePage.base',
    defaultMessage: 'USD (base)',
  },
  quote: {
    id: 'app.components.HomePage.quote',
    defaultMessage: 'CZK (quote)',
  },
  amount: {
    id: 'app.components.HomePage.amount',
    defaultMessage: '15 (amount)',
  },
});
