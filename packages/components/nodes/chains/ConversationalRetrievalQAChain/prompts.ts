export const default_qa_template = `Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer.

{context}

Question: {question}
Helpful Answer:`

export const qa_template = `Use the following pieces of context to answer the question at the end.

{context}

Question: {question}
Helpful Answer:`

export const default_map_reduce_template = `Given the following extracted parts of a long document and a question, create a final answer. 
If you don't know the answer, just say that you don't know. Don't try to make up an answer.

{summaries}

Question: {question}
Helpful Answer:`

export const map_reduce_template = `Given the following extracted parts of a long document and a question, create a final answer. 

{summaries}

Question: {question}
Helpful Answer:`

export const refine_question_template = (sysPrompt?: string) => {
    let returnPrompt = ''
    if (sysPrompt)
        returnPrompt = `Context information is below. 
---------------------
{context}
---------------------
Given the context information and not prior knowledge, ${sysPrompt}
Answer the question: {question}.
Answer:`
    if (!sysPrompt)
        returnPrompt = `Context information is below. 
---------------------
{context}
---------------------
Given the context information and not prior knowledge, answer the question: {question}.
Answer:`
    return returnPrompt
}

export const refine_template = `The original question is as follows: {question}
We have provided an existing answer: {existing_answer}
We have the opportunity to refine the existing answer (only if needed) with some more context below.
------------
{context}
------------
Given the new context, refine the original answer to better answer the question. 
If you can't find answer from the context, return the original answer.`

export const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `Given the following conversation and a follow up message from human, use the chat history to rephrase the follow up message from the human such that it could be treated as a standalone message from the human. 
If the follow up message is irrelevant with the chat history, just response back the follow up message as it is. Response in the same language as the follow up message and include it in the standalone message.

Chat History:
{chat_history}
Follow up input from human: {question}
Standalone message from human:`
