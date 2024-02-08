# Use a imagem Node.js como base
FROM node:14

# Crie o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependência
COPY . /app/

# Instale as dependências
RUN npm install

# Copie o código-fonte
COPY . .

# Exponha a porta 3000 (ou a porta que seu aplicativo usa)
EXPOSE 3300

# Comando de inicialização do aplicativo
CMD ["npm", "start"]