<template>
  <v-layout column justify-center align-center>
    <row
      v-for="rowNum in rows"
      :key="rowNum"
      :rowNum="rowNum"
      :length="12"
    ></row>
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
    return {}
  },
  computed: {
    rows() {
      return [...Array(12).keys()]
    }
  }
}
</script>
