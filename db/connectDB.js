const mongoose = require('mongoose')

// Connect yo DB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('Connected database'))
  .catch(err => console.log('DB connection error: ', err))
