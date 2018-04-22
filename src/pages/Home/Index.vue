<template>
  <v-layout>
    <div id="note-cards" v-for='note in
[{"cost":"10.00","status":"available","valueUnit":"mBTC","costUnit":"NZD","value":"1.00","addr":"13pAaEsDBjYLhkkAFQpdNGMFoYHdLYEc6f"},{"costUnit":"NZD","value":"1.00","cost":"10.00","status":"available","valueUnit":"mBTC","addr":"14ZFBbsWmL8FW3XrG2JX45dxBA8UKavsPW"},{"costUnit":"NZD","value":"1.00","cost":"10.00","status":"available","valueUnit":"mBTC","addr":"1CWu2kd7TkUmRc8d28yLy2aLb62EUF2kvj"},{"value":"1.00","cost":"10.00","status":"available","valueUnit":"mBTC","costUnit":"NZD","addr":"1LnegwJiuyfmoF8kiqvx8dsaQgjm3fgHM2"},{"costUnit":"NZD","value":"1.00","cost":"10.00","status":"available","valueUnit":"mBTC","addr":"1tiaC6mdPVRbtQAhFXgFZQ81HVpp3T7zo"}]
'>
    <v-card contextual-style="dark" :class="'status-' + note.status + ' currency-' + note.valueUnit">
      <span slot="header">
        {{ note.status }}
      </span>
      <div slot="body">
        <dl>
          <dt class="addr">Address</dt>
          <dd class="addr">{{ note.addr }}</dd>
          <dt class="cost">Cost</dt>
          <dd class="cost">{{ note.cost }} {{ note.costUnit }}</dd>
          <dt class="value">Value</dt>
          <dd class="value">{{ note.value }} {{ note.valueUnit }}</dd>
        </dl>
        <div>
          <a class="btn btn-outline-primary" href="#" target="_blank">
            <i class="" aria-hidden="true" ></i>
            <span class=""> Claim This Note </span>
          </a>
        </div>
      </div>
    </v-card>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
