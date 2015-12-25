FROM centos:centos6

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN yum install -y epel-release
# Install Node.js and npm
RUN yum install -y nodejs npm
# Bundle App Source
COPY ./src/ /src/
# Install App Dependencies
RUN cd /src; npm install

EXPOSE 3000

#CMD ["npm", "start"]
CMD ["node", "/src/bin/www"]
