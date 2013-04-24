package com.akoolatv.tools;

import java.net.URI;
import java.util.Scanner;

import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;

public class TVClient {
	// private Draft[] drafts = { new Draft_17(), new Draft_10(), new
	// Draft_76(), new Draft_75() };
	private WebSocketClient cc = null;
	public TVClient(URI uri) {

		this.cc = new WebSocketClient(uri) {

			@Override
			public void onOpen(ServerHandshake handshakedata) {
				cc.send("actor=phone");
			}

			@Override
			public void onMessage(String message) {
				// TODO Auto-generated method stub

			}

			@Override
			public void onClose(int code, String reason, boolean remote) {
				// TODO Auto-generated method stub

			}

			@Override
			public void onError(Exception ex) {
				// TODO Auto-generated method stub

			}
		};
		
		this.cc.connect();
	}

	public void close() {
		if (this.cc != null)
			this.cc.close();
	}

	public void send(String value) {
		if (this.cc != null)
			this.cc.send(value);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		try {
			TVClient c = new TVClient(new URI("ws://127.0.0.1:8890"));
			Thread.sleep(3000);
			
			while(Boolean.TRUE) {
				Scanner s = new Scanner(System.in);
				String content = s.nextLine();
				c.send("msg=" + content);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
