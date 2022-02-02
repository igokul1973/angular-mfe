# Pull the Nginx from Docker Hub
FROM node:lts-bullseye

RUN apt-get update

# Install utils
RUN apt-get -y install apt-utils
RUN apt-get -y install build-essential gnupg2 ca-certificates lsb-release debian-archive-keyring net-tools

# Prepare nginx sources
RUN curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
| tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
RUN echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
https://nginx.org/packages/debian `lsb_release -cs` nginx" \
| tee /etc/apt/sources.list.d/nginx.list

RUN apt-get update

# Install Nginx
RUN apt-get -y install nginx

# Copying the nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
ARG project=host
# Replacing 'project' word with actual folder name where the dist files will be
RUN sed -i "s/project_name/${project}/g" /etc/nginx/conf.d/default.conf

# Create the app folder
ARG app_folder=/var/www/app
RUN mkdir -p $app_folder

# Move command execution context to the /www/data where
# the application will be located
WORKDIR $app_folder
