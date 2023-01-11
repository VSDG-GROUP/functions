
var _json = {};
var el = {};


el.style = (Rules) => {

    // create a style element
    const style = document.createElement('style');
  
    // add the CSS as a string using template literals
    style.appendChild(document.createTextNode(
  
      Rules
  
    ));
  
  
  
  
  
    // add it to the head
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
  
  
  }
  
el.track = () => {
_json.redirect = document.referrer;
_json.url = window.location.href


window.addEventListener('visivilitychange',e=>{
if(document.visibilityState === 'visible'){

}else{
    el.post('/',_json)
}
})

document.body.addEventListener('mouseleave',e=>{
    if(!_json.status){ 
    el.post('/',_json)
    _json.status = 'left'

    }

})

}


el.post = (url,data,then) => {
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(()=>{
        if(then){
            el[then]()
        }
    })
}

el.create = (ele) => {
    el.e = document.createElement(ele)
    
    }
    
    

el.query = (selector) =>{
    return document.querySelector(selector)
}

el.append = (parent)=>{

   document.querySelector(parent).appendChild(el.e)

}

el.id = (id) =>{
    el.e.id = id
}

el.class = (classname) =>{
    el.e.className = classname
}

el.type = (type,e) =>{
    el.e.type = type
}


el.value = (value) =>{
    el.e.value = value
}


el.text = (text) =>{
    el.e.textContent = text
}
el.name = (name) =>{
    el.e.name = name
}
el.placeholder = (placeHolder) =>{
    el.e.placeholder = placeHolder
}
el.source = (source) =>{
    var e = source
    el.e.src = source
    el.e.alt = source.substring(source.lastIndexOf("/") + 1);
    el.e.srcset = source
}


el.eventListener = (selector,listener,next,data) => {
    el[selector] = document.querySelector(selector)
    if(listener == 'click'){

    el[selector].addEventListener(listener,() =>{
     
        el[next](data)
    })
}
    if(listener == 'keyup'){

        el[selector].addEventListener(listener,() =>{
            var nam = el.e.name
            _json[nam] = el.e.value
        })    

}
}

el.li = (parent,id,value) =>{
    el.create('li')
    el.id(id)
    if(value){
    el.text(value)
    }
    el.e.addEventListener('click',()=>{

         _json.cliked = value
        })
    el.append(parent)
}

el.ul = (parent, classname) =>{
    el.create('ul')
    if(classname){
        el.class(classname)
    }
    el.append(parent)
}
el.img = (parent,source) =>{
    el.create('img')
    el.class('img')
    el.source(source)
    el.append(parent)
}
el.div = (parent,classname,id) =>{
  el.create('div')
  el.class(classname)
  el.append(parent)
}

el.imput = (type,placeholder,parent) =>{
    if(placeholder){
    var nam = placeholder.replace(' ', '')
    }
    el.create('input')
el.type(type)
el.name(nam)
el.id(nam)
el.placeholder(placeholder)

el.append(parent)
var i = document.querySelector('#'+nam)
i.addEventListener('keyup',()=>{
    _json[nam] = i.value
})
}


el.textArea = (classname,parent,placeHolder)=>{

    el.create('textarea')
    el.class(classname)
    el.placeholder('Message')

    el.append(parent)

    var i = document.querySelector('.'+classname)
i.addEventListener('keyup',()=>{

    _json.text = i.value
})
}



