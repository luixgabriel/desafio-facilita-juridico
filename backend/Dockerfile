FROM node:18

WORKDIR /usr/src/app

# Copiar apenas os arquivos de definição de dependências primeiro
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar os arquivos restantes
COPY . .

# Build da aplicação
RUN npm run build

# Expor a porta
EXPOSE 3000

# Comando para executar a aplicação
CMD ["npm", "start"]
