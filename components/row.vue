<template>
  <v-row class="d-flex flex-nowrap">
    <key v-for="keyNum in keyNumArray" :key="keyNum" :keyNum="keyNum"></key>
  </v-row>
</template>

<script>
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
      default: 5
    }
  },
  data() {
    return {}
  },
  computed: {
    keyNumArray() {
      let keyNum = 0
      return [...Array(this.length).keys()].map((i) => {
        if (i === 0) {
          return keyNum
        } else if (i % 2 === 1) {
          keyNum = keyNum + 4
          return keyNum
        } else {
          keyNum = keyNum + 3
          return keyNum
        }
      })
    }
  }
}
</script>

<style></style>
