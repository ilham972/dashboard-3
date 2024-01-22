<p><a target="_blank" href="https://app.eraser.io/workspace/hNMgMTwevGpJIHnl4KTB" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

## init
1.  `npx create-next-app@latest `[`﻿Figure 1`](https://app.eraser.io/workspace/hNMgMTwevGpJIHnl4KTB?elements=VEo6Pk2XKSYwtT2nwJHZDQ)`
npx vercel `[`﻿Figure 1`](https://app.eraser.io/workspace/hNMgMTwevGpJIHnl4KTB?elements=VEo6Pk2XKSYwtT2nwJHZDQ)` ` 
|  |  |  |
| ----- | ----- | ----- |
|  |  |  |
|  |  |  |
## git
```
 git init
git status
git add.`﻿`
git commit -m "init"
git log  
git diff
git branch
git branch -M main
git remote add origin [﻿https://github.com/ilham972/dashboard-1.git](https://github.com/ilham972/dashboard-1.git)
git push -u origin main 
```
# shadcn init
```bash
` npx shadcn-ui@latest init ` 
```
# clean
> page.tsx(delete everything), layout.tsx(meta), global.tsx ->
(html,
body,
:root {
height: 100%;
})

- create 3 root folders inside (root),(dashboard),(auth) with own layout.tsx and (routes)for each except (dashboard)
- move page.tsx inside (root)/(routes) shadcn-ui@latest add - then select button, form , input , dialog(all shadcn components are constant export) 
## clerk authentication
- create .env and git ignore
- get secret and paste to .env npm install @clerk/nextjs 
- wrap the entire applicaition with 
- dicid which page public which private so create middleware.ts and copy and paste from doc
- create sign in , signup page
-- app/(auth)/(routes)/sign-up/[[...sign-up]]/page.tsx
-- now copy and paste from doc
- copy and paste envirenment variable into env
- go to localhost:3000
- (auth)/(routes)/layout.ts div style - flex items-center justify-center h-full - this will center the sign in card
1. create distribution for modal
providers/modal-provider.tsx/ - create modal provider
layout.tsx/ - import create model in 3 steps
    1. components/modal.tsx
    2. hooks/use-store-modal.tsx
    3. modals/store-modal.tsx
    4. triger from home page( when you use zustand state inside useeffect,import state like this const onOpen = useStoreModal((state) => state.onOpen))
    5. inside 2 div inlcude form(schema, useform, onsubmit, Form field)
2.  npm i-D prisma
npm install @prisma/client
npx prisma init 
    - now prisma/schema.prisma file created and connection string added to env file
    - inside lib folder(lib created by shadcn) create prismadb.ts and write
3. connect the planet scale
get the connection string and add to env file
get the schma.prisma add it to prisma/schema.prisma
now connected
4.  npx prisma generate 
    - create schema - for store inside schema.prisma
    - now we can use prismadb as client by import any where because node modules updated,
    - we can also use that store what we created inside schema.prisma
5. now connect our prisma shcema into planet scale database npx prisma db push 
    - ok now table create in planet scale db
6. create api route for store
app/api/stores/route.ts
    - so this will handle for creating store for user in mysql db
7. store-modal/
- add loading state in store-modal npm i axios and edit the store-model in onsubmit-function-block for http or store modal route
npm i react-hot-toast 
- create provider/toast-provider.tsx and write and then import toast-provider inside main layout
- now import toast from react-hot-toast into store modal and change the console.log(error) with toast
1. create folder app/(dashboard)/[storeid]/layout.tsx
    - write the code inside layout.tsx - for authentication and check existing store
2. create folder /[storeid]/(routes)/page.tsx and write
3. create (root)/layout.tsx and write
- create (root)/(routes) and then move the page.tsx into this folder and return null in page.tsx
1. recreate the database npx prisma migrate reset
npx prisma generate
npx prisma db push 
2. remove toast.success("store created"), instead we going to ridirect to dashboard
3. let's create navigation bar
4. in dashboard layout put  instead this will navbar 



<!--- Eraser file: https://app.eraser.io/workspace/hNMgMTwevGpJIHnl4KTB --->