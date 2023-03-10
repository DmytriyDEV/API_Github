const serx = JSON.parse(localStorage.getItem('stroke'))
const search = document.querySelector(".search");


search.oninput = (e) => localStorage.setItem('stroke',JSON.stringify(e.target.value))

search.value = serx

const getBTN = document.querySelector(".getBTN");
const lists = document.querySelector(".lists");

const clear = document.querySelector('.clear')

clear.onclick = () => {
  lists.textContent = ''
  localStorage.clear()
}

// gret HTML

const L_users = {
  get: () => JSON.parse(localStorage.getItem("users")),
  set: (data) => localStorage.setItem("users", JSON.stringify(data)),
};
let users = [];



// const getUsers = JSON.parse(localStorage.getItem('users'))

const drowNewUser = (user) => {
  // const setUsers = localStorage.setItem('users',JSON.stringify(user))

  const contUser = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const div = document.createElement("div");
  div.classList.add('div')
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  const aLink = document.createElement('a')

  aLink.href = `./user.html?login=`+user.login

  aLink.append(img)

  span1.textContent = "public_repos:" + user.public_gists;
  span2.textContent = "public_gists:" + user.public_repos;
  h2.textContent = 'User name:' + user.login;
  img.src = user.avatar_url;

  switch (user.site_admin) {
    case true:
      user.textContent = "Hello admin"; 
      break;
    case false:
      user.textContent = "You are not admin";
      break;

    default:
      user.textContent = "You are not admin";
  }

  contUser.classList.add("contUser");

  div.append(span1, span2, span3);

  contUser.append(aLink, h2, div);
  lists.prepend(contUser);
};

const fetchUsers = (value) => {
  if (value.trim() === '' ) return  creatError("input is ampty");
  if (users.includes(value)) return  creatError("error user axist");
   
  search.value = '';
  localStorage.removeItem('stroke');
  openLoading()
  
  // lists.classList.add("hidden");
  

  return fetch(api + value)
    .then((response) => {
      if (response.ok === false)
        return Promise.reject(value + " - user no found");
      return response.json();
    })
    .then((data) => {
      users.push(data.login);
      L_users.set(users);
      drowNewUser(data);
    })
    .catch((error) => {
      creatError(error);
    })
    .finally(() => {
      hidenLoading()
      // lists.classList.remove("hidden");
    })


};

const getUser = () => fetchUsers(search.value);

getBTN.onclick = getUser;

const start = () => {

  const arr = L_users.get();
  
  if (arr === null)  return
  users = arr;

  Promise.all(users.map((user) => fetch(api + user))).then((response) => {
    response.forEach((promis) => {
      if (promis.ok === false) return new Error("no get fetch");
      promis.json().then((user) => {
       
        drowNewUser(user);
      });
    });
  });
};
start();


search.onkeydown = (e) =>  {

  if (e.key !== 'Enter') return;
  getUser()
  
}

