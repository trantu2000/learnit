const express = require('express');

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://trantu:admin@mern-learnit.th1fgyf.mongodb.net/?retryWrites=true&w=majority`,
            {
                // useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // userFindAndModify: false
            }
        )
        console.log('MongoDB connected');

    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
connectDB()

const app = express();

app.get('/', (req, res) => res.send('Hello world'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))