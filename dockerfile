from node
workdir /app
copy . .
run npm install express
expose 8000
cmd node server.js