import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useLoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Connexion réussie");
        setEmail("");
        setPassword("");

        router.push("/dashboard");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (error) {
      setError("Erreur lors de la connexion");
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    success,
    handleSubmit,
  };
}
