## Comando

Da permissão para o NPM instalar o yarn
```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
Instala o YARN
```bash
npm install --global yarn
```
Instala pacotes
```bash
yarn
```

Criar as Migration
```bash
yarn typeorm migration:generate -n CreateAppEntities
```