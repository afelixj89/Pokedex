
const searchButton = document.querySelector(".submitButton");
const seachBarResults = document.querySelector("#pokName");




searchButton.addEventListener("click", function(e) {
    e.preventDefault();
    //console.log(searchBarLower)
    const searchBarValue = seachBarResults.value;
    const searchBarLower= searchBarValue.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${searchBarLower}`;
    console.log(searchBarLower)

    
        fetch(url)
            .then((res) =>{ 
              // console.log(res)
                return res.json();
    })
                    .then((data) => {
                        pokemon = data.results //results is the array that pulls the pokemon out from the res iterable
                        console.log(data)
                      });

    });
    

            