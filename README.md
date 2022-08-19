# momoshare

整个项目需要导入GitHub从而使用GitHub Actions来运行！！！

多账号思路解决，多账户可能稳定20

多账号需要自己设置定时，若账号数为1，每天至少运行20次脚本，若账号数为5，运行脚本至少100次（按照概率论，单个账号不一定满20），即`*/12 * * * *`

对于gayhub有定时任务运行最短间隔限制为5分钟，故本脚本可挂载链接为14.4个，为防止gayhub封号，请适量使用！！！

## 环境变量说明

请在文件   `MMSLS.js`  填入分享链接，分享链接有效期只能用两天，需要更新tid参数，然后通过每天打卡，再分享一次链接，才能有更新获取到的上限！

一定要每天打卡后继续分享一次（无需发给朋友点击）！

分享后APP里面能看到数据有更新。

分享链接的更新数据会有延迟，请刷新等待。

## 推送通知环境变量(目前提供`微信server酱`、`pushplus(推送加)`、`iOS Bark APP`、`telegram机器人`、`钉钉机器人`、`企业微信机器人`、`iGot`等通知方式)

|       Name        |                             归属                             |  属性  | 说明                                                         |
| :---------------: | :----------------------------------------------------------: | :----: | ------------------------------------------------------------ |
|    `PUSH_KEY`     |                       微信server酱推送                       | 非必须 | server酱的微信通知[官方文档](http://sc.ftqq.com/3.version)，已兼容 [Server酱·Turbo版](https://sct.ftqq.com/)   |
|    `BARK_PUSH`    | [BARK推送](https://apps.apple.com/us/app/bark-customed-notifications/id1403753865) | 非必须 | IOS用户下载BARK这个APP,填写内容是app提供的`设备码`，例如：https://api.day.app/123 ，那么此处的设备码就是`123`，再不懂看 [这个图](icon/bark.jpg)（注：支持自建填完整链接即可） |
|   `BARK_SOUND`    | [BARK推送](https://apps.apple.com/us/app/bark-customed-notifications/id1403753865) | 非必须 | bark推送声音设置，例如`choo`,具体值请在`bark`-`推送铃声`-`查看所有铃声` |
|   `BARK_GROUP`    | [BARK推送](https://apps.apple.com/us/app/bark-customed-notifications/id1403753865) | 非必须 | bark推送消息分组，例如`jd_scripts` |
|  `TG_BOT_TOKEN`   |                         telegram推送                         | 非必须 | tg推送(需设备可连接外网),`TG_BOT_TOKEN`和`TG_USER_ID`两者必需,填写自己申请[@BotFather](https://t.me/BotFather)的Token,如`10xxx4:AAFcqxxxxgER5uw` , [具体教程](./backUp/TG_PUSH.md) |
|   `TG_USER_ID`    |                         telegram推送                         | 非必须 | tg推送(需设备可连接外网),`TG_BOT_TOKEN`和`TG_USER_ID`两者必需,填写[@getuseridbot](https://t.me/getuseridbot)中获取到的纯数字ID, [具体教程](./backUp/TG_PUSH.md) |
|  `DD_BOT_TOKEN`   |                           钉钉推送                           | 非必须 | 钉钉推送(`DD_BOT_TOKEN`和`DD_BOT_SECRET`两者必需)[官方文档](https://developers.dingtalk.com/document/app/custom-robot-access) ,只需`https://oapi.dingtalk.com/robot/send?access_token=XXX` 等于`=`符号后面的XXX即可 |
|  `DD_BOT_SECRET`  |                           钉钉推送                           | 非必须 | (`DD_BOT_TOKEN`和`DD_BOT_SECRET`两者必需) ,密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的`SECXXXXXXXXXX`等字符 , 注:钉钉机器人安全设置只需勾选`加签`即可，其他选项不要勾选,再不懂看 [这个图](icon/DD_bot.png) |
|    `QYWX_KEY`     |                         企业微信机器人推送                         | 非必须 | 密钥，企业微信推送 webhook 后面的 key [详见官方说明文档](https://work.weixin.qq.com/api/doc/90000/90136/91770) |
|     `QYWX_AM`     |                       企业微信应用消息推送                     | 非必须 | corpid,corpsecret,touser,agentid,素材库图片id [参考文档1](http://note.youdao.com/s/HMiudGkb) [参考文档2](http://note.youdao.com/noteshare?id=1a0c8aff284ad28cbd011b29b3ad0191)<br>素材库图片填0为图文消息, 填1为纯文本消息         |
|  `IGOT_PUSH_KEY`  |                           iGot推送                           | 非必须 | iGot聚合推送，支持多方式推送，确保消息可达。 [参考文档](https://wahao.github.io/Bark-MP-helper ) |
| `PUSH_PLUS_TOKEN` |                         pushplus推送                         | 非必须 | 微信扫码登录后一对一推送或一对多推送下面的token(您的Token) [官方网站](http://www.pushplus.plus/) |
| `PUSH_PLUS_USER`  |                         pushplus推送                         | 非必须 | 一对多推送的“群组编码”（一对多推送下面->您的群组(如无则新建)->群组编码）注:(1、需订阅者扫描二维码 2、如果您是创建群组所属人，也需点击“查看二维码”扫描绑定，否则不能接受群组消息推送)，只填`PUSH_PLUS_TOKEN`默认为一对一推送 |
|  `TG_PROXY_HOST`  |                      Telegram 代理的 IP                      | 非必须 | 代理类型为 http。例子：http代理 http://127.0.0.1:1080 则填写 127.0.0.1 |
|  `TG_PROXY_PORT`  |                     Telegram 代理的端口                      | 非必须 | 例子：http代理 http://127.0.0.1:1080 则填写 1080             |


