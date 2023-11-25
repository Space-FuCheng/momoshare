const { generateUa } = require('./random-http-ua.js');
//无用
// const USER_AGENTS = [

//     "Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 9; PAR-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 10; LYA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 10; GM1910) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 9; Mi Note 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 9; MI 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 10; MI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 8.1.0; MI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 10; MI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",  
//     "Mozilla/5.0 (Linux; Android 9; MIX 2S) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 11; Redmi K30 5G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 10; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.152 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 10; Redmi K20 Pro Premium Edition) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 11; Redmi K20 Pro Premium Edition) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 9; M2006J10C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 10; M2006J10C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 9; MHA-AL00 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 8.1.0; 16 X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 8.0.0; HTC U-3w) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36", 
//     "Mozilla/5.0 (Linux; Android 9; 16T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
//     "Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
//     "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1",
//     "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
//     "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
//     "Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
//     "Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
//   ]


const USER_AGENTS = [


"Mozilla/5.0 (compatible; MSIE 5.0; Windows NT 6.2; Trident/5.0) ",
"Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 5.2; Trident/4.1)",
"Mozilla/5.0 (compatible; MSIE 10.0; Windows 95; Trident/4.0)",
"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/4.1)",
"Mozilla/5.0 (Windows NT 5.1; en-US; rv:1.9.2.20) Gecko/20200804 Firefox/37.0",
"Mozilla/5.0 (X11; Linux x86_64; rv:7.0) Gecko/20190110 Firefox/35.0",
"Mozilla/5.0 (X11; Linux x86_64; rv:5.0) Gecko/20130317 Firefox/37.0",
"Mozilla/5.0 (iPad; CPU OS 8_2_2 like Mac OS X; en-US) AppleWebKit/531.11.3 (KHTML, like Gecko) Version/3.0.5 Mobile/8B112 Safari/6531.11.3",
"Mozilla/5.0 (X11; Linux x86_64; rv:5.0) Gecko/20170526 Firefox/36.0",
"Mozilla/5.0 (Windows; U; Windows NT 5.1) AppleWebKit/531.15.7 (KHTML, like Gecko) Version/4.0.4 Safari/531.15.7",
"Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X; sl-SI) AppleWebKit/533.9.5 (KHTML, like Gecko) Version/4.0.5 Mobile/8B119 Safari/6533.9.5",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_1) AppleWebKit/5340 (KHTML, like Gecko) Chrome/37.0.855.0 Mobile Safari/5340",
"Mozilla/5.0 (Windows; U; Windows NT 5.01) AppleWebKit/533.33.7 (KHTML, like Gecko) Version/4.0.5 Safari/533.33.7",
"Mozilla/5.0 (compatible; MSIE 7.0; Windows 98; Win 9x 4.90; Trident/3.1)",
"Mozilla/5.0 (Windows 98; en-US; rv:1.9.0.20) Gecko/20120130 Firefox/35.0",
"Mozilla/5.0 (X11; Linux x86_64; rv:5.0) Gecko/20150726 Firefox/36.0",
"Mozilla/5.0 (compatible; MSIE 11.0; Windows NT 6.0; Trident/3.1)",
"Mozilla/5.0 (iPad; CPU OS 7_0_1 like Mac OS X; en-US) AppleWebKit/531.40.7 (KHTML, like Gecko) Version/4.0.5 Mobile/8B115 Safari/6531.40.7",
"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/5331 (KHTML, like Gecko) Chrome/39.0.843.0 Mobile Safari/5331",
"Mozilla/5.0 (compatible; MSIE 5.0; Windows NT 6.2; Trident/3.0)",
"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/5321 (KHTML, like Gecko) Chrome/39.0.823.0 Mobile Safari/5321",
"Mozilla/5.0 (X11; Linux x86_64; rv:6.0) Gecko/20181002 Firefox/36.0",
"Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X; sl-SI) AppleWebKit/531.29.5 (KHTML, like Gecko) Version/4.0.5 Mobile/8B114 Safari/6531.29.5",
"Mozilla/5.0 (Windows; U; Windows NT 5.0) AppleWebKit/531.39.7 (KHTML, like Gecko) Version/4.1 Safari/531.39.7",
"Mozilla/5.0 (Macintosh; PPC Mac OS X 10_6_6) AppleWebKit/5322 (KHTML, like Gecko) Chrome/38.0.880.0 Mobile Safari/5322",
"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_7_5 rv:2.0; sl-SI) AppleWebKit/534.48.2 (KHTML, like Gecko) Version/5.0 Safari/534.48.2",
"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 5.1; Trident/4.0)",
"Mozilla/5.0 (Windows; U; Windows 98) AppleWebKit/535.39.5 (KHTML, like Gecko) Version/5.0.1 Safari/535.39.5",
"Mozilla/5.0 (Windows CE) AppleWebKit/5342 (KHTML, like Gecko) Chrome/38.0.835.0 Mobile Safari/5342",
"Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_7_8 rv:3.0; en-US) AppleWebKit/533.38.7 (KHTML, like Gecko) Version/5.1 Safari/533.38.7",
"Mozilla/5.0 (Windows; U; Windows NT 6.0) AppleWebKit/531.32.6 (KHTML, like Gecko) Version/5.0.1 Safari/531.32.6",
"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_7_8) AppleWebKit/5320 (KHTML, like Gecko) Chrome/40.0.804.0 Mobile Safari/5320",
"Mozilla/5.0 (X11; Linux i686; rv:5.0) Gecko/20210927 Firefox/35.0",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0 rv:4.0; en-US) AppleWebKit/534.15.1 (KHTML, like Gecko) Version/5.0 Safari/534.15.1",
"Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_7 rv:3.0; en-US) AppleWebKit/532.22.3 (KHTML, like Gecko) Version/4.1 Safari/532.22.3",
"Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_6_5 rv:2.0) Gecko/20110612 Firefox/35.0",
"Mozilla/5.0 (Windows NT 5.0) AppleWebKit/5362 (KHTML, like Gecko) Chrome/36.0.894.0 Mobile Safari/5362",
"Mozilla/5.0 (Windows 98; en-US; rv:1.9.1.20) Gecko/20160717 Firefox/37.0",
"Mozilla/5.0 (Windows; U; Windows NT 6.0) AppleWebKit/533.41.6 (KHTML, like Gecko) Version/5.0.1 Safari/533.41.6",
"Mozilla/5.0 (X11; Linux i686; rv:7.0) Gecko/20160224 Firefox/37.0",
"Mozilla/5.0 (Macintosh; PPC Mac OS X 10_5_3 rv:2.0) Gecko/20230220 Firefox/37.0",
"Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 5.0; Trident/5.0)",
"Mozilla/5.0 (Macintosh; PPC Mac OS X 10_5_3 rv:4.0) Gecko/20210114 Firefox/37.0",
"Mozilla/5.0 (compatible; MSIE 11.0; Windows 95; Trident/5.0)",
"Mozilla/5.0 (Windows 98; sl-SI; rv:1.9.2.20) Gecko/20110820 Firefox/36.0",
"Mozilla/5.0 (Windows; U; Windows NT 5.1) AppleWebKit/533.6.3 (KHTML, like Gecko) Version/5.1 Safari/533.6.3",
"Mozilla/5.0 (Windows 98) AppleWebKit/5362 (KHTML, like Gecko) Chrome/40.0.881.0 Mobile Safari/5362",
"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 4.0; Trident/3.0)",
"Mozilla/5.0 (Windows 95; sl-SI; rv:1.9.1.20) Gecko/20211104 Firefox/35.0",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_2) AppleWebKit/5352 (KHTML, like Gecko) Chrome/36.0.875.0 Mobile Safari/5352",
  ]





  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  // const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

  const { exec } = require('child_process');

  let USER_AGENT = ''; // 定义一个变量以存储 stdout
  
  exec('python ./fake-useragent-1.4.0/src/fake_useragent/fake.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`执行出错: ${error}`);
      return;
    }
    USER_AGENT = stdout.trim();
    
  });
  

// const { exec } = require('child_process');

// exec('python C:/Users/FuCheng/Desktop/test.py', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`执行出错: ${error}`);
//     return;
//   }
//   const USER_AGENT = stdout.trim();
//   console.log(`脚本输出: ${stdout}`);
// });

module.exports = {
    USER_AGENT
  }

  
