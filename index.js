const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
 
function randomValueFromArray(array){
  const random = Math.floor(Math.random()* array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin",
"Big Daddy",
"Father Christmas"];

var insertY = ["the soup kitchen",
"Disneyland",
"the White House"];

var insertZ = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"];

randomize.addEventListener('click', result);
function result() {
    
    var newStory = storyText;
    
    let xItem = randomValueFromArray(insertX);
    
    let yItem = randomValueFromArray(insertY);
    
    let zItem = randomValueFromArray(insertZ);
    
    newStory = storyText.replace(/:insertx:/, xItem).replace(/:inserty:/, yItem).replace(/:insertz:/, zItem).replace(/:insertx:/, xItem);
    
    
    
     console.log(newStory);
    
  
        if(customName.value!='') {
              var name = customName.value;
      newStory = newStory.replace(/Bob/, customName.value); 
            
  }
    
   
   
    
    if(document.getElementById("uk").checked) {
    var weight = Math.round (300/14) + ' stone';
    var temperature =  Math.floor(Math.round(94-32)*5/9) + ' celsius';
    newStory = newStory.replace(/300 pounds/, weight);
    newStory = newStory.replace(/94 fahrenheit/, temperature);
        
    }   
    story.textContent = newStory;
    story.style.visibility = 'visible';
}