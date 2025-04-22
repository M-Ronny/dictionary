document.querySelector('button').addEventListener('click', getDefinition)

function getDefinition() {
    const word = document.querySelector('input').value

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      // document.querySelector('.word').innerText = data[0].word
      // document.querySelector('.partOfSpeech').innerText = data[0].meanings[0].partOfSpeech
      // document.querySelector('.synomyms').innerText = data[0].meanings[0].synonyms.join(', ')
      // document.querySelector('.definition').textContent = ''
      
      // data[0].meanings[0].definitions.forEach(obj => {
      //   const li = document.createElement('li')
      //   li.textContent = obj.definition
      //   document.querySelector('.definition').appendChild(li)
      // })

      // document.querySelector('.wordTwo').innerText = data[0].word
      // document.querySelector('.speechTwo').innerText = data[0].meanings[1].partOfSpeech
      // document.querySelector('.symTwo').innerText = data[0].meanings[1].synonyms.join(', ')
      // document.querySelector('.defTwo').textContent = ''
      
      // data[0].meanings[1].definitions.forEach(obj => {
      //   const li = document.createElement('li')
      //   li.textContent = obj.definition
      //   document.querySelector('.defTwo').appendChild(li)
      // })
      document.querySelector('.getDefinition').textContent = ''

      data[0].meanings.forEach(obj => {
        const div = document.createElement('div')
        const divTwo = document.createElement('div')
        const h2 = document.createElement('h2')
        const h2Two = document.createElement('h2')
        const ol = document.createElement('ol')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')

        p.classList.add('word')
        ol.classList.add('definition')
        h4.classList.add('partOfSpeech')

        h2.textContent = 'Word:'
        p.textContent = ' ' + data[0].word

        h4.textContent = obj.partOfSpeech

        h2Two.textContent = 'Definition:'
        obj.definitions.forEach(obj => {
          const li = document.createElement('li')
          li.textContent = obj.definition
          ol.appendChild(li)
        })
      
        document.querySelector('.getDefinition').appendChild(div)
        document.querySelector('.getDefinition').appendChild(h4)
        document.querySelector('.getDefinition').appendChild(divTwo)
        div.appendChild(h2)
        div.appendChild(p)
        divTwo.appendChild(h2Two)
        divTwo.appendChild(ol)

      })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

