import Vue from 'vue'
import Router from 'vue-router'
import Main1 from './components/main1.vue'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'login',
			meta: {
				title: 'login',
			},
			component: () => import('./views/Login.vue'),
		},
		{
			path: '/deviceManage',
			name: 'deviceManage',
			meta: {
				title: 'group1',
			},
			component: Main1,
			redirect: '/deviceManage/collector',
			children: [{
					path: 'collector',
					name: 'collector',
					meta: {
						title: '采集器管理',
					},
					component: () => import('./views/collector.vue'),
				},
				{
					path: 'metering',
					name: 'metering',
					meta: {
						title: '仪表管理',
					},
					component: () => import('./views/metering.vue')
				},
				{
					path: 'terminal',
					name: 'terminal',
					meta: {
						title: '风机盘管管理',
					},
					component: () => import('./views/terminal.vue')
				},
			]
		},
		{
			path: '/energyMonitor',
			name: 'energyMonitor',
			meta: {
				title: 'group1',
			},
			component: Main1,
			redirect: '/energyMonitor/coldMonitor',
			children: [{
					path: 'coldMonitor',
					name: 'coldMonitor',
					meta: {
						title: '用冷量监测',
					},
					component: () => import('./views/coldMonitor.vue'),
				},
				{
					path: 'hotMonitor',
					name: 'hotMonitor',
					meta: {
						title: '用冷量监测',
					},
					component: () => import('./views/hotMonitor.vue')
				}
			]

		},
		{
				path: '/restart',
				name: 'restart',
				meta: {
					title: 'group2',
				},
				component: Main1,
				redirect: '/restart/shutdownManage',
				children: [{
						path: 'shutdownManage',
						name: 'shutdownManage',
						meta: {
							title: '停复机状态监管',
						},
						component: () => import('./views/shutdownManage.vue'),
					},
					{
						path: 'orderShutdown',
						name: 'orderShutdown',
						meta: {
							title: '预约停复机',
						},
						component: () => import('./views/orderShutdown.vue')
					},
				]
			},
		{
				path: '/announcementPush',
				name: 'announcementPush',
				meta: {
					title: 'group2',
				},
				component: Main1,
				redirect: '/announcementPush/announcementPush',
				children: [{
						path: 'announcementPush',
						name: 'announcementPush',
						meta: {
							title: '公告信息推送',
						},
						component: () => import('./views/announcementPush.vue'),
					},
				]
		
			}
		
	]
})
