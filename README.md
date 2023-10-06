# nodeTask
This is simple task assignment



System requirements:
1. Node JS latest version should installed in the system. Refer https://nodejs.org/en/download/current to install.
2. Postman should be installed in system. Refer https://www.postman.com/downloads/ to install postman.
3. MongoDB should be installed. Refer https://www.mongodb.com/try/download/community to download and install.

   
Steps to run the application :-
1. Clone the project in local drive.
2. Go inside the folder where project was cloned.
3. Open command prompt or terminal.
4. Run npm install.
5. Run npm start.
6. Create new task by following steps
7. Open the postman and send the post request to create new tasks:
8. URL - localhost:3000/tasks/create
9. pass body raw data like:
10. {
    "taskName":"Work",
    "taskType":"IT Professional",
    "taskStatus":"Completed"
}
11. Get all tasks by following steps:
12. URL - Get call -> localhost:3000/tasks/fetchAll?start=1&end=2
13. Update data with following steps:
14. URL - Put call -> localhost:3000/tasks/updateTask
15. pass body raw data like:
16. {
    "task_name": "Work1",
    "task_type": "Software Developer",
    "task_status": "pending",
    "task_flag": true,
    "_id": "651f08a02093e10f12794b45"
} 

