/**
 * @api {post} /user/interaction/friendRequest Friend request
 * @apiName Friend Request
 * @apiGroup User Interaction
 * @apiDescription Send a friend request to target user.
 *
 * @apiBody {String} targetUsername The username of target user.
 *
 * @apiSuccess {Boolean} success True.
 * @apiSuccess {String} message Success message
 *
 * @apiError {Boolean} success False.
 * @apiError {String} message Error message
 */

const router = require('express').Router();
const User = require('../../../database/model/User');
const friendRequest = require('../../../database/model/friendRequest');

router.post('/',(req,res)=>{
    const { targetUsername } = req.body;
    // If the target user is not defined
    if (!targetUsername) {
        return res.status(400).json({
            success: false,
            message: 'Missing targetUsername'
        });
    }
    // Find the target user
    User.findOne({username:targetUsername},'_id username friendRequestsReceived')
        .then(targetUser=>{
            // If the target user is not found
            if (!targetUser) {
                return res.status(404).json({
                    success: false,
                    message: 'Target user not found'
                });
            }
            // If target user is already friend
            else if (req.user.friends.includes(targetUser._id)) {
                return res.status(400).json({
                    success: false,
                    message: 'You are already friends with this user'
                });
            } else {
                // Check friend request already exist
                friendRequest.findOne({
                    fromUser: req.user._id,
                    toUser: targetUser._id
                })
                    .then(request=>{
                        // If the request is already exist, update the time
                        if (request) {
                            request.time = Date.now();
                            request.save()
                                .then(()=>{
                                    return res.status(200).json({
                                        success: true,
                                        message: 'Friend request sent'
                                    });
                                })
                                .catch(error=>{
                                    console.log(error);
                                    return res.status(500).json({
                                        success: false,
                                        message: 'Internal server error'
                                    });
                                });
                        } else {
                            // Create a new friend request
                            friendRequest.create({
                                fromUser: req.user._id,
                                toUser: targetUser._id,
                                time: Date.now()
                            })
                                .then(request=>{
                                    // Referencing the friend request
                                    req.user.friendRequestsSent.push(request._id)
                                    targetUser.friendRequestsReceived.push(request._id);
                                    Promise.all([req.user.save(),targetUser.save()])
                                        .then(()=>{
                                            // TODO: Send notification to targetUser
                                            return res.status(200).json({
                                                success: true,
                                                message: 'Friend request sent'
                                            });
                                        })
                                        .catch(error=>{
                                            console.error(error);
                                            return res.status(500).json({
                                                success: false,
                                                message: 'Internal server error'
                                            });
                                        });
                                })
                                .catch(err=>{
                                    console.error(err);
                                    return res.status(500).json({
                                        success: false,
                                        message: 'Internal server error'
                                    });
                                });
                        }
                    })
            }
        })
})

module.exports = router;