## base64 转换为 file 文件

```
export const base64toFile = (base64, filename) => {
  let arr = base64.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};
```

## 上传文件至 OSS(需要配合后端接口)

```
export const uploadToOSS = async ({ file, type = 'img' }) => {
  const { data } = await getOSSConfig({
    ext: `.${file.name.split('.').pop().toLowerCase()}`,
    type,
  });
  let formData = new FormData();
  formData.append('key', data.key);
  formData.append('name', file.name);
  formData.append('policy', data.config.policy);
  formData.append('OSSAccessKeyId', data.config.accessid);
  formData.append('success_action_status', '200');
  formData.append('callback', '');
  formData.append('signature', data.config.signature);
  formData.append('file', file);
  await Axios.post(data.config.host, formData, {
    'Content-Type': 'multipart/form-data',
  });
  return data.url;
};
```

## 获取浏览器信息

```
export const getBrowser = () => {
  return {
    versions: (function () {
      const u = navigator.userAgent;
      return {
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        dingtalk: u.indexOf('DingTalk') > -1, //是否为钉钉内部
        alipay: u.indexOf('AlipayClient') > -1, //是否为支付宝
        wechat: /MicroMessenger/i.test(u), //是否微信中
        webApp: u.indexOf('Safari') === -1, //是否web应该程序，没有头部与底部
      };
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
  };
};
```

## 获取 search 的参数 （一般用于是否存在 devmode 和 debug 的判断）

```
export const getUrlParams = (name) => {
    var query = window.location.search.substring(1);
    var params = query.split('&');
    var allParams = {};
    if (query) {
        for (var i = 0; i < params.length; i++) {
            var pair = params[i].split('=');
            allParams[pair[0]] = pair[1];
            if (pair[0] === name) return pair[1];
        }
    }
    if (!name) return allParams;
    return '';
}

//示例
当前路径: http://localhost:10087/?debug=1&devmode=1#/utilsMethods
getUrlParams() // {debug:'1',devmode:'1'}  未传参数返回参数对象
getUrlParams('debug') // '1'
getUrlParams('demo') // ''

当前路径: http://localhost:10087/#/utilsMethods
getUrlParams() // {}
getUrlParams('debug') // ''

```

## 手机号和身份证号正则验证

```
const validataIdCard = idCard => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard);

const validatePhone = phone => /^[1][3-9][0-9]{9}$/.test(phone);
```
