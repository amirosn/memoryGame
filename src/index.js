document.addEventListener("DOMContentLoaded", () => {
  const cardsArray = [
    {
      name: "fries",
      img: "images/fries.png"
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png"
    },
    {
      name: "pizza",
      img: "images/pizza.png"
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png"
    },
    {
      name: "milkshake",
      img: "images/milkshake.png"
    },
    {
      name: "hotdog",
      img: "images/hotdog.png"
    },
    {
      name: "fries",
      img: "images/fries.png"
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png"
    },
    {
      name: "pizza",
      img: "images/pizza.png"
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png"
    },
    {
      name: "milkshake",
      img: "images/milkshake.png"
    },
    {
      name: "hotdog",
      img: "images/hotdog.png"
    },
  ]
  let cardsChosen = []
  let cardsChosenIds = []
  let cardsWon = []
  cardsArray.sort(()=> 0.5- Math.random())
  console.log(cardsArray)
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector("#result")
  function createBoard(){
    for(let i = 0; i < cardsArray.length; i++){
      const card = document.createElement("img")
      card.setAttribute("src", "images/blank.png")
      card.setAttribute("data-id", i)
      card.addEventListener("click", flipCard)
      grid.appendChild(card)
    }
  }
  createBoard()
  function flipCard(){
    let cardId = this.getAttribute("data-id")

    cardsChosen.push(cardsArray[cardId].name)
    console.log(cardsChosen)
    cardsChosenIds.push(cardId)
    this.setAttribute("src",cardsArray[cardId].img)
    if(cardsChosen.length === 2){
      setTimeout(checkForMatch, 500)
    }
    console.log(cardsChosenIds)
  }
  function checkForMatch() {
    const cards = document.querySelectorAll("img")
    if(cardsChosenIds[0] === cardsChosenIds[1]){
      alert("you have clicked the same image!")
      cards[cardsChosenIds[0]].setAttribute("src", "images/blank.png")
    } else if (cardsChosen[0] === cardsChosen[1]){
      alert("you have found a match!")
      cards[cardsChosenIds[0]].setAttribute("src", "images/white.png")
      cards[cardsChosenIds[1]].setAttribute("src", "images/white.png")
      cards[cardsChosenIds[0]].removeEventListener("click", flipCard)
      cards[cardsChosenIds[1]].removeEventListener("click", flipCard)
      cardsWon.push(cardsChosen)
      console.log(cardsWon)
    } else {
      cards[cardsChosenIds[0]].setAttribute("src", "images/blank.png")
      cards[cardsChosenIds[1]].setAttribute("src", "images/blank.png")
      alert("sorry try again!")
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === 6){
      resultDisplay.textContent = "Congrats"
    }
  }
})
