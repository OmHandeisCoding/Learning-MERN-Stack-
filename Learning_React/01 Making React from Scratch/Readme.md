So basically REACT converts html(jsx) to a object (key value pairs)

for eg: 

const someElement = (
<a {href}='https://google.com' target='_blank'>click me to visit google</a>
)

gets converted to -->

const reactElem = React.creatElement{
     <br />
    'a',<br />
    {href:'https://google.com',target:'_blank'},<br />
    'click me to visit google',<br />
     evaluated_javascript_expression(results)<br />
}
