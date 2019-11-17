<template>
  <v-layout column justify-center align-center>
    <key :synth="synth"></key>
  </v-layout>
</template>

<script>
import Tone from 'tone'
import Key from '../components/key'
export default {
  name: 'Index',
  components: {
    Key
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
