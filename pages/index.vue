<template>
  <div class="container">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <MainClock :time="getTime()" />
      <CFlex justify="center" direction="column" align="center">
        <CBox mb="3">
          <CIconButton
            mr="3"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
            @click="toggleColorMode"
          />
        </CBox>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CIconButton,
  CFlex
} from '@chakra-ui/vue'
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    CBox,
    CIconButton,
    CFlex,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  async created(){
    const config = {
      headers: {
        'Accept': 'application/json'
      }
    }
    try {
        const res = await axios.get("http://worldtimeapi.org/api/timezone/America/Fortaleza", config)
        console.log(res.data)
        this.setTime(this.$store.state.time, res.data.datetime)
    }catch(err){
      console.error(err)
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    },
    ...mapMutations({
      getTime: 'time/getTime',
      setTime: 'time/setTime'
    }) 
  }
}
</script>
