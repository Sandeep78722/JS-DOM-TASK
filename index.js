
// Create an unordered list (<ul>) with five list items (<li>), each containing unique text. Append the <ul> to the <body>.
var ul = document.createElement('ul');

var h3 = document.createElement('h3');
h3.innerText = '1st answer'


var li_1 = document.createElement('li');
li_1.innerText = 'lorem';

var li_2 = document.createElement('li');
li_2.innerText = 'lipsum';

var li_3 = document.createElement('li');
li_3.innerText = 'contest';

var li_4 = document.createElement('li');
li_4.innerText = 'aliquam!';

var li_5 = document.createElement('li');
li_5.innerText = 'sequi';

ul.append(li_1, li_2, li_3, li_4, li_5);

document.body.append(h3);

document.body.appendChild(ul);


// Create a <div> element, and inside it, add a <p> element with some descriptive text. Append the <div> to the <body>.
var div = document.createElement('div');
div.className = 'texts'

var h3 = document.createElement('h3');
h3.innerText = '2nd answer'

var hr = document.createElement('hr')

var para = document.createElement('p');
para.innerText = 'answer-2'
para.innerText = 'all the animals, plants, rocks, etc. in the world and all the features, forces, and processes that happen or exist independently of people, such as the weather, the sea, mountains, the production of young animals or plants, and growth: her love of nature.'

div.append(hr,h3,para);

document.body.appendChild(div);


// Create a <div> containing a <h1> heading and a <p> paragraph, both with distinct text. Append the <div> to the <body>.
var div = document.createElement('div');
div.className = 'all_texts'

var h3 = document.createElement('h3');
h3.innerText = '3rd answer '

var hr = document.createElement('hr')

var h1 = document.createElement('h1');
h1.innerText = 'JavaScript'

var paragraph = document.createElement('p');
paragraph.innerText = 'JavaScript is a popular, high-level, dynamic scripting language primarily used to create interactive and dynamic web pages. It is commonly used as a client-side scripting language, meaning it runs in the browser.'

div.append(h1, paragraph);

document.body.append(hr, h3);

document.body.appendChild(div);


// Create a <table> element with a single row (<tr>) and three cells (<td>), each containing some text. Append the <table> to the <body>.
var table = document.createElement('table');

var h3 = document.createElement('h3');
h3.innerText = '4th answer '

var hr = document.createElement('hr')

var tr = document.createElement('tr');

var td1 = document.createElement('td');
td1.innerText = 'first';

var td2 = document.createElement('td');
td2.innerText = 'second';

var td3 = document.createElement('td');
td3.innerText = 'third';

tr.append(td1, td2, td3);

table.append(tr);

document.body.append(hr, h3);

document.body.appendChild(table);



// Create a <div> and append five <button> elements to it, each with unique text for the button label. Append the <div> to the <body>.

var div = document.createElement('div');

var h3 = document.createElement('h3');
h3.innerText = '5th answer '

var hr = document.createElement('hr')

var button1 = document.createElement('button');
button1.textContent = 'first-button';
button1.style.textAlign = ''

var button2 = document.createElement('button');
button2.textContent = 'second-button';

var button3 = document.createElement('button');
button3.textContent = 'third-button';

var button4 = document.createElement('button');
button4.textContent = 'fourth-button';

var button5 = document.createElement('button');
button5.textContent = 'fifth-button';

div.append(button1, button2, button3, button4, button5);

document.body.append(hr, h3);

document.body.appendChild(div);


