package com.morningcoffee;

import android.app.PendingIntent;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import io.neson.react.notification.NotificationPackage;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

  }

  /**
   * Returns the name of the main component registered from JavaScript.
   * This is used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
      return "morningCoffee";
  }

}
