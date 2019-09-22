import jsonp from "../assets/js/jsonp.js"
import {commonParams,options} from './config.js'
import axios from 'axios'
/**
 * data: 固定参数，不知道含义，但一定要与接口保持一致
 */

export function getRecommend() {
	// url网址是qq音乐官网chrome移动端调试后点network看XHR，获取的第一个fcg_yqqhomepagerecommend.fcg   ,双击跳转到另一页面查看数据
	const url =  'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

	// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Example_Merging_objects
	// Object.assign合并对象
	//  Object.assign方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
	// 这里将参数commonParams和后面的固定参数合并，也算是一个对象，具体看上面XHR中的fcg中的Headers中的Query String Parameters，Object.assign也算合并对象
	// commonParams具体看config.js
	const data = Object.assign({},commonParams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	})

	// options几乎可以省略，options具体看config.js
	return jsonp(url,data,options)
}


export function getDiscList() {
        // const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        const url = '/api/getDiscList' //调用自定义的接口

        const data = Object.assign({}, commonParams, {
                platform: 'yqq',
                hostUin: 0,
                sin: 0,
                ein: 29,
                sortId: 5,
                needNewCode: 0,
                categoryId: 10000000,
                rnd: Math.random(),
                format: 'json' //使用的时axios,所以format使用的是json,不是jsonp
       })

       // return jsonp(url, data, options)
       return axios.get(url, {
               params: data
       }).then((res) => {
              return Promise.resolve(res.data) //es6新语法，返回一个以给定值解析后的Promise对象
       })
}
