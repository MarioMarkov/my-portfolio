The introduction of a Bulgarian version of the popular Glue benchmark for LLMs, called "bgGlue" by scientists of the Sofia University, motivated me to try to train an LLM that I can evaluate against this benchmark. I looked into fine tuning a big model in the range of 3-7B, but ultimately I decided to start from the basics and the most basic model I could find, so that I have full controll over its training in order to see what works and what does not. 

That is why I choose the BERT model with a config that has 82M params which will allow me to pre-train it on a sigle GPU on google collab. 

1. The first important task was to get enogh data to train the model and the tokenizer. I got bulgarian data from a dataset with 10_000 books from chitanka and data from the bulgarian part of the common crawl dataset. I mainly used the former because the latter was littered with httml and non-sensical strings which polluted the data. 

2. The second task was to train a tokenizer from scratch on bulgarian data only, because many of the tokenizers for the popular model have been trained on primarly english data and can gropu english words into tokens, but for bulgarian ones the tokens represent mostly single letters. Training this tokenizer on bulgarian only shwed much better grouping of the strings into tokens that other models.

3. Tokenize the data with the new bulgarian-only tokenizer

3. Pre train the Bert model from scratch and find the most approparite configuration of the hyperparameters 

4. Evaluate it on the bgGlue benchmark - This suprisingly took a lot of time because of how complicated it was to run the benchmark. Which is one of the reasons in my opinion why only my model and one more were tested on it for the last 2 years. 

5. The resutls you can see on their website: https://bgglue.github.io/leaderboard/ .
My model came last, but I was actually suprised that such a small model got decent results on it and I am definetly motivated to train a better one with the things I learned to improve its result.