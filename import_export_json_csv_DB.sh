// run these command in command prompt/terminal

// to import json file in collection
mongoimport --db dbName --collection collectionName --file C:\Users\xyz\Downloads\input.json

// to export json collection to JSON File:
mongoexport --db dbName --collection collectionName --pretty --out output.json

// -----

// to export DB
mongodump --db dbName --collection collectionName

// to import DB
mongorestore --db dbName path_to_bson_file

// -----

// mongoimport uses the input file name, without the extension, as the collection name if -c or --collection is unspecified.
mongoimport --db users --type csv --headerline --file /opt/backups/contacts.csv
// to import csv file inside a collection
mongoimport --db dbName --collection collectionName --type csv --headerline --file C:\Users\xyz\Downloads\input.csv

// to export in CSV format, we must specify the fields in the documents to export. 
// This operation specifies the filed1 and field2 fields to export.
mongoexport --db dbName --collection collectionName --type csv --fields field1,field2 --out C:\Users\xyz\Downloads\output.csv
