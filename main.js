form = document.getElementById("form");
loader = document.getElementById("loader");
cont = document.getElementById("main-content");

const api_url = 'https://shoujiki.herokuapp.com/send';

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