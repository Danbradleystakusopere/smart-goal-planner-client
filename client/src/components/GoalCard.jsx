import React, { useState } from "react";

function GoalCard({ goal, onDeposit, onDelete }) {
  const [depositAmount, setDepositAmount] = useState("");

  function handleDeposit(e) {
    e.preventDefault();
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) return;

    onDeposit(goal.id, amount);
    setDepositAmount("");
  }

  function handleDelete() {
    onDelete(goal.id);
  }

  return (
    <div className="goal-card" style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{goal.title}</h3>
      <p><strong>Target:</strong> ${goal.targetAmount}</p>
      <p><strong>Saved:</strong> ${goal.savedAmount}</p>
      <form onSubmit={handleDeposit}>
        <input
          type="number"
          placeholder="Enter deposit"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button type="submit">Deposit</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}

export default GoalCard;
