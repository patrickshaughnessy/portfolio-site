/* */ 
"format cjs";
'use strict';

import useRouterHistory from './useRouterHistory';
import createHashHistory from 'history/lib/createHashHistory';

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var history = undefined;

if (canUseDOM) {
  history = useRouterHistory(createHashHistory)();
}

export default history;