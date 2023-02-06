// Mengupload file di express

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  // Tentukan destinasinya disimpan dimana file tersebut
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    // Membuat timestamp
    const timestamp = new Date().getTime();
    // Namafile didapat darimana
    const originalname = file.originalname;
    // const extension = path.extname(file.originalname);
    cb(null, `${timestamp}-${originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 3 * 1000 * 1000, // 3MB
  },
});

module.exports = upload;
