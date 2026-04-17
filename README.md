# DevOps CA2 - Node.js REST API with CI/CD Pipeline

A simple Node.js Express REST API with a complete CI/CD pipeline using GitHub Actions and Docker.

## Application Overview

A Node.js Express API with the following endpoint:

- **GET /health** - Returns server status

## Setup & Run Locally

```bash
# Install dependencies
npm install

# Run the application
npm start

# Run tests
npm test
```

## Docker

```bash
# Build the Docker image
docker build -t devops-ca2-api .

# Run the Docker container
docker run -p 3000:3000 devops-ca2-api
```

## CI/CD Pipeline

The pipeline is configured in `.github/workflows/ci-cd.yml` and runs on every push to `main`. It:

1. Checks out the code
2. Sets up Node.js 18
3. Installs dependencies
4. Runs tests
5. Builds a Docker image
6. Pushes the image to Docker Hub

### Required GitHub Secrets

- `DOCKER_USERNAME` - Your Docker Hub username
- `DOCKER_PASSWORD` - Your Docker Hub password/token
