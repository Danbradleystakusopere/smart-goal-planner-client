import React, { useEffect, useState } from "react";
import GoalCard from "./GoalCard";
import GoalForm from "./GoalForm";
import SavingsOverview from "./SavingsOverview";

function GoalList() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  const handleAddGoal = (newGoal) => {
    fetch("http://localhost:3001/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => setGoals((prevGoals) => [...prevGoals, data]));
  };

  const handleDeposit = (id, amount) => {
    const goalToUpdate = goals.find((goal) => goal.id === id);
    if (!goalToUpdate) return;

    const updatedGoal = {
      ...goalToUpdate,
      savedAmount: goalToUpdate.savedAmount + amount,
    };

    fetch(`http://localhost:3001/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setGoals((prevGoals) =>
          prevGoals.map((goal) => (goal.id === id ? data : goal))
        );
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/goals/${id}`, {
      method: "DELETE",
    }).then(() => {
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    });
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <SavingsOverview goals={goals} />
      <GoalForm onAddGoal={handleAddGoal} />
      <div className="goal-list">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onDeposit={handleDeposit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default GoalList;
