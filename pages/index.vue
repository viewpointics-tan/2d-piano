<template>
  <v-layout column justify-center align-center class="parent">
    <div>
      <row
        v-for="rowNum in rowArray"
        :key="rowNum"
        :rowNum="rowNum"
        :length="8"
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
      rows: 5
    }
  },
  computed: {
    rowArray() {
      return [...Array(this.rows).keys()]
    }
  }
}
</script>
<style>
.parent {
  display: inline-block;
}
</style>
