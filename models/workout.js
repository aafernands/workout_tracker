const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
	day: {
		type: Date,
		default: new Date(),
	},
	exercises: [
		{
			type: {
				type: String,
			},
			name: String,
			weight: Number,
			sets: Number,
			reps: Number,
			duration: Number,
			distance: Number,
		},
	],
});

const WorkoutModel = mongoose.model("Workout", workoutSchema);

module.exports = WorkoutModel;
