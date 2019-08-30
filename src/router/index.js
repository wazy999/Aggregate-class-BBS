import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import data from '@/pages/data'
import postDetail from '@/pages/postDetail'
import card from '@/components/card'
import keyWord from '@/components/keyWord'
import discuss from '@/pages/discuss'
import content from '@/components/content'

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
    }, {
      path: '/keyWord',
      name: '组件',
      component: keyWord
    }, {
      path: '/discuss',
      name: '评论展示',
      component: discuss
    }, {
      path: '/content',
      name: '帖子内容',
      component: content
    }
  ]
})
