import React from "react";
import GoalCard from "./GoalCard";

function GoalList({ goals, onDeleteGoal, onDepositToGoal }) {
  return (
    <div className="goal-list">
      <h2>Your Goals</h2>
      {goals.length === 0 ? (
        <p>No goals yet.</p>
      ) : (
        goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onDelete={onDeleteGoal}
            onDeposit={onDepositToGoal}
          />
        ))
      )}
    </div>
  );
}

export default GoalList;
