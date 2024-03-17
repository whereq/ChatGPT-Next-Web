"use client";
import { signIn } from "next-auth/react";

import Locale from "../../locales";

export default function signinWithKeycloak() {
  return (
    <button
      onClick={() =>
        signIn("keycloak").then((response) => {
          console.log(response);
        })
      }
    >
      {Locale.Navbar.Signin}
    </button>
  );
}
