
// import {
// 	hasCordova,
// 	appendTicket
// } from "/utils/index.js"


/**
 * 检查Codova是否已加载
 */
export const hasCordova = () => {
  return isBrowser() && typeof window.cordova !== 'undefined'
}

/**
 * 检查是否为浏览器环境
 */
export const isBrowser = () => {
  return process.browser
}
/**
 * 追加ticket到一个链接上
 * @param url 链接地址
 */
export const appendTicket = async (url) => {
  const link = new URL(url)
  try {
    const params = new URLSearchParams(link.search.slice(1))
    const { user_ticket = '' } = await cordova.getUserTicket()
    if (user_ticket) {
      params.append('ticket', user_ticket)
    }
    link.search = params.toString()
  } catch (error) { }
  return link.toString()
}
/**
 * 跳转链接
 * 目前以 workplus://xxxxx，需要请让移动端同事新增
 * http(s):// 为普通跳转链接
 * @param link 链接
 * @param needTicket 是否需要携带Ticket
 * @param display_mode 全屏WebView显示
 */
export const openLink = async (
  link,
  needTicket = true,
  display_mode = 'FULL_SCREEN'
) => {
  try {
    const url = new URL(link)
    const isCommonLink = /^http(s)?:\/\//.test(link)
    const params = new URLSearchParams(url.search.slice(1))
    params.append('t', new Date().getTime().toString())
    url.search = params.toString()
    if (isCommonLink) {
      await cordova.openWebView({
        url: url.toString(),
        needTicket,
        display_mode
      })
    } else {
      window.location.href = url.toString()
    }
  } catch (error) {
    alert(error)
  }
}
/**
 * 错误事件的统一处理
 */
export const handleErr = (err) => {
	console.log(err)
}

export class Cordova {
	/**
	 * 检测设备注入
	 * @returns
	 * @memberof Cordova
	 */
	deviceReady() {
		return new Promise((resolve) => {
			console.log('device ready start')
			document.addEventListener(
				'deviceready',
				() => {
					resolve();
					console.log("device ready")
				},
				false
			)
		})
	}
	generator(hook, action, params) {
		if (!hasCordova()) {
			return new Promise(resolve => resolve())
		}
		return new Promise((resolve, reject) =>
			window.cordova.exec(
				(res) => {
					resolve(res)
				},
				(err) => {
					handleErr(err)
					reject(err)
				},
				hook,
				action,
				params
			)
		)
	}
	getLoginUserInfo() {
		return this.generator('WorkPlus_Auth', 'getLoginUserInfo', [])
	}
	getUserTicket() {
		return this.generator('WorkPlus_Auth', 'getUserTicket', [])
	}
	searchInApp() {
		return this.generator('WorkPlus_Contact', 'searchInApp', [])
	}
	getContact() {
		return this.generator('WorkPlus_Contact', 'getContact', [])
	}
	exit() {
		return this.generator('WorkPlus_WebView', 'exit', [])
	}
	wxShare(params) {
		return this.generator('WorkPlus_WebView', 'wxShare', [params])
	}
	async openWebView(data) {
		const {
			needTicket,
			...params
		} = data
		if (needTicket) {
			params.url = await appendTicket(params.url)
		}
		return this.generator('WorkPlus_WebView', 'openWebView', [params])
	}
}

const cordova = new Cordova()

export default  cordova
