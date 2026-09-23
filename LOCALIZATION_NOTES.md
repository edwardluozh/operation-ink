# 本地化说明 / Localization Notes

## 已完成 / Completed

本项目已完成简体中文本地化，覆盖所有面向玩家的界面元素。

### 翻译范围
- ✅ HTML 页面 (index.html, lab.html)
- ✅ 游戏菜单和导航
- ✅ HUD 元素
- ✅ 任务目标和简报
- ✅ 控制说明
- ✅ 交互提示
- ✅ 状态消息
- ✅ 字幕文本

### 实现方式
- 中文字符串集中在 `src/i18n.ts` 模块
- 通过 ES6 模块导入使用: `import i18n from '../i18n'`
- 代码标识符保持英文
- HTML `lang` 属性设置为 `zh-CN`

## 潜在的未来改进 / Future Improvements

### 1. 完整的多语言支持
目前实现是"中文优先"的硬编码。未来可扩展为：
- 添加语言切换功能
- 支持 en-US（原始英文）和 zh-CN
- 使用浏览器语言检测 (`navigator.language`)
- 在设置菜单中添加语言选择器

示例结构：
```typescript
// src/i18n.ts
export const languages = {
  'zh-CN': { /* 中文字符串 */ },
  'en-US': { /* 英文字符串 */ },
}

export function getLanguage() {
  const saved = localStorage.getItem('language')
  if (saved && languages[saved]) return saved
  const browser = navigator.language
  return languages[browser] ? browser : 'zh-CN'
}
```

### 2. 动态文本优化
某些动态生成的文本可能需要更好的本地化：
- 时间格式（目前是 "M:SS"）
- 数字和百分比格式
- 复数形式处理（如 "1 magazine" vs "2 magazines"）

### 3. 音频字幕同步
由于移除了 IGI 语音，当前所有对话都只有字幕。如果未来添加中文配音：
- 需要同步字幕时间轴
- 添加字幕开关选项
- 支持多语言音轨

### 4. 文本长度适配
中文文本长度通常比英文短。某些 UI 元素可能需要：
- 调整按钮和标签的 `min-width`
- 优化长文本的换行
- 检查移动设备上的显示

### 5. 字体优化
当前使用系统默认字体。可以考虑：
- 添加优化的中文 Web 字体（如思源黑体子集）
- 为纸墨风格选择更合适的手写体中文字体
- 优化字体加载性能

## 测试建议 / Testing Recommendations

在不同环境测试中文显示：
- ✅ Chrome/Edge (已测试)
- ⚠️ Firefox (建议测试)
- ⚠️ Safari (建议测试，特别是 iOS)
- ⚠️ 移动浏览器（文本可能需要调整大小）

## 技术债务 / Technical Debt

- `i18n.ts` 中的 `directions` 嵌套对象可能与顶层 `back` 冲突（已修复，但结构可改进）
- 某些硬编码的英文可能仍存在于错误消息中
- 控制台日志仍为英文（这是预期的，便于开发调试）

## 贡献指南 / Contributing

如果你发现未翻译的文本或翻译错误：
1. 检查 `src/i18n.ts` 是否已有对应键
2. 搜索源代码中的硬编码字符串
3. 提交 Issue 或 PR 进行改进

优先翻译的文本：
- 面向玩家的 UI 元素
- 游戏内提示和帮助文本
- 错误消息（仅用户可见的）

不需要翻译的内容：
- 代码注释
- 开发者工具输出
- 技术错误堆栈（用于调试）
