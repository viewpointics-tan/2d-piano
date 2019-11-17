<template>
  <v-row class="d-flex flex-nowrap justify-end">
    <key v-for="keyNum in keyNumArray" :key="keyNum" :keyNum="keyNum"></key>
    <div :style="{ width: rowNum * 50 + 'px' }"></div>
  </v-row>
</template>

<script>
import * as math from '../plugins/math'
import Key from './key'
export default {
  name: 'Row',
  components: {
    Key
  },
  props: {
    rowNum: {
      type: Number,
      default: 0
    },
    length: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {}
  },
  computed: {
    keyNumArray() {
      return [...Array(this.length).keys()].map(
        (i) =>
          7 * math.quotient(i, 2) +
          4 * math.mod(i, 2) -
          3 * math.quotient(this.rowNum, 2) -
          2 * math.mod(this.rowNum, 2)
      )
    }
  }
}
</script>

<style></style>
