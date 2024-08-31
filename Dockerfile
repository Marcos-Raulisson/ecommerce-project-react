# Use uma imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta na qual a aplicação irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]