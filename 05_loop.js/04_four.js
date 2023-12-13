///+++++++ FOR EACH LOOP +++++////


const coding = ["js", "ruby", "java", "python", "cpp"]

//coding.forEach( function (item) {
//   console.log(item); // op = js ruby java python cpp

//})

// you can use arrow function also

coding.forEach( (item) => {
    console.log(item); // op = js ruby  java python cpp
})


function printMe(item){
    console.log(item);  // op = js ruby java python cpp
}

coding.forEach(printMe) // this is reference 


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
// OUTPUT is;

//js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

//item,index, array all is printed




///+++++++ OBJECTS INSIDE AN ARRAY ++++++///

const myCoding = [
    {
        languageName: "javascript",
        langaugeFile: "js"
    },
    {
        languageName: "java",
        langaugeFile: "java"
    },
    {
        languageName: "python",
        langaugeFile: "py"
    },
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
    console.log(item.langaugeFile);
})