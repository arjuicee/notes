"use client"

import { Logo } from '@/components/logo';

export default function Loading({msg}:{msg: string}) {
    return (
        <div className="flex gap-3 text-white h-[100dvh] w-screen flex-col z-50">
            <div className="flex justify-center items-center h-full w-full transition-all drop-shadow-xl">
                <Logo className={"size-80"}/>
            </div>

            <div className="flex justify-center flex-col items-center mb-10 gap-2 text-muted-foreground text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mb-4"></div>

                <small>Made with 💖 by μLearn UCEK</small>

                <small>
                    Forked by{" "}
                    <a
                        href="https://github.com/arjuicee/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-gray-200 transition-all"
                    >
                        arjuicee
                    </a>
                </small>
            </div>
        </div>
    )
}
