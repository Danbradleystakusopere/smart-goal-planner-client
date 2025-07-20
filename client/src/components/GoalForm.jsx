import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && targetAmount > 0) {
      onAddGoal({ title, targetAmount: parseFloat(targetAmount), savedAmount: 0 });
      setTitle("");
      setTargetAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
