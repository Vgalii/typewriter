const sentence = "hello there from lighthouse labs \n";

for (let char = 0; char < sentence.length; char++) {
  let i = char;
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i);
  
}


