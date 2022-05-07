// document.getElementById("input_submit").addEventListener("click",(e)=>{
//     e.preventDefault(); 
//     const name = document.querySelector("#input_name").value
//     const email = document.querySelector("#input_email").value
//     // const gender = document.querySelector("#input_gender").value
//     let gender = $('input[name="gender"]:checked').val()

//     console.log(gender)

// let users = 
//     {   
//         name,
//         email,
//         gender
//     }


//     //var a = localStorage.getItem('usersData');
//     //console.log(users);
//     //JSON.parse
//     //users.push(users);
//     let incominguserdata = JSON.parse(localStorage.getItem('usersData'));
//     console.log(incominguserdata,"incominguserdata")
//     if(incominguserdata == null){
//         incominguserdata = []
//         localStorage.setItem("usersData",JSON.stringify([]))
//     }
//     var arr = incominguserdata;
//     console.log(arr)
//     if(arr != 'null' && arr != ''){
//         arr.push(users);
//     }else{
//         arr = [users];
//     }
    
    
    
//     localStorage.setItem('usersData',JSON.stringify(arr));
    
    
//     const incominguserdatas = JSON.parse(localStorage.getItem('usersData'))

//     let html = "";

//     incominguserdatas.forEach(element => {
//         html += `<tr>
//         <td>${element.name}</td>
//         <td>${element.email}</td>
//         <td>${element.gender}</td>
//         <td></td>
//       </tr>`
//     }); 
//     $("#tbody").html(html);
//     //console.log(incominguserdata);
    
// }) 

