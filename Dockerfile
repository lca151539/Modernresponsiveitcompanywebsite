# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Wir erzwingen hier den Build
RUN npm run build

# Stage 2: Production
FROM nginx:stable-alpine
# HIER GENAU PRÜFEN: dist oder build?
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]