const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const {id} = req.params;
  const todo = await TodoModel.findById(id);
  todo.completed = req.body.completed;
  todo.title = req.body.title;
  todo.description = req.body.description;
  todo.date = req.body.date;
  await todo.save();
  res.json(todo);
}