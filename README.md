# Demo

1. 透過 github + vercel 的自動部署，可以用此[連結](https://heros-app-pink.vercel.app/heroes)進行瀏覽

2. 此專案有基本的 RWD，可以透過手機瀏覽器進行瀏覽操作

3. 基本的錯誤處理，若 API request 失敗，會顯示錯誤訊息

# 我們該如何執行完成的 package

## Development

產生一個 `.env.development` 的檔案，並在檔案中設定以下的環境變數

```bash
REACT_APP_API_URL="{API_DOMAIN}"
```

執行以下的指令，即可在本地端啟動專案

```bash
npm install & npm run dev
```

執行完畢後，即可在瀏覽器中輸入 `http://localhost:3000` 進行瀏覽

## Production

產生一個 `.env.production` 的檔案，並在檔案中設定以下的環境變數

```bash
REACT_APP_API_URL="{API_DOMAIN}"
```

執行以下的指令，即可將專案進行打包，並在根目錄下產生 `build` 資料夾，最後即可將該資料夾部署至 server

```bash
npm run build
```

# 專案的架構、Web 的架構邏輯

```bash
├── components                  # 頁面需要的 components
├── elements                    # 一些 stateles 的元件，如 button、loading 等等
├── pages                       # 依循 url 渲染的頁面
├── redux                       # redux 的相關設定
│   ├── actions                 # 觸發資料變動的 action
│   ├── reducers                # 生成 state 的 function，並改變 store 的 state
│   ├── sagas                   # 用來處理非同步的 generator function
│   ├── actionTypes.ts          # 定義所有的 action types
│   ├── rootReducers.ts         # 將所有的 reducers 合併成一個
│   ├── rootSagas.ts            # 將所有的 sagas 合併成一個
├── shared                      # 存放共用的設定
│   ├── api.config.ts           # 定義 api 的基本設定，包括 api 的 base url
│   ├── utils.ts                # 一些共用的 function
├── static                      # 放靜態資源的地方，包含 images、全域的 color 以及 RWD 的 media query
├── types                       # 個別的型別定義
├── App.tsx                     # 主要的 App component，包含 dom router 的設定
├── index.tsx                   # 進入點
├── README.md                   # 此 README
└── package.json                # 這個 package 的相依套件、各種 scripts 等等
```

# 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介

- styled-components:

  - 用來處理 css in js 的 library，可以透過 styled-components 來寫 css，也可透過 props template string 來設定 css 的樣式

- redux:

  - 處理專案的狀態管理，將所有的 state 都放在一個 store 裡，並透過 reducer function 來改變 state

- redux-saga:

  - 用來處理非同步的 action，如 api 的 request
  - 可以透過 generator function 來處理非同步的 action，並使用 call、takeEvery 或是 takeLatest 等等做更細膩的操作

- react-router-dom:

  - 用來處理 react 的 router，可以透過 react-router-dom 來設定 router，並透過 Routes、Route 等等來設定 router 的路徑，透過 Navigate 來導向路徑

- axios:

  - 用來處理 api 的 request，可以透過 axios 的 api 來發送 request，並處理 response，是以 Promise 為基礎的 library

- dotenv:

  - 用來處理環境變數的 library，可以透過 dotenv 來設定環境變數，並在程式中使用

- eslint:

  - 用來檢查程式碼的規範，可以透過 eslint 來檢查程式碼的規範，包含縮排、命名規則以及 typescript 的規範

- cz-conventional-changelog:
  - 用來規範 commit message 的格式，能更詳細的描述 commit 的內容

# 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

1. 在 utils 或是 shared 的 function 中，會寫註解來描述 function 的功能
2. 在頁面中，會寫註解來描述 useEffect 的目的，或是轉換資料再 render 的目的
3. 描述 styled-components 的動畫效果

# 在這份專案中你遇到的困難、問題，以及解決的方法

1. React-router-dom 如何設定初始路徑

   - 在 App.tsx 中設定路徑時在猶豫是否要分兩個路徑 /heroes 和 /heroes/:heroId，最後考慮到不重新渲染 Hero List，所以最後選擇只設定 `/heroes/:heroId` 的路徑，並透過 location.pathname 來判斷 `/heroes/:heroId` 的 heroId 是什麼，若存在則顯示 Hero detailed 的能力值
   - 並在 `/` 的路徑透過 `<Navigate to="/heroes/:heroId" />` 來讓使用者導向 `/heroes/:heroId`

   ```typescript
   // --- other code ---
   <Routes>
     <Route path="/" element={<Navigate to="/heroes/:heroId" />} />
     <Route path="/heroes/:heroId" element={<Herors />} />
   </Routes>
   ```

2. 第一次嘗試使用 styled-components + typescript 的組合但不確認要如何設定型別

   - 解法就是若要設定 props 的型別，可以在 styled-component 後面加上型別，例如以下設定

   ```typescript
   const HeroCardOuterContainer = styled.div<{ selected: boolean }>`
     position: relative;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 250px;
     border-radius: 15px;
     z-index: 2;
     margin: 12px;

     transition: transform 0.5s;
     transform: ${(props) => props.selected && 'scale(1.1)'};
   `;
   ```

   - 使用時則可以透過 props 來傳遞，也可透過錢號來設定 props 的型別

   ```typescript
   <HeroAvatar src={heroImage} alt="hero" $hover={onHover} width={200} height={200} loading="lazy" />
   ```

3. 在使用 dotenv 時在環境變數檔案設定 API domain 沒效果，最後發現是因為環境變數的名稱沒有以 `REACT_APP` 作為前綴，參考此[文件](https://pjchender.dev/react-bootcamp/docs/bootcamp/week4/create-react-app-setting/)

4. vercel 在部署時，因為沒有設定環境變數，所以在部署時會出現錯誤打不了 API 的問題，最後透過 vercel 的平台去設定環境變數後再重新部署，即可解決此問題

5. 渲染 hero 圖片時若沒有對 img 做 Sizing hints 會出現 hero 外層的 div 先被壓縮，再放大的情況，對於使用者在互動上會產生不好的體驗，，最後透過 img tag 設定 width 和 height 來解決此問題，用 memo 的方式來避免不必要的 re-render

# Source

1. 產生文字 LOGO：[fontmeme](https://fontmeme.com/netflix-font/#textstyle)
2. 背景圖片來源：[pxfuel](https://www.pxfuel.com/en/desktop-wallpaper-hserp)
