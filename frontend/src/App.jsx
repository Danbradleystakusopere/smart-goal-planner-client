import React, { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import AddGoalForm from "./components/AddGoalForm";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  function handleAddGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <AddGoalForm onAddGoal={handleAddGoal} />
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
