function addItem(parent){
    console.log("Add Item Function triggered")

    let newItem = document.createElement('li');
    let inp = document.createElement('input');
    let text = document.createElement('span');

    //checked.setAttribute('type','checkbox');
    inp.setAttribute('class', 'item');

    //text.textContent = 'New Item';

    parent.appendChild(newItem);
    newItem.appendChild(inp);
    newItem.appendChild(text);

    newItem.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            addText(inp, text);
        }
    })
}

function addText(chil1, chil2){
    console.log("Add text function triggered")

    chil2.textContent = chil1.value;
    chil1.setAttribute('type', 'checkbox');
}

console.log("Successfully added script to page")

let but1 = document.getElementById('butt1');
const list = document.getElementById('itList');

but1.addEventListener('click', () => {
    addItem(list);
});