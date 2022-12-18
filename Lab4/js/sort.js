document.querySelector('.sort').onclick = Sort;

function Sort() {
    let katalog = document.querySelector('.Katalog-list');
    
    for (let i = 0; i<katalog.children.length; i++){
        for (let j=i; j<katalog.children.length; j++){
            if(+katalog.children[i].getAttribute('data-cost') > +katalog.children[j].getAttribute('data-cost')){
                replacedNode = katalog.replaceChild(katalog.children[j], katalog.children[i]);
                insertAF(replacedNode, katalog.children[i]);
            }
        }
    }
}

function insertAF(element, firstElm){
    return firstElm.parentNode.insertBefore(element, firstElm.nextSibling);
}