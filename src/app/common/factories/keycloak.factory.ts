import  { KeycloakService } from 'keycloak-angular';



export function KeycloakFactory(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'https://app.please-open.it/auth',
        realm: '51a2591c-8df8-4a7b-a6fd-6d80dd15b1cb',
        clientId: 'le-frontend'
      },
      initOptions: {
        checkLoginIframe:true,
        checkLoginIframeInterval: 30
      },
      enableBearerInterceptor: true
    });
}
