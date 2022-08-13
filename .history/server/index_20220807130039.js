const express = require('express');

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://trantu:<admin>@mern-learnit.th1fgyf.mongodb.net/?retryWrites=true&w=majority`,
            {
                
            }
        )
        
    } catch (error) {
        
    }
}

const app = express();

app.get('/', (req, res) => res.send('Hello world'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))