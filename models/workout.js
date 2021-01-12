const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
	{
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
	},
	{
		toJSON: {
			virtuals: true, // include virtual properties when convert to json
		},
	}
);

workoutSchema.virtual("totalDuration").get(function () {
	return this.exercises.reduce((acc, exercise) => {
		return acc + exercise.duration;
	}, 0);
});

const WorkoutModel = mongoose.model("Workout", workoutSchema);

module.exports = WorkoutModel;
