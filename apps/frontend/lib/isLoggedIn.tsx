// store.ts
import { create } from 'zustand'
import jwt from 'jsonwebtoken'
import { toast } from 'sonner'

type Store = {
  isLoggedIn: boolean
  verifyUser: (token: boolean) => void
}

const useStore = create<Store>((set) => ({
  isLoggedIn: false,

  verifyUser:(token:boolean)=>set({isLoggedIn:token})
//   verifyUser: (token: string) => {
//     try {
//         // toast.success(process.env.JWT_SECRET)
//         console.log(process.env.JWT_SECRET)
//       jwt.verify(token, "jsonWebTokenNobita") // Correct the env var name
//       set({ isLoggedIn: true })
//     } catch (error) {
//       set({ isLoggedIn: false })
//     }
//   }
}))

export default useStore
