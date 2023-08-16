# Use a lightweight web server as the base image
FROM nginx:alpine

# Copy your HTML, CSS, and JavaScript files to the web server's document root
COPY index.html /usr/share/nginx/html
COPY style.css /usr/share/nginx/html
COPY index.js /usr/share/nginx/html

# Expose the port that the web server listens on
EXPOSE 80
