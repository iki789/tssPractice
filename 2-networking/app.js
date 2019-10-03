function userTemplate(user) {
  return `
    <div class="media">
      <img src="${user.avatar}" class="mr-3" alt="${user.first_name} ${user.last_name}" width="54px" />
      <div class="media-body">
          <h5 class="mt-0">${user.first_name} ${user.last_name}</h5>
          <a href="mailto:${user.email}">${user.email}</a>
      </div>
    </div>
    `;
}

function printUsers(users) {
  users.map(user => {
    document.getElementById("users").innerHTML =
      document.getElementById("users").innerHTML + userTemplate(user);
  });
}

function fetchData() {
  const endpoint = "https://reqres.in/api/users?per_page=12";
  // TODO
  // Use fetch() to get data from the above endpoint
  // Display the data using printUsers() function
  // Hide the loader with id #loader
}

function init() {
  setTimeout(() => {
    fetchData();
  }, 1000);
}

init();
