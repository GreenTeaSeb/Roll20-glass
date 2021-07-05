new MutationObserver(async records => {
    for(const rec of records){
        for(const node of rec.addedNodes){
            console.log(node.tagName);
            if(node.tagName == 'IFRAME'){
                
                const link = document.createElement('link');
                link.href = browser.runtime.getURL('/css/main.css');
                link.type ='text/css';
                link.rel = "stylesheet"
                node.addEventListener("load", () => {
                    node.contentDocument.head.appendChild(link)
                    console.log("injected css");
                })
            }
        }
    }
}).observe(document.body, {childList: true, subtree: true})
