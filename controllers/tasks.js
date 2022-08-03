const Task = require('../models/tasks');

module.exports = {
    index: (req, res) => {
        Task.find({}, (error, tasks) => {
            if (error) {
                console.log('There was an error ' + error);
            } else {
                res.render('todo.ejs', { todotasks: tasks });
            }
        })
    },
    create: (req, res) => {
        const task = new Task({ Title: req.body.Title });
        task.save().then(() => {
            res.redirect('/');
        })
    },
    edit: (req, res) => {
        const id = req.params.id;
        Task.find({}, (error, tasks) => {
            if (error) {
                console.log('There was an error ' + error);
            } else {
                res.render('toDoEdit.ejs', { todotasks: tasks, idTask: id });
            }
        });

    },
    update: (req, res) => {
        const id = req.params.id;
        Task.findByIdAndUpdate(id, { Title: req.body.Title }, (error) => {
            if (error) {
                return res.send(500, error);
            } else {
                res.redirect('/');
            }
        });
    },
    delete: (req, res) => {
        Task.deleteOne({ _id: req.params._id }, (error) => {
            if (error) {
                console.log('There was an error ' + error);
            } else {
                res.redirect('/');
            }
        })
    }


}