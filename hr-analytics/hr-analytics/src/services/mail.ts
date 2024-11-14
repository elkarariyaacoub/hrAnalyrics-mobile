'use server'

import axios from 'axios'

export async function sendEmailContact(data: any) {
    const resp = await axios.post('https://bottomline.ma/sendEmailContact', data)
    console.log(resp)
    return resp
}