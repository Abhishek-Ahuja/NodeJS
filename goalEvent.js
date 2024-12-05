
import * as Events from "events";

export class GoalEvent extends Events.EventEmitter{
    constructor(){
        super();
        this.goal = 1000;
        this.progress = 0;
        this.tracker = {};
    }

    addExercise(exercise){
        const {name, caloriesBurned} = exercise;
        this.tracker[name] ? this.tracker[name] += caloriesBurned : this.tracker[name] = caloriesBurned;
        let calories = 0;
        console.log(Object.keys(this.tracker))
        Object.keys(this.tracker).forEach((name) => {
            calories+=this.tracker[name];
        })
        this.progress+= caloriesBurned;
        console.log(this.tracker, calories)
        if(this.progress >= this.goal){
            this.emit("goalReached")
        }
    }
}