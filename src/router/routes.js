import Tabbar from 'components/Tabbar'
const Home = () => import('pages/Home')
const List = () => import('pages/List')
const Cart = () => import('pages/Cart')
const Mine = () => import('pages/Mine')
const Detail = () => import('pages/Detail')
const Mall = () => import('pages/Mall')
const Login = () => import('pages/Login')
const Serch = () => import('pages/Serch')
const Hot = () => import('pages/home/Hot')
const Fuli = () => import('pages/home/Fuli')
const Serprice = () => import('pages/home/Serprice')
const Shouban = () => import('pages/home/Shouban')
const Address = () => import('pages/mine/Address')
const Message = () => import('pages/mine/Message')
const Online = () => import('pages/mine/Online')
const Phone = () => import('pages/mine/Phone')
const Question = () => import('pages/mine/Question')
const Shoucang = () => import('pages/mine/Shoucang')
const Suggest = () => import('pages/mine/Suggest')
const Tousu = () => import('pages/mine/Tousu')
const Youhui = () => import('pages/mine/Youhui')
const allMall = () => import('pages/mine/allMall')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    components: {
      default: Home,
      tabbar: Tabbar
    },
    isNav: true,
    text: '首页',
    name: 'home',
    icon: '&#xe600;'
  },
  {
    path: '/list',
    components: {
      default: List,
      tabbar: Tabbar
    },
    isNav: true,
    text: '分类',
    name: 'list',
    icon: '&#xe6d2;'
  },
  {
    path: '/mall/:id',
    name: 'listMall',
    components: {
      default: Mall,
      tabbar: Tabbar
    },
    props: true
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    props: true
  },
  {
    path: '/cart',
    components: {
      default: Cart,
      tabbar: Tabbar
    },
    isNav: true,
    text: '购物车',
    name: 'cart',
    icon: '&#xe61c;',
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/serch',
    components: {
      default: Serch
    },
    text: '搜索',
    name: 'serch',
    props: true
  },
  {
    path: '/mine',
    components: {
      default: Mine,
      tabbar: Tabbar
    },
    isNav: true,
    text: '我的',
    name: 'mine',
    icon: '&#xe61a;'
  },
  {
    path: '/allMall/:id',
    components: {
      default: allMall,
      tabbar: Tabbar
    },
    text: '热门商城',
    name: 'allMall'
  },
  {
    path: '/login',
    component: Login,
    text: '登录',
    name: 'login'
  },
  {
    path: '/hot',
    components: {
      default: Hot,
      tabbar: Tabbar
    },
    name: 'hot',
    text: '热销榜单',
    issmallNav: true,
    icon: '&#xe62b;'
  },
  {
    path: '/fuli',
    components: {
      default: Fuli,
      tabbar: Tabbar
    },
    name: 'fuli',
    text: '1折福利',
    issmallNav: true,
    icon: '&#xe633;'
  },
  {
    path: '/serprice',
    components: {
      default: Serprice,
      tabbar: Tabbar
    },
    name: 'serprice',
    text: '惊喜扭蛋',
    issmallNav: true,
    icon: '&#xe60b;'
  },
  {
    path: '/shouban',
    components: {
      default: Shouban,
      tabbar: Tabbar
    },
    name: 'shouban',
    text: '正版手办',
    issmallNav: true,
    icon: '&#xe608;'
  },
  {
    path: '/shoucang',
    components: {
      default: Shoucang,
      tabbar: Tabbar
    },
    name: 'shoucang',
    text: '我的收藏',
    icon: '&#xe659;',
    islist: true
  },
  {
    path: '/address',
    components: {
      default: Address,
      tabbar: Tabbar
    },
    name: 'address',
    text: '地址管理',
    icon: '&#xe8b8;',
    islist: true
  },
  {
    path: '/youhui',
    components: {
      default: Youhui,
      tabbar: Tabbar
    },
    name: 'youhui',
    text: '优惠券',
    icon: '&#xe615;',
    islist: true
  },
  {
    path: '/online',
    components: {
      default: Online,
      tabbar: Tabbar
    },
    name: 'online',
    text: '在线客服',
    icon: '&#xe600;',
    islist: true
  },
  {
    path: '/phone',
    components: {
      default: Phone,
      tabbar: Tabbar
    },
    name: 'phone',
    text: '电话客服',
    icon: '&#xe651;',
    islist: true
  },
  {
    path: '/message',
    components: {
      default: Message,
      tabbar: Tabbar
    },
    name: 'message',
    text: '消息中心',
    icon: '&#xe610;',
    islist: true
  },
  {
    path: '/question',
    components: {
      default: Question,
      tabbar: Tabbar
    },
    name: 'question',
    text: '常见问题',
    icon: '&#xe61e;',
    islist: true
  },
  {
    path: '/tousu',
    components: {
      default: Tousu,
      tabbar: Tabbar
    },
    name: 'tousu',
    text: '侵权投诉',
    icon: '&#xe612;',
    islist: true
  },
  {
    path: '/suggest',
    components: {
      default: Suggest,
      tabbar: Tabbar
    },
    name: 'suggest',
    text: '反馈意见',
    icon: '&#xe60f;',
    islist: true
  }
]

export default routes
