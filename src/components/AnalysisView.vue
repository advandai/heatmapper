<template>
  <div>
    <BRow>
      <AnalysisHeader></AnalysisHeader>
    </BRow>
    <BRow class="mt-5">
      <AnalysisResults></AnalysisResults>
    </BRow>
  </div>
</template>

<script>
import AnalysisHeader from '@/components/AnalysisHeader'
import AnalysisResults from '@/components/AnalysisResults'

export default {
  name: 'HelloWorld',
  components: {AnalysisResults, AnalysisHeader},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
