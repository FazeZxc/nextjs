// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"

// import React from 'react'

// function page() {
//     return (
//         <div>
//             <Card>
//                 <CardHeader>
//                     <CardTitle>
//                         <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
//                             Create an account
//                         </h1>
//                     </CardTitle>
//                     <CardDescription></CardDescription>
//                 </CardHeader>
//                 <CardContent></CardContent>
//                 <CardFooter>

//                 </CardFooter>
//             </Card>
//         </div>
//     )
// }

// export default page


import { auth, signIn, signOut } from "../../../auth";
// import { auth, signIn, signOut } from "@/auth";

function SignIn() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("github");
            }}
        >
            <p>You are not logged in</p>
            <button type="submit">Sign in with GitHub</button>
        </form>
    );
}

function SignOut({ children }: { children: React.ReactNode }) {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <p>{children}</p>
            <button type="submit">Sign out</button>
        </form>
    );
}

export default async function Page() {
    let session = await auth();
    let user = session?.user?.email;

    return (
        <section>
            <h1>Home</h1>
            <div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div>
        </section>
    );
}