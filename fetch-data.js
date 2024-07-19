async function fetchUserData(){
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    const userList = document.createElement("ul");
    users.forEach( usr => {
      let userName = document.createElement("li");
      userName.textContent = usr.name;
      userList.appendChild(userName);
    }
    )
    dataContainer.innerHTML = '';
    dataContainer.appendChild(userList);

  } catch (err) {
    console.error(`Fetching error: ${err}`);
    dataContainer.innerHTML = '';
  }
}

fetchUserData();