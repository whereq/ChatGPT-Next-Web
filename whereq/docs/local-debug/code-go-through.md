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

- home.tsx app\components\home.tsx
  load LLM Client according to configuration
**NOTE:** Even though the pre-configured mode is in config.ts,the app will actually load the configuration from local storage after the first time run of the application!!!
```
export function useLoadData() {
  const config = useAppConfig();

  var api: ClientApi;
  if (config.modelConfig.model.startsWith("gemini")) {
    api = new ClientApi(ModelProvider.GeminiPro);
  } else if (identifyDefaultClaudeModel(config.modelConfig.model)) {
    api = new ClientApi(ModelProvider.Claude);
  } else if (config.modelConfig.model.startsWith("whereq")) {
    api = new ClientApi(ModelProvider.WhereQ);
  } else {
    api = new ClientApi(ModelProvider.GPT);
  }
  useEffect(() => {
    (async () => {
      const models = await api.llm.models();
      config.mergeModels(models);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
```
