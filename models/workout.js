const mongoose = require("mongoose"); // mongoose 
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        enum: ["cardio", "resistance"],
        required: true,
      },
      name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 40,
      },
      duration: {
        type: Number,
        min: 0,
        default: 0,
        required: true,
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