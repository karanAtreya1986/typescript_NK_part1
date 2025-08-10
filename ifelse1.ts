if(true){
    console.log('pass') //pass
}
else{
    console.log('fail') //Unreachable code detected.ts(7027)
    //always store the variable evaluating condition outside the if.
    //else chances of getting unreachable code if that block doesnt run.
}