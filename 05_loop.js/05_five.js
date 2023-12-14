
//const coding = ["js", "ruby", "java", "python", "cpp"]

//coding.forEach((item) => {
//    console.log(item);
//}) this is normal but what if we want to store item in a variable


//const values = coding.forEach((item) => {
//    console.log(item);
//   return item // op = undefined .. for each deosnt return any value in this case
//})
//console.log(values); 


//++++ FILTER ++++//

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]

 const newNums = myNums.filter((num) => num > 4) // here {} scope is not used to no need to write return
 console.log(newNums); // op = [5 6 7 8 9 10]

 // In filter method we get callback function = (num) where all values each is accessed
 // and then you have to give the condition (num > 4) and those values that satisfies the condition those values will be returned
 

 const myVal = [1, 2, 3, 4, 5, 6, 7, 8, 9]

 let NewVal = myVal.filter((num) => { // so when you use {} curly bracket in filter then you start a scope
    return num > 3  // so you have to write return here to get the values thata re greater than 3
 })
 console.log(NewVal) // op = [4 5 6 7 8 9]


 // for the same work if we want to use the for each

 const newVal = []

 myVal.forEach( (num) => {
    if (num > 7) {
        newVal.push(num)
    }
 })
 console.log(newVal);  // op = [ 8 9]

 const newTag = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



 // ex

//newTag.forEach((num) => {
//   if (num < 5 ){
//        console.log(num);
//   }

// })
// console.log(newTag);


// exercise

const books = [

    {title: 'book one' , genre: 'fiction', publish: 1990 , edition: 2000},

    {title: 'book two' , genre: 'non-fiction', publish: 1991 , edition: 2001},

    {title: 'book three' , genre: 'history', publish: 1992 , edition: 2002},

    {title: 'book four' , genre: 'non-fiction', publish: 1993 , edition: 2003},

    {title: 'book five' , genre: 'science', publish: 1994 , edition: 2004},
    
    {title: 'book six' , genre: 'fiction', publish: 1995 , edition: 2005},

    {title: 'book seven' , genre: 'non-fiction', publish: 1996 , edition: 2006},

    {title: 'book eight' , genre: 'science', publish: 1997 , edition: 2007},

    {title: 'book nine' , genre: 'history', publish: 1998 , edition: 2008},

    {title: 'book ten' , genre: 'fiction', publish: 1999 , edition: 2009},

];
//const userBooks = books.filter( (bk) => bk.genre === 'fiction' ) // op = output will be all fiction books


let userBooks = books.filter( (bk) => bk.genre === 'fiction' )

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "non-fiction" }) // so book seven is onlyt non-fiction so it is the output

//userBooks = books.filter ( (bk) => {
//    return bk.edition >= 2006 && bk.genre === "fiction" // op = book ten
//})


console.log(userBooks);


