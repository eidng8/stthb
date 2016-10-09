/**
 * Created by JC on 2016-10-06.
 */

import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {combineReducers} from '@ngrx/store';
import {crew} from './crew.reducer';
import {filters} from './filter.reducer';


// uncomment the storeLogger import and this line
// and comment out the other export default line to turn on
// the store logger to see the actions as they flow through the store
// turned this off by default as i found the logger kinda noisy

// ngc doesn't deal with default exports, so we have to name it something.

export const reducer:any = compose(storeLogger(), combineReducers)({
// export default compose(combineReducers)({
                                                                     crew,
                                                                     filters,
                                                                   });
