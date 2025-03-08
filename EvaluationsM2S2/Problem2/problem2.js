



let eventsJSON = {
    "events": ["login", "logout", "messageReceived"],
    "listeners": [
      { "event": "login", "callback": "greet" },
      { "event": "login", "callback": "logLogin" },
      { "event": "logout", "callback": "logLogout" }
    ],
    "user": {
      "name": "Alice"
    }
}

let eventsJS = JSON.parse(JSON.stringify(eventsJSON));

console.log(eventsJS);
  
  