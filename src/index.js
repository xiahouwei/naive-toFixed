export default function (number, len = 0, pushZero = true) {
	let num = number - 0 + 0.0000000001
	num = isNaN(num) ? 0 : num
	const _len = len - 0
	const mathPow = Math.pow(10, _len)
	let _num = Math.round(num * mathPow) / mathPow + ''
	if (pushZero && _len > 0) {
		let dot = _num.indexOf('.')
		if (!~dot) {
			_num += '.'
			dot = _num.length - 1
		}
		const dotLen = _num.length - (dot + 1)
		const zeroLen = _len - dotLen
		if (dotLen < _len) {
			for (let i = 0; i < zeroLen; i++) {
				_num += '0'
			}
		}
	}
	return _num
}
