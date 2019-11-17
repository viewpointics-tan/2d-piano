<template>
  <v-layout column justify-center align-center>
    <row :rowNum="0" :length="5"></row>
  </v-layout>
</template>

<script>
import Tone from 'tone'
import Row from '../components/row'
export default {
  name: 'Index',
  components: {
    Row
  },
  data() {
    return {
      synth: {}
    }
  },
  mounted() {
    this.synth = new Tone.Synth().toMaster()
  }
}
</script>
