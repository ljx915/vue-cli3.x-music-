/**
 * 为了和QQ音乐接口一致，配置一些公用的参数、options和err_num码，
 * 其实还能省略，但是不利于维护
 */
export const commonParams = {
	g_tk: 5381,
	inCharset: 'utf-8',
	outCharset: 'utf-8',
	notice: 0,
	format: 'jsonp'
}

export const options = {
	param: 'jsonpCallback'
}

// 配置常量，因为{code:0,data:{....}}，这个ERR_OK指的是如果能获取道ERR_OK = 0,代表jsonp实现成功
// ERR_OK为了语义化而定义的，如果直接写0，读代码时不加注释基本看不懂
export const ERR_OK = 0