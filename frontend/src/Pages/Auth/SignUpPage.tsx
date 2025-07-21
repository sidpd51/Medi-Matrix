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

function SignUpPage() {
    return (
        <div className="w-full h-screen flex justify-center">
            <Card className="mt-32 w-full max-w-sm max-h-100">
                <CardHeader>
                    <CardTitle className="text-center">Sign Up to your account</CardTitle>
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
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Confirm Password</Label>
                                <Input id="confirm-password" type="password" required />
                            </div>
                        </div>
                        <Button variant="link" className="p-0 mt-3" asChild>
                            <Link to="/signin">Already have an account ?</Link>
                        </Button>
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignUpPage;