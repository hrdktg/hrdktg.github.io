form = document.getElementById("form");
loader = document.getElementById("loader");
cont = document.getElementById("main-content");
msgBox = document.getElementById("msgBox");
tyMsg = document.getElementById("tyMsg");
yourMsg = document.getElementById("yourMsg");

const api_url = 'https://shoujiki.herokuapp.com/send';

msgBox.style.display='none';
loader.style.display='none';
var ctMsg=0;

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    console.log('Form was submitted');

    const formData = new FormData(form);

    //Get name and msg from form
    const name = formData.get('name');
    const content = formData.get('msg');

    console.log([name,content]);

    const mdata = {
        name,
        content
    };

    //Send mdata to nodejs app as json data
    fetch(api_url, {
        method: 'POST',
        body: JSON.stringify(mdata),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res=>res.json())
      .then(createdData => {
          console.log(createdData, "recd on client");

          showMsg(createdData);

          ctMsg++;
          if(ctMsg>=3) {
              ctMsg=0;
              hideForm(); 
          }

          console.log(ctMsg, " current number of msg");
      })
      .catch(err=>{
          console.log(err, "Ooopsie");
      });
});

function showForm() {
    loader.style.display='none';
    cont.style.display="block";
}

function hideForm() {
    loader.style.display='block';
    cont.style.display="none";
    setTimeout(showForm, 10000);
}

function removeMsgBox() {
    msgBox.classList.remove("elemFadeIn");
    msgBox.classList.add("elemFadeOut");
    setTimeout(()=>{
        msgBox.style.display="none";
    }, 3000);
}

function showMsg(val) {
    msgBox.style.display="block";
    msgBox.classList.add("elemFadeIn");
    
    tyMsg.textContent = "Thank you "+val.name+" for your message !!";
    yourMsg.textContent = "Message - "+val.content;

    setTimeout(removeMsgBox, 3000);
}