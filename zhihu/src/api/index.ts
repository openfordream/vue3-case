import instance from './axios'

// 获取首页banner新闻数据
export const getBannerList = () =>{
	return instance({
		url:'/bannerList'
	})
}

//  获取首页newsList数据
export const getNewsList = () =>{
	return instance({
		url:'/newsList'
	})
}

//获取newsDetail数据
export const getNewsDetail = (id:any) => {
	return instance.post('/detailList',{
		id
	})
}

export default {
	getBannerList,
	getNewsList,
	getNewsDetail
}