import React, { useState } from "react";

function AddGoalForm({ onAddGoal }) {
  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newGoal = {
      title,
      targetAmount: parseFloat(targetAmount),
      currentAmount: 0,
    };

    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddGoal(data);
        setTitle("");
        setTargetAmount("");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Goal</h2>
      <input
        type="text"
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
