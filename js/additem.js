function addItem(){
    console.log("Add Item Function triggered")

    let newItem = document.createElement('li');
    let checked = document.createElement('input');
    let text = document.createElement('span');

    checked.setAttribute('type','checkbox');
    checked.setAttribute('class', 'item');

    text.textContent = 'New Item';

    list.appendChild(newItem);
    newItem.appendChild(checked);
    newItem.appendChild(text);
}

console.log("Successfully added script to page")

let but1 = document.getElementById('butt1');
const list = document.getElementById('itList');

but1.addEventListener('click', addItem);