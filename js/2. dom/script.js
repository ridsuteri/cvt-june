// console.log('hello from js')


// 1. accessing the elements
const paragraph = document.getElementById('paragraph')
const heading = document.getElementsByClassName('heading')
const img = document.getElementsByTagName('img')[0];
const div = document.getElementsByTagName('div')


// 2. change/manipulate the elements
paragraph.innerText = '[span] changed using js'
heading[0].innerHTML = '[heading] changed using js'

// 3. get properties like styles & attributes of elements
// div.style
img.getAttribute('src')


// 4. altering the properties like styles and attributes
img.setAttribute('alt', 'changed using js')



// create & append new elements
const a = document.createElement('a')
a.innerText = 'click here';
a.setAttribute('href', 'https://example.com')



document.body.appendChild(a);