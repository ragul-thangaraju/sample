import "regenerator-runtime/runtime";
import React, { Component } from "react";
import store from "store"
const FB_ID = "297983414833872";
const redirectUri = "https://inspiring-facebook-login.netlify.app/redirect";

class FacebookLoginButton extends Component {
  getUrlParameter = (e, uri) => {
    // eslint-disable-next-line
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(uri);
    return null === t ? null : decodeURIComponent(t[1].replace(/\+/g, " "));
  };

  buildUrlFb = () => {
    let params = "fbloged=1";
    let redirectURL = encodeURIComponent(redirectUri);
    return `https://www.facebook.com/v10.0/dialog/oauth?client_id=${FB_ID}&redirect_uri=${redirectURL}&scope=pages_show_list,pages_read_engagement,instagram_basic,instagram_manage_insights&state=${params}&response_type=code`;
  };

  popupWindow = (url, windowName, win, w, h) => {
    const y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
    const x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
    return win.open(
      url,
      windowName,
      `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=${w},height=${h},top=${y},left=${x}`
    );
  };

  openFbDialog = async () => {
    return new Promise(async (resolve, reject) => {
      store.set("fbToken", "")
      let uri = this.buildUrlFb();
      let fbWindow = await this.popupWindow(uri, "", window, 1000, 600);

      // var timer = setInterval(function () {
      //   if (fbWindow.closed) {
      //     clearInterval(timer);
      //     alert(store.get("fbToken"));
      //   }
      // }, 1000);

      fbWindow.addEventListener("load", async function (event) {
        console.log("event");
        try {
          let uri02 = fbWindow.location.href;
          let token = await this.getUrlParameter("code", uri02);
          resolve(token);
          fbWindow.close();
        } catch (ex) {
          reject(null);
        }
      });
    });
  };

  myFbLogin = async () => {
    try {
      let token = await this.openFbDialog();
      console.log(token);
    } catch (ex) {
      console.log("there was an error");
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.myFbLogin();
          }}
        >
          Login with Fb manually
        </button>
      </div>
    );
  }
}

export default FacebookLoginButton;
