import React, { useState } from "react";

function AddGoalForm({ onAddGoal }) {
  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      title,
      targetAmount: Number(targetAmount),
      currentAmount: 0,
    };
    onAddGoal(newGoal);
    setTitle("");
    setTargetAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-goal-form">
      <h2>Add New Goal</h2>
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
