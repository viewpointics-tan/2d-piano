<template>
  <v-card
    @touchstart.prevent="toneStart()"
    @mousedown="toneStart()"
    @touchend="toneEnd()"
    @click="toneEnd()"
    :color="assist ? colorMap[keyColor] : keyColor"
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
    },
    rowNum: {
      type: Number,
      default: 0
    },
    root: {
      type: Number,
      default: 0
    },
    scale: {
      type: String,
      default: 'a'
    }
  },
  data() {
    return {
      colorMap: {
        'grey lighten-3': 'red lighten-3',
        'blue accent-2': 'red accent-2'
      },
      scaleMap: {
        a: [2, 9, 12, 16, 19],
        b: [5, 12, 16, 19, 23],
        c: [6, 12, 16, 19, 23]
      },
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
    },
    assist() {
      const isMember = this.scaleMap[this.scale].map(
        (el) =>
          math.mod(el, 24) ===
          math.mod(7 * this.root + this.keyNum + 12 * (this.rowNum + 1), 24)
      )
      return isMember.reduce((acc, curr) => acc || curr, false)
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
