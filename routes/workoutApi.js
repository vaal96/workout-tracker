const router = require('express').router();
const Workout = require('../models');



router.get('/api/workouts', async (req, res) => {
 try {
    const rWorkout = await Workout.aggregate([
        { $addFields:{ totalDuration:{ $sum: "$exercise.duration"}}}
    ]);
    res.json(rWorkout)
 } catch (error) {
    console.log(error) 
 }
    
    
});

router.get('/api/workouts/range', async (req, res) => {
  try {
    const rWorkout = await Workout.aggregate([
        { $addFields:{ totalDuration:{ $sum: "$exercise.duration"}}}
    ]);
    res.json(rWorkout)
  } catch (error) {
      console.log(error)
  }
})

router.post('/api/workouts', async (req, res) => {
  try {
      const workout = await Workout.create(req.body);
      res.json(workout)
  } catch (error) {
    console.log(error) 
  }
})

router.put('/api/workouts/:id', async (req, res) => {
    let workout = await Workout.findOneAndUpdate(
        { _id: req.params.id },
        {  
         $inc: { totalDuration: req.body.duration }, 
         $push: { exercises: req.body }
        }
    );

res.json(workout);
});
module.exports = router;