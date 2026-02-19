# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:stable-alpine
# Kopiere die gebauten Dateien aus Stage 1 in das Nginx-Verzeichnis
COPY --from=build /app/dist /usr/share/nginx/html
# Standard Nginx Port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]