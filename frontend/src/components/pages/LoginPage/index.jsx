import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import "./styles.css";

const LoginPage = () => {
  return (
    <div className="login__page">
      <div className="login__page--container">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Sign up now</CardDescription>
          </CardHeader>
          <CardContent>
            <Label>Email</Label>
            <Input className="mb-4" type="email" />
            <Label>Password</Label>
            <Input type="password" />

            <Button className="mt-4">Sign in</Button>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
};

export default LoginPage;