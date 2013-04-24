package com.akoolatv.activity;

import java.util.ArrayList;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.CompoundButton.OnCheckedChangeListener;
import android.widget.ToggleButton;

import com.akoolatv.R;
import com.akoolatv.service.TVService;

public class MainActivity extends Activity {
	private ToggleButton btnStartService;
	private Button[] btns = new Button[10];
	private Intent intent;
	private static final String action = "http://akoola.sinaapp.com/handshake.php";
	private Timer timer = new Timer(true);
	private StringBuilder sb = new StringBuilder();
	private OnClickListener exitListener = new OnClickListener() {
		@Override
		public void onClick(View v) {
			MainActivity.this.finish();
			stopService(intent);
        	System.exit(0);
		}};

	private OnClickListener digitalListener = new OnClickListener() {
		@Override
		public void onClick(View v) {
			Button btn = (Button) v;
			String msg = (String) btn.getText();
			sb.append(msg);
			timer.cancel();
			timer.purge();
			timer = new Timer(true);
			
			TimerTask task = new TimerTask() {
				@Override
				public void run() {
					intent.putExtra("msg", sb.toString());
					startService(intent);
					//Toast.makeText(MainActivity.this, sb.toString(), Toast.LENGTH_SHORT).show();
					sb = new StringBuilder();
				} };
			//
			timer.schedule(task, 2000);
		}
	};

	private OnCheckedChangeListener startServiceListener = new OnCheckedChangeListener() {
		@Override
		public void onCheckedChanged(CompoundButton buttonView,
				boolean isChecked) {
			if (isChecked) {
				startService(intent);
				postData();
			} else {
				stopService(intent);
			}

			// Toast.makeText(MainActivity.this, getWirelessIP(),
			// Toast.LENGTH_SHORT).show();
		}

	};

	private void postData() {
		new Thread(new Runnable() {

			@Override
			public void run() {
				HttpPost httpRequest = new HttpPost(action);

				List<NameValuePair> params = new ArrayList<NameValuePair>();
				params.add(new BasicNameValuePair("ip", getWirelessIP()));
				params.add(new BasicNameValuePair("port", "8890"));
				Log.i("--", params.toString());

				try {
					httpRequest.setEntity(new UrlEncodedFormEntity(params,
							HTTP.UTF_8));
					HttpResponse httpResponse = new DefaultHttpClient()
							.execute(httpRequest);
					if (httpResponse.getStatusLine().getStatusCode() == 200) {
						String response = EntityUtils.toString(httpResponse
								.getEntity());
						Log.i("--", response);
					} else {
						Log.i("--", "Error");
					}
				} catch (Exception e) {
					e.printStackTrace();
				}

			}
		}).start();

	}

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);

		btnStartService = (ToggleButton) findViewById(R.id.btn_start_service);
		btnStartService.setOnCheckedChangeListener(startServiceListener);
		Button btnExit = (Button)findViewById(R.id.btn_top_left);
		btnExit.setOnClickListener(exitListener);
		
		

		btns[0] = (Button) findViewById(R.id.btn_zero);
		btns[1] = (Button) findViewById(R.id.btn_one);
		btns[2] = (Button) findViewById(R.id.btn_two);
		btns[3] = (Button) findViewById(R.id.btn_three);
		btns[4] = (Button) findViewById(R.id.btn_four);
		btns[5] = (Button) findViewById(R.id.btn_five);
		btns[6] = (Button) findViewById(R.id.btn_six);
		btns[7] = (Button) findViewById(R.id.btn_seven);
		btns[8] = (Button) findViewById(R.id.btn_eight);
		btns[9] = (Button) findViewById(R.id.btn_nine);
		for (Button b : btns) {
			b.setOnClickListener(digitalListener);
		}

		intent = new Intent(this, TVService.class);
	}

	@Override
	public void onBackPressed() {
		super.onBackPressed();
		if (intent != null)
			stopService(intent);
	}

	@Override
	protected void onDestroy() {
		super.onDestroy();
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		
		return true;
	}
	
	@Override
	public boolean onMenuItemSelected(int featureId, MenuItem item) {
		switch (item.getItemId()) {
		case R.id.about:
			Intent aboutIntent = new Intent(MainActivity.this,
            		AboutActivity.class);
			MainActivity.this.startActivity(aboutIntent);
			break;

		}
		return false;
	}

	private String getWirelessIP() {
		WifiManager wifi = (WifiManager) getSystemService(Context.WIFI_SERVICE);
		if (wifi.getWifiState() != WifiManager.WIFI_STATE_ENABLED) {
			return "0.0.0.0";
		} else {
			WifiInfo info = wifi.getConnectionInfo();
			String ipText = intToIp(info.getIpAddress());
			return ipText;
		}
	}

	private String intToIp(int ip) {
		return new StringBuilder().append(ip & 0xFF).append(".")
				.append((ip >> 8) & 0xFF).append(".").append((ip >> 16) & 0xFF)
				.append(".").append((ip >> 24) & 0xFF).toString();
	}
}
