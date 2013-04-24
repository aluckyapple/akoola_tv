var akoola = {};

akoola.remote = {};
akoola.remote.handshake = "http://akoola.sinaapp.com/handshake.php";

/**
 *
 */
akoola.getRemoteInetAddress = function() {
    var key_ip   = "IP";
    var key_port = "PORT";

    //First read from local db
    //Read from remote server
    if(localStorage[key_ip] == null 
        || localStorage[key_port] == null) {
            $.get(akoola.remote.handshake,
                    function(data) {
                        localStorage[key_ip] = data[key_ip];
                        localStorage[key_port] = data[key_port];
                    });
    }
    akoola.remote.ip   = localStorage[key_ip];
    akoola.remote.port = localStorage[key_port];
	if(akoola.remote.ip == null 
		|| akoola.remote.port == null)
		akoola.remote.uri  = null;
	else
		akoola.remote.uri  = "ws://" + localStorage[key_ip] + ":" + localStorage[key_port];
};

$(document).ready(function(
	akoola.getRemoteInetAddress();
	if(akoola.remote.uri != null) {
		akoola.socket = new WebSocket(akoola.remote.uri);
		akoola.socket.onopen = function() {
			console.log("HELLO");
			socket.send("HELLO");
		};
		akoola.socket.onmessage = function(msg) {
			console.log("Receive:" + msg.data);
		};
		akoola.socket.onerror = function(msg) {
			console.log("Error:" + msg);
		};
		akoola.socket.onclose = function(msg) {
			console.log("BYE at" + msg);
		}; 
	}
));
