package com.morningcoffee;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;

import android.util.Log;

public class AlarmReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context arg0, Intent arg1) {
        Log.d("Wrong context", "But running!!");
        Toast.makeText(arg0,"I'm running", Toast.LENGTH_SHORT).show();

        

    }

}
