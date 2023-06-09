import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index' },
    { path: '/canvas', component: '@/pages/canvas/index' },
    { path: '/canvasLayer', component: '@/pages/canvasLayer/index' },
    { path: '/canvasAnimation', component: '@/pages/canvasAnimation/index' },
    { path: '/webGL', component: '@/pages/webGL/index' },
  ],
  fastRefresh: {},
});
