import store from '@/store'
import {
  saveEnvCode,
  saveRefreshToken,
  saveToken
} from '@/common/js/store.js'

//动态给当前页面添加参数
function updateQueryParam(uri, key, value) {
  if (!value) {
    return uri;
  }
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  } else {
    return uri + separator + key + "=" + value;
  }
}

/* 判断当前环境
    1.Android
    2.ios
    3.wechat
    4.通用browser
*/
function getEnvCode() {
  var ua = navigator.userAgent.toLowerCase();
  if ((ua.indexOf('ios') > -1)) {
    console.log('ios');
    let dataStr = prompt('getToken');
    let dataObj = JSON.parse(dataStr);
    saveEnvCode(2);
    saveToken(dataObj.Authorization);
    saveRefreshToken(dataObj.refreshToken);
    store.dispatch('setEnv', 2);
    return 2;
  } else if (ua.indexOf('android_app') > -1) {
    let androidData = JSON.parse(Android.getToken())
    saveToken(androidData.token);
    saveRefreshToken(androidData.refreshToken);
    saveEnvCode(1);
    store.dispatch('setEnv', 1);
    return 1;
  } else if (ua.match(/MicroMessenger/i) == "micromessenger") {
    saveEnvCode(3);
    store.dispatch('setEnv', 3);
    return 3;
  } else {
    saveEnvCode(4);
    store.dispatch('setEnv', 4);
    return 4;
  }

}
/**
 * 保留小数四舍五入
 * @param num 传入数字
 * @param n 保留几位小数
 */
function formatterNum(num, n) {
  n = n ? parseInt(n) : 0;
  if (n <= 0) {
    return Math.round(num);
  }
  num = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); //四舍五入
  num = Number(num).toFixed(n); //补足位数
  return num;

}

export const toolUtils = {
  updateQueryParam,
  getEnvCode,
  formatterNum
}
