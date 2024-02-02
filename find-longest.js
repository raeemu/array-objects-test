const findLongestWord = (coll) => {
    let currentLongest = "";
      for (let i = 0; i < coll.length - 1; i += 1) {
          if (coll[i].length > coll[i+1].length) {
              currentLongest = coll[i];
          } else if (coll[i].length < coll[i+1].length) {
            currentLongest = coll[i+1];
          };
      }
      return currentLongest;
  };

console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"