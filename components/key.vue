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
      synth: new Tone.Synth({ oscillator: { type: 'sawtooth' } }),
      polysynth: new Tone.PolySynth(3, this.synth).toMaster()
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
  methods: {
    toneStart() {
      this.polysynth.triggerAttack([
        this.frequency,
        this.frequency2,
        this.frequency3
      ])
    },
    toneEnd() {
      this.polysynth.triggerRelease([
        this.frequency,
        this.frequency2,
        this.frequency3
      ])
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
