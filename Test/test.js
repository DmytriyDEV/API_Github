//  Type   -   Symbol

// == ===

// let var const

// var dog  = 'dog'
// var dog  = 'dog1'

// console.log(dog);
// var dog = 'AAAAA'

// null -
//

// split - String
// filter map slice reverce concat

//

// function checkArgg (){
//     console.log(arguments);
// }
// checkArgg(2, false,'hello')

const user = {
  name: null,
  age: undefined,
  isAdmin: false,
  pie: NaN,
  children: {
    name: null,
    age: undefined,
    isAdmin: false,
    pie: NaN,
    children: {
      name: null,
      age: undefined,
      isAdmin: false,
      pie: NaN,
      children: {
        name: null,
        age: undefined,
        isAdmin: false,
        pie: NaN,
        children: {
          name: "Alex",
        },
      },
    },
  },
};
//? 1 HW  full copi for spred (...);

// const a =  JSON.parse(JSON.stringify(user))
// console.log(a);

// methods function
// apply bind call

const alex = {
  name: "Alex",
  age: 123,
  // log : function(arg){
  //     console.log('Hello ' + this.name + ' !');
  //     console.log(arg);
  // }
};
const robert = {
  name: "robert",
  age: 90,
};

const changeUser = {
  changeName: function (str) {
    console.log((this.name = str));
  },
};

// const a = changeUser.changeName.bind(alex)
// a('Dida')
// alex.log()
// alex.log.bind(robert)('aasdasdasdas')
// const logRobert = alex.log.bind(robert)
// logRobert('эфыв')

// alex.log.call(robert,'asda')
// alex.log.apply(robert,['yuikl;,l;as,ld'])

// console.log(a);

// console.log(user.hasOwnProperty('age'));
// console.log('name' in user);

const word = "hello my name is work word";

const changeWord = (word) => {
  const str = [];
  const res = word.split(" ");

  res.forEach((el) => {
    // const a = el.split('').reverse()
    // str.push(a.join(''))
    str.push(el.split("").reverse().join(""));
  });

  return str;
};

const newWord = changeWord(word);

const dd = [1, 5, 8];

dd.join(); ///  1,5,8
dd.join(" "); ///  1 5 8
dd.join(" "); ///  1 5 8

const apiCoins = {
  back: "https://api.coingecko.com/api/v3/",
  pathname: "simple/price",
  _ids: ["bitcoin", "altcoin", "cardano", "solana", "tether"],
  _valutes: ["usd", "eth", "eur", "gbp", "inr"],
  searchParams: {
    ids: ["bitcoin", "altcoin", "solana"],
    valutes: ["eth", "eur", "gbp"],
  },
};

const creatGet = () => {
  const array = apiCoins.searchParams.valutes.map((el, i) => {
    // gbp 2

    if (apiCoins.searchParams.valutes.length - 1 === i) return el; // 2 === 2
    else return el + "%20";
  });
  console.log(array);
  // console.log(apiCoins.searchParams.valutes.join('%20'));

  // const url = apiCoins.back + apiCoins.pathname + 'price?valutes=' +
};
const myURL = creatGet(); // https://api.coingecko.com/api/v3/simple/price?valutes=eth%20eur%20gbp&ids=bitcoin%20altcoin&20solana

// console.log(newWord);
// "hello my name is work word"
// "olleh ym eman si krow drow

//1 ) change str in arr [hello, my, name is ..]
// 2) creat new Arra []
// 3) crat for for arr
// 4) push in new array
//   4.1) word change ar

const _ids = ["bitcoin", "altcoin", "cardano", "solana", "tether"];








const arr3 = _ids.map((cript, i) => {
 switch(cript.length){
  case i - 1 : return 'last - 1';
  case i  : return 'last';
  case i + 1 : return 'add + last';

  default : i
 }
}); // [undefined undefined undefined undefined undefined]
// console.log(arr3);

const arr4 = _ids.map((cript, i) => {
  
 switch(_ids.length){
  case i - 1 : return 'last - 1';
  case i  : return 'last';
  case i + 1 : return 'add + last';

  default : i
 }
}); // [undefined unicodeBidi ass last]

// console.log(arr4);




const arr5 = _ids.map((cript, i) => {
 switch(i){
  case i - 1 : return 'last - 1';
  case i  : return 'last';
  case i + 1 : return 'add + last';

  default : i
 }
}); // []


const arr6 = _ids.map((cript, i) => {
 switch(cript.length){
  case i - 1 : return 'last - 1';
  case i  :  'last';
  case i + 1 : return 'add + last';

  default : return i
 }
}); // [01234]
console.log(arr6);


const arr7 = _ids.map((cript, i) => {
 switch(i){
  case i - 1 : return 'last - 1';
  case i  : return 'last';
  case i + 1 : return 'add + last';

  default : i
 }
}); // []



const arr8 = _ids.map((cript, i) => {
 switch(i){
  case i - 1 : return 'last - 1';
  case i  : return 'last';
  case i + 1 : return 'add + last';

  default : return i
 }
}); // [0 1 2 3 4]
;








const arr9 = _ids.map((cript, i) => {
  
 switch(i){
  case i - 1 : return 'last - 1';
  case i :  'last';
  case i + 1 : return 'add + last';

  default : return i
 }
}); // []


const arr10 = _ids.map((cript, i) => {
  
 switch(cript + i){
  case i - 1 : return 'last - 1';
  case i :  'last';
  case i + 1 : return 'add + last';

  default : return i
 }
}); // []



const arr11 = _ids.map((cript, i) => {
 switch(cript.length + i){
  case i - 1 : return 'last - 1';
  case i :  'last';
  case i + 1 : return 'add + last';

  default : return i
 }
}); // []

const arr12 = _ids.map((cript, i) => {
 switch(cript.length + i){
  case i - 1 : return 'last - 1';
  case i : return 'last';
  case i + 1 : return 'add + last';

  default : return i
 }
}); // []



console.clear()

const _nums = [10,6,2,90,12,22,321,4,1]

const fun1 = (arr) => {
  let a = arr[0]// 2 
  for(const elem of arr){ // nums 
    console.log(a); // ?
    if(a < elem) return a = elem // 2 > 1
  }
}

// fun1(_nums)


const array = [4,true,[5,5],'ok',6,12,'hello',865,'asdas',true,[1,2,3],12,345]

const beautyArray = arr => arr.sort((a,b)=>{
  switch (typeof b) {
    case 'number': return 5   
    case 'boolean': return 6  
    case 'string': return 7
    case 'object': return 8
  }
})

// const arrayNum = []
// const arrayStr = []
// const arrayBol = []
// const arrayArr = []

// arr.forEach(el => {
//   switch (typeof el) {
//     case 'number':arrayNum.push(el); break;   
//     case 'boolean': arrayBol.push(el); break;   
//     case'string': arrayStr.push(el);  break; 
//     case 'object': arrayArr.push(el); break;  
//   }
// })

// const res = [...arrayNum,...arrayBol,...arrayStr,...arrayArr]


// return res
// const array = []


// arr.forEach(el => {
//   if (typeof el === 'number') array.push(el)
  
// })
// arr.forEach(el => {
//   if (typeof el === 'boolean') array.push(el)
  
// })
// arr.forEach(el => {
//   if (typeof el === 'string') array.push(el)
  
// })
// arr.forEach(el => {
//   if (typeof el === 'object') array.push(el)
  
// })


// return array

const newArray = beautyArray(array) ; //[4,6,12,865,12,345, true ,true,'ok','hello','asdas',[5,5],[1,2,3]]
console.log(newArray);






