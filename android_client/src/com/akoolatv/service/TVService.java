package com.akoolatv.service;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;

import com.akoolatv.tools.TVServer;

public class TVService extends Service {
	private static final int PORT = 8890;
	private TVServer tvServer = null;
	private Boolean isRunning = Boolean.FALSE;
	
	@Override
	public IBinder onBind(Intent arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void onCreate() {
		super.onCreate();
		this.tvServer = new TVServer(PORT);
	}

	@Override
	public int onStartCommand(Intent intent, int flags, int startId) {
		if(!this.isRunning) {
			this.tvServer.start();
			this.isRunning = Boolean.TRUE;
		}
		else {
			String msg = intent.getStringExtra("msg");
			this.tvServer.send(msg);
		}
		return super.onStartCommand(intent, flags, startId);
	}

	@Override
	public void onDestroy() {
		try {
			this.tvServer.stop();
		} catch (Exception e) {
			e.printStackTrace();
		} 
		this.isRunning = Boolean.FALSE;
		super.onDestroy();
	}
}
