import React, { useEffect, useState } from "react";
import AddGoalForm from "./components/AddGoalForm";
import GoalCard from "./components/GoalCard";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

  function handleAddGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

  function handleDeleteGoal(id) {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "DELETE",
    }).then(() => {
      setGoals(goals.filter((goal) => goal.id !== id));
    });
  }

  function handleDeposit(id, amount) {
    const goalToUpdate = goals.find((goal) => goal.id === id);
    if (!goalToUpdate) return;

    const updatedAmount = goalToUpdate.currentAmount + amount;

    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentAmount: updatedAmount }),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        const updatedGoals = goals.map((goal) =>
          goal.id === updatedGoal.id ? updatedGoal : goal
        );
        setGoals(updatedGoals);
      });
  }

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <AddGoalForm onAddGoal={handleAddGoal} />
      <div className="goal-list">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onDelete={handleDeleteGoal}
            onDeposit={handleDeposit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
