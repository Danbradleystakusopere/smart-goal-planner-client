import React, { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  function handleAddGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

  function handleDeleteGoal(id) {
    setGoals(goals.filter((goal) => goal.id !== id));
  }

  function handleUpdateGoal(updatedGoal) {
    const updatedGoals = goals.map((goal) =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    );
    setGoals(updatedGoals);
  }

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={handleAddGoal} />
      <GoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
        onUpdateGoal={handleUpdateGoal}
      />
    </div>
  );
}

export default App;
