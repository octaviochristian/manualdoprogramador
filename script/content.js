function loadContent(content){
    let page = `
        <div class="container">
        <a href="../index.html">
            <h1 class="title">Manual do Programador</h1>
        </a>
    `;
    
    for (const item of content) {

        let code_result = ``;
        if(item.code_result){
            code_result = `
            <div class="code-result">
                <pre><p>${item.code_result}</p></pre>
            </div>`;
        }

        let col_size = `col size-12`;
        let code_example = ``;
        if(item.code_example || item.code_result){
            col_size = 'col size-6';
            code_example = `            
            <div class="col ${col_size}">
                <div class="code-example">
                    <pre><code class="code">${item.code_example}</code></pre>
                </div>
                ${code_result}
            </div>
            `;
        }

        page += `
        <div class="chapter row">
            <div class="col ${col_size}">
                <div class="description">
                    <h2>${item.title}</h2>
                    <div class="text">${item.description}</div>
                </div>
            </div>
            ${code_example}
        </div>
        <hr class="line">`;
    }
    
    page += `</div>`;

    document.body.innerHTML = page;
}