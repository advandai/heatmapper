import Vue from 'vue'
import Router from 'vue-router'
import AnalysisView from '@/components/AnalysisView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AnalysisView',
      component: AnalysisView
    }
  ]
})
