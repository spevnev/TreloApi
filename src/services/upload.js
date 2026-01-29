const cloudinary = require("cloudinary");

cloudinary.config({
	cloud_name: "trelo",
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
	secure: true,
});

module.exports = (data, public_id) => new Promise((resolve, reject) => {
	cloudinary.v2.uploader.upload(data, {public_id, resource_type: "auto", quality: 50}, (err, res) => {
		if (err) reject(err);
		resolve(res);
	});
});