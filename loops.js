function forLoop(array) {
    for(var i = 0; i < 25; i++) {
     var oneStrangeLoop = "I am 1 strange loop.";
     var strangeLoops = "I am " + i + " strange loops.";
     
      if (i === 1) {
      array.push(oneStrangeLoop);
    }
     else {
      array.push(strangeLoops);
    }
 }
 return array;
}

function whileLoop(n){

  while (n > 0){
    console.log(--n);
  }
  return 'done'
}