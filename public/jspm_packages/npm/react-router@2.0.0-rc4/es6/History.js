/* */ 
"format cjs";
'use strict';

import warning from './warning';
import { history } from './PropTypes';

/**
 * A mixin that adds the "history" instance variable to components.
 */
var History = {

  contextTypes: {
    history: history
  },

  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? warning(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://bit.ly/1QZCLCv') : undefined;
    this.history = this.context.history;
  }

};

export default History;