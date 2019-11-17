<template>
  <v-card
    @touchstart.prevent="toneTest()"
    @mousedown="toneTest()"
    class="key"
    :color="keyColor"
    >{{ keyNum }}</v-card
  >
</template>

<script>
// import synth from '../plugins/synth'
import Tone from 'tone'
export default {
  name: 'Key',
  props: {
    keyNum: {
      type: Number,
      default: 0
    },
    keyColor: {
      type: String,
      default: 'white'
    }
  },
  data() {
    return {
      synth: new Tone.Synth().toMaster()
    }
  },
  computed: {
    frequency() {
      return 440 * 2 ** ((this.keyNum - 9) / 12)
    }
  },
  methods: {
    toneTest() {
      this.synth.triggerAttackRelease(this.frequency, '8n')
    }
  }
}
</script>

<style>
.key {
  width: 100px;
  height: 50px;
}
</style>
