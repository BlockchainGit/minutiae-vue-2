/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import Transformer from '@/transformers/AccountTransformer';
import * as types from './mutation-types';

export const find = ({ commit }) => {
  /*
   * Normally you would use a proxy to fetch the account:
   *
   * new Proxy()
   *  .find()
   *  .then((response) => {
   *    commit(types.FIND, Transformer.fetch(response));
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  const notes = [
    {
      "cost": 1000,
      "status": "available",
      "valueUnit": "BTC",
      "costUnit": "NZD",
      "value": 100000,
      "addr": "13pAaEsDBjYLhkkAFQpdNGMFoYHdLYEc6f"
    },
    {
      "costUnit": "NZD",
      "value": 100000,
      "cost": 1000,
      "status": "available",
      "valueUnit": "BTC",
      "addr": "14ZFBbsWmL8FW3XrG2JX45dxBA8UKavsPW"
    },
    {
      "costUnit": "NZD",
      "value": 100000,
      "cost": 1000,
      "status": "available",
      "valueUnit": "BTC",
      "addr": "1CWu2kd7TkUmRc8d28yLy2aLb62EUF2kvj"
    },
    {
      "value": 100000,
      "cost": 1000,
      "status": "available",
      "valueUnit": "BTC",
      "costUnit": "NZD",
      "addr": "1LnegwJiuyfmoF8kiqvx8dsaQgjm3fgHM2"
    },
    {
      "costUnit": "NZD",
      "value": 100000,
      "cost": 1000,
      "status": "available",
      "valueUnit": "BTC",
      "addr": "1tiaC6mdPVRbtQAhFXgFZQ81HVpp3T7zo"
    }
  ];

  commit(types.FIND, Transformer.fetch(notes));
};

export default {
  find,
};
