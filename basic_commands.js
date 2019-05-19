// to run this script as mondodb script, on the command prompt write : 
// mongo < basic_commands.js

// to see current database
dbs

// to view all databases
show databases
// or
show dbs

// to create and use certain database
use products

// to create a collection
db.createCollection("product")

// insert one document
db.product.insertOne({table: "product information"})

// insert many documents
db.product.insertMany([{
  sku: "00e8da9b", title: "A Love Supreme", description: "by John Coltrane",

  shipping: { weight: 6, dimensions: { width: 10, height: 10, depth: 1 }, },

  pricing: { list: 1200, retail: 1100, savings: 100, pct_savings: 8 },

  details: { title: "A Love Supreme", artist: "John Coltrane", genre: [ "Jazz", "General" ],
    tracks: [ "A Love Supreme Part I: Acknowledgement", "A Love Supreme Part II - Resolution", 
    "A Love Supreme, Part III: Pursuance" ],},}])

// to view all documents in product category
db.product.find()

// to view all documents in product category in arranged way
db.product.find().pretty()
