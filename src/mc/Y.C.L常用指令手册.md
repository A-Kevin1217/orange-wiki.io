# Minecraft 插件命令手册

## 🔐 AuthmeReReloaded
| 命令 | 功能说明 |
|------|----------|
| `/register <密码> <确认密码>` | 注册新账号 |
| `/login <密码>` | 登录账号 |

# Minecraft 插件命令手册

## ✈Tpa 传送系统
| 命令 | 功能说明 |
|------|----------|
| `/tpa <玩家名称>` | 向玩家发送传送请求 |
| `/tphere <玩家名称>` | 请求玩家传送到你身边 |
| `/tplogout <玩家名称>` | 传送到该玩家最后一次下线的位置 |
| `/tpaccept`or`/tpdeny`| 接受或拒绝对方的传送请求 |
| `/denys[add/remove][玩家名称]` | 列出玩家的黑名单列表 |
| `/warp<传送点>` | 传送到传送点 |
| `/setwarp<传送点>` | 设置传送点 |
| `/delwarp<传送点>` | 删除传送点 |
| `/home<家>` | 传送到家 |
| `/homes` | 列出你设置的家 |
| `/sethome<家>` | 设置家 |
| `setdefaulthome<家>` | 设置默认的家 |
| `/delhome<家>` | 删除家 |
| `/spawn` | 传送到主城 |
| `/back` | 传送到上一次的位置 |
| `/rtp` | 随机传送 |

## 📦 CoreProtect
| 命令 | 功能说明 |
|------|----------|
| `/co help` | 显示命令帮助列表 |
| `/co inspect` | 开启方块查询模式 |
| `/co rollback <参数>` | 回档方块操作记录 |
| `/co restore <参数>` | 撤销回档操作 |
| `/co lookup <参数>` | 查看方块历史记录 |
| `/co purge <参数>` | 清理过期数据 |
| `/co reload` | 重载插件配置 |
| `/co version` | 查看插件版本 |

## 🪑 Gsit 姿势系统
| 命令 | 功能说明 |
|------|----------|
| `/sit` 或 `/gsit` | 坐在当前方块上 |
| `/lay` 或 `/glay` | 躺在当前方块上 |
| `/crawl` 或 `/gcrawl` | 趴在地上 |

## 🎩 Hat 物品帽子
| 命令 | 功能说明 |
|------|----------|
| `/hat` | 将手持物品设为头盔 |

## 📋 PlayerMenu 菜单管理
| 命令 | 功能说明 |
|------|----------|
| `/plm reload` | 重载插件配置 |
| `/plm create <大小>` | 创建新菜单 |
| `/plm view [名称]` | 编辑指定菜单 |
| `/plm getMaterial` | 获取物品材质代码 |
| `/plm close` | 关闭当前菜单 |

## 🏆 PlayerTitle 称号系统
### 玩家命令
| 命令 | 功能说明 |
|------|----------|
| `/plt shop` | 打开称号商城 |
| `/plt open` | 打开称号仓库 |

### 管理员命令
| 命令 | 功能说明 |
|------|----------|
| `/plt addReward <数量> <类型> <金额>` | 添加称号奖励 |
| `/plt card [create/random]` | 创建/随机生成称号卡 |
| `/plt coin [give/set/take] <玩家> <金额>` | 管理玩家称号币 |
| `/plt convert [mysql/sqlite]` | 转换数据库类型 |
| `/plt player [addTitle/setTitle/listTitle/deleteTitle]` | 管理玩家称号 |
| `/plt title [add/delete/list/import/description]` | 管理称号库 |
| `/plt view [类型] (玩家)` | 查看管理界面 |
| `/plt clear [类型]` | 清理过期数据 |

## 🎭 SkinsRestorer 皮肤管理
### 玩家命令
| 命令 | 功能说明 |
|------|----------|
| `/skin` | 打开皮肤菜单 |
| `/skin <皮肤名>` | 设置指定皮肤 |
| `/skin url <链接> [steve/slim]` | 通过URL设置皮肤 |
| `/skin update` | 更新当前皮肤 |
| `/skin clear` | 清除皮肤设置 |
| `/skins` | 打开皮肤库 (1.13+) |

### 管理员命令
| 命令 | 功能说明 |
|------|----------|
| `/skin set <玩家> <皮肤名>` | 设置玩家皮肤 |
| `/skin clear <玩家>` | 清除玩家皮肤 |
| `/skin update <玩家>` | 更新玩家皮肤 |
| `/sr drop <皮肤名>` | 删除皮肤数据 |
| `/sr createcustom <名称> <URL>` | 创建自定义皮肤 |
| `/sr reload` | 重载插件配置 |
| `/sr props <玩家>` | 查看皮肤属性 |
| `/sr status` | 检查插件状态 |

## 🟢 ViewSlimeChunk
| 命令 | 功能说明 |
|------|----------|
| `/slime` | 显示周围史莱姆区块 |
| `/slimereload` | 重载配置文件 |

## 🪓 WorldEdit 世界编辑
完整命令手册：  
🔗 [https://www.bilibili.com/read/cv17916414](https://www.bilibili.com/read/cv17916414)
