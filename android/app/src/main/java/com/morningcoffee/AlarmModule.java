package com.morningcoffee;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.provider.AlarmClock;
import android.widget.Toast;


import android.os.SystemClock;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import static java.lang.String.format;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;

public class AlarmModule extends ReactContextBaseJavaModule {

    private PendingIntent pendingIntent;
    private PendingIntent pendingAlarm;
    private AlarmManager manager;
    private AlarmClock sysAlarmClock;
    private Context reactContext;

    public AlarmModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = getReactApplicationContext();
    }

    @Override
    public String getName() {
      return "AlarmModule";
    }

    @ReactMethod
    public void startAlarm(int year, int month, int date, int hour, int minute, int interval) {
      Intent alarmIntent = new Intent("ALARM_RECEIVER");
      pendingIntent = PendingIntent.getBroadcast(reactContext, 0, alarmIntent, 0);
      manager = (AlarmManager)reactContext.getSystemService(Context.ALARM_SERVICE);

      String usrDate = date+"/"+month+"/"+year;
      String usrTime = hour+":"+minute;

      DateTime brewTime = DateTime.parse(format("%s %s", usrDate, usrTime ), DateTimeFormat.forPattern("dd/MM/yyyy HH:mm"));
      DateTime now = DateTime.now();

      // Possible issue with in-exact timing due to bundling of events?
      manager.set(AlarmManager.RTC_WAKEUP, (brewTime.getMillis() - ((interval * 60) * 1000)), pendingIntent);
      Log.d("Alarm set for: " + usrDate, usrTime);

      // Intent alarmClock = new Intent(AlarmClock.ACTION_SET_ALARM);
      //   alarmClock.putExtra(AlarmClock.EXTRA_HOUR, hour);
      //   alarmClock.putExtra(AlarmClock.EXTRA_MINUTES, minute);
      //   //                                                                          heheˆ0ˆ
      //   alarmClock.putExtra(AlarmClock.EXTRA_MESSAGE, "Rise and shine! Fresh cup of Java");
      //
      //   this.startActivity(alarmClock);
      // pendingAlarm = PendingIntent.getBroadcast(reactContext, 0, alarmClock, 0);
      // manager.setAlarmClock(sysAlarmClock, pendingAlarm );

      Toast.makeText(reactContext, "Coffee Timed", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void finish() {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            activity.finish();
        }
    }
}
