# Submit chat
**app\components\chat.tsx**
- line 1528-1533
- doSubmit
- line 759-761
```
 chatStore
      .onUserInput(userInput, attachImages)
      .then(() => setIsLoading(false));
```
- app\store\chat.ts
```
async onUserInput(content: string, attachImages?: string[]) {
```
- line 348-397 make request and waiting for response(finish)

- api.ts app\client\api.ts
- line 96-102
```
  constructor(provider: ModelProvider = ModelProvider.GPT) {
    if (provider === ModelProvider.GeminiPro) {
      this.llm = new GeminiProApi();
      return;
    }
    this.llm = new ChatGPTApi();
  }
```
**So the idea is make a MockApi to communicate with WhereQ Gpt Mock service for testing