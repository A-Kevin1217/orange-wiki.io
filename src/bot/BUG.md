# 按钮使用指南

## segment.button 按钮字段说明

### 一、按钮结构示例

```js
segment.button([
  { 
    text: '按钮文本', 
    callback: '#回调指令', 
    input: '输入内容', 
    link: 'https://example.com', 
    style: 1, 
    clicked_text: '已点击', 
    send: true, 
    permission: ['123456'], 
    show: { type: 'random', data: 50 },
    type: 2, // 新增，指定 action.type，可自定义按钮行为
    reply: false, // 指令按钮可用，是否带引用回复
    enter: false, // 指令按钮可用，点击后自动发送
    anchor: 0, // 指令按钮可用，特殊功能
    click_limit: 0, // 已弃用
    at_bot_show_channel_list: false, // 已弃用
    unsupport_tips: '当前客户端不支持此操作' // 客户端不支持时的提示
  }
])
```

### 二、每个字段说明

| 字段名                         | 类型           | 是否必填 | 作用说明                                                                 |
| ------------------------------ | -------------- | -------- | ------------------------------------------------------------------------ |
| text                           | string         | 是       | 按钮上显示的文字。                                                      |
| callback                       | string         | 否       | 按钮点击后触发的回调指令（如 `#QQBotdau`），用于处理按钮点击事件。        |
| input                          | string         | 否       | 按钮点击后发送的输入内容，适合需要用户输入的场景。                       |
| link                           | string         | 否       | 按钮点击后跳转的链接（如 `https://example.com`），适合外部跳转。         |
| style                          | number         | 否       | 按钮样式，常见值：<br>0 灰色线条灰色字体<br>1 蓝色线条蓝色字体<br>3 灰色线条红色字体<br>4 蓝色背景白色字体 |
| clicked_text                   | string         | 否       | 按钮被点击后显示的文字。                                                 |
| send                           | boolean        | 否       | 是否在点击按钮后直接发送 input 内容。                                     |
| permission                     | string/array   | 否       | 指定哪些用户可以点击按钮，填 QQ 号或 QQ 号数组。<br>填 'admin' 仅管理员可见 |
| show                           | object         | 否       | 按钮显示条件，目前支持：<br>type: 'random'，data: 0-100，表示随机显示概率 |
| show.type                      | string         | 否       | 显示条件类型，目前仅支持 'random'                                        |
| show.data                      | number         | 否       | 随机显示的概率（0-100），如 50 表示 50% 概率显示                          |
| type                           | number         | 否       | 指定 action.type，覆盖默认类型。常用：0 跳转，1 回调，2 指令，3 客户端时弹出 升级版本后可用 4 订阅按钮（腾讯未开放）5 不知道什么按钮，但是可以自定义unsupport_tips |
| reply                          | boolean        | 否       | 指令按钮可用，是否带引用回复本消息，默认 false。                          |
| enter                          | boolean        | 否       | 指令按钮可用，点击按钮后直接自动发送 data，默认 false。                   |
| anchor                         | number         | 否       | 指令按钮可用，设置为 1 时点击按钮自动唤起手Q选图器，其他值暂无效果。      |
| click_limit                    | number         | 否       | 【已弃用】可操作点击的次数，默认不限                                      |
| at_bot_show_channel_list       | boolean        | 否       | 【已弃用】指令按钮可用，弹出子频道选择器，默认 false                      |
| unsupport_tips                 | string         | 否       | 客户端不支持本 action 时弹出的提示文案，建议填写                          |

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
{ text: '点我', callback: '#test', style: 4, clicked_text: '已点' }
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

#### 8. 指令按钮高级用法
```js
{ text: '自动发送', input: '内容', send: true, reply: true, enter: true, unsupport_tips: '请升级客户端' }
```

#### 9. 自定义 type（如 type: 6，强制弹出提示）
```js
{ text: '技能', type: 6, style: 0, unsupport_tips: '技能冷却中' }
```

---

### 四、注意事项

- 一个按钮可以同时设置 callback、input、link，但一般只用其中一个，优先级通常为 input > callback > link。
- style 不同平台可能显示略有差异，建议实际测试效果。
- permission 支持单个 QQ 号、QQ 号数组或 'admin'。
- show 字段目前仅支持随机显示，后续可能扩展更多条件。
- type 字段可用于自定义 action.type，特殊需求时可用，如 type: 6 可强制弹出 unsupport_tips。
- reply、enter、anchor、unsupport_tips 等字段建议在需要时填写，提升兼容性和用户体验。

如需更复杂的按钮布局，可以传递二维数组实现多行多列按钮。