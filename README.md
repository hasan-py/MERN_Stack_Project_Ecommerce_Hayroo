# CS436 Term Project
Our project reports are located under the Project Demo and SetUp section.

Names of our group members:
- Arda Güney
- Ata Ernam
- Eren Yiğit Yaşar
- Ahmet Burak Kurtulmuş

# Project Demo

[![Alt text](https://img.youtube.com/vi/lXk14qt2D28/0.jpg)](https://www.youtube.com/watch?v=lXk14qt2D28)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

NPM / Yarn and Node.js installed

### .env

In the server > .env file, you can find some information. Please use your own API key for future use, as this key may not work in the future.

```
BRAINTREE_MERCHANT_ID=your_id
BRAINTREE_PUBLIC_KEY=your_public_key
BRAINTREE_PRIVATE_KEY=your_private_key
```

### Installing

Installing NPM modules on both client and server folders

Execute these commands from the project directory

```
cd client && npm install
```

```
cd server && npm install
```

### Running the app

Open a terminal on server directory

```
npm run start:dev
```

and open another terminal on client directory

```
npm run start
```

Access the web app at http://localhost:3000/

### Deploying the backend server to render

Follow these setps 👇👇

1. Create your render account in https://render.com/
2. Connect your github to render and give the project permission for that
3. Then create a new Web Service and add your repo (your repo must be look like this repo's folder structure like frontend and backend both in that repo)
4. For deploying this, every change will be in this `render-deploy-backend` branch. So don't change your `.evn` from master branch.
5. You have to change your database to local to mongodb atlas. Because in this deployment we are not creating db server. So we will be using mongo atlas url. So find your mongodb cloud url with database which will look like this: `mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
   and
   <b>goto the `render-deploy-backend` branch</b>
   and goto `.env` file and replace the first variable to your latest mongodb cloud url like this:
   `DATABASE=mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
   Don't just put this url. Your url will be different. You will find it in your mongo cluster setting.
   The old variable will be like this: `DATABASE=mongodb://127.0.0.1:27017/ecommerce
` and your new one should look like this:
   `DATABASE=mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
   you can find the mongo url by goto the mongodb atlas website and goto your database and you can find a connect button and click on that you will see the url. And modify the url quite like my one with your secret info.
   N.B: And you must need to provide the cluster password not your account password! So find your cluster password from database access menu in mongodb atlast cloud and change accoding to you. Here I provide all image's that you can undarstand better
   ![Alt Text](assetREADME.md/atlasUrl.png)
   ![Alt Text](assetREADME.md/clusterPassword.png)
   ![Alt Text](assetREADME.md/networkAccess.png)

6. Then come to render website. Give all of the imformations I set in the image below just change the name of your project and then must be change the branch name to `master` to `render-deploy-backend`

7. This is the setup for render
   ![Alt Text](assetREADME.md/renderDeployBackendSetup.png)

8. After all the setup you finished create the web service and It will deploy the project.

You can deploy frontend into vercel or netlify also. Thanks

`Build with 💛 by Hasan`
### -------------------------------------------------------------------------------------------------------
### CS436 PROJECT
## Group Members
Eren Yiğit Yaşar
Ata Ernam
Burak Kurtulmuş
Arda Güney

### 16'th Of April Submission/ Initial Reprot
### Screen Shots Of Our Application Running On Cloud
![ClientTerminal](https://github.com/AtaErnam/CS436-Cloud-Project/assets/71980713/6e16dba0-424b-4a0e-b463-9e32de6197b4)
Figure 1: Client Terminal Interface

![ServerTerminal](https://github.com/AtaErnam/CS436-Cloud-Project/assets/71980713/40a6730c-c94f-4db7-aa09-9a7a84daf179)
Figure 2: Server Terminal Interface

![ClientBrowser](https://github.com/AtaErnam/CS436-Cloud-Project/assets/71980713/7cd971b3-73a7-4c5b-81d4-9489fd292bfd)
Figure 3: Client Browser Interface

### Draft Architecture
![CS436](https://github.com/AtaErnam/CS436-Cloud-Project/assets/67603284/7c0c4279-02c2-4077-a947-7336c17a9668)
Figure 4: Draft Architecture Diagram



---

## Latest Developments as of May 26, 2024

### Project Summary Update

#### 1. Architecture Design
- **Technology Stack:** The e-commerce site application is developed using Node.js for the backend and React for the frontend. This combination ensures a robust and responsive user experience.
- **Cloud Infrastructure:** The application is hosted on Google Cloud Platform (GCP), leveraging its powerful cloud services. The architecture includes separate virtual machines (VMs) for the frontend and backend to enhance performance and manageability.
- **Database:** MongoDB Atlas is utilized as the database solution, providing a scalable and flexible NoSQL database that is seamlessly integrated with the backend services.
- **Advanced Features:**
  - **Auto-Scaling:** The system is designed to automatically scale up or down based on the traffic load, ensuring optimal performance and cost efficiency.
  - **Load Balancing:** A load balancer is implemented to distribute incoming traffic evenly across multiple virtual machines. This helps in maintaining system stability and performance during high traffic periods.
  - **Serverless Functions:** Certain operations are handled using serverless functions, which are triggered by specific events. This reduces the load on the VMs and improves the overall efficiency of the system.
- **Operational Flow:** User requests are directed from the browser to the load balancer, which then forwards them to the appropriate virtual machines or serverless functions. The backend processes these requests, interacts with the MongoDB database, and returns the necessary information to the frontend.

#### 2. Experiment Design
- **System Parameters:** Key parameters such as the size and geographical location of the virtual machines, the types of load balancing strategies, and the specifics of the stress testing scenarios were carefully defined.
- **Stress Testing Tool:** Locust, an open-source load testing tool, was used to simulate various levels of user traffic and evaluate the system’s performance under different conditions.
- **Test Scenarios:** Multiple test scenarios were created to simulate real-world usage patterns, including peak traffic periods and sudden spikes in user activity. These tests helped in understanding how the system behaves under stress and identifying potential bottlenecks.

#### 3. Discussion of Results
- **Virtual Machine Performance:** Tests were conducted on virtual machines of different sizes and in various geographical regions. It was found that medium-sized virtual machines offered the best balance between cost and performance.
- **Load Balancing Policies:** Various load balancing policies, including Round Robin, Least Request, and Maglev, were evaluated. The Least Request policy resulted in the lowest error rate and most efficient distribution of traffic.
- **User Load and Traffic:** The system's performance was analyzed under varying numbers of users and request rates. As the number of users and traffic increased, the system's response time and error rates were monitored. This analysis led to the optimization of system parameters to ensure that the application could handle high loads effectively without compromising on performance.
- **Optimization Strategies:** Based on the findings from the stress tests, several optimization strategies were implemented. These included fine-tuning the auto-scaling rules, optimizing the serverless functions, and enhancing the database query performance to ensure quick response times.



