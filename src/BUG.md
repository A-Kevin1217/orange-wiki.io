# 按钮使用指南

插件内建议优先使用 `segment.button(...)` 生成按钮。官机适配器会把它转换为 QQ 官方按钮结构，普通适配器也能保持统一写法。

## 基本结构

`segment.button(...)` 接收一行或多行按钮。每一行是一个数组，多行时传入多个数组。

```js
segment.button([
  {
    text: "同意",
    callback: "#同意",
    style: 4,
    clicked_text: "已同意",
    permission: "admin",
    group_id: "request_10001",
    id: "approve_10001",
    click_limit: 1
  },
  {
    text: "拒绝",
    callback: "#拒绝",
    style: 3,
    clicked_text: "已拒绝",
    permission: "admin",
    group_id: "request_10001",
    id: "reject_10001",
    click_limit: 1
  }
])
```

多行按钮：

```js
segment.button(
  [
    { text: "上一页", callback: "#上一页" },
    { text: "下一页", callback: "#下一页" }
  ],
  [
    { text: "刷新", callback: "#刷新", style: 4 },
    { text: "关闭", callback: "#关闭", style: 3 }
  ]
)
```

## 字段说明

| 字段名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `text` | `string` | 是 | 按钮显示文字。 |
| `callback` | `string` | 否 | 回调按钮数据。官机开启按钮回调时会触发按钮点击事件，插件可按普通消息规则匹配该文本。 |
| `input` | `string` | 否 | 指令输入内容。一般配合 `send` 或 `enter` 使用。 |
| `link` | `string` | 否 | 跳转链接，通常填写 `https://` 开头的地址。 |
| `style` | `number` | 否 | 按钮样式。常用：`0` 灰色线框，`1` 蓝色线框，`3` 红色文字，`4` 蓝底白字。 |
| `clicked_text` | `string` | 否 | 按钮点击后的显示文字。 |
| `id` | `string` | 否 | 固定按钮 ID。用于需要稳定追踪按钮的场景；不填则适配器自动生成。 |
| `group_id` | `string` | 否 | 按钮互斥组。同一消息内 `group_id` 相同的按钮互斥，点中一个后同组其它按钮不可再选。 |
| `permission` | `string` / `string[]` | 否 | 点击权限。填 `"admin"` 表示仅管理员可点；填 QQ/OpenID 字符串或数组表示指定用户可点。 |
| `show` | `object` | 否 | 显示条件。目前支持 `{ type: "random", data: 50 }`，表示 50% 概率显示。 |
| `type` | `number` | 否 | 覆盖官方 `action.type`。默认：`link` 为 `0`，`callback` 为 `1`，`input` 为 `2`。 |
| `send` | `boolean` | 否 | `input` 按钮是否点击后直接发送内容。 |
| `enter` | `boolean` | 否 | 是否自动提交按钮数据。回调按钮默认由适配器决定；指令按钮常用。 |
| `reply` | `boolean` | 否 | 点击后是否带引用回复。官机 Markdown + 按钮场景建议按需开启。 |
| `anchor` | `number` | 否 | 官方按钮扩展字段。设置为 `1` 时可唤起手 Q 选图器。 |
| `click_limit` | `number` | 否 | 官方点击次数限制。互斥场景通常填 `1`，服务端仍应做二次校验。 |
| `at_bot_show_channel_list` | `boolean` | 否 | 官方扩展字段。用于部分频道选择场景。 |
| `unsupport_tips` | `string` | 否 | 客户端不支持该按钮行为时显示的提示。 |
| `modal` | `object` | 否 | 二次确认弹窗配置，也可直接使用 `content`、`confirm_text`、`cancel_text`。 |
| `QQBot` | `object` | 否 | 官机专用透传配置，可覆盖 `render_data`、`action` 或 `group_id`。 |

`callback`、`input`、`link` 同时存在时，适配器按 `input > callback > link` 的优先级生成按钮。实际使用时建议一个按钮只写一种行为。

## 常见用法

### 回调按钮

```js
segment.button([
  { text: "查询", callback: "#查询" }
])
```

### 输入按钮

点击后把内容填入输入框：

```js
segment.button([
  { text: "填入指令", input: "#菜单" }
])
```

点击后直接发送：

```js
segment.button([
  { text: "发送指令", input: "#菜单", send: true }
])
```

### 链接按钮

```js
segment.button([
  { text: "打开文档", link: "https://wiki.kevcore.cn/BUG.html" }
])
```

### 管理员按钮

```js
segment.button([
  { text: "封禁", callback: "#封禁 123456", permission: "admin", style: 3 }
])
```

### 指定用户可点

```js
segment.button([
  { text: "仅本人确认", callback: "#确认", permission: ["123456789"] }
])
```

### 互斥按钮

同一行或同一消息中的多个按钮使用相同 `group_id`，即可交给官方按钮做互斥。

```js
const groupId = "vote_20260813_001"

segment.button([
  {
    text: "通过",
    callback: "#投票 通过",
    clicked_text: "已选择通过",
    style: 4,
    group_id: groupId,
    click_limit: 1
  },
  {
    text: "否决",
    callback: "#投票 否决",
    clicked_text: "已选择否决",
    style: 3,
    group_id: groupId,
    click_limit: 1
  }
])
```

互斥只能控制客户端按钮状态，插件仍应在服务端记录处理状态，避免重复审批、重复发奖等问题。

### 二次确认弹窗

```js
segment.button([
  {
    text: "删除",
    callback: "#删除数据",
    style: 3,
    modal: {
      content: "确认删除这条数据？",
      confirm_text: "删除",
      cancel_text: "取消"
    }
  }
])
```

### 官机专用字段覆盖

需要细调官方按钮结构时，可以使用 `QQBot` 字段。普通插件场景优先使用上面的通用字段。

```js
segment.button([
  {
    text: "打开相册",
    input: "#上传图片",
    QQBot: {
      render_data: {
        style: 4
      },
      action: {
        anchor: 1,
        unsupport_tips: "当前客户端不支持打开相册"
      }
    }
  }
])
```

也可以通过 `QQBot.group_id` 设置互斥组，但一般直接写顶层 `group_id` 更清晰。

## 注意事项

- 一个消息最多建议 5 行按钮，每行最多 5 个按钮；按钮过多可能被客户端或官方接口限制。
- `text` 和 `clicked_text` 不宜过长，建议控制在 32 个字符以内。
- 互斥按钮应使用稳定且唯一的 `group_id`，例如 `业务名_请求ID`。
- 审批、抽奖、兑换等关键操作不要只依赖按钮状态，服务端需要加锁或记录已处理状态。
- 官机 Markdown 消息中可以直接搭配 `segment.button(...)`，适配器会自动转换为官方 `keyboard`。
- 只有在需要完全手写官方结构时才使用原始 `keyboard` 段；普通插件尽量保持 `segment.button(...)` 写法。
