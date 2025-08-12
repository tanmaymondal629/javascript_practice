const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor)

// Using getOwnPropertyDescriptor() funftion we can get property description of desire Object
// Like here Object id Math  and property of path PI is a constant value. So Value of Pi is not 
// iterable, writable, and enumerable
/* Output : {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/

const chai = {
    name: 'adrak chai',
    price: 140,
    isAvailable: true,
    
    orderChai: function(){
        log('Tea still not made')
    }
}

// Now we can also descritor the properties of object Chai

console.log(Object.getOwnPropertyDescriptor(chai,'name'))
// Now You can see writable, enumerable, configurble is true, because its a user defined property
// but we can change those properties also using defineProperty() function

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: true,
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'))

// Now which property of an object is not enumerable that is also not eterable
for (const [key,value] of Object.entries(chai)) {
    if(typeof value != 'function')
    {
        console.log(`${key} : ${value}`)
    }
    
}