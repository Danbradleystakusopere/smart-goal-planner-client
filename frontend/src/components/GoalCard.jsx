import React from "react";

function GoalCard({ goal, onDelete, onDeposit }) {
  
  function handleDepositClick() {
    const amount = prompt("How much do you want to add?");
    if (amount && !isNaN(amount)) {
      onDeposit(goal.id, Number(amount));
    }
  }

  return (
    <div className="goal-card">
      <h3>{goal.title}</h3>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.currentAmount}</p>
      <button onClick={handleDepositClick}>Deposit</button>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalCard;
