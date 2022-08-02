function loadContents(contents){
    let page = `
        <div class="container">
        <h1 class="title">Manual do Programador</h1>
        <div class="row">
    `;
    
    for (const item of contents) { page += `
        <div class="col size-4">
            <a href="contents/${item.id}.html">
                <div class="card">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                </div>
            </a>
        </div>
    `;}
    
    page += `</div></div>`;

    document.body.innerHTML = page;
}