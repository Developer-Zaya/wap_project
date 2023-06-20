window.onload = function() {
    document.getElementById('login-btn').onclick = function(event) {
        event.preventDefault();
        login();
        console.log("login")
    }
}

async function login(){
    let result = await fetch('http://localhost:3000/users/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        })
    });
    if (result.status == 401){
        res = await result.json()
        alert(res.message);
    }else{
        
    }
}