# Copying the base node install that is maintained by the people at node. Carbon is their current LTS version. 
FROM node:carbon 
 
# Creating a folder and setting it as the current directory so that we can copy all the files and folders to the current folder. This will make it a bit easier to work with commands later. 
WORKDIR /src
 
# So, to install the application dependencies, we need to pass them over to the container, so that it can install the stuff.  
# With npm versions greater than 5, it needs both package.json and package-lock.json.  
COPY package*.json ./ 
 
# Now, we need to install the dependencies 
RUN npm install 
 
# Now that the dependencies are arranged for, we just need to copy over the code and it should work 
COPY . . 
 
# Before we actually run the docker, we need to tell the container that it needs to expose some ports to the host os (So that we can actually test the code on the website) 
EXPOSE 8080 
 
#Finally we can run the code 
CMD [ "node", "." ] 