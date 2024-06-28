//1 Create  a function  that  takes two  numbers  as arguments  and  returns  their  sum.
const addition = (num1, num2) => num1 + num2;
console.log(addition(-3, -5));

//2 Write  a function  that  takes  an integer ,inutes and  converts  it to  seconds.

function convert(minute) {
  let seconds = minute * 60;

  return `${seconds}second`;
}
console.log(convert(5));

//3 Create  a function  that  takes the  age in years  and  returns  the age in days.

function calcAge(age) {
  return age * 365;
}
console.log(calcAge(65));

//4 Make a function “nameString”.  The code should concatenate a passed string name with string 'Edabit' and store it in a variable called result and retutn it

function nameString(name) {
  return name + "Edabit";
}
console.log(nameString("Jaco"));

//5 Create  a function  that  returns true when num1 is equal to num2; otherwise return false
function isSameNum(num1, num2) {
  return num1 === num2;
}
console.log(isSameNum(2, "2"));

//6 what will bw the output and why
//ktpi varTest-i jamank ktpi 1,1
//heto kmtni letTest kmtni if heto ktpi 2,if-ic khelni kuzena vor console.log() enq uzum anel y bayc y chka error isn't defined

//7 What would be the outputs  and  explain why?
//ktpi undefined u error vor uzumenq assingemt anenq befor initialization

//8 What would be the outputs  and  explain why?
//ktpi 2 ev 3 vorovhetev b in talisenq a-i arjeqy aysinqn 2 heto myus toxum b++ enq anum arjeqy  mekov mecacnum enq:

//9 What would be the outputs  and  explain why?
// ktpi erkusnel nuynu [1,2,3,4] vorovhetev iranc pointery nuynna

//10 What would be the outputs  and  explain why?
// skzbum ktpi nuyn array-y vorovhetev irarenq havasarecrel heto b-in lrriv urish linkov nor arr-enq talis dra hanar ktp [1,2,3] u [4,5,6]

//11 What would be the outputs  and  explain why?
// ktpi [1,2,3,4] , [4,5,6,7] [1,2,3] vorovhetev funkction-in menq arjeqnenq talis voch te a-n

//12 What would be the outputs  and  explain why?
// tpelua 42 vorovhetev object-y reference-type-a

//13 What would be the outputs  and  explain why?
//ktpi 10 ,11 vortev menq erb grum enq y = x copy-enq anum arjeqy talis y-in

//14What would be the outputs  and  explain why?
//2 nel ktpi 1,2,3,4 vorovhetev pointer-y nuyyna

//15What would be the outputs  and  explain why?
//ktpi [1,2,3],[4,5,6] vorovhetev menq 3rd toxum pointerynenq poxum

//16 What would be the outputs  and  explain why?
//poxveluya arjeqy newValue

//17 What would be the outputs  and  explain why?
// tpelua [4,5,6,7],[1,2,3,4] vortev skzbum nuyn arr-in push enq anum 4 heto nor arr-enq stexcum

//18 What would be the outputs  and  explain why?
//
//tpelua 99

//19 What would be the outputs  and  explain why?

//tpelua 6 u 5 vortev primitive type-a u menq function-um ra arjeqnenq talis

//20 What would be the outputs  and  explain why?
//ashxatelua tpelua 8 vortrev functionn-ery bolory baci function expression-ic hoisting en linum

//21 What would be the outputs  and  explain why?
//tpelua 20

//22 What would be the outputs  and  explain why?
// undfined 'bar' vortev skzbum functionn-a hoisting linum bayc ban chi veradardznum

//23 What would be the outputs  and  explain why?
// bar vorovhetev skzbum function-y hoisting klni heto var-y

//24 What would be the outputs  and  explain why?

//undefined 100 u error vorovhetev var - y hoisting linuma bayc undefined-a arjeqy isk let-y voch

//25 What would be the outputs  and  explain why?
//ktpi undefined u error klni vorovhetev minchev haytararely uzumenq ogtagorcel

//26 What would be the outputs  and  explain why?
console.log(1 + "2"); //12 vorovhetev '2' sarquma tiv
console.log("5" - 3); //2 sarquma tiv '5'-y
console.log("10" * "2"); //20 2nel sarquma tiv
console.log("10" / "2"); // 5 erkusnel sarquma tiv
console.log("10" * "a"); // NaN a-n porcuma sarqi tiv tenc chi limum Not a Number
console.log(true + false); // 1 true-1,false-0
console.log(!"hello"); // false hello-n true-a bayc ! jsxtumenq true-hakarak-y false
console.log(!!0); //false 0-n falsy-a
console.log(!!1); // true 1-y truthy
console.log(!!""); //false ''datark string-y falsy
console.log(!!" "); //true ' ' datark chi
console.log(Number("123")); // 123 sarquma tiv
console.log(Number("123abc")); //NaN tenuma a-n a-nel tiv chi kara lini
console.log(Number(true)); // 1 true-1
console.log(Number(false)); //0 false-0
console.log(Number(null)); //0 null-0
console.log(Number(undefined)); //NaN porcuma undefined-sarqi number chi kara tenc lini
console.log(String(123)); // '123' sarquma string
console.log(String(true)); // 'true' sarquma string
console.log(String(false)); //'false'sarquma string
console.log(String(null)); //'null' sarquma string
console.log(String(undefined)); // 'undefined' sarquma string
