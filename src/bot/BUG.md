# 按钮使用指南

## segment.button 按钮字段说明（新版适配）

### 一、按钮结构完整示例

```js
segment.button([
  {
    id: 'btn1', // 按钮ID，可选，建议唯一
    text: '按钮文本', // 必填，按钮上的文字
    clicked_text: '已点击', // 必填，点击后按钮上的文字
    style: 1, // 必填，按钮样式：0 灰色线框，1 蓝色线框
    action_type: 1, // 必填，0 跳转，1 回调，2 指令
    data: '相关数据', // 必填，操作相关的数据
    permission_type: 2, // 必填，0 指定用户，1 管理员，2 所有人，3 指定身份组
    specify_user_ids: ['123456'], // 可选，指定用户id列表
    specify_role_ids: ['654321'], // 可选，指定身份组id列表（仅频道可用）
    reply: false, // 可选，指令按钮可用，是否带引用回复
    enter: false, // 可选，指令按钮可用，点击后自动发送
    anchor: 0, // 可选，指令按钮可用，特殊功能
    click_limit: 0, // 可选，已弃用
    at_bot_show_channel_list: false, // 可选，已弃用
    unsupport_tips: '当前客户端不支持此操作', // 必填，客户端不支持时的提示
    // 兼容旧字段
    callback: '#回调指令',
    input: '输入内容',
    link: 'https://example.com',
    send: true,
    permission: ['123456'],
    show: { type: 'random', data: 50 }
  }
])
```

### 二、每个字段说明（新版）

| 字段名         | 类型           | 是否必填 | 作用说明                                                                 |
| -------------- | -------------- | -------- | ------------------------------------------------------------------------ |
| id             | string         | 否       | 按钮ID：在一个keyboard消息内设置唯一                                      |
| text           | string         | 是       | 按钮上显示的文字。                                                      |
| clicked_text   | string         | 是       | 按钮被点击后显示的文字。                                                 |
| style          | number         | 是       | 按钮样式：0 灰色线框，1 蓝色线框                                         |
| action_type    | number         | 是       | 0 跳转按钮，1 回调按钮，2 指令按钮                                       |
| data           | string         | 是       | 操作相关的数据                                                          |
| permission_type| number         | 是       | 0 指定用户，1 管理员，2 所有人，3 指定身份组（仅频道可用）              |
| specify_user_ids| array         | 否       | 有权限的用户 id 的列表                                                  |
| specify_role_ids| array         | 否       | 有权限的身份组 id 的列表（仅频道可用）                                   |
| reply          | boolean        | 否       | 指令按钮可用，指令是否带引用回复本消息，默认 false                       |
| enter          | boolean        | 否       | 指令按钮可用，点击按钮后直接自动发送 data，默认 false                    |
| anchor         | number         | 否       | 指令按钮可用，特殊功能                                                  |
| click_limit    | number         | 否       | 【已弃用】可操作点击的次数，默认不限                                     |
| at_bot_show_channel_list | boolean | 否     | 【已弃用】指令按钮可用，弹出子频道选择器，默认 false                    |
| unsupport_tips | string         | 是       | 客户端不支持本action的时候，弹出的toast文案                              |
| callback       | string         | 否       | 兼容旧用法，按钮点击后触发的回调指令                                     |
| input          | string         | 否       | 兼容旧用法，按钮点击后发送的输入内容                                     |
| link           | string         | 否       | 兼容旧用法，按钮点击后跳转的链接                                         |
| send           | boolean        | 否       | 兼容旧用法，是否在点击按钮后直接发送 input 内容                          |
| permission     | string/array   | 否       | 兼容旧用法，指定哪些用户可以点击按钮，填 QQ 号或 QQ 号数组。'admin' 管理员 |
| show           | object         | 否       | 按钮显示条件，目前支持 type: 'random', data: 0-100                      |
| show.type      | string         | 否       | 显示条件类型，目前仅支持 'random'                                        |
| show.data      | number         | 否       | 随机显示的概率（0-100），如 50 表示 50% 概率显示                          |

### 三、常见用法举例

#### 1. 普通回调按钮
```js
{ text: '查询', callback: '#查询指令' }
```

#### 2. 输入按钮（点击后发送内容）
```js
{ text: '发送内容', input: '你好', send: true }
```

#### 3. 跳转链接按钮
```js
{ text: '访问官网', link: 'https://example.com' }
```

#### 4. 指定样式和点击后文字
```js
{ text: '点我', callback: '#test', style: 1, clicked_text: '已点' }
```

#### 5. 仅管理员可见
```js
{ text: '管理操作', callback: '#admin', permission: 'admin' }
```

#### 6. 随机显示按钮
```js
{ text: '随机按钮', callback: '#random', show: { type: 'random', data: 30 } }
```

#### 7. 指定用户可见
```js
{ text: '仅我可见', callback: '#me', permission: ['123456789'] }
```

#### 8. 完整新版按钮
```js
{
  id: 'btn1',
  text: '新版按钮',
  clicked_text: '已点新版',
  style: 1,
  action_type: 2,
  data: '/help',
  permission_type: 0,
  specify_user_ids: ['123456789'],
  reply: true,
  enter: true,
  unsupport_tips: '当前客户端不支持此操作'
}
```

---

### 四、注意事项

- 一个按钮可以同时设置 callback、input、link，但新版建议直接用 action_type 和 data 明确指定。
- style 不同平台可能显示略有差异，建议实际测试效果。
- permission 支持单个 QQ 号、QQ 号数组或 'admin'，新版建议用 permission_type、specify_user_ids。
- show 字段目前仅支持随机显示，后续可能扩展更多条件。
- 兼容旧字段，推荐逐步迁移到新版属性。

如需更复杂的按钮布局，可以传递二维数组实现多行多列按钮。