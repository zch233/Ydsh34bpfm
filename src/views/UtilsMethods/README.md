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

## 获取/设置 location.search 的参数 （一般用于是否存在 devmode 和 debug 的判断）

```
export const queryString = {
    get: (name) => {
        const getAll = searchString => {
            const query = searchString.replace(/^\?/, '');
            const queryObject = {};
            const queryArray = query.split('&').filter(i => i).forEach((string, index) => {
                const parts = string.split('=');
                queryObject[parts[0]] = decodeURIComponent(parts[1]);
            });
            return queryObject;
        };
        if (arguments.length === 0) {
            return getAll(window.location.search);
        } else {
            return getAll(window.location.search)[name];
        }
    },
    set: (name, value) => {
        const set = (search, name, value) => {
            const regex = new RegExp(`(${encodeURIComponent(name)})=([^&]*)`, '');
            if (regex.test(search)) {
                return search.replace(regex, (match, c1, c2) => `${c1}=${encodeURIComponent(value)}`);
            } else {
                return search.replace(/&?$/, `&${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
            }
        };
        if (arguments.length === 1 && typeof name === 'object' && name !== null) {
            let search = window.location.search;
            for (let key in arguments[0]) {
                search = set(search, key, arguments[0][key]);
            }
            window.location.search = search;
        } else {
            window.location.search = set(window.location.search, name, value);
        }
    },
}
```

## 前端验证身份证

```
export const testIdCard = (idCard) => {
    idCard = idCard.toString();
    const city = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' };
    let num = idCard.toUpperCase();
    if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)) {
        throw '身份证位数错误！';
    }
    if (city[parseInt(num.substring(0, 2))] === undefined) {
        throw '身份证格式错误！';
    }
    const len = num.length;
    let re = null;
    if (len === 15) {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        const arrSplit = num.match(re);
        const dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        const bGoodDay =
            dtmBirth.getYear() === Number(arrSplit[2]) &&
            dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
            dtmBirth.getDate() === Number(arrSplit[4]);
        if (!bGoodDay) {
            throw '身份证日期格式错误'
        } else {
            const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
            let nTemp = 0;
            num = num.substring(0, 6) + '19' + num.substring(6, num.length - 6);
            for (let i = 0; i < 14; i++) {
                nTemp += num.substring(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            return true;
        }
    }
    if (len === 18) {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        const arrSplit = num.match(re);
        const dtmBirth = new Date(arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        const bGoodDay =
            dtmBirth.getFullYear() === Number(arrSplit[2]) &&
            dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
            dtmBirth.getDate() === Number(arrSplit[4])
        if (!bGoodDay) {
            throw '身份证日期格式错误'
        } else {
            let valnum;
            const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
            let nTemp = 0;
            for (let i = 0; i < 17; i++) {
                nTemp += num.substring(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum !== num.substring(17, 1)) {
                throw '身份证格式错误！'
            }
            return true;
        }
    }
}
```

## 手机号和身份证号正则验证

```
export const validataIdCard = idCard => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard);

export const validatePhone = phone => /^[1][3-9][0-9]{9}$/.test(phone);
```
