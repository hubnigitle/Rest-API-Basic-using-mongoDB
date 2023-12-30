module.exports = app =>{
    const karyawan = require("../controllers/karyawan.contoller")
    const r = require("express").Router();

    r.get("/", karyawan.findAll);
    r.get("/:id", karyawan.show);
    r.post("/", karyawan.create);
    r.put("/:id", karyawan.update);
    r.delete("/:id", karyawan.delete);

    app.use("/karyawan", r);

    // GET localhost:8000/karyawan
    // GET localhost:8000/karyawan/id

}