const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
let app = express();
let http = require('http').createServer(app);
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.post("/todo", async function(req, res) {
    const createPayload = req?.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed:false
    })
    res.json({success: 1, message : "success"})
})

app.get("/todos", async function(req, res) {
    const todos = await todo.find()
    res.json({success: 1, message : "success", data: todos})
})

app.put("/completed", async function(req, res){
    const updatePayload = req?.body;
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req?.body?.id
    },{
        completed: true
    })
})

http.listen(5001, async () => {
    console.log(`Server is listening to port 5001`);
});