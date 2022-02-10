export interface menuItem {
  name: string;
  icon: string;
  path: string;
  children?:menuItem[];
}

export const menu: menuItem[] = [
  {
    name: '首页',
    icon: 'iconhome',
    path: '/'
  },
  {
    name: '图表',
    icon: 'iconbarchart',
    path: '/chart',
    children: [
      {
        name: '流程图',
        icon: '',
        path: '/chart/flowchart',
      },
      {
        name: '折线图',
        icon: '',
        path: '/chart/plot',
      },
      {
        name: '日历热力图',
        icon: '',
        path: '/chart/hot',
      }
    ]
  },
  {
    name: 'markdown',
    icon: 'iconeditor',
    path: '/markdown'
  },
]
