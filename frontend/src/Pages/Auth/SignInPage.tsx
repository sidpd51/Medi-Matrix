import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router"

function SignInPage() {
    return (
        <div className="w-full h-screen flex justify-center">

            <Card className="mt-32 w-full max-w-sm max-h-82">
                <CardHeader>
                    <CardTitle className="text-center">Sign In to your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        to="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                        </div>
                        <Button variant="link" className="p-0 mt-3" asChild>
                            <Link to="/signup">Already have an account ?</Link>
                        </Button>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignInPage;