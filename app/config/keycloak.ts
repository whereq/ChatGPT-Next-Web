export const KEYCLOAK_REALM = "whereq";
export const KEYCLOAK_CLIENT_GRANT_TYPE = "client_credentials";
export const KEYCLOAK_CLIENT_ID = "Vegeta";

// export const KEYCLOAK_HOST = "http://localhost:8080";
// export const KEYCLOAK_CLIENT_SECRET = "A9xx9P5lEfvEQaqQUAPAb0Am6qNSV6AA";
// export const KEYCLOAK_ISSUER = "http://localhost:8080/realms/whereq";

export const KEYCLOAK_HOST = "https://keytomarvel.com";
export const KEYCLOAK_CLIENT_SECRET = "7nFInd42hPl1Uz9jkepZpCm7n0OPQVCK";
export const KEYCLOAK_ISSUER = "https://keytomarvel.com/realms/whereq";

export const NEXTAUTH_URL = "http://localhost:3000";

export const KEYCLOAK_CONFIG = {
  host: KEYCLOAK_HOST,
  realm: KEYCLOAK_REALM,
  grantType: KEYCLOAK_CLIENT_GRANT_TYPE,
  clientId: KEYCLOAK_CLIENT_ID,
  clientSecret: KEYCLOAK_CLIENT_SECRET,
  issuer: KEYCLOAK_ISSUER,
  nextAuthUrl: NEXTAUTH_URL,
};
