## classnames实现

```jsx
/**
 * @param {any[]} args
 * @returns {string}
 */
function classNames(...args) {
  // your code here
  let resArr=[]
  const canSuingType=['String','Number']
  const ignoreType=['Null', 'Undefined', 'Symbol',  'True', 'False']
  function isObject(item){
    return item instanceof Object
  }
  args.forEach(item=>{
      const currentItemType=sliceType(item)
      
      if(canSuingType.includes(currentItemType)){
        resArr.push(item)
      }else if(ignoreType.includes(currentItemType)){
      }
      if(Array.isArray(item)){
          let flatArr=item.flat(Infinity)
          flatArr.forEach(flatArrItem=>{
            resArr.push(classNames(flatArrItem))
          })
        }
      if(currentItemType == 'Object'|| currentItemType =='Map'){
          for(let key in item){
            if(item[key]){
              resArr.push(key)
          }
        }
      }
  })
  return resArr.length==0?'':resArr.join(' ')
}

  function sliceType(item){
    const itemString=Object.prototype.toString.call(item)
    return itemString.slice(8,itemString.length-1)
  }
  const obj = new Map()
  obj.cool = '!'

 console.log(
   classNames(['BFE', [{dev: true}, ['is', [obj]]]])
   )
//  function whichType(item){
//    let res=''
//    let isSplice=false
//    const itemString=Object.prototype.toString.call(item)
//    for(let i=0;i<itemString.length;i++){
//      if(isSplice&&itemString[i]!==']'){
//        res+=itemString[i]
//      }
//      if(itemString[i]==' '){
//        isSplice=true
//      }
//    }
//     return res
//   }
  // console.log(sliceType(undefined))

  // function regType(item){
  //   let reg=/' ()]'/
  //   const itemString=Object.prototype.toString.call(item)
  //   return itemString.match(reg)
  // }
```