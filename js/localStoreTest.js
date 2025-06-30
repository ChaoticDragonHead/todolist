//This JS file will be used to implement and test the localStorage solution for persistant ToDo items

console.log("Added LocalStorageTest to webpage successfully");

//functions
function addStore(target, textInp){
    //Function to adjust the local storage value for various inputs - used for both the test and the list
    console.log("add storage function triggered");
    localStorage.setItem("test", textInp);
    target.innerHTML = localStorage.getItem("test");
}

//Non-functions
let localTest = document.getElementById('locTest');
let testInp = document.getElementById('textStoreInp');
localTest.innerHTML = localStorage.getItem("test");

testInp.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            addStore(localTest, this.value);
        }
    });

    let clearBut = document.getElementById('clear');
clearBut.addEventListener('click', ()=>{
    localStorage.clear();
    localTest.innerHTML = localStorage.getItem("test");
})