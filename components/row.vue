<template>
  <v-row class="d-flex flex-nowrap justify-end">
    <key
      v-for="obj in keyNumArray"
      :key="obj.keyNum"
      :keyNum="obj.keyNum"
      :keyColor="obj.color"
    ></key>
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
      return [...Array(this.length).keys()].map((i) => {
        return {
          keyNum:
            7 * math.quotient(i, 2) +
            (4 - math.mod(this.rowNum, 2)) * math.mod(i, 2) -
            3 * math.quotient(this.rowNum, 2) -
            1 * math.mod(this.rowNum, 2),
          color:
            (math.mod(i, 2) === 0) ^ (math.mod(this.rowNum, 2) === 0)
              ? 'white'
              : 'yellow'
        }
      })
    }
  }
}
</script>

<style></style>
