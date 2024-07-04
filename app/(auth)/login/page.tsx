import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GooogleIcon from '../../../public/google.svg'
import { signIn } from "next-auth/react";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";


export default async function Login(){
    return(
        <div className="mt-24 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
            <form>
                <h1 className="text-3xl font-semibold text-white ">Login</h1>
                <div className="space-y-4 mt-5">
                    <Input type="email" name="email" placeholder="Email" 
                    className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"/>
                    <Button type="submit" variant={"destructive"} className="w-full bg-[#E50914]">Login</Button>
                </div>
            </form>
            <div className="text-gray-500 text-sm mt-2">
                New to Netflix? <Link className="text-white hover:underline" href="/sign-up">
                Sign Up</Link>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <GithubSignInButton />
                <GoogleSignInButton />
                        
            </div>
        </div>
    );
};