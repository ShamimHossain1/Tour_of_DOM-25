// Where to add
const placesList = document.getElementById('places-list');

// What to be added

const li = document.createElement('li');
li.innerText = 'this was added'

// Add the child

placesList.appendChild(li)

// -----------------again------------
// What to be added

const li2 = document.createElement('li');
li2.innerText = 'this was added again'

// Add the child

placesList.appendChild(li2)


const sectionDress = document.createElement('section');
sectionDress. innerHTML = `
 <h1>My Dress section</h1>
 <ul>
    <li>T-shirt</li>
     <li>Lungi</li>
     <li>Sando genji/li>
</ul> `
mainContainer.appendChild(sectionDress);
