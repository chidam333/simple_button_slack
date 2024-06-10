import { error } from "@sveltejs/kit";
import {env} from "$env/dynamic/private"
export function POST({req}){
    console.log({req})
    const SLACK_TOKEN = env.SLACK_BOT_OAUTH_TOKEN;
    return new Response(String(env.SLACK_BOT_OAUTH_TOKEN))
}