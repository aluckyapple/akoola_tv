package com.akoolatv.tools;

import java.net.InetSocketAddress;
import java.util.HashMap;

import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import android.util.Log;

import com.akoolatv.utils.StringUtils;

public class TVServer extends WebSocketServer{
	private HashMap<String, WebSocket> connectionsMap = new HashMap<String, WebSocket>();
	private String conn_key = "";
	
	public TVServer(int port) {
		super(new InetSocketAddress(port));
	}
	
	public TVServer(String hostname, int port) {
		super(new InetSocketAddress(hostname, port));
	}
	
	public TVServer(InetSocketAddress address) {
		super(address);
	}

	@Override
	public void onOpen(WebSocket conn, ClientHandshake handshake) {
		Log.i("---", 
				conn.getRemoteSocketAddress().getAddress().getHostAddress() + ":"
				+ conn.getRemoteSocketAddress().getPort()
				+ " connected!" );
		StringBuilder sb = new StringBuilder()
		.append(conn.getRemoteSocketAddress().getAddress().getHostAddress())
		.append(":").append(conn.getRemoteSocketAddress().getPort());
		connectionsMap.put(sb.toString(), conn);
	}

	@Override
	public void onClose(WebSocket conn, int code, String reason, boolean remote) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onMessage(WebSocket conn, String message) {
		// Initial
		if(message != null && message.contains("HELLO")) {
			this.conn_key = new StringBuilder()
			.append(conn.getRemoteSocketAddress().getAddress().getHostAddress())
			.append(":").append(conn.getRemoteSocketAddress().getPort()).toString();
		} else {
			conn.close();
		}
	}

	@Override
	public void onError(WebSocket conn, Exception ex) {
		
	}
	
	public void send(String message) {
		if(message != null) {
			WebSocket conn = this.connectionsMap.get(this.conn_key);
			if(conn != null && !conn.isClosed())
				conn.send(message);
		}
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		new TVServer("127.0.0.1", 8890).start();
	}

}
