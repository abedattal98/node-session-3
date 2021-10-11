function login() {
var usernamevalue = document.getElementById('bodyuser')
var passwordvalue = document.getElementById('bodypassword')

var data = {"user":usernamevalue.value,"password":passwordvalue.value}

fetch
(
    'http://localhost:3000/login', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }            
)
.then(response => response.json())
.then(json => {
console.log(json)
    alert(json)
})

}