//console.log("hello world")
//QUES 1
//let personName: string = "Eric"
//console.log(`Hello ${personName}, would you like to learn some python?`);
//QUES 2
//let personName: string= "IFFAT MUMTAZ";
//IN LOWERCASE
//console.log("lowercase:",personName.toLowerCase());
//IN UPPERCASE
//console.log("uppercase:",personName.toUpperCase());
//TITTLE CASE
//console.log("tittlecase:",personName.replace(/\b\w/g,c=>c.toUpperCase()));
//QUES 3
var quote = "A person who never make mistake never tried anything new.";
var author = "Albert Einstine";
console.log("".concat(author, " once said,\"").concat(quote, "\""));
//QUES 4
//let famous_person: string = "Albert Einstine";
//let quote: string= "A person who never make mistake never tried anything new."
//let message:string=`${famous_person}once said,"${quote}"`;
//console.log(message);
//QUES 5
//let personName:string="\t\n   Iffat Mumtaz   \n\t";
//console.log("original:", personName);
//console.log("stripped:" ,personName.trim());
//QUES 6
//console.log(2+6)
//console.log(10-2)
//console.log(2*4)
//console.log(16/2)
//QUES 7
//let favouriteNumber: number=10
//console.log(`My favourite number is ${favouriteNumber}.`);
//QUES 8
//Author:[IFFAT MUMTAZ]
//Date[TUE ,26, 2024]
//TASK 9:printing my fvourite number.
//let favouriteNumber: number=10
//Revealing my favourite number in a message formate.
//console.log(`My favourite number is ${favouriteNumber}.`);
//QUES 9
//let names: string [] = ["rida","hassan","affan","aleena"];
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//console.log(names[3]);
//QUES 10
// let names: string [] = ["rida","hassan","affan","aleena"];
// let message: string= "Do you like to play cricket?"
// console.log(names[0]+" "+ message)
// console.log(names[1]+" "+ message) 
// console.log(names[2]+" "+ message) 
// console.log(names[3]+" "+ message) 
//QUES 11
//let transportations: string[]=["honda motorcycle","audi","toyota"];
//transportations.map((items)=>console.log(`I would like to own a ${items}`));
//QUES 14
//let guestArr: string[]=["Ali","Hina","affan""iffat"];
//guestArr.map((items)=> (console.log(`Dear ${items} ,You are invited to the dinner`)));
//QUES 15
//let guestArr:string [] = ["Ali","Hina","affan" ,"iffat"];
//let canNotAttend: string = "iffat"
//console.log(canNotAttend +" " "cannot attend the dinner.")
//let newGuest:string="Alishba"
//guestArr[guestArr.indexOf(canNotAttend)]=newGuest;
//console.log(guestArr)
//guestArr.map((items)=>
//console.log(`Dear ${items},you are invited to the dinner.`)
//);
//QUES 16
//let guestArr: string[]=["ali","hina","Alishba","affan"];
//let canNotAttend:string="ali"
//let newGuest: string= "wajahat"
//guestArr[guestArr.indexOf(canNotAttend)]= newGuest;
//console.log(guestArr)
//guestArr.map((items)=>
//console.log(`Dear ${items}, I found a bigger dinner table so i am invited more people`)
//);
//part#2
//let guestBeg:string= "muizz"
//guestArr.unshift(guestBeg);
//console.log(guestArr)
//part# 3
//let middleGuest:string="fatima"
//let MiddleIndex = guestArr.length/3
//guestArr.splice(MiddleIndex,0,middleGuest)
//console.log(guestArr)
//part #4 append
//guestArr.push("zeeshan")
//console.log(guestArr)
//part#5
//guestArr.map((items)=>
//console.log(`Dear ${items}, who are invited in the more people list on dinner`));
//QUES 17
//let guests: string []=["fatima","zeeshan","muiz","wajahat"];
//console.log("Due to limited space, only two people can be invited for dinner.");
//  while (guests.length> 2) {
//      const removedGuest= guests.pop();
//      console.log(`sorry,${removedGuest},you are no longer invited to dinner.`);
//}
//printing 2 guests invite:--
// let guests: string[] = ["bilal", "jawed"];
//guests.forEach((guest) => {
//  console.log(`Dear ${guest}, you're still invited to dinner.`);
// });
//  guests.pop();
//   guests.pop();
//  console.log("Final guest list:",guests);
//QUES 18
//store the locations in an array
// let placesToVisit:string[]=["Tokyo","America","Pakistan","Saudia Arabia"];
// //ORIGINAL ORDER
// console.log("Original order:", placesToVisit);
// //ALPHABETIC ORDER WITHOUT MODIFYING THE ACTUAL LIST
// console.log("Alphabetic order:",[...placesToVisit].sort());
// //ARRAY IS STILL IN ITS ORIGINAL ORDER
// console.log("Original order after sorting:", placesToVisit);
// //REVERSE ALPHABETIC ORDER WITHOUT CHNGING THE ORDER
// console.log("Reverse alphabetical order:",[...placesToVisit].sort().reverse());
// //ARRAY IS STILL IN ITS ORIGINAL ORDER
// console.log("Original order after reverse sorting:",placesToVisit);
// //REVERSE THE ORDER OF THE LIST
// console.log("Reversed order:",placesToVisit);
// //REVERSED THE ORDER OF THE LIST AGAIN TO GET BACK TO THE ORIGINAL ORDER
// placesToVisit.reverse();
// console.log("Back to original order:",placesToVisit);
// //SORT THE ARRAY IN ALPHABETIC ORDER
// placesToVisit.sort();
// console.log("sorted in alphabetic order:",placesToVisit);
// //SORT THE ARRAY IN REVERSE ALPHABETICAL ORDER
// placesToVisit.sort((a,b)=>b.localeCompare(a));
// console.log("Sorted in reverse alphabetical order:",placesToVisit);
// QUES 19
// let invitation:string[]=["Ali","Bilal"];
// let count_invitation :number=invitation.length 
// console.log(`${count_invitation} people will come to the Dinner`);
// //QUES 20
// let country:string[]=["Pakistan","India","Newyork","Malaysia","China"];
// console.log("List of country:");
// console.log(country);
//QUES 21
// let person:{name: string, fname:string, age: number}={
//     name:"IFFAT",
//     fname:"female",
//     age:21,
// };
// console.log(person);
//QUES 22
// const days:string[]=["sunday","monday","tuesday","wednessday","thursday","friday","saturday"];
// //console.log(days{7});
// console.log(days[6]);
//QUES 23
// let car = "subaru";
//  console.log("is car =='subaru'?predict true");
//  console.log(car =='subaru');
//  console.log("is car != 'honda city'?predict true");
//  console.log(car !=  'honda city');
//  console.log("is car == 'Subaru'? predict false");
//  console.log(car == 'Subaru')
//  console.log("is car == 'SUBARU'? predict false");
//  console.log(car == 'SUBARU')
//  console.log("is car.length ==6? predict true");
//  console.log(car.length ==6);
//  console.log("is car.length ==6? predict true");
//  console.log(car.length != 10);
//  console.log("is 10> 45? predict false");
//  console.log(10 > 45)
//  console.log("is 3 <= 2 ? predict false");
//  console.log(3 <= 2);
//  console.log("is 72 > 83 ? predict false");
//  console.log(72 >= 83);
// console.log("is car == 'subaru'&& car.length==6?predict true");
// console.log(car == 'subaru'&& car.length == 6);
//QUES 24
// let name_1 :string = "Iffat";
// let name_2 :string = "Iffat mumtaz";
// let name_3 :string = "Miss Iffat mumtaz";
// if(name_1 == name_3){
//     console.log("names are equal")
// }else{
//     console.log("names are not equal")
//}
// if (name_1 != name_2){
//     console.log("names are equal")
// }else{
//     console.log("names are not equal")
// }
// if (name_1 != name_3){
//         console.log("names are equal")
//      }else{
//         console.log("names are not equal")
//      }
// let age_1:number = 21;
// let age_2:number=23;
// if (age_1 == 21){
//     console.log("eligibal for vote")
// }
//  if (age_1 != 23){
//      console.log("eligibal for vote for older category")
//  }
// if (age_1 <= age_2){  //less than
//     console.log("younger")
// }
// if (age_2 >= age_1){  //greater than
//     console.log("older")
// }
// if (age_1 == 21 && age_2 == 23){
//     console.log("person is eligible for vote")
// }
// if (age_1 == 21 || age_2 != 23){
//     console.log("person is not eligible for vote")
// }
// 
//  let country: string [] = ["pakistan", "india", "japan", "turkey"]
// // if (country.includes("pakistan")){
// //     console.log("pakistan is in country list")
// // }
// if (!country.includes("india")){
//     console.log("india is not include any array")
// }
//let country: string[] = ["pakistan", "india", "japan", "turkey"];
// if (country.includes("pakistan")) {
//     console.log("Pakistan is in the country list");
// }
//if (!country.includes("india")) {
//  console.log("India is not included in the array");
// }
////QUES 25
// let alien_color="green";
// if( alien_color =="green")
// console.log("you earn 5 points");
// No output show
// let alien_color: string="red";
// if( alien_color =="green")
// console.log("no output");
//QUES 26
//   let alien_color="green";
//   if( alien_color =="green"){
//     console.log("player just earned 5 points for shooting the alien")
//   }else{
//   console.log("player just earned 10 points")
//   };
//   let alien_color="red";
//   if( alien_color =="green"){
//     console.log("player just earned 5 points for shooting the alien")
//   }else{
//   console.log("player just earned 10 points")
//   };
//QUES 27
//   let alien_color:string ="red";
//   if( alien_color =="green"){
//     console.log("the players earned 5 points")
//   }else if( alien_color =="yellow"){
//   console.log("the player earned 10 points")
//   }else {
//     console.log("the player earned 15 points")
//   };
//QUES 28
//   let age:number = 100;
//   if(age < 2){
//     console.log("You are a baby")
//   }else if(age< 4){
//     console.log("You are a toddler")
//   }else if(age< 13){
//     console.log("You are a kid")
//   }else if(age< 20){
//     console.log("You are a teenager")
//   }else if(age< 65){
//     console.log("you are a adult")
//   }else{
//    console.log("You are older")
// };
//    QUES 29
// let fav_fruits:string[]=["kiwi","apple","banana","mango","berry","peach"]
// if (fav_fruits.includes("kiwi")){
//     console.log("kiwi")
//};
// if (fav_fruits.includes("banana")){
//   console.log("banana")
// };
// if (fav_fruits.includes("apple")){
//   console.log("apple")
// }; 
// if (fav_fruits.includes("berry")){
//   console.log("you really like bananas")
// };
// if (fav_fruits.includes("peach")){
//   console.log("you really like bananas")
// };
//QUES 30
// let users : string [] =["admin","hassan","affan","adnan","ali"];
// for (let user of users){
//   if(user === "admin"){
//     console.log("Hello admin, Would you like to see a status report? ")
//   }else {
//     console.log(`Hello ${user}, Thankyou for logging in again`)
//   }
//   };
//QUES 31
//  let users : string [] =["admin","hassan","affan","adnan","ali"];
//  if (users.length === 0){
//   console.log("we need to find some users!")
// }else {
// for(let user of users){
//   if (user === "admin"){
//   console.log("Hello admin, Would you like to see a status report?")
// }else{
//   console.log(`Hello ${user},Thankyou for logging in again`)
// }
// }
// }
// users = []
// if (users.length === 0){
//   console.log("we need to find some users!")
// };
//QUES 32
// let current_users : string [] = ["Admin","ali","affan","ayan","Hamzah"];
// let new_users : string [] = ["Admin","Hamzah","aliza","afifa","noor"];
// let current_users_lower : string [] =current_users.map(user=>user.toLowerCase());
// for(let new_user of new_users){
// if(current_users_lower.includes (new_user.toLowerCase())){
//   console.log(`Sorry ${new_user}, that name is taken`)
// }else{
//   console.log(`Yes ${new_user}, is still in available list`)
// }
// };
//QUES 33
// let numbers : number [] = [1,2,3,4,5,6,7,8,9];
// for (let number of numbers){
// if (number ===1){
//   console.log(` ${number}st`) ///1st
// }else if (number ===2){
// console.log(` ${number}nd`) ///2nd
// }else if (number ===3){
//   console.log(` ${number}rd`)///3rd
// }else{
//   console.log(` ${number}th`) /// 4th, 5th, 6th
// }
// };
//QUES 34
// let fav_pizza: string [] = ["fajita","pepperoni","chicken tikka"];
// for(let pizza of fav_pizza){
//   console.log(pizza)
// }
// console.log("\n");
// for(let pizza of fav_pizza){
//   console.log(` 1 really like ${pizza}pizza!`)
// };
// console.log("\n I really love pizza!");
//QUES 35
// let animals : string [] =["cat","dog","lion"];
// for (let animal of animals){
//   console.log(animal)
// }
// console.log("\n");
// for(let animal of animals){
//   console.log(`A ${animal} has a tail`)
// };
// console.log("\n All of these are great pets! but i love cats more");
//QUES 36
// function makeShirt(size: string, text:string) {
//   console.log(`\n you are order a ${size} shirt that says ${text}`)
// }
// makeShirt('large','"i love pakistan"')
// makeShirt('medium','"i need a big shirt"');
//QUES 37
// function makeShirt(size:string='Large',text:string='I love typescript'):void{
//   console.log(`you have order a ${size}, shirt that says ${text}`)
// }
// makeShirt();
// makeShirt('mediam');
// //different massage
// makeShirt('small','i need a big shirt to wear')
//QUES 38
// function describe_city(city:string, country:string='Pakistan'):void{
//   console.log(`${city} is in ${country}`)
// }
// describe_city('karachi')//default sentence
// describe_city('france','europe');
// describe_city('lahore','punjab');
//QUES 39
// function cityCountry(city:string,country:string):string{
//   return`${city}, ${country}`
// }
// let c1 = cityCountry('lahore','pakistan');
// let c2 = cityCountry('tokyo','japan');
// let c3 = cityCountry('paris','france');
// console.log(c1);
// console.log(c2);
// console.log(c3);
///QUES 40
//   function makeAlbum (artist :string, title: string): { artist: string; title: string} {
//     const dictionaries ={
//       artist:artist.charAt(0).toUpperCase() + artist.slice(1),
//       title: title.charAt(0).toUpperCase() + title.slice(1),
//     };
//     return dictionaries;
//   } 
//  let album= makeAlbum("Ali","Light")
//  console.log(album);
//   album= makeAlbum("Bilal","Red wave")
//  console.log(album);
///QUES 41
//  function show_magicians(magicians:string[]):void{
//   for (const magician of magicians){
//    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//   }
//  }
// const magician:string[]=["Ali","Hamza","Bilal"];
// show_magicians(magician);
///QUES 42
//   function make_great(magicians:string[]):void{
//    for (let i = 0; i < magicians.length; i++){     ////i stand for index string
//   magicians[i]= magicians[i] +  ' the great'
// }
// }
// const magicians2: string[]=["Ali","Hamza","Bilal"];
//make_great(magicians2)
// show_magicians(magicians2);
///QUES 43
//   function make_great2(magicians:string[]): string[] {
//     const greatMagicians:string[] = [];
//     for (let i = 0; i < magicians.length; i++) {     
//    greatMagicians.push(magicians[i] +  ' the Great');
//  }
//  return greatMagicians;
//  } 
//  const magicians3:string[] = ["Ali","Hamza","Bilal"];
// //////////////////////////////////////////////////////////////
//  const greatMagicians2: string[] = make_great2(magicians3);
//  show_magicians(magicians3);
//  show_magicians(greatMagicians2);
///QUES 44
// function sandwich(...items:string[]):void{
//   console.log("sandwich order:")
//   for (let i = 0; i < items.length; i++){
//     console.log(`_${items[i]}`)
//   }
// }
// console.log("Enjoy ur sandwich IFFAT MUMTAZ");
// sandwich('capsicum','chicken','olives');
// sandwich('beef','cheese');
// sandwich('mayo sauce','tomato');
///QUES 45
//  type car={
//manufacture:string;
//   model:string;
//   [key:string]:any;
//  }
//  function createCar(manufacture:string, model:string, optional:Record<string, any>):car {
//   return{
//     manufacture,
//     model,
//     ...optional
//   }
//  }
//  const mycar:car= createCar("toyota","corolla",{color:"silver",year:"2024"})
//  console.log(mycar);
