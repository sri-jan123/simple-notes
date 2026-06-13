# Notes Online - Highly Available MERN Application on Azure

## Overview

**Notes Online** is a cloud-native MERN stack application that allows users to create and manage notes. The application is deployed on Microsoft Azure with a highly available backend architecture using multiple Virtual Machines, Docker containers, Azure Load Balancer, and MongoDB Atlas.

This project demonstrates practical cloud deployment concepts including:

- Containerization with Docker
- Azure Virtual Machines
- Azure Virtual Networks
- Azure Load Balancer
- Nginx Reverse Proxy
- HTTPS using Let's Encrypt
- MongoDB Atlas
- Azure Storage Static Website
- Domain and DNS Configuration
- High Availability Architecture

---

## Architecture

<img width="1292" height="1134" alt="Screenshot 2026-06-13 202547" src="https://github.com/user-attachments/assets/582520e4-a3de-4431-a1de-600a834ef819" />


## Tech Stack

### Frontend

- React
- Vite
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Cloud & DevOps

- Microsoft Azure
- Azure Virtual Machines
- Azure Storage Static Website
- Azure Load Balancer
- Azure Virtual Network
- Docker
- Docker Hub
- Nginx
- Certbot
- Let's Encrypt

### Database

- MongoDB Atlas 

---

## Infrastructure Components

### Frontend

Hosted using Azure Storage Static Website.

### Backend

Two Ubuntu Virtual Machines running:

- Docker
- Node.js
- Express.js
- Port 5000

### Networking

**VNet:** `notes-backend-vnet`

**Address Space:** `10.0.0.0/16`

Private IPs:

- VM-01 → `10.0.0.4`
- VM-02 → `10.0.0.5`

### Load Balancer

Azure Load Balancer distributes requests across both backend VMs.

### Database

MongoDB Atlas Replica Set.

---

## Project Structure

```text
notes-online/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
│
└── README.md
```

---

## Environment Variables

### Backend

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Running Locally

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Docker Deployment

### Build Image

```bash
docker build -t notes-backend .
```

### Tag Image

```bash
docker tag notes-backend username/notes-backend:v1
```

### Push Image

```bash
docker push username/notes-backend:v1
```

### Run Container

```bash
docker run -d \
--name notes-backend \
--env-file .env \
-p 5000:5000 \
username/notes-backend:v1
```

---

## Azure Deployment Workflow

### Backend

1. Create Azure VM.
2. Install Docker.
3. Pull image from Docker Hub.
4. Run container.
5. Configure NSG rules.
6. Configure Nginx reverse proxy.
7. Configure HTTPS using Certbot.

### Frontend

1. Build React application.
2. Upload build files to Azure Storage Static Website.
3. Configure custom domain.

---

## High Availability Setup

Backend is deployed across:

- VM-01
- VM-02

Both VMs are placed inside:

```text
notes-backend-vnet
```

Azure Load Balancer distributes incoming requests between both servers.

---

## Security

Network Security Group rules allow:

- Port 80
- Port 443
- Port 5000

HTTPS enabled using:

- Nginx
- Let's Encrypt
- Certbot

---

## Future Improvements

- User authentication
- JWT authorization
- CI/CD with GitHub Actions
- Kubernetes deployment
- Terraform infrastructure as code
- Azure Application Gateway
- Monitoring with Azure Monitor
- Redis caching
- Logging and observability

---

## Learning Outcomes

This project helped in understanding:

- Cloud deployment
- Docker containerization
- Azure networking
- Load balancing
- Reverse proxy configuration
- SSL certificate management
- High availability systems
- Production architecture design

---

## License

MIT License
