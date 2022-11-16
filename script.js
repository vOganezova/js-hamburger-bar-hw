//form

const btn = document.getElementById('submitBtn');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const form = document.querySelector('form');
const list = document.getElementById('list');
const listWrapper = document.querySelector('.taskList');
let   clearList = '';




function clear(){
   clearList = document.createElement('button'); 
   if(list.getElementsByTagName('li').length === 1){ 
      
      clearList.innerText = '';
      clearList.innerText = 'Clear All';
      listWrapper.appendChild(clearList);
      clearList.addEventListener('click', (e)=>{
        list.innerHTML = '';
        e.target.remove();
     })
     }else if(list.getElementsByTagName('li').length === 0){
        clearList.remove();
     }else{
        clearList.addEventListener('click', ()=>{
           list.innerHTML = '';
        })
        
     }
}



form.addEventListener('submit', (e)=>{
   e.preventDefault();
   nameValue = nameInput.value;
   surnameValue = surnameInput.value;
   if(nameValue === '' || surnameValue === ''){
    return;
   }
  
   const li = document.createElement('li');
   li.textContent = `${nameValue} ${surnameValue}`;
   list.appendChild(li);

   clear();

   const icon = document.createElement('i');
   icon.className = "fa-circle-minus";
   icon.classList.add("fa-solid");
   li.appendChild(icon);

   

   icon.addEventListener('click', ()=>{
    li.remove();
    if(list.getElementsByTagName('li').length === 0){
      listWrapper.querySelector('button').remove();
    
   }
   
   })
   
   nameInput.value = '';
   surnameInput.value = '';
});



//hamburger bar

const nav = document.getElementById('navBar');
const toggler = document.querySelector('.nav-toggler');

toggler.addEventListener('click', ()=>{
nav.classList.toggle('show');
toggler.classList.toggle('change');
})





