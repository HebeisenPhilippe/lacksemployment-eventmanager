import  { KeycloakService } from 'keycloak-angular';



export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'https://app.please-open.it/auth',
        realm: '51a2591c-8df8-4a7b-a6fd-6d80dd15b1cb',
        clientId: 'backend-service-eventmanager'
      },
      initOptions: {
        checkLoginIframe:true,
        checkLoginIframeInterval: 30
      },
      enableBearerInterceptor: false
    });
}
