<template>
  <v-layout column justify-center align-center class="parent">
    <div>
      <v-select v-model="length" :items="items" placeholder="長さ"></v-select>
      <v-select v-model="rows" :items="items2" placeholder="列数"></v-select>
      <v-btn @click="xIndex++">←</v-btn>
      <v-btn @click="xIndex--">→</v-btn>
      <v-btn @click="yIndex++">↑</v-btn>
      <v-btn @click="yIndex--">↓</v-btn>
      <div>
        <v-btn @click="root++" color="green">↑</v-btn>
        <v-btn @click="root--" color="green">↓</v-btn>
        <v-select v-model="scale" :items="scales"></v-select>
      </div>
    </div>
    <div>
      <row
        v-for="rowNum in rowArray"
        :key="rowNum"
        :rowNum="rowNum"
        :length="length"
        :xIndex="xIndex"
        :yIndex="yIndex"
        :root="root"
        :scale="scale"
      ></row>
    </div>
  </v-layout>
</template>

<script>
import Row from '../components/row'
export default {
  name: 'Index',
  components: {
    Row
  },
  data() {
    return {
      items: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      length: 10,
      items2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      rows: 5,
      xIndex: -1,
      yIndex: -3,
      root: 0,
      scales: ['a', 'b', 'c'],
      scale: 'a'
    }
  },
  computed: {
    rowArray() {
      return [...Array(this.rows).keys()].map((el) => el + this.yIndex)
    }
  }
}
</script>
<style>
.parent {
  display: inline-block;
}
</style>
