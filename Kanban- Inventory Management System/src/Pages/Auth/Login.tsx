import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import googleIcon from "../../assets/googleIcon.png";

export default function Login() {
  return (
    <>
      <Card className="border-none">
        <CardHeader className="mb-2">
          <CardTitle className="text-center text-2xl sm:text-3xl">
            Log in to your account
          </CardTitle>
          <CardDescription className="text-center text-xs sm:text-sm">
            Welcome back! Please enter your details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-4">
            <div className="flex flex-col items-start space-y-2">
              <Label htmlFor="email" className="text-slate-500">
                Email
              </Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Label htmlFor="password" className="text-slate-500">
                Password
              </Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember for 30 days
                </Label>
              </div>
              <Button className="p-0 bg-transparent hover:bg-transparent text-[#2563ea]">
                Forgot password
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full h-[2.75rem]">Sign in</Button>
        </CardFooter>
        <CardFooter>
          <Button className="w-full h-[2.75rem] bg-transparent hover:bg-transparent text-current border border-[#2563ea] flex items-center gap-4">
            <img
              src={googleIcon}
              alt="Icon"
              className="h-[1.5rem] w-[1.5rem]"
            />
            <span>Sign in with Google</span>
          </Button>
        </CardFooter>
        <CardFooter className="justify-center gap-2">
          <span>Don't have an account?</span>
          <Button className="p-0 bg-transparent hover:bg-transparent text-[#2563ea]">
            Sign up
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
