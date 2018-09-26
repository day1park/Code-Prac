const p1 = <p id="large">foo</p>
const p2 = <p id="small">bar</p>

//assigning attributes




const myDiv = (
    <div>
        <h1>
            Hello World
        </h1>
    </div>
);

   //indentation 


   const blog = (
    <div>
        <img src="pics/192940u73.jpg" />
            <h1>
              Welcome to Dan's Blog!
            </h1>
        <article>
          Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
        </article>
    </div>
  );
   
  
  // fixing indentation



  import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
//To render a JSX expression means to make it appear onscreen. 



//ReactDOM - is a name of a JS library. contains React specific methods




import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));
//rendering, call out ReactDOM




// ~~~~~~~~~~~~app.js
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<span id="container"></span>, document.getElementById('container'));

//~~~~~~~~~~~~~~ index.html

/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <span id="container"></span>
	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html>


*/

// html page example





import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
	<ul>
    <li></li>
    <li></li>
  </ul>
);


ReactDOM.render(myList, document.getElementById('app'));
// don't forget to end with semicolon

