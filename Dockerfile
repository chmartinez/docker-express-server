# Use an official Python runtime as a parent image
FROM node:9.11.2

# Set the working directory to /server
WORKDIR /server

# Copy the current directory contents into the container at /server
COPY . /server

# Install any needed packages
RUN npm install --global yarn

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Define environment variable
ENV NAME Christian
ENV PORT 4000

# Run app.py when the container launches
CMD ["node", "index.js"]
