## init

1. > npx create-next-app@latest
   > npx vercel

   ## git

   > git init
   > git status
   > git add.
   > git commit -m "init"
   > git log
   > git diff
   > git branch
   > git branch -M main
   > git remote add origin https://github.com/ilham972/dashboard-1.git
   > git push -u origin main

   # shadcn init

   > npx shadcn-ui@latest init

2. # clean

page.tsx(delete everything), layout.tsx(meta), global.tsx ->
(html,
body,
:root {
height: 100%;
})

- create 3 root folders inside (root),(dashboard),(auth) with own layout.tsx and (routes)for each except (dashboard)
- move page.tsx inside (root)/(routes)
  > shadcn-ui@latest add - then select button, form , input , dialog(all shadcn components are constant export)

## clerk authentication

- create .env and git ignore
- git secret and paste to .env
  > npm install @clerk/nextjs
- wrap the entire applicaition with <ClerkProvider>
- dicid which page public which private so create middleware.ts and copy and paste from doc
- create sign in , signup page
  -- app/(auth)/(routes)/sign-up/[[...sign-up]]/page.tsx
  -- now copy and paste from doc
- copy and paste envirenment variable into env
- go to localhost:3000
- (auth)/(routes)/layout.ts div style - flex items-center justify-center h-full - this will center the sign in card

3. create distribution for modal
   providers/modal-provider.tsx/ - create modal provider
   layout.tsx/ - import <ModalProvider>

   create model in 3 steps

   1. components/modal.tsx
   2. hooks/use-store-modal.tsx
   3. modals/store-modal.tsx
   4. triger from home page( when you use zustand state inside useeffect,import state like this const onOpen = useStoreModal((state) => state.onOpen))
   5. inside 2 div inlcude form(schema, useform, onsubmit, Form field)

4. > npm i-D prisma
   > npm install @prisma/client
   > npx prisma init

   - now prisma/schema.prisma file created and connection string added to env file
   - inside lib folder(lib created by shadcn) create prismadb.ts and write

5. connect the planet scale
   get the connection string and add to env file
   get the schma.prisma add it to prisma/schema.prisma
   now connected

6. - create schema - for store inside schema.prisma

   > npx prisma generate

   - now we can use prismadb as client by import any where because node modules updated,
   - we can also use that store what we created inside schema.prisma

7. now connect our prisma shcema into planet scale database

   > npx prisma db push

   - ok now table create in planet scale db

8. create api route for store
   app/api/stores/route.ts

   - so this will handle for creating store for user in mysql db

9. store-modal/

- add loading state in store-modal
  > npm i axios and edit the store-model in onsubmit-function-block for http or store modal route
  > npm i react-hot-toast
- create provider/toast-provider.tsx and write and then import toast-provider inside main layout
- now import toast from react-hot-toast into store modal and change the console.log(error) with toast

11. create folder app/(dashboard)/[storeid]/layout.tsx

    - write the code inside layout.tsx - for authentication and check existing store

12. create folder /[storeid]/(routes)/page.tsx and write

13. create (root)/layout.tsx and write

- create (root)/(routes) and then move the page.tsx into this folder and return null in page.tsx

14. recreate the database

    > npx prisma migrate reset
    > npx prisma generate
    > npx prisma db push

15. remove toast.success("store created"), instead we going to ridirect to dashboard

16. let's create navigation bar

17. in dashboard layout put <NavBar> instead <div>this will navbar<div>
