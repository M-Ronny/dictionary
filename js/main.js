document.querySelector('button').addEventListener('click', getDefinition)

function getDefinition() {
    const word = document.querySelector('input').value

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      console.log(data[0].meanings)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

