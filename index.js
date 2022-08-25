//Add your code here
function submitData(username, emailaddress) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        name: username,
        email : emailaddress
      })
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector("body").append(data.id)
    })
    .catch(error => {
        alert("SINA MAONI");
        console.log(error.message);
        document.querySelector("body").append(error.message)
    })
  }


