export function uid(prefix="id"){if(typeof crypto!=="undefined"&&"randomUUID" in crypto)return `${prefix}_${crypto.randomUUID()}`;return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;}
export function todayISO(){const d=new Date();const local=new Date(d.getTime()-d.getTimezoneOffset()*60000);return local.toISOString().slice(0,10)}
export function formatDate(value?:string){if(!value)return "";const d=new Date(`${value}T12:00:00`);return new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short"}).format(d)}
export function daysBetween(a:string,b:string){return Math.floor((new Date(`${b}T12:00:00`).getTime()-new Date(`${a}T12:00:00`).getTime())/86400000)}
export function priorityWeight(priority:"low"|"medium"|"high"){return priority==="high"?3:priority==="medium"?2:1}