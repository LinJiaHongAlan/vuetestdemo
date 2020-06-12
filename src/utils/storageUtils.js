/* 
    操作local数据的工具函数模块
 */
import store from 'store';
const LONGSKY_ZT = 'longskypdazt';

//获取账套信息
const getlongskypdazt = () => store.get(LONGSKY_ZT)
//存储账套信息
const setlongskypdazt = (ztname, ztpwd, ztusername, ztversion)  => store.set(LONGSKY_ZT, {ztname, ztpwd, ztusername, ztversion})
//删除账套信息
const removelongskypdazt = () => {store.remove(LONGSKY_ZT)}
//判断store是会否有账套信息
const islongskypdazt = () => {
  if(getlongskypdazt()) {
    return true
  } else {
    return false
  }
}

 export {
   store,
   getlongskypdazt,
   setlongskypdazt,
   removelongskypdazt,
   islongskypdazt
 }
