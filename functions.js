const addSong = (event) => {
    event.preventDefault();

    const Name = document.getElementById("Name").value;
    const Song = document.getElementById("Song").value;
    const Artist = document.getElementById("Artist").value;

    const add = document.createElement("p");
    add.textContent = Name + "-" + Song + " by " + Artist; //puts the textContext (name, song, artist) into add

    const list = document.querySelector("#songList");

    list.appendChild(add);
}

const nextSong = (event) => {
    event.preventDefault();

    const list = document.querySelector("#songList");
    if (list.firstChild) 
    {
        list.removeChild(list.firstChild);
    } 
    else 
    {
        alert("No more songs in the queue.");
    }
}

