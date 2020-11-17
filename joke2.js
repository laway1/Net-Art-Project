const click = document.querySelector(".button")

const jokes = [
    "I broke my finger last week. On the other hand, I'm okay.",
    "I've got 99 problems. But, A glitch ain't one!",
    "why did the chicken cross the road? That's really only the chicken's business.",
    "what does a biologist wear on a first date? Designer genes!",
    "Why was the robot tired when it got home? It had a hard drive. ",
    "How do two snails fight? They slug it out.",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "You don't need a parachute to go skydiving. You need a parachute to go skydiving twice.",
    "You're never completely useless, you can always serve as a bad example.",
    "What happened when the strawberry attempted to cross the road? There was a traffic jam.",
    "I like telling Dad jokes. Sometimes he laughs!",
    "What did the '0' say to the'8'? Nice belt! ",
]

function getJoke() {
    let randomNumber = Math.floor(Math.random() * (jokes.length));
    document.getElementById('displayJoke').innerHTML = jokes[randomNumber];
}
click.addEventListener("click", getJoke);
