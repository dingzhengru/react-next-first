## 檔案架構

### pages

參考: [官方](https://nextjs.org/docs/routing/introduction)

**\_app.js** 是入口檔案

跟 vue 的 nuxt 雷同，會直接根據檔案路徑來產生路徑

ex: pages/index.js 對應 /
ex: pages/api/hello 對應 /api/hello (可以用來測試 fetch data)
ex: pages/blog/[slug].js → /blog/:slug

## fetch data

參考: [官方](https://nextjs.org/docs/basic-features/data-fetching)

getStaticProps, getServerSideProps, getStaticPaths 等這類方法只在 pages 中的 js 才有效

- getStaticProps (Static Generation): Fetch data at build time.
- getStaticPaths (Static Generation): Specify dynamic routes to pre-render based on data.
- getServerSideProps (Server-side Rendering): Fetch data on each request.

## Context

跟原本用法一樣，若要讓子頁面取得改變方法可以於 \_app.js 放置方法
`<Component {...pageProps} changeTheme={setTheme} />`

## Proxy

參考: https://nextjs.org/docs/migrating/incremental-adoption#rewrites

next.config.js

```js
module.exports = {
  async rewrites() {
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        destination: `https://proxy.example.com/:path*`,
      },
    ];
  },
};
```

## 處理 Error (404, 500 ...)

參考: [官方](https://nextjs.org/docs/advanced-features/custom-error-page)

新增 pages/\_error.js，可以在裡面執行錯誤處理(轉址)

也可以只客製 404 頁面，新增 pages/404.js

## Dynamic Import

參考: [官方](https://nextjs.org/docs/advanced-features/dynamic-import)
