const inp = document.querySelector("input");

const history = {}; //history
("123");
// {
//     a : 2,
//
//     s : 2,
//     d : 2,
//     q : 1
// }

const val = inp.value;

// let t = {
//   2: 2,
//   5: 1,
//   f: 4,
// };

inp.oninput = (e) => {
  //f
  if (history[e.data] === undefined) {
    history[e.data] = 1; //
  } else {
    history[e.data]++;
  }
};

const text = 'WwWw'
text[2].toLowerCase()
text[2]
// r = {
//     h : 1,
//     e : 2
// }

// let d = 'D'
// d.toLowerCase();
// console.log(d);

d = {
   w : 3
}


const countLimit = (word) => {
    const obj = {} 

    for (let i = 0; i < word.length; i++) {
        const str = word[i].toLowerCase()
        if (obj[str] === undefined) {   
            obj[str] = 1 
        } else {
            obj[str]++;
        }
            
    }

    console.log(obj);

   

}

// countLimit(text)


// const  rr = {
//     value : ''
// }

// const val2 = rr.value;

// let num = 12;
// let dd = num;
// num = 55;

// rr.value = 1231;

// console.log(val2);
