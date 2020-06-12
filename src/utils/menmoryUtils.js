import { Toast } from 'vant';

//提示的文本
//falg是开启还是关闭操作
//back自动关闭后的回调
export function loadingToast(falg, text = "Loading...", back) {
    if(falg) {
        if(back) {
            Toast.loading({
                message: text,
                forbidClick: true,
                onClose: back,
                duration: 0
            });
        }else {
            Toast.loading({
                message: text,
                forbidClick: true,
                duration: 0
            });
        }
    }else {
        Toast.clear()
    }
  }


