<template>
  <div class="time-container">
    <c-heading as="h1" font-size="20vw">{{ $dateFns.format(parsedTime, 'HH:mm:ss') }}</c-heading>
    <c-heading as="h6" size="xs">{{ $dateFns.format(parsedTime, 'dd/MM/yyyy') }}</c-heading>
  </div>
</template>

<script>
import { CHeading } from '@chakra-ui/vue';
import { addSeconds} from 'date-fns';

export default {
  name: 'MainClock',
  components: {CHeading},
  props: {
    time: {type: String, default: new Date()}
  },
  asyncData({ $dateFns }) {
    return {
      dateFormatted: $dateFns.format(new Date())
    }
  },
  data() {
    return {
      parsedTime: this.time || new Date()
    }
  },
  mounted () {
    this.interval = setInterval(this.updateTimer, 1000)
    console.log(this.time)
  },
  methods: {
    updateTimer () {
      this.parsedTime = addSeconds(this.parsedTime, 1)
    }
  }
}
</script>

<style>
  .time-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
