const searchUser = document.querySelector(".searchUser");
const searshesRepos = document.querySelector(".searshesRepos");
const serchRepos = document.querySelector(".serchRepos");
const params = new URL(document.location).searchParams;
const login = params.get("login");
const img2 = document.querySelector(".img2");
const urlRepos = api + login + "/repos";

const store = {
  data: [],
};

// ? paint user

const showContent = (data) => {
  // const title = document.createElement("h2");
  // const contTop = document.createElement('div')
  // contTop.classList.add('contTop')

  const aboutUserDiv = document.createElement("div");
  aboutUserDiv.classList.add("aboutUserDiv");

  const contIMG = document.createElement("div");
  contIMG.classList.add("contIMG");
  const fotoUser = document.createElement("img");

  const leftDataMenu = document.createElement("div");
  leftDataMenu.classList.add("leftDataMenu");

  // fotoUser.classList.add('fotouser')
  const nameUser = document.createElement("h1");
  const emailUser = document.createElement("p");
  const locationUser = document.createElement("p");
  const folowersUser = document.createElement("p");
  const folowingUser = document.createElement("p");

  // const row = document.createElement("div");
  // const row2 = document.createElement("div");
  // row2.classList.add("row2");

  // const titleDown = document.createElement("p");
  // const inp = document.createElement("input");

  // titleDown.textContent = "Yhis is their biolography. It many bo long end needs to all fit";
  // inp.placeholder = `Search for ${data.public_repos} Repositories`;

  // titleDown.classList.add("titleDown");
  // inp.classList.add("inp");

  // title.textContent = "GitHub Search";
  fotoUser.src = data.avatar_url;

  nameUser.innerHTML = `name : <span>${data.login}</span>`;
  emailUser.innerHTML =
    data.email === null
      ? "user dont have email"
      : `email : <span>${data.email}</span>`;
  locationUser.innerHTML = data.location
    ? `location : <span>${data.location}</span>`
    : "user dont have location";
  folowersUser.innerHTML = `fllowers : <span>${data.followers}</span>`;
  folowingUser.innerHTML = `following : <span>${data.following}</span>`;

  // row2.append(titleDown, inp);
  // fotoDiv.append(fotoUser);
  // row.append(nameUser, emailUser, locationUser, folowersUser, folowingUser);
  // aboutUserDiv.append(fotoDiv, row);
  // console.log(searchUser);
  // searchUser.append( contTop); //! row2

  // contTop.append(aboutUserDiv)

  contIMG.append(fotoUser);
  leftDataMenu.append(
    nameUser,
    emailUser,
    locationUser,
    folowersUser,
    folowingUser
  );
  aboutUserDiv.append(contIMG, leftDataMenu);
  searchUser.append(aboutUserDiv);
};

// ? fetch
//4---4
const fetchUsers = () => {
  openLoading();
  return fetch(api + login)
    .then((response) => {
      if (response.ok === false)
        return Promise.reject({
          login: login,
          text: " - user no found ",
          status: response.status,
        });

      return response.json();
    })
    .then(showContent)
    .catch((error) => {
      if (error.status === 404)
        return (document.body.textContent = `Body 404: User ${error.login} is not find`);
      creatError("Error : " + error.status);
    })
    .finally(hidenLoading);
};

const creatRepos = (data) => {
  const reposC = document.querySelector(".reposC");
  reposC.textContent = "";
  data.forEach((el) => {
    const repos = document.createElement("div");
    repos.classList.add("repos");

    const name = document.createElement("a");
    name.textContent = el.name;
    name.href = el.html_url;

    const description = document.createElement("p");
    description.textContent = el.description
      ? el.description
      : "no description";
    description.classList.add("description");

    const reposData = document.createElement("div");
    reposData.classList.add("reposData");

    const size = document.createElement("p");
    size.innerHTML = `<span>${el.size}</span> bt`;
    const date = document.createElement("p");
    date.innerHTML = `created in - <span>${el.created_at}</span>`;

    reposData.append(size, date);

    const forks_count = document.createElement("p");
    forks_count.classList.add("forks_count");
    forks_count.innerHTML = `size forks : <span>${el.forks_count}</span>`;

    repos.append(name, description, reposData, forks_count);

    reposC.append(repos);
  });
};

const showUserRepositories = (data) => {
  const input = document.createElement("input");
  input.placeholder = "Search in " + data.length + " repos";
  input.classList.add("searchInput");

  const reposC = document.createElement("div");
  reposC.classList.add("reposC");

  serchRepos.append(input, reposC);
  creatRepos(data);
  input.oninput = (e) => {
    img2.classList.remove("hidden");
    const val = e.target.value;
    const newData = store.data.filter((el) => el.name.toLowerCase().includes(val.toLowerCase()));
    img2.classList.add("hidden");
    if (newData.length === 0) return (reposC.innerHTML = "<p class='noFindP' >repos not found '" + val + "'</p>");
    creatRepos(newData);
  };
};

const fetchRepost = () => {
  return fetch(urlRepos)
    .then((response) => {
      if (response.ok === false) return Promise.reject("Some Error");
      return response.json();
    })
    .then((data) => {
      store.data = data;
      showUserRepositories(data);
    })
    .finally(() => {
      img2.classList.add("hidden");
    });
};

(function () {
  Promise.all([fetchUsers(), fetchRepost()]);
})();
