#  Smart Goal Planner

The Smart Goal Planner is a simple, interactive web app that helps users manage and track their financial savings goals. Users can create goals, make deposits, monitor progress, and get an overview of their savings journey.



## Features

Add new financial goals with a title and target amount
 Track saved amounts and remaining balance
 Deposit money toward goals
 Delete goals you no longer need
 Overview section shows total goals, total saved, and completed goals
 Visual alerts for upcoming or missed deadlines *(optional)*



##  Built With

React For building the interactive UI
JSON Server Simulated backend for storing goal data
CSS  For custom styling



##  Installation & Setup

 # 1 Clone the Repository
git clone:git@github.com:Danbradleystakusopere/smart-goal-planner-client.git
cd smart-goal-planner-client

 # 2 Start the JSON Server

npx json-server --watch db.json --port 3001

# 3 Start the React App

cd client
npm install
npm start