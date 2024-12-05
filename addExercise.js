import { GoalEvent } from "./goalEvent.js";

const goalEvent = new GoalEvent();
function sendMessage(){
    console.log("Congratulations! You have reached your fitness goal.")
}

goalEvent.addListener("goalReached", sendMessage)
goalEvent.addExercise({name: "Running", caloriesBurned: 600});
goalEvent.addExercise({name: "Cycling", caloriesBurned: 400});
