console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');


// timeout runs in milliseconds 



// the boilerplate code for an AJAX GET request using an XMLHttpRequest object.

const xhr = new XMLHttpRequest

const url = 'https://api-to-call.com/endpoint'

xhr.responseType = 'json'

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

xhr.open('GET', url);
xhr.send();




/* 

1.
First, we need to create the XMLHttpRequest object using the new operator. Save this object in a const called xhr.

Note: While the code will work regardless of how you name your variables, it is a common practice to name this object xhr.


2.
Next, save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string.

https://api-to-call.com/endpoint

3.
Set the responseType property of the xhr object to equal 'json'.

JSON is JavaScript Object Notation, which is how the response is going to be formatted.


4.
Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. Leave the function empty.


5.
In the code block of the function you created in the previous step, add this conditional statement:

if (xhr.readyState === XMLHttpRequest.DONE) {

}
The purpose of this conditional statement checks to see if the request has finished.

6.
In the code block of the conditional statement, return the response property of xhr.

To access the response property, we can use dot notation like so: xhr.response. This response will contain the data that we’re getting back from the request.

The syntax will look like:

return xhr.response;
7.
Below the function you created in the previous two steps, call the .open() method on the xhr object and pass it 'GET' and url as arguments.

.open() creates a new request and the arguments passed in determine the type and URL of the request.

The syntax will look like:

xhr.open('GET', url);
8.
On the following line, call the .send() method on the xhr object. Do not pass it any arguments.

Nice work! You've written the boilerplate code for an AJAX GET request using an XMLHttpRequest object.

*/