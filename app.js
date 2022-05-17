const getRandomCard = () => {
    return (Math.floor(Math.random() * 11) + 1) //very simple way of getting random card
}

console.log(getRandomCard());