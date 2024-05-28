// document.getElementById('userForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();

    const name= document.getElementById('username').value;
    const email= document.getElementById('email').value;
    const phone= document.getElementById('phone').value;

    const userDetails= {
       username: name,
       email: email,
       phone: phone
    }

    const value= JSON.stringify(userDetails);

    localStorage.setItem('UserDetail', value);
showUserOnScreen(userDetails);
    
}
function showUserOnScreen(userDetails){
const parent= document.getElementById('userList');
const child= document.createElement('li');
const Delete = document.createElement('button');
Delete.textContent="Delete";
Delete.onclick = function(){
    deleteUser(userDetails);
    parent.removeChild(child);
}
const editButton = document.createElement('button');
editButton.textContent = "Edit";
editButton.onclick = function() {
    editUser(userDetails);
    parent.removeChild(child);
};
child.textContent= userDetails.username+ '-' +userDetails.email+ '-' + userDetails.phone;
child.appendChild(Delete)
child.appendChild(editButton)
parent.appendChild(child);

}

function deleteUser(userDetails) {
    let users = JSON.parse(localStorage.getItem('User Details')) 
 
}

function editUser(userDetails) {
    
    document.getElementById('username').value = userDetails.username;
    document.getElementById('email').value = userDetails.email;
    document.getElementById('phone').value = userDetails.phone;

   
    deleteUser(userDetails);
}