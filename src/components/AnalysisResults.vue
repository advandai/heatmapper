<template>
  <BCol v-if="fileSelected" cols="10" offset="1">
    <BTabs>
      <BTab :title="table.name" v-for="table in dataTables.tables" v-bind:key="table.name" class="py-3">
        <BTable :items="table.items" :fields="fields" small class="text-right">
          <template slot="% Change" slot-scope="data">
            <div v-bind:style="cellColor(data)" class="px-1 w-100">
              <font-awesome-icon v-if="data.value < 0" icon="long-arrow-alt-down" class="float-left mt-1"/>
              {{ Math.round(data.value * 10) / 10 }}
            </div>
          </template>
          <template slot="TL-Diff" slot-scope="data">
            <div v-bind:style="cellColor(data)" class="px-1">
              {{ data.value }}
            </div>
          </template>
          <template slot="Name" slot-scope="data">
            <div class="text-left">
              {{ data.value }}
            </div>
          </template>
        </BTable>
      </BTab>
    </BTabs>
  </BCol>
</template>

<script>
import {fileStore} from '@/stores.ts'
import axios from 'axios'

export default {
  name: 'AnalysisResults',
  data: () => ({
    file: null,
    dataTables: [],
    fields: [
      {key: 'Name', sortable: true},
      {key: '% Change', sortable: true},
      {key: 'TL-Diff', sortable: true},
      {key: 'Notes', sortable: true},
      {key: 'EUR-2018', sortable: true},
      {key: 'USD-2018', sortable: true},
      {key: 'TL-2017', sortable: true},
      {key: 'TL-2018', sortable: true}
    ]
  }),
  async mounted () {
    const response = await axios.get('/static/data.json')
    this.dataTables = response.data
  },
  methods: {
    cellColor (data) {
      if (data.item == null) return
      const change = Math.abs(data.item['% Change'])
      let color = ''
      if (change <= 5) {
        color = '#8BC34A'
      } else if (change <= 15) {
        color = '#FF9800'
      } else {
        color = '#F44336'
      }
      return {
        'background-color': color
      }
    }
  },
  computed: {
    fileSelected () {
      return fileStore.selectedFile != null
    }
  }
}
</script>

<style scoped>

</style>
