const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

//Creating server side instance
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

//Calling cors as a function through app object
app.use(cors());

//Declaring server side port (It can be an environment variable or default 5000) 
const PORT = process.env.PORT || 5000;

//Printing message on PORT 
app.get('/', (req, res) => {
	res.send('Running');
});

//Implementing sockets (connection between server and client) and different methods.
io.on("connection", (socket) => {
	//Emitting user id
	socket.emit("me", socket.id);

	//Disconnect method to broadcast that call has ended
	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	//callUser function accepts userToCall, signalData, from and name from frontend and emits the accepted data  to client
	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	//answerCall function accepts data and emits it to client
	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

//To check on which port the server is running (Displayed on terminal)
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));