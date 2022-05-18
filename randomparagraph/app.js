//lorem text
const text = [
    `We are living in an era where predatory monopolies are intensified, governments are over-expanded, and personal agency is weakened. Global social turmoil is at an all-time high. From the Occupy Movement, Black Lives Matter and the "Great Resignation" in the United States to the "Laying Flat" mentality in China, we have found that in this global, technocratic, money-worshipping, and ultra-pragmatic system, more and more people are losing faith in their value as an individual.`,
    `land in 2015 with some heavy questions on his mind: "What kind of life is really worth living? Is there any other option for human life aside from the modern grind of forced busyness, manipulation by online advertisements, and hatred and violence generated and directed by those who form public opinion? `,
    `Can we find a way to make human life return to its former graceful and dignified pace, make it encourage inquiring, independent thinking, peaceful communication, mutual respect and philosophical exchange, and connection to the divine source of ‘the human calling’?"To find the answers, He traced the growing dysfunction of humankind’s alienation by examining the rise and fall of the world’s great civilizations and their religious, philosophical, economic and political histories.`,
    `Anyone shopping for quality, natural skin care has many options, but customized serums are becoming the product of choice for those seeking fast, effective and individualized treatments for a range of skin health and beauty concerns.The BABOR skin care product line, developed in 1956 in Germany by biochemist Dr. Michael Babor, has an established reputation of science-based skin care. Each item in the company’s latest line of Power Serum Ampoules is designed with advanced-strength active ingredients to address specific skin issues quickly and effectively with precision single doses of targeted ingredients.`, 
    `It’s a common question: can I wear my contact lenses during the COVID-19 pandemic? New research led by the Centre for Ocular Research & Education (CORE) is helping the billions of people who rely on contact lenses or glasses take care of their eyes, dispelling coronavirus myths.Dr. Lyndon Jones, CORE’s director and the world’s most-published expert in contact lens research, offers these valuable tips for healthy vision.1.`,
    ` As loved ones begin to age, many will take on the honorable role of becoming a caregiver. However, caring for an older adult can be time-consuming, reducing the ability to address your own needs. In fact, Home Instead Senior Care found that 63 percent of family caregivers said caring for their aging loved ones made it more difficult to care for themselves.With this in mind, Home Instead encourages caregivers to take a minute to recognize and embrace their own feelings and needs. It can be difficult to watch your aging parent or loved one go through the trials of getting older without it taking a toll on your own health. It’s natural to feel anxious, guilty or sad as a family caregiver.`,
    `Summer is in full swing, but there’s still time to plan a relaxing staycation or backyard soiree while the evenings are warm and clear. To make the most of your family and friends time, look around your outdoor space to see if the existing lighting works properly and enhances the ambiance.`,
    `Some of your favorite accessories are the ones you reach for again and again, those items that are portable, easy, and convenient. When shopping for accessories for everyday use, special events, or travel, several factors stand out. The following tips will help you identify accessories that will make your life easier.`,
    `TheAllAboutBassC days of seeing someone walking down a road with a stick, some string and a bucket of worms  are as much a part of American culture as hot dogs, baseball and warm apple pie. Since that time, anglers now have many choices this summer, depending on where they’ll be fishing.`,
    `What if Grandma’s cookbook could talk? What if lost recipes could be recovered and safeguarded for posterity? What if delectable treats from the past and present were readily accessible? The new DishtoryApp mixes it all together and makes it possible!Nothing tells a family’s history like the food they share and the dishes they prepare together, so Ohio natives and longtime friends Chris Kozak and Dan Zawisza created Dishtory.It is the first mobile app to provide a platform for culinary artists, aspiring chefs and home cooks to record, save and share family memories through text, photo, audio, and video — all in one place — forever. More than a meal, Dishtory provides sensory memory of the tastes and aromas that deserve to be preserved.`
    
];

const form = document.querySelector('.randomparagraph');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = parseInt (amount.value);
    const random = Math.floor(Math.random() * text.length);
    //console.log(value); 
    
    //empty
    //negative;-1
    //morethan 9 >9
    if(isNaN(value) || value <= 0 || value > 9 ){
        result.innerHTML = `<p class="result">${text[random]}</p>`
    }
    else{
        let tempText = text.slice(0 ,value)
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        })
        .join("");
        result.innerHTML = tempText;
        //console.log(tempText)
    }

});
