'use server'

import axios from 'axios'

export async function sendEmailContact(data: any) {
    const resp = await axios.post('https://hranalytics-back.onrender.com/sendEmailContact', data)
    console.log(resp)
    return resp
}