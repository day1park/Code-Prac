// the standard DOM specifies that the getElementsByTagName method in the code below must return a list of all the <P> elements in the document:

var paragraphs = document.getElementsByTagName("P");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);

// will display an alert when the document is loaded (and when the whole DOM is available for use):
{
  /* <body onload="window.alert('Welcome to my home page!');"> */
}
