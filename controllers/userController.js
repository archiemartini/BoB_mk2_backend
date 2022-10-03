import User from '../models/user.js'

export const registerUser = (req, res) => {
  // const user = new User(req.body.userData);
  console.log(req.body)

  // user.save((err) => {
  //     if (err) {
  //       throw err
  //     }
  //     res.send({
  //       _id: user._id,
  //       userName: user.userName,
  //       fridge: user.fridge
  //     })
  //   })
}

export const AddFridgeItem = (req, res) => {
  User.findByIdAndUpdate(
    req.body._id, 
    {$push: { fridge: req.body.fridgeItem }},
    {new: true}, 
    (err, result) => {
      res.send({
        _id: result._id,
        userName: result.userName,
        fridge: result.fridge
      })
    })
}

export const RemoveFridgeItem = (req, res) => {
  User.findByIdAndUpdate(
    req.body._id, 
    {$pull: { fridge: req.body.fridgeItem }}, 
    {new: true},
    (err, result) => {
      res.send({
        _id: result._id,
        userName: result.userName,
        fridge: result.fridge
      })
    })
}