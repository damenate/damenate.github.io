
var randomFact = {
  "facts": [
    {"text":"I've raised a Black Bear, until he got too big."},
    {"text":"I was once a train conductor, Choo Choo!"},
    {"text":"I am the 2015 Arkansas Magic the Gathering State Champion."},
    {"text":"I trained my dog to catch fish."},
    {"text":"I backpacked Europe for a summer."},
    {"text":"I love swimming and ultimate frisbee!"},
    {"text":"I had an American wedding and a traditional Korean style one."},
    {"text":"I'm good friends with season 8 American Idol winner, Kris Allen."},
    {"text":"Someday I will hike the entire Appalachian Trail!"}
  ]
};

function generateRandomFact(first, last) {
  return Math.floor(Math.random() * (last - first + 1)) + first;
}

randomFactIndex = generateRandomFact(1, 9) - 1;
$("#fact-text").append( randomFact.facts[randomFactIndex].text );

$('#fact-button').on('click', function() {
  randomFactIndex = generateRandomFact(1, 9) - 1;
  $( "#fact-text" ).empty();
  $( "#fact-text" ).prepend( randomFact.facts[randomFactIndex].text );
});
