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

import googleIcon from "../../assets/googleIcon.png";

export default function Register() {
  return (
    <>
      <Card className="border-none">
        <CardHeader className="mb-2">
          <CardTitle className="text-center text-2xl sm:text-3xl">
            Create an account
          </CardTitle>
          <CardDescription className="text-center text-xs sm:text-sm">
            Start your 30-day free trial.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-4">
            <div className="flex flex-col items-start space-y-2">
              <Label htmlFor="name" className="text-slate-500">
                Name*
              </Label>
              <Input id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Label htmlFor="email" className="text-slate-500">
                Email*
              </Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Label htmlFor="password" className="text-slate-500">
                Password*
              </Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full h-[2.75rem]">Get started</Button>
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
          <span>Already have an account?</span>
          <Button className="p-0 bg-transparent hover:bg-transparent text-[#2563ea]">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
