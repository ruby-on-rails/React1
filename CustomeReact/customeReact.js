function customeRender(reactElement ,container){
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.targe)
    container.appendChild(domElement);

}
const reactElement={
    type:'a',
    props:{
        href:"http://www.google.com",
        targe:'_blank'
    },
    children:'click me to visit  google'
}
const mainContainer= document.querySelector('#root')
customeRender(reactElement,mainContainer);