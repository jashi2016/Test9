const api_url= "https://jsonplaceholder.typicode.com/users";
async function getapidata(){
    const response=await fetch(api_url);
    var data=await response.json();
     
     display(data);
}


function display(data){
    r=data[0]
    let dis = `<h3>${r.name}</h3>
    <h3>${r.email}</h3>
    <h3>${r.address.city}</h3>
    <h3>${r.website}</h3>`;
    document.getElementById("data").innerHTML=dis;
}