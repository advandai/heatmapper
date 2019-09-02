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
          <BCol cols="6">
            <BButton variant="primary" class="w-100" :disabled=!Boolean(file) v-on:click="analyse()">
              Show analysis
            </BButton>
          </BCol>
          <BCol cols="6">
            <b-dropdown id="dropdown-1" class="w-100" text="Export results" :disabled=!Boolean(file)>
              <b-dropdown-item>
                <font-awesome-icon icon="envelope"/>
                via email
              </b-dropdown-item>
              <b-dropdown-item>
                <font-awesome-icon icon="link"/>
                via link
              </b-dropdown-item>
              <b-dropdown-item>
                <font-awesome-icon icon="download"/>
                download excel
              </b-dropdown-item>
            </b-dropdown>
          </BCol>
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
