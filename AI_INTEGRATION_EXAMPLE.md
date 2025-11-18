# AI Integration Example with Next.js

This document shows how easy it is to add AI features to your Next.js app.

## Quick Start: AI Chat Feature

### 1. Install Dependencies

```bash
npm install ai @ai-sdk/openai openai
```

### 2. Create API Route (`app/api/chat/route.ts`)

```typescript
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  // Check authentication
  const session = await auth();
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Check rate limits (implement your own logic)
  // const rateLimit = await checkRateLimit(session.user.id)
  // if (!rateLimit.allowed) {
  //   return new Response('Rate limit exceeded', { status: 429 })
  // }

  const { messages } = await req.json();

  // Stream AI response
  const result = streamText({
    model: openai("gpt-4-turbo"),
    messages: [
      {
        role: "system",
        content: `You are an expert algorithm tutor. Help students understand 
        data structures and algorithms. Provide clear explanations, step-by-step 
        walkthroughs, and helpful hints. Never give away complete solutions - 
        guide students to discover answers themselves.`,
      },
      ...messages,
    ],
    maxTokens: 1000,
    temperature: 0.7,
  });

  // Track usage (optional)
  // await trackAIUsage(session.user.id, 'chat')

  return result.toDataStreamResponse();
}
```

### 3. Create Chat Component (`components/ai/ChatInterface.tsx`)

```typescript
"use client";

import { useChat } from "ai/react";
import { useState } from "react";

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  return (
    <div className="flex flex-col h-[600px] border rounded-lg">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 rounded-lg p-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75" />
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about algorithms..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
```

### 4. Use in Your Page (`app/learn/page.tsx`)

```typescript
import { ChatInterface } from "@/components/ai/ChatInterface";

export default function LearnPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">AI Algorithm Tutor</h1>
      <ChatInterface />
    </div>
  );
}
```

**That's it!** You now have a fully functional AI chat feature with:

- ✅ Streaming responses
- ✅ Authentication
- ✅ Type safety
- ✅ Beautiful UI

---

## Code Explanation Feature

### API Route (`app/api/explain/route.ts`)

```typescript
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { code, language } = await req.json();

  const result = streamText({
    model: openai("gpt-4-turbo"),
    system: `You are a code explanation expert. Explain code clearly, 
    step-by-step. Include time and space complexity analysis.`,
    messages: [
      {
        role: "user",
        content: `Explain this ${language} code:\n\n\`\`\`${language}\n${code}\n\`\`\``,
      },
    ],
  });

  return result.toDataStreamResponse();
}
```

### Component (`components/ai/CodeExplainer.tsx`)

```typescript
"use client";

import { useState } from "react";
import { useCompletion } from "ai/react";

export function CodeExplainer() {
  const [code, setCode] = useState("");
  const { completion, complete, isLoading } = useCompletion({
    api: "/api/explain",
  });

  const handleExplain = () => {
    complete("", {
      body: { code, language: "javascript" },
    });
  };

  return (
    <div className="space-y-4">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        className="w-full h-40 p-4 border rounded-lg font-mono"
      />
      <button
        onClick={handleExplain}
        disabled={isLoading || !code.trim()}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Explain Code
      </button>
      {completion && (
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold mb-2">Explanation:</h3>
          <div className="whitespace-pre-wrap">{completion}</div>
        </div>
      )}
    </div>
  );
}
```

---

## Code Review Feature

### API Route (`app/api/review/route.ts`)

```typescript
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function POST(req: Request) {
  const { code, problem } = await req.json();

  const { text } = await generateText({
    model: openai("gpt-4-turbo"),
    system: `You are a code reviewer. Review code for:
    1. Correctness
    2. Efficiency (time/space complexity)
    3. Code quality and best practices
    4. Potential bugs
    
    Be constructive and educational.`,
    messages: [
      {
        role: "user",
        content: `Review this code for problem: "${problem}"\n\n\`\`\`javascript\n${code}\n\`\`\``,
      },
    ],
  });

  return Response.json({ review: text });
}
```

---

## Advanced: Rate Limiting & Caching

### Rate Limiting Middleware (`lib/rate-limit.ts`)

```typescript
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
});

export async function checkRateLimit(
  userId: string,
  limit: number = 50,
  window: number = 86400 // 24 hours
): Promise<{ allowed: boolean; remaining: number }> {
  const key = `rate-limit:${userId}`;
  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, window);
  }

  return {
    allowed: current <= limit,
    remaining: Math.max(0, limit - current),
  };
}
```

### Caching AI Responses (`lib/ai-cache.ts`)

```typescript
import { Redis } from "@upstash/redis";
import crypto from "crypto";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
});

export async function getCachedResponse(prompt: string) {
  const hash = crypto.createHash("sha256").update(prompt).digest("hex");
  const key = `ai-cache:${hash}`;
  return await redis.get(key);
}

export async function cacheResponse(
  prompt: string,
  response: string,
  ttl: number = 86400
) {
  const hash = crypto.createHash("sha256").update(prompt).digest("hex");
  const key = `ai-cache:${hash}`;
  await redis.setex(key, ttl, response);
}
```

### Updated API Route with Caching

```typescript
import { getCachedResponse, cacheResponse } from "@/lib/ai-cache";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const prompt = messages[messages.length - 1].content;

  // Check cache first
  const cached = await getCachedResponse(prompt);
  if (cached) {
    return Response.json({ text: cached, cached: true });
  }

  // Generate new response
  const result = await generateText({
    model: openai("gpt-4-turbo"),
    messages,
  });

  // Cache response
  await cacheResponse(prompt, result.text);

  return Response.json({ text: result.text, cached: false });
}
```

---

## Cost Optimization Tips

1. **Use GPT-3.5 for simple queries, GPT-4 for complex ones**

```typescript
const model = isComplexQuery(messages)
  ? openai("gpt-4-turbo")
  : openai("gpt-3.5-turbo");
```

2. **Set max tokens to limit costs**

```typescript
maxTokens: 500, // Limit response length
```

3. **Implement user tiers**

```typescript
const model =
  user.subscription === "premium"
    ? openai("gpt-4-turbo")
    : openai("gpt-3.5-turbo");
```

4. **Cache common queries** (saves 60-80% on repeated questions)

---

## Next Steps

1. Add authentication checks
2. Implement rate limiting per user tier
3. Add usage tracking
4. Set up monitoring (LangSmith, Vercel Analytics)
5. Add error handling and retries
6. Implement fallback to cheaper models

---

## Resources

- [Vercel AI SDK Docs](https://sdk.vercel.ai/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Anthropic API Docs](https://docs.anthropic.com/)
