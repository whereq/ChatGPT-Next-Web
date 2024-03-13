"use client";
import { signOut } from "next-auth/react";
export default function SignoutOfKeycloak() {
  return <button onClick={() => signOut()}>Signout of keycloak</button>;
}
