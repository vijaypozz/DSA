<!-- “AWS API Gateway is a managed service that helps developers create and manage REST, HTTP, and WebSocket APIs at scale. It acts as a single entry point to your backend services, providing features like authentication, rate limiting, logging, and caching -->
<!-- 
Q. What is the Event Loop and its Workflow?
The Event Loop is the core mechanism in Node.js that allows it to perform non-blocking I/O operations — even though JavaScript is single-threaded.

It lets Node.js handle multiple tasks concurrently without creating multiple threads by offloading operations (like file I/O, network requests, DB queries) to the system kernel and processing callbacks asynchronously. -->


<!-- “The event loop in Node.js is a mechanism that handles asynchronous callbacks. It continuously checks the call stack and callback queues, pushing queued tasks into the stack when it’s empty. This allows Node.js to perform non-blocking I/O operations efficiently despite being single-threaded.” -->
Event Loop Workflow (Step-by-Step)

Here’s how it works behind the scenes:

🪣 Call Stack

Where your JavaScript code runs (synchronous code).

Example: variable declarations, loops, function calls.

📬 Event Table

Keeps track of asynchronous operations (like setTimeout, HTTP requests, file reads).

Once completed, their callbacks are sent to queues.

📥 Callback Queue / Task Queue

Stores callbacks from asynchronous operations that are ready to execute.

These are executed after the current call stack is empty.

🌀 Event Loop

Continuously monitors the call stack and the callback queue.

If the stack is empty, it pushes the first callback from the queue into the stack for execution.
┌──────────────────────────────┐
│        JavaScript Code       │
│ (your synchronous functions) │
└─────────────┬────────────────┘
              │
              ▼
      ┌───────────────┐
      │   Call Stack   │
      │  (executes JS) │
      └───────────────┘
              │
     Synchronous code runs first
              │
              ▼
┌──────────────────────────────┐
│      Event Table (Async Ops) │
│ setTimeout, HTTP requests,   │
│ file reads, DB queries, etc. │
└─────────────┬────────────────┘
              │
              ▼
     When async task completes
              │
              ▼
     ┌──────────────────────┐
     │  Callback Queue      │
     │ (pending callbacks)  │
     └──────────────────────┘
              │
              ▼
     ┌──────────────────────┐
     │     Event Loop       │
     │ (checks if stack is  │
     │ empty; pushes next   │
     │ callback to stack)   │
     └──────────────────────┘
              │
              ▼
       Executes callback
       back on Call Stack

-----------------------------------------------------------------------------------------------

data base related

ACID - Atomicity, Consistency, Isolation, and Durability. ACID is an acronym that refers to the set of 4 key properties that define a transaction
