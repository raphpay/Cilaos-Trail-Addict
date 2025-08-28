import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useSignUpForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstName, lastName }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(
          "Compte créé ! Vous allez être redirigé pour vous connecter."
        );
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
      } else {
        setError(data.error || "Something went wrong");
      }

      setTimeout(() => {
        setSuccess("");
        router.push("login");
      }, 5000);
    } catch (error) {
      setError("Erreur lors de la création de compte. Veuillez réessayer");
    }
  };

  return {
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
  };
}
