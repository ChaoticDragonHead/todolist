function addItem(parent){
    console.log("Add Item Function triggered")

    let newItem = document.createElement('li');
    let inp = document.createElement('input');
    let text = document.createElement('span');

    let rem = document.createElement('button');
    rem.textContent = "Delete Item"
    rem.addEventListener('click', () =>{
        removeItem(newItem);
    });
    rem.setAttribute('class', 'delete_hid');

    //checked.setAttribute('type','checkbox');
    inp.setAttribute('class', 'item');

    //text.textContent = 'New Item';

    parent.appendChild(newItem);
    newItem.appendChild(inp);
    newItem.appendChild(text);
    newItem.appendChild(rem);

    newItem.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            addText(inp, text, rem);
        }
    });
}

function addText(chil1, chil2, butt){
    console.log("Add text function triggered")

    chil2.textContent = chil1.value;
    chil1.setAttribute('type', 'checkbox');
    butt.setAttribute('class', 'delete');
}

function removeItem(parent){
    console.log("Remove Item Function triggered")

    /*
    This function is attached to the rem button. Rem is a child of the li newItem. newItem and all of its children must be deleted
    */
   parent.remove();
}

console.log("Successfully added script to page")

let but1 = document.getElementById('butt1');
const list = document.getElementById('itList');

addItem(list);

but1.addEventListener('click', () => {
    addItem(list);
});