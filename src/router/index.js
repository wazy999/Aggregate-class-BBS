import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import data from '@/pages/data'
import postDetail from '@/pages/postDetail'
import card from '@/components/card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    }, {
      path: '/data',
      name: '数据统计页',
      component: data
    }, {
      path: '/postDetail',
      name: '帖子详情页',
      component: postDetail
    }, {
      path: '/card',
      name: '卡片',
      component: card
    }
  ]
})
