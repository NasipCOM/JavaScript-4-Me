/* function interview(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(`${name} can you tell us more about it`)
        }
    } else if (job === 'Teacher') {
        return function (name) {
            console.log(`${name} can you tell us more about Teachers`)
        }
    }
    else return function (name) {
        console.log(`${name} what do you do`)
    }
}

var teacherQuestion = interview('Teacher');
teacherQuestion('John');


interview('Teacher')('Mark'); */


// invoke functions


(function(name){
    console.log(name +  ' hello world');
}('Mark'));