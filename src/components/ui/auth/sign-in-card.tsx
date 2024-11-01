"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { useForm } from "react-hook-form"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "../card"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    Form,
    FormMessage
} from "../form"
import { Button } from "../button"
import { Input } from "../input"
import { Separator } from "../separator"
import Link from "next/link"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const SignInCard = () => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">

            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome back!
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <Separator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="*****" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            size={"lg"}
                            className="w-full">
                            Login
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <Separator />
            </div>
            <CardContent className="p-7 space-y-4">
                <Button
                    variant={"secondary"}
                    size={"lg"}
                    className="w-full"
                >
                    <FcGoogle className="mr-2" />
                    Login with Google
                </Button>
                <Button
                    variant={"secondary"}
                    size={"lg"}
                    className="w-full"
                >
                    <FaGithub className="mr-2" />
                    Login with Github
                </Button>
            </CardContent>
            <div className="px-7">
                <Separator />
            </div>
            <CardContent className="p-4 text-center">
                <Link href={"/sign-up"}>
                    new user? <span className="text-blue-400 hover:underline">Signup</span>
                </Link>
            </CardContent>
        </Card>
    )
}