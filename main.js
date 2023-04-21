let select = document.querySelector('select')
const btn = document.querySelector('button')


function getOps(){
 
  fetch(`/api/Allcharacters`)
  .then(response => response.json())
  .then((data) =>{
    console.log(data);
    let keys = Object.keys(data)

 for (let i = 0; i < keys.length; i++){
      let option = document.createElement('option');
      option.innerText = keys[i];
      select.appendChild(option);
    }

  });
}
getOps()

function getChar(){

  let userSelection = select.value
  console.log(userSelection)

  fetch(`/api/${userSelection}`)
  .then(response => response.json())
  .then((data) =>{
    console.log(data);
  document.querySelector('.character').innerText = data.name
  document.querySelector('.charImg').src = data.portrait
  document.querySelector('.archeType').innerText = data.archetype
  document.querySelector('.bnb1').innerText = data.bnbNotation.Bnb1
  document.querySelector('.video').src = data.bnbVideos[0]


  
  })
  }
  
btn.addEventListener('click', getChar)