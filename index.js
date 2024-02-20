// Example 1



// Example 2

function evenOrOdd(){
    for(i = 1; i < 21; i++){
        if(i% 2 === 0){
            console.log(i + "even")
        }
        else {
            console.log(i + "odd")
        }
        }
    }

// Example 3

// Example 4

// Example 5

function nestedLoop(){
    let output = '';
    for(i = 1; i <= 5; i++){
        for(j = 1; j <= i; j++){
            output += j + ' ';
        }
        console.log(output);
        output = ' ';
    }
}