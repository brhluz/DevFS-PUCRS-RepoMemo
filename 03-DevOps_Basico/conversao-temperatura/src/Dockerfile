# garanta sempre a tag na construção para evitar problemas com mudança drásticas entre as versões mais novas (latest)
# é uma boa prática para grantir indempotencia na construção da imagem
# https://hub.docker.com/_/node
FROM node:22.14.0
WORKDIR /app
# 1° copia os pacotes de dependências antes da execução do npm install
# Isso evita que o npm instale novamente as dependências se não houver mudanças nos pacotes, porque se copiar todo o projeto antes
# qualquer alteração no projeto fará com que o npm instale novamente as dependências. E o interessante 
# é que o npm instale as dependências apenas quando houver mudanças nos pacotes.
COPY package*.json ./
RUN npm install
# --------------------------
COPY . .    
EXPOSE 8080
CMD [ "node", "server.js" ]
