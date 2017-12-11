/**
 * set page title in wechat browser
 * @param {String} title eg: 'Hello World'
 */
export default function setPageTitle(title = '') {
	const isIOS = /iphone|ipad/.test(window.navigator.userAgent.toLowerCase());
	const isWKWebview = !!window.__wxjs_is_wkwebview;

	document.title = title;

	if (isIOS && !isWKWebview) {
		let iframe = document.createElement('iframe');
		iframe.src = '/favicon.ico';
		iframe.height = 0;
		iframe.width = 0;
		iframe.onload = () => {
			iframe.onload = null;
			setTimeout(() => document.body.removeChild(iframe), 0);
		};
		document.body.appendChild(iframe);
	}
};
