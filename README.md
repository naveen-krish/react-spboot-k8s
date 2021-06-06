# Getting Started with react-spboot-k8s app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Steps for packaging and running a React FE and Sprinbtoot BE inside k8s
Requirements : minikube / k8s cluster


-- Build a docker image from the Dockerfile under folder you run k8s deployment

-- create k8s deployment for the docker image
kubectl apply -f react-fe-deployment.yml

-- create nodePort service for the react-fe deployment
kubectl apply -f react-fe-service.yml

-- get the exposed node ip from minikube to access the fe-service
minikube service fe-service --url 

-- create k8s deployment for the BE docker image
kubectl apply -f spboot-be-deployment.yml

-- create nodePort service for the be-fe deployment
kubectl apply -f spboot-be-service.yml

-- get the exposed node ip from minikube to access the fe-service
minikube service be-service --url 
