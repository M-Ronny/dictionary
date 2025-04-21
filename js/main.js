document.querySelector('button').addEventListener('click', getDefinition)

function getDefinition() {
    const word = document.querySelector('input').value

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.word').innerText = data[0].word
      document.querySelector('.partOfSpeech').innerText = data[0].meanings[0].partOfSpeech
      document.querySelector('.synomyms').innerText = data[0].meanings[0].synonyms.join(', ')
      document.querySelector('.definition').textContent = ''
      
      data[0].meanings[0].definitions.forEach(obj => {
        const li = document.createElement('li')
        li.textContent = obj.definition
        document.querySelector('.definition').appendChild(li)
      })

      document.querySelector('.wordTwo').innerText = data[0].word
      document.querySelector('.speechTwo').innerText = data[0].meanings[1].partOfSpeech
      document.querySelector('.symTwo').innerText = data[0].meanings[1].synonyms.join(', ')
      document.querySelector('.defTwo').textContent = ''
      
      data[0].meanings[1].definitions.forEach(obj => {
        const li = document.createElement('li')
        li.textContent = obj.definition
        document.querySelector('.defTwo').appendChild(li)
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

