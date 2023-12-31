function customRender(element,container){
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
}


function customRenderModular(element,container)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in element.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]) 
    }
    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRenderModular(reactElement,mainContainer)