fetch("https://api.dictionaryapi.dev/api/v2/entries/en/goblin")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });