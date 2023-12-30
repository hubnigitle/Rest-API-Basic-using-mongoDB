const db = require("../models")
const karyawan = db.karyawan

exports.create = (req, res)=>{
    
    req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)

    karyawan.create(req.body)
        .then(()=> res.send({message: "Data berhasil disimpan"}))
        .catch(err=> res.status(500).send({message: err.message}));
}

exports.findAll = (req, res)=>{
    karyawan.find()
        .then((data)=> res.send(data))
        .catch(err=> res.status(500).send({message: err.message}))
}

exports.show = (req, res)=>{
    const id = req.params.id;

    karyawan.findById(id)
    .then(data=> res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.update = (req, res)=>{
    const id = req.params.id;

    req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)

    karyawan.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data=>{
            if(!data){
                res.status(404).send({message: "Tidak dapat update data"})
            }
            res.send({message: "Data berhasil diupdate"})
        })
        .catch(err => res.status(500).send({message: err.message}))
    
}

exports.delete = (req, res)=>{
    const id = req.params.id;

    karyawan.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: "Tidak dapat menghapus data"})
            }

            res.send({messsage: "Data berhasil dihapus"})
        })
        .catch(err => res.status(500).send({message: err.message}))
    
}