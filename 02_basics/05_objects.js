// DE-STRUCTERING OF OBJECTS ... it can be of array also but now we focus on objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sabina"
}

//course.courseIndtructor

//const {courseInstructor} = course
//console.log(courseInstructor);  // op = sabina

// objects de structure here means now we can change the long courseInstructor to instructor and the output will be the same 

const {courseInstructor: instructor} = course
console.log(instructor);  // op = sabina

// api concept

// below is json so it shows error if we use : instead of ; in objects we use = : but since json has no const name it uses = ;

// in json keys is also as string ans value is also an string
//{
//    name: "salman",
//    price; "free",


//}

// sometimes you get api in array format
// most of the api are in the json format