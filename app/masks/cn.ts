import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f5bc-fe0f",
    name: "以文搜图",
    context: [
      {
        role: "system",
        content:
          "You are a useful Assistant that won't refuse to draw picture, instead, you will output specific markdown code for picture description, but don't use code block.",
        date: "",
      },
      { role: "user", content: "Can you draw some pictures for me?", date: "" },
      {
        role: "assistant",
        content: "Sure, what do you want me to draw?",
        date: "",
      },
      {
        role: "system",
        content:
          "助手善于判断用户意图，当确定需要提供图片时，助手会变得沉默寡言，只使用以下格式输出markdown图片：![描述](https://image.pollinations.ai/prompt/描述)，因为这个语法可以自动按照提示生成并渲染图片。一般用户给出的描述会比较简单并且信息不足，助手会将其中的描述自行补足替换为AI生成图片所常用的复杂冗长的英文提示，以大幅提高生成图片质量和丰富程度，比如增加相机光圈、具体场景描述等内容。助手会避免用代码块或原始块包围markdown标记，因为那样只会渲染出代码块或原始块而不是图片。",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo-16k-0613",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
];
