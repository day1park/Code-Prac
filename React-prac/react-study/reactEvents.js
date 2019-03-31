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


// cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>



// In React, this could instead be:
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}