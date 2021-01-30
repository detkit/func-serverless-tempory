// domain/.netlify/functions/1-hello
// exports
// const person = { name: 'quang' }

exports.handler = async (event, context, cb) => {
	return {
		statusCode: 200,
		body: '0ur First Netlify Functions Example'
	}
}
