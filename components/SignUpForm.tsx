"use client";

import useSignUpForm from "@/business-logic/hooks/useSignUpForm";
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

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    success,
    handleSubmit,
  } = useSignUpForm();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Inscription</CardTitle>
          <CardDescription>
            Entrez vos informations ci-dessous pour vous inscrire
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <LabelInput
                label="Nom"
                id="name"
                placeholder="César"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <LabelInput
                label="Prénom"
                id="firstname"
                placeholder="Jules"
                type="text"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <LabelInput
                label="Email"
                id="email"
                placeholder="jules@rome.com"
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
              />

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Inscription
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Login with Google
                </Button> */}
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Déjà enregistré ?{" "}
              <a href="/login" className="underline underline-offset-4">
                Se connecter
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
