# Learning Github Actions ▶️

What is Github Actions ?  

Accoring to Github, GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.

So, it is a tool which is used to apply continuous integration and continuous deployment, made for github.  

---

But wait, what is CI/CD ? 🤔  

CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of software development like testing, writing code, deployment etc.

***
 ![DEVOPS](https://testrigor.com/wp-content/uploads/2022/12/cicd_5_updated.png)
***

**The above picture is about dev-ops which increases an organization's ability to deliver applications and services at high velocity. We can see Jenkins in it which is also a tool used for CI/CD.**  


Some similar tools like Github actions used in industry:  
1. Jenkins  
2. Travis CI  
3. Circle CI  

and much more..



## ABOUT THIS PROJECT

This is a simple project in which we have used node js,express js, jest and supertest.   
Node js & Express for making the server run & Jest and Supertest for testing the application.  

We have written a simple test in the `./tests/app.test.js` which just tests the expected output from the server.  

Our `./app.js` file is server code which returns JSON at the route GET `/`. 

Then we have github actions workflow file at the loaction `./github/workflows/nodejs_tests.js` which has to be made for using github actions.

Everything related to github actions is described in it what needs to be done when. Checkout that file, I have added comments so that you can understand well.

**SOME GITHUB ACTIONS TERMS DESCRIBED**

**1. Workflow :** Configurable automated process used to run one or more jobs (it is a yaml file)  

**2. Events :** Events are triggered then the process we defined run. Like on : pull_request this means when the repo gets a pull request this workflow will get triggered and run after that event. There are many events like on : push , schedule something like cron-job etc. Read more in documentation.  

**3. Jobs :** A workflow consists of one or more jobs. Each job run in its own environment ( Windows, Linux ..)  

**4. Steps :** Steps are individual tasks within a job, they can include action (pre-built tasks by github or third party)  

**5. Actions :** Actions are reusuable units of code which encapsulate a task.   

You can watch a youtube tutorial on github actions to understand more and read documentation.  

If you think this project helped you any % to understand github actions, please ⭐ this project and share with your friends.  

**Follow me :**   
X | Hashnode : `@codingsagar`

 
