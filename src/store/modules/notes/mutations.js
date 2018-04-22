/* ============
 * Mutations for the notes module
 * ============
 *
 * The mutations that are available on the
 * notes module.
 */

import { FIND } from './mutation-types';

export default {
  [FIND](state, notes) {
    for (var i = 0; i < state.length; i++) {
      state[i].addr = notes[i].addr;
      state[i].value = notes[i].value;
      state[i].valueUnit = notes[i].valueUnit;
      state[i].cost = notes[i].cost;
      state[i].costUnit = notes[i].costUnit;
      state[i].status = notes[i].status;
    }
  },
};
