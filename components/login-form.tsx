"use client";

import useLoginForm from "@/business-logic/hooks/useLoginForm";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import LabelInput from "./InputLabel";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    success,
    handleSubmit,
  } = useLoginForm();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Connectez vous à votre compte Admin</CardTitle>
          <CardDescription>
            Entrez votre email ci-dessous pour vous connecter à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <LabelInput
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <LabelInput
                label="Mot de passe"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              >
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Mot de passe oublié ?
                </a>
              </LabelInput>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Connexion
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Login with Google
                </Button> */}
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Pas encore de compte ?{" "}
              <a href="/signup" className="underline underline-offset-4">
                Créer un compte
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
