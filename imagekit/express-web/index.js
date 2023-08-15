const express = require("express")
const multer = require("multer");
const cors = require("cors");
const upload = multer({ dest: "uploads/" });

const app = express()
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", upload.array("files"), uploadFiles);
function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
}

app.listen(5000, () => {
    console.log(`Server started...`);
});