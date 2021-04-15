import "regenerator-runtime/runtime";
import React, { Component } from "react";

const FB_ID = "297983414833872";
const FB_VERSION = "v10.0";
const FB_SCOPE =
  "pages_show_list,pages_read_engagement,instagram_basic,instagram_manage_insights";
const FB_REDIRECT_URL = encodeURIComponent("https://web.embassysocial.io/redirect");
const FB_STATE = "fbloged=1";

class FacebookLoginButton extends Component {
  buildUrlFb = () => {
    return `https://www.facebook.com/${FB_VERSION}/dialog/oauth?client_id=${FB_ID}&redirect_uri=${FB_REDIRECT_URL}&scope=${FB_SCOPE}&state=${FB_STATE}&response_type=code`;
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
    // return new Promise(async (resolve, reject) => {
      let uri = this.buildUrlFb();
      let fbWindow = await this.popupWindow(uri, "", window, 1000, 600);

      console.log(fbWindow, 'fbWindow')
      var timer = setInterval(async function () {
        if (fbWindow.closed) {
          clearInterval(timer);
        //   try {
            console.log(fbWindow.document, 'fbWindow.document')
            console.log(fbWindow.document.URL, 'fbWindow.document.URL')
            console.log(fbWindow.document.documentURI, 'fbWindow.document.documentURI')
            // var url = new URL(fbWindow.document.documentURI);
            // console.log(url)
            // let token = url.searchParams.get("code");
            // console.log(token)
          //   if(!token) {
          //     reject(null)
          //   }
          //   resolve(token);
          // } catch (ex) {
          //   reject(null);
          // }
        }
      }, 1000);
    // });
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
