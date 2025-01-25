import { surpriseMePrompts } from "../constants";
import filesaver from 'file-saver'
export function getRandomPrompt(prompt){
    const randomindex = Math.floor(Math.random()*surpriseMePrompts.length)
    const randomPrompt  = surpriseMePrompts[randomindex]
   
   
   if(randomPrompt === prompt){
    return getRandomPrompt(prompt)
   }
   
    return randomPrompt
}


export async function downloadimage(_id, photo){
    filesaver.saveAs(photo,`download-${_id}.jpg`)
}