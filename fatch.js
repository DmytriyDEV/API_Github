const searchUser = document.querySelector(".searchUser");
const params = new URL(document.location).searchParams;
const login = params.get("login");

const img2 = document.querySelector(".img2");

const urlRepos = api + login + "/repos";

// ? paint user

const showContent = (data) => {
  const title = document.createElement("h2");

  const aboutUserDiv = document.createElement("div");
  aboutUserDiv.classList.add("aboutUserDiv");

  const fotoDiv = document.createElement("div");
  fotoDiv.classList.add("fotoDiv");

  const fotoUser = document.createElement("img");
  const nameUser = document.createElement("h1");
  const emailUser = document.createElement("p");

  const locationUser = document.createElement("p");
  const folowersUser = document.createElement("p");
  const folowingUser = document.createElement("p");

  const row = document.createElement("div");
  const row2 = document.createElement("div");
  row2.classList.add("row2");

  const titleDown = document.createElement("p");
  const inp = document.createElement("input");

  titleDown.textContent =
    "Yhis is their biolography. It many bo long end needs to all fit";
  inp.placeholder = `Search for ${data.public_repos} Repositories`;

  titleDown.classList.add("titleDown");
  inp.classList.add("inp");

  title.textContent = "GitHub Search";
  fotoUser.src = data.avatar_url;
  nameUser.textContent = "User name " + data.login;

  emailUser.textContent =
    data.email === null ? "user dont have email" : data.email;

  if (data.location === null) {
    locationUser.textContent = "user dont have location";
  } else {
    locationUser.textContent = data.location;
  }

  folowersUser.textContent = "fllowers " + data.followers;
  folowingUser.textContent = "following " + data.following;
  row2.append(titleDown, inp);
  fotoDiv.append(fotoUser);
  row.append(nameUser, emailUser, locationUser, folowersUser, folowingUser);
  aboutUserDiv.append(fotoDiv, row);
  searchUser.append(title, aboutUserDiv, row2);
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
    .finally(() => {
      hidenLoading();
    });
};

const e = "size,  name, created_at , stargazers_count ,forks";

const showUserRepositories = (data) => {
  console.log(data);
  data.forEach((el) => {
    const elDiv = document.createElement("a");
    elDiv.classList.add("elDiv");
    elDiv.href = data

    const lfDiv = document.createElement("div");
    lfDiv.classList.add("lfDiv");
    const size = document.createElement("p");
    const elName = document.createElement("p");
    const createAt = document.createElement("p");
    const trDiv = document.createElement("div");
    trDiv.classList.add("trDiv");
    const countSt = document.createElement("p");
    const forks = document.createElement("p");



    size.textContent = "Size: " + el.size;
    elName.textContent = "User name: " + el.name;
    createAt.textContent = "Date of create acount: " + el.created_at;
    countSt.textContent = "Text: " + el.stargazers_count;
    forks.textContent = "Text: " + el.forks;

    lfDiv.append(size, elName);
    trDiv.append(createAt, countSt, forks);

    elDiv.append(lfDiv, trDiv);

    searchUser.append(elDiv);
  });
};

const fetchRepost = () => {
  return fetch(urlRepos)
    .then((response) => {
      // console.log(response);
      if (response.ok === false) return Promise.reject("Some Error");
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      showUserRepositories(data);
    })
    .finally(() => {
      img2.classList.add("hidden");
    });
};

(function () {
  Promise.all([fetchUsers(), fetchRepost()]);
})();



const numberOfOccurrences = function(arr) {
const res = []
Object.keys(arr).sort().map(el => res.push([el,arr[el]]))
return res
}

// console.log(numberOfOccurrences([1,2,3,4,4,5,6,3,2,1,23,4,2]));
