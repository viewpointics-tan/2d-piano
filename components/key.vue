<template>
  <v-card
    @touchstart.prevent="toneStart()"
    @mousedown="toneStart()"
    @touchend="toneEnd()"
    @click="toneEnd()"
    :color="keyColor"
    class="key"
    ><v-card-title>{{ keyName }}</v-card-title
    ><v-card-subtitle>{{ keyNum }}</v-card-subtitle></v-card
  >
</template>

<script>
import Tone from 'tone'
import * as math from '../plugins/math'
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
      keyNames: [
        'C',
        'C#',
        'D',
        'D#',
        'E',
        'F',
        'F#',
        'G',
        'G#',
        'A',
        'A#',
        'B'
      ],
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
    keyName() {
      return this.keyNames[math.mod(this.keyNum, 12)]
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
