# LLM Foundations Speaker Script

This script covers slides 3 through 16 of the published deck, beginning with “Chatbot yourself” and ending with “Reasoning model, or standard?” It uses simple spoken English. Stage directions appear in brackets.

Estimated timing: about 16 minutes of explanation, plus 12 to 15 minutes for the polls and activities.

## Slide 3: Chatbot Yourself

Before we begin, let us try a quick experiment.

Open the chatbot you normally use. Ask it, “Who is [your name]?” Then look at the answer.

[Pause while participants try it.]

Does the answer describe you? Is anything wrong? Did the chatbot confuse you with someone else?

This gives us our first important lesson. A chatbot can give a confident answer even when it does not have reliable information. A fluent answer is not always a correct answer.

## Slide 4: LLM Foundations

In this section, we will look at the basic ideas behind large language models, or LLMs.

We do not need to study the mathematics today. Our goal is simpler. We want to understand what a language model does, what information it can use, and where it can make mistakes.

If we understand these basics, we can use AI more carefully.

## Slide 5: Quick Poll

First, a quick poll. Which AI tool do you use most?

ChatGPT? Claude? Gemini? Copilot? Perplexity? Another tool? Or are you not using one yet?

[Ask for a show of hands.]

These products are not all the same. They may use different models, tools, search systems, and privacy rules. However, the basic ideas we will discuss apply to most of them.

## Slide 6: Training

Language models are trained on very large collections of text. Depending on the model, the training data may include public internet data, licensed data, and other sources.

During pretraining, the model sees a sequence of tokens and tries to predict the next token. It checks how far its prediction was from the training example, adjusts its internal parameters, and repeats this process many times.

Through this process, it learns statistical patterns in language. It does not work like a simple database of facts. However, models can sometimes memorize exact training examples, so we should not say that they learn patterns only.

This is also why an LLM can produce a likely answer instead of a true answer.

## Slide 7: Tokens

Before a model processes text, a tokenizer breaks the text into pieces called tokens.

A token may be a whole word, part of a word, punctuation, or a few characters. The blocks on this slide are an illustration. The exact pieces depend on the tokenizer used by the model. For example, one model may keep “health” as one token, while another may split it.

Token count matters because models have token limits, and many AI services also calculate cost by token.

## Slide 8: Prediction

When an LLM writes an answer, it usually generates one token at a time.

For example, after “The cat sat on the,” the model gives possible next tokens different probabilities. “Mat” may be likely. “Floor” may also be possible. The percentages on this slide are only an example. They are not measurements from a specific model.

The model selects a token, adds it to the text, and then predicts the next one. It repeats this process until the answer is complete.

This process can produce very fluent writing. But fluency is not proof of accuracy.

## Slide 9: Context

The context window is the model's working space for one request.

It can include your current message, earlier messages, system instructions, files, and tool results. The size is measured in tokens, and the limit varies by model.

When a conversation becomes too large, the application may remove old content, summarize it, or retrieve only selected parts. This means the model can miss or forget an earlier detail.

For important work, repeat the key context and check that the model is still using the correct source.

## Slide 10: How You Reach AI

There are several ways to use an AI model.

A chatbot is good for direct conversation. A desktop app adds an interface on your computer. A command-line tool can work with files and run commands, but only through the access and permissions it receives. An API lets software send many repeatable requests. A local model runs on your own hardware.

Many chatbots, desktop apps, command-line tools, and APIs connect to cloud-hosted models. However, they do not always use the same model. They may also use different instructions, tools, and data settings.

A local model can keep prompts and files on the device when it is properly configured and used offline. But local use does not automatically make a system secure or compliant. For sensitive data, we still need approved software, access controls, security checks, and organizational approval.

## Slide 11: Which Way Fits the Job?

Let us apply these ideas to three examples.

[Read scenario 1 and ask for answers.]

For 8,000 survey answers, an API is a good option because the task is large and repeatable. We should first check for sensitive information, test the process on a sample, and review the results.

[Reveal scenario 1. Read scenario 2 and ask for answers.]

For a line list with names and addresses, do not use an unapproved consumer chatbot. An approved local or on-premises system may be an option, but only if the organization has the right security and governance in place.

[Reveal scenario 2. Read scenario 3 and ask for answers.]

For one plain-language summary, a chatbot is convenient. Give it the official guideline as the source, then compare every important claim with that source before sharing the summary.

## Slide 12: Model Types

We can compare models in several ways. This slide uses two: size and specialization.

Larger frontier models are often more capable, but they may require more computing power, time, and money. Smaller models are often faster and cheaper. Some can run on local hardware.

General-purpose models can handle many different tasks. Domain-specific models are trained or tuned for a field, such as medicine.

A domain-specific model may perform better on some tasks in its field. That is not guaranteed. We still need to test it on our own task and data.

## Slide 13: Model Examples

ChatGPT, Claude, and Gemini are examples of general AI products. Each product may offer more than one underlying model.

Llama, Mistral, and Gemma are model families. They include models of different sizes, so not every model in these families is small. Many are open-weight models. This means people can download the model weights under a license. Open-weight does not always mean fully open-source.

MedGemma, Meditron, and BioMistral are examples of models developed for medical or biomedical work. They can be useful starting points, but they are not automatically safe or accurate for clinical decisions. They need task-specific testing and human review.

## Slide 14: Which Model for Which Public Health Task?

Now let us match each model type to a task.

[Read the first card and ask for an example.]

A large general model can help draft a plain-language explanation of a new guideline. We still need to give it the official source and verify the final text.

[Reveal the first card. Read the second card and ask for an example.]

A small local model may help summarize sensitive data in an approved local environment. Local processing reduces data transfer, but it does not replace privacy, security, and governance requirements.

[Reveal the second card. Read the third card and ask for an example.]

A medical model may help extract diagnoses or findings from clinical notes. Before using it in practice, we must test its accuracy on representative data and have qualified people review the output.

## Slide 15: Reasoning Models

Some models use extra internal reasoning before they produce a final answer.

This can help with difficult tasks that have several steps, such as analyzing a study design, planning an investigation, or working through a calculation. These models may take more time and use more computing resources.

A standard model is often enough for a direct task, such as rewriting a short paragraph in plain language.

Reasoning models can still make mistakes. For calculations, use a calculator or code when possible, and check the inputs and results. For medical questions, use the model to support expert thinking, not replace it.

## Slide 16: Reasoning Model, or Standard?

Let us finish with three examples.

[Read scenario 1 and ask for answers.]

Estimating attack rate and doubling time is a multi-step task, so a reasoning model can help. It is even better to use code or a calculator and verify the dates, definitions, and denominator.

[Reveal scenario 1. Read scenario 2 and ask for answers.]

Rewriting vaccine guidance is a direct language task, so a standard model is usually enough. The final wording still needs to match the official guidance.

[Reveal scenario 2. Read scenario 3 and ask for answers.]

Working through possible causes of a symptom cluster is a multi-step task, so a reasoning model may help organize the possibilities. It should support hypothesis generation only. It should not make the diagnosis or replace clinical and public health review.

[Reveal scenario 3.]

The main lesson is simple: choose the model and the way of using it based on the task, the data, and the level of risk.

## Accuracy Changes Recommended for the Slides

The spoken script above corrects several over-simplifications in the current slides. For the visual content to be accurate too, use these replacements:

1. **Training headline:** “Trained on large datasets that may include public internet data, licensed data, and other sources, it learned to predict the next token.”
2. **Training card:** “It mainly learned statistical patterns, although models can sometimes memorize exact text.”
3. **Prediction headline:** Replace “one word at a time” with “one token at a time.” Add “Illustrative probabilities” above the bar chart.
4. **Access headline:** “Many ways of reaching AI connect to cloud-hosted models, but not always the same model.”
5. **Local caption:** “Can run on your computer and work offline. Privacy and capability depend on the model and setup.”
6. **Model type cards:** Use “often” and “some” instead of making universal claims about speed, cost, cloud use, and local use.
7. **Model examples:** Replace “Small & open” with “Open-weight model families.” Add “Available in different sizes.”
8. **Reasoning headline:** “Some models use internal reasoning before the final answer, which can help on hard multi-step tasks.”
9. **Sensitive and medical examples:** Add a short footer: “Use only approved systems. De-identify when possible. Validate outputs and follow organizational policies.”

## Fact-Check Sources

- The [GPT-4 Technical Report](https://cdn.openai.com/papers/gpt-4.pdf) describes next-token pretraining and a mix of public and licensed data.
- The [SentencePiece paper](https://aclanthology.org/D18-2012/) explains subword tokenization. OpenAI's [token guide](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) gives accessible examples of tokens as characters, word parts, or whole words.
- The USENIX paper [Extracting Training Data from Large Language Models](https://www.usenix.org/conference/usenixsecurity21/presentation/carlini-extracting) demonstrates that language models can memorize and reproduce some training examples.
- OpenAI's [reasoning model guide](https://developers.openai.com/api/docs/guides/reasoning) explains internal reasoning tokens, multi-step tasks, latency, and token use.
- Official [Gemma documentation](https://ai.google.dev/gemma/docs) and [Mistral deployment documentation](https://docs.mistral.ai/models/deployment) show that open-weight model families span multiple sizes and deployment options.
- The [MedGemma model card](https://developers.google.com/health-ai-developer-foundations/medgemma/model-card) says that outputs require independent verification and are not intended to directly guide diagnosis, treatment, or patient management without appropriate validation and adaptation.
- [LM Studio's offline documentation](https://lmstudio.ai/docs/app/offline) distinguishes local offline inference from features that still require network access.
