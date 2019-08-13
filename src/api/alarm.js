import http from '@/utils/http.js'

export default {
  //实时报警
  searchAcceptDataByPage (params) {
    return new Promise((resolve, reject) => {
      http.get('/alarm/fas-new-accept-data/searchAcceptDataByPage', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
	//报警信息记录
  searchStatisticsOfUnitByArea (params) {
    return new Promise((resolve, reject) => {
      http.get('/fas-admin/fas-place/searchStatisticsOfUnitByArea', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
  showCompantByPlace (params) {
    return new Promise((resolve, reject) => {
      http.get('/fas-network-company/fas-network-company/showCompantByPlace', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
  searchBasicDataByType (params) {
    return new Promise((resolve, reject) => {
      http.get('/home/fas-basic-data/searchBasicDataByType', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
  searchAcceptDataList (params) {
    return new Promise((resolve, reject) => {
      http.get('/alarm/fas-accept-data/searchAcceptDataList', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
   searchAcceptDataById (params) {
    return new Promise((resolve, reject) => {
      http.get('/alarm/fas-accept-data/searchAcceptDataById', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
  //获取点位平面图
//   searchFireItemsByFireItemCode (params) {
//     return new Promise((resolve, reject) => {
//       http.get('/fas-network-company/fas-plan-image/searchFireItemsByFireItemCode', params)
//       .then((res) => {
//         console.log(res.status)
//         if (res.status === 200) {
//         resolve(res.data.data)
//         } else {
//         reject(res)
//         }
//       })
//     })
//   },	
searchFireItemsByItemCode (params) {
    return new Promise((resolve, reject) => {
      http.get('/fas-network-company/fas-plan-image/searchFireItemsByItemCode', params)
      .then((res) => {
        console.log(res.status)
        if (res.status === 200) {
        resolve(res.data.data)
        } else {
        reject(res)
        }
      })
    })
  },	
  
  //监管信息记录
  searchBasicDataByType (params) {
    return new Promise((resolve, reject) => {
      http.get('/home/fas-basic-data/searchBasicDataByType', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
  searchPageFasAcceptOtherDataListByCondition (params) {
    return new Promise((resolve, reject) => {
      http.get('/alarm/fas-accept-other-data/searchPageFasAcceptOtherDataListByCondition', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
	//处理
	updateAcceptOtherData (params) {
	  return new Promise((resolve, reject) => {
	    http.post('/alarm/fas-accept-other-data/updateAcceptOtherData', params)
	      .then((res) => {
	        console.log(res.status)
	        if (res.data.status === 'success') {
	          resolve(res)
	        } else {
	          reject(res)
	        }
	      })
	  })
	},
	//批量处理
	updateBatchAcceptOtherData (params) {
	  return new Promise((resolve, reject) => {
	    http.post('/alarm/fas-accept-other-data/updateBatchAcceptOtherData', params)
	      .then((res) => {
	        console.log(res.status)
	        if (res.data.status === 'success') {
	          resolve(res.data)
	        } else {
	          reject(res)
	        }
	      })
	  })
	},
	
  //成灾火警
  searchCompanyByUser (params) {
    return new Promise((resolve, reject) => {
      http.get('/fas-network-company/fas-network-company/searchCompanyByUser', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
  addFasFireHazard (params) {
    return new Promise((resolve, reject) => {
      http.post('/alarm/fas-fire-hazard/addFasFireHazard', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
   showAllFireHazards (params) {
    return new Promise((resolve, reject) => {
      http.get('/alarm/fas-fire-hazard/showAllFireHazards', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
  deleteFasFireHazardById (params) {
    return new Promise((resolve, reject) => {
      http.post('/alarm/fas-fire-hazard/deleteFasFireHazardById', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
	//修改成灾火警
	updateFasFireHazard (params) {
	  return new Promise((resolve, reject) => {
	    http.post('/alarm/fas-fire-hazard/updateFasFireHazard', params)
	      .then((res) => {
	        console.log(res.status)
	        if (res.data.status === 'success') {
	          resolve(res.data.data)
	        } else {
	          reject(res)
	        }
	      })
	  })
	},
	//修改成灾火警回显
	getFireHazardById (params) {
	  return new Promise((resolve, reject) => {
	    http.get('/alarm/fas-fire-hazard/getFireHazardById', params)
	      .then((res) => {
	        console.log(res.status)
	        if (res.data.status === 'success') {
	          resolve(res.data.data)
	        } else {
	          reject(res)
	        }
	      })
	  })
	},
  //报警统计图表
  //本月报警次数统计大的柱状图
   showAlarmStatistics (params) {
    return new Promise((resolve, reject) => {
      http.get('/alarm/fas-accept-data/showAlarmStatistics', params)
        .then((res) => {
          console.log(res.status)
          if (res.status === 200) {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
  //报警统计图表按月统计处理结果分类统计
  showAlarmDisposeStatistics (params) {
    return new Promise((resolve, reject) => {
      http.get('/alarm/fas-accept-data/showAlarmDisposeStatistics', params)
        .then((res) => {
          console.log(res.status)
          if (res.data.status === 'success') {
            resolve(res.data.data)
          } else {
            reject(res)
          }
        })
    })
  },
	//饼状图
	showAlarmTypeStatistics (params) {
	  return new Promise((resolve, reject) => {
	    http.get('/alarm/fas-accept-data/showAlarmTypeStatistics', params)
	      .then((res) => {
	        console.log(res.status)
	        if (res.data.status === 'success') {
	          resolve(res.data.data)
	        } else {
	          reject(res)
	        }
	      })
	  })
	},
//报警实时监控
searchNewAcceptDataList (params) {
	  return new Promise((resolve, reject) => {
	    http.get('/alarm/fas-new-accept-data/searchNewAcceptDataList', params)
	      .then((res) => {
	        console.log(res.status)
	        if (res.status === 200) {
	          resolve(res.data.data)
	        } else {
	          reject(res)
	        }
	      })
	  })
	},
	//火警处理
	updateNewAcceptData (params) {
		  return new Promise((resolve, reject) => {
		    http.post('/alarm/fas-new-accept-data/updateNewAcceptData', params)
		      .then((res) => {
		        console.log(res.status)
		        if (res.status === 200) {
		          resolve(res.data.data)
		        } else {
		          reject(res)
		        }
		      })
		  })
		},
		//获取实时火警详情
		searchNewAcceptDataById (params) {
			  return new Promise((resolve, reject) => {
			    http.get('/alarm/fas-new-accept-data/searchNewAcceptDataById', params)
			      .then((res) => {
			        console.log(res.status)
			        if (res.status === 200) {
			          resolve(res.data.data)
			        } else {
			          reject(res)
			        }
			      })
			  })
			},
			//报警历史处理和批处理
			updateAcceptData (params) {
				  return new Promise((resolve, reject) => {
				    http.post('/alarm/fas-accept-data/updateAcceptData', params)
				      .then((res) => {
				        console.log(res.status)
				        if (res.status === 200) {
				          resolve(res)
				        } else {
				          reject(res)
				        }
				      })
				  })
				},
				//报警处理所有未处理
				updateAllAcceptData (params) {
					  return new Promise((resolve, reject) => {
					    http.post('/alarm/fas-accept-data/updateAllAcceptData', params)
					      .then((res) => {
					        console.log(res.status)
					        if (res.status === 200) {
					          resolve(res)
					        } else {
					          reject(res)
					        }
					      })
					  })
					},
} 