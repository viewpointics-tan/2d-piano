<template>
  <v-card
    @touchstart.prevent="toneStart()"
    @mousedown="toneStart()"
    @touchend="toneEnd()"
    @click="toneEnd()"
    :color="keyColor"
    class="key"
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
      filter: new Tone.Filter({
        type: 'lowpass',
        frequency: 350,
        rolloff: -12,
        Q: 1,
        gain: 0
      }).toMaster(),
      synth: {}
    }
  },
  computed: {
    frequency() {
      return 440 * 2 ** ((this.keyNum - 9) / 12)
    },
    frequency2() {
      return 440 * 2 ** ((this.keyNum - 9 + 0.05) / 12)
    },
    frequency3() {
      return 440 * 2 ** ((this.keyNum - 9 - 0.05) / 12)
    }
  },
  mounted() {
    this.synth = new Tone.Synth().toMaster()
  },
  methods: {
    toneStart() {
      this.synth.triggerAttack(this.frequency)
    },
    toneEnd() {
      this.synth.triggerRelease()
    }
  }
}
</script>

<style>
.key {
  width: 100pt;
  height: 50pt;
}
</style>
