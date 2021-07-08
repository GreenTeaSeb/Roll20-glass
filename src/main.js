
    load("background").then(res =>{
        set_background(res);
    })


    load("accent").then(res =>{
        set_accent(res);
    })




chrome.runtime.onMessage.addListener((req, sender, res) => {
    switch (req.message) {
        case "background":
            set_background(req.data);
            break;
        case "accent":
            set_accent(req.data)
            break
        default:
            break;
    }
})

const set_background = (url) => {
    if (url) {

        if (url.toUpperCase().match(/^#[0-9a-f]{3,6}$/i)) {
            document.documentElement.style.setProperty("--background-image", url);
        }else{
            document.documentElement.style.setProperty("--background-image", `url(${url})`);
        }
    }
    else{
        document.documentElement.style.setProperty("--background-image", "#2b2b2b");
    }
}

const set_accent = (url) => {
    if (url) {
        if (url.toUpperCase().match(/^#[0-9a-f]{3,6}$/i)) {
            document.documentElement.style.setProperty("--text-highlight", url);
        }
    }
    else{
        document.documentElement.style.setProperty("--text-highlight", "#0f867c");
    }
}



function load(key) {
    return new Promise(resolve => {
        chrome.storage.local.get(key, (result) => {
            resolve(result[key]);
        });
    }
    )
}

