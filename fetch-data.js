async function fetchUserData(){
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    let userList = []
    users.forEach( usr => {
      userList.push(`<li> ${usr.name}</li>`);
    }
    )
    dataContainer.innerHTML = '';
    dataContainer.innerHTML = `<ul> ${userList.join('')} </ul>`;

  } catch (err) {
    console.error(`Fetching error: ${err}`);
  }
}

fetchUserData();