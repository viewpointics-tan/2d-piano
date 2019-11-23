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
    },
    xIndex: {
      type: Number,
      default: 0
    },
    yIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  computed: {
    keyNumArray() {
      return [...Array(this.length).keys()].map((i) => {
        const x = i + this.xIndex
        const y = this.rowNum + this.yIndex
        return {
          keyNum:
            7 * math.quotient(x, 2) +
            (4 - math.mod(y, 2)) * math.mod(x, 2) -
            3 * math.quotient(y, 2) -
            1 * math.mod(y, 2),
          color:
            (math.mod(x, 2) === 0) ^ (math.mod(y, 2) === 0) ? 'white' : 'yellow'
        }
      })
    }
  }
}
</script>

<style></style>
