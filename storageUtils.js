const incominguserdatas = JSON.parse(localStorage.getItem('usersData'))
if(incominguserdatas){

    
    let html = "";
    
    incominguserdatas.forEach(element => {
        html += `<tr>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.gender}</td>
        <td></td>
        </tr>`
    });
    $("#tbody").html(html);
}



