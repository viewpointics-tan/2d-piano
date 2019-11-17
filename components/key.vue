<template>
  <v-card
    class="key"
    @touchstart.prevent="toneTest()"
    @mousedown="toneTest()"
    >{{ keyNum }}</v-card
  >
</template>

<script>
import synth from '../plugins/synth'
export default {
  name: 'Key',
  props: {
    keyNum: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  computed: {
    frequency() {
      return 440 * 2 ** ((this.keyNum - 9) / 12)
    }
  },
  methods: {
    toneTest() {
      synth.triggerAttackRelease(this.frequency, '8n')
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
