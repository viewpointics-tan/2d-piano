<template>
  <v-row class="d-flex flex-nowrap justify-end">
    <key
      v-for="obj in keyNumArray"
      :key="obj.keyNum"
      :keyNum="obj.keyNum"
      :keyColor="obj.color"
      :rowNum="rowNum"
      :root="root"
      :scale="scale"
    ></key>
    <div :style="{ width: (rowNum - yIndex) * 50 + 'pt' }"></div>
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
    },
    root: {
      type: Number,
      default: 0
    },
    scale: {
      type: String,
      default: 'a'
    }
  },
  data() {
    return {}
  },
  computed: {
    keyNumArray() {
      return [...Array(this.length).keys()].map((i) => {
        const x = i + this.xIndex
        const y = this.rowNum
        return {
          keyNum:
            7 * math.quotient(x, 2) +
            (4 - math.mod(y, 2)) * math.mod(x, 2) -
            3 * math.quotient(y, 2) -
            1 * math.mod(y, 2),
          color:
            (math.mod(x, 2) === 0) ^ (math.mod(y, 2) === 0)
              ? 'grey lighten-3'
              : 'blue accent-2'
        }
      })
    }
  }
}
</script>

<style></style>
