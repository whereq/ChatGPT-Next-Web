import { signOut } from "next-auth/react";

export default async function federatedSignout() {
  try {
    const response = await fetch("/api/auth/federated-signout");
    const data = await response.json();
    console.log("federated-signout", data);
    if (response.ok) {
      await signOut({ redirect: false });
      window.location.href = data.url;
      return;
    }
    throw new Error(data.error);
  } catch (error) {
    console.log(error);
    alert(error);
    await signOut({ redirect: false });
    window.location.href = "/";
  }
}
