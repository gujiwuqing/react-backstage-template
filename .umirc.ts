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
      ]
    },
  ],
  fastRefresh: {},
});
