import _ from 'lodash'

// const MENU = {
//   SIGNIN: {
//     path: '/signin',
//     name: 'signin',
//     component: () => import('@/views/Signin.vue')
//   },
//   SIGNOUT: {
//     path: '/signout',
//     name: 'signout',
//     beforeEnter: async (to, from, next) => {
//       next({ name: 'signin'})
//     }
//   },
//   DASHBOARD: {
//     path: '/dashboard',
//     name: 'dashboard',
//     component: () => import('@/views/Dashboard.vue')
//   },
//   GIT: {
//     path: '/git',
//     name: 'git',
//     menu_key: 'menu.git',
//     component: () => import('@/views/Git.vue')
//   },
//   PROJECT: {
//     path: '/project',
//     name: 'project',
//     menu_key: 'menu.project',
//     component: () => import('@/views/Project.vue')
//   },
//   // BUILD: {
//   //   path: '/buil',
//   //   name: 'builde',
//   //   menu_key: 'menu.build',
//   //   component: () => import('@/views/Build.vue')
//   // },
// }

// const GNB_MENU_LIST = [
//   MENU.GIT,
//   {
//     menu_key: 'menu.git',
//     children: [
//       MENU.GIT_REPOSITORY_INSERT,
//       MENU.GIT_REPOSITORY_UPDATE,
//       MENU.GIT_REPOSITORY_DELETE
//     ]
//   },
//   MENU.PROJECT,
//   MENU.BUILD
// ]

// export { MENU, GNB_MENU_LIST }