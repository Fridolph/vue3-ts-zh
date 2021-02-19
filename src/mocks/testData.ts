export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export const columnList: ColumnProps[] = [
  {
    id: 0,
    title: '标题1标题1标题1标题1',
    avatar: '/img/logo.png',
    description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
  },
  {
    id: 1,
    title: '我是题目1啊，第一条的',
    avatar: '/img/logo.png',
    description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
  },
  {
    id: 2,
    title: '标题2标题2标题2标题2',
    avatar: '/img/logo.png',
    description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
  },
  {
    id: 3,
    title: '标题3标题3标题3标题3',
    avatar: '/img/logo.png',
    description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
  },
  {
    id: 4,
    title: '标题4标题4标题4标题4',
    // avatar: '/img/logo.png',
    description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
  },
  {
    id: 5,
    title: '标题5标题5标题5标题5',
    avatar: '/img/logo.png',
    description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
  },
  {
    id: 6,
    title: '标题6标题6标题6标题6',
    avatar: '/img/logo.png',
    description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
  },
]

export interface PostProps {
  id: number;
  title: string;
  content?: string;
  image?: string;
  createdAt: string;
  columnId: number;
}
export const postList: PostProps[] = [
  {
    id: 1,
    title: '专栏其一',
    content: '我就是专栏榜首，就是这么霸道',
    createdAt: '2020-02-05 12:00:00',
    columnId: 1
  },
  {
    id: 2,
    title: '美国得州遭遇冬季风暴，超 400 万人遭遇停电，8 千剂新冠疫苗受影响，还有哪些信息值得关注?',
    content: '14 日夜间，美国南部得克萨斯州部分地区开始遭遇冬季风暴，造成路面结冰、道路被封以及大面积停电。美联社 15 日称，由于低温导致用电需求暴增，该州超 400 万人遭遇停电。得州电力可靠性委员会一名官员表示，此次天气是「史无前例的」。停电还影响了休斯敦一个存储了 8000 剂新冠疫苗的设施，当地卫生官员正在紧急寻找疫苗接种者，以免造成疫苗浪费。美国得州风暴造成大面积停电 8 千剂新冠疫苗受影响',
    image: 'https://pic4.zhimg.com/80/v2-a5417f7c45245a0518fe3c7c01c09c46_400x224.jpg?source=1940ef5c',
    createdAt: '2020-02-05 12:00:00',
    columnId: 1
  },
  {
    id: 3,
    title: '如何看待越来越多的年轻人「酒店待两天，就当旅游了」的心态？',
    content: '是学习工作太累了还是心态的转变呢',
    image: 'https://pic2.zhimg.com/80/v2-54d0a151d47a99f81df4d5e8803b85dc_400x224.jpg?source=1940ef5c',
    createdAt: '2020-02-05 13:00:00',
    columnId: 1
  },
  {
    id: 4,
    title: '你经历过哪些细思恐极的事？',
    image: 'https://pic4.zhimg.com/80/v2-bbf5ce213d3afd0519256e3fbb53f697_400x224.png',
    createdAt: '2020-02-05 14:00:00',
    columnId: 1
  },
]
