function card(name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
}

var deck = [
    new card('Ace Of Pentacles','You"ll have new financial beginnings, new job, new business, investmens, savings, prosperity, security, money, stability', 'AceOfPentacles'),
    new card('Chariot Major', 'It is time to retreat and reflect upon the situation and trust your intuition to guide you through it.', 'ChariotMajor'),
    new card('Eight Of Pentacles', 'A warning: rejection, sadness, loneliness, heartbreak, betrayal, separation or grief may be on the horizon.', 'EightOfPentacles'),
    new card('Empress Major','You have all the skills to accomplish your goals in life. You have the ability to succeed in all your ventures.','Empress Major'),
];

function getRandom(num){
    var randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}

document.getElementById("draw").onclick = function(){
    var index = getRandom(8);
    var currentCard = deck[index];

    document.getElementById("display").innerHTML = '<img src="images/' + currentCard.image + '.jpg"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>';
}