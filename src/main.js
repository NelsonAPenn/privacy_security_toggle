let current_mode = "on";

let icons = {
  on:  "res/closed.svg",
  off: "res/open.svg"
};

let on_off_pairs = {

  firstPartyIsolate: {
    on: true,
    off: false
  },

  referrersEnabled: {
    on: false,
    off: true
  }

};

function private_settings(mode)
{
  for(let [key, val] of Object.entries(on_off_pairs) )
  {
    console.log(browser.privacy.websites);
    browser.privacy.websites[key].set(
      {
        value: val[mode]
      }
    );
  }

  browser.browserAction.setIcon( {
    path: icons[mode]
  });

  current_mode = mode;
}

function toggle_private_settings()
{
  if( current_mode === "on" )
  {
    private_settings("off");
  }
  else if( current_mode === "off" )
  {
    private_settings("on");
  }
  else
  {
    console.log("Unexpected mode:");
    console.log(mode);
  }
}

browser.browserAction.onClicked.addListener(
  toggle_private_settings
);

private_settings("on");