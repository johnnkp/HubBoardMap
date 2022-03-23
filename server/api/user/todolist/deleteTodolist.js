/**
 * @api {delete} /api/user/todolist/deleteTodolist
 * @apiName deleteTodolist
 * @apiGroup User_Todolist
 *
 * @apiBody {String} todolistId id of the todolist to delete.
 *
 * @apiSuccess {Boolean} success True
 * @apiSuccess {String} message Success message
 *
 * @apiError {Boolean} success False
 * @apiError {String} message Error message
 */

const router = require('express').Router();
const Todolist = require('../../../database/model/Todolist');

router.delete('/', (req, res) => {
    const { todolistId } = req.body;
    if (!todolistId) {
        return res.status(400).json({
            success: false,
            message: 'Missing todolistId'
        });
    }
    Todolist.findById(todolistId)
        .then(todolist => {
            if (todolist.owner.toString() !== req.user._id.toString()) {
                return res.status(403).json({
                    success: false,
                    message: 'You are not the owner of this todolist'
                });
            } else {
                req.user.todolists.pull(todolistId);
                Promise.all([req.user.save(), todolist.remove()])
                    .then(() => {
                        res.status(200).json({
                            success: true,
                            message: 'Todolist deleted'
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            success: false,
                            message: err.message
                        });
                    })
            }
        })
        .catch(err => {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        });
});

module.exports = router;