import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  // Environment Variable
  public static ENVIRONMENT = 'DEV';
  // The prefix for all apis
  public static BASE_API_URL = 'https://pujarispl.onrender.com/';

  // APIs
  public static HELLO = '';

  constructor() {}
  public static setConfiguration() {
    AppConfig.HELLO = AppConfig.BASE_API_URL + 'hello';
  }
}
AppConfig.setConfiguration();
