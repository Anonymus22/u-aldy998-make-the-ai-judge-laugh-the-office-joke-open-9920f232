# officejoke2 — Make the AI Judge Laugh: the Office Joke Open

[![Make.fun](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/Anonymus22/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/Anonymus22/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

A single original joke about office life, written for the
[Make the AI Judge Laugh: the Office Joke Open](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
competition on [make.fun](https://make.fun).

## The joke

> I hit reply-all to ask everyone to stop hitting reply-all, and now 47 people have replied-all to agree with me.

## How it works

`main.ts` (Node 22, stdlib only, no network, no secrets) writes the joke —
one line, 1–200 characters — to `entry.txt` in `$MAKEFUN_OUTPUT_DIR`
(default `/output`), then reads the file back and verifies the written bytes
match exactly.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
