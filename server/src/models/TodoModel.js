const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date:{
    type:String,
  },
  completed: {
    type: Boolean,
  }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;