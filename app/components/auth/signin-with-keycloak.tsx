"use client";
import { signIn } from "next-auth/react";
export default function signinWithKeycloak() {
  return (
    <button
      onClick={() =>
        signIn("keycloak").then((response) => {
          console.log(response);
        })
      }
    >
      Signin with keycloak
    </button>
  );
}
