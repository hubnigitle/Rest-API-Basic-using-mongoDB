# Rest-API-Basic-using-mongoDB
simple CRUD program to get data from MongoDB, using Node js, nodemon, Express js and can be check via postman

**Download mongoDB (sesuaikan dengan OS)**
https://www.mongodb.com/try/download/community

**masuk ke code editor**
buka terminal (ctrl+`)

ketikkan "npm init", isi semuanya jika sudah ketik yes

ketikkan "npm install express mongoose cors --save" tunggu sampai instalasi selesai

untuk melihat PORT mongoDB yang digunakan ketik "lsof -iTCP:LISTEN | grep mongo"

install nodemon "npm install nodemon --save-dev"

kemudian di file package.json pada bagian "scripts" tambahkan
"dev" : "nodemon server.js",
setelah itu jalankan dengan "npm run dev"

url postman "http://localhost:8000/karyawan"
jika ada id "http://localhost:8000/karyawan/id"


