const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(express.json());

 app.use(cors());

app.get('/api/mouseEvents', async (req, res) => {
    try {
        const client = new MongoClient('mongodb://localhost:27017');
        await client.connect();
        const db = client.db('test');
        const collection = db.collection('mouseEvents');
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/mouseEvents', async (req, res) => {
    try {
        const client = new MongoClient('mongodb://localhost:27017');
        await client.connect();
        const db = client.db('test');
        const collection = db.collection('mouseEvents');
        await collection.insertOne(req.body);
        res.json({ ok: true});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.listen(3000, () => console.log('Server running on port 3000'));
