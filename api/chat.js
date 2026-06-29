import formidable from 'formidable';
import fs from 'fs';
import fetch from 'node-fetch';

export const config = {
  api: {
    bodyParser: false, // needed for file uploads
  },
};

const WXO_API_KEY      = process.env.WXO_API_KEY;
const WXO_INSTANCE_URL = process.env.WXO_INSTANCE_URL;
const AGENT_ID         = process.env.WXO_AGENT_ID;

async function getToken() {
  const res = await fetch('https://iam.cloud.ibm.com/identity/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${WXO_API_KEY}`
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('Failed to get IBM token: ' + JSON.stringify(data));
  return data.access_token;
}

async function createSession(token) {
  const res = await fetch(`${WXO_INSTANCE_URL}/v1/agents/${AGENT_ID}/sessions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  });
  const data = await res.json();
  if (!data.session_id) throw new Error('Failed to create session: ' + JSON.stringify(data));
  return data.session_id;
}

async function sendToAgent(token, sessionId, message) {
  const res = await fetch(
    `${WXO_INSTANCE_URL}/v1/agents/${AGENT_ID}/sessions/${sessionId}/message`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: {
          message_type: 'text',
          text: message
        }
      })
    }
  );
  return res.json();
}

export default async function handler(req, res) {
  // CORS headers — replace * with your frontend domain in production
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // parse the multipart form (message + optional file)
    const form = formidable({ maxFileSize: 10 * 1024 * 1024 }); // 10MB limit
    const [fields, files] = await form.parse(req);

    const userMessage = fields.message?.[0] || 'Review this contract';
    let fullPrompt = userMessage;

    // if a file was uploaded, read it and prepend to the prompt
    if (files.file?.[0]) {
      const filePath = files.file[0].filepath;
      const fileText = fs.readFileSync(filePath, 'utf-8');
      fullPrompt = `CONTRACT DOCUMENT:\n\n${fileText}\n\n---\n\nUSER REQUEST: ${userMessage}`;
      fs.unlinkSync(filePath); // clean up temp file
    }

    const token     = await getToken();
    const sessionId = await createSession(token);
    const response  = await sendToAgent(token, sessionId, fullPrompt);

    const reply = response.output?.text?.[0]
      ?? response.result?.output?.generic?.[0]?.text
      ?? 'No response from agent';

    res.status(200).json({ reply, sessionId });

  } catch (err) {
    console.error('Handler error:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
}