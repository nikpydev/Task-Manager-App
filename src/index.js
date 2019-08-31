const express = require('express')
require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET Requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is in maintenance mode please try again soon!')
// })

app.use(express.json()) //parses anything being sent from the client side via the http and converts it into json
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async function() {
    // const task = await Task.findById('5d6a7d241daef5476c7a8bb2')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner);

    const user = await User.findById('5d6a7bd725f2b03aacb32ecb')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks);
}

main()