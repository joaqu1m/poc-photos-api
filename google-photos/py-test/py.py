import google.auth
from google.auth.transport.requests import AuthorizedSession
from google.oauth2.credentials import Credentials

# Carrega a chave JSON
creds = Credentials.from_json_keyfile_name('.json')

# Autentica a biblioteca cliente
authed_session = AuthorizedSession(creds)

# Faz uma chamada à API para obter uma lista de álbuns
response = authed_session.get('https://photoslibrary.googleapis.com/v1/albums')

# Verifica o código de status da resposta
if response.status_code == 200:
    # Imprime a lista de álbuns
    print(response.json())
else:
    # Imprime uma mensagem de erro
    print('Erro: %s' % response.content)
