// React events are named using camelCase, rather than lowercase.
// With JSX you pass a function as the event handler, rather than a string.


// For example, the HTML:

<button onclick="activateLasers()">
  Activate Lasers
</button>


// is slightly different in React:

<button onClick={activateLasers}>
  Activate Lasers
</button>