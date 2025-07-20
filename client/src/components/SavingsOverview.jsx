import React from "react";

function SavingsOverview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const completedGoals = goals.filter((goal) => goal.savedAmount >= goal.targetAmount).length;

  return (
    <div className="overview">
      <h2>Savings Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Completed Goals: {completedGoals}</p>
    </div>
  );
}

export default SavingsOverview;
