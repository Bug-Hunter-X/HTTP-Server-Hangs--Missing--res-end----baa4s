# Node.js HTTP Server Hang

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` in the response handler.  This results in the server hanging and not responding to requests.

## Bug
The `server.js` file contains a simple HTTP server that lacks the crucial `res.end()` call. This omission prevents the server from closing the connection, leading to a hang.

## Solution
The `serverSolution.js` file provides the corrected code.  Adding `res.end()` properly signals the end of the response, resolving the hang issue. 

## How to Reproduce
1. Clone this repository.
2. Run `node server.js`.
3. Make a request to `http://localhost:3000`.  Observe that the server hangs.
4. Run `node serverSolution.js`.
5. Make a request to `http://localhost:3000`.  Observe that the server responds correctly.

## Lessons Learned
Always remember to call `res.end()` in your Node.js HTTP response handlers to properly close the connection and prevent unexpected behavior.