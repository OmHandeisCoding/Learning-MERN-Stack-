So basically REACT converts html(jsx) to a object (key value pairs)

for eg: 

const someElement = (
<a /href='https://google.com' target='_blank'>click me to visit google</a>
)
              ____________________
                    ⏬⏬⏬

const reactElem = React.creatElement{
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
     evaluated_javascript_expression(results)
}
