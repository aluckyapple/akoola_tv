package com.akoolatv.activity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.TextView;

import com.akoolatv.R;

public class AboutActivity extends Activity {
	private OnClickListener returnListener = new OnClickListener() {
		@Override
		public void onClick(View v) {
			Intent mainIntent = new Intent(AboutActivity.this,
					MainActivity.class);
			AboutActivity.this.startActivity(mainIntent);
		}};
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.about);
		Button btnRetun = (Button)findViewById(R.id.btn_top_left);
		btnRetun.setText("·µ»Ø");
		btnRetun.setOnClickListener(returnListener);
		
		TextView title = (TextView)findViewById(R.id.title_main_text);
		title.setText("¹ØÓÚ");
		
		WebView mWebView = (WebView) findViewById(R.id.about_web_view);
		mWebView.loadUrl("http://akoola.sinaapp.com/about.html");
	}


	@Override
	protected void onDestroy() {
		super.onDestroy();
	}

	
}
