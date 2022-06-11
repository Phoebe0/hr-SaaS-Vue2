import Layout from '@/layout'
  export default {
    path: '/attendances',
    component: Layout,
    children: [{
      path: '/attendances',
      name: 'attendances',
      component: () => import('@/views/attendances'),
      meta: { title: '考勤', icon: 'skill' }
    }]
  }
