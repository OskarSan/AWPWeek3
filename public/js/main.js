
document.addEventListener('DOMContentLoaded', ()=>{
    const userform = document.getElementById("userForm")
    const getUsersButton = document.getElementById("getUsers")
    const userList = document.getElementById("userList")
    
    userform.addEventListener('submit', async (event)=>{


        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        console.log(name, email)

        const userData = await fetch('/users', {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
            
        })
        
        console.log(await userData.json())
    })

    getUsersButton.addEventListener('click', async (event) => {
        
        event.preventDefault();

        const userData = await fetch('/users')
        const usersJSON = await userData.json()

        console.log(usersJSON)
        usersJSON.forEach((user) =>{
            
            const listEntry = document.createElement('li');
            
            listEntry.textContent = `${user.name} - ${user.email}`
            userList.appendChild(listEntry)
            console.log(`${user.name}`)
        })

        


    })


})