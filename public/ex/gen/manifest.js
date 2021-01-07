module.exports = {
    "name": "Getting Started Example",
    "version": "1.0",
    "description": "Build an Extension!",
    "permissions": ["activeTab", "declarativeContent", "storage"],
//  "options_page": "options.html",
    "background": {
        "page": "background.html",
        "persistent": false
    },
    "content_scripts": [
        {
            "matches": ["http://devops.flight.ctripcorp.com/*"],
            "js": ["content-scripts.js"]
        }
    ],
//  "page_action": {
//    "default_popup": "popup.html",
//    "default_icon": {
//      "16": "images/get_started16.png",
//      "32": "images/get_started32.png",
//      "48": "images/get_started48.png",
//      "128": "images/get_started128.png"
//    }
//  },
    "browser_action": {
        "default_popup": "popup.html",
        "default_icon": {
            "16": "images/get_started16.png",
            "32": "images/get_started32.png",
            "48": "images/get_started48.png",
            "128": "images/get_started128.png"
        }
    },
    "icons": {
        "16": "images/get_started16.png",
        "32": "images/get_started32.png",
        "48": "images/get_started48.png",
        "128": "images/get_started128.png"
    },
    "manifest_version": 2
}
