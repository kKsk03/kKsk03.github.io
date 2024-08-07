---
title: 导航
layout: home
---

# 导航

::: info
- 🤔 整理日常中经常使用的一些站点
- 🤨 也许还有东西要补充？太多东西可以加了......
- 😶‍🌫️ 倒是有些东西好像不是文档站就能说明白的（悲）
:::

<script setup>
import { NAV_DATA } from './data'
</script>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>