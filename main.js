const user = document.getElementById("user");
const pass = document.getElementById("pass");
const submit = document.getElementById("submit");
const update = document.getElementById("update");
const read = document.getElementById("read");
const deleteAll = document.getElementById("deleteAll");
// const search = document.getElementById('search')
let allUsers = [];
update.style.display = "none";

submit.onclick = () => {
  if (user.value != "" && pass.value != "") {
    let oneUser = {
      username: user.value,
      password: pass.value,
    };
    allUsers.push(oneUser);
    user.value = "";
    pass.value = "";
    // console.log(allUsers);
    user.style.border = "solid lime 2px";
    pass.style.border = "solid lime 2px";
    setTimeout(() => {
      user.style.border = "solid #444 .7px";
      pass.style.border = "solid #444 .7px";
    }, 800);
    showData(allUsers);
    deleteAll.style.display = "block";
  } else {
    user.style.border = "solid red 2px";
    pass.style.border = "solid red 2px";
    setTimeout(() => {
      user.style.border = "solid #444 .7px";
      pass.style.border = "solid #444 .7px";
    }, 800);
  }
};
const showData = (allUsers) => {
  read.innerHTML = "";
  for (let i = 0; i < allUsers.length; i++) {
    read.innerHTML += `
            <div class="profile">
                <h3 id="title${i}">hello ${allUsers[i].username} this is your information =>(${i})</h3>
                <h4 id="user${i}">${allUsers[i].username}</h4>
                <h4 id="pass${i}">${allUsers[i].password}</h4>
                <div>
                <!--  --> <i style="color: blue;" onclick="updateData(${i})" class="fa-regular fa-pen-to-square"></i>
                <!--  --> <i style="color: red;" onclick="deleteData(${i})" class="fa-solid fa-trash"></i>
                </div>

            </div>
        `;
  }
};
let id;
const updateData = (f) => {
  user.value = allUsers[f].username;
  pass.value = allUsers[f].password;
  update.style.display = "block";
  submit.style.display = "none";
  id = f;
};
update.onclick = () => {
  allUsers[id].username = user.value;
  allUsers[id].password = pass.value;
  update.style.display = "none";
  submit.style.display = "block";
  user.value = "";
  pass.value = "";
  id = "";
  showData(allUsers);
};

function deleteData(d) {
  allUsers.splice(d, 1);
  showData(allUsers);
  if(allUsers.length == 0) deleteAll.style.display = "none";
}
function deleteAllData() {
  allUsers.splice(0, allUsers.length);
  showData(allUsers);
  deleteAll.style.display = "none";
}

function search(v) {
  v.toLowerCase();
  let arry = [];
  allUsers.map((u) => {
    if (u.username.includes(v)) {
      arry.push(u);
    }
  });
  showData(arry);
}
