<template>
  <BCol cols="10" offset="1" md="8" offset-md="2" lg="6" offset-lg="3">
    <BCard class="shadow">
      <BCardHeader>
        Analyse data from file
      </BCardHeader>
      <BCardBody>
        <BRow>
          <BFormFile
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            class=""
          ></BFormFile>
        </BRow>
        <BRow class="mt-4">
          <BButton variant="primary" class="w-100" :disabled=!Boolean(file) v-on:click="analyse()">
            Analyse!
          </BButton>
        </BRow>
      </BCardBody>
    </BCard>
  </BCol>
</template>

<script>
import {fileStore} from '@/stores.ts'

export default {
  name: 'AnalysisHeader',
  data: function () {
    return {
      file: null
    }
  },
  methods: {
    analyse () {
      fileStore.addFile(this.file)
    }
  }
}
</script>

<style scoped>

</style>
