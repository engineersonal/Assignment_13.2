function getDataUserDetails(user){
    //GitHub API URL
    var url = "https://api.github.com/users/"+user;
    //Get the user details from GitHub for a given user using Fetch API
    fetch(url, {
        //GET request
        method: 'GET',
        //Content-type: application/json
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    //Convert the response into JSON
    .then(response => response.json())
    //Handle the response JSON data
    .then(data => {
        //Response Json data
        document.write(JSON.stringify(data));
    })
    //Catch the error
    .catch(error => document.write('error is', JSON.stringify(error)));
}

//Call the function for a given user
getDataUserDetails("engineersonal");