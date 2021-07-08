

document.addEventListener("DOMContentLoaded", ()=>{

    

    document.getElementById("background-input").addEventListener("input", (event)=>{
        chrome.tabs.query({currentWindow: true, active: true}, (tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id, {"message":"background","data":event.target.value});
            
            chrome.storage.local.set({ "background": event.target.value });
     });
    })

    document.getElementById("accentcolor").addEventListener("input", (event)=>{
        chrome.tabs.query({currentWindow: true, active: true}, (tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id, {"message":"accent","data":event.target.value});
            
            chrome.storage.local.set({ "accent": event.target.value });
     });
    })

    
    load("background").then(res =>{
        if(res)
            document.getElementById('background-input').value = res;
    })

    load("accent").then(res =>{
        if(res)
            document.getElementById('accentcolor').value = res;
    })
    
})


function load(key) {
    return new Promise(resolve => {
        chrome.storage.local.get(key, (result) => {
            resolve(result[key]);
        });
    }
    )
}
