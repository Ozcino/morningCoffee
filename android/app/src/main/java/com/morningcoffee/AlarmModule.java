package com.morningcoffee;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.util.Log;

public class AlarmModule extends ReactContextBaseJavaModule {

    private PendingIntent pendingIntent;
    private AlarmManager manager;
    private static AlarmModule instance;
    private Context reactContext;

    public AlarmModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = getReactApplicationContext();
    }


    @Override
    public String getName() {
      return "AlarmModule";
    }

    protected void onCreate() {
      // Retrieve a PendingIntent that will perform a broadcast

    }

    @ReactMethod
    public void startAlarm() {
      Intent alarmIntent = new Intent("REFRESH_THIS");
      pendingIntent = PendingIntent.getBroadcast(reactContext, 0, alarmIntent, 0);
      manager = (AlarmManager)reactContext.getSystemService(Context.ALARM_SERVICE);
      int interval = 20000;

      manager.set(AlarmManager.RTC_WAKEUP, interval, pendingIntent);
      Toast.makeText(reactContext, "Alarm Set", Toast.LENGTH_SHORT).show();
      Log.d("THISISMANAGEROFALARMS", "Mangen");
    }

    @ReactMethod
    public void finish() {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            activity.finish();
        }
    }
}
