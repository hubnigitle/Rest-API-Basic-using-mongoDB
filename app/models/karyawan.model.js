module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            nama_lengkap: String,
            nip: Number,
            tempat_lahir: String,
            tanggal_lahir: Date,
            Jabatan: String,
        },
        {
            timestamps: true
        }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("karyawan", schema);
};
