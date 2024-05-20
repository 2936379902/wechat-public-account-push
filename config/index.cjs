/* eslint 禁用 */

/**
* 本项目配置为方便新人使用，已缩小至最简配置。
* 如若想使用更多功能，请查考文档中的【3. 配置参数说明】
* 自行添加属性，以支持更多个性化功能
*/
常量 USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID： 'wx44e261b95b3e2dac'，

  // 使用微信测试号：公众号APP_SECRET
  应用程序秘密：'043670340f218b793c5a6b1267be2cd5'，

  省份: '湖南' ,
  CITY : '邵阳' ,

  用户：[
    {
      // 想要发送的人的名字
      名称： '宝贝' ,
      // 使用微信测试号：扫码关注您的微信测试号后生成的一段字符串，在测试号后台可以看到
      id : 'oa1xG6ZjFt39gtMA4LH5J3E-Kbbk' ,
      // 使用微信测试号：你想给他发送的模板消息的模板ID
      useTemplateId : 'RvF81ZPphJRRZO5e6Ml3j9vq1ajxNxwnDyXxtpGE8as' ,
      // 新历生日,仅开始获取势星座运,格式必须为MM-DD
      星座日期: '12-27' ,
      节日：[
        // 注意：此条配置日期为阴历日期，因为`类型`中“生日”之前有*符号
        {
          输入：'*生日'，姓名：'宝贝'，年份：'1996'，日期：'09-09'，
        } ,
        // 注意：此条配置日期为阳历日期，因为`类型`中“生日”之前没有*符号
        {
          输入：'生日'，姓名：'李四'，年份：'1996'，日期：'09-31' ,
        },
        {
          type: '节日'
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'RvF81ZPphJRRZO5e6Ml3j9vq1ajxNxwnDyXxtpGE8as',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oa1xG6ZjFt39gtMA4LH5J3E-Kbbk',
    }
  ],

}

module.exports = USER_CONFIG

