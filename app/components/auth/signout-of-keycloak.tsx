"use client";
import federatedSignOut from "@/app/utils/federated-signout";
export default function SignoutOfKeycloak() {
  return (
    <button onClick={() => federatedSignOut()}>Signout of keycloak</button>
  );
}
