const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const {title,description,date} = req.body;
  console.log(date,"date");
  const todo = new TodoModel({
    title,
    description,
    date:date,
    completed: false,
  })
  const newTodo = await todo.save();
  res.json(newTodo);
};