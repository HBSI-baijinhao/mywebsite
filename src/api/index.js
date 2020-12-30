import {get,post} from "@/utils/myAxios"
const Domain="/app"
export let api = {
    gettest:(url,params,config)=>get(params,config,url||`${Domain}/testStandard/list`),
    posttest:(url,params,config)=>post(url||`${Domain}/sys/register`,params,config)
}