
const http = require("http")
const mongoose = require("mongoose")


main().catch(err => console.log(err))

async function main(){
    await mongoose.connect("mongodb+srv://dimeygee:motigbagbe@cluster0.fohjifj.mongodb.net/?retryWrites=true&w=majority")
}

const kittySchema = new mongoose.Schema({
    name: String
  });

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dimeygee:motigbagbe@cluster0.fohjifj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log(collection)
  // perform actions on the collection object
  client.close();
});
*/

const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/plain')
    res.end("Hello World")
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
    
})



