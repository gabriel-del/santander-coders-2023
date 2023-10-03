const ApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0d3hidHdzZmd6amdyZXFhd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNDU2OTgsImV4cCI6MjAxMTcyMTY5OH0.SYOZEtkpU8sdd8dqIhJLaRZfOG5J50WB-khWUkO2I6w";

async function buscandoDados() {
  const res = await fetch(
    'https://xtwxbtwsfgzjgreqawla.supabase.co/rest/v1/products',
    {
      method: "GET",
      headers: {
        apikey: ApiKey,
        authorization: `Bearer ${ApiKey}`,
      },
    }
  );
  const data = await res.json();
  console.log(data);
}




async function postandoDados(dado) {
  const res = await fetch(
    'https://xtwxbtwsfgzjgreqawla.supabase.co/rest/v1/products',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=minimal",
        apikey: ApiKey,
        authorization: `Bearer ${ApiKey}`,
      },
      body: JSON.stringify(dado),
    }
  );
}

let dado = {
  // id: 4,
  name: "biscoito",
  price: 500
  // created_at: '2023-10-03T00:56:25.802884+00:00'
}

postandoDados(dado)
console.log("123")
buscandoDados();

