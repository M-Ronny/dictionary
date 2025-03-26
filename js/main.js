document.querySelector('button').addEventListener('click', getDefinition)

function getDefinition() {
    const word = document.querySelector('input').value

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.word').innerText = data[0].word
      document.querySelector('.partOfSpeech').innerText = data[0].meanings[0].partOfSpeech
      document.querySelector('.definition').innerText = data[0].meanings[0].definitions[0].definition
      document.querySelector('.synomyms').innerText = data[0].meanings[0].synonyms.join(', ')
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

