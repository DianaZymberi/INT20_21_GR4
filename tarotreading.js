function card(name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
}

var deck = [
    new card('Ace Of Pentacles','An opportunity to leave a well-worn and safe path to explore an aspiration could present itself. An offer of a new job, position, or special project enhaces finances as well as bringing a touch of magic to an ordinary day. The "go-ahead" for an action you have been considering.', 'AceOfPentacles'),
    new card('The Chariot', 'Never stop and go ahead to fight and overcome difficulties, more psychical and moral stability is needed to cope with situations.', 'ChariotMajor'),
    new card('Eight Of Pentacles', 'This is the time to improve the situation with money and earn. The risk should be avoided.', 'EightOfPentacles'),
    new card('The Emperor','The concentration of will power is needed to achieve the goal. It is needed to know how to defend yourself and your close people to reach success.','EmperorMajor'),
    new card('The Empress','The indecision must be overcome; the implementation of all the plans is ahead. There is a need to use this delay to find the right path, to discover the truth in any matter','EmpressMajor'),
    new card('Five Of Pentacles','There are going to be some hard times, and this is because of your possessiveness and fear of loss. Do not be afraid of failure, show strength!','FiveOfPentacles'),
    new card('The Fool','Make an important choice but think before you take the decision. Look at the truth and start acting intelligently. Change plans for more realistic.','FoolMajor'),
    new card('Four Of Pentacles','When getting a gift, it is better to think about rewarding a person who made it. This is not the best time to take decisions on money.','FourOfPentacles'),
    new card('The Hermit','The card points out of the need for calm reflection for some time.','HermitMajor'),
    new card('The Hierophant','Listen to the teacher or a wise person to succeed. It is recommended not to allow people to abuse the kindness of a person who asks the question, it will weaken him.','HierophantMajor'),
    new card('The Lovers','The choice should be done but here, the intuition must be used','LoversMajor'),
    new card('The Magician','Magician symbolizes the ability to conduct business, to understand and anticipate other people. A breakthrough waits for the person; everything he is going to do will be successful.','MagicianMajor'),
    new card('Nine Of Pentacles','No changes are needed. Plans must be forgotten. It is better to be more realistic.','NineOfPentacles'),
    new card('The Priestess','The future of you is uncertain, there is going to be doubt and an outcome that is coming is not known','PriestessMajor'),
    new card('Seven Of Pentacles','Any kinds of investments will bring profit now. It is not recommended to make investments now.','SevenOfPentacles'),
    new card('Six Of Pentacles','The period can be used to earn more. The break in business must be made.','SixOfPentacles'),
    new card('The Strength','It recommends not to be afraid of bostacles, and to face the arising difficulties bravely, without fear of anything.','StrengthMajor'),
    new card('Ten Of Pentacles','The time to take pleasure at the moment. It is recommended to refrain from finincial transactions.','TenOfPentacles'),
    new card('Three Of Pentacles','Any work will bring a good award.','ThreeOfPentacles'),
    new card('Two Of Pentacles','The time for some rest has come. This is the time to rest not to work.','TwoOfPentacles'),
    new card('The Wheel','It is needed to understand that the good stage in life has started. Take their advantages.','WheelMajor'),
];

function getRandom(num){
    var randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}

document.getElementById("draw").onclick = function(){
    var index = getRandom(21);
    var currentCard = deck[index];

    document.getElementById("display").innerHTML = '<img src="images/' + currentCard.image + '.jpg"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>';
}