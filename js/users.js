
// On page load, pull the users endpoint from https://jsonplaceholder.typicode.com/users using XHR
// Generate the table of users for #usersTable (include a button/link in the fourth column to let you view an individual record)
// If a button/link in the table is clicked, populate #userView with the full details of the user.
// (bonus points if you make it a nice form as if the user was editable)



// Helpers

function getEl(id){
    return document.getElementById(id);
}

let userInfo = [];



    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        userInfo = JSON.parse(this.responseText);
        console.log(userInfo);
    
        for(let i = 0; i< userInfo.length; i++){
            let userId = userInfo[i].id;
            let userName = userInfo[i].name;
            let userEmail = userInfo[i].email;

            let populate = `<td>${userId}</td> <td>${userName}</td> 
            <td>${userEmail}</td> <td><button type='button'>View</button></td>`;

            getEl('usersTable').innerHTML += populate;
        }
    
    
    
    }
        xhr.open('GET','https://jsonplaceholder.typicode.com/users' );
        xhr.send();
        
    


document.addEventListener('DOMContentLoaded', function(){



    
});


