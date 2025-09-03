<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Maria Paz - Live API Demo

Uma aplicação React moderna que demonstra o uso da Google Live API para interações de voz em tempo real com IA.

## 🚀 Características

- **Streaming de Áudio em Tempo Real**: Captura de áudio do microfone com processamento em tempo real
- **Integração com Google Gemini**: Usando a Live API para conversas naturais com IA
- **Interface Moderna**: Interface limpa e responsiva construída com React e TypeScript
- **Configuração HTTPS**: Suporte opcional para HTTPS em desenvolvimento
- **Processamento de Áudio Avançado**: Cancelamento de eco e supressão de ruído

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework frontend
- **TypeScript** - Tipagem estática
- **Vite** - Bundler e servidor de desenvolvimento
- **Web Audio API** - Processamento de áudio
- **Google Gemini Live API** - IA conversacional
- **AudioWorklets** - Processamento de áudio de baixa latência

## 📦 Instalação e Execução

**Pré-requisitos:** Node.js

1. **Clone o repositório**
   ```bash
   git clone https://github.com/franciscasouza/Maria-Paz.git
   cd Maria-Paz
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a API Key**
   
   Defina a `GEMINI_API_KEY` no arquivo [.env.local](.env.local):
   ```bash
   GEMINI_API_KEY=sua_api_key_aqui
   ```

4. **Execute a aplicação**
   ```bash
   npm run dev
   ```

Acesse: `http://localhost:5173`

## 🎤 Configuração do Microfone

1. **Permissões do Navegador**: 
   - O navegador solicitará permissão para acessar o microfone
   - Clique em "Permitir" quando solicitado

2. **Recursos de Áudio**:
   - ✅ Cancelamento de eco habilitado
   - ✅ Supressão de ruído habilitada
   - ✅ Taxa de amostragem otimizada (16kHz)

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build de produção
```

## 🌐 Deploy

### Netlify/Vercel
1. Conecte seu repositório GitHub
2. Configure a variável de ambiente `GEMINI_API_KEY`
3. Deploy automático a cada push

## 📱 Acesso à Aplicação

View your app in AI Studio: https://ai.studio/apps/drive/1Ho5GTy_dVYNjPyFhJa7rAIxhRbVjXa7M

## 🔒 Segurança

- ⚠️ **Importante**: Nunca exponha sua API key no código
- Use variáveis de ambiente para configurações sensíveis
- Em produção, considere implementar um proxy para a API

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença Apache 2.0.

---

Desenvolvido com ❤️ por [Francisca Souza](https://github.com/franciscasouza)
