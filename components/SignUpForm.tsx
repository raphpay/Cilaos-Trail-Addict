"use client";

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
          <form>
            <div className="flex flex-col gap-6">
              <LabelInput
                label="Nom"
                id="name"
                placeholder="César"
                type="text"
                required
              />
              <LabelInput
                label="Prénom"
                id="firstname"
                placeholder="Jules"
                type="text"
                required
              />
              <LabelInput
                label="Email"
                id="email"
                placeholder="jules@rome.com"
                type="email"
                required
              />
              <LabelInput
                label="Mot de passe"
                id="password"
                type="password"
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
