export async function POST({request}){
    let url =  new URLSearchParams(request.text());
    let payload = url.get("payload")
    const actionPayload = JSON.parse(payload)
    let data = {
        text: "✅ Your response recorded",
        replace_original: true
    };
    fetch(actionPayload.response_url,{
        method:"post",
        body:JSON.stringify(data),
        headers:{'Content-Type':'application/json'}
    }
    )
    return new Response(String("ok"))
    // return new Response(String(url))
}