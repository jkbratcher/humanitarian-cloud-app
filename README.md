# Humanitarian Aid Directory

A simple cloud-deployment-ready web application for a cloud technologies practicum. The app is a responsive humanitarian donation directory that lists sample organizations by category. It uses Node.js with Express to serve static HTML, CSS, and JavaScript files.

The website is intentionally simple because the main project focus is deploying the same app in multiple cloud environments.

## Features

- Responsive homepage
- Category filters
- Search bar
- Organization cards with images and external donation links
- Local sample data in `public/app.js`
- Public image URLs that can later be replaced with Google Cloud Storage, Amazon S3, or Azure Blob Storage URLs
- Dockerfile for container deployment

## Project Structure

```text
humanitarian-aid-directory/
├── Dockerfile
├── README.md
├── package.json
├── server.js
└── public/
    ├── app.js
    ├── index.html
    └── styles.css
```

## 1. Run Locally

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

Open the app in a browser:

```text
http://localhost:8080
```

The server listens on `process.env.PORT` when provided, or `8080` by default.

## 2. Build and Run with Docker

Build the Docker image:

```bash
docker build -t humanitarian-aid-directory .
```

Run the container:

```bash
docker run -p 8080:8080 humanitarian-aid-directory
```

Open:

```text
http://localhost:8080
```

## 3. VM Deployment

This app can be deployed on a virtual machine such as:

- Google Compute Engine
- AWS EC2
- Azure Virtual Machine

Basic VM deployment steps:

1. Create a VM instance in your cloud provider.
2. Allow HTTP traffic through the firewall or security group.
3. SSH into the VM.
4. Install Node.js and npm.
5. Copy or clone this project onto the VM.
6. Run `npm install`.
7. Start the app with `npm start`.
8. Visit the VM external IP address on port `8080`, or configure a web server like Nginx to proxy traffic from port `80` to `8080`.

In the project video, show the VM instance, the external IP address, and the website loading from that IP.

## 4. Container Platform Deployment

This app includes a `Dockerfile`, so it can be packaged as a container image and deployed to a container platform such as:

- Google Kubernetes Engine
- Amazon ECS
- Azure Container Apps
- Docker on a VM

General container deployment steps:

1. Build the Docker image.
2. Tag the image for your cloud container registry.
3. Push the image to the registry.
4. Deploy the image to the container service.
5. Expose the service with a public URL or load balancer.

In the project video, show the `Dockerfile`, the image in the container registry, the running container service, and the website URL.

## 5. Serverless Deployment with Google Cloud Run

Google Cloud Run can run this containerized Express app in a fully managed serverless environment.

General Cloud Run deployment steps:

1. Build the container image.
2. Push the image to Artifact Registry.
3. Deploy the image to Cloud Run.
4. Set the container port to `8080`.
5. Allow unauthenticated access if the site should be public.
6. Open the Cloud Run service URL.

Cloud Run handles infrastructure provisioning, scaling, and routing. It can also scale down when there is no traffic, which is why it fits the serverless deployment requirement.

In the project video, show the Cloud Run service, the public service URL, and the website loading from that URL.

## Replacing Images with Cloud Storage URLs

The sample image URLs are stored in `public/app.js` inside the `organizations` array.

For the final cloud assignment, upload your images to a public cloud storage bucket such as:

- Google Cloud Storage
- Amazon S3
- Azure Blob Storage

Then replace each `image` value with the public bucket URL.

Example:

```js
image: "https://storage.googleapis.com/YOUR_BUCKET_NAME/red-cross.jpg"
```

## AI Use Reference

This starter application was generated with assistance from OpenAI ChatGPT/Codex. The code was reviewed and organized for a cloud deployment practicum.
