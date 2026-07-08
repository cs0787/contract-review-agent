# CONTRX — Contract Review Agent

<div align="center">

### AI-Powered Hybrid RAG Compliance & Contract Review System

**IBM watsonx.ai • Granite Models • Hybrid RAG • Vercel • Neon Postgres • Live Legal Grounding**

</div>

---

## IBM watsonx.ai × Granite Models × Vercel × Neon.tech

CONTRX is an AI-powered Contract Review Agent designed to analyze contracts, corporate policies, NDAs, and compliance documents with speed and accuracy. It combines IBM Granite foundation models with a Hybrid Retrieval-Augmented Generation (RAG) pipeline to perform contextual risk analysis, suggest compliance improvements, and generate professional policy redrafts. By integrating serverless SQL storage with Neon.tech and live web-based legal grounding, the system maintains consistent state across Vercel deployments while reducing hallucinations with up-to-date compliance insights.

---

# Features

## Enterprise AI with IBM watsonx.ai

- **IBM Granite 3 8B Instruct** (`ibm/granite-3-8b-instruct`)
  - Advanced legal reasoning
  - Contract clause interpretation
  - Risk analysis
  - Compliance-aware document redrafting

- **IBM Slate Embeddings** (`ibm/slate-125m-english-rtrvr`)
  - Retrieval-optimized semantic embeddings
  - High-quality contextual document search
  - Accurate similarity matching for RAG

---

## Hybrid RAG Architecture

- Custom lightweight vector RAG pipeline
- Cosine Similarity based semantic retrieval (calculated in active server RAM)
- Context-aware document chunking (overlapping sliding window)
- No complex FAISS, Chroma, or database vector extension dependencies
- Fully decoupled serverless deployment utilizing lightweight REST APIs

---

## Live Legal Fact Grounding

Integrated with **Tavily Search API** to retrieve real-time legal and regulatory information, enabling:

- Updated compliance standards
- Regulatory amendments
- GDPR / SEC references
- Corporate governance updates
- Region-specific legal guidance

This significantly reduces LLM hallucinations by grounding responses with live external knowledge.

---

## Cloud-Backed Stateless Design

- **Serverless-Ready State:** Fully integrated with Neon.tech Serverless PostgreSQL to persist session history, chunks, and embeddings across ephemeral serverless environments.
- **Privacy-First:** Secure, session-isolated data handling. Data can be cleared at any time using the workspace "Reset" interface, which completely wipes the database records.
- **Zero-DB Vector Engine:** Rather than hosting a costly cloud vector database, embeddings are stored as standard serialized JSON and processed directly using Python math utilities, saving compute costs.

---

## Native Document Processing

Supports multiple document formats including:

- PDF
- DOCX
- TXT

Using:

- pypdf (modern, high-fidelity PDF parser)
- python-docx

Documents are automatically parsed, chunked, embedded, and indexed for semantic retrieval.

---

## Intelligent Contract Analysis

The agent can:

- Detect risky clauses
- Identify missing legal provisions
- Highlight compliance issues
- Suggest safer contractual language
- Generate professional policy redrafts
- Explain legal risks in natural language

---

## Modern User Interface

- Responsive monochromatic design (inspired by the Neon.tech dark-console theme)
- Integrated 3 MB frontend file-size safeguard to prevent serverless payload timeout blocks
- Drag-and-drop document upload
- Real-time AI analysis
- Clean enterprise dashboard

---

# Technology Stack

### Backend & Host

- Flask (Python)
- Vercel Serverless Functions

### Database & Persistence

- Neon.tech Serverless PostgreSQL
- psycopg2-binary (Postgres Adapter)

### AI & Machine Learning

- IBM watsonx.ai
- IBM Granite 3 8B Instruct
- IBM Slate Embedding Model
- Hybrid Retrieval-Augmented Generation (RAG)

### Search & Grounding

- Tavily Search API

### Document Processing

- pypdf
- python-docx

### Frontend

- HTML5
- CSS3 (Monochrome Grid Layout)
- JavaScript (Vanilla ES6)

---
---

# IBM Technologies Used

- IBM watsonx.ai
- IBM Granite 3 8B Instruct
- IBM Slate 125M English Retriever
- IBM AI Foundation Models
- IBM Developer Ecosystem

---

# Key Advantages

- Lightweight Hybrid RAG
- Stateless cloud-backed architecture
- No external vector database cost
- Real-time legal grounding
- Enterprise-ready serverless deployment
- Fast semantic search
- AI-powered compliance auditing
- Explainable contract analysis

---

# Future Enhancements

- Multi-language contract support
- Team collaboration
- Version comparison
- Clause-level annotations
- Compliance score dashboard
- Organization policy knowledge base
- Role-based authentication
- Audit history

---


</div>
# System Workflow
Upload Document (Browser Guard: < 3 MB)
                    │
                    ▼
            Document Parsing
                    │
                    ▼
              Text Chunking
                    │
                    ▼
         IBM Slate Embeddings (RAG)
                    │
                    ▼
    Save State to Neon Serverless Postgres
                    │
                    ▼
       User Query / Chat Triggered
                    │
                    ▼
   Cosine Similarity Search (In-Memory RAM)
                    │
                    ▼
   Conditional Live Tavily Web Search
                    │
                    ▼
             IBM Granite LLM
                    │
                    ▼
