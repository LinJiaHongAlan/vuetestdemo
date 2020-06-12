//字符串替换更换对象的属性名
const replaceObjectforstring = (obj, val, newval) => {
    return JSON.parse(
        JSON.stringify(obj).replace(new RegExp(val,'g'), newval)
    )
}

//对象转数组
const ObjecttoArry = (obj, name) => {
    return obj.map(item => item.name)
}

//对象复制属性(解决andt选中时候需要value)
//key要复制的键
//copykey复制后的键名
const ObjectCopykey = (obj, key, copykey) => {
    return obj.map(item => {
        item[copykey] = item[key]
        return item
    })
}


export { 
    replaceObjectforstring,
    ObjecttoArry,
    ObjectCopykey
}


