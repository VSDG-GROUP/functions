
const _json = require('./json')
const el = {};
export const _input =  (parent) =>{
el.input = document.createElement('input')
document.querySelector(parent).appendChild(el.input)
}