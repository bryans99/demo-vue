
(() => {
    console.log("Hello World")
    // const base = document.createElement("base");
    // base.href = 'https://localhost:8080'
    // document.head.appendChild(base)
    let script = document.createElement("script");
    script.type = 'module'
    script.src = 'https://localhost:8080/@vite/client'
    document.body.appendChild(script);
    script = document.createElement("script");
    script.type = 'module'
    script.src = 'https://localhost:8080/src/main.ts'
    document.body.appendChild(script);
})()
