# Privacy Settings Toggle

Firefox extension that toggles certain privacy / security settings on and off. Helpful for when websites / logins break. The motivation for this extension is largely because first-party isolation is very effective in protecting against trackers; however, it is perhaps the most likely setting to break websites. This extension is designed to quickly and easily turn it off temporarily.

Currently, the extension simply changes settings for first-party isolation and sending referrer headers. When the lock is closed,

- first-party isolation is on
- referrer headers are turned off

When the lock is open, these are reversed. And that's it!

## Installation (needs a Firefox Addons account)

1. Clone the repo
2. `cd` into the repo
3. Use `web-ext sign` with your API key and API secret
4. Install the `.xpi` file using "Install Addon from File" in the Firefox Extension manager.

> Note: If you are using a current version of Firefox and have "Strict" selected for Enhanced Tracking Protection, then this extension cannot set the first-party isolation field.