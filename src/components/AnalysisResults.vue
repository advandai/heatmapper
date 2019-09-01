<template>
  <BCol v-if="fileSelected" cols="10" offset="1">
    <BTabs>
      <BTab :title="table.name" v-for="table in dataTables.tables" v-bind:key="table.name" class="py-3">
        <BTable :items="table.items" :fields="fields" small class="text-left">
          <template slot="% Change" slot-scope="data">
            <div v-bind:style="cellColor(data)">
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
      {key: 'Notes', sortable: true},
      {key: 'EUR-2018', sortable: true},
      {key: 'USD-2018', sortable: true},
      {key: 'TL-2017', sortable: true},
      {key: 'TL-2018', sortable: true},
      {key: 'TL-Diff', sortable: true},
      {key: '% Change', sortable: true}
    ]
  }),
  async mounted () {
    const response = await axios.get('/static/data.json')
    this.dataTables = response.data
  },
  methods: {
    cellColor (data) {
      if (data.item == null) return
      const change = data.item['% Change'] / 100
      let rgb = ''
      if (change > 0) {
        let greenRgb = change * 255 / 2 + 120
        if (greenRgb > 255) greenRgb = 255
        rgb = 'rgb(0, ' + greenRgb + ', 0)'
      } else if (change < 0) {
        let redRgb = -change * 255 / 3 + 160
        if (redRgb > 255) redRgb = 255
        rgb = 'rgb(' + redRgb + ', 0, 0)'
      }
      return {
        'background-color': rgb
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
