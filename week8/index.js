//this code runs synchronously
async function getRandomFact() {
    console.log(data.text, "\n")
    // console.log("showData function finished")
}

//this code runs asynchronously 
async function getTodaysFact() {
    const response = await fetch ("https://uselessfacts.jsph.pl//api/v2/facts/random")
    // console.log(response)
    const data = await response.json()
    console.log(data.text)
    // console.log("getData finished")
}

// getRandomFact()
getTodaysFact()

