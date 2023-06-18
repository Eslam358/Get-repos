// main variables
let the_Input   =  document.querySelector(".get-repos input");
let the_button  =  document.querySelector(".get-button");
let the_data    =  document.querySelector(".show-data");
let resp ;
the_button.onclick = function(){
  get_Repos();
}





// Get Repos function
function get_Repos() {
  if (the_Input.value == "") {
    the_data.innerHTML = "<span> No data to show.</span>";
  } else {
    fetch(`https://api.github.com/users/${the_Input.value }/repos`)
  .then(response =>{
    // console.log(response)
   return response.json()
  })
  .then(data =>{
    // console.log(data);
    resp = data;
    the_data.innerHTML="";
    data.forEach(respon => {
      //creat vid
    let divone = document.createElement("div");
    let divone_2 = document.createElement("div");
    let maintext =document.createTextNode(`${respon.name}`);
    divone.appendChild(maintext);
    divone.className = "mian_dive";
    //creat span
    let span_one = document.createElement("span");
    let text_span = document.createTextNode(`${respon.stargazers_count}`);
    
    span_one.appendChild(text_span);
    divone_2.appendChild(span_one);
    // creat link
    let link_a = document.createElement("a");
    let a_text = document.createTextNode("viset");
    link_a.href = respon.html_url;
    link_a.setAttribute("target", "_blank")
    link_a.appendChild(a_text);
    divone_2.appendChild(link_a);



    divone.appendChild(divone_2)
    the_data.appendChild(divone);




    });
    return data;
  }).catch(error=>{
    the_data.innerHTML = "<span> error.</span>";
  })
    
  }
}

