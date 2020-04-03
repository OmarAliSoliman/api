// import axios from 'axios';
var api = document.querySelector('.api');
var getApi = document.querySelector('.get-api');
var selectBox = document.querySelector('.select-number')
// console.log(selectBox.value);
// console.log(api);

var users = [];
var value = 0;

async function getUser() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response;
}
getUser()
.then((response)=>{
  users = response.data;
});

selectBox.addEventListener('change', function(e){
  // console.log(e.target.value);
  value = e.target.value;
  console.log(value);
})

getApi.addEventListener('click', function(){
  api.innerHTML = '';
  for(var i=0; i<value; i++){
    // if(users[i].name.length > value){
      console.log(i);
      console.log(value);
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(users[i].name));
      api.appendChild(li);
      li.classList.add('color');
      const btn = document.createElement('button');
      btn.appendChild(document.createTextNode('view'));
      api.appendChild(btn);
    // }
  }
})
  