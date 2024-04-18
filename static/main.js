let socket = new WebSocket("ws://localhost:5061")

socket.addEventListener("open", (event)=>{
    console.log('connect')
})

socket.addEventListener("message", (event)=>{
    console.log(event.data)
})