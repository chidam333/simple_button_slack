export function POST({req}){
    console.log({req})
    const {payload} = req.body;
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
}