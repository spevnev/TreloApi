const {createClient} = require("redis");

let client;
if (process.env.NODE_ENV === "test") {
	client = { get: () => {}, set: () => {}, del: () => {} };
} else {
	client = createClient({url: process.env.REDIS_URL});
	client.connect();
	client.on("error", e => {
		throw new Error(e);
	});
}

module.exports = client;