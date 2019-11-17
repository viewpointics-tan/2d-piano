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
  methods: {
    toneTest() {
      synth.triggerAttackRelease('C4', '8n')
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
