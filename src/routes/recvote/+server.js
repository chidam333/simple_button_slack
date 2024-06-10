export async function POST({url}){
    let payload = url.searchParams.get('payload');
    console.log({payload})
    // console.log({request})
    // const {payload} = req;
    // const actionPayload = JSON.parse(payload)
    // let data = {
    //     text: "✅ Your response recorded",
    //     replace_original: true
    // };
    // fetch(actionPayload.response_url,{
    //     method:"post",
    //     body:JSON.stringify(data),
    //     headers:{'Content-Type':'application/json'}
    // }
    // )
    // return new Response(String("ok"))
    return new Response(String(payload))
}