import { useState } from "react";

export default function useSignUpForm() {
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

      console.log("res", res);

      const data = await res.json();

      console.log("data", data);

      if (res.ok) {
        setSuccess("User created successfully!");
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
      } else {
        setError(data.error || "Something went wrong");
      }
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
