const mongoose = require("mongoose"); // mongoose 
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: ()=> new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an Exercise Type",
      },
      name: {
        type: String,
        required: "Enter Excercise Name",
        minLength: 1,
        maxLength: 40,
      },
      duration: {
        type: Number,
        default: 0,
        required: "Enter minutes",
      },
      distance: {
        type: Number,
        min: 0,
        default: 0,
      },
      weight: {
        type: Number,
        min: 0,
        default: 0,
      },
      reps: {
        type: Number,
        min: 0,
        default: 0,
      },
      sets: {
        type: Number,
        min: 0,
        default: 0,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;