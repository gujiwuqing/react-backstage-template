import {defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {path: '/login', component: '@/pages/login'},
    {
      path: '/', component: '@/layouts', routes: [
        {path: '/', component: '@/pages/home'},
        {path: '/markdown', component: '@/pages/markdown'},
        {path: '/chart/flowchart', component: '@/pages/chart/flowchart'},
        {path: '/chart/plot', component: '@/pages/chart/plot'},
        {path: '/chart/hot', component: '@/pages/chart/hot'},
        {path: '/table/basic', component: '@/pages/table/basic-table'},
        {path: '/table/drag', component: '@/pages/table/drag-table'},
      ]
    },
  ],
  fastRefresh: {},
});
