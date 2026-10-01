# AI Lead Qualification & Chat Agent — Bookkeeping, Tax & CFO Firm

![AI lead qualification and chat agent](images/01-cover.png)

An end-to-end AI system for **Norvia Advisory**, a bilingual bookkeeping,
tax, payroll and fractional CFO firm: every inquiry is validated, scored,
answered in the lead's own language and routed to the right person in
seconds, 24/7. Built on **n8n** and **Claude**, deployed in production.

**12/12** test leads routed correctly · **≈$0.004** AI cost per lead ·
**3–9 s** to respond · spam filtered at **$0** AI cost · **EN / ES**

*Norvia Advisory is a model brand, so no client data is exposed. The
workflows, infrastructure and results are real, measured on the deployed
system.*

**Live pages:** [landing page](https://trevinoadministracion-spec.github.io/ai-lead-qualification-system/) ·
[chat with Nora](https://trevinoadministracion-spec.github.io/ai-lead-qualification-system/chat.html)
— the AI back end runs on request (see [Live demo](#live-demo)).

---

## What it does

| | |
|---|---|
| **Lead pipeline** | Validates the form, filters spam before any AI call, checks for duplicates, scores the lead with Claude (hot / warm / cold), replies by email in the lead's language, alerts the team on Telegram and logs everything to a CRM. |
| **Nora, the chat agent** | A WhatsApp-style assistant that answers service questions, qualifies prospects over a real conversation with memory, books the discovery call and hands off to a human when needed. |
| **Warm-lead follow-up** | Context-aware follow-up emails for leads who showed interest but haven't booked yet. |
| **Error monitoring** | Retries, fallbacks and an independent alert channel, so a broken API key never makes leads disappear silently. |

## Meet Nora

![Nora, the conversational chat agent](images/03-chat-agent.png)

## How it works

![Four n8n workflows, one system](images/04-architecture.png)

**Stack:** n8n · Claude Haiku 4.5 (Anthropic) · Gmail · Google Sheets ·
Telegram · hand-written HTML/CSS/JS.

Two AI patterns, on purpose: the **form** is a single decision, so it uses
one structured AI call inside a deterministic pipeline; the **chat** is a
real back-and-forth, so it uses a conversational agent with memory. Both
go through the same safety gate before anything reaches a client.

## Built to be trusted

![The AI proposes, the code decides](images/05-guardrails.png)

- The client's message is treated as data, never as instructions, checked
  by the model and by a separate code filter.
- The AI never quotes prices or gives specific tax advice; those go to a
  licensed advisor on a discovery call.
- The final lead tier is recomputed in code, not taken from the model's word.
- 11 issues were caught in testing and a pre-launch audit, all fixed before
  launch. Details in the [case study](CASE_STUDY.md).

## Results

![Results on the deployed system](images/06-results.png)

Full test report with every lead, score and execution:
[tests/test-leads.md](tests/test-leads.md).

## Bilingual by design

![English or Spanish, automatically](images/07-bilingual.png)

## The landing page

![Premium bilingual landing page](images/02-landing.png)

## Live demo

The landing page and chat are published with GitHub Pages. To keep running
costs at zero, the AI back end is switched on **on request**: while it is
off, the chat replays a recorded real conversation (clearly labelled) and
the form shows an on-request notice. When it is on, the same pages talk to
the live agent, with usage caps in place.

## Want this for your business?

The n8n workflows, prompts and safety rules are not published here; they
are delivered to clients as part of an engagement and adapted to their
services, tools and CRM. To see the live demo or discuss a build, reach out
on Upwork.

More detail: **[Case study →](CASE_STUDY.md)**
