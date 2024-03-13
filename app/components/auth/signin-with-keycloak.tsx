"use client";
import { signIn } from "next-auth/react";
export default function signinWithKeycloak() {
  return (
    <button onClick={() => signIn("keycloak")}>Signin with keycloak</button>
  );
}
