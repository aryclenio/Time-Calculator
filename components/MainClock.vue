<template>
  <c-heading>{{time}}</c-heading>
</template>

<script>
import { CHeading } from '@chakra-ui/vue';

export default {
  name: 'MainClock',
  components: {CHeading},
  props: {
    time: String
  }
}
</script>
