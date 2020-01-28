function infected(s) {

    let array = [];
    let ans = 0;



    if(s.length == 0){
        return ans;
    }
    for (let i = 0; i < s.length; i++) {
        while(s[i] !== "X"){
            array.push(s[i])
        };


        if(array.length > 0){
            array.forEach(item = () =>{
                if(item === "1"){
                    ans = ans + array.length
                }
            })
        };

        if(s[i] === "X"){
            s.splice(s[i], s[0]);
        };
        
    }

}



infected("000010X0100XX");
