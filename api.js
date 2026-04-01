// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


 async function   api(){
const r = await fetch("https://jsonplaceholder.typicode.com/users");
const b = await r.json();
console.log(b);
}
api();