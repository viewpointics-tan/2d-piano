<template>
  <v-card @touchstart.prevent="toneTest()" @mousedown="toneTest()">test</v-card>
</template>

<script>
export default {
  name: 'Key',
  props: {
    synth: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    toneTest() {
      this.synth.triggerAttackRelease('C4', '8n')
    }
  }
}
</script>

<style></style>
