import {env} from "$env/dynamic/private"

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
        fetch(env.SLACK_WEBHOOK,{
            method:'post',
            body:JSON.stringify(block_data),
            headers:{'Content-Type':'application/json'}
        })
        return {success:true}
    }
}