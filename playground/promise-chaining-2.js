require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d601d89606ab115a03c1752').then((task) => {
//     console.log(task)

//     return Task.countDocuments({
//         completed: false
//     })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5d61651be318d91184ec4720').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log('E', e)
})