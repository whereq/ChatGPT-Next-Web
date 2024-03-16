declare namespace NodeJS {
  export interface ProcessEnv {
    KEYCLOAK_HOST: string
    KEYCLOAK_REALM: string
    KEYCLOAK_GRANT_TYPE: string
    KEYCLOAK_CLIENT_ID: string
    KEYCLOAK_CLIENT_SECRET: string
    KEYCLOAK_ISSUER: string
  }
}