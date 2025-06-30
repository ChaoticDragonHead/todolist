//Functions
//Note - all functions have a console.log line at the top to verify that the function has been called. This is for testing purposes
function addItem(parent){
    console.log("Add Item Function triggered")

    //Created new id to assign to new item
    let newId = ids.length + 1;

    //Creates the elements to be added - newItem is the parent that will hold the other items such as the input, text, and button
    let newItem = document.createElement('li');
    let inp = document.createElement('input');
    let text = document.createElement('span');

    let rem = document.createElement('button');

    //Assigned new id to newitem and added it to ids array for storage
    newItem.setAttribute('id', newId.toString());
    ids.push(newId.toString());

    //Delete button creation and added event listener for a click so that I can establish additional functions. The button is not rendered by the browser until an entry is fully added.
    rem.textContent = "Delete Item"
    rem.addEventListener('click', () =>{
        removeItem(newItem, text.textContent);
    });
    rem.setAttribute('class', 'delete_hid');

    inp.setAttribute('class', 'item');

    //Add the list item to the list and all children to the list item

    parent.appendChild(newItem);
    newItem.appendChild(inp);
    newItem.appendChild(text);
    newItem.appendChild(rem);

    //This event must be added to the parent element otherwise it is much more difficult to access the various children.
    newItem.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            addText(inp, text, rem, newId.toString());
        }
    });
}

function addText(chil1, chil2, butt, id){
    console.log("Add text function triggered");

    chil2.textContent = chil1.value;
    //Adds item to values array
    values.push(
        {id: id, value: chil1.value}
    );

    chil1.setAttribute('type', 'checkbox');
    butt.setAttribute('class', 'delete');

    //Prints vlaues length and items
    console.log(values.length);
    for(i in values){
        console.log(values[i]);
    };

    localStorage.setItem("todos", values);
}

function removeItem(parent, textVal){
    console.log("Remove Item Function triggered");
    //Removes the parent element of the rem button, allowing for the deletion of entries
    parent.remove();
    
    console.log(textVal); //Logs value to be removed, for testing

    for(i in values){
        if(values[i] == textVal){

        }
    }
}

function darkMode(){
    //Dark mode switch function - changes the CSS class of the body to dark vs light based on whether the checkmark is checked or not
    console.log("Dark mode switch function triggered")
    if (darkCheck.checked == true){
        body.setAttribute('class', 'dark');
    }
    else {
        body.setAttribute('class', 'light');
    }
}

function addStore(target, textInp){
    //Function to adjust the local storage value for various inputs - used for both the test and the list. Test values in localStoreTest.js
    console.log("add storage function triggered");
}

//console.log line to verify that script is functioning on the web page, used for troubleshooting and testing
console.log("Successfully added script to page")

//Sets array of values for storing values of list, and ids array for storing item ids
let values = [];
let ids = [];

//Establishes the button to add items as well as the list to add items to. 
let but1 = document.getElementById('butt1');
const list = document.getElementById('itList');

//Adds the first list item so that the user can begin typing their first entry. This is done to make things a little more intuitive for the user
addItem(list);

//Event listener for click event. Added blank function so that I can pass arguments into the function itself. The function breaks if you add in any arguments without having this blank, buffer function.
but1.addEventListener('click', () => {
    addItem(list);
});

//Dark mode switch - see the .dark in CSS. 
let body = document.querySelector('body');
let darkCheck = document.getElementById('darklight');
darkCheck.addEventListener('click', ()=>{
    darkMode();
});