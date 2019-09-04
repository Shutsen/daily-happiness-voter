import Cookies from 'universal-cookie'

const cookies = new Cookies()

let Cookie = {}

Cookie.setCookie = (key, value) => {
	cookies.set(key, value)
}

Cookie.getCookie = (key) => {
	return cookies.get(key)
}

Cookie.removeCookie = (key) => {
	return cookies.remove(key)
}

export default Cookie