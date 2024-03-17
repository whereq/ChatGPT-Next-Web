"use client";
import federatedSignOut from "@/app/utils/federated-signout";

import Locale from "../../locales";

export default function SignoutOfKeycloak() {
  return (
    <button onClick={() => federatedSignOut()}>{Locale.Navbar.Signout}</button>
  );
}
