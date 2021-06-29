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

            let populate = `<tr><td>${userId}</td> <td>${userName}</td> 
            <td>${userEmail}</td> <td><button id="${userId}" type='button'>View</button></td></tr>`;

            getEl('userList').innerHTML += populate;

           
        }
    
    }
        xhr.open('GET','https://jsonplaceholder.typicode.com/users' );
        xhr.send();

   


        getEl('userList').addEventListener('click', function(event){
            
            if(event.target.nodeName == 'BUTTON' ){
                console.log(event.target.id);
                let getId = event.target.id;

                

               
                let userxhr = new XMLHttpRequest();
                    userxhr.onload = function () {    
                    userInfo = JSON.parse(this.responseText);
                    let sideView = `<p>ID: ${userInfo.id} <br> Name: ${userInfo.name} <br> Email: ${userInfo.email}</p>`
                getEl('userView').innerHTML = sideView;
  
                };
                userxhr.open('GET','https://jsonplaceholder.typicode.com/users/'+getId );
                userxhr.send();
            
            
            }
            
        });

      


