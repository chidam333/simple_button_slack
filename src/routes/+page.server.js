export const actions = {
    default: async(event)=>{
        console.log("lol")
        let block_data = {
        "blocks": [
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": "option 1"
                        },
                        "style": "primary",
                        "value": "click_me_123"
                    },
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": "option 2"
                        },
                        "style": "primary",
                        "value": "click_me_123"
                    }
                ]
            }
        ]
        }
        fetch('https://hooks.slack.com/services/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',{
            method:'post',
            body:JSON.stringify(block_data),
            headers:{'Content-Type':'application/json'}
        })
        return {success:true}
    }
}