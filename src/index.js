async function readRequestBody(request) {
  return await request.json();
}


addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method === "POST") {
    return event.respondWith(handleRequest(request));
  }
});

async function handleRequest(request) {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405
    });
  }
  const reqBody = await readRequestBody(request);
  const response = await createContact(reqBody).then(res => res.json())
  return new Response(JSON.stringify(response));
}

var createContact = (data) => {
  return fetch(`https://api.hubapi.com/contacts/v1/contact/?hapikey=eu1-f324-a17a-4f23-863d-46e9de4ef4f0`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Authorization": `Bearer ${HSPOT_API_KEY}`,
      "Content-type": `application/json`,
      "Accept": "application/json"
    }
  });
};