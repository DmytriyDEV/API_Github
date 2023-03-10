const text = document.querySelector(".text");
const inp = document.querySelector("input");


const words = [
  {text : "hello"},
   {text : "robrt"},
   {text : "good"},
   {text : "Bad"},
   {text : "welmart"},
   {text : "Atb"},
   {text : "tor"},
   {text : "qwert"},
];






const textPain = (array) => {
  text.textContent = "";
  array.forEach((el) => {
    const p = document.createElement("p");
    p.textContent = el.text;
    text.append(p);
  });
};

textPain(words)

inp.oninput = (e) => {
  const val = e.target.value;
    
  const copyArr = words.filter((el) =>
    el.text.toLowerCase().includes(val.toLowerCase())
  );

  textPain(copyArr);
  console.log(copyArr);
};














// const words = [
//   "hello",
//   "robrt",
//   "good",
//   "Bad",
//   "welmart",
//   "Atb",
//   "tor",
//   "qwert",
// ];

// // const a = words.includes('atb');
// // const a = 'robert'.includes('')
// // console.log(a);


// const textPain = (array) => {
//   text.textContent = "";
//   array.forEach((el) => {
//     const p = document.createElement("p");
//     p.textContent = el;
//     text.append(p);
//   });
// };


// inp.oninput = (e) => {
//   const val = e.target.value;

//   const copyArr = words.filter((el) =>
//     el.toLowerCase().includes(val.toLowerCase())
//   );

//   textPain(copyArr);
//   console.log(copyArr);
// };


// textPain(words);
