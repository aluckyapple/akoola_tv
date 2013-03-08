var akoola_connection = {};

akoola_connection.remote = {};
akoola_connection.remote.handshake = "http://127.0.0.1/handshake.php";

/**
 *
 */
akoola_connection.getLanInetAddress = function() {
    var key_ip   = "IP";
    var key_port = "PORT";

    //First read from local db
    //Read from remote server
    if(localStorage[key_ip] == null 
        || localStorage[key_port] == null) {
            $.get(akoola_connection.remote.handshake,
                    function(data) {
                        localStorage[key_ip] = data[key_ip];
                        localStorage[key_port] = data[key_port];
                    });
    }
    akoola_connection.remote.ip   = localStorage[key_ip];
    akoola_connection.remote.port = localStorage[key_port];
    akoola_connection.remote.uri  = "ws://" + localStorage[key_ip] + ":" + localStorage[key_port];
};

try{
    var socket = new WebSocket("ws://127.0.0.1:8800");
    socket.onopen = function() {
        console.log("HELLO");
        socket.send("HELLO");
    };
    socket.onmessage = function(msg) { 
        console.log("Receive:" + msg.data);
    };
    socket.onerror = function(msg) {
        console.log("Error:" + msg);
    };
    socket.onclose = function(msg) {
        console.log("BYE at" + msg);
    }; 
}catch(e){
    console.log("ERROR："+e);
}
