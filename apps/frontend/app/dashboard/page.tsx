"use client"
import { Navigation } from "@/components/header";
import { Hero } from "@/components/hero";
import useStore from "@/lib/isLoggedIn";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Page(){
    const { isLoggedIn } = useStore()
    const router = useRouter()
    if(!isLoggedIn){
        console.log(isLoggedIn)
        toast.error("you are not logged in")
        router.push('/signin')
        return 
    }
    return <div>
        <Navigation/>
        <Hero/>
    </div>
}