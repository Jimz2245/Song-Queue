const addSong = (event) => {
    event.preventDefault();

    const Name = document.getElementById("Name").value;
    const Song = document.getElementById("Song").value;
    const Artist = document.getElementById("Artist").value;

    const add = document.createElement("li");
    add.textContent = Name + "-" + Song + " by " + Artist; //puts the textContext (name, song, artist) into add

    const list = document.querySelector("#songList");

    list.appendChild(add);
}

const nextSong = (event) => {
    event.preventDefault();

    const list = document.querySelector("#songList");
    const current = document.querySelector("#songNow");

    const next = list.firstElementChild; // ensures we're targeting an actual element
    const currentItem = current.firstElementChild;

    if (next) 
    {
        if (currentItem) 
        {
            current.removeChild(currentItem); //removes the first child from songNow
        }
        current.appendChild(next); //moves the first child from songList to songNow
    } 
    else 
    {
        alert("No more songs in the queue.");
    }
}

const clearSongs = (event) => {
    event.preventDefault();

    const list = document.querySelector("#songList");
    const current = document.querySelector("#songNow");

    while (list.firstChild) {
        list.removeChild(list.firstChild); //removes all children from songList
    }

    while (current.firstChild) {
        current.removeChild(current.firstChild); //removes all children from songNow
    }
}

