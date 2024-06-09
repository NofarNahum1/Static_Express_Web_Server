Run the server by: "node server.js" commend

The website will show at: http://localhost:3001

if the port is busy run: "netstat -ano | findstr :3001" then, "taskkill /PID <PID> /F" s.t <PID>= the number of process we found in the last commend output.
then run again.
