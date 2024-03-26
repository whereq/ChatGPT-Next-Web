import { KEYCLOAK_CONFIG } from "@/app/config/keycloak";
import { JWT, getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

function signoutParams(token: JWT): Record<string, string> {
  return {
    id_token_hint: token.idToken as string,
    post_logout_redirect_uri: KEYCLOAK_CONFIG.nextAuthUrl || "",
  };
}

function handleEmptyToken() {
  const response = { error: "No session present" };
  const responseHeaders = { status: 400 };
  return NextResponse.json(response, responseHeaders);
}

function sendEndSessionEndpointToURL(token: JWT) {
  const endSessionEndPoint = new URL(
    `${KEYCLOAK_CONFIG.issuer}/protocol/openid-connect/logout`,
  );
  const params: Record<string, string> = signoutParams(token);
  const endSessionParams = new URLSearchParams(params);
  const response = { url: `${endSessionEndPoint.href}/?${endSessionParams}` };
  return NextResponse.json(response);
}

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (token) {
      return sendEndSessionEndpointToURL(token);
    }
    return handleEmptyToken();
  } catch (error) {
    console.error(error);
    const response = {
      error: "Unable to signout from the session",
    };
    const responseHeaders = {
      status: 500,
    };
    return NextResponse.json(response, responseHeaders);
  }
}
