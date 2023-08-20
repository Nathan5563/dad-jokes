const jokeContainer = document.querySelector("#jokecont")
const newjokebtn = document.querySelector("#btn")

const getdadjoke = async() => {
    const config = { headers: { Accept: "application/json"}};
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    return response.data.joke;
}

const newdadjoke = async() => {
    const joke = await getdadjoke(); 
    jokeContainer.innerHTML = joke;
}
newdadjoke();
newjokebtn.addEventListener("click", newdadjoke)