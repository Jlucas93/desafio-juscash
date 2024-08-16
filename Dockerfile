FROM node:20.9.0-alpine as build

WORKDIR /app


COPY package*.json ./

RUN npm install

COPY . .

ARG VITE_PORT

RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine
# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80 for the Nginx server
EXPOSE 3000

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
