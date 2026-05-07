# 部署指南 / Deployment Guide

## 方案A：GitHub Pages（最简单）

### 步骤：
1. 在 GitHub 创建新仓库（如 `stardew-valley-guide`）
2. 推送代码：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/stardew-valley-guide.git
   git push -u origin main
   ```
3. 进入仓库 Settings → Pages → Source 选 "GitHub Actions"
4. 已配置好 `.github/workflows/deploy.yml`，push 后自动部署
5. 访问：`https://你的用户名.github.io/stardew-valley-guide/`

### 绑定自定义域名：
1. Settings → Pages → Custom domain 输入你的域名
2. DNS 添加 CNAME 记录指向 `你的用户名.github.io`

---

## 方案B：Vercel（自动更新）

### 步骤：
1. 将代码推送到 GitHub 仓库
2. 访问 vercel.com → 用 GitHub 登录
3. Import 你的仓库 → 点 Deploy
4. 自动部署完成，获得 `.vercel.app` 域名
5. 之后每次 push 自动更新

### 绑定自定义域名：
1. Vercel Dashboard → Settings → Domains
2. 添加域名，按提示配置 DNS

---

## 广告接入 (Google AdSense)

### 步骤：
1. 访问 https://adsense.google.com/ 注册账号
2. 提交网站审核（需要域名已上线且有内容）
3. 审核通过后获取广告代码（形如 `ca-pub-XXXXXXX`）
4. 在每个 HTML 文件的 `</body>` 前添加：
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-你的ID" crossorigin="anonymous"></script>
   ```
5. 将 `.ad-placeholder` 替换为真实广告单元代码：
   ```html
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-你的ID"
        data-ad-slot="广告单元ID"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
   ```

### 广告位说明：
- **Top Banner**: 页面顶部横幅，适合 728x90 或自适应
- **Mid Content**: 文章中部，适合 300x250 或自适应
- **Footer**: 页面底部，可选

### AdSense 审核要求：
- 网站有足够原创内容（已满足）
- 有隐私政策页面（建议添加）
- 域名已注册至少30天（部分情况）
- 内容不违反 Google 政策

---

## SEO 优化清单

- [x] 每页独立 title 和 meta description
- [x] hreflang 标签（中英双语）
- [x] sitemap.xml
- [x] robots.txt
- [x] 语义化 HTML 结构
- [ ] 上线后提交到 Google Search Console
- [ ] 上线后提交到百度站长平台
- [ ] 添加 favicon.ico
- [ ] 添加 Open Graph meta 标签（社交分享）

---

## 域名建议

购买平台：Namecheap、Cloudflare（最便宜）、阿里云万网
推荐域名示例：
- stardewguide.com
- xingluguguide.com
- sdvguide.net
