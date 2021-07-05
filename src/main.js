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


// let data = new Map();

// const loading_screen =  async () => {    
    

//     const original = document.getElementsByClassName("canvas-container")[0];
//     data.set("original", original)

//   //  document.body.innerHTML = "";
//     document.getElementsByTagName("html")[0].style.display = "block";
//     main_html();
// }





// const main_html = async () => {
//     const response = await fetch(browser.runtime.getURL("html/main.html"));
//     const html = await response.text();
//     const parsed = new DOMParser().parseFromString(html, 'text/html');

//     const original = document.getElementById("editor-wrapper");
//     const canvas = document.getElementById("finalcanvas");
//     alert(canvas.toDataURL());

//     canvas.addEventListener('load', () => {
//         console.log("loaded canvas")
//     })
//     //document.head.innerHTML = parsed.head.innerHTML
//   //  document.body.innerHTML = parsed.body.innerHTML;
    
//     //const canvas = original

//    // content.appendChild(canvas)
// }

// const fetch_html = async (link) => {
//     const response = await fetch(link);
//     const html = await response.text();

//     return html;
// }

// const fetch_page = async (page) => {
//     const html = await fetch_html(page)
//     return new DOMParser().parseFromString(html, 'text/html');
// }
