const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];


const list = document.createElement("ol");
list.style.listStyleType = "none";
users.forEach((element) => {
    const listItem = document.createElement("li")
    let name = `${element.firstName} ${element.lastName}`;
    listItem.appendChild(document.createTextNode(name));
    listItem.setAttribute("data-id",element.id);
    list.appendChild(listItem);
    document.body.appendChild(list);
});