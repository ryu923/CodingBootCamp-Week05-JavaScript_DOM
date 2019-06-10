// Week05 - Lecture: JavaScript and the DOM

// DOM (Document Object Model)
// Represent the page in order to change the document structure, style, and content as nodes and objects.

// Slide 4: Accessing Elements in the Documents
document.getElementById('Some-ID');
document.getElementsByClassName('Some-CLASS');
document.querySelector('Specific-Selector-NAME'); // Get the first element that matches a specific selector
document.querySelectorAll('Specific-Selector-NAME'); // Get the list of all element that matches a specific selector

// Slide 5: Changing Element Properties
element.className = 'new-CLASS-NAME';
element.innerHTML = '<p>new-TEXT</p>';
element.setAttribute('href', 'http://google.ca');

// Slide 6: Creating Elements in the Documents
document.createElement('div');
element1.appendChild(element2); // Add a new element(element2) to specific element(element1)

// Slide 7: DOM Events
element.onload = myFuncion;
element.onclick = myFuncion;
element.onkeypress = myFuncion;
form.onSubmit = myFunction;
document.onScroll = myFunction;