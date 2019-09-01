import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import data from '@/pages/data'
import postDetail from '@/pages/postDetail'
import card from '@/components/card'
import keyWord from '@/components/keyWord'
import discuss from '@/pages/discuss'
import content from '@/components/content'
import tabbar from '@/components/tabbar'
import nav from '@/components/nav'
import keyWordDetail from '@/pages/keyWordDetail'
import singleForum from '@/pages/singleForum'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
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
    }, {
      path: '/tabbar',
      name: '底部导航栏',
      component: tabbar
    }, {
      path: '/nav',
      name: '侧边栏',
      component: nav
    }, {
      path: '/keyWordDetail',
      name: '关键词详情',
      component: keyWordDetail
    }, {
      path: '/singleForum',
      name: '某论坛',
      component: singleForum
    }
  ]
})
