export let POSITION_INTERVAL = 5000; // 5000ms for refreshing geolocation

export let DRIVER_INIT_BALANCE = 0; // balance when user signed up for first time
export let DRIVER_INIT_RATING = 5; // rating when user signedup for first time

export let DEAL_STATUS_PENDING = 'pending';
export let DEAL_STATUS_ACCEPTED = 'accepted';
export let DEAL_TIMEOUT = 60; // 20 seconds

export let TRIP_STATUS_WAITING = 'waiting';
export let TRIP_STATUS_NOTIFIED = 'notified';
export let TRIP_STATUS_GOING = 'going';
export let TRIP_STATUS_FINISHED = 'finished';
export let TRIP_STATUS_CANCELED = 'canceled';
export let TRANSACTION_TYPE_WITHDRAW = 'withdraw';

// Global Settings
export let DEFAULT_COUNTRY_CODE = "BR";  // used in AccountKit Mobile verification
export let DEFAULT_COUNTRY_MOBILE_CODE = "+55";

export let EMAIL_VERIFICATION_ENABLED = true; // send verification email after user register
export let APPROVAL_REQUIRED = true; // driver can ride without any approval
export let CURRENCY_SYMBOL = "R$";
export let ENABLE_SIGNUP = true;
export let PLAY_AUDIO_ON_REQUEST = true;
export let AUDIO_PATH = "./assets/audio/sound.mp3"; //must have mp3 file

export let DEFAULT_AVATAR = './assets/img/default-dp.png';
export let CUSTOMER_CARE = "1234567890";

/*  
    !!! Important update !!!
    Please update your firebase configurations on src/app/app.module.ts
*/


// NOTE: Please update your firebase configurations on src/app/app.module.ts

export let GOOGLE_MAP_API_KEY = "AIzaSyC80LrSr49CyKFXGNRJqj5zW3pUwaIN2PQ";
export let GOOGLE_MAP_BASE_URL = "https://maps.googleapis.com/maps/api/";
