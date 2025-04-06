
## 🛠️ Comandos Essenciais (Modo Tutorial)

### 🔧 Criando a imagem Docker

Para construir uma imagem Docker, siga os passos abaixo:

1. Certifique-se de estar no diretório onde está localizado o `Dockerfile` do seu projeto.
2. Use o comando `docker build` com os parâmetros apropriados:

```bash
docker build -t usuario/nome-da-imagem:tag .
```

#### Explicação da sintaxe:
- `docker build`: comando para construir uma imagem Docker.
- `-t`: parâmetro que define uma tag (nome) para a imagem.
- `usuario/nome-da-imagem:tag`: nome e versão da imagem (exemplo: `brhluz/aula-conversao-temperatura:v1`).
- `.`: indica que o build deve ser feito a partir do diretório atual.

#### Exemplo prático:
```bash
docker build -t brhluz/aula-conversao-temperatura:v1 .
```

---

### 🚀 Executando um container com a imagem

Depois de criar a imagem, você pode rodá-la com o comando `docker container run`:

```bash
docker container run -d -p porta-local:porta-container nome-da-imagem
```

#### Explicação da sintaxe:
- `docker container run`: comando para iniciar um novo container.
- `-d`: executa o container em segundo plano (modo daemon).
- `-p porta-local:porta-container`: mapeia uma porta do seu computador (host) para o container.
- `nome-da-imagem`: o nome da imagem criada anteriormente.

#### Exemplo prático:
```bash
docker container run -d -p 8080:8080 brhluz/aula-conversao-temperatura:v1
```

---

### ☁️ Enviando a imagem para o Docker Hub

Para compartilhar sua imagem com outras pessoas, envie-a para o Docker Hub:

#### 1. Faça login:
```bash
docker login
```

#### 2. Envie a imagem com uma tag específica:
```bash
docker push brhluz/aula-conversao-temperatura:v1
```

#### 3. (Opcional) Use a tag `latest` para marcar como versão mais recente:
```bash
docker tag brhluz/aula-conversao-temperatura:v1 brhluz/aula-conversao-temperatura:latest
docker push brhluz/aula-conversao-temperatura:latest
```

---

### 📁 Utilizando `.dockerignore`

Crie um arquivo chamado `.dockerignore` na raiz do seu projeto com a seguinte estrutura:

```
node_modules
.env
*.log
logs/
.git
```

#### Para que serve?
Esse arquivo diz ao Docker quais arquivos/pastas devem ser ignorados no momento do build, evitando que coisas desnecessárias sejam copiadas para a imagem.

---

### 🏷️ Adicionando uma nova tag à imagem

Use o comando `docker tag` para criar um novo nome (ou alias) para uma imagem existente:

```bash
docker tag imagem-existente:tag nova-imagem:outra-tag
```

#### Explicação da sintaxe:
- `docker tag`: comando para adicionar uma nova tag (nome/versão) a uma imagem já existente.
- `imagem-existente:tag`: nome da imagem que você já criou (ex: `brhluz/aula-conversao-temperatura:v1`).
- `nova-imagem:outra-tag`: novo alias para a mesma imagem (ex: `brhluz/aula-conversao-temperatura:latest`).


#### Exemplo prático:
```bash
docker tag brhluz/aula-conversao-temperatura:v1 brhluz/aula-conversao-temperatura:latest
```

---