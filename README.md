CONTRX — Contract Review Agent

AI-Powered Hybrid RAG Compliance & Contract Review System

IBM watsonx.ai • Granite Models • Hybrid RAG • Flask • Live Legal Grounding

IBM watsonx.ai × Granite Models × Flask

CONTRX is an AI-powered Contract Review Agent designed to analyze contracts,
corporate policies, NDAs, and compliance documents with speed and accuracy. It
combines IBM Granite foundation models with a Hybrid Retrieval-Augmented
Generation (RAG) pipeline to perform contextual risk analysis, suggest
compliance improvements, and generate professional policy redrafts. By
integrating live web-based legal grounding, the system reduces hallucinations
while providing accurate, up-to-date compliance insights in a secure,
privacy-first environment.

Features

Enterprise AI with IBM watsonx.ai

  - IBM Granite 3 8B Instruct (ibm/granite-3-8b-instruct)

      - Advanced legal reasoning
      - Contract clause interpretation
      - Risk analysis
      - Compliance-aware document redrafting

  - IBM Slate Embeddings (ibm/slate-125m-english-rtrvr)

      - Retrieval-optimized semantic embeddings
      - High-quality contextual document search
      - Accurate similarity matching for RAG

Hybrid RAG Architecture

  - Custom lightweight in-memory vector database
  - Cosine Similarity based semantic retrieval
  - Context-aware document chunking
  - No FAISS or Chroma dependency
  - Faster deployment with minimal resource usage

Live Legal Fact Grounding

Integrated with Tavily Search API to retrieve real-time legal and regulatory
information, enabling:

  - Updated compliance standards
  - Regulatory amendments
  - GDPR references
  - Corporate governance updates
  - Region-specific legal guidance

This significantly reduces LLM hallucinations by grounding responses with live
external knowledge.

Privacy-First Design

  - Session-isolated document processing
  - Temporary in-memory storage
  - No persistent cloud vector database
  - Automatic data cleanup after session expiration
  - Suitable for confidential enterprise documents

Native Document Processing

Supports multiple document formats including:

  - PDF
  - DOCX
  - TXT

Using:

  - PyPDF2
  - python-docx

Documents are automatically parsed, chunked, embedded, and indexed for semantic
retrieval.

Intelligent Contract Analysis

The agent can:

  - Detect risky clauses
  - Identify missing legal provisions
  - Highlight compliance issues
  - Suggest safer contractual language
  - Generate professional policy redrafts
  - Explain legal risks in natural language

Modern User Interface

  - Responsive monochrome design
  - Drag-and-drop document upload
  - Real-time AI analysis
  - Clean enterprise dashboard
  - Lightweight Flask backend

Technology Stack

Backend

  - Flask
  - Python

AI & Machine Learning

  - IBM watsonx.ai
  - IBM Granite 3 8B Instruct
  - IBM Slate Embedding Model
  - Hybrid Retrieval-Augmented Generation (RAG)

Search & Grounding

  - Tavily Search API

Document Processing

  - PyPDF2
  - python-docx

Frontend

  - HTML5
  - CSS3
  - JavaScript

System Workflow

Upload Document
        │
        ▼
Document Parsing
        │
        ▼
Text Chunking
        │
        ▼
IBM Slate Embeddings
        │
        ▼
In-Memory Vector Store
        │
        ▼
Cosine Similarity Retrieval
        │
        ▼
Live Tavily Legal Search
        │
        ▼
IBM Granite LLM
        │
        ▼
Risk Analysis + Compliance Report + Policy Redraft

IBM Technologies Used

  - IBM watsonx.ai
  - IBM Granite 3 8B Instruct
  - IBM Slate 125M English Retriever
  - IBM AI Foundation Models
  - IBM Developer Ecosystem

Key Advantages

  - Lightweight Hybrid RAG
  - Privacy-focused architecture
  - No external vector database
  - Real-time legal grounding
  - Enterprise-ready deployment
  - Fast semantic search
  - AI-powered compliance auditing
  - Explainable contract analysis

Future Enhancements

  - Multi-language contract support
  - Team collaboration
  - Version comparison
  - Clause-level annotations
  - Compliance score dashboard
  - Organization policy knowledge base
  - Role-based authentication
  - Audit history

License

This project is intended for educational, research, and enterprise AI
experimentation purposes.

Built with ❤️ using IBM watsonx.ai, Granite Models, Flask & Hybrid RAG

is this read mE cORRECT
