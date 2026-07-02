CONTRX // Hybrid RAG Contract & Policy Review Agent

CONTRX is a lightweight, responsive, and privacy-conscious compliance assistant
designed to audit corporate policies, identify contractual risks, and propose
actionable compliance redrafts.

Powered by the IBM watsonx.ai ecosystem and integrated with live web factual
grounding, the application implements a hybrid search pipeline. It
cross-references localized document context with real-world, real-time legal and
regulatory standards to deliver accurate, context-aware risk audits while
mitigating standard LLM hallucinations.

🚀 Key Features & Architectural Highlights

1. Enterprise AI Orchestration (IBM watsonx.ai)

  - Core Language Model (ibm/granite-3-8b-instruct): Leverages IBM's
    high-efficiency, instruction-tuned Granite model. It is optimized for
    structural logical analysis, parsing complex legal/contractual terminology,
    and generating formatted policy redrafts.
  - Semantic Embeddings (ibm/slate-125m-english-rtrvr): Standardizes extracted
    text chunks into high-dimensional vector representations using Watsonx’s
    native retrieval-optimized embedding model.

2. High-Efficiency Local RAG Pipeline

  - Zero-Dependency Vector Store: Uses a custom-built Python vector engine
    calculating Cosine Similarity directly on the server. This bypasses the
    heavy binary compilation and deployment footprint of database dependencies
    like FAISS or Chroma.
  - Strict Session-Isolation: No user data is persistently stored in a shared
    external cloud database. Document chunks and embeddings are held temporarily
    in-memory (RAG_STORE) and are completely purged when the session resets or
    times out, protecting proprietary enterprise data.

3. Live Web-Search Fact Grounding

  - Tavily Search Integration: To counter standard model knowledge-cutoff and
    hallucination constraints, the agent dynamically crawls live legal and
    statutory databases (like GDPR revisions, SEC updates, or regional tax law
    amendments) and appends this context to the active prompt.

4. Native Document Ingestion

  - Multi-Format Extraction: Seamlessly parses plain-text structures from
    uploaded files using dedicated stream libraries (PyPDF2 and python-docx)
    directly in the serverless environment.
  - Visual File-Handling UI: Modern monochromatic layout utilizing native HTML
    <label> mapping to ensure responsive, cross-browser drag-and-drop file
    upload.

🛠️ Technology Stack

| Layer                  | Technologies Used                                                           |
| :--------------------- | :-------------------------------------------------------------------------- |
| **Generative AI**      | IBM watsonx.ai, `ibm/granite-3-8b-instruct`, `ibm/slate-125m-english-rtrvr` |
| **Search & Grounding** | Tavily Search API, Pure Python Cosine Similarity                            |
| **Backend Framework**  | Python, Flask, python-dotenv, PyPDF2, python-docx                           |
| **Frontend UI/UX**     | HTML5, CSS3 (System-adaptive Dark/Light mode), Vanilla JS, Marked.js        |
| **Cloud Deployment**   | Vercel Serverless Functions (`@vercel/python` runtime)                      |

💻 Local Setup & Installation

1. Clone the Repository

git clone https://github.com/your-username/contrx-agent.git
cd contrx-agent

2. Configure Environment Variables

Create a file named .env in the root directory:

FLASK_SECRET_KEY="generate_a_random_secure_string"
WATSONX_APIKEY="your_ibm_cloud_apikey"
WATSONX_PROJECT_ID="your_watsonx_project_id"
WATSONX_URL="https://us-south.ml.cloud.ibm.com"
TAVILY_API_KEY="your_tavily_search_api_key"

3. Install Dependencies

pip install -r requirements.txt

4. Run Locally

python app.py

Open your browser and navigate to http://127.0.0.1:5000.

☁️ Serverless Deployment (Vercel)

The project is structured to deploy smoothly using Vercel Serverless Functions.

1. Vercel Configuration (vercel.json)

Since LLM generations and live API queries can occasionally exceed Vercel's
default 10-second serverless execution limit, the project overrides the routing
engine and extends the execution window to Vercel's Hobby-tier maximum of 60
seconds:

{
  "version": 2,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/app.py"
    }
  ],
  "functions": {
    "app.py": {
      "maxDuration": 60
    }
  }
}

2. Environment Variables

Add your .env variables directly in your Vercel Project Settings → Environment
Variables dashboard before triggering the deployment.

🔒 Security Best Practices

To safeguard enterprise credentials, never commit your .env file to public
source control. Ensure a .gitignore file is active in your root repository with
the following configurations:

# Local environment variables
.env
.env.local

# Python caches
__pycache__/
*.pyc

# OS caches
.DS_Store

⚖️ Disclaimer

CONTRX is an administrative assistance tool powered by generative AI and
live-retrieved data. It is meant for administrative, organizational, and
preliminary review assistance only. It does not constitute formal legal
representation, binding compliance clearance, or formal legal advice.
