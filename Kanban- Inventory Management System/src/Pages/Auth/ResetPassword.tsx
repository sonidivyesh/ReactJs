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

export default function ResetPassword() {
  return (
    <>
      <Card className="border-none">
        <CardHeader className="mb-2">
          <CardTitle className="text-center text-2xl sm:text-3xl">
            Reset password
          </CardTitle>
          <CardDescription className="text-center text-xs sm:text-sm">
            Create a new password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-4">
            <div className="flex flex-col items-start space-y-2">
              <Label htmlFor="password" className="text-slate-500">
                Password*
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Label htmlFor="confirm_password" className="text-slate-500">
                Confirm Password*
              </Label>
              <Input
                id="confirm_password"
                type="password"
                placeholder="Re-enter your password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full h-[2.75rem]">Submit</Button>
        </CardFooter>
        <CardFooter className="justify-center gap-2">
          <span>Go back</span>
          <Button className="p-0 bg-transparent hover:bg-transparent text-[#2563ea]">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
