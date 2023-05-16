const express = require('express')
const cors = require("cors")
const ImageKit = require("imagekit");
const multer = require('multer');
const app = express()
const upload = multer({ dest: "files/" });

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const imagekit = new ImageKit({
    publicKey : "",
    privateKey : "",
    urlEndpoint : ""
});

app.post("/pegar", (req, res) => {
    imagekit.listFiles()
    .then((res2) => {
        res.status(200).send(res2)
    })
})

app.post('/imagem', upload.any(), (req, res) => {

    console.log(req.body)
    console.log(req.files)

    // imagekit.upload({
    //     file: "teste.png",
    //     fileName: "nome_do_arquivo.jpg"
    // }, function(error, result) {
    //     if (error) {
    //         console.log("Erro ao fazer upload do arquivo:", error);
    //     } else {
    //         console.log("Arquivo enviado com sucesso:", result);
    //     }
    // });
    res.status(200).send("")
})

app.listen(3000)




// Listar todos os arquivos




// Criar pasta

// const folderOptions = {
//     folderName: "pastaNovaFi3",
//     useUniqueFileName: false,
//     parentFolderPath: "/",
//     tags: ["imagens1", "fotos2"],
//     customCoordinates: null,
//     isPrivateFile: true,
//     isResponsive: false
// };
// imagekit.createFolder(folderOptions, (err, res) => {
//     if (err) {
//         console.log("Erro ao criar pasta:", err);
//     } else {
//         console.log("Pasta criada com sucesso:", res);
//     }
// });