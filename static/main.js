const socket = io('http://localhost:3000');


const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")

function generationMapGrid(player, id){
    for (let i=0; i<100; i++){
        const div = document.createElement('div');
        div.className = `grid${id} ${i}`;
        player.querySelector('.map').append(div)
    }
}

function generationMapNamed(player, id){
    const word = "абвгдеёжзй".split("")
    const count = 10
    for (let i=1; i<=count; i++){
        const div = document.createElement('h3');
        div.className = `countOfGrid`;
        div.innerText=i
        player.querySelector(".countOfColumns").append(div)
    }
    for (let i of word){
        const div = document.createElement('h3');
        div.className = `nameOfGrid`;
        div.innerText=i.toUpperCase()
        player.querySelector(".nameOfRow").append(div)
    }
}


async function main(){
    generationMapGrid(player1, 1)
    generationMapNamed(player1, 1)
    generationMapGrid(player2, 2)
    generationMapNamed(player2, 2)
}

main()

socket.on('connect', function() {
    console.log('Connected');

    socket.emit('events', { test: 'test' });

    socket.emit('identity', 0, response =>
        console.log('Identity:', response),
    );

    socket.emit("connected", "fuck you", response=>
        console.log(response)
    )
});
socket.on('events', function(data) {
    console.log('event', data);
})

// socket.on('exception', function(data) {
//     console.log('event', data);
// })

socket.on('disconnect', function() {
    console.log('Disconnected');
});

