import React, { useEffect, useState } from "react";
import GoalList from "./components/GoalList";

function App() {
  const [goals, setGoals] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  
  function handleDeleteGoal(id) {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedGoals = goals.filter((goal) => goal.id !== id);
      setGoals(updatedGoals);
    });
  }


  function handleDepositToGoal(id) {
    const goalToUpdate = goals.find((goal) => goal.id === id);
    const updatedAmount = goalToUpdate.amount + 100;

    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: updatedAmount }),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        const updatedGoals = goals.map((goal) =>
          goal.id === id ? updatedGoal : goal
        );
        setGoals(updatedGoals);
      });
  }

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <GoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
        onDepositToGoal={handleDepositToGoal}
      />
    </div>
  );
}

export default App;
