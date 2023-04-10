exports.getImageUpload = function (req, res) {
    res.send({
        "success": 1,
        "file": {
            "url": `http://localhost:3001/public/images/${res.req.file.filename}`,
        }
    });
}