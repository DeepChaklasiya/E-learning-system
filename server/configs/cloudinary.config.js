const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: 'e-learningnu',
  api_key: '521348855534613',
  api_secret: 's28teA4jTvoeo55t0WGzFd-4Afs',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'project3-ironhack',
    allowed_formats: async (req, file) => 'jpg,png,pdf',
  },
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;
