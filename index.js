document.getElementById('userForm').addEventListener('submit', handleFormSubmit);

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
child.textContent= userDetails.username+ '-' +userDetails.email+ '-' + userDetails.phone;
parent.appendChild(child);
}