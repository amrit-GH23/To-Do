let container=document.getElementById("list-container")
function addTask(){
    let input=document.getElementById('input-box')
    if(input.value===""){
       alert("Write something to add")
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=input.value
        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
        container.appendChild(li)
    }
    input.value=""
    savedata()
}


container.addEventListener("click",function(e){
    if(e.target.nodeName=="LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.nodeName=="SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
    }
)

function savedata(){
    localStorage.setItem("data",container.innerHTML);
}

function addData(){
     container.innerHTML=localStorage.getItem("data");
} 

addData()

